/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./assets/styles/style.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./assets/styles/style.scss ***!
  \*******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/font.jpg */ "./assets/images/font.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/logo.png */ "./assets/images/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/images/dev-2.gif */ "./assets/images/dev-2.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: rgba(24, 113, 155, 0.52);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml {\n  font-size: 62.5%;\n  font-family: \"Orbitron\", sans-serif;\n}\n\nh1 {\n  color: #F9F9F9;\n  margin: 3.5rem 5rem;\n  font-size: 3rem;\n}\n\nh2 {\n  color: #F9F9F9;\n  margin: 3.5rem 5rem;\n  font-size: 2rem;\n}\n\nh3 {\n  color: aliceblue;\n  font-size: 1.5rem;\n}\n\na {\n  text-decoration-line: none;\n  font-size: 1.8rem;\n}\n\n#title {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\nheader {\n  background-color: aliceblue;\n  padding: 1.5rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\nheader #logo {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: contain;\n  width: 15.3rem;\n  height: 5.4rem;\n}\nheader #menu a {\n  padding: 0.5rem 1.5rem;\n  margin: 0 1rem;\n  color: #004aad;\n}\nheader #menu a:hover {\n  color: #004aad;\n}\nheader #log a {\n  padding: 0.6rem 0.8rem;\n  margin: 0 0.5rem;\n  font-size: 1.5rem;\n}\nheader #log a #in {\n  background-color: #004aad;\n  color: white;\n  padding: 0.125rem 0.25rem;\n  border-radius: 0.3rem;\n}\nheader #log #login, header #log #register {\n  position: relative;\n  box-sizing: border-box;\n  text-decoration: none;\n  color: #004aad;\n}\nheader #log #login::before, header #log #login::after, header #log #register::before, header #log #register::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  width: 0;\n  border-top: 0.2rem solid #004aad;\n  transition-duration: 0.5s;\n}\nheader #log #login::before, header #log #register::before {\n  top: -0.2rem;\n  left: 0;\n}\nheader #log #login::after, header #log #register::after {\n  bottom: -0.3rem;\n  right: 0;\n}\nheader #log #login:hover, header #log #register:hover {\n  color: black;\n}\nheader #log #login:hover::before, header #log #login:hover::after, header #log #register:hover::before, header #log #register:hover::after {\n  width: 75%;\n}\n\n#home:hover, #skills:hover, #application:hover, #contact:hover {\n  color: transparent;\n  text-shadow: 0.2rem 0.2rem 1rem #004aad;\n  animation: flicker 0.5s ease-in-out infinite alternate;\n}\n\n#formContact {\n  margin: 3.5rem 8.5rem;\n}\n#formContact #form {\n  width: 65%;\n  background-color: aliceblue;\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n  border: 0.3rem solid blue;\n}\n#formContact #form form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#formContact #form form #submit {\n  transition: all 0.3s ease-in-out;\n  background-color: rgba(0, 0, 255, 0.63);\n  color: white;\n  padding: 10px 20px;\n  border-radius: 5px;\n  border: none;\n  font-size: 18px;\n}\n#formContact #form form #submit:hover {\n  transform: scale(0.9);\n  box-shadow: 0 0 10px #000000;\n}\n#formContact #form form .field {\n  background-color: rgba(100, 149, 237, 0.44);\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  margin: 1.5rem;\n  padding: 1.5rem;\n}\n#formContact #form form .field label {\n  font-size: 1.5rem;\n  padding: 0.5rem 0;\n}\n#formContact #form form .field input[type=text], #formContact #form form .field input[type=email], #formContact #form form .field textarea {\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  border-color: #004aad;\n  border-radius: 0 0.5rem 0 0.5rem;\n  color: #004aad;\n  resize: none;\n}\n\n#font_logo {\n  margin: 7.5rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: contain;\n  width: 700px;\n  height: 450px;\n}\n\n#info {\n  margin: 3.5rem 2.5rem;\n}\n#info ul li {\n  color: #F9F9F9;\n  list-style-type: none;\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n}\n\n#targetDiv {\n  width: 90%;\n  margin: 3.5rem 2.5rem;\n}\n#targetDiv #target {\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  color: #F9F9F9;\n}\n#targetDiv .cursor {\n  font-size: 2rem;\n  animation: blink 1s infinite;\n  color: #F9F9F9;\n}\n\nfooter {\n  margin-top: 10rem;\n  padding: 2rem;\n  background-color: #29334b;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\nfooter #left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nfooter #middle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nfooter #right {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nfooter #right #logo_footer {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: contain;\n  width: 15.3rem;\n  height: 5.4rem;\n}\nfooter #copy {\n  width: 100%;\n  text-align: center;\n  color: #F9F9F9;\n  padding: 2.5rem;\n}\n\n.menu_footer {\n  padding: 1rem 2rem;\n}\n.menu_footer li {\n  list-style-type: none;\n  padding: 0.25rem;\n}\n.menu_footer li a {\n  color: #F9F9F9;\n  font-size: 1.2rem;\n}\n\n@keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes flicker {\n  0% {\n    opacity: 0.5;\n    text-shadow: 0.2rem 0.2rem 1rem #004aad;\n  }\n  100% {\n    opacity: 1;\n    text-shadow: 0.2rem 0.2rem 1rem #004aad;\n  }\n}\n@media screen and (max-width: 1050px) {\n  #log {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin: 1rem;\n  }\n  #formContact {\n    width: 80%;\n  }\n  #formContact #form {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 805px) {\n  h1 {\n    font-size: 2.5rem;\n  }\n  h2 {\n    font-size: 1.8rem;\n  }\n  header {\n    padding: 0.5rem;\n  }\n  #menu {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin: 1rem;\n  }\n  #formContact {\n    width: 80%;\n    margin: 2rem auto;\n  }\n  #formContact #form {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 600px) {\n  h1 {\n    font-size: 2rem;\n  }\n  h2 {\n    font-size: 1.5rem;\n  }\n  footer #right {\n    display: none;\n  }\n  header {\n    flex-direction: column;\n    flex-wrap: nowrap;\n  }\n  #menu {\n    flex-direction: column;\n  }\n  #formContact {\n    width: 98%;\n  }\n  #formContact #form form .field {\n    width: 90%;\n    margin: 0.5rem;\n    padding: 0.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./assets/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: rgba(24, 113, 155, 0.52);\r\n  background-image: url(\"/assets/images/font.jpg\");\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n  font-family: 'Orbitron', sans-serif;\r\n}\r\n\r\nh1 {\r\n  color: #F9F9F9;\r\n  margin: 3.5rem 5rem;\r\n  font-size: 3rem;\r\n}\r\n\r\nh2 {\r\n  color: #F9F9F9;\r\n  margin: 3.5rem 5rem;\r\n  font-size: 2rem;\r\n}\r\n\r\nh3 {\r\n  color: aliceblue;\r\n  font-size: 1.5rem;\r\n}\r\n\r\na {\r\n  text-decoration-line: none;\r\n  font-size: 1.8rem;\r\n}\r\n\r\n#title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\nheader {\r\n  background-color: aliceblue;\r\n  padding: 1.5rem;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: flex-end;\r\n  flex-wrap: wrap;\r\n\r\n  #logo {\r\n    background-image: url(\"/assets/images/logo.png\");\r\n    background-size: contain;\r\n    width: 15.3rem;\r\n    height: 5.4rem;\r\n  }\r\n\r\n  #menu {\r\n    a {\r\n      padding: 0.5rem 1.5rem;\r\n      margin: 0 1rem;\r\n      color: #004aad;\r\n    }\r\n\r\n    a:hover {\r\n      color: #004aad;\r\n    }\r\n  }\r\n\r\n  #log {\r\n    a {\r\n      padding: 0.6rem 0.8rem;\r\n      margin: 0 0.5rem;\r\n      font-size: 1.5rem;\r\n\r\n      #in {\r\n        background-color: #004aad;\r\n        color: white;\r\n        padding: 0.125rem 0.25rem;\r\n        border-radius: 0.3rem;\r\n      }\r\n    }\r\n\r\n    #login, #register {\r\n      position: relative;\r\n      box-sizing: border-box;\r\n      text-decoration: none;\r\n      color: #004aad;\r\n    }\r\n\r\n    #login::before, #login::after, #register::before, #register::after {\r\n      position: absolute;\r\n      display: block;\r\n      content: \"\";\r\n      width: 0;\r\n      border-top: 0.2rem solid #004aad;\r\n      transition-duration: 0.5s;\r\n    }\r\n\r\n    #login::before, #register::before {\r\n      top: -0.2rem;\r\n      left: 0;\r\n    }\r\n\r\n    #login::after, #register::after {\r\n      bottom: -0.3rem;\r\n      right: 0;\r\n    }\r\n\r\n    #login:hover, #register:hover {\r\n      color: black;\r\n    }\r\n\r\n    #login:hover::before, #login:hover::after, #register:hover::before, #register:hover::after {\r\n      width: 75%;\r\n    }\r\n  }\r\n}\r\n\r\n#home:hover, #skills:hover, #application:hover, #contact:hover {\r\n  color: transparent;\r\n  text-shadow: 0.2rem 0.2rem 1rem #004aad;\r\n  animation: flicker 0.5s ease-in-out infinite alternate;\r\n}\r\n\r\n#formContact {\r\n  margin: 3.5rem 8.5rem;\r\n\r\n  #form {\r\n    width: 65%;\r\n    background-color: aliceblue;\r\n    border-radius: 0.5rem;\r\n    padding: 1.5rem;\r\n    border: 0.3rem solid blue;\r\n\r\n    form {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n\r\n      #submit {\r\n        transition: all 0.3s ease-in-out;\r\n        background-color: rgba(0, 0, 255, 0.63);\r\n        color: white;\r\n        padding: 10px 20px;\r\n        border-radius: 5px;\r\n        border: none;\r\n        font-size: 18px;\r\n      }\r\n\r\n      #submit:hover {\r\n        transform: scale(0.9);\r\n        box-shadow: 0 0 10px #000000;\r\n      }\r\n\r\n      .field {\r\n        background-color: rgba(100, 149, 237, 0.44);\r\n        width: 90%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        margin: 1.5rem;\r\n        padding: 1.5rem;\r\n\r\n        label {\r\n          font-size: 1.5rem;\r\n          padding: 0.5rem 0;\r\n        }\r\n\r\n        input[type=text], input[type=email], textarea {\r\n          padding: 0.5rem;\r\n          font-size: 1.5rem;\r\n          border-color: #004aad;\r\n          border-radius: 0 0.5rem 0 0.5rem;\r\n          color: #004aad;\r\n          resize: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n#font_logo {\r\n  margin: 7.5rem;\r\n  background-image: url(\"/assets/images/dev-2.gif\");\r\n  background-size: contain;\r\n  width: 700px;\r\n  height: 450px;\r\n}\r\n\r\n#info {\r\n  margin: 3.5rem 2.5rem;\r\n\r\n  ul {\r\n    li {\r\n      color: #F9F9F9;\r\n      list-style-type: none;\r\n      font-size: 2rem;\r\n      letter-spacing: 0.1rem;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n#targetDiv {\r\n  width: 90%;\r\n  margin: 3.5rem 2.5rem;\r\n\r\n  #target {\r\n    font-size: 2rem;\r\n    letter-spacing: 0.1rem;\r\n    color: #F9F9F9;\r\n  }\r\n\r\n  .cursor {\r\n    font-size: 2rem;\r\n    animation: blink 1s infinite;\r\n    color: #F9F9F9;\r\n  }\r\n}\r\n\r\nfooter {\r\n  margin-top: 10rem;\r\n  padding: 2rem;\r\n  background-color: #29334b;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n\r\n  #left {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  #middle {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  #right {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    #logo_footer {\r\n      background-image: url(\"/assets/images/logo.png\");\r\n      background-size: contain;\r\n      width: 15.3rem;\r\n      height: 5.4rem;\r\n    }\r\n  }\r\n\r\n  #copy {\r\n    width: 100%;\r\n    text-align: center;\r\n    color: #F9F9F9;\r\n    padding: 2.5rem;\r\n  }\r\n}\r\n\r\n.menu_footer {\r\n  padding: 1rem 2rem;\r\n\r\n  li {\r\n    list-style-type: none;\r\n    padding: 0.25rem;\r\n\r\n    a {\r\n      color: #F9F9F9;\r\n      font-size: 1.2rem;\r\n    }\r\n  }\r\n}\r\n\r\n// Animation for cursor effect\r\n@keyframes blink {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n// Animation for border in input\r\n@keyframes flicker {\r\n  0% {\r\n    opacity: 0.5;\r\n    text-shadow: 0.2rem 0.2rem 1rem #004aad;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    text-shadow: 0.2rem 0.2rem 1rem #004aad;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1050px) {\r\n  #log {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 1rem;\r\n  }\r\n\r\n  #formContact {\r\n    width: 80%;\r\n    #form {\r\n      width: 100%;\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 805px) {\r\n\r\n  h1 {\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 1.8rem;\r\n  }\r\n\r\n  header {\r\n    padding: 0.5rem;\r\n  }\r\n\r\n  #menu {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 1rem;\r\n  }\r\n\r\n  #formContact {\r\n    width: 80%;\r\n    margin: 2rem auto;\r\n\r\n    #form {\r\n      width: 100%;\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  h1 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  footer {\r\n    #right {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  header {\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n  }\r\n\r\n  #menu {\r\n    flex-direction: column;\r\n  }\r\n\r\n  #formContact {\r\n    width: 98%;\r\n\r\n    #form {\r\n      form {\r\n        .field {\r\n          width: 90%;\r\n          margin: 0.5rem;\r\n          padding: 0.5rem;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./assets/styles/style.scss":
