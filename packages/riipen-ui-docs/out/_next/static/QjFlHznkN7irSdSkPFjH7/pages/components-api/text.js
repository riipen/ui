(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    CQAC: function(n, e, t) {
      var o = { "./text.md": "UbJ4" };
      function s(n) {
        var e = p(n);
        return t(e);
      }
      function p(n) {
        if (!t.o(o, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return o[n];
      }
      (s.keys = function() {
        return Object.keys(o);
      }),
        (s.resolve = p),
        (n.exports = s),
        (s.id = "CQAC");
    },
    UbJ4: function(n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          '\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Text API\n\n<p class="description">The API documentation of the Text React component.</p>\n\n## Import\n\n```js\nimport Text from \'@riipen-ui/Text\';\n\n// or\n\nimport { Text } from \'@riipen-ui\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/bundle-size).\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">any</span> |  | The content of the headline. |\n| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | List of additional classes to apply to this component. |\n| <span class="prop-name">color</span> | <span class="prop-type">"negative"<br>&#124;&nbsp;"positive"<br>&#124;&nbsp;"primary"<br>&#124;&nbsp;"secondary"<br>&#124;&nbsp;"tertiary"</span> |  | The color to use. |\n\n\nAny other props supplied will be provided to the root element.');
    },
    X2mP: function(n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components-api/text",
        function() {
          return t("iXun");
        }
      ]);
    },
    iXun: function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return i;
        });
      var o = t("ERkP"),
        s = t.n(o),
        p = t("IUC9"),
        r = s.a.createElement,
        a = t("CQAC");
      function i() {
        return r(p.a, { path: "pages/components-api/text", req: a });
      }
    }
  },
  [["X2mP", 1, 0]]
]);
