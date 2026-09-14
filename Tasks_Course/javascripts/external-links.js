function configureNewWindowLinks() {
  document.querySelectorAll("a[href]").forEach((link) => {
    const rawHref = link.getAttribute("href");
    if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("mailto:")) {
      return;
    }

    const url = new URL(rawHref, window.location.href);
    const isExternal = url.origin !== window.location.origin;
    const isPdf = url.pathname.toLowerCase().endsWith(".pdf");
    if (isExternal || isPdf) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
}

if (typeof document$ !== "undefined") {
  document$.subscribe(configureNewWindowLinks);
} else {
  document.addEventListener("DOMContentLoaded", configureNewWindowLinks);
}