/*!**********************************!*\
  !*** ./assets/styles/style.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./assets/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/images/dev-2.gif":
/*!*********************************!*\
  !*** ./assets/images/dev-2.gif ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image/dev-2.gif";

/***/ }),

/***/ "./assets/images/font.jpg":
/*!********************************!*\
  !*** ./assets/images/font.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image/font.jpg";

/***/ }),

/***/ "./assets/images/logo.png":
/*!********************************!*\
  !*** ./assets/images/logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image/logo.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/build/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"front": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./assets/styles/style.scss");


const skill = document.getElementById('skills');
const home = document.getElementById('home');
const application = document.getElementById('application');
const contact = document.getElementById('contact');

// active page
function activePage(page, element) {
    if (window.location.search === page) {
        element.style.color = "#f80e0e";
    }
}

activePage("?c=home&a=skills", skill);
activePage("?c=home", home);
activePage("?c=home&a=application", application);
activePage("?c=home&a=contact", contact);

let text = "Bievenue sur mon portfolio, n'hésitez pas à m'envoyer un message !";
let target = document.getElementById("target");
let i = 0;

function typeWriter() {
    if (i < text.length) {
        target.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

typeWriter();

let cursor= document.getElementById("cursor");

function blinkCursor() {
    cursor.style.visibility = (cursor.style.visibility === "visible") ? "hidden" : "visible";
    setTimeout(blinkCursor, 500);
}

blinkCursor();







})();

/******/ })()
;
//# sourceMappingURL=front-bundle.js.map