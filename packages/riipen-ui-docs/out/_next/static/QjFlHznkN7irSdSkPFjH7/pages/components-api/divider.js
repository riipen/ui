(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "0q6K": function(n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components-api/divider",
        function() {
          return t("2dVt");
        }
      ]);
    },
    "1UN5": function(n, e, t) {
      var i = { "./divider.md": "X+GZ" };
      function o(n) {
        var e = r(n);
        return t(e);
      }
      function r(n) {
        if (!t.o(i, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return i[n];
      }
      (o.keys = function() {
        return Object.keys(i);
      }),
        (o.resolve = r),
        (n.exports = o),
        (o.id = "1UN5");
    },
    "2dVt": function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return p;
        });
      var i = t("ERkP"),
        o = t.n(i),
        r = t("IUC9"),
        a = o.a.createElement,
        s = t("1UN5");
      function p() {
        return a(r.a, { path: "pages/components-api/divider", req: s });
      }
    },
    "X+GZ": function(n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          '\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Divider API\n\n<p class="description">The API documentation of the Divider React component.</p>\n\n## Import\n\n```js\nimport Divider from \'@riipen-ui/Divider\';\n\n// or\n\nimport { Divider } from \'@riipen-ui\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/bundle-size).\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | List of additional classes to apply to this component. |\n| <span class="prop-name">variant</span> | <span class="prop-type">"fullWidth"<br>&#124;&nbsp;"middle"</span> | <span class="prop-default">"fullWidth"</span> | The variant to use. |\n\n\nAny other props supplied will be provided to the root element.');
    }
  },
  [["0q6K", 1, 0]]
]);
