(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    "2SBO": function(n, t, e) {
      var i = { "./Widths.jsx": "zmEu", "./container.md": "x6m0" };
      function o(n) {
        var t = r(n);
        return e(t);
      }
      function r(n) {
        if (!e.o(i, n)) {
          var t = new Error("Cannot find module '" + n + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return i[n];
      }
      (o.keys = function() {
        return Object.keys(i);
      }),
        (o.resolve = r),
        (n.exports = o),
        (o.id = "2SBO");
    },
    "3HLs": function(n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, "default", function() {
          return d;
        });
      var i = e("ERkP"),
        o = e.n(i),
        r = e("IUC9"),
        a = o.a.createElement,
        s = e("2SBO"),
        c = e("OTat");
      function d() {
        return a(r.a, {
          path: "pages/components/container",
          req: s,
          reqSource: c
        });
      }
    },
    JV3j: function(n, t, e) {
      "use strict";
      e.r(t),
        (t.default =
          'import React from "react";\n\nimport Container from "@riipen-ui/components/Container";\n\nexport default function Variants() {\n  const style = {\n    backgroundColor: "#fff",\n    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",\n    padding: "10px",\n    marginBottom: "10px",\n    textAlign: "center"\n  };\n\n  return (\n    <div>\n      <Container maxWidth="sm">\n        <div style={style}>sm</div>\n      </Container>\n      <Container maxWidth="md">\n        <div style={style}>md</div>\n      </Container>\n      <Container maxWidth="lg">\n        <div style={style}>lg</div>\n      </Container>\n      <Container maxWidth="xl">\n        <div style={style}>xl</div>\n      </Container>\n    </div>\n  );\n}\n');
    },
    OTat: function(n, t, e) {
      var i = { "./Widths.jsx": "JV3j" };
      function o(n) {
        var t = r(n);
        return e(t);
      }
      function r(n) {
        if (!e.o(i, n)) {
          var t = new Error("Cannot find module '" + n + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return i[n];
      }
      (o.keys = function() {
        return Object.keys(i);
      }),
        (o.resolve = r),
        (n.exports = o),
        (o.id = "OTat");
    },
    uYJF: function(n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components/container",
        function() {
          return e("3HLs");
        }
      ]);
    },
    x6m0: function(n, t, e) {
      "use strict";
      e.r(t),
        (t.default =
          '# Container\n\n<p class="description">The container constrains your content horizontally. It\'s the most basic layout element.</p>\n\nWhile containers can be nested, most layouts do not require a nested container.\n\n## Widths\n\nA container width is bounded by the `maxWidth` property value.\n\n{{"demo": "pages/components/container/Widths.js"}}\n');
    },
    zmEu: function(n, t, e) {
      "use strict";
      e.r(t);
      var i = e("ERkP"),
        o = e.n(i),
        r = e("h7sq"),
        a = e("tS02"),
        s = e("/XES"),
        c = e("ztBH"),
        d = e("Fayl"),
        u = e("znL5"),
        l = e("luus"),
        m = e.n(l),
        p = e("Hdoz"),
        x = e("5gMq"),
        f = o.a.createElement,
        h = (function(n) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(s.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, n),
            Object(a.a)(t, [
              {
                key: "render",
                value: function() {
                  var n = this.props,
                    t = n.classes,
                    e = n.children,
                    i = n.maxWidth,
                    r = this.context,
                    a = Object(p.a)(t);
                  return f(
                    o.a.Fragment,
                    null,
                    f(
                      "div",
                      {
                        className:
                          m.a.dynamic([
                            [
                              "811218066",
                              [i ? "".concat(r.breakpoints[i], "px") : "100%"]
                            ]
                          ]) +
                          " " +
                          (a || "")
                      },
                      e
                    ),
                    f(
                      m.a,
                      {
                        id: "811218066",
                        dynamic: [
                          i ? "".concat(r.breakpoints[i], "px") : "100%"
                        ]
                      },
                      [
                        "div.__jsx-style-dynamic-selector{margin:0 auto;max-width:".concat(
                          i ? "".concat(r.breakpoints[i], "px") : "100%",
                          ";position:relative;}"
                        )
                      ]
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.a.Component);
      Object(u.a)(h, "defaultProps", { classes: [], maxWidth: "lg" }),
        Object(u.a)(h, "contextType", x.a);
      var v = h;
      e.d(t, "default", function() {
        return b;
      });
      var y = o.a.createElement;
      function b() {
        var n = {
          backgroundColor: "#fff",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",
          padding: "10px",
          marginBottom: "10px",
          textAlign: "center"
        };
        return y(
          "div",
          null,
          y(v, { maxWidth: "sm" }, y("div", { style: n }, "sm")),
          y(v, { maxWidth: "md" }, y("div", { style: n }, "md")),
          y(v, { maxWidth: "lg" }, y("div", { style: n }, "lg")),
          y(v, { maxWidth: "xl" }, y("div", { style: n }, "xl"))
        );
      }
    }
  },
  [["uYJF", 1, 0]]
]);
