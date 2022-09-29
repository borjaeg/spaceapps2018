function addLayer(layer_name, date) {

    console.log(layer_name, date);

    var template =
        '//gibs-{s}.earthdata.nasa.gov/wmts/{projection}/best/' +
        '{layer}/default/{time}/{tileMatrixSet}/{z}/{y}/{x}.png';

        https://gibs-a.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?TIME=2022-09-29T00:00:00Z&layer=&style=default&tilematrixset=1km&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=2&TileCol=3&TileRow=0

        
    switch (layer_name) {
        case 'MODIS_Terra_Land_Surface_Temp_Day':
            var ltemp = WE.tileLayer(template, {
                layer: 'MODIS_Terra_Land_Surface_Temp_Day',
                projection: 'epsg3857',
                tileMatrixSet: 'GoogleMapsCompatible_Level7',
                time: date,
                //tileSize: 512,
                subdomains: 'abc',
                opacity: 0.5,
                noWrap: true,
                continuousWorld: true,
                bounds: [
                    [-89.9999, -179.9999],
                    [89.9999, 179.9999]
                ],
                attribution: 'NASA',
                crossOrigin: 'anonymous'
            });

            return ltemp;

            case 'Probabilities_of_Urban_Expansion_2000-2030':
                var ltemp = WE.tileLayer(template, {
                    layer: 'Probabilities_of_Urban_Expansion_2000-2030',
                    projection: 'epsg3857',
                    tileMatrixSet: 'GoogleMapsCompatible_Level7',
                    time: date,
                    //tileSize: 512,
                    subdomains: 'abc',
                    opacity: 0.5,
                    noWrap: true,
                    continuousWorld: true,
                    bounds: [
                        [-89.9999, -179.9999],
                        [89.9999, 179.9999]
                    ],
                    attribution: 'NASA',
                    crossOrigin: 'anonymous'
                });
    
                return ltemp;

            case 'NDH_Volcano_Hazard_Frequency_Distribution_1979-2000':
                var ltemp = WE.tileLayer(template, {
                    layer: 'NDH_Volcano_Hazard_Frequency_Distribution_1979-2000',
                    projection: 'epsg3857',
                    tileMatrixSet: 'GoogleMapsCompatible_Level7',
                    time: date,
                    //tileSize: 512,
                    subdomains: 'abc',
                    opacity: 0.5,
                    noWrap: true,
                    continuousWorld: true,
                    bounds: [
                        [-89.9999, -179.9999],
                        [89.9999, 179.9999]
                    ],
                    attribution: 'NASA',
                    crossOrigin: 'anonymous'
                });
    
                return ltemp;

        case 'MODIS_Terra_NDVI_8Day':
            var ndvi = WE.tileLayer(template, {
                layer: 'MODIS_Terra_NDVI_8Day',
                projection: 'epsg3857',
                tileMatrixSet: 'GoogleMapsCompatible_Level9',
                time: date,
                //tileSize: 512,
                subdomains: 'abc',
                opacity: 0.2,
                noWrap: true,
                continuousWorld: true,
                bounds: [
                    [-89.9999, -179.9999],
                    [89.9999, 179.9999]
                ],
                attribution: 'NASA',
                crossOrigin: 'anonymous'
            });

            return ndvi;

        case 'GHRSST_L4_MUR_Sea_Surface_Temperature':
            var seaTemp = WE.tileLayer(template, {
                layer: 'GHRSST_L4_MUR_Sea_Surface_Temperature',
                projection: 'epsg3857',
                tileMatrixSet: 'GoogleMapsCompatible_Level7',
                time: date,
                //tileSize: 512,
                subdomains: 'abc',
                opacity: 1.0,
                noWrap: true,
                continuousWorld: true,
                bounds: [
                    [-89.9999, -179.9999],
                    [89.9999, 179.9999]
                ],
                attribution: 'NASA',
                crossOrigin: 'anonymous'
            });
            return seaTemp;

        default:
            console.log('Unknown layer');
    }

}