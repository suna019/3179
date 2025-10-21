var vg_boxplot = "boxplot.json";
vegaEmbed("#boxplot", vg_boxplot)
  .then(result => console.log("Boxplot loaded:", result.view))
  .catch(console.error);
