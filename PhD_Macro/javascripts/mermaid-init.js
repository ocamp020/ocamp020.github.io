if (typeof mermaid !== "undefined") {
  mermaid.initialize({
    startOnLoad: true,
    theme: "base",
    themeVariables: {
      primaryColor: "#f5efe4",
      primaryTextColor: "#17352c",
      primaryBorderColor: "#ad6c33",
      lineColor: "#17352c",
      secondaryColor: "#e7efe9",
      tertiaryColor: "#fffdf7",
      fontFamily: "Source Sans 3, sans-serif"
    },
    flowchart: {
      curve: "basis",
      htmlLabels: true
    }
  });
}
