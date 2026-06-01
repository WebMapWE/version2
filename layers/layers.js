ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([401548.365871, 6857882.097293, 406025.669281, 6860412.097440]);
var wms_layers = [];

var lyr_Aerialview_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://tiles.kartat.kapsi.fi/ortokuva?",
                              attributions: '<a href="">National Land Survey, CC-BY-4.0 via kartat.kapsi.fi</a>',
                              params: {
                                "LAYERS": "ortokuva",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Aerial view',
                            popuplayertitle: 'Aerial view',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Aerialview_0, 0]);

        var lyr_Positronretina_1 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });

        var lyr_Voyager_2 = new ol.layer.Tile({
            'title': 'Voyager',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'
            })
        });
var format_JmsnaluelmpOy_3 = new ol.format.GeoJSON();
var features_JmsnaluelmpOy_3 = format_JmsnaluelmpOy_3.readFeatures(json_JmsnaluelmpOy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_JmsnaluelmpOy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JmsnaluelmpOy_3.addFeatures(features_JmsnaluelmpOy_3);
var lyr_JmsnaluelmpOy_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JmsnaluelmpOy_3,
maxResolution:28004.466152261964,
 
                style: style_JmsnaluelmpOy_3,
                popuplayertitle: 'Jämsän aluelämpö Oy',
                interactive: false,
                title: '<img src="styles/legend/JmsnaluelmpOy_3.png" /> Jämsän aluelämpö Oy'
            });
var format_110kVpowerline_4 = new ol.format.GeoJSON();
var features_110kVpowerline_4 = format_110kVpowerline_4.readFeatures(json_110kVpowerline_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_110kVpowerline_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_110kVpowerline_4.addFeatures(features_110kVpowerline_4);
var lyr_110kVpowerline_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_110kVpowerline_4, 
                style: style_110kVpowerline_4,
                popuplayertitle: '110 kV powerline',
                interactive: false,
                title: '<img src="styles/legend/110kVpowerline_4.png" /> 110 kV powerline'
            });
var format_FingridToivilasubstation_5 = new ol.format.GeoJSON();
var features_FingridToivilasubstation_5 = format_FingridToivilasubstation_5.readFeatures(json_FingridToivilasubstation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_FingridToivilasubstation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FingridToivilasubstation_5.addFeatures(features_FingridToivilasubstation_5);
var lyr_FingridToivilasubstation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FingridToivilasubstation_5, 
                style: style_FingridToivilasubstation_5,
                popuplayertitle: 'Fingrid Toivila substation',
                interactive: false,
                title: '<img src="styles/legend/FingridToivilasubstation_5.png" /> Fingrid Toivila substation'
            });
var format_Solarpowerplantarea_6 = new ol.format.GeoJSON();
var features_Solarpowerplantarea_6 = format_Solarpowerplantarea_6.readFeatures(json_Solarpowerplantarea_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Solarpowerplantarea_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solarpowerplantarea_6.addFeatures(features_Solarpowerplantarea_6);
var lyr_Solarpowerplantarea_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solarpowerplantarea_6, 
                style: style_Solarpowerplantarea_6,
                popuplayertitle: 'Solar power plant area',
                interactive: false,
                title: '<img src="styles/legend/Solarpowerplantarea_6.png" /> Solar power plant area'
            });
var format_Solarpanels_7 = new ol.format.GeoJSON();
var features_Solarpanels_7 = format_Solarpanels_7.readFeatures(json_Solarpanels_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Solarpanels_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solarpanels_7.addFeatures(features_Solarpanels_7);
var lyr_Solarpanels_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solarpanels_7, 
                style: style_Solarpanels_7,
                popuplayertitle: 'Solar panels',
                interactive: false,
                title: '<img src="styles/legend/Solarpanels_7.png" /> Solar panels'
            });
