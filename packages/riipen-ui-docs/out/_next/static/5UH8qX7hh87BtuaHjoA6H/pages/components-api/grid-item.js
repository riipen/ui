(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    Cr7I: function(n, s, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components-api/grid-item",
        function() {
          return e("oCuL");
        }
      ]);
    },
    fJLz: function(n, s, e) {
      var p = { "./grid-item.md": "p5DX" };
      function a(n) {
        var s = r(n);
        return e(s);
      }
      function r(n) {
        if (!e.o(p, n)) {
          var s = new Error("Cannot find module '" + n + "'");
          throw ((s.code = "MODULE_NOT_FOUND"), s);
        }
        return p[n];
      }
      (a.keys = function() {
        return Object.keys(p);
      }),
        (a.resolve = r),
        (n.exports = a),
        (a.id = "fJLz");
    },
    oCuL: function(n, s, e) {
      "use strict";
      e.r(s),
        e.d(s, "default", function() {
          return i;
        });
      var p = e("ERkP"),
        a = e.n(p),
        r = e("IUC9"),
        t = a.a.createElement,
        o = e("fJLz");
      function i() {
        return t(r.a, { path: "pages/components-api/grid-item", req: o });
      }
    },
    p5DX: function(n, s, e) {
      "use strict";
      e.r(s),
        (s.default =
          '\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# GridItem API\n\n<p class="description">The API documentation of the GridItem React component.</p>\n\n## Import\n\n```js\nimport GridItem from \'@riipen-ui/GridItem\';\n\n// or\n\nimport { GridItem } from \'@riipen-ui\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/bundle-size).\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">any</span> |  | The content of the grid item. |\n| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | An array of custom CSS classes to apply. |\n| <span class="prop-name">lg</span> | <span class="prop-type">number<br>&#124;&nbsp;string</span> | <span class="prop-default">12</span> | The columns use at the large resolution. Can also be \'hidden\'. |\n| <span class="prop-name">md</span> | <span class="prop-type">number<br>&#124;&nbsp;string</span> |  | The columns use at the medium resolution. Can also be \'hidden\'. |\n| <span class="prop-name">sm</span> | <span class="prop-type">number<br>&#124;&nbsp;string</span> |  | The columns use at the small resolution. Can also be \'hidden\'. |\n| <span class="prop-name">spacing</span> | <span class="prop-type">0<br>&#124;&nbsp;1<br>&#124;&nbsp;2<br>&#124;&nbsp;3<br>&#124;&nbsp;4<br>&#124;&nbsp;5<br>&#124;&nbsp;6<br>&#124;&nbsp;7<br>&#124;&nbsp;8<br>&#124;&nbsp;9<br>&#124;&nbsp;10</span> | <span class="prop-default">1</span> | Defines the space between this grid item and other items. |\n\n\nAny other props supplied will be provided to the root element.');
    }
  },
  [["Cr7I", 1, 0]]
]);
