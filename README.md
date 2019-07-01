# GeoCamera
It is a React Native App that takes a picture and then it shows the picture as a marker over a map in its GPS coordinates where it was taken. Uses permissions, Geolocation Google Ap, React Native Camera among other packages.

Pictures are saved at root/Pictures

<p align="center">
<video width="100%" controls>
  <source src="https://www.jonathanvargas.ml/wp-content/uploads/2019/06/GeoCamera.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
</p>

<p align="center">
  <img height="360" width="180" src="https://www.jonathanvargas.ml/wp-content/uploads/2019/07/GeoCamera1.png">
  <img height="360" width="180" src="https://www.jonathanvargas.ml/wp-content/uploads/2019/07/GeoCamera2.png">
  <img height="360" width="180" src="https://www.jonathanvargas.ml/wp-content/uploads/2019/07/GeoCamera3.png">
</p>


# Instructions
  - Install react-native packages
  - Link packages 
  - Setup Google maps key, guide [here](https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md)

# Setup

```shell

npm install
react-native link

```

## Prerequisites
  - Intall nodejs
  - Intall JavaSDK, JavaJRE and configure vairables
  - Intall Android studio and configure variable
  - Intall Xcode


## Install, Init and Execute React Native

```shell

react-native run-android
react-native run-ios

```

# Packages used

## React Navigation
```shell

npm install --save react-navigation
npm install --save react-native-gesture-handler
react-native link react-navigation
react-native link react-native-gesture-handler

```

make changes from: https://reactnavigation.org/docs/en/getting-started.html
cheatsheet: https://blog.usejournal.com/react-navigation-cheatsheet-bf99f09d8060


## React Native Vector Icons

```shell

npm install --save react-native-vector-icons
react-native link react-native-vector-icons

```

Documentation: https://oblador.github.io/react-native-vector-icons/



## Native Base

```shell

npm install native-base --save
react-native link

```

Documentation: https://docs.nativebase.io/


## React Native Maps

```shell

npm install react-native-maps --save
react-native link react-native-maps

```

Documentation: https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md
Video: https://www.youtube.com/watch?v=97OtSGw7BPs

for iOS issues:
https://github.com/react-native-community/react-native-maps/issues/1842
https://github.com/react-native-community/react-native-maps/issues/2876


## React Native Geolocation Service

```shell

npm install --save react-native-geolocation-service
react-native link react-native-geolocation-service

```

Documentation and configuration: https://github.com/Agontuk/react-native-geolocation-service


## Redux

```shell

npm install redux react-redux --save
npm install redux-logger --save-dev
react-native link

```

Documentation: https://redux.js.org/introduction/getting-started
Video: https://www.youtube.com/watch?v=ENJfnyIfe-I

## React Native Camera

```shell

npm install react-native-camera --save
react-native link react-native-camera
react-native link

```

Documentation: https://react-native-community.github.io/react-native-camera/docs/installation
Tutorial: https://www.toptal.com/react-native/react-native-camera-tutorial

## React Native Fs

```shell

npm install react-native-fs --save
react-native link react-native-fs

```

Documentation: https://github.com/itinance/react-native-fs


solve multiple problems in ios: 
https://github.com/oblador/react-native-vector-icons/issues/851


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Authors: <a href="https://www.jonathanvargas.ml" target="_blank">Jonathan Vargas</a> and Xavier Aguas.