var format_Solarlabel_8 = new ol.format.GeoJSON();
var features_Solarlabel_8 = format_Solarlabel_8.readFeatures(json_Solarlabel_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Solarlabel_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solarlabel_8.addFeatures(features_Solarlabel_8);
var lyr_Solarlabel_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solarlabel_8, 
                style: style_Solarlabel_8,
                popuplayertitle: 'Solar label',
                interactive: false,
                title: '<img src="styles/legend/Solarlabel_8.png" /> Solar label'
            });
var lyr_DCFieldphoto_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DC Field photo<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DCFieldphoto_9.png",
            attributions: ' ',
            projection: 'EPSG:3067',
            alwaysInRange: true,
            imageExtent: [402433.245705, 6859044.910722, 402744.944699, 6859315.478302]
        })
    });
var format_DCtestfitdcsite_10 = new ol.format.GeoJSON();
var features_DCtestfitdcsite_10 = format_DCtestfitdcsite_10.readFeatures(json_DCtestfitdcsite_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitdcsite_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitdcsite_10.addFeatures(features_DCtestfitdcsite_10);
var lyr_DCtestfitdcsite_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitdcsite_10, 
                style: style_DCtestfitdcsite_10,
                popuplayertitle: 'DC-testfit — dcsite',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitdcsite_10.png" /> DC-testfit — dcsite'
            });
var format_DCtestfitDCareas_11 = new ol.format.GeoJSON();
var features_DCtestfitDCareas_11 = format_DCtestfitDCareas_11.readFeatures(json_DCtestfitDCareas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitDCareas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitDCareas_11.addFeatures(features_DCtestfitDCareas_11);
var lyr_DCtestfitDCareas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitDCareas_11, 
                style: style_DCtestfitDCareas_11,
                popuplayertitle: 'DC-testfit — DC-areas',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitDCareas_11.png" /> DC-testfit — DC-areas'
            });
var format_DCtestfitdcbuilding_12 = new ol.format.GeoJSON();
var features_DCtestfitdcbuilding_12 = format_DCtestfitdcbuilding_12.readFeatures(json_DCtestfitdcbuilding_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitdcbuilding_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitdcbuilding_12.addFeatures(features_DCtestfitdcbuilding_12);
var lyr_DCtestfitdcbuilding_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitdcbuilding_12, 
                style: style_DCtestfitdcbuilding_12,
                popuplayertitle: 'DC-testfit — dcbuilding',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitdcbuilding_12.png" /> DC-testfit — dcbuilding'
            });
var format_DCtestfitroad_areas_13 = new ol.format.GeoJSON();
var features_DCtestfitroad_areas_13 = format_DCtestfitroad_areas_13.readFeatures(json_DCtestfitroad_areas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitroad_areas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitroad_areas_13.addFeatures(features_DCtestfitroad_areas_13);
var lyr_DCtestfitroad_areas_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitroad_areas_13, 
                style: style_DCtestfitroad_areas_13,
                popuplayertitle: 'DC-testfit — road_areas',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitroad_areas_13.png" /> DC-testfit — road_areas'
            });
var format_DCtestfitauxbuilding_14 = new ol.format.GeoJSON();
var features_DCtestfitauxbuilding_14 = format_DCtestfitauxbuilding_14.readFeatures(json_DCtestfitauxbuilding_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitauxbuilding_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitauxbuilding_14.addFeatures(features_DCtestfitauxbuilding_14);
var lyr_DCtestfitauxbuilding_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitauxbuilding_14, 
                style: style_DCtestfitauxbuilding_14,
                popuplayertitle: 'DC-testfit — auxbuilding',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitauxbuilding_14.png" /> DC-testfit — auxbuilding'
            });
var format_DCtestfitsubstation_15 = new ol.format.GeoJSON();
var features_DCtestfitsubstation_15 = format_DCtestfitsubstation_15.readFeatures(json_DCtestfitsubstation_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitsubstation_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitsubstation_15.addFeatures(features_DCtestfitsubstation_15);
var lyr_DCtestfitsubstation_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitsubstation_15, 
                style: style_DCtestfitsubstation_15,
                popuplayertitle: 'DC-testfit — substation',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitsubstation_15.png" /> DC-testfit — substation'
            });
