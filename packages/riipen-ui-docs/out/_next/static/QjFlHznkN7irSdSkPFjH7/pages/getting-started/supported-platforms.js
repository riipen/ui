(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    "+38h": function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/getting-started/supported-platforms",
        function() {
          return n("m0DR");
        }
      ]);
    },
    RTVw: function(e, t) {
      function n(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      (n.keys = function() {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = "RTVw");
    },
    ky85: function(e, t, n) {
      var o = { "./supported-platforms.md": "wtOw" };
      function r(e) {
        var t = s(e);
        return n(t);
      }
      function s(e) {
        if (!n.o(o, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return o[e];
      }
      (r.keys = function() {
        return Object.keys(o);
      }),
        (r.resolve = s),
        (e.exports = r),
        (r.id = "ky85");
    },
    m0DR: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function() {
          return u;
        });
      var o = n("ERkP"),
        r = n.n(o),
        s = n("IUC9"),
        i = r.a.createElement,
        a = n("ky85"),
        p = n("RTVw");
      function u() {
        return i(s.a, {
          path: "pages/getting-started/supported-platforms",
          req: a,
          reqSource: p
        });
      }
    },
    wtOw: function(e, t, n) {
      "use strict";
      n.r(t),
        (t.default =
          "# Supported Platforms\n\n<p class=\"description\">Learn about the platforms, from modern to old, that are supported by Riipen-UI.</p>\n\n## Browser\n\nRiipen-UI supports the latest, stable releases of all major browsers and platforms.\nIt also supports Internet Explorer 11.\nYou don't need to provide any JavaScript polyfill as it manages unsupported browser features internally and in isolation.\n\n| IE    | Edge   | Firefox | Chrome | Safari | Googlebot |\n|:------|:-------|:--------|:-------|:-------|:----------|\n| 11    | >= 14  | >= 52   | >= 49  | >= 10  | \u2705        |\n\nBecause Googlebot uses a web rendering service (WRS) to index the page content, it's critical that Riipen-UI supports it.\n[WRS regularly updates the rendering engine it uses](https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html).\nYou can expect Riipen-UI's components to render without major issues.\n\n## Server\n\nBecause Riipen-UI supports server-side rendering, it needs to support the latest, stable releases of [Node.js](https://github.com/nodejs/node).\nWhere possible, the [LTS versions that are in maintenance](https://github.com/nodejs/Release#lts-schedule1) are supported. Right now, it supports **node v8.x** and newer versions.\n\n### CSS prefixing\n\nBe aware that some CSS features require an additional postprocessing step\nthat adds vendor-specific prefixes. These prefixes are automatically added to the client.\n\n## React\n\nRiipen-UI supports the most recent versions of React, starting with ^16.8.0 (the one with the hooks).\n");
    }
  },
  [["+38h", 1, 0]]
]);
