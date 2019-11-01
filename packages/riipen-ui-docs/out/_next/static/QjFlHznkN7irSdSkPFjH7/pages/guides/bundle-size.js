(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    "5BGl": function(n, e, t) {
      var o = { "./bundle-size.md": "Hi/c" };
      function i(n) {
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
      (i.keys = function() {
        return Object.keys(o);
      }),
        (i.resolve = r),
        (n.exports = i),
        (i.id = "5BGl");
    },
    "Hi/c": function(n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          "# Minimizing Bundle Size\n\n<p class=\"description\">Learn more about the tools you can leverage to reduce the bundle size.</p>\n\n## How to reduce the bundle size?\n\nFor convenience, Riipen-UI exposes its full API on the top-level `riipen-ui` import.\nIf you're using ES6 modules and a bundler that supports tree-shaking ([`webpack` >= 2.x](https://webpack.js.org/guides/tree-shaking/), [`parcel` with a flag](https://en.parceljs.org/cli.html#enable-experimental-scope-hoisting/tree-shaking-support)) you can safely\nuse named imports and expect only a minimal set of riipen-UI components in your bundle:\n\n```js\nimport { Button } from '@riipen-ui/components';\n```\n\n\u26a0\ufe0f Be aware that tree-shaking is an optimization that is usually only applied to production\nbundles. Development bundles will contain the full library which can lead to **slower\nstartup times**.\n\nIf this is an issue for you, you have various options:\n\n### Imports\n\nYou can use path imports to avoid pulling in unused modules.\nFor instance, use:\n\n```js\n// \ud83d\ude80 Fast\nimport Button from '@riipen-ui/components/Button';\n```\n\ninstead of top level imports (without a Babel plugin):\n\n```js\nimport { Button } from '@riipen-ui/components';\n```\n\nThis is the option we document in all the demos, since it requires no configuration.\nIt is encouraged for library authors extending the components.\nHead to [Option 2](#option-2) for the approach that yields the best DX and UX.\n\nWhile importing directly in this manner doesn't use the exports in `@riipen-ui/components/index.js`,\nthis file can serve as a handy reference as to which modules are public.\n\n## ECMAScript\n\nThe package published on npm is **transpiled**, with [Babel](https://github.com/babel/babel), to take into account the [supported platforms](/getting-started/supported-platforms/).\n");
    },
    "Ih+V": function(n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/guides/bundle-size",
        function() {
          return t("UdNe");
        }
      ]);
    },
    UdNe: function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return p;
        });
      var o = t("ERkP"),
        i = t.n(o),
        r = t("IUC9"),
        s = i.a.createElement,
        u = t("5BGl"),
        a = t("fhcM");
      function p() {
        return s(r.a, {
          path: "pages/guides/bundle-size",
          req: u,
          reqSource: a
        });
      }
    },
    fhcM: function(n, e) {
      function t(n) {
        var e = new Error("Cannot find module '" + n + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (t.keys = function() {
        return [];
      }),
        (t.resolve = t),
        (n.exports = t),
        (t.id = "fhcM");
    }
  },
  [["Ih+V", 1, 0]]
]);