var format_DCBESSBESS100MW_16 = new ol.format.GeoJSON();
var features_DCBESSBESS100MW_16 = format_DCBESSBESS100MW_16.readFeatures(json_DCBESSBESS100MW_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCBESSBESS100MW_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCBESSBESS100MW_16.addFeatures(features_DCBESSBESS100MW_16);
var lyr_DCBESSBESS100MW_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCBESSBESS100MW_16, 
                style: style_DCBESSBESS100MW_16,
                popuplayertitle: 'DC-BESS — BESS-100MW',
                interactive: false,
                title: '<img src="styles/legend/DCBESSBESS100MW_16.png" /> DC-BESS — BESS-100MW'
            });
var format_DCtestfitgridconnection_17 = new ol.format.GeoJSON();
var features_DCtestfitgridconnection_17 = format_DCtestfitgridconnection_17.readFeatures(json_DCtestfitgridconnection_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitgridconnection_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitgridconnection_17.addFeatures(features_DCtestfitgridconnection_17);
var lyr_DCtestfitgridconnection_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitgridconnection_17, 
                style: style_DCtestfitgridconnection_17,
                popuplayertitle: 'DC-testfit — grid connection',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitgridconnection_17.png" /> DC-testfit — grid connection'
            });
var format_DCtestfitDClabels_18 = new ol.format.GeoJSON();
var features_DCtestfitDClabels_18 = format_DCtestfitDClabels_18.readFeatures(json_DCtestfitDClabels_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitDClabels_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitDClabels_18.addFeatures(features_DCtestfitDClabels_18);
var lyr_DCtestfitDClabels_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitDClabels_18, 
                style: style_DCtestfitDClabels_18,
                popuplayertitle: 'DC-testfit — DC-labels',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitDClabels_18.png" /> DC-testfit — DC-labels'
            });
var format_OptionB_19 = new ol.format.GeoJSON();
var features_OptionB_19 = format_OptionB_19.readFeatures(json_OptionB_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_OptionB_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OptionB_19.addFeatures(features_OptionB_19);
var lyr_OptionB_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OptionB_19,
maxResolution:28004.466152261964,
 
                style: style_OptionB_19,
                popuplayertitle: 'Option B',
                interactive: false,
                title: '<img src="styles/legend/OptionB_19.png" /> Option B'
            });
var format_OptionA_20 = new ol.format.GeoJSON();
var features_OptionA_20 = format_OptionA_20.readFeatures(json_OptionA_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_OptionA_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OptionA_20.addFeatures(features_OptionA_20);
var lyr_OptionA_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OptionA_20,
maxResolution:28004.466152261964,
 
                style: style_OptionA_20,
                popuplayertitle: 'Option A',
                interactive: false,
                title: '<img src="styles/legend/OptionA_20.png" /> Option A'
            });
var format_JmsTampere_21 = new ol.format.GeoJSON();
var features_JmsTampere_21 = format_JmsTampere_21.readFeatures(json_JmsTampere_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_JmsTampere_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JmsTampere_21.addFeatures(features_JmsTampere_21);
var lyr_JmsTampere_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JmsTampere_21, 
                style: style_JmsTampere_21,
                popuplayertitle: 'Jämsä-Tampere',
                interactive: false,
                title: '<img src="styles/legend/JmsTampere_21.png" /> Jämsä-Tampere'
            });
var format_JmsHelsinki_22 = new ol.format.GeoJSON();
var features_JmsHelsinki_22 = format_JmsHelsinki_22.readFeatures(json_JmsHelsinki_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_JmsHelsinki_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JmsHelsinki_22.addFeatures(features_JmsHelsinki_22);
var lyr_JmsHelsinki_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JmsHelsinki_22, 
                style: style_JmsHelsinki_22,
                popuplayertitle: 'Jämsä-Helsinki',
                interactive: false,
                title: '<img src="styles/legend/JmsHelsinki_22.png" /> Jämsä-Helsinki'
            });
