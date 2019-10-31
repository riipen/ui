module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "next/babel"
  ],
  plugins: [
    "react-require",
    'babel-plugin-optimize-clsx',
    [
      '@babel/plugin-proposal-class-properties',
      { loose: true }
    ],
    [
      '@babel/plugin-proposal-object-rest-spread',
      { loose: true }
    ],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-object-assign',
    '@babel/syntax-dynamic-import',
    '@babel/transform-modules-commonjs',
    [
      "babel-plugin-module-resolver",
      {
        alias: {
          src: "./src",
          "@riipen-ui": "../riipen-ui"
        }
      }
    ]
  ],
  "env": {
    "test": {
      "plugins": [
      ]
    }
  }
};
