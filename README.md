##commande

Creation du fichier package.json
yarn init

#installation de webpack
yarn add --dev webpack webpack-cli

##Lancer webpack
node_modules/.bin/webpack --mode=development

##Ajouter Babel
yarn add babel babel-loader @babel/core @babel/preset-env @babel/preset-react --dev


##Script a rajouter dans package.json
"scripts": {
  "build": "webpack --mode=production",
  "build:dev": "webpack --mode=development"
},

##dépendence pour faire fonctionner mon code
yarn add react react-dom

## serveur local
yarn add i webpack-cli

"scripts": {
    "startdev": "webpack serve --mode development --env development --hot --port 3000"
  },
"devDependencies": {
    "webpack": "^5.10.1",
    "webpack-cli": "^4.2.0"
 },


 ##Loader pour fichiers css
 style-loader
 css-loader
 postcss-loader

  ##Loader pour fichiers scss

  prop-types : pour validedr les props types