var format_DistancetoTampere_23 = new ol.format.GeoJSON();
var features_DistancetoTampere_23 = format_DistancetoTampere_23.readFeatures(json_DistancetoTampere_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DistancetoTampere_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistancetoTampere_23.addFeatures(features_DistancetoTampere_23);
var lyr_DistancetoTampere_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistancetoTampere_23,
maxResolution:28004.466152261964,
 
                style: style_DistancetoTampere_23,
                popuplayertitle: 'Distance to Tampere',
                interactive: false,
                title: '<img src="styles/legend/DistancetoTampere_23.png" /> Distance to Tampere'
            });
var format_DistancetoHelsinki_24 = new ol.format.GeoJSON();
var features_DistancetoHelsinki_24 = format_DistancetoHelsinki_24.readFeatures(json_DistancetoHelsinki_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DistancetoHelsinki_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistancetoHelsinki_24.addFeatures(features_DistancetoHelsinki_24);
var lyr_DistancetoHelsinki_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistancetoHelsinki_24,
maxResolution:28004.466152261964,
 
                style: style_DistancetoHelsinki_24,
                popuplayertitle: 'Distance to Helsinki',
                interactive: false,
                title: '<img src="styles/legend/DistancetoHelsinki_24.png" /> Distance to Helsinki'
            });
var format_DistancetoJmscitycentre_25 = new ol.format.GeoJSON();
var features_DistancetoJmscitycentre_25 = format_DistancetoJmscitycentre_25.readFeatures(json_DistancetoJmscitycentre_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DistancetoJmscitycentre_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistancetoJmscitycentre_25.addFeatures(features_DistancetoJmscitycentre_25);
var lyr_DistancetoJmscitycentre_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistancetoJmscitycentre_25,
maxResolution:28004.466152261964,
 
                style: style_DistancetoJmscitycentre_25,
                popuplayertitle: 'Distance to Jämsä city centre',
                interactive: false,
                title: '<img src="styles/legend/DistancetoJmscitycentre_25.png" /> Distance to Jämsä city centre'
            });
var format_Tampere_26 = new ol.format.GeoJSON();
var features_Tampere_26 = format_Tampere_26.readFeatures(json_Tampere_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Tampere_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tampere_26.addFeatures(features_Tampere_26);
var lyr_Tampere_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tampere_26, 
                style: style_Tampere_26,
                popuplayertitle: 'Tampere',
                interactive: false,
                title: '<img src="styles/legend/Tampere_26.png" /> Tampere'
            });
var format_Helsinki_27 = new ol.format.GeoJSON();
var features_Helsinki_27 = format_Helsinki_27.readFeatures(json_Helsinki_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Helsinki_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Helsinki_27.addFeatures(features_Helsinki_27);
var lyr_Helsinki_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Helsinki_27, 
                style: style_Helsinki_27,
                popuplayertitle: 'Helsinki',
                interactive: false,
                title: '<img src="styles/legend/Helsinki_27.png" /> Helsinki'
            });
var group_Cities = new ol.layer.Group({
                                layers: [lyr_Tampere_26,lyr_Helsinki_27,],
                                fold: 'close',
                                title: 'Cities'});
var group_Distances = new ol.layer.Group({
                                layers: [lyr_DistancetoTampere_23,lyr_DistancetoHelsinki_24,lyr_DistancetoJmscitycentre_25,],
                                fold: 'close',
                                title: 'Distances'});
var group_Roads = new ol.layer.Group({
                                layers: [lyr_JmsTampere_21,lyr_JmsHelsinki_22,],
                                fold: 'close',
                                title: 'Roads'});
