var vg_scatterplot = "scatterplot.json";
vegaEmbed("#scatterplot", vg_scatterplot)
  .then(result => console.log("Scatterplot loaded:", result.view))
  .catch(console.error);
