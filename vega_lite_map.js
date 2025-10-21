var vg_map = "Map.json";
vegaEmbed("#map", vg_map)
  .then(result => console.log("Map loaded:", result.view))
  .catch(console.error);
