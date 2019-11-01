(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "+CoC": function(n, s, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components-api/grid",
        function() {
          return e("jOWU");
        }
      ]);
    },
    ChcK: function(n, s, e) {
      "use strict";
      e.r(s),
        (s.default =
          '\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Grid API\n\n<p class="description">The API documentation of the Grid React component.</p>\n\n## Import\n\n```js\nimport Grid from \'@riipen-ui/Grid\';\n\n// or\n\nimport { Grid } from \'@riipen-ui\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/bundle-size).\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">alignItems</span> | <span class="prop-type">"flex-start"<br>&#124;&nbsp;"center"<br>&#124;&nbsp;"flex-end"<br>&#124;&nbsp;"stretch"<br>&#124;&nbsp;"baseline"</span> | <span class="prop-default">"flex-start"</span> | A whitelisted set of align items options for the grid. |\n| <span class="prop-name">children</span> | <span class="prop-type">any</span> |  | The content of the grid. |\n| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | An array of custom CSS classes to apply. |\n| <span class="prop-name">justifyContent</span> | <span class="prop-type">"flex-start"<br>&#124;&nbsp;"center"<br>&#124;&nbsp;"flex-end"<br>&#124;&nbsp;"space-between"<br>&#124;&nbsp;"space-around"<br>&#124;&nbsp;"space-evenly"</span> | <span class="prop-default">"flex-start"</span> | A whitelisted set of justify content options for the grid. |\n| <span class="prop-name">spacing</span> | <span class="prop-type">0<br>&#124;&nbsp;1<br>&#124;&nbsp;2<br>&#124;&nbsp;3<br>&#124;&nbsp;4<br>&#124;&nbsp;5<br>&#124;&nbsp;6<br>&#124;&nbsp;7<br>&#124;&nbsp;8<br>&#124;&nbsp;9<br>&#124;&nbsp;10</span> | <span class="prop-default">1</span> | Defines the space between grid items in the grid. |\n\n\nAny other props supplied will be provided to the root element.');
    },
    jOWU: function(n, s, e) {
      "use strict";
      e.r(s),
        e.d(s, "default", function() {
          return i;
        });
      var p = e("ERkP"),
        r = e.n(p),
        t = e("IUC9"),
        a = r.a.createElement,
        o = e("xwQ5");
      function i() {
        return a(t.a, { path: "pages/components-api/grid", req: o });
      }
    },
    xwQ5: function(n, s, e) {
      var p = { "./grid.md": "ChcK" };
      function r(n) {
        var s = t(n);
        return e(s);
      }
      function t(n) {
        if (!e.o(p, n)) {
          var s = new Error("Cannot find module '" + n + "'");
          throw ((s.code = "MODULE_NOT_FOUND"), s);
        }
        return p[n];
      }
      (r.keys = function() {
        return Object.keys(p);
      }),
        (r.resolve = t),
        (n.exports = r),
        (r.id = "xwQ5");
    }
  },
  [["+CoC", 1, 0]]
]);
