(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    "6Qvx": function(r, o, n) {
      "use strict";
      n.r(o),
        (o.default =
          '# Progress Bar\n\n<p class="description">Progress bars allow users to view the completion percentage of something.</p>\n\nProgress bars communicate progress or completion amound of a given task.\nThey are typically placed throughout the UI, in places like:\n\n- Cards\n- Forms\n- Toolbars\n\n## Colors\n\nProgress bars can be rendered with different colors for different use cases.\n\n{{"demo": "pages/components/progress-bar/Colors.js"}}\n\n');
    },
    I9wk: function(r, o, n) {
      "use strict";
      n.r(o),
        n.d(o, "default", function() {
          return c;
        });
      var e = n("ERkP"),
        t = n.n(e),
        s = n("3RhF"),
        i = t.a.createElement;
      function c() {
        return i(
          "div",
          null,
          i(s.a, { color: "primary", completion: 0.3 }),
          i(s.a, { color: "secondary", completion: 0.4 }),
          i(s.a, { color: "tertiary", completion: 0.5 }),
          i(s.a, { color: "positive", completion: 0.6 }),
          i(s.a, { color: "negative", completion: 0.7 })
        );
      }
    },
    Q8nK: function(r, o, n) {
      "use strict";
      n.r(o),
        n.d(o, "default", function() {
          return u;
        });
      var e = n("ERkP"),
        t = n.n(e),
        s = n("IUC9"),
        i = t.a.createElement,
        c = n("SubQ"),
        a = n("lsU5");
      function u() {
        return i(s.a, {
          path: "pages/components/progress-bar",
          req: c,
          reqSource: a
        });
      }
    },
    SubQ: function(r, o, n) {
      var e = { "./Colors.jsx": "I9wk", "./progress-bar.md": "6Qvx" };
      function t(r) {
        var o = s(r);
        return n(o);
      }
      function s(r) {
        if (!n.o(e, r)) {
          var o = new Error("Cannot find module '" + r + "'");
          throw ((o.code = "MODULE_NOT_FOUND"), o);
        }
        return e[r];
      }
      (t.keys = function() {
        return Object.keys(e);
      }),
        (t.resolve = s),
        (r.exports = t),
        (t.id = "SubQ");
    },
    lsU5: function(r, o, n) {
      var e = { "./Colors.jsx": "mvsW" };
      function t(r) {
        var o = s(r);
        return n(o);
      }
      function s(r) {
        if (!n.o(e, r)) {
          var o = new Error("Cannot find module '" + r + "'");
          throw ((o.code = "MODULE_NOT_FOUND"), o);
        }
        return e[r];
      }
      (t.keys = function() {
        return Object.keys(e);
      }),
        (t.resolve = s),
        (r.exports = t),
        (t.id = "lsU5");
    },
    mvsW: function(r, o, n) {
      "use strict";
      n.r(o),
        (o.default =
          'import React from "react";\n\nimport ProgressBar from "@riipen-ui/components/ProgressBar";\n\nexport default function Colors() {\n  return (\n    <div>\n      <ProgressBar color="primary" completion={0.3} />\n      <ProgressBar color="secondary" completion={0.4} />\n      <ProgressBar color="tertiary" completion={0.5} />\n      <ProgressBar color="positive" completion={0.6} />\n      <ProgressBar color="negative" completion={0.7} />\n    </div>\n  );\n}\n');
    },
    wW3F: function(r, o, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components/progress-bar",
        function() {
          return n("Q8nK");
        }
      ]);
    }
  },
  [["wW3F", 1, 0]]
]);
