module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true,
    
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    
  ],
  rules: {
    "no-unused-vars": "off",
    "no-mixed-spaces-and-tabs": 0,
    "react/prop-types": "off",
    "react/no-unescaped-entities":"off"
  }

  
};