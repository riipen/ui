const alias = {
  src: "./src",
  "@riipen-ui": "../riipen-ui"
};

module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "babel-plugin-module-resolver",
      {
        alias
      }
    ]
  ]
};
