/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
}

html {
    height: 100%;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin: 0;
}

#title {
    font-size: 7vh;
}

.gameOutput {
    margin: 5vh 0 5vh 0;
}

.grids {
    width: 100vw;
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.gridLabels {
    margin: 3rem 0 3rem 0;
    display: flex;
    justify-content: space-around;
    width: 100vw;
}

.computerGrid, .playerGrid {
    display: flex;
    border: 2px black solid;
    height: 35vh;
    aspect-ratio: 1/1;
}

.xGroup {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.square {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

}

.square {
    border: 1px solid rgba(0, 0, 0, 0.158);
    padding: 0;
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff21;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
}

.square:hover {
    filter: brightness(85%)
}

.controls {
    height: 30vh;
}

.missed {
    color: black;
    position: absolute;
    font-size: 1.5rem;
}

.hit {
    color: white;
    position: absolute;
    font-size: 1.7rem;
}

.gameOutput {
    height: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,OAAO;IACP,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;AACX;;AAEA;IACI,aAAa;IACb,OAAO;IACP,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,sCAAsC;IACtC,UAAU;IACV,SAAS;IACT,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,eAAe;IACf,eAAe;IACf,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI;AACJ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB","sourcesContent":["*{\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    margin: 0;\n}\n\n#title {\n    font-size: 7vh;\n}\n\n.gameOutput {\n    margin: 5vh 0 5vh 0;\n}\n\n.grids {\n    width: 100vw;\n    flex: 1;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.gridLabels {\n    margin: 3rem 0 3rem 0;\n    display: flex;\n    justify-content: space-around;\n    width: 100vw;\n}\n\n.computerGrid, .playerGrid {\n    display: flex;\n    border: 2px black solid;\n    height: 35vh;\n    aspect-ratio: 1/1;\n}\n\n.xGroup {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.square {\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.square {\n    border: 1px solid rgba(0, 0, 0, 0.158);\n    padding: 0;\n    margin: 0;\n    text-decoration: none;\n    background: #0069ed;\n    color: #ffffff21;\n    font-family: sans-serif;\n    font-size: 1rem;\n    cursor: pointer;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\n.square:hover {\n    filter: brightness(85%)\n}\n\n.controls {\n    height: 30vh;\n}\n\n.missed {\n    color: black;\n    position: absolute;\n    font-size: 1.5rem;\n}\n\n.hit {\n    color: white;\n    position: absolute;\n    font-size: 1.7rem;\n}\n\n.gameOutput {\n    height: 2rem;\n}"],"sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/computerPlayerLogic.js":
/*!********************************************!*\
  !*** ./src/modules/computerPlayerLogic.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autoComputerAttack: () => (/* binding */ autoComputerAttack),
/* harmony export */   computerAttackSequence: () => (/* binding */ computerAttackSequence),
/* harmony export */   computerRandShipPlace: () => (/* binding */ computerRandShipPlace)
/* harmony export */ });
function autoComputerAttack(computer) {
  let coord = randCoord();
  while (computer.gameboard.sentAttacks.includes(coord)) {
    coord = randCoord();
  }
  return coord;
}

function randCoord() {
  let coord = '';
  coord += Math.floor(Math.random() * 10);
  coord += Math.floor(Math.random() * 10);
  return coord;
}

function computerAttackSequence(player, oppolentPlayer, renderShots) {
  const gameOutput = document.querySelector('.gameOutput');
  let computerThinkingTime = Math.floor(Math.random() * 3);
  gameOutput.textContent = 'computers turn';
  setTimeout(() => {
    player.gameboard.sendAttack(autoComputerAttack(player));
    oppolentPlayer.gameboard.receiveAttack(
      player.gameboard.sentAttacks[player.gameboard.sentAttacks.length - 1],
    );
    renderShots(oppolentPlayer.gameboard, 'playerGrid');
    gameOutput.textContent = 'players turn';
  }, computerThinkingTime * 1000);
}

function computerRandShipPlace(ships, gameboard) {
  if (gameboard.placedShips.length === gameboard.ships.length) {
    return;
  }
  function recCollisionCheck(coord, ship, axis, num = 0) {
    if (num === ship.length) return false;
    let tempArr = coord.split('');
    if (coord.length > 2) return true;
    if (axis === 'x') {
      tempArr[1] = parseInt(tempArr[1]) + 1;
    } else {
      tempArr[0] = parseInt(tempArr[0]) + 1;
    }
    for (let curShip of gameboard.placedShips) {
      for (let pos of curShip.coords) {
        if (pos === coord) return true;
      }
    }
    return recCollisionCheck(tempArr.join(''), ship, axis, num + 1);
  }
  function recValidCoordMaker(axis) {
    let coord = randCoord();
    if (!recCollisionCheck(coord, ships[0], axis)) {
      return coord;
    }
    return recValidCoordMaker(axis);
  }
  let zeroOrOne = Math.floor(Math.random() * 2);
  let axis;
  if (zeroOrOne > 0) {
    axis = 'x';
  } else {
    axis = 'y';
  }

  let workingCoord = recValidCoordMaker(axis);

  gameboard.placeShip(ships[0], workingCoord, axis);
  let temp = ships.slice();
  temp.shift();
  return computerRandShipPlace(temp, gameboard);
}



