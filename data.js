var APP_DATA = {
  "scenes": [
    {
      "id": "0-most",
      "name": "Most",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1604.5,
      "initialViewParameters": {
        "yaw": -0.07881869299052724,
        "pitch": 0.1603847055063241,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": -0.5321116352028294,
          "pitch": 0.015063493344399603,
          "rotation": 9.42477796076938,
          "target": "1-boisko"
        },
        {
          "yaw": -0.018899122657378697,
          "pitch": 0.10146934316932743,
          "rotation": 3.141592653589793,
          "target": "2-kadka"
        },
        {
          "yaw": 0.7161929284532977,
          "pitch": 0.08562228481914858,
          "rotation": 3.141592653589793,
          "target": "3-park"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-boisko",
      "name": "Boisko",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1594,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": -0.5321930370102592,
          "pitch": -0.01855722503917434,
          "rotation": 3.141592653589793,
          "target": "0-most"
        },
        {
          "yaw": -1.2038752497858436,
          "pitch": 0.052857607842543786,
          "rotation": 3.141592653589793,
          "target": "3-park"
        },
        {
          "yaw": -2.343922902276635,
          "pitch": 0.13866258757067484,
          "rotation": 3.141592653589793,
          "target": "2-kadka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kadka",
      "name": "Kładka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1606,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": -2.949709536006786,
          "pitch": -0.12788537673564448,
          "rotation": 3.141592653589793,
          "target": "0-most"
        },
        {
          "yaw": 2.8742500034739544,
          "pitch": -0.06231787088514551,
          "rotation": 3.141592653589793,
          "target": "3-park"
        },
        {
          "yaw": -1.651940979719555,
          "pitch": -0.12291696529515761,
          "rotation": 3.141592653589793,
          "target": "1-boisko"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-park",
      "name": "Park",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1601.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.36207961172780223,
          "pitch": 0.08672667253278377,
          "rotation": 3.141592653589793,
          "target": "2-kadka"
        },
        {
          "yaw": -1.2310060530286187,
          "pitch": 0.008277400057075113,
          "rotation": 3.141592653589793,
          "target": "1-boisko"
        },
        {
          "yaw": -2.670366057102889,
          "pitch": -0.06468010764573862,
          "rotation": 3.141592653589793,
          "target": "0-most"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Wirtualny spacer v1.0",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
