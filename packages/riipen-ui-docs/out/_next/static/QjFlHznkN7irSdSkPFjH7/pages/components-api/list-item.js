(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    FJeQ: function(n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          '\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# ListItem API\n\n<p class="description">The API documentation of the ListItem React component.</p>\n\n## Import\n\n```js\nimport ListItem from \'@riipen-ui/ListItem\';\n\n// or\n\nimport { ListItem } from \'@riipen-ui\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/bundle-size).\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">any</span> |  | The content of the list item. |\n| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | Array of additional CSS classes to use. |\n\n\nAny other props supplied will be provided to the root element.');
    },
    KVGh: function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return p;
        });
      var o = t("ERkP"),
        i = t.n(o),
        s = t("IUC9"),
        r = i.a.createElement,
        a = t("qqYX");
      function p() {
        return r(s.a, { path: "pages/components-api/list-item", req: a });
      }
    },
    qqYX: function(n, e, t) {
      var o = { "./list-item.md": "FJeQ" };
      function i(n) {
        var e = s(n);
        return t(e);
      }
      function s(n) {
        if (!t.o(o, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return o[n];
      }
      (i.keys = function() {
        return Object.keys(o);
      }),
        (i.resolve = s),
        (n.exports = i),
        (i.id = "qqYX");
    },
    vCb7: function(n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components-api/list-item",
        function() {
          return t("KVGh");
        }
      ]);
    }
  },
  [["vCb7", 1, 0]]
]);
