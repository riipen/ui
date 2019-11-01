(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    "1tcU": function(n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components/grid",
        function() {
          return t("JFCO");
        }
      ]);
    },
    "4WTd": function(n, e, t) {
      var i = {
        "./Dynamic.jsx": "QbvM",
        "./Hiding.jsx": "5fKT",
        "./Spacing.jsx": "7uS2",
        "./Static.jsx": "VsMN"
      };
      function r(n) {
        var e = d(n);
        return t(e);
      }
      function d(n) {
        if (!t.o(i, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return i[n];
      }
      (r.keys = function() {
        return Object.keys(i);
      }),
        (r.resolve = d),
        (n.exports = r),
        (r.id = "4WTd");
    },
    "5fKT": function(n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          'import React from "react";\n\nimport Grid from "@riipen-ui/components/Grid";\nimport GridItem from "@riipen-ui/components/GridItem";\n\nexport default function CenteredGrid() {\n  const itemStyle = {\n    backgroundColor: "#fff",\n    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",\n    padding: "10px",\n    textAlign: "center"\n  };\n\n  return (\n    <Grid>\n      <GridItem lg={12} md="hidden">\n        <div style={itemStyle}>lg=12 md=hidden</div>\n      </GridItem>\n      <GridItem lg={12} sm="hidden">\n        <div style={itemStyle}>lg=12 sm=hidden</div>\n      </GridItem>\n    </Grid>\n  );\n}\n');
    },
    "7uS2": function(n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          'import React from "react";\n\nimport Grid from "@riipen-ui/components/Grid";\nimport GridItem from "@riipen-ui/components/GridItem";\n\nexport default function CenteredGrid() {\n  const itemStyle = {\n    backgroundColor: "#fff",\n    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",\n    padding: "10px",\n    textAlign: "center"\n  };\n\n  return (\n    <React.Fragment>\n      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(spacing => (\n        <div key={spacing} style={{ marginBottom: "5px" }}>\n          <Grid spacing={spacing}>\n            <GridItem lg={3}>\n              <div style={itemStyle}>{spacing}</div>\n            </GridItem>\n            <GridItem lg={3}>\n              <div style={itemStyle}>{spacing}</div>\n            </GridItem>\n            <GridItem lg={3}>\n              <div style={itemStyle}>{spacing}</div>\n            </GridItem>\n            <GridItem lg={3}>\n              <div style={itemStyle}>{spacing}</div>\n            </GridItem>\n          </Grid>\n        </div>\n      ))}\n    </React.Fragment>\n  );\n}\n');
    },
    AQ7e: function(n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          '# Grid\n\n<p class="description">The Riipen Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.</p>\n\nThe grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Riipen Design\u2019s responsive UI is based on a 12-column grid layout.\n\n## How it works\n\nThe grid system is implemented with the `Grid` component:\n\n- It uses [CSS\u2019s Flexible Box module](https://www.w3.org/TR/css-flexbox-1/) for high flexibility.\n- Item widths are set in percentages, so they\u2019re always fluid and sized relative to their parent element.\n- Items have padding to create the spacing between individual items.\n- There are five grid breakpoints: xs, sm, md, lg, and xl.\n\nIf you are **new to or unfamiliar with flexbox**, we encourage you to read this [CSS-Tricks flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) guide.\n\n### Static grid\n\nThe column widths apply at all breakpoints (i.e. `lg` and down).\n\n{{"demo": "pages/components/grid/Static.js"}}\n\n### Dynamic grid\n\nSome columns have multiple widths defined, causing the layout to change at the defined breakpoint.\n\n{{"demo": "pages/components/grid/Dynamic.js"}}\n\n### Hiding grid items\n\nGrid items can be hidden at certain resolutions and down. See below for an example of hiding items\nat both the medium breakpoint and the small breakpoint.\n\n{{"demo": "pages/components/grid/Hiding.js"}}\n\n### Spacing grid items\n\nGrid items have an automatic spacing applied to them based on the current theme. You can manipulate\nthis spacing by passing in a spacing factor size which makes the spacing between items larger or\nsmaller.\n\n{{"demo": "pages/components/grid/Spacing.js"}}\n');
    },
    HvG2: function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return s;
        });
      var i = t("ERkP"),
        r = t.n(i),
        d = t("yUWp"),
        l = t("Sx5O"),
        o = r.a.createElement;
      function s() {
        var n = {
          backgroundColor: "#fff",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",
          padding: "10px",
          textAlign: "center"
        };
        return o(
          d.a,
          null,
          o(l.a, { lg: 12 }, o("div", { style: n }, "lg=12")),
          o(l.a, { lg: 12, md: 6 }, o("div", { style: n }, "lg=12 md=6")),
          o(l.a, { lg: 12, md: 6 }, o("div", { style: n }, "lg=12 md=6")),
          o(
            l.a,
            { lg: 12, md: 6, sm: 3 },
            o("div", { style: n }, "lg=12 md=6 sm=3")
          ),
          o(
            l.a,
            { lg: 12, md: 6, sm: 3 },
            o("div", { style: n }, "lg=12 md=6 sm=3")
          ),
          o(
            l.a,
            { lg: 12, md: 6, sm: 3 },
            o("div", { style: n }, "lg=12 md=6 sm=3")
          ),
          o(
            l.a,
            { lg: 12, md: 6, sm: 3 },
            o("div", { style: n }, "lg=12 md=6 sm=3")
          )
        );
      }
    },
    JFCO: function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return a;
        });
      var i = t("ERkP"),
        r = t.n(i),
        d = t("IUC9"),
        l = r.a.createElement,
        o = t("JFGP"),
        s = t("4WTd");
      function a() {
        return l(d.a, { path: "pages/components/grid", req: o, reqSource: s });
      }
    },
    JFGP: function(n, e, t) {
      var i = {
        "./Dynamic.jsx": "HvG2",
        "./Hiding.jsx": "k9rU",
        "./Spacing.jsx": "ynSQ",
        "./Static.jsx": "LNc3",
        "./grid.md": "AQ7e"
      };
      function r(n) {
        var e = d(n);
        return t(e);
      }
      function d(n) {
        if (!t.o(i, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return i[n];
      }
      (r.keys = function() {
        return Object.keys(i);
      }),
        (r.resolve = d),
        (n.exports = r),
        (r.id = "JFGP");
    },
    LNc3: function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return s;
        });
      var i = t("ERkP"),
        r = t.n(i),
        d = t("yUWp"),
        l = t("Sx5O"),
        o = r.a.createElement;
      function s() {
        var n = {
          backgroundColor: "#fff",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",
          padding: "10px",
          textAlign: "center"
        };
        return o(
          d.a,
          { spacing: 1 },
          o(l.a, { lg: 12 }, o("div", { style: n }, "lg=12")),
          o(l.a, { lg: 6 }, o("div", { style: n }, "lg=6")),
          o(l.a, { lg: 6 }, o("div", { style: n }, "lg=6")),
          o(l.a, { lg: 3 }, o("div", { style: n }, "lg=3")),
          o(l.a, { lg: 3 }, o("div", { style: n }, "lg=3")),
          o(l.a, { lg: 3 }, o("div", { style: n }, "lg=3")),
          o(l.a, { lg: 3 }, o("div", { style: n }, "lg=3"))
        );
      }
    },
    QbvM: function(n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          'import React from "react";\n\nimport Grid from "@riipen-ui/components/Grid";\nimport GridItem from "@riipen-ui/components/GridItem";\n\nexport default function CenteredGrid() {\n  const itemStyle = {\n    backgroundColor: "#fff",\n    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",\n    padding: "10px",\n    textAlign: "center"\n  };\n\n  return (\n    <Grid>\n      <GridItem lg={12}>\n        <div style={itemStyle}>lg=12</div>\n      </GridItem>\n      <GridItem lg={12} md={6}>\n        <div style={itemStyle}>lg=12 md=6</div>\n      </GridItem>\n      <GridItem lg={12} md={6}>\n        <div style={itemStyle}>lg=12 md=6</div>\n      </GridItem>\n      <GridItem lg={12} md={6} sm={3}>\n        <div style={itemStyle}>lg=12 md=6 sm=3</div>\n      </GridItem>\n      <GridItem lg={12} md={6} sm={3}>\n        <div style={itemStyle}>lg=12 md=6 sm=3</div>\n      </GridItem>\n      <GridItem lg={12} md={6} sm={3}>\n        <div style={itemStyle}>lg=12 md=6 sm=3</div>\n      </GridItem>\n      <GridItem lg={12} md={6} sm={3}>\n        <div style={itemStyle}>lg=12 md=6 sm=3</div>\n      </GridItem>\n    </Grid>\n  );\n}\n');
    },
    VsMN: function(n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          'import React from "react";\n\nimport Grid from "@riipen-ui/components/Grid";\nimport GridItem from "@riipen-ui/components/GridItem";\n\nexport default function CenteredGrid() {\n  const itemStyle = {\n    backgroundColor: "#fff",\n    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",\n    padding: "10px",\n    textAlign: "center"\n  };\n\n  return (\n    <Grid spacing={1}>\n      <GridItem lg={12}>\n        <div style={itemStyle}>lg=12</div>\n      </GridItem>\n      <GridItem lg={6}>\n        <div style={itemStyle}>lg=6</div>\n      </GridItem>\n      <GridItem lg={6}>\n        <div style={itemStyle}>lg=6</div>\n      </GridItem>\n      <GridItem lg={3}>\n        <div style={itemStyle}>lg=3</div>\n      </GridItem>\n      <GridItem lg={3}>\n        <div style={itemStyle}>lg=3</div>\n      </GridItem>\n      <GridItem lg={3}>\n        <div style={itemStyle}>lg=3</div>\n      </GridItem>\n      <GridItem lg={3}>\n        <div style={itemStyle}>lg=3</div>\n      </GridItem>\n    </Grid>\n  );\n}\n');
    },
    k9rU: function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return s;
        });
      var i = t("ERkP"),
        r = t.n(i),
        d = t("yUWp"),
        l = t("Sx5O"),
        o = r.a.createElement;
      function s() {
        var n = {
          backgroundColor: "#fff",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",
          padding: "10px",
          textAlign: "center"
        };
        return o(
          d.a,
          null,
          o(
            l.a,
            { lg: 12, md: "hidden" },
            o("div", { style: n }, "lg=12 md=hidden")
          ),
          o(
            l.a,
            { lg: 12, sm: "hidden" },
            o("div", { style: n }, "lg=12 sm=hidden")
          )
        );
      }
    },
    ynSQ: function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return s;
        });
      var i = t("ERkP"),
        r = t.n(i),
        d = t("yUWp"),
        l = t("Sx5O"),
        o = r.a.createElement;
      function s() {
        var n = {
          backgroundColor: "#fff",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",
          padding: "10px",
          textAlign: "center"
        };
        return o(
          r.a.Fragment,
          null,
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(e) {
            return o(
              "div",
              { key: e, style: { marginBottom: "5px" } },
              o(
                d.a,
                { spacing: e },
                o(l.a, { lg: 3 }, o("div", { style: n }, e)),
                o(l.a, { lg: 3 }, o("div", { style: n }, e)),
                o(l.a, { lg: 3 }, o("div", { style: n }, e)),
                o(l.a, { lg: 3 }, o("div", { style: n }, e))
              )
            );
          })
        );
      }
    }
  },
  [["1tcU", 1, 0]]
]);
