(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    LBDZ: function(n, t, e) {
      "use strict";
      e.r(t),
        (t.default =
          '\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# List API\n\n<p class="description">The API documentation of the List React component.</p>\n\n## Import\n\n```js\nimport List from \'@riipen-ui/List\';\n\n// or\n\nimport { List } from \'@riipen-ui\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/bundle-size).\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the list. |\n| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | List of additional classes to apply to this component. |\n\n\nAny other props supplied will be provided to the root element.');
    },
    WC1I: function(n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, "default", function() {
          return p;
        });
      var o = e("ERkP"),
        i = e.n(o),
        s = e("IUC9"),
        r = i.a.createElement,
        a = e("fitR");
      function p() {
        return r(s.a, { path: "pages/components-api/list", req: a });
      }
    },
    fitR: function(n, t, e) {
      var o = { "./list.md": "LBDZ" };
      function i(n) {
        var t = s(n);
        return e(t);
      }
      function s(n) {
        if (!e.o(o, n)) {
          var t = new Error("Cannot find module '" + n + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return o[n];
      }
      (i.keys = function() {
        return Object.keys(o);
      }),
        (i.resolve = s),
        (n.exports = i),
        (i.id = "fitR");
    },
    nYgT: function(n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components-api/list",
        function() {
          return e("WC1I");
        }
      ]);
    }
  },
  [["nYgT", 1, 0]]
]);
