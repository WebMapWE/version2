var size = 0;
var placement = 'point';

var style_DCtestfitDClabels_18 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "7.800000000000001px \'Poppins\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#000000";
    var bufferWidth = 2.7;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("labels") !== null) {
        labelText = String(feature.get("labels"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(0,0,0,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
