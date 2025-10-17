var vg_scatterplot = "Scatterplot.json";
vegaEmbed("#scatterplot", vg_scatterplot)
  .then(result => console.log("Scatterplot loaded:", result.view))
  .catch(console.error);
