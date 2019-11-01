(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
  {
    "2tAi": function(n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/getting-started/usage",
        function() {
          return t("QS1g");
        }
      ]);
    },
    "6A+3": function(n, e, t) {
      var o = { "./usage.md": "Hona" };
      function i(n) {
        var e = a(n);
        return t(e);
      }
      function a(n) {
        if (!t.o(o, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return o[n];
      }
      (i.keys = function() {
        return Object.keys(o);
      }),
        (i.resolve = a),
        (n.exports = i),
        (i.id = "6A+3");
    },
    Hona: function(n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          "# Usage\n\n<p class=\"description\">Get started with React and Riipen-UI in no time.</p>\n\nMaterial-UI components work in isolation. **They are self-supporting**, and will only\ninject the styles they need to display. They don't rely on any global style-sheets.\n\nYou can use any of the components as demonstrated in the documentation.\nPlease refer to each component's [demo page](/components/buttons/) to see how they should be imported.\n\n## Quick start\n\nHere's a quick example to get you started, **it's literally all you need**:\n\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport Button from '@riipen-ui/Button';\n\nfunction App() {\n  return (\n    <Button color=\"primary\">\n      Hello World\n    </Button>\n  );\n}\n\nReactDOM.render(<App />, document.querySelector('#app'));\n```\n\n## Globals\n\nRiipen-UI usage experience can be improved with a handful of important globals that you\u2019ll need to be aware of.\n\n### Responsive meta tag\n\nTo ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>` element.\n\n```html\n<meta\n  name=\"viewport\"\n  content=\"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no\"\n/>\n```\n\n## Next steps\n\nNow that you have an idea of the basic setup, it's time to learn more about:\n\n- How to take advantage of the [theming solution](/customization/theming/).\n- How to [override](/customization/components/) the look and feel of the components.\n");
    },
    QS1g: function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return c;
        });
      var o = t("ERkP"),
        i = t.n(o),
        a = t("IUC9"),
        r = i.a.createElement,
        s = t("6A+3"),
        u = t("hR0i");
      function c() {
        return r(a.a, {
          path: "pages/getting-started/usage",
          req: s,
          reqSource: u
        });
      }
    },
    hR0i: function(n, e) {
      function t(n) {
        var e = new Error("Cannot find module '" + n + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (t.keys = function() {
        return [];
      }),
        (t.resolve = t),
        (n.exports = t),
        (t.id = "hR0i");
    }
  },
  [["2tAi", 1, 0]]
]);
