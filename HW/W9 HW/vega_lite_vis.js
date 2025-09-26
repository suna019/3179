var vg_1 = "FIT3179_W9_HW.json";

vegaEmbed("#vis", vg_1).then(function(result){
    //Accesss the Vega view instance
    var view = result.view;
    console.log("Map loaded:", view);
}).catch(console.error);