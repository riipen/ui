(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    "9iLP": function(n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components-api/container",
        function() {
          return t("zjCn");
        }
      ]);
    },
    AWcB: function(n, e, t) {
      var o = { "./container.md": "rZcy" };
      function a(n) {
        var e = r(n);
        return t(e);
      }
      function r(n) {
        if (!t.o(o, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return o[n];
      }
      (a.keys = function() {
        return Object.keys(o);
      }),
        (a.resolve = r),
        (n.exports = a),
        (a.id = "AWcB");
    },
    rZcy: function(n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          '\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Container API\n\n<p class="description">The API documentation of the Container React component.</p>\n\n## Import\n\n```js\nimport Container from \'@riipen-ui/Container\';\n\n// or\n\nimport { Container } from \'@riipen-ui\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/bundle-size).\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">any</span> |  | The content inside the container. |\n| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | List of additional classes to apply to this component. |\n| <span class="prop-name">maxWidth</span> | <span class="prop-type">"sm"<br>&#124;&nbsp;"md"<br>&#124;&nbsp;"lg"<br>&#124;&nbsp;"xl"<br>&#124;&nbsp;false</span> | <span class="prop-default">"lg"</span> | Determine the max-width of the container. The container width grows with the size of the screen. |\n\n\nAny other props supplied will be provided to the root element.');
    },
    zjCn: function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return p;
        });
      var o = t("ERkP"),
        a = t.n(o),
        r = t("IUC9"),
        s = a.a.createElement,
        i = t("AWcB");
      function p() {
        return s(r.a, { path: "pages/components-api/container", req: i });
      }
    }
  },
  [["9iLP", 1, 0]]
]);
