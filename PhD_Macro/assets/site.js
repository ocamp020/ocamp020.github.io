(function () {
  const navUrl = "/PhD_Macro/assets/nav.json";

  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function typeClass(type) {
    if (type === "abstract" || type === "info" || type === "example" || type === "note" || type === "assumption") {
      return type;
    }
    return "note";
  }

  function convertInternalLinks(markdown) {
    markdown = markdown.replace(/href="([^"]+)\.md(#[^"]*)?"/g, function (_, target, hash) {
      return 'href="' + target + '.html' + (hash || "") + '"';
    });
    markdown = markdown.replace(/\]\(([^)\s]+)\.md(#[^)]+)?\)/g, function (_, target, hash) {
      return "](" + target + ".html" + (hash || "") + ")";
    });
    return markdown;
  }

  function protectInlineDollarMath(text, stash) {
    let out = "";
    let i = 0;

    while (i < text.length) {
      const char = text[i];
      const prev = i > 0 ? text[i - 1] : "";
      if (char === "$" && prev !== "\\" && text[i + 1] !== "$") {
        let j = i + 1;
        while (j < text.length) {
          if (text[j] === "\n") {
            j = -1;
            break;
          }
          if (text[j] === "$" && text[j - 1] !== "\\" && text[j + 1] !== "$") {
            break;
          }
          j += 1;
        }
        if (j > i && j < text.length && text[j] === "$") {
          out += stash(text.slice(i, j + 1));
          i = j + 1;
          continue;
        }
      }
      out += char;
      i += 1;
    }

    return out;
  }

  function protectMath(markdown) {
    const mathBlocks = [];
    const stash = (value) => {
      const token = "@@MATH" + mathBlocks.length + "@@";
      mathBlocks.push(value);
      return token;
    };

    let text = markdown;
    text = text.replace(/\\begin\{(align\*?|equation\*?|gather\*?|multline\*?|eqnarray\*?|cases|split)\}[\s\S]*?\\end\{\1\}/g, stash);
    text = text.replace(/\\\[[\s\S]*?\\\]/g, stash);
    text = text.replace(/\$\$[\s\S]*?\$\$/g, stash);
    text = text.replace(/\\\([\s\S]*?\\\)/g, stash);
    text = protectInlineDollarMath(text, stash);
    return { text, mathBlocks };
  }

  function restoreMath(html, mathBlocks) {
    return html.replace(/@@MATH(\d+)@@/g, function (_, index) {
      return mathBlocks[Number(index)] || "";
    });
  }

  function renderMarked(markdown) {
    const protectedMath = protectMath(markdown);
    return restoreMath(marked.parse(protectedMath.text), protectedMath.mathBlocks);
  }

  function renderInlineMarkdown(markdown) {
    const html = renderMarked(markdown).trim();
    const singleParagraph = html.match(/^<p>([\s\S]*)<\/p>$/);
    return singleParagraph ? singleParagraph[1] : html;
  }

  function dedent(lines) {
    return lines
      .map((line) => {
        if (line.startsWith("    ")) {
          return line.slice(4);
        }
        if (line.startsWith("\t")) {
          return line.slice(1);
        }
        return line;
      })
      .join("\n");
  }

  function parseSegments(markdown) {
    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    const segments = [];
    let buffer = [];
    let i = 0;

    function flushBuffer() {
      if (buffer.length) {
        segments.push({ type: "markdown", body: buffer.join("\n") });
        buffer = [];
      }
    }

    while (i < lines.length) {
      const line = lines[i];
      const match = line.match(/^(\!\!\!|\?\?\?)\s+([A-Za-z0-9_-]+)\s+"([^"]+)"\s*$/);
      if (!match) {
        buffer.push(line);
        i += 1;
        continue;
      }

      flushBuffer();
      const bodyLines = [];
      i += 1;

      while (i < lines.length) {
        const next = lines[i];
        if (next.trim() === "") {
          bodyLines.push("");
          i += 1;
          continue;
        }
        if (next.startsWith("    ") || next.startsWith("\t")) {
          bodyLines.push(next);
          i += 1;
          continue;
        }
        break;
      }

      segments.push({
        type: match[1] === "???" ? "details" : "callout",
        style: match[2],
        title: match[3],
        body: dedent(bodyLines).trim()
      });
    }

    flushBuffer();
    return segments;
  }

  function renderCallout(segment) {
    const bodyHtml = segment.body ? renderMarkdown(segment.body) : "";
    const titleHtml = renderInlineMarkdown(segment.title);
    if (segment.type === "details") {
      return (
        '<details class="course-proof">' +
        '<summary>' + titleHtml + "</summary>" +
        '<div class="course-callout-body">' + bodyHtml + "</div>" +
        "</details>"
      );
    }

    return (
      '<section class="course-callout is-' + typeClass(segment.style) + '">' +
      '<div class="course-callout-title">' + titleHtml + "</div>" +
      '<div class="course-callout-body">' + bodyHtml + "</div>" +
      "</section>"
    );
  }

  function renderMarkdown(markdown) {
    const segments = parseSegments(convertInternalLinks(markdown));
    return segments
      .map((segment) => {
        if (segment.type === "markdown") {
          return renderMarked(segment.body);
        }
        return renderCallout(segment);
      })
      .join("");
  }

  function enhanceMermaid(container) {
    const blocks = Array.from(container.querySelectorAll("pre code.language-mermaid"));
    blocks.forEach((code) => {
      const pre = code.parentElement;
      const wrapper = document.createElement("pre");
      wrapper.className = "mermaid";
      wrapper.textContent = code.textContent;
      pre.replaceWith(wrapper);
    });

    if (typeof mermaid !== "undefined") {
      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        themeVariables: {
          primaryColor: "#f5efe4",
          primaryTextColor: "#17352c",
          primaryBorderColor: "#ad6c33",
          lineColor: "#17352c",
          tertiaryColor: "#fffdf7"
        }
      });
      mermaid.run({ nodes: container.querySelectorAll(".mermaid") });
    }
  }

  function enhanceMath(container) {
    if (!window.MathJax) {
      return;
    }

    const startup = window.MathJax.startup && window.MathJax.startup.promise
      ? window.MathJax.startup.promise
      : Promise.resolve();

    startup
      .then(() => {
        if (window.MathJax.typesetPromise) {
          return window.MathJax.typesetPromise([container]);
        }
        return Promise.resolve();
      })
      .catch((error) => console.error(error));
  }

  function enhancePartMeta(container) {
    const firstBlockquote = container.querySelector("blockquote");
    if (!firstBlockquote) {
      return;
    }

    const text = firstBlockquote.textContent.trim();
    if (!text.startsWith("Part:")) {
      return;
    }

    const meta = document.createElement("div");
    meta.className = "course-page-meta";
    meta.textContent = text.replace(/^Part:\s*/, "");
    firstBlockquote.replaceWith(meta);
  }

  function buildSidebar(nav, currentPath) {
    const sidebar = document.getElementById("course-sidebar");
    if (!sidebar) {
      return;
    }

    const partsHtml = nav.parts
      .map((part) => {
        const partActive = part.url === currentPath ? "is-active" : "";
        const links = part.sections
          .map((section) => {
            const active = section.url === currentPath ? "is-active" : "";
            return '<li><a class="' + active + '" href="' + section.url + '">' + escapeHtml(section.title) + "</a></li>";
          })
          .join("");
        return (
          '<section class="course-sidebar-part">' +
          '<h3 class="course-sidebar-part-title"><a class="course-sidebar-part-link ' + partActive + '" href="' + part.url + '">' + escapeHtml(part.title) + "</a></h3>' +
          '<ul class="course-sidebar-list">' + links + "</ul>" +
          "</section>"
        );
      })
      .join("");

    sidebar.innerHTML =
      '<p class="course-sidebar-heading">Course Map</p>' +
      partsHtml +
      '<div class="course-sidebar-resources">' +
      '<p class="course-sidebar-heading">Materials</p>' +
      '<a class="course-chip" href="/PhD_Macro/Ocampo-Macro_Notes.pdf">Notes PDF</a>' +
      '<a class="course-chip" href="/PhD_Macro/Ocampo-Macro_Problems.pdf">Problem Sets PDF</a>' +
      '<a class="course-chip" href="/PhD_Macro/9604_syllabus.pdf">Syllabus</a>' +
      "</div>";
  }

  function setPrevNext(nav, currentPath) {
    const container = document.getElementById("course-prev-next");
    if (!container) {
      return;
    }

    const pages = nav.parts.flatMap((part) => part.sections);
    const index = pages.findIndex((page) => page.url === currentPath);
    if (index < 0) {
      container.innerHTML = "";
      return;
    }

    const prev = index > 0 ? pages[index - 1] : null;
    const next = index < pages.length - 1 ? pages[index + 1] : null;

    function card(label, page) {
      if (!page) {
        return '<div class="is-empty"></div>';
      }
      return (
        '<a href="' + page.url + '">' +
        '<span class="course-prev-next-label">' + label + "</span>" +
        '<span class="course-prev-next-title">' + escapeHtml(page.title) + "</span>" +
        "</a>"
      );
    }

    container.innerHTML = card("Previous", prev) + card("Next", next);
  }

  async function loadNav() {
    const response = await fetch(navUrl, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Unable to load navigation");
    }
    return response.json();
  }

  async function renderArticle() {
    const article = document.querySelector("[data-markdown-path]");
    if (!article) {
      return;
    }

    try {
      const response = await fetch(article.dataset.markdownPath, { cache: "no-store" });
      if (!response.ok) {
        article.innerHTML =
          "<p>Unable to load this section.</p>" +
          "<p><strong>Check:</strong> the local server root and the markdown path for this page.</p>";
        return;
      }

      const markdown = await response.text();
      article.innerHTML = renderMarkdown(markdown);
      enhancePartMeta(article);
      enhanceMermaid(article);
      enhanceMath(article);
    } catch (error) {
      console.error(error);
      article.innerHTML =
        "<p>Unable to render this section.</p>" +
        "<p><strong>Likely causes:</strong> the markdown fetch failed, or a required script such as <code>marked</code> did not load.</p>";
    }
  }

  function bindSearch() {
    const input = document.getElementById("course-search-input");
    if (!input) {
      return;
    }

    const cards = Array.from(document.querySelectorAll(".course-section-link"));
    const empty = document.getElementById("course-empty-state");
    const apply = () => {
      const needle = input.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        const match = !needle || text.includes(needle);
        card.style.display = match ? "" : "none";
        if (match) {
          visible += 1;
        }
      });
      if (empty) {
        empty.hidden = visible !== 0;
      }
    };
    input.addEventListener("input", apply);
    apply();
  }

  async function init() {
    marked.setOptions({ gfm: true, breaks: false, headerIds: false, mangle: false });

    try {
      const nav = await loadNav();
      const currentPath = window.location.pathname.replace(/\/index\.html$/, "/");
      buildSidebar(nav, currentPath);
      setPrevNext(nav, currentPath);
    } catch (error) {
      console.error(error);
    }

    try {
      await renderArticle();
    } catch (error) {
      console.error(error);
    }
    bindSearch();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
