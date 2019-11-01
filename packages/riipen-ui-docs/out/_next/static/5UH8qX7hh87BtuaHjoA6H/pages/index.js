(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
  {
    "0Hbp": function(n, t, e) {
      "use strict";
      e.r(t),
        (t.default =
          "# Riipen UI\n\nReact components for easier web development. Build your\napplications to spec with Riipen-UI.\n\n## Installation\n\nInstall Riipen-UI's source files via npm. We take care of\ninjecting the CSS needed.\n\n```sh\n$ npm install @riipen-ui\n```\n\nLoad the default Roboto font.\n\n```html\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\" />\n```\n\n[Installation docs](/getting-started/installation)\n\n## Usage\n\nRiipen-UI components work without any additional setup, and\ndon't pollute the global scope.\n\n```jsx\nimport React from 'react';\n\nimport Button from '@riipen-ui/Button';\n\nconst App = () => (\n  <Button color=\"primary\">\n    Hello World\n  </Button>\n);\n```\n\n[Usage docs](/getting-started/usage)");
    },
    H0SL: function(n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function() {
          return e("cMU6");
        }
      ]);
    },
    cMU6: function(n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, "default", function() {
          return p;
        });
      var o = e("ERkP"),
        i = e.n(o),
        r = e("IUC9"),
        a = i.a.createElement,
        s = e("jzg0");
      function p() {
        return a(r.a, { path: "pages/home", req: s });
      }
    },
    jzg0: function(n, t, e) {
      var o = { "./home.md": "0Hbp" };
      function i(n) {
        var t = r(n);
        return e(t);
      }
      function r(n) {
        if (!e.o(o, n)) {
          var t = new Error("Cannot find module '" + n + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return o[n];
      }
      (i.keys = function() {
        return Object.keys(o);
      }),
        (i.resolve = r),
        (n.exports = i),
        (i.id = "jzg0");
    }
  },
  [["H0SL", 1, 0]]
]);
