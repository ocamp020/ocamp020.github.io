if (typeof mermaid !== "undefined") {
  mermaid.initialize({
    startOnLoad: true,
    theme: "base",
    themeVariables: {
      primaryColor: "#f4eefb",
      primaryTextColor: "#4f2683",
      primaryBorderColor: "#8b5fbd",
      lineColor: "#4f2683",
      secondaryColor: "#e7efe9",
      tertiaryColor: "#fffdfd",
      fontFamily: "Source Sans 3, sans-serif"
    },
    flowchart: {
      curve: "basis",
      htmlLabels: true
    }
  });
}
