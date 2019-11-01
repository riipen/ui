(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    "4Ow6": function(e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, "default", function() {
          return a;
        });
      var o = t("ERkP"),
        r = t.n(o),
        i = t("IUC9"),
        s = r.a.createElement,
        c = t("VpVA"),
        u = t("JZYK");
      function a() {
        return s(i.a, {
          path: "pages/customization/theming",
          req: c,
          reqSource: u
        });
      }
    },
    JZYK: function(e, n) {
      function t(e) {
        var n = new Error("Cannot find module '" + e + "'");
        throw ((n.code = "MODULE_NOT_FOUND"), n);
      }
      (t.keys = function() {
        return [];
      }),
        (t.resolve = t),
        (e.exports = t),
        (t.id = "JZYK");
    },
    VpVA: function(e, n, t) {
      var o = { "./theming.md": "ksnl" };
      function r(e) {
        var n = i(e);
        return t(n);
      }
      function i(e) {
        if (!t.o(o, e)) {
          var n = new Error("Cannot find module '" + e + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        return o[e];
      }
      (r.keys = function() {
        return Object.keys(o);
      }),
        (r.resolve = i),
        (e.exports = r),
        (r.id = "VpVA");
    },
    ksnl: function(e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          '# Theming\n\n<p class="description">Customize Riipen-UI with your theme. You can change the colors, the typography and much more.</p>\n\nThe theme specifies the color of the components, darkness of the surfaces, level of shadow, etc.\n\nTo promote greater consistency between apps, a default theme is provided.\n\n## Theme provider\n\nIf you wish to customize the theme, you need to use the `ThemeProvider` component in order to inject a theme into your application.\nHowever, this is optional; Riipen-UI components come with a default theme.\n\n`ThemeProvider` relies on the context feature of React to pass the theme down to the components,\nso you need to make sure that `ThemeProvider` is a parent of the components you are trying to customize.\n');
    },
    lwGd: function(e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/customization/theming",
        function() {
          return t("4Ow6");
        }
      ]);
    }
  },
  [["lwGd", 1, 0]]
]);
