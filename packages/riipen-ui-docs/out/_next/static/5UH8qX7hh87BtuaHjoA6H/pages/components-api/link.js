(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    "3Esh": function(n, e, s) {
      var p = { "./link.md": "Dodu" };
      function o(n) {
        var e = r(n);
        return s(e);
      }
      function r(n) {
        if (!s.o(p, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return p[n];
      }
      (o.keys = function() {
        return Object.keys(p);
      }),
        (o.resolve = r),
        (n.exports = o),
        (o.id = "3Esh");
    },
    Dodu: function(n, e, s) {
      "use strict";
      s.r(e),
        (e.default =
          '\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Link API\n\n<p class="description">The API documentation of the Link React component.</p>\n\n## Import\n\n```js\nimport Link from \'@riipen-ui/Link\';\n\n// or\n\nimport { Link } from \'@riipen-ui\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/bundle-size).\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name required">children&nbsp;*</span> | <span class="prop-type">any</span> |  | The content of the link. |\n| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | List of additional classes to apply to this component. |\n| <span class="prop-name">color</span> | <span class="prop-type">"inherit"<br>&#124;&nbsp;"negative"<br>&#124;&nbsp;"positive"<br>&#124;&nbsp;"primary"<br>&#124;&nbsp;"secondary"<br>&#124;&nbsp;"tertiary"</span> | <span class="prop-default">"primary"</span> | The color of the link. |\n| <span class="prop-name">underline</span> | <span class="prop-type">"none"<br>&#124;&nbsp;"hover"<br>&#124;&nbsp;"always"</span> | <span class="prop-default">"none"</span> | Controls when the link should have an underline. |\n\n\nAny other props supplied will be provided to the root element.');
    },
    rMz2: function(n, e, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components-api/link",
        function() {
          return s("uw5G");
        }
      ]);
    },
    uw5G: function(n, e, s) {
      "use strict";
      s.r(e),
        s.d(e, "default", function() {
          return i;
        });
      var p = s("ERkP"),
        o = s.n(p),
        r = s("IUC9"),
        a = o.a.createElement,
        t = s("3Esh");
      function i() {
        return a(r.a, { path: "pages/components-api/link", req: t });
      }
    }
  },
  [["rMz2", 1, 0]]
]);
