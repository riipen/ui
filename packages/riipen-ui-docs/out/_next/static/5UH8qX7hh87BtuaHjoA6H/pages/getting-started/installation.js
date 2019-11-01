(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    "54vA": function(n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, "default", function() {
          return p;
        });
      var o = e("ERkP"),
        i = e.n(o),
        a = e("IUC9"),
        r = i.a.createElement,
        s = e("PKKZ"),
        c = e("yBtR");
      function p() {
        return r(a.a, {
          path: "pages/getting-started/installation",
          req: s,
          reqSource: c
        });
      }
    },
    JROo: function(n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/getting-started/installation",
        function() {
          return e("54vA");
        }
      ]);
    },
    PKKZ: function(n, t, e) {
      var o = { "./installation.md": "ycl0" };
      function i(n) {
        var t = a(n);
        return e(t);
      }
      function a(n) {
        if (!e.o(o, n)) {
          var t = new Error("Cannot find module '" + n + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return o[n];
      }
      (i.keys = function() {
        return Object.keys(o);
      }),
        (i.resolve = a),
        (n.exports = i),
        (i.id = "PKKZ");
    },
    yBtR: function(n, t) {
      function e(n) {
        var t = new Error("Cannot find module '" + n + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      (e.keys = function() {
        return [];
      }),
        (e.resolve = e),
        (n.exports = e),
        (e.id = "yBtR");
    },
    ycl0: function(n, t, e) {
      "use strict";
      e.r(t),
        (t.default =
          '# Installation\n\nRiipen-UI is available as an [npm package](https://www.npmjs.com/package/@riipen-ui).\n\n## NPM\n\nTo install and save in your `package.json` dependencies, run:\n\n```sh\n// with npm\nnpm install @riipen-ui\n\n// with yarn\nyarn add @riipen-ui\n```\n\nPlease note that [react](https://www.npmjs.com/package/react) >= 16.8.0 and [react-dom](https://www.npmjs.com/package/react-dom) >= 16.8.0 are peer dependencies.\n\n## Roboto Font\n\nRiipen-UI was designed with the [Roboto](https://fonts.google.com/specimen/Roboto)\nfont in mind. Be sure to have Roboto available in your application with:\n\n```html\n<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />\n```\n');
    }
  },
  [["JROo", 1, 0]]
]);
