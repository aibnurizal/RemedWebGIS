
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "Positronnolabels_0": {
            "type": "raster",
            "tiles": ["https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "batasadministrasi_1": {
            "type": "geojson",
            "data": json_batasadministrasi_1
        }
                    ,
        "AreaTerjangkau_2": {
            "type": "geojson",
            "data": json_AreaTerjangkau_2
        }
                    ,
        "BangunanTerjangkau_3": {
            "type": "geojson",
            "data": json_BangunanTerjangkau_3
        }
                    ,
        "jaringanjalangubeng_4": {
            "type": "geojson",
            "data": json_jaringanjalangubeng_4
        }
                    ,
        "pointRSGubeng_5": {
            "type": "geojson",
            "data": json_pointRSGubeng_5
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_Positronnolabels_0_0",
            "type": "raster",
            "source": "Positronnolabels_0"
        },
        {
            "id": "lyr_batasadministrasi_1_0",
            "type": "fill",
            "source": "batasadministrasi_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#ffffff'}
        }
,
        {
            "id": "lyr_AreaTerjangkau_2_0",
            "type": "fill",
            "source": "AreaTerjangkau_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'cost_level'], 500], 1.0, ['==', ['get', 'cost_level'], 1000], 1.0, ['==', ['get', 'cost_level'], 1500], 1.0, ['==', ['get', 'cost_level'], 2000], 1.0, ['==', ['get', 'cost_level'], 2500], 1.0, ['==', ['get', 'cost_level'], 3000], 1.0, 1.0], 'fill-color': ['case', ['==', ['get', 'cost_level'], 500], '#2b83ba', ['==', ['get', 'cost_level'], 1000], '#80bfab', ['==', ['get', 'cost_level'], 1500], '#c7e8ad', ['==', ['get', 'cost_level'], 2000], '#ffffbf', ['==', ['get', 'cost_level'], 2500], '#fec980', ['==', ['get', 'cost_level'], 3000], '#f07c4a', '#d7191c']}
        }
,
        {
            "id": "lyr_BangunanTerjangkau_3_0",
            "type": "fill",
            "source": "BangunanTerjangkau_3",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'qneat_cost'], 500], 1.0, ['==', ['get', 'qneat_cost'], 1000], 1.0, ['==', ['get', 'qneat_cost'], 1500], 1.0, ['==', ['get', 'qneat_cost'], 2000], 1.0, ['==', ['get', 'qneat_cost'], 2500], 1.0, ['==', ['get', 'qneat_cost'], 3000], 1.0, 1.0], 'fill-color': ['case', ['==', ['get', 'qneat_cost'], 500], '#2b83ba', ['==', ['get', 'qneat_cost'], 1000], '#80bfab', ['==', ['get', 'qneat_cost'], 1500], '#c7e8ad', ['==', ['get', 'qneat_cost'], 2000], '#ffffbf', ['==', ['get', 'qneat_cost'], 2500], '#fec980', ['==', ['get', 'qneat_cost'], 3000], '#f07c4a', '#d7191c']}
        }
,
        {
            "id": "lyr_jaringanjalangubeng_4_0",
            "type": "line",
            "source": "jaringanjalangubeng_4",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_pointRSGubeng_5_0",
            "type": "circle",
            "source": "pointRSGubeng_5",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'RS'], 'RS UMUM SILOAM SURABAYA'], ['/', 18.57142857142857, 2], ['==', ['get', 'RS'], 'RS UMUM SILOAM SURABAYA'], ['/', 10.714285714285714, 2], ['==', ['get', 'RS'], 'RSIA PURA RAHARJA'], ['/', 18.57142857142857, 2], ['==', ['get', 'RS'], 'RSIA PURA RAHARJA'], ['/', 10.714285714285714, 2], ['==', ['get', 'RS'], 'RSUD DR. SOETOMO'], ['/', 18.57142857142857, 2], ['==', ['get', 'RS'], 'RSUD DR. SOETOMO'], ['/', 10.714285714285714, 2], 0], 'circle-color': ['case', ['==', ['get', 'RS'], 'RS UMUM SILOAM SURABAYA'], '#ffffff', ['==', ['get', 'RS'], 'RS UMUM SILOAM SURABAYA'], '#ffffff', ['==', ['get', 'RS'], 'RSIA PURA RAHARJA'], '#2b83ba', ['==', ['get', 'RS'], 'RSIA PURA RAHARJA'], '#2b83ba', ['==', ['get', 'RS'], 'RSUD DR. SOETOMO'], '#33a02c', ['==', ['get', 'RS'], 'RSUD DR. SOETOMO'], '#33a02c', '#ffffff'], 'circle-opacity': ['case', ['==', ['get', 'RS'], 'RS UMUM SILOAM SURABAYA'], 1.0, ['==', ['get', 'RS'], 'RS UMUM SILOAM SURABAYA'], 1.0, ['==', ['get', 'RS'], 'RSIA PURA RAHARJA'], 1.0, ['==', ['get', 'RS'], 'RSIA PURA RAHARJA'], 1.0, ['==', ['get', 'RS'], 'RSUD DR. SOETOMO'], 1.0, ['==', ['get', 'RS'], 'RSUD DR. SOETOMO'], 1.0, 0], 'circle-stroke-width': ['case', ['==', ['get', 'RS'], 'RS UMUM SILOAM SURABAYA'], 1.4285714285714286, ['==', ['get', 'RS'], 'RS UMUM SILOAM SURABAYA'], 0.7142857142857143, ['==', ['get', 'RS'], 'RSIA PURA RAHARJA'], 1.4285714285714286, ['==', ['get', 'RS'], 'RSIA PURA RAHARJA'], 0.7142857142857143, ['==', ['get', 'RS'], 'RSUD DR. SOETOMO'], 1.4285714285714286, ['==', ['get', 'RS'], 'RSUD DR. SOETOMO'], 0.7142857142857143, 0], 'circle-stroke-color': ['case', ['==', ['get', 'RS'], 'RS UMUM SILOAM SURABAYA'], '#e31a1c', ['==', ['get', 'RS'], 'RS UMUM SILOAM SURABAYA'], '#e31a1c', ['==', ['get', 'RS'], 'RSIA PURA RAHARJA'], '#e31a1c', ['==', ['get', 'RS'], 'RSIA PURA RAHARJA'], '#e31a1c', ['==', ['get', 'RS'], 'RSUD DR. SOETOMO'], '#e31a1c', ['==', ['get', 'RS'], 'RSUD DR. SOETOMO'], '#e31a1c', '#000000']}
        }
],
}