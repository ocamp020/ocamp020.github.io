window.MathJax = {
  loader: {
    load: ["[tex]/mathtools"]
  },
  tex: {
    packages: {"[+]": ["mathtools"]},
    processEscapes: true,
    processEnvironments: true,
    macros: {
      dd: "\\,d",
      R: "\\mathbb{R}",
      marginalproduct: "\\operatorname{MP}"
    }
  },
  chtml: {
    displayAlign: "center",
    displayIndent: "0"
  }
};
