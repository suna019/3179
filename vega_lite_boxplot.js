var vg_boxplot = "Boxplot.json";
vegaEmbed("#boxplot", vg_boxplot)
  .then(result => console.log("Boxplot loaded:", result.view))
  .catch(console.error);
