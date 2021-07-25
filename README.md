
# GamePlay  <img src = "https://img.shields.io/badge/license-MIT-blue">


## 💻 Description

An application to help you organize your gameplays with your friends, strengthening your relations and providing fun times. 
It allows you to create groups to play your favorite games with your friends, using Discord authentication.

## 🛠 Features

- [x] Social Authentication OAuth2 with Discord server
- [x] Get user profile from Discord (username and avatar)
- [x] List the Discord servers which the user participates
- [x] Schedule gameplays
- [x] Filter the gameplays by categories
- [x] Show if the gameplay was scheduled on a user's own server (host) or on other users' servers (guest)
- [x] Share the invite to join the user's server
- [x] Log out

## ✨ Technologies

- [x] [React Native](https://reactnative.dev/)
- [x] [Typescript](https://www.typescriptlang.org/)
- [x] [Expo](https://expo.dev/)
- [x] Context API
- [x] [Async Storage](https://github.com/react-native-async-storage/async-storage)
- [x] [Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [x] [React Native Svg](https://github.com/react-native-svg/react-native-svg) and [Svg Transform](https://react-svgr.com/)
- [x] [Axios](https://github.com/axios/axios)
- [x] Gradient colors
- [x] [OAuth2](https://oauth.net/2/) Discord
- [x] [Expo Google Fonts](https://github.com/expo/google-fonts)
- [x] [React Navigation Stack](https://reactnavigation.org/docs/stack-navigator/)
- [x] [React Native Gesture Handler](https://www.npmjs.com/package/react-native-gesture-handler)
- [x] Expo Authentication
- [x] [React Native Share](https://github.com/react-native-share/react-native-share)
- [x] Deep Link

## 🔖 Layout

You can visualize the project layout in [this link](https://www.figma.com/file/0kv33XYjvOgvKGKHBaiR07/GamePlay---NLW-Together?node-id=58913%3A83). It's necessary to have an account on [Figma](https://www.figma.com/) to access it.

## 👉🏼 How to Use

To clone and run this application, you'll need to install the following tools: [Git](https://git-scm.com), [Node.js v14.17](https://nodejs.org/en/) or higher, [Yarn v1.22](https://yarnpkg.com/) or higher + [Expo v3.28](https://expo.dev/) or higher. 
Furthermore, it's recomended that you have a good editor to code like [VSCode](https://code.visualstudio.com/).

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/davidevandro/gameplay gameplay

# Go into the repository
$ cd gameplay

# Install dependencies
$ yarn install

# Run the app (Expo)
$ expo start
```

Remember to register your App in Discord server to get the authenticathion tokens. After that, you'll have to remove the example file .env.example and you''ll have to create a .env file with the following enviromental variables:

```
REDIRECT_URI = 
SCOPE = 
RESPONSE_TYPE =
CLIENT_ID = 
CDN_IMAGE = 
```

## 🤝 Acknowlegments

This project was developed during the Next Level Week Together from [Rocketseat](https://rocketseat.com.br/).

Special thanks to [Rodrigo Gonçalves](https://github.com/rodrigorgtic), he was the developer who guide me to develop this app.

## 📄 License

This project is under license [MIT](https://github.com/davidevandro/gameplay/blob/main/LICENSE).

<div align="center">

Developed by David Martins - June/2021

[<img src="https://img.shields.io/static/v1?label= &message=David Evandro Amorim Martins&color=blue&logo=linkedin&link=https://www.linkedin.com/in/david-evandro-martins/"/>](https://www.linkedin.com/in/david-evandro-martins/)

</div>



