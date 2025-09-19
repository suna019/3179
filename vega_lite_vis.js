var vg_1 = "daily_cost_bar_chart.vg.json";

vegaEmbed("#bar_chart", vg_1).then(function(result){
    //Accesss the Vega view instance
    var view = result.view;
    console.log("Chart loaded:", view);
}).catch(console.error);

