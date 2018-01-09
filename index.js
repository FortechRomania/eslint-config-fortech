module.exports = {
    "extends": "airbnb-base",
    "parser": "babel-eslint",
    "rules": {
        // indentation
        "indent": [ 2, 4, { "SwitchCase": 1 } ],
        "max-len": [ 1, 100, { "ignoreUrls": true } ],

        // spacing
        "space-in-parens": [ 2, "always" ],
        "space-before-function-paren": 0,
        "template-curly-spacing": [ 2, "always" ],
        "array-bracket-spacing": [ 2, "always" ],
        "object-curly-spacing": [ 2, "always" ],
        "computed-property-spacing": [ 2, "always" ],
        "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],

        // parens for arrow functions
        "arrow-parens": 0,
        
        // strings
        "quotes": [ 2, "double", "avoid-escape" ],

        // code arrangement matter
        "no-use-before-define": [ 2, { "functions": false } ],

        // make it meaningful
        "prefer-const": 1,
        
        // keep it simple
        "complexity": [ 1, 5 ],

        // let's be flexible'
        "prefer-arrow-callback": 0,

        // index files should not be forced to export default
        "import/prefer-default-export": 0,

        // test files mixed with project code
        "import/no-extraneous-dependencies": 0,

        // mark all usages of one line blocks without the curly brances
        "curly": [ 2, "all" ],

        // enforce one-true-brace-style standard in JS
        "brace-style": [ 2, "1tbs"]
    }
};
