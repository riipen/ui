(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
  {
    YFJD: function(n, e) {
      function o(n) {
        var e = new Error("Cannot find module '" + n + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (o.keys = function() {
        return [];
      }),
        (o.resolve = o),
        (n.exports = o),
        (o.id = "YFJD");
    },
    jUjd: function(n, e, o) {
      var t = { "./components.md": "zr3I" };
      function r(n) {
        var e = s(n);
        return o(e);
      }
      function s(n) {
        if (!o.o(t, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return t[n];
      }
      (r.keys = function() {
        return Object.keys(t);
      }),
        (r.resolve = s),
        (n.exports = r),
        (r.id = "jUjd");
    },
    wAGJ: function(n, e, o) {
      "use strict";
      o.r(e),
        o.d(e, "default", function() {
          return u;
        });
      var t = o("ERkP"),
        r = o.n(t),
        s = o("IUC9"),
        i = r.a.createElement,
        c = o("jUjd"),
        a = o("YFJD");
      function u() {
        return i(s.a, {
          path: "pages/customization/components",
          req: c,
          reqSource: a
        });
      }
    },
    waUv: function(n, e, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/customization/components",
        function() {
          return o("wAGJ");
        }
      ]);
    },
    zr3I: function(n, e, o) {
      "use strict";
      o.r(e),
        (e.default =
          '# Customizing components\n\n<p class="description">You can easily customize the appearance of a Riipen-UI component.</p>\n\n## Overriding styles with classes\n\nThe only way to override the style of a component is to use **classes**.\nEvery component provides a `classes` property which accepts a list of extra classes\nto be applied to the root element.\n');
    }
  },
  [["waUv", 1, 0]]
]);
