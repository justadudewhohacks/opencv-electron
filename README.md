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
This example shows how to use opencv4nodejs with webpack and react.

The example uses node-loader to load the native addon. To get around resolving the absolute path to the .node file, the path to opencv4nodejs.node is globally defined in the webpack.config:
```
// hack to resolve absolute path to the opencv4nodejs.node file
opencv4nodejs: JSON.stringify(path.resolve(__dirname, 'node_modules/opencv4nodejs/build/Release/opencv4nodejs.node'))
```

## Running this example:

### Install
``` bash
npm install
```

### Run the dev server:
``` bash
npm run dev
```

### Run the electron app:
``` bash
npm start
```