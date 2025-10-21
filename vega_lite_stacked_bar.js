var vg_stacked_bar = "stacked_bar.json";
vegaEmbed("#stacked_bar", vg_stacked_bar)
  .then(result => console.log("Stacked Bar loaded:", result.view))
  .catch(console.error);
