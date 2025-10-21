var vg_heatmap = "Heatmap.json";
vegaEmbed("#heatmap", vg_heatmap)
  .then(result => console.log("Heatmap loaded:", result.view))
  .catch(console.error);