/***/ }),

/***/ "./src/modules/domFunctions.js":
/*!*************************************!*\
  !*** ./src/modules/domFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGrid: () => (/* binding */ createGrid),
/* harmony export */   recPlaceShips: () => (/* binding */ recPlaceShips),
/* harmony export */   renderShips: () => (/* binding */ renderShips),
/* harmony export */   renderShots: () => (/* binding */ renderShots)
/* harmony export */ });
/* harmony import */ var _computerPlayerLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computerPlayerLogic */ "./src/modules/computerPlayerLogic.js");


const gameOutput = document.querySelector('.gameOutput');

function createGrid(player, divClassName, oppolentPlayer) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const grid = document.querySelector(`.${divClassName}`);
  for (let i = 0; i < 10; i++) {
    let xAxisDiv = document.createElement('div');
    xAxisDiv.classList.add(`xGroup`);
    xAxisDiv.classList.add(`${i}`);
    grid.appendChild(xAxisDiv);
    for (let j = 0; j < 10; j++) {
      let square = document.createElement('button');
      square.textContent = `${alphabet.charAt(i)}${j}`;
      square.classList.add('square');
      square.id = `${divClassName}${i}${j}`;
      xAxisDiv.appendChild(square);
      if (divClassName === 'computerGrid') {
        square.addEventListener('click', () => {
          if (gameOutput.textContent !== 'players turn') return;
          if (
            gameOutput.textContent === 'Player Wins!!!' ||
            gameOutput.textContent === 'Player Loses.'
          ) {
            return;
          }
          if (oppolentPlayer.gameboard.sendAttack(`${i}${j}`)) {
            player.gameboard.receiveAttack(`${i}${j}`);
            renderShots(player.gameboard, divClassName);
            if (player.gameboard.allShipsSunk()) {
              gameOutput.textContent = 'Player Wins!!!';
              return;
            }
            (0,_computerPlayerLogic__WEBPACK_IMPORTED_MODULE_0__.computerAttackSequence)(player, oppolentPlayer, renderShots);
            if (oppolentPlayer.gameboard.allShipsSunk()) {
              gameOutput.textContent = 'Player Loses.';
              return;
            }
          }
        });
      }
    }
  }
}

function renderShips(gameboard, divClassName) {
  for (let ship of gameboard.ships) {
    for (let coord of ship.coords) {
      let square = document.getElementById(`${divClassName}${coord}`);
      square.style.backgroundColor = ship.color;
    }
  }
}

function renderShots(gameboard, divClassName) {
  for (let attack of gameboard.receivedAttacks) {
    let square = document.getElementById(`${divClassName}${attack}`);
    if (square.children.length > 0) continue;
    let x = document.createElement('div');
    x.textContent = 'X';
    if (gameboard.hitRecievedAttacks.includes(attack)) {
      x.classList.add('hit');
    } else {
      x.classList.add('missed');
    }
    square.appendChild(x);
  }
}

function recPlaceShips(ships, gameboard) {
  if (ships.length < 1) return;
  let tempShipsArr = ships.slice();
  const grid = document.querySelector('.playerGrid');
  gameOutput.textContent = `click a position on the player grid to place your ${ships[0].length} square long ${ships[0].name} vertically extending down from the position. press r to cycle horizontal/vertical`;
  let choice = '';
  function onRFunction(event) {
    if (event.key === 'r') {
      if (gameOutput.textContent === 'not enough room to place ship') return;
      if (gameOutput.textContent.includes('down')) {
        gameOutput.textContent = `click a position on the player grid to place your ${ships[0].length} square long ${ships[0].name} horizontally extending right from the position. press r to cycle horizontal/vertical`;
      } else {
        gameOutput.textContent = `click a position on the player grid to place your ${ships[0].length} square long ${ships[0].name} vertically extending down from the position. press r to cycle horizontal/vertical`;
      }
    }
  }
  document.addEventListener('keypress', onRFunction);
  function eventListener(event) {
    if (!gameOutput.textContent.includes('click')) return;
    let axis;
    if (gameOutput.textContent.includes('down')) {
      axis = 'x';
    } else {
      axis = 'y';
    }
    function recCollisionCheck(coord, ship, axis, num = 0) {
      if (num === ship.length) return false;
      let tempArr = coord.split('');
      if (coord.length > 2) return true;
      if (axis === 'x') {
        tempArr[1] = parseInt(tempArr[1]) + 1;
      } else {
        tempArr[0] = parseInt(tempArr[0]) + 1;
      }
      for (let curShip of gameboard.placedShips) {
        for (let pos of curShip.coords) {
          if (pos === coord) return true;
        }
      }
      return recCollisionCheck(tempArr.join(''), ship, axis, num + 1);
    }

    choice = event.currentTarget.id.slice(10, 12);

    if (recCollisionCheck(choice, ships[0], axis)) {
      let temp = gameOutput.textContent;
      gameOutput.textContent = 'not enough room to place ship';
      setTimeout(() => {
        gameOutput.textContent = temp;
      }, 1000);
      return;
    }

    gameboard.placeShip(ships[0], choice, axis);
    renderShips(gameboard, 'playerGrid');
    removeEventLisners();
    tempShipsArr.shift();
    return recPlaceShips(tempShipsArr, gameboard);
  }
  for (let gridLine of grid.children) {
    for (let square of gridLine.children) {
      square.addEventListener('click', eventListener);
    }
  }
  function removeEventLisners() {
    document.removeEventListener('keypress', onRFunction);
    for (let gridLine of grid.children) {
      for (let square of gridLine.children) {
        square.removeEventListener('click', eventListener);
      }
    }
    gameOutput.textContent = 'players turn';
  }
}




