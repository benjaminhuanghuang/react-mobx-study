## Setup
```
    npm install mobx mobx-react --save
```

## ES6
Add plugins into .babelrc to support the decorators
```
"plugins": [
        "transform-runtime",
        "transform-decorators-legacy",
        "transform-class-properties",
        "transform-object-rest-spread",
        "react-hot-loader/babel"
    ]
```

## remove experimentalDecorators warning in VSCode
Create tsconfig.json file and restart VS Code
```
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "allowJs": true
    }
}
```