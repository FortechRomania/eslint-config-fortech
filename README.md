# eslint-config-fortech
ESLint config for modern JavaScript syntax.

This is intended to be used in a modern JS codebase. If you have a React project, try [eslint-config-fortech-react](https://github.com/FortechRomania/eslint-config-fortech-react) which has specific rules for React and JSX.

## Usage
Install eslint and the babel-eslint parser: 
```bash
npm i eslint babel-eslint -D
```

Install the package: 
```bash
npm i eslint-config-fortech -D
```

Install peer dependencies: 
```bash
npm i eslint-plugin-import -D
```

Create an `.eslintrc` file in your project root folder with the following content.
```javascript
{
    "env": {
        "browser": true, // set this if you're running a browser app
        "mocha": true // set this if you have mocha-style tests in your app folder
    },
    "extends": "fortech"
}
```

For more details about the `env` object, check out the [list of possible values](https://eslint.org/docs/user-guide/configuring#specifying-environments).

Additionally you can define your custom overwrites in `rules`:
```javascript
{
    "env": {
        "browser": true,
        "mocha": true
    },
    "extends": "fortech"
    "rules": {
        "quotes": [ 2, "single" ],
    }
}
```

## Reasoning
The `airbnb` styleguide is really great, but, we at Fortech, felt like it needed a few changes so we published this package which takes the core rules from the `airbnb` config and overwrites some of them based on our needs.

You can read more about some of the decisions [HERE](https://medium.freecodecamp.com/adding-some-air-to-the-airbnb-style-guide-3df40e31c57a#.jz912uw00).
