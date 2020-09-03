module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "babel-plugin-module-resolver",
      {
        alias: {
          src: "./src",
          "riipen-ui": "../riipen-ui/src"
        }
      }
    ]
  ]
};
