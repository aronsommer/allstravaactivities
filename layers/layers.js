var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Landeskartengrau_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.swisstopo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.pixelkarte-grau",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Landeskarten (grau)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Landeskartengrau_1, 0]);
var lyr_Wanderwege_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.swisstopo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.swisstlm3d-wanderwege",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Wanderwege",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Wanderwege_2, 0]);
var format_mergedgpxfiles_3 = new ol.format.GeoJSON();
var features_mergedgpxfiles_3 = format_mergedgpxfiles_3.readFeatures(json_mergedgpxfiles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mergedgpxfiles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergedgpxfiles_3.addFeatures(features_mergedgpxfiles_3);
var lyr_mergedgpxfiles_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mergedgpxfiles_3, 
                style: style_mergedgpxfiles_3,
                interactive: true,
                title: '<img src="styles/legend/mergedgpxfiles_3.png" /> mergedgpxfiles'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Landeskartengrau_1.setVisible(true);lyr_Wanderwege_2.setVisible(true);lyr_mergedgpxfiles_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Landeskartengrau_1,lyr_Wanderwege_2,lyr_mergedgpxfiles_3];
lyr_mergedgpxfiles_3.set('fieldAliases', {'name': 'name', 'type': 'type', });
lyr_mergedgpxfiles_3.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', });
lyr_mergedgpxfiles_3.set('fieldLabels', {'name': 'no label', 'type': 'no label', });
lyr_mergedgpxfiles_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});