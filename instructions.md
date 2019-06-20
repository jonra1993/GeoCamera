## Prerequisites
    - Intall nodejs
    - Intall JavaSDK, JavaJRE and configure vairables
    - Intall Android studio and configure variable
    - Intall Xcode
---

---

## Install, Init and Execute React Native

```shell

npm install -g react-native-cli
react-native init AwesomeProject
react-native run-android
react-native run-ios

```

---
## Packages for React-Navigation
```shell

npm install --save react-navigation
npm install --save react-native-gesture-handler
react-native link react-navigation
react-native link react-native-gesture-handler

```

make changes from: https://reactnavigation.org/docs/en/getting-started.html
cheatsheet: https://blog.usejournal.com/react-navigation-cheatsheet-bf99f09d8060

Go to any route: Navigate between screens onPress={() => this.props.navigation.navigate('RouteName')}
Go back: onPress={() => this.props.navigation.goBack()}
Go back to the first screen: this.props.navigation.popToTop()

## Packages for React-native-vector-icons

```shell

npm install --save react-native-vector-icons
react-native link react-native-vector-icons

```

Documentation: https://oblador.github.io/react-native-vector-icons/

---

## Packages for Native Base

```shell

npm install native-base --save
react-native link

```

Documentation: https://docs.nativebase.io/
---


## Packages for React Native maps

```shell

npm install react-native-maps --save
react-native link react-native-maps

```

Documentation: https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md
Video: https://www.youtube.com/watch?v=97OtSGw7BPs
### 
for iOS
https://github.com/react-native-community/react-native-maps/issues/1842
https://github.com/react-native-community/react-native-maps/issues/2876
---

## React-native-geolocation-service

```shell

npm install --save react-native-geolocation-service
react-native link react-native-geolocation-service

```

Documentation and configuration: https://github.com/Agontuk/react-native-geolocation-service

---

## Redux

```shell

npm install redux react-redux --save
npm install redux-logger --save-dev
react-native link

```

Documentation: https://redux.js.org/introduction/getting-started
Video: https://www.youtube.com/watch?v=ENJfnyIfe-I
---

## React Native Camera

```shell

npm install react-native-camera --save
react-native link react-native-camera
react-native link

```

Documentation: https://react-native-community.github.io/react-native-camera/docs/installation
Tutorial: https://www.toptal.com/react-native/react-native-camera-tutorial
---

## React Native Fs

```shell

npm install react-native-fs --save
react-native link react-native-fs

```

Documentation: https://github.com/itinance/react-native-fs


##solve multiple problem in ios
https://github.com/oblador/react-native-vector-icons/issues/851
