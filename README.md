opencv-electron
==============
**This is an example of how to use [opencv4nodejs](https://github.com/justadudewhohacks/opencv4nodejs) with electron to build cross-platform desktop apps.**

![opencv-electron](https://user-images.githubusercontent.com/31125521/31113188-51e7c6d8-a818-11e7-9015-295d1864e1d6.jpg)

Note that there is an additional npm script to rebuild the package for electron, which is called from the install script:
```
"electron-rebuild": "electron-rebuild -w opencv4nodejs"
```

# plain-js
This example shows how to use opencv4nodejs with electron and plain HTML + Javascript without any bundler.

## Running this example:

### Set up opencv4nodejs, electron and rebuild the module for electron:
``` bash
npm install
```

### Run:
``` bash
npm start
```

# webpack-reactjs
This example shows how to use opencv4nodejs with webpack and react, requires node-loader to load the native addon.
``` bash
npm i node-loader
```

## On windows
If you are using the autobuild on windows, you have to append the path to the binaries
to the path env of main process manually as follows (in main.js):
```
if (process.platform === 'win32' && !process.env.OPENCV4NODEJS_DISABLE_AUTOBUILD) {
  process.env.path += ';' + require('../renderer/node_modules/opencv-build').opencvBinDir
}
```

## Running this example:

In the root directory:
``` bash
npm install
npm start
```

In another terminal cd into ./renderer and run the dev server:
``` bash
npm install
npm start
```

# Known issues

If you are receiving the following error on windows during electron-rebuild:
``` bash
AttributeError: 'MSVSProject' object has no attribute 'iteritems'
```

Delete fsevents from your node_modules folder and rerun:
```
npm run electron-rebuild
```