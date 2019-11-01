const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.URL_PREFIX": prod ? "/ui" : ""
};