/***/ }),

/***/ "./src/modules/gameClasses.js":
/*!************************************!*\
  !*** ./src/modules/gameClasses.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length, name, color) {
    this.length = length;
    this.name = name;
    this.color = color;
  }
  coords = [];
  hits = 0;

  hit() {
    this.hits++;
  }

  isSunk() {
    if (this.hits >= this.length) return true;
    return false;
  }
}

class GameBoard {
  constructor(
    ships = [
      new Ship(5, 'Carrier', 'red'),
      new Ship(4, 'Battleship', 'blue'),
      new Ship(3, 'Cruiser', 'green'),
      new Ship(3, 'Submarine', 'yellow'),
      new Ship(2, 'Destroyer', 'purple'),
    ],
    isComputer,
  ) {
    this.ships = ships;
    this.isComputer = isComputer;
  }

  receivedAttacks = [];
  missedRecievedAttacks = [];
  hitRecievedAttacks = [];
  sentAttacks = [];
  placedShips = [];
  oppolentsGameboard;

  placeShip(ship, coOrd, axis = 'x') {
    if (axis === 'y') {
      ship.coords.push(coOrd);
      for (let i = 1; i < ship.length; i++) {
        let tCoords = `${i + parseInt(coOrd.charAt(0))}${coOrd.charAt(1)}`;
        ship.coords.push(tCoords);
        if (!this.placedShips.includes(ship)) {
          this.placedShips.push(ship);
        }
      }
    } else if (axis === 'x') {
      ship.coords.push(coOrd);
      for (let i = 1; i < ship.length; i++) {
        let tCoords = `${coOrd.charAt(0)}${i + parseInt(coOrd.charAt(1))}`;
        ship.coords.push(tCoords);
        if (!this.placedShips.includes(ship)) {
          this.placedShips.push(ship);
        }
      }
    }
  }
  sendAttack(coOrds) {
    if (this.sentAttacks.includes(coOrds)) return false;
    this.sentAttacks.push(coOrds);
    return true;
  }

  receiveAttack(coOrds) {
    this.receivedAttacks.push(coOrds);
    for (let ship of this.ships) {
      if (ship.coords.includes(coOrds)) {
        ship.hit();
        this.hitRecievedAttacks.push(coOrds);

        if (this.isComputer === true) this.autoComputerAttack();
        return true;
      }
    }
    this.missedRecievedAttacks.push(coOrds);
    if (this.isComputer === true) this.autoComputerAttack();
    return false;
  }

  allShipsSunk() {
    for (let ship of this.ships) {
      if (!ship.isSunk()) return false;
    }
    return true;
  }
}

class Player {
  constructor(name) {
    this.name = name;
  }

  gameboard = new GameBoard();
}




/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_gameClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameClasses.js */ "./src/modules/gameClasses.js");
/* harmony import */ var _modules_domFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/domFunctions.js */ "./src/modules/domFunctions.js");
/* harmony import */ var _modules_computerPlayerLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/computerPlayerLogic.js */ "./src/modules/computerPlayerLogic.js");





function newGame() {
  const player = new _modules_gameClasses_js__WEBPACK_IMPORTED_MODULE_1__.Player('test player');
  const computer = new _modules_gameClasses_js__WEBPACK_IMPORTED_MODULE_1__.Player('bzz beep', true);
  computer.gameboard.oppolentsTurn = true;

  (0,_modules_domFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createGrid)(computer, 'computerGrid', player);
  (0,_modules_domFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createGrid)(player, 'playerGrid', computer);

  (0,_modules_domFunctions_js__WEBPACK_IMPORTED_MODULE_2__.recPlaceShips)(player.gameboard.ships, player.gameboard);
  (0,_modules_computerPlayerLogic_js__WEBPACK_IMPORTED_MODULE_3__.computerRandShipPlace)(computer.gameboard.ships, computer.gameboard);

  (0,_modules_domFunctions_js__WEBPACK_IMPORTED_MODULE_2__.renderShips)(player.gameboard, 'playerGrid');
}

const startGameBtn = document.getElementById('StartNewGame');
startGameBtn.addEventListener('click', () => {
  location.reload();
});

newGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JsYW5rLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL3NyYy9tb2R1bGVzL2NvbXB1dGVyUGxheWVyTG9naWMuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9zcmMvbW9kdWxlcy9kb21GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmxhbmsvLi9zcmMvbW9kdWxlcy9nYW1lQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9ibGFuay8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmxhbmsvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ibGFuay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JsYW5rL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ibGFuay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbiN0aXRsZSB7XG4gICAgZm9udC1zaXplOiA3dmg7XG59XG5cbi5nYW1lT3V0cHV0IHtcbiAgICBtYXJnaW46IDV2aCAwIDV2aCAwO1xufVxuXG4uZ3JpZHMge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdyaWRMYWJlbHMge1xuICAgIG1hcmdpbjogM3JlbSAwIDNyZW0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuLmNvbXB1dGVyR3JpZCwgLnBsYXllckdyaWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XG4gICAgaGVpZ2h0OiAzNXZoO1xuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xufVxuXG4ueEdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbn1cblxuLnNxdWFyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLnNxdWFyZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1OCk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICMwMDY5ZWQ7XG4gICAgY29sb3I6ICNmZmZmZmYyMTtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5zcXVhcmU6aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpXG59XG5cbi5jb250cm9scyB7XG4gICAgaGVpZ2h0OiAzMHZoO1xufVxuXG4ubWlzc2VkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uaGl0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4uZ2FtZU91dHB1dCB7XG4gICAgaGVpZ2h0OiAycmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixPQUFPO0lBQ1AsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLFVBQVU7SUFDVixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgICBmb250LXNpemU6IDd2aDtcXG59XFxuXFxuLmdhbWVPdXRwdXQge1xcbiAgICBtYXJnaW46IDV2aCAwIDV2aCAwO1xcbn1cXG5cXG4uZ3JpZHMge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZExhYmVscyB7XFxuICAgIG1hcmdpbjogM3JlbSAwIDNyZW0gMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmNvbXB1dGVyR3JpZCwgLnBsYXllckdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuXFxuLnhHcm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNTgpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogIzAwNjllZDtcXG4gICAgY29sb3I6ICNmZmZmZmYyMTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnNxdWFyZTpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpXFxufVxcblxcbi5jb250cm9scyB7XFxuICAgIGhlaWdodDogMzB2aDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLmdhbWVPdXRwdXQge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBhdXRvQ29tcHV0ZXJBdHRhY2soY29tcHV0ZXIpIHtcbiAgbGV0IGNvb3JkID0gcmFuZENvb3JkKCk7XG4gIHdoaWxlIChjb21wdXRlci5nYW1lYm9hcmQuc2VudEF0dGFja3MuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgY29vcmQgPSByYW5kQ29vcmQoKTtcbiAgfVxuICByZXR1cm4gY29vcmQ7XG59XG5cbmZ1bmN0aW9uIHJhbmRDb29yZCgpIHtcbiAgbGV0IGNvb3JkID0gJyc7XG4gIGNvb3JkICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgY29vcmQgKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICByZXR1cm4gY29vcmQ7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrU2VxdWVuY2UocGxheWVyLCBvcHBvbGVudFBsYXllciwgcmVuZGVyU2hvdHMpIHtcbiAgY29uc3QgZ2FtZU91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lT3V0cHV0Jyk7XG4gIGxldCBjb21wdXRlclRoaW5raW5nVGltZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xuICBnYW1lT3V0cHV0LnRleHRDb250ZW50ID0gJ2NvbXB1dGVycyB0dXJuJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcGxheWVyLmdhbWVib2FyZC5zZW5kQXR0YWNrKGF1dG9Db21wdXRlckF0dGFjayhwbGF5ZXIpKTtcbiAgICBvcHBvbGVudFBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgIHBsYXllci5nYW1lYm9hcmQuc2VudEF0dGFja3NbcGxheWVyLmdhbWVib2FyZC5zZW50QXR0YWNrcy5sZW5ndGggLSAxXSxcbiAgICApO1xuICAgIHJlbmRlclNob3RzKG9wcG9sZW50UGxheWVyLmdhbWVib2FyZCwgJ3BsYXllckdyaWQnKTtcbiAgICBnYW1lT3V0cHV0LnRleHRDb250ZW50ID0gJ3BsYXllcnMgdHVybic7XG4gIH0sIGNvbXB1dGVyVGhpbmtpbmdUaW1lICogMTAwMCk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyUmFuZFNoaXBQbGFjZShzaGlwcywgZ2FtZWJvYXJkKSB7XG4gIGlmIChnYW1lYm9hcmQucGxhY2VkU2hpcHMubGVuZ3RoID09PSBnYW1lYm9hcmQuc2hpcHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZ1bmN0aW9uIHJlY0NvbGxpc2lvbkNoZWNrKGNvb3JkLCBzaGlwLCBheGlzLCBudW0gPSAwKSB7XG4gICAgaWYgKG51bSA9PT0gc2hpcC5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBsZXQgdGVtcEFyciA9IGNvb3JkLnNwbGl0KCcnKTtcbiAgICBpZiAoY29vcmQubGVuZ3RoID4gMikgcmV0dXJuIHRydWU7XG4gICAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgICAgdGVtcEFyclsxXSA9IHBhcnNlSW50KHRlbXBBcnJbMV0pICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcEFyclswXSA9IHBhcnNlSW50KHRlbXBBcnJbMF0pICsgMTtcbiAgICB9XG4gICAgZm9yIChsZXQgY3VyU2hpcCBvZiBnYW1lYm9hcmQucGxhY2VkU2hpcHMpIHtcbiAgICAgIGZvciAobGV0IHBvcyBvZiBjdXJTaGlwLmNvb3Jkcykge1xuICAgICAgICBpZiAocG9zID09PSBjb29yZCkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZWNDb2xsaXNpb25DaGVjayh0ZW1wQXJyLmpvaW4oJycpLCBzaGlwLCBheGlzLCBudW0gKyAxKTtcbiAgfVxuICBmdW5jdGlvbiByZWNWYWxpZENvb3JkTWFrZXIoYXhpcykge1xuICAgIGxldCBjb29yZCA9IHJhbmRDb29yZCgpO1xuICAgIGlmICghcmVjQ29sbGlzaW9uQ2hlY2soY29vcmQsIHNoaXBzWzBdLCBheGlzKSkge1xuICAgICAgcmV0dXJuIGNvb3JkO1xuICAgIH1cbiAgICByZXR1cm4gcmVjVmFsaWRDb29yZE1ha2VyKGF4aXMpO1xuICB9XG4gIGxldCB6ZXJvT3JPbmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgbGV0IGF4aXM7XG4gIGlmICh6ZXJvT3JPbmUgPiAwKSB7XG4gICAgYXhpcyA9ICd4JztcbiAgfSBlbHNlIHtcbiAgICBheGlzID0gJ3knO1xuICB9XG5cbiAgbGV0IHdvcmtpbmdDb29yZCA9IHJlY1ZhbGlkQ29vcmRNYWtlcihheGlzKTtcblxuICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBzWzBdLCB3b3JraW5nQ29vcmQsIGF4aXMpO1xuICBsZXQgdGVtcCA9IHNoaXBzLnNsaWNlKCk7XG4gIHRlbXAuc2hpZnQoKTtcbiAgcmV0dXJuIGNvbXB1dGVyUmFuZFNoaXBQbGFjZSh0ZW1wLCBnYW1lYm9hcmQpO1xufVxuZXhwb3J0IHsgYXV0b0NvbXB1dGVyQXR0YWNrLCBjb21wdXRlckF0dGFja1NlcXVlbmNlLCBjb21wdXRlclJhbmRTaGlwUGxhY2UgfTtcbiIsImltcG9ydCB7IGNvbXB1dGVyQXR0YWNrU2VxdWVuY2UgfSBmcm9tICcuL2NvbXB1dGVyUGxheWVyTG9naWMnO1xuXG5jb25zdCBnYW1lT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVPdXRwdXQnKTtcblxuZnVuY3Rpb24gY3JlYXRlR3JpZChwbGF5ZXIsIGRpdkNsYXNzTmFtZSwgb3Bwb2xlbnRQbGF5ZXIpIHtcbiAgY29uc3QgYWxwaGFiZXQgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZGl2Q2xhc3NOYW1lfWApO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBsZXQgeEF4aXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB4QXhpc0Rpdi5jbGFzc0xpc3QuYWRkKGB4R3JvdXBgKTtcbiAgICB4QXhpc0Rpdi5jbGFzc0xpc3QuYWRkKGAke2l9YCk7XG4gICAgZ3JpZC5hcHBlbmRDaGlsZCh4QXhpc0Rpdik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBgJHthbHBoYWJldC5jaGFyQXQoaSl9JHtqfWA7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICBzcXVhcmUuaWQgPSBgJHtkaXZDbGFzc05hbWV9JHtpfSR7an1gO1xuICAgICAgeEF4aXNEaXYuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIGlmIChkaXZDbGFzc05hbWUgPT09ICdjb21wdXRlckdyaWQnKSB7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBpZiAoZ2FtZU91dHB1dC50ZXh0Q29udGVudCAhPT0gJ3BsYXllcnMgdHVybicpIHJldHVybjtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBnYW1lT3V0cHV0LnRleHRDb250ZW50ID09PSAnUGxheWVyIFdpbnMhISEnIHx8XG4gICAgICAgICAgICBnYW1lT3V0cHV0LnRleHRDb250ZW50ID09PSAnUGxheWVyIExvc2VzLidcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9wcG9sZW50UGxheWVyLmdhbWVib2FyZC5zZW5kQXR0YWNrKGAke2l9JHtqfWApKSB7XG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soYCR7aX0ke2p9YCk7XG4gICAgICAgICAgICByZW5kZXJTaG90cyhwbGF5ZXIuZ2FtZWJvYXJkLCBkaXZDbGFzc05hbWUpO1xuICAgICAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgZ2FtZU91dHB1dC50ZXh0Q29udGVudCA9ICdQbGF5ZXIgV2lucyEhISc7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrU2VxdWVuY2UocGxheWVyLCBvcHBvbGVudFBsYXllciwgcmVuZGVyU2hvdHMpO1xuICAgICAgICAgICAgaWYgKG9wcG9sZW50UGxheWVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgICBnYW1lT3V0cHV0LnRleHRDb250ZW50ID0gJ1BsYXllciBMb3Nlcy4nO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyU2hpcHMoZ2FtZWJvYXJkLCBkaXZDbGFzc05hbWUpIHtcbiAgZm9yIChsZXQgc2hpcCBvZiBnYW1lYm9hcmQuc2hpcHMpIHtcbiAgICBmb3IgKGxldCBjb29yZCBvZiBzaGlwLmNvb3Jkcykge1xuICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2RpdkNsYXNzTmFtZX0ke2Nvb3JkfWApO1xuICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNoaXAuY29sb3I7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNob3RzKGdhbWVib2FyZCwgZGl2Q2xhc3NOYW1lKSB7XG4gIGZvciAobGV0IGF0dGFjayBvZiBnYW1lYm9hcmQucmVjZWl2ZWRBdHRhY2tzKSB7XG4gICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2RpdkNsYXNzTmFtZX0ke2F0dGFja31gKTtcbiAgICBpZiAoc3F1YXJlLmNoaWxkcmVuLmxlbmd0aCA+IDApIGNvbnRpbnVlO1xuICAgIGxldCB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgeC50ZXh0Q29udGVudCA9ICdYJztcbiAgICBpZiAoZ2FtZWJvYXJkLmhpdFJlY2lldmVkQXR0YWNrcy5pbmNsdWRlcyhhdHRhY2spKSB7XG4gICAgICB4LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB4LmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICAgIH1cbiAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoeCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVjUGxhY2VTaGlwcyhzaGlwcywgZ2FtZWJvYXJkKSB7XG4gIGlmIChzaGlwcy5sZW5ndGggPCAxKSByZXR1cm47XG4gIGxldCB0ZW1wU2hpcHNBcnIgPSBzaGlwcy5zbGljZSgpO1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckdyaWQnKTtcbiAgZ2FtZU91dHB1dC50ZXh0Q29udGVudCA9IGBjbGljayBhIHBvc2l0aW9uIG9uIHRoZSBwbGF5ZXIgZ3JpZCB0byBwbGFjZSB5b3VyICR7c2hpcHNbMF0ubGVuZ3RofSBzcXVhcmUgbG9uZyAke3NoaXBzWzBdLm5hbWV9IHZlcnRpY2FsbHkgZXh0ZW5kaW5nIGRvd24gZnJvbSB0aGUgcG9zaXRpb24uIHByZXNzIHIgdG8gY3ljbGUgaG9yaXpvbnRhbC92ZXJ0aWNhbGA7XG4gIGxldCBjaG9pY2UgPSAnJztcbiAgZnVuY3Rpb24gb25SRnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAncicpIHtcbiAgICAgIGlmIChnYW1lT3V0cHV0LnRleHRDb250ZW50ID09PSAnbm90IGVub3VnaCByb29tIHRvIHBsYWNlIHNoaXAnKSByZXR1cm47XG4gICAgICBpZiAoZ2FtZU91dHB1dC50ZXh0Q29udGVudC5pbmNsdWRlcygnZG93bicpKSB7XG4gICAgICAgIGdhbWVPdXRwdXQudGV4dENvbnRlbnQgPSBgY2xpY2sgYSBwb3NpdGlvbiBvbiB0aGUgcGxheWVyIGdyaWQgdG8gcGxhY2UgeW91ciAke3NoaXBzWzBdLmxlbmd0aH0gc3F1YXJlIGxvbmcgJHtzaGlwc1swXS5uYW1lfSBob3Jpem9udGFsbHkgZXh0ZW5kaW5nIHJpZ2h0IGZyb20gdGhlIHBvc2l0aW9uLiBwcmVzcyByIHRvIGN5Y2xlIGhvcml6b250YWwvdmVydGljYWxgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2FtZU91dHB1dC50ZXh0Q29udGVudCA9IGBjbGljayBhIHBvc2l0aW9uIG9uIHRoZSBwbGF5ZXIgZ3JpZCB0byBwbGFjZSB5b3VyICR7c2hpcHNbMF0ubGVuZ3RofSBzcXVhcmUgbG9uZyAke3NoaXBzWzBdLm5hbWV9IHZlcnRpY2FsbHkgZXh0ZW5kaW5nIGRvd24gZnJvbSB0aGUgcG9zaXRpb24uIHByZXNzIHIgdG8gY3ljbGUgaG9yaXpvbnRhbC92ZXJ0aWNhbGA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgb25SRnVuY3Rpb24pO1xuICBmdW5jdGlvbiBldmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgaWYgKCFnYW1lT3V0cHV0LnRleHRDb250ZW50LmluY2x1ZGVzKCdjbGljaycpKSByZXR1cm47XG4gICAgbGV0IGF4aXM7XG4gICAgaWYgKGdhbWVPdXRwdXQudGV4dENvbnRlbnQuaW5jbHVkZXMoJ2Rvd24nKSkge1xuICAgICAgYXhpcyA9ICd4JztcbiAgICB9IGVsc2Uge1xuICAgICAgYXhpcyA9ICd5JztcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVjQ29sbGlzaW9uQ2hlY2soY29vcmQsIHNoaXAsIGF4aXMsIG51bSA9IDApIHtcbiAgICAgIGlmIChudW0gPT09IHNoaXAubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBsZXQgdGVtcEFyciA9IGNvb3JkLnNwbGl0KCcnKTtcbiAgICAgIGlmIChjb29yZC5sZW5ndGggPiAyKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChheGlzID09PSAneCcpIHtcbiAgICAgICAgdGVtcEFyclsxXSA9IHBhcnNlSW50KHRlbXBBcnJbMV0pICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBBcnJbMF0gPSBwYXJzZUludCh0ZW1wQXJyWzBdKSArIDE7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBjdXJTaGlwIG9mIGdhbWVib2FyZC5wbGFjZWRTaGlwcykge1xuICAgICAgICBmb3IgKGxldCBwb3Mgb2YgY3VyU2hpcC5jb29yZHMpIHtcbiAgICAgICAgICBpZiAocG9zID09PSBjb29yZCkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZWNDb2xsaXNpb25DaGVjayh0ZW1wQXJyLmpvaW4oJycpLCBzaGlwLCBheGlzLCBudW0gKyAxKTtcbiAgICB9XG5cbiAgICBjaG9pY2UgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkLnNsaWNlKDEwLCAxMik7XG5cbiAgICBpZiAocmVjQ29sbGlzaW9uQ2hlY2soY2hvaWNlLCBzaGlwc1swXSwgYXhpcykpIHtcbiAgICAgIGxldCB0ZW1wID0gZ2FtZU91dHB1dC50ZXh0Q29udGVudDtcbiAgICAgIGdhbWVPdXRwdXQudGV4dENvbnRlbnQgPSAnbm90IGVub3VnaCByb29tIHRvIHBsYWNlIHNoaXAnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGdhbWVPdXRwdXQudGV4dENvbnRlbnQgPSB0ZW1wO1xuICAgICAgfSwgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwc1swXSwgY2hvaWNlLCBheGlzKTtcbiAgICByZW5kZXJTaGlwcyhnYW1lYm9hcmQsICdwbGF5ZXJHcmlkJyk7XG4gICAgcmVtb3ZlRXZlbnRMaXNuZXJzKCk7XG4gICAgdGVtcFNoaXBzQXJyLnNoaWZ0KCk7XG4gICAgcmV0dXJuIHJlY1BsYWNlU2hpcHModGVtcFNoaXBzQXJyLCBnYW1lYm9hcmQpO1xuICB9XG4gIGZvciAobGV0IGdyaWRMaW5lIG9mIGdyaWQuY2hpbGRyZW4pIHtcbiAgICBmb3IgKGxldCBzcXVhcmUgb2YgZ3JpZExpbmUuY2hpbGRyZW4pIHtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiByZW1vdmVFdmVudExpc25lcnMoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBvblJGdW5jdGlvbik7XG4gICAgZm9yIChsZXQgZ3JpZExpbmUgb2YgZ3JpZC5jaGlsZHJlbikge1xuICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIGdyaWRMaW5lLmNoaWxkcmVuKSB7XG4gICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50TGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBnYW1lT3V0cHV0LnRleHRDb250ZW50ID0gJ3BsYXllcnMgdHVybic7XG4gIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlR3JpZCwgcmVuZGVyU2hpcHMsIHJlbmRlclNob3RzLCByZWNQbGFjZVNoaXBzIH07XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBuYW1lLCBjb2xvcikge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG4gIGNvb3JkcyA9IFtdO1xuICBoaXRzID0gMDtcblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzKys7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHNoaXBzID0gW1xuICAgICAgbmV3IFNoaXAoNSwgJ0NhcnJpZXInLCAncmVkJyksXG4gICAgICBuZXcgU2hpcCg0LCAnQmF0dGxlc2hpcCcsICdibHVlJyksXG4gICAgICBuZXcgU2hpcCgzLCAnQ3J1aXNlcicsICdncmVlbicpLFxuICAgICAgbmV3IFNoaXAoMywgJ1N1Ym1hcmluZScsICd5ZWxsb3cnKSxcbiAgICAgIG5ldyBTaGlwKDIsICdEZXN0cm95ZXInLCAncHVycGxlJyksXG4gICAgXSxcbiAgICBpc0NvbXB1dGVyLFxuICApIHtcbiAgICB0aGlzLnNoaXBzID0gc2hpcHM7XG4gICAgdGhpcy5pc0NvbXB1dGVyID0gaXNDb21wdXRlcjtcbiAgfVxuXG4gIHJlY2VpdmVkQXR0YWNrcyA9IFtdO1xuICBtaXNzZWRSZWNpZXZlZEF0dGFja3MgPSBbXTtcbiAgaGl0UmVjaWV2ZWRBdHRhY2tzID0gW107XG4gIHNlbnRBdHRhY2tzID0gW107XG4gIHBsYWNlZFNoaXBzID0gW107XG4gIG9wcG9sZW50c0dhbWVib2FyZDtcblxuICBwbGFjZVNoaXAoc2hpcCwgY29PcmQsIGF4aXMgPSAneCcpIHtcbiAgICBpZiAoYXhpcyA9PT0gJ3knKSB7XG4gICAgICBzaGlwLmNvb3Jkcy5wdXNoKGNvT3JkKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdENvb3JkcyA9IGAke2kgKyBwYXJzZUludChjb09yZC5jaGFyQXQoMCkpfSR7Y29PcmQuY2hhckF0KDEpfWA7XG4gICAgICAgIHNoaXAuY29vcmRzLnB1c2godENvb3Jkcyk7XG4gICAgICAgIGlmICghdGhpcy5wbGFjZWRTaGlwcy5pbmNsdWRlcyhzaGlwKSkge1xuICAgICAgICAgIHRoaXMucGxhY2VkU2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICBzaGlwLmNvb3Jkcy5wdXNoKGNvT3JkKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdENvb3JkcyA9IGAke2NvT3JkLmNoYXJBdCgwKX0ke2kgKyBwYXJzZUludChjb09yZC5jaGFyQXQoMSkpfWA7XG4gICAgICAgIHNoaXAuY29vcmRzLnB1c2godENvb3Jkcyk7XG4gICAgICAgIGlmICghdGhpcy5wbGFjZWRTaGlwcy5pbmNsdWRlcyhzaGlwKSkge1xuICAgICAgICAgIHRoaXMucGxhY2VkU2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZW5kQXR0YWNrKGNvT3Jkcykge1xuICAgIGlmICh0aGlzLnNlbnRBdHRhY2tzLmluY2x1ZGVzKGNvT3JkcykpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLnNlbnRBdHRhY2tzLnB1c2goY29PcmRzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29PcmRzKSB7XG4gICAgdGhpcy5yZWNlaXZlZEF0dGFja3MucHVzaChjb09yZHMpO1xuICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgaWYgKHNoaXAuY29vcmRzLmluY2x1ZGVzKGNvT3JkcykpIHtcbiAgICAgICAgc2hpcC5oaXQoKTtcbiAgICAgICAgdGhpcy5oaXRSZWNpZXZlZEF0dGFja3MucHVzaChjb09yZHMpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29tcHV0ZXIgPT09IHRydWUpIHRoaXMuYXV0b0NvbXB1dGVyQXR0YWNrKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1pc3NlZFJlY2lldmVkQXR0YWNrcy5wdXNoKGNvT3Jkcyk7XG4gICAgaWYgKHRoaXMuaXNDb21wdXRlciA9PT0gdHJ1ZSkgdGhpcy5hdXRvQ29tcHV0ZXJBdHRhY2soKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnYW1lYm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG59XG5cbmV4cG9ydCB7IFNoaXAsIEdhbWVCb2FyZCwgUGxheWVyIH07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL21vZHVsZXMvZ2FtZUNsYXNzZXMuanMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlR3JpZCxcbiAgcmVjUGxhY2VTaGlwcyxcbiAgcmVuZGVyU2hpcHMsXG59IGZyb20gJy4vbW9kdWxlcy9kb21GdW5jdGlvbnMuanMnO1xuaW1wb3J0IHsgY29tcHV0ZXJSYW5kU2hpcFBsYWNlIH0gZnJvbSAnLi9tb2R1bGVzL2NvbXB1dGVyUGxheWVyTG9naWMuanMnO1xuXG5mdW5jdGlvbiBuZXdHYW1lKCkge1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCd0ZXN0IHBsYXllcicpO1xuICBjb25zdCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoJ2J6eiBiZWVwJywgdHJ1ZSk7XG4gIGNvbXB1dGVyLmdhbWVib2FyZC5vcHBvbGVudHNUdXJuID0gdHJ1ZTtcblxuICBjcmVhdGVHcmlkKGNvbXB1dGVyLCAnY29tcHV0ZXJHcmlkJywgcGxheWVyKTtcbiAgY3JlYXRlR3JpZChwbGF5ZXIsICdwbGF5ZXJHcmlkJywgY29tcHV0ZXIpO1xuXG4gIHJlY1BsYWNlU2hpcHMocGxheWVyLmdhbWVib2FyZC5zaGlwcywgcGxheWVyLmdhbWVib2FyZCk7XG4gIGNvbXB1dGVyUmFuZFNoaXBQbGFjZShjb21wdXRlci5nYW1lYm9hcmQuc2hpcHMsIGNvbXB1dGVyLmdhbWVib2FyZCk7XG5cbiAgcmVuZGVyU2hpcHMocGxheWVyLmdhbWVib2FyZCwgJ3BsYXllckdyaWQnKTtcbn1cblxuY29uc3Qgc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1N0YXJ0TmV3R2FtZScpO1xuc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuXG5uZXdHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=