var group_Gridconnectionoptions = new ol.layer.Group({
                                layers: [lyr_OptionB_19,lyr_OptionA_20,],
                                fold: 'close',
                                title: 'Grid connection options'});
var group_Datacenter = new ol.layer.Group({
                                layers: [lyr_DCtestfitdcsite_10,lyr_DCtestfitDCareas_11,lyr_DCtestfitdcbuilding_12,lyr_DCtestfitroad_areas_13,lyr_DCtestfitauxbuilding_14,lyr_DCtestfitsubstation_15,lyr_DCBESSBESS100MW_16,lyr_DCtestfitgridconnection_17,lyr_DCtestfitDClabels_18,],
                                fold: 'close',
                                title: 'Data center'});
var group_Solar = new ol.layer.Group({
                                layers: [lyr_Solarpowerplantarea_6,lyr_Solarpanels_7,lyr_Solarlabel_8,],
                                fold: 'close',
                                title: 'Solar'});
var group_Substations = new ol.layer.Group({
                                layers: [lyr_FingridToivilasubstation_5,],
                                fold: 'close',
                                title: 'Substations'});
var group_Heatingandpower = new ol.layer.Group({
                                layers: [lyr_JmsnaluelmpOy_3,lyr_110kVpowerline_4,],
                                fold: 'close',
                                title: 'Heating and power'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_Aerialview_0,lyr_Positronretina_1,lyr_Voyager_2,],
                                fold: 'open',
                                title: 'Basemap'});

