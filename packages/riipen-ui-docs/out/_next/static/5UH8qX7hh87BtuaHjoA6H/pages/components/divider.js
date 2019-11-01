(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
  {
    BWC1: function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return s;
        });
      var r = t("ERkP"),
        i = t.n(r),
        o = t("IUC9"),
        a = i.a.createElement,
        u = t("E7h0"),
        d = t("llOS");
      function s() {
        return a(o.a, {
          path: "pages/components/divider",
          req: u,
          reqSource: d
        });
      }
    },
    E7h0: function(n, e, t) {
      var r = { "./Variants.jsx": "qNVB", "./divider.md": "RM7o" };
      function i(n) {
        var e = o(n);
        return t(e);
      }
      function o(n) {
        if (!t.o(r, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return r[n];
      }
      (i.keys = function() {
        return Object.keys(r);
      }),
        (i.resolve = o),
        (n.exports = i),
        (i.id = "E7h0");
    },
    "F/bu": function(n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components/divider",
        function() {
          return t("BWC1");
        }
      ]);
    },
    RM7o: function(n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          '# Divider\n\n<p class="description">A divider is a thin line that groups content</p>\n\nDividers separate content into clear groups.\n\n## Variants\n\nThe divider emulates `<hr>` but is rendered as a `<div>`. The variants available\nare shown below.\n\n{{"demo": "pages/components/divider/Variants.js"}}\n');
    },
    llOS: function(n, e, t) {
      var r = { "./Variants.jsx": "qOaB" };
      function i(n) {
        var e = o(n);
        return t(e);
      }
      function o(n) {
        if (!t.o(r, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return r[n];
      }
      (i.keys = function() {
        return Object.keys(r);
      }),
        (i.resolve = o),
        (n.exports = i),
        (i.id = "llOS");
    },
    qNVB: function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return u;
        });
      var r = t("ERkP"),
        i = t.n(r),
        o = t("8mzS"),
        a = i.a.createElement;
      function u() {
        return a(
          "div",
          null,
          a(o.a, { variant: "fullWidth" }),
          a("div", { style: { height: "10px" } }),
          a(o.a, { variant: "middle" })
        );
      }
    },
    qOaB: function(n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          'import React from "react";\n\nimport Divider from "@riipen-ui/components/Divider";\n\nexport default function Variants() {\n  const style = {\n    height: "10px"\n  };\n\n  return (\n    <div>\n      <Divider variant="fullWidth" />\n      <div style={style} />\n      <Divider variant="middle" />\n    </div>\n  );\n}\n');
    }
  },
  [["F/bu", 1, 0]]
]);
