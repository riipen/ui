(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    F477: function(n, e, a) {
      var p = { "./headline.md": "jokH" };
      function s(n) {
        var e = o(n);
        return a(e);
      }
      function o(n) {
        if (!a.o(p, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return p[n];
      }
      (s.keys = function() {
        return Object.keys(p);
      }),
        (s.resolve = o),
        (n.exports = s),
        (s.id = "F477");
    },
    NDjJ: function(n, e, a) {
      "use strict";
      a.r(e),
        a.d(e, "default", function() {
          return i;
        });
      var p = a("ERkP"),
        s = a.n(p),
        o = a("IUC9"),
        t = s.a.createElement,
        r = a("F477");
      function i() {
        return t(o.a, { path: "pages/components-api/headline", req: r });
      }
    },
    hjdx: function(n, e, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components-api/headline",
        function() {
          return a("NDjJ");
        }
      ]);
    },
    jokH: function(n, e, a) {
      "use strict";
      a.r(e),
        (e.default =
          '\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Headline API\n\n<p class="description">The API documentation of the Headline React component.</p>\n\n## Import\n\n```js\nimport Headline from \'@riipen-ui/Headline\';\n\n// or\n\nimport { Headline } from \'@riipen-ui\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/bundle-size).\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">any</span> |  | The content of the headline. |\n| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | List of additional classes to apply to this component. |\n| <span class="prop-name">color</span> | <span class="prop-type">"negative"<br>&#124;&nbsp;"positive"<br>&#124;&nbsp;"primary"<br>&#124;&nbsp;"secondary"<br>&#124;&nbsp;"tertiary"</span> |  | The color to use. |\n| <span class="prop-name">variant</span> | <span class="prop-type">"h1"<br>&#124;&nbsp;"h2"<br>&#124;&nbsp;"h3"<br>&#124;&nbsp;"h4"<br>&#124;&nbsp;"h5"<br>&#124;&nbsp;"h6"</span> | <span class="prop-default">"h1"</span> | The variant of the headline in abbreviated format (h1, h2, etc). |\n\n\nAny other props supplied will be provided to the root element.');
    }
  },
  [["hjdx", 1, 0]]
]);