lyr_Aerialview_0.setVisible(true);lyr_Positronretina_1.setVisible(true);lyr_Voyager_2.setVisible(true);lyr_JmsnaluelmpOy_3.setVisible(true);lyr_110kVpowerline_4.setVisible(true);lyr_FingridToivilasubstation_5.setVisible(true);lyr_Solarpowerplantarea_6.setVisible(true);lyr_Solarpanels_7.setVisible(true);lyr_Solarlabel_8.setVisible(true);lyr_DCFieldphoto_9.setVisible(true);lyr_DCtestfitdcsite_10.setVisible(true);lyr_DCtestfitDCareas_11.setVisible(true);lyr_DCtestfitdcbuilding_12.setVisible(true);lyr_DCtestfitroad_areas_13.setVisible(true);lyr_DCtestfitauxbuilding_14.setVisible(true);lyr_DCtestfitsubstation_15.setVisible(true);lyr_DCBESSBESS100MW_16.setVisible(true);lyr_DCtestfitgridconnection_17.setVisible(true);lyr_DCtestfitDClabels_18.setVisible(true);lyr_OptionB_19.setVisible(true);lyr_OptionA_20.setVisible(true);lyr_JmsTampere_21.setVisible(true);lyr_JmsHelsinki_22.setVisible(true);lyr_DistancetoTampere_23.setVisible(true);lyr_DistancetoHelsinki_24.setVisible(true);lyr_DistancetoJmscitycentre_25.setVisible(true);lyr_Tampere_26.setVisible(true);lyr_Helsinki_27.setVisible(true);
var layersList = [group_Basemap,group_Heatingandpower,group_Substations,group_Solar,lyr_DCFieldphoto_9,group_Datacenter,group_Gridconnectionoptions,group_Roads,group_Distances,group_Cities];
lyr_JmsnaluelmpOy_3.set('fieldAliases', {'fid': 'fid', 'Nimi': 'Nimi', });
lyr_110kVpowerline_4.set('fieldAliases', {'fid': 'fid', 'Nimi': 'Nimi', });
lyr_FingridToivilasubstation_5.set('fieldAliases', {'fid': 'fid', 'Nimi': 'Nimi', });
lyr_Solarpowerplantarea_6.set('fieldAliases', {'fid': 'fid', 'pinta-ala (ha)': 'pinta-ala (ha)', });
lyr_Solarpanels_7.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Solarlabel_8.set('fieldAliases', {'fid': 'fid', 'label': 'label', });
lyr_DCtestfitdcsite_10.set('fieldAliases', {'fid': 'fid', 'pinta-ala (ha)': 'pinta-ala (ha)', });
lyr_DCtestfitDCareas_11.set('fieldAliases', {'fid': 'fid', });
lyr_DCtestfitdcbuilding_12.set('fieldAliases', {'fid': 'fid', 'label': 'label', });
lyr_DCtestfitroad_areas_13.set('fieldAliases', {'fid': 'fid', });
lyr_DCtestfitauxbuilding_14.set('fieldAliases', {'fid': 'fid', });
lyr_DCtestfitsubstation_15.set('fieldAliases', {'fid': 'fid', });
lyr_DCBESSBESS100MW_16.set('fieldAliases', {'fid': 'fid', });
lyr_DCtestfitgridconnection_17.set('fieldAliases', {'fid': 'fid', });
lyr_DCtestfitDClabels_18.set('fieldAliases', {'fid': 'fid', 'labels': 'labels', });
lyr_OptionB_19.set('fieldAliases', {'fid': 'fid', 'Selite': 'Selite', });
lyr_OptionA_20.set('fieldAliases', {'fid': 'fid', 'Selite': 'Selite', });
lyr_JmsTampere_21.set('fieldAliases', {'fid': 'fid', 'Nimi': 'Nimi', 'pituus (km)': 'pituus (km)', });
lyr_JmsHelsinki_22.set('fieldAliases', {'fid': 'fid', 'pituus': 'pituus', 'Nimi': 'Nimi', });
lyr_DistancetoTampere_23.set('fieldAliases', {'fid': 'fid', 'Selite': 'Selite', });
lyr_DistancetoHelsinki_24.set('fieldAliases', {'fid': 'fid', 'Selite': 'Selite', });
lyr_DistancetoJmscitycentre_25.set('fieldAliases', {'fid': 'fid', 'Selite': 'Selite', });
lyr_Tampere_26.set('fieldAliases', {'fid': 'fid', 'Nimi': 'Nimi', });
lyr_Helsinki_27.set('fieldAliases', {'fid': 'fid', 'Nimi': 'Nimi', });
lyr_JmsnaluelmpOy_3.set('fieldImages', {'fid': 'TextEdit', 'Nimi': 'TextEdit', });
lyr_110kVpowerline_4.set('fieldImages', {'fid': 'TextEdit', 'Nimi': 'TextEdit', });
lyr_FingridToivilasubstation_5.set('fieldImages', {'fid': 'TextEdit', 'Nimi': 'TextEdit', });
lyr_Solarpowerplantarea_6.set('fieldImages', {'fid': 'TextEdit', 'pinta-ala (ha)': '', });
lyr_Solarpanels_7.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Solarlabel_8.set('fieldImages', {'fid': 'TextEdit', 'label': 'TextEdit', });
lyr_DCtestfitdcsite_10.set('fieldImages', {'fid': 'TextEdit', 'pinta-ala (ha)': '', });
lyr_DCtestfitDCareas_11.set('fieldImages', {'fid': 'TextEdit', });
lyr_DCtestfitdcbuilding_12.set('fieldImages', {'fid': 'TextEdit', 'label': 'TextEdit', });
lyr_DCtestfitroad_areas_13.set('fieldImages', {'fid': 'TextEdit', });
lyr_DCtestfitauxbuilding_14.set('fieldImages', {'fid': 'TextEdit', });
lyr_DCtestfitsubstation_15.set('fieldImages', {'fid': 'TextEdit', });
lyr_DCBESSBESS100MW_16.set('fieldImages', {'fid': 'TextEdit', });
lyr_DCtestfitgridconnection_17.set('fieldImages', {'fid': 'TextEdit', });
lyr_DCtestfitDClabels_18.set('fieldImages', {'fid': 'TextEdit', 'labels': 'TextEdit', });
lyr_OptionB_19.set('fieldImages', {'fid': 'TextEdit', 'Selite': 'TextEdit', });
lyr_OptionA_20.set('fieldImages', {'fid': 'TextEdit', 'Selite': 'TextEdit', });
lyr_JmsTampere_21.set('fieldImages', {'fid': 'TextEdit', 'Nimi': 'TextEdit', 'pituus (km)': '', });
lyr_JmsHelsinki_22.set('fieldImages', {'fid': 'TextEdit', 'pituus': '', 'Nimi': 'TextEdit', });
lyr_DistancetoTampere_23.set('fieldImages', {'fid': 'TextEdit', 'Selite': 'TextEdit', });
lyr_DistancetoHelsinki_24.set('fieldImages', {'fid': 'TextEdit', 'Selite': 'TextEdit', });
lyr_DistancetoJmscitycentre_25.set('fieldImages', {'fid': 'TextEdit', 'Selite': 'TextEdit', });
lyr_Tampere_26.set('fieldImages', {'fid': '', 'Nimi': '', });
lyr_Helsinki_27.set('fieldImages', {'fid': 'TextEdit', 'Nimi': 'TextEdit', });
lyr_JmsnaluelmpOy_3.set('fieldLabels', {'fid': 'hidden field', 'Nimi': 'no label', });
lyr_110kVpowerline_4.set('fieldLabels', {'fid': 'no label', 'Nimi': 'no label', });
lyr_FingridToivilasubstation_5.set('fieldLabels', {'fid': 'no label', 'Nimi': 'no label', });
lyr_Solarpowerplantarea_6.set('fieldLabels', {'fid': 'no label', 'pinta-ala (ha)': 'no label', });
lyr_Solarpanels_7.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Solarlabel_8.set('fieldLabels', {'fid': 'no label', 'label': 'no label', });
lyr_DCtestfitdcsite_10.set('fieldLabels', {'fid': 'no label', 'pinta-ala (ha)': 'no label', });
lyr_DCtestfitDCareas_11.set('fieldLabels', {'fid': 'no label', });
lyr_DCtestfitdcbuilding_12.set('fieldLabels', {'fid': 'no label', 'label': 'no label', });
lyr_DCtestfitroad_areas_13.set('fieldLabels', {'fid': 'no label', });
lyr_DCtestfitauxbuilding_14.set('fieldLabels', {'fid': 'no label', });
lyr_DCtestfitsubstation_15.set('fieldLabels', {'fid': 'no label', });
lyr_DCBESSBESS100MW_16.set('fieldLabels', {'fid': 'no label', });
lyr_DCtestfitgridconnection_17.set('fieldLabels', {'fid': 'no label', });
lyr_DCtestfitDClabels_18.set('fieldLabels', {'fid': 'no label', 'labels': 'no label', });
lyr_OptionB_19.set('fieldLabels', {'fid': 'hidden field', 'Selite': 'inline label - always visible', });
lyr_OptionA_20.set('fieldLabels', {'fid': 'hidden field', 'Selite': 'inline label - always visible', });
lyr_JmsTampere_21.set('fieldLabels', {'fid': 'no label', 'Nimi': 'no label', 'pituus (km)': 'no label', });
lyr_JmsHelsinki_22.set('fieldLabels', {'fid': 'no label', 'pituus': 'no label', 'Nimi': 'no label', });
lyr_DistancetoTampere_23.set('fieldLabels', {'fid': 'hidden field', 'Selite': 'inline label - always visible', });
lyr_DistancetoHelsinki_24.set('fieldLabels', {'fid': 'hidden field', 'Selite': 'inline label - always visible', });
lyr_DistancetoJmscitycentre_25.set('fieldLabels', {'fid': 'hidden field', 'Selite': 'inline label - always visible', });
lyr_Tampere_26.set('fieldLabels', {'fid': 'no label', 'Nimi': 'no label', });
lyr_Helsinki_27.set('fieldLabels', {'fid': 'no label', 'Nimi': 'no label', });
lyr_Helsinki_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});