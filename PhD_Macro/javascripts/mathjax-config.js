window.MathJax = {
  startup: {
    pageReady: () => MathJax.startup.defaultPageReady().then(() => {
      const displays = Array.from(document.querySelectorAll(
        '.md-typeset mjx-container[jax="CHTML"][display="true"]'
      ));

      const update = (display) => {
        const overflowing = display.scrollWidth > display.clientWidth + 1;
        if (overflowing && !display.hasAttribute("tabindex")) {
          display.dataset.courseScroll = "";
          display.tabIndex = 0;
          display.setAttribute("role", "region");
          display.setAttribute("aria-label", "Equation, scroll horizontally");
        } else if (!overflowing && display.hasAttribute("data-course-scroll")) {
          delete display.dataset.courseScroll;
          display.removeAttribute("tabindex");
          display.removeAttribute("role");
          display.removeAttribute("aria-label");
        }
      };

      const updateAll = () => displays.forEach(update);
      updateAll();
      if (window.ResizeObserver) {
        const observer = new ResizeObserver((entries) => {
          entries.forEach(({target}) => update(target));
        });
        displays.forEach((display) => observer.observe(display));
      } else {
        window.addEventListener("resize", updateAll, {passive: true});
      }
      if (document.fonts) {
        document.fonts.ready.then(updateAll);
      }
    })
  },
  loader: {
    load: ["[tex]/mathtools"]
  },
  tex: {
    packages: {"[+]": ["mathtools"]},
    processEscapes: true,
    processEnvironments: true
  },
  chtml: {
    displayAlign: "center",
    displayIndent: "0"
  }
};
