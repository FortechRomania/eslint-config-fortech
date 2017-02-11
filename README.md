# eslint-config-fortech
ESLint config used at Fortech based on the airbnb standard

## Usage
Install eslint: `npm i eslint`

Install the package: `npm i eslint-config-fortech`

Create an `.eslintrc` file in your project root folder with the following content.
```javascript
{
    "extends": "fortech"
}
```

Additionally you can define your custom overwrites in `rules`:
```javascript
{
    "extends": "fortech",
    "rules": {
        "quotes": [ 2, "single" ],
    }
}
```

## Reasoning
The `airbnb` styleguide is really great, but, we at Fortech, felt like it needed a few changes so we published this package which takes the core rules from the `airbnb` config and overwrites some of them based on our needs.

You can read more about some of the decisions [HERE](https://medium.freecodecamp.com/adding-some-air-to-the-airbnb-style-guide-3df40e31c57a#.jz912uw00).