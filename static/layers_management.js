    function addLayer(layer, date) {

        var template =
        '//gibs-{s}.earthdata.nasa.gov/wmts/{projection}/best/' +
        '{layer}/default/{time}/{tileMatrixSet}/{z}/{y}/{x}.png';

        switch (layer) {
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

                ltemp.addTo(earth);
                break;
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

                ndvi.addTo(earth);
                break;
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
                seaTemp.addTo(earth);
        }

    }