webpackHotUpdate("static/development/pages/getting-started/installation.js",{

/***/ "./src/modules/components/MarkdownElement.jsx":
/*!****************************************************!*\
  !*** ./src/modules/components/MarkdownElement.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_prism__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/prism */ "./src/utils/prism.js");
/* harmony import */ var _riipen_ui_styles_ThemeContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../riipen-ui/styles/ThemeContext */ "../riipen-ui/styles/ThemeContext.js");






var _jsxFileName = "/home/jordan/Documents/riipen/github/ui/packages/riipen-ui-docs/src/modules/components/MarkdownElement.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;





var renderer = new marked__WEBPACK_IMPORTED_MODULE_7___default.a.Renderer();
var markedOptions = {
  // baseUrl: process.env.URL_PREFIX,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function highlight(code, language) {
    var prismLanguage;

    switch (language) {
      case "sh":
        prismLanguage = _utils_prism__WEBPACK_IMPORTED_MODULE_10__["default"].languages.bash;
        break;

      case "js":
        prismLanguage = _utils_prism__WEBPACK_IMPORTED_MODULE_10__["default"].languages.jsx;
        break;

      default:
        prismLanguage = _utils_prism__WEBPACK_IMPORTED_MODULE_10__["default"].languages[language];
        break;
    }

    if (!prismLanguage) {
      if (language) {
        throw new Error("unsupported language: \"".concat(language, "\", \"").concat(code, "\""));
      } else {
        prismLanguage = _utils_prism__WEBPACK_IMPORTED_MODULE_10__["default"].languages.jsx;
      }
    }

    return _utils_prism__WEBPACK_IMPORTED_MODULE_10__["default"].highlight(code, prismLanguage);
  },
  renderer: renderer
};

