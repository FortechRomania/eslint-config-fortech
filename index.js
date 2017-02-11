module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        // indentation
        "indent": [ 2, 4, { "SwitchCase": 1 } ],
        "max-len": [ 1, 120, { "ignoreUrls": true } ],

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
        
        // react
        "react/jsx-curly-spacing": [ 2, "always" ],
        "react/jsx-indent": [ 2, 4 ],
        "react/jsx-filename-extension": 0,
        "react/jsx-indent-props": [ 2, 4 ],

        //import
        "import/no-extraneous-dependencies": 0,
        "import/prefer-default-export": 0,
        "import/no-named-as-default-member": 0,
    }
};