var MarkdownElement =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MarkdownElement, _React$Component);

  function MarkdownElement() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MarkdownElement);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MarkdownElement).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MarkdownElement, [{
    key: "render",
    value: function render() {
      var text = this.props.text;
      var theme = this.context;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("div", {
        dangerouslySetInnerHTML: {
          __html: marked__WEBPACK_IMPORTED_MODULE_7___default()(text, markedOptions)
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["941379264", [theme.typography.fontFamily, theme.palette.text.primary, theme.typography.h1.fontFamily, theme.typography.h1.fontSize, theme.typography.h1.fontWeight, theme.typography.h1.letterSpacing, theme.typography.h1.lineHeight, theme.typography.h2.fontFamily, theme.typography.h2.fontSize, theme.typography.h2.fontWeight, theme.typography.h2.letterSpacing, theme.typography.h2.lineHeight, theme.typography.h3.fontFamily, theme.typography.h3.fontSize, theme.typography.h3.fontWeight, theme.typography.h3.letterSpacing, theme.typography.h3.lineHeight, theme.typography.h4.fontFamily, theme.typography.h4.fontSize, theme.typography.h4.fontWeight, theme.typography.h4.letterSpacing, theme.typography.h4.lineHeight, theme.typography.h5.fontFamily, theme.typography.h5.fontSize, theme.typography.h5.fontWeight, theme.typography.h5.letterSpacing, theme.typography.h5.lineHeight, theme.typography.fontWeight.medium, theme.palette.secondary.main, theme.palette.text.hint, theme.palette.divider, theme.palette.text.primary, theme.palette.divider, theme.palette.text.primary, theme.typography.fontWeight.medium]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "941379264",
        dynamic: [theme.typography.fontFamily, theme.palette.text.primary, theme.typography.h1.fontFamily, theme.typography.h1.fontSize, theme.typography.h1.fontWeight, theme.typography.h1.letterSpacing, theme.typography.h1.lineHeight, theme.typography.h2.fontFamily, theme.typography.h2.fontSize, theme.typography.h2.fontWeight, theme.typography.h2.letterSpacing, theme.typography.h2.lineHeight, theme.typography.h3.fontFamily, theme.typography.h3.fontSize, theme.typography.h3.fontWeight, theme.typography.h3.letterSpacing, theme.typography.h3.lineHeight, theme.typography.h4.fontFamily, theme.typography.h4.fontSize, theme.typography.h4.fontWeight, theme.typography.h4.letterSpacing, theme.typography.h4.lineHeight, theme.typography.h5.fontFamily, theme.typography.h5.fontSize, theme.typography.h5.fontWeight, theme.typography.h5.letterSpacing, theme.typography.h5.lineHeight, theme.typography.fontWeight.medium, theme.palette.secondary.main, theme.palette.text.hint, theme.palette.divider, theme.palette.text.primary, theme.palette.divider, theme.palette.text.primary, theme.typography.fontWeight.medium],
        __self: this
      }, "div.__jsx-style-dynamic-selector{font-family:".concat(theme.typography.fontFamily, ";font-size:16px;color:").concat(theme.palette.text.primary, ";}div.__jsx-style-dynamic-selector h1{font-family:").concat(theme.typography.h1.fontFamily, ";font-size:").concat(theme.typography.h1.fontSize, ";font-weight:").concat(theme.typography.h1.fontWeight, ";-webkit-letter-spacing:").concat(theme.typography.h1.letterSpacing, ";-moz-letter-spacing:").concat(theme.typography.h1.letterSpacing, ";-ms-letter-spacing:").concat(theme.typography.h1.letterSpacing, ";letter-spacing:").concat(theme.typography.h1.letterSpacing, ";line-height:").concat(theme.typography.h1.lineHeight, ";margin:16px 0;}div.__jsx-style-dynamic-selector h2{font-family:").concat(theme.typography.h2.fontFamily, ";font-size:").concat(theme.typography.h2.fontSize, ";font-weight:").concat(theme.typography.h2.fontWeight, ";-webkit-letter-spacing:").concat(theme.typography.h2.letterSpacing, ";-moz-letter-spacing:").concat(theme.typography.h2.letterSpacing, ";-ms-letter-spacing:").concat(theme.typography.h2.letterSpacing, ";letter-spacing:").concat(theme.typography.h2.letterSpacing, ";line-height:").concat(theme.typography.h2.lineHeight, ";margin:40px 0 16px;}div.__jsx-style-dynamic-selector h3{font-family:").concat(theme.typography.h3.fontFamily, ";font-size:").concat(theme.typography.h3.fontSize, ";font-weight:").concat(theme.typography.h3.fontWeight, ";-webkit-letter-spacing:").concat(theme.typography.h3.letterSpacing, ";-moz-letter-spacing:").concat(theme.typography.h3.letterSpacing, ";-ms-letter-spacing:").concat(theme.typography.h3.letterSpacing, ";letter-spacing:").concat(theme.typography.h3.letterSpacing, ";line-height:").concat(theme.typography.h3.lineHeight, ";margin:40px 0 16px;}div.__jsx-style-dynamic-selector h4{font-family:").concat(theme.typography.h4.fontFamily, ";font-size:").concat(theme.typography.h4.fontSize, ";font-weight:").concat(theme.typography.h4.fontWeight, ";-webkit-letter-spacing:").concat(theme.typography.h4.letterSpacing, ";-moz-letter-spacing:").concat(theme.typography.h4.letterSpacing, ";-ms-letter-spacing:").concat(theme.typography.h4.letterSpacing, ";letter-spacing:").concat(theme.typography.h4.letterSpacing, ";line-height:").concat(theme.typography.h4.lineHeight, ";margin:32px 0 16px;}div.__jsx-style-dynamic-selector h5{font-family:").concat(theme.typography.h5.fontFamily, ";font-size:").concat(theme.typography.h5.fontSize, ";font-weight:").concat(theme.typography.h5.fontWeight, ";-webkit-letter-spacing:").concat(theme.typography.h5.letterSpacing, ";-moz-letter-spacing:").concat(theme.typography.h5.letterSpacing, ";-ms-letter-spacing:").concat(theme.typography.h5.letterSpacing, ";letter-spacing:").concat(theme.typography.h5.letterSpacing, ";line-height:").concat(theme.typography.h5.lineHeight, ";margin:32px 0 16px;}div.__jsx-style-dynamic-selector p{line-height:1.6;margin-top:0;margin-bottom:16px;}div.__jsx-style-dynamic-selector .description{font-size:25px;font-weight:").concat(theme.typography.fontWeight.medium, ";margin-bottom:40px;}div.__jsx-style-dynamic-selector a{color:").concat(theme.palette.secondary.main, ";-webkit-text-decoration:none;text-decoration:none;}div.__jsx-style-dynamic-selector a:hover{-webkit-text-decoration:underline;text-decoration:underline;}div.__jsx-style-dynamic-selector pre{background-color:#333;border-radius:2px;color:#fff;display:block;font-family:Consolas,\"Liberation Mono\",Menlo,Courier,monospace;font-size:14px;padding:18px 12px;overflow-x:auto;}div.__jsx-style-dynamic-selector table{border-collapse:collapse;border-spacing:0;display:block;margin-bottom:16px;overflow-x:auto;width:100%;}div.__jsx-style-dynamic-selector table .prop-name{font-family:'Consolas, \"Liberation Mono\", Menlo, monospace';font-size:13px;}div.__jsx-style-dynamic-selector table .required{color:#006500;}div.__jsx-style-dynamic-selector table .prop-type{color:#932981;font-family:'Consolas, \"Liberation Mono\", Menlo, monospace';font-size:13px;}div.__jsx-style-dynamic-selector table .prop-default{border-bottom:1px dotted ").concat(theme.palette.text.hint, ";font-family:'Consolas, \"Liberation Mono\", Menlo, monospace';font-size:13px;}div.__jsx-style-dynamic-selector td{border-bottom:1px solid ").concat(theme.palette.divider, ";color:").concat(theme.palette.text.primary, ";padding:16px;}div.__jsx-style-dynamic-selector th{border-bottom:1px solid ").concat(theme.palette.divider, ";color:").concat(theme.palette.text.primary, ";font-size:14px;font-weight:").concat(theme.typography.fontWeight.medium, ";line-height:24px;padding:16px;white-space:pre;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvcmRhbi9Eb2N1bWVudHMvcmlpcGVuL2dpdGh1Yi91aS9wYWNrYWdlcy9yaWlwZW4tdWktZG9jcy9zcmMvbW9kdWxlcy9jb21wb25lbnRzL01hcmtkb3duRWxlbWVudC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VvQixBQUdzRCxBQUtBLEFBUUEsQUFRQyxBQVFBLEFBUUEsQUFRMUIsQUFLRCxBQUtxQixBQUlWLEFBR0osQUFVRyxBQVFtQyxBQUk5QyxBQUdBLEFBS3lDLEFBS0QsQUFLQSxjQWpCeEQsQUFHOEQsQ0FyQ2xCLENBTDdCLE1BaUJLLEdBVUQsSUExQkUsT0FTRSxJQVFWLENBL0RJLEFBS3dCLEFBUUEsQ0FRQyxBQVFBLEFBUUEsQUFvQzFCLE1BMUJoQixHQWlCZ0IsR0FpQ3NCLEFBS0EsQ0FWd0IsQ0EzRnpCLEFBeUVoQixDQXZCQSxHQVFyQixBQXFCaUIsS0Fmb0QsU0F1QnBELENBYkMsQUFNbEIsQ0E3QkEsSUE5QzJDLEFBUUEsRUFRQyxBQVFBLEFBUUEsSUFrQjVDLEdBaUNBLENBU2UsQUFLRSxDQXJHakIsQUEwRWEsV0FDYixDQXNCQSxFQUs0QyxVQVgzQixNQXRGNkIsQUFRQyxHQVFBLEFBUUEsQUFRQSxJQTJCOUIsRUE0QmpCLGFBM0JvQixJQXNDRCxjQXJDRCxHQXNDSCxhQXJDZixBQXNDa0IsZ0JBQ2xCLHlIQXBHMkMsSUFRQyxHQVFBLEFBUUEsQUFRQSxrQ0EvQjVCLEtBUUssR0FRQSxBQVFBLEFBUUEsTUEvQnJCLFVBUUEsR0FRQSxBQVFBLEFBUUEiLCJmaWxlIjoiL2hvbWUvam9yZGFuL0RvY3VtZW50cy9yaWlwZW4vZ2l0aHViL3VpL3BhY2thZ2VzL3JpaXBlbi11aS1kb2NzL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvTWFya2Rvd25FbGVtZW50LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXJrZWQgZnJvbSBcIm1hcmtlZFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgcHJpc20gZnJvbSBcInNyYy91dGlscy9wcmlzbVwiO1xuXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gXCJAcmlpcGVuLXVpL3N0eWxlcy9UaGVtZUNvbnRleHRcIjtcblxuY29uc3QgcmVuZGVyZXIgPSBuZXcgbWFya2VkLlJlbmRlcmVyKCk7XG5cbmNvbnN0IG1hcmtlZE9wdGlvbnMgPSB7XG4gIC8vIGJhc2VVcmw6IHByb2Nlc3MuZW52LlVSTF9QUkVGSVgsXG4gIGdmbTogdHJ1ZSxcbiAgdGFibGVzOiB0cnVlLFxuICBicmVha3M6IGZhbHNlLFxuICBwZWRhbnRpYzogZmFsc2UsXG4gIHNhbml0aXplOiBmYWxzZSxcbiAgc21hcnRMaXN0czogdHJ1ZSxcbiAgc21hcnR5cGFudHM6IGZhbHNlLFxuICBoaWdobGlnaHQoY29kZSwgbGFuZ3VhZ2UpIHtcbiAgICBsZXQgcHJpc21MYW5ndWFnZTtcblxuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgIGNhc2UgXCJzaFwiOlxuICAgICAgICBwcmlzbUxhbmd1YWdlID0gcHJpc20ubGFuZ3VhZ2VzLmJhc2g7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwianNcIjpcbiAgICAgICAgcHJpc21MYW5ndWFnZSA9IHByaXNtLmxhbmd1YWdlcy5qc3g7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwcmlzbUxhbmd1YWdlID0gcHJpc20ubGFuZ3VhZ2VzW2xhbmd1YWdlXTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKCFwcmlzbUxhbmd1YWdlKSB7XG4gICAgICBpZiAobGFuZ3VhZ2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bnN1cHBvcnRlZCBsYW5ndWFnZTogXCIke2xhbmd1YWdlfVwiLCBcIiR7Y29kZX1cImApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJpc21MYW5ndWFnZSA9IHByaXNtLmxhbmd1YWdlcy5qc3g7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByaXNtLmhpZ2hsaWdodChjb2RlLCBwcmlzbUxhbmd1YWdlKTtcbiAgfSxcbiAgcmVuZGVyZXJcbn07XG5cbmNsYXNzIE1hcmtkb3duRWxlbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IFRoZW1lQ29udGV4dDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdGhlbWUgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtYXJrZWQodGV4dCwgbWFya2VkT3B0aW9ucykgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHl9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYgOmdsb2JhbChoMSkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUudHlwb2dyYXBoeS5oMS5mb250RmFtaWx5fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmgxLmZvbnRTaXplfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuaDEuZm9udFdlaWdodH07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogJHt0aGVtZS50eXBvZ3JhcGh5LmgxLmxldHRlclNwYWNpbmd9O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5oMS5saW5lSGVpZ2h0fTtcbiAgICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYgOmdsb2JhbChoMikge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUudHlwb2dyYXBoeS5oMi5mb250RmFtaWx5fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmgyLmZvbnRTaXplfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuaDIuZm9udFdlaWdodH07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogJHt0aGVtZS50eXBvZ3JhcGh5LmgyLmxldHRlclNwYWNpbmd9O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5oMi5saW5lSGVpZ2h0fTtcbiAgICAgICAgICAgIG1hcmdpbjogNDBweCAwIDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiA6Z2xvYmFsKGgzKSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHt0aGVtZS50eXBvZ3JhcGh5LmgzLmZvbnRGYW1pbHl9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaDMuZm9udFNpemV9O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5oMy5mb250V2VpZ2h0fTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAke3RoZW1lLnR5cG9ncmFwaHkuaDMubGV0dGVyU3BhY2luZ307XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmgzLmxpbmVIZWlnaHR9O1xuICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDAgMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IDpnbG9iYWwoaDQpIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLnR5cG9ncmFwaHkuaDQuZm9udEZhbWlseX07XG4gICAgICAgICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5oNC5mb250U2l6ZX07XG4gICAgICAgICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5Lmg0LmZvbnRXZWlnaHR9O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6ICR7dGhlbWUudHlwb2dyYXBoeS5oNC5sZXR0ZXJTcGFjaW5nfTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuaDQubGluZUhlaWdodH07XG4gICAgICAgICAgICBtYXJnaW46IDMycHggMCAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYgOmdsb2JhbChoNSkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUudHlwb2dyYXBoeS5oNS5mb250RmFtaWx5fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5Lmg1LmZvbnRTaXplfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuaDUuZm9udFdlaWdodH07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogJHt0aGVtZS50eXBvZ3JhcGh5Lmg1LmxldHRlclNwYWNpbmd9O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5oNS5saW5lSGVpZ2h0fTtcbiAgICAgICAgICAgIG1hcmdpbjogMzJweCAwIDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiA6Z2xvYmFsKHApIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IDpnbG9iYWwoLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtfTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiA6Z2xvYmFsKGEpIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYgOmdsb2JhbChhOmhvdmVyKSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IDpnbG9iYWwocHJlKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgTWVubG8sIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMTJweDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiA6Z2xvYmFsKHRhYmxlKSB7XG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiA6Z2xvYmFsKHRhYmxlIC5wcm9wLW5hbWUpIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBtb25vc3BhY2UnO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYgOmdsb2JhbCh0YWJsZSAucmVxdWlyZWQpIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA2NTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYgOmdsb2JhbCh0YWJsZSAucHJvcC10eXBlKSB7XG4gICAgICAgICAgICBjb2xvcjogIzkzMjk4MTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBtb25vc3BhY2UnO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYgOmdsb2JhbCh0YWJsZSAucHJvcC1kZWZhdWx0KSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICR7dGhlbWUucGFsZXR0ZS50ZXh0LmhpbnR9O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgTWVubG8sIG1vbm9zcGFjZSc7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiA6Z2xvYmFsKHRkKSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnl9O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IDpnbG9iYWwodGgpIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn07XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeX07XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtfTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25FbGVtZW50O1xuIl19 */\n/*@ sourceURL=/home/jordan/Documents/riipen/github/ui/packages/riipen-ui-docs/src/modules/components/MarkdownElement.jsx */")));
    }
  }]);

  return MarkdownElement;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(MarkdownElement, "propTypes", {
  text: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(MarkdownElement, "contextType", _riipen_ui_styles_ThemeContext__WEBPACK_IMPORTED_MODULE_11__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (MarkdownElement);

/***/ })

})
//# sourceMappingURL=installation.js.1efe9815233dba89e865.hot-update.js.map