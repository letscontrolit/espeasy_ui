/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/set.js":
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js");

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/mini-toastr/mini-toastr.js":
/*!*************************************************!*\
  !*** ./node_modules/mini-toastr/mini-toastr.js ***!
  \*************************************************/
/*! exports provided: fadeOut, LIB_NAME, ERROR, WARN, SUCCESS, INFO, CONTAINER_CLASS, NOTIFICATION_CLASS, TITLE_CLASS, ICON_CLASS, MESSAGE_CLASS, ERROR_CLASS, WARN_CLASS, SUCCESS_CLASS, INFO_CLASS, DEFAULT_TIMEOUT, flatten, makeCss, appendStyles, config, makeNode, createIcon, addElem, getTypeClass, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIB_NAME", function() { return LIB_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WARN", function() { return WARN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO", function() { return INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINER_CLASS", function() { return CONTAINER_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_CLASS", function() { return NOTIFICATION_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_CLASS", function() { return TITLE_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_CLASS", function() { return ICON_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_CLASS", function() { return MESSAGE_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_CLASS", function() { return ERROR_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WARN_CLASS", function() { return WARN_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_CLASS", function() { return SUCCESS_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_CLASS", function() { return INFO_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIMEOUT", function() { return DEFAULT_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCss", function() { return makeCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendStyles", function() { return appendStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeNode", function() { return makeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIcon", function() { return createIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addElem", function() { return addElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeClass", function() { return getTypeClass; });
function fadeOut (element, cb) {
  if (element.style.opacity && element.style.opacity > 0.05) {
    element.style.opacity = element.style.opacity - 0.05
  } else if (element.style.opacity && element.style.opacity <= 0.1) {
    if (element.parentNode) {
      element.parentNode.removeChild(element)
      if (cb) cb()
    }
  } else {
    element.style.opacity = 0.9
  }
  setTimeout(() => fadeOut.apply(this, [element, cb]), 1000 / 30
  )
}

const LIB_NAME = 'mini-toastr'

const ERROR = 'error'
const WARN = 'warn'
const SUCCESS = 'success'
const INFO = 'info'
const CONTAINER_CLASS = LIB_NAME
const NOTIFICATION_CLASS = `${LIB_NAME}__notification`
const TITLE_CLASS = `${LIB_NAME}-notification__title`
const ICON_CLASS = `${LIB_NAME}-notification__icon`
const MESSAGE_CLASS = `${LIB_NAME}-notification__message`
const ERROR_CLASS = `-${ERROR}`
const WARN_CLASS = `-${WARN}`
const SUCCESS_CLASS = `-${SUCCESS}`
const INFO_CLASS = `-${INFO}`
const DEFAULT_TIMEOUT = 3000

const EMPTY_STRING = ''

function flatten (obj, into, prefix) {
  into = into || {}
  prefix = prefix || EMPTY_STRING

  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      const prop = obj[k]
      if (prop && typeof prop === 'object' && !(prop instanceof Date || prop instanceof RegExp)) {
        flatten(prop, into, prefix + k + ' ')
      } else {
        if (into[prefix] && typeof into[prefix] === 'object') {
          into[prefix][k] = prop
        } else {
          into[prefix] = {}
          into[prefix][k] = prop
        }
      }
    }
  }

  return into
}

function makeCss (obj) {
  const flat = flatten(obj)
  let str = JSON.stringify(flat, null, 2)
  str = str.replace(/"([^"]*)": {/g, '$1 {')
    .replace(/"([^"]*)"/g, '$1')
    .replace(/(\w*-?\w*): ([\w\d .#]*),?/g, '$1: $2;')
    .replace(/},/g, '}\n')
    .replace(/ &([.:])/g, '$1')

  str = str.substr(1, str.lastIndexOf('}') - 1)

  return str
}

function appendStyles (css) {
  let head = document.head || document.getElementsByTagName('head')[0]
  let styleElem = makeNode('style')
  styleElem.id = `${LIB_NAME}-styles`
  styleElem.type = 'text/css'

  if (styleElem.styleSheet) {
    styleElem.styleSheet.cssText = css
  } else {
    styleElem.appendChild(document.createTextNode(css))
  }

  head.appendChild(styleElem)
}

const config = {
  types: {ERROR, WARN, SUCCESS, INFO},
  animation: fadeOut,
  timeout: DEFAULT_TIMEOUT,
  icons: {},
  appendTarget: document.body,
  node: makeNode(),
  allowHtml: false,
  style: {
    [`.${CONTAINER_CLASS}`]: {
      position: 'fixed',
      'z-index': 99999,
      right: '12px',
      top: '12px'
    },
    [`.${NOTIFICATION_CLASS}`]: {
      cursor: 'pointer',
      padding: '12px 18px',
      margin: '0 0 6px 0',
      'background-color': '#000',
      opacity: 0.8,
      color: '#fff',
      'border-radius': '3px',
      'box-shadow': '#3c3b3b 0 0 12px',
      width: '300px',
      [`&.${ERROR_CLASS}`]: {
        'background-color': '#D5122B'
      },
      [`&.${WARN_CLASS}`]: {
        'background-color': '#F5AA1E'
      },
      [`&.${SUCCESS_CLASS}`]: {
        'background-color': '#7AC13E'
      },
      [`&.${INFO_CLASS}`]: {
        'background-color': '#4196E1'
      },
      '&:hover': {
        opacity: 1,
        'box-shadow': '#000 0 0 12px'
      }
    },
    [`.${TITLE_CLASS}`]: {
      'font-weight': '500'
    },
    [`.${MESSAGE_CLASS}`]: {
      display: 'inline-block',
      'vertical-align': 'middle',
      width: '240px',
      padding: '0 12px'
    }
  }
}

function makeNode (type = 'div') {
  return document.createElement(type)
}

function createIcon (node, type, config) {
  const iconNode = makeNode(config.icons[type].nodeType)
  const attrs = config.icons[type].attrs

  for (const k in attrs) {
    if (attrs.hasOwnProperty(k)) {
      iconNode.setAttribute(k, attrs[k])
    }
  }

  node.appendChild(iconNode)
}

function addElem (node, text, className, config) {
  const elem = makeNode()
  elem.className = className
  if (config.allowHtml) {
    elem.innerHTML = text
  } else {
    elem.appendChild(document.createTextNode(text))
  }
  node.appendChild(elem)
}

function getTypeClass (type) {
  if (type === SUCCESS) return SUCCESS_CLASS
  if (type === WARN) return WARN_CLASS
  if (type === ERROR) return ERROR_CLASS
  if (type === INFO) return INFO_CLASS

  return EMPTY_STRING
}

const miniToastr = {
  config,
  isInitialised: false,
  showMessage (message, title, type, timeout, cb, overrideConf) {
    const config = {}
    Object.assign(config, this.config)
    Object.assign(config, overrideConf)

    const notificationElem = makeNode()
    notificationElem.className = `${NOTIFICATION_CLASS} ${getTypeClass(type)}`

    notificationElem.onclick = function () {
      config.animation(notificationElem, null)
    }

    if (title) addElem(notificationElem, title, TITLE_CLASS, config)
    if (config.icons[type]) createIcon(notificationElem, type, config)
    if (message) addElem(notificationElem, message, MESSAGE_CLASS, config)

    config.node.insertBefore(notificationElem, config.node.firstChild)
    setTimeout(() => config.animation(notificationElem, cb), timeout || config.timeout
    )

    if (cb) cb()
    return this
  },
  init (aConfig) {
    const newConfig = {}
    Object.assign(newConfig, config)
    Object.assign(newConfig, aConfig)
    this.config = newConfig

    const cssStr = makeCss(newConfig.style)
    appendStyles(cssStr)

    newConfig.node.id = CONTAINER_CLASS
    newConfig.node.className = CONTAINER_CLASS
    newConfig.appendTarget.appendChild(newConfig.node)

    Object.keys(newConfig.types).forEach(v => {
      this[newConfig.types[v]] = function (message, title, timeout, cb, config) {
        this.showMessage(message, title, newConfig.types[v], timeout, cb, config)
        return this
      }.bind(this)
    }
    )

    this.isInitialised = true

    return this
  },
  setIcon (type, nodeType = 'i', attrs = []) {
    attrs.class = attrs.class ? attrs.class + ' ' + ICON_CLASS : ICON_CLASS

    this.config.icons[type] = {nodeType, attrs}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (miniToastr);

/***/ }),

/***/ "./node_modules/preact/dist/preact.mjs":
/*!*********************************************!*\
  !*** ./node_modules/preact/dist/preact.mjs ***!
  \*********************************************/
/*! exports provided: default, h, createElement, cloneElement, createRef, Component, render, rerender, options */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var VNode = function VNode() {};

var options = {};

var stack = [];

var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

function applyRef(ref, value) {
  if (ref != null) {
    if (typeof ref == 'function') ref(value);else ref.current = value;
  }
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p;
	while (p = items.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {} else if (name === 'ref') {
		applyRef(old, null);
		applyRef(value, node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		try {
			node[name] = value == null ? '' : value;
		} catch (e) {}
		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];

var diffLevel = 0;

var isSvgMode = false;

var hydrating = false;

function flushMounts() {
	var c;
	while (c = mounts.shift()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	if (!diffLevel++) {
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	if (! --diffLevel) {
		hydrating = false;

		if (!componentRoot) flushMounts();
	}

	return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	if (typeof vnode === 'string' || typeof vnode === 'number') {
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			}
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	} else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	diffAttributes(out, vnode.attributes, props);

	isSvgMode = prevSvgMode;

	return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			} else if (min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		unmountComponent(component);
	} else {
		if (node['__preactattr_'] != null) applyRef(node['__preactattr_'].ref, null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

function diffAttributes(dom, attrs, old) {
	var name;

	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
	var inst,
	    i = recyclerComponents.length;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	while (i--) {
		if (recyclerComponents[i].constructor === Ctor) {
			inst.nextBase = recyclerComponents[i].nextBase;
			recyclerComponents.splice(i, 1);
			return inst;
		}
	}

	return inst;
}

function doRender(props, state, context) {
	return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	component.__ref = props.ref;
	component.__key = props.key;
	delete props.ref;
	delete props.key;

	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
		if (!component.base || mountAll) {
			if (component.componentWillMount) component.componentWillMount();
		} else if (component.componentWillReceiveProps) {
			component.componentWillReceiveProps(props, context);
		}
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (renderMode !== 0) {
		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	applyRef(component.__ref, component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    snapshot = previousContext,
	    rendered,
	    inst,
	    cbase;

	if (component.constructor.getDerivedStateFromProps) {
		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
		component.state = state;
	}

	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		if (isUpdate && component.getSnapshotBeforeUpdate) {
			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || renderMode === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.push(component);
	} else if (!skip) {

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, snapshot);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	while (component._renderCallbacks.length) {
		component._renderCallbacks.pop().call(component);
	}if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;

			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] != null) applyRef(base['__preactattr_'].ref, null);

		component.nextBase = base;

		removeNode(base);
		recyclerComponents.push(component);

		removeChildren(base);
	}

	applyRef(component.__ref, null);
}

function Component(props, context) {
	this._dirty = true;

	this.context = context;

	this.props = props;

	this.state = this.state || {};

	this._renderCallbacks = [];
}

extend(Component.prototype, {
	setState: function setState(state, callback) {
		if (!this.prevState) this.prevState = this.state;
		this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	},
	forceUpdate: function forceUpdate(callback) {
		if (callback) this._renderCallbacks.push(callback);
		renderComponent(this, 2);
	},
	render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

function createRef() {
	return {};
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	createRef: createRef,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ __webpack_exports__["default"] = (preact);

//# sourceMappingURL=preact.mjs.map


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var mini_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mini-toastr */ "./node_modules/mini-toastr/mini-toastr.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu/index.js");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page */ "./src/components/page/index.js");
/* harmony import */ var _conf_config_dat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./conf/config.dat */ "./src/conf/config.dat.js");
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/settings */ "./src/lib/settings.js");
/* harmony import */ var _lib_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/loader */ "./src/lib/loader.js");
/* harmony import */ var _lib_plugins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/plugins */ "./src/lib/plugins.js");








mini_toastr__WEBPACK_IMPORTED_MODULE_1__["default"].init({});

const clearSlashes = path => {
  return path.toString().replace(/\/$/, '').replace(/^\//, '');
};

const getFragment = () => {
  const match = window.location.href.match(/#(.*)$/);
  const fragment = match ? match[1] : '';
  return clearSlashes(fragment);
};

class App extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      menuActive: false,
      menu: menus[0],
      page: menus[0],
      changed: false
    };

    this.menuToggle = () => {
      this.setState({
        menuActive: !this.state.menuActive
      });
    };
  }

  render(props, state) {
    const params = getFragment().split('/').slice(2);
    const active = this.state.menuActive ? 'active' : '';
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      id: "layout",
      class: active
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
      id: "menuLink",
      class: "menu-link",
      onClick: this.menuToggle
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null)), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_components_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
      menus: menus,
      selected: state.menu
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_components_page__WEBPACK_IMPORTED_MODULE_3__["Page"], {
      page: state.page,
      params: params,
      changed: this.state.changed
    }));
  }

  componentDidMount() {
    _lib_loader__WEBPACK_IMPORTED_MODULE_6__["loader"].hide();
    let current = '';

    const fn = () => {
      const newFragment = getFragment();
      const diff = _lib_settings__WEBPACK_IMPORTED_MODULE_5__["settings"].diff();

      if (this.state.changed !== !!diff.length) {
        this.setState({
          changed: !this.state.changed
        });
      }

      if (current !== newFragment) {
        current = newFragment;
        const parts = current.split('/');
        const menu = menus.find(menu => menu.href === parts[0]);
        const page = parts.length > 1 ? routes.find(route => route.href === `${parts[0]}/${parts[1]}`) : menu;

        if (page) {
          this.setState({
            page,
            menu,
            menuActive: false
          });
        }
      }
    };

    this.interval = setInterval(fn, 100);
  }

  componentWillUnmount() {}

}

const load = async () => {
  await Object(_conf_config_dat__WEBPACK_IMPORTED_MODULE_4__["loadConfig"])();
  await Object(_lib_plugins__WEBPACK_IMPORTED_MODULE_7__["loadPlugins"])();
  Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(App, null), document.body);
};

load();

/***/ }),

/***/ "./src/components/menu/index.js":
/*!**************************************!*\
  !*** ./src/components/menu/index.js ***!
  \**************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");

class Menu extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  renderMenuItem(menu) {
    if (menu.action) {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("li", {
        class: "pure-menu-item"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
        href: `#${menu.href}`,
        onClick: menu.action,
        class: "pure-menu-link"
      }, menu.title));
    }

    if (menu.href === this.props.selected.href) {
      return [Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("li", {
        class: "pure-menu-item pure-menu-item-selected"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
        href: `#${menu.href}`,
        class: "pure-menu-link"
      }, menu.title)), ...menu.children.map(child => {
        if (child.action) {
          return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("li", {
            class: "pure-menu-item submenu"
          }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: `#${child.href}`,
            onClick: child.action,
            class: "pure-menu-link"
          }, child.title));
        }

        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("li", {
          class: "pure-menu-item submenu"
        }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
          href: `#${child.href}`,
          class: "pure-menu-link"
        }, child.title));
      })];
    }

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("li", {
      class: "pure-menu-item"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
      href: `#${menu.href}`,
      class: "pure-menu-link"
    }, menu.title));
  }

  render(props) {
    if (props.open === false) return;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      id: "menu"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "pure-menu"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
      class: "pure-menu-heading",
      href: "/"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("b", null, "ESP"), "Easy"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", {
      class: "pure-menu-list"
    }, props.menus.map(menu => this.renderMenuItem(menu)))));
  }

}

/***/ }),

/***/ "./src/components/page/index.js":
/*!**************************************!*\
  !*** ./src/components/page/index.js ***!
  \**************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");

class Page extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render(props) {
    const PageComponent = props.page.component;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      id: "main"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "header"
    }, "> ", props.page.pagetitle == null ? props.page.title : props.page.pagetitle, props.changed ? Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
      style: "float: right",
      href: "#tools/diff"
    }, "CHANGED! Click here to SAVE") : null), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: `content ${props.page.class}`
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(PageComponent, {
      params: props.params
    })));
  }

}

/***/ }),

/***/ "./src/conf/config.dat.js":
/*!********************************!*\
  !*** ./src/conf/config.dat.js ***!
  \********************************/
/*! exports provided: configDatParseConfig, TaskSettings, ControllerSettings, NotificationSettings, SecuritySettings, loadConfig, saveConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configDatParseConfig", function() { return configDatParseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSettings", function() { return TaskSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerSettings", function() { return ControllerSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSettings", function() { return NotificationSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuritySettings", function() { return SecuritySettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfig", function() { return loadConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveConfig", function() { return saveConfig; });
/* harmony import */ var _lib_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/parser */ "./src/lib/parser.js");
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/settings */ "./src/lib/settings.js");


const TASKS_MAX = 12;
const NOTIFICATION_MAX = 3;
const CONTROLLER_MAX = 3;
const PLUGIN_CONFIGVAR_MAX = 8;
const PLUGIN_CONFIGFLOATVAR_MAX = 4;
const PLUGIN_CONFIGLONGVAR_MAX = 4;
const PLUGIN_EXTRACONFIGVAR_MAX = 16;
const NAME_FORMULA_LENGTH_MAX = 40;
const VARS_PER_TASK = 4;
const configDatParseConfig = [{
  prop: 'status.PID',
  type: 'int32'
}, {
  prop: 'status.version',
  type: 'int32'
}, {
  prop: 'status.build',
  type: 'int16'
}, {
  prop: 'config.IP.ip',
  type: 'bytes',
  length: 4
}, {
  prop: 'config.IP.gw',
  type: 'bytes',
  length: 4
}, {
  prop: 'config.IP.subnet',
  type: 'bytes',
  length: 4
}, {
  prop: 'config.IP.dns',
  type: 'bytes',
  length: 4
}, {
  prop: 'config.experimental.ip_octet',
  type: 'byte'
}, {
  prop: 'config.general.unitnr',
  type: 'byte'
}, {
  prop: 'config.general.unitname',
  type: 'string',
  length: 26
}, {
  prop: 'config.ntp.host',
  type: 'string',
  length: 64
}, {
  prop: 'config.sleep.sleeptime',
  type: 'int32'
}, {
  prop: 'hardware.i2c.sda',
  type: 'byte'
}, {
  prop: 'hardware.i2c.scl',
  type: 'byte'
}, {
  prop: 'hardware.led.gpio',
  type: 'byte'
}, {
  prop: 'Pin_sd_cs',
  type: 'byte'
}, // TODO
{
  prop: 'hardware.gpio',
  type: 'bytes',
  length: 17
}, {
  prop: 'config.log.syslog_ip',
  type: 'bytes',
  length: 4
}, {
  prop: 'config.espnetwork.port',
  type: 'int32'
}, {
  prop: 'config.log.syslog_level',
  type: 'byte'
}, {
  prop: 'config.log.serial_level',
  type: 'byte'
}, {
  prop: 'config.log.web_level',
  type: 'byte'
}, {
  prop: 'config.log.sd_level',
  type: 'byte'
}, {
  prop: 'config.serial.baudrate',
  type: 'int32'
}, {
  prop: 'config.mqtt.interval',
  type: 'int32'
}, {
  prop: 'config.sleep.awaketime',
  type: 'byte'
}, {
  prop: 'CustomCSS',
  type: 'byte'
}, // TODO
{
  prop: 'config.dst.enabled',
  type: 'byte'
}, {
  prop: 'config.experimental.WDI2CAddress',
  type: 'byte'
}, {
  prop: 'config.rules.enabled',
  type: 'byte'
}, {
  prop: 'config.serial.enabled',
  type: 'byte'
}, {
  prop: 'config.ssdp.enabled',
  type: 'byte'
}, {
  prop: 'config.ntp.enabled',
  type: 'byte'
}, {
  prop: 'config.experimental.WireClockStretchLimit',
  type: 'int32'
}, {
  prop: 'GlobalSync',
  type: 'byte'
}, // TODO
{
  prop: 'config.experimental.ConnectionFailuresThreshold',
  type: 'int32'
}, {
  prop: 'TimeZone',
  type: 'int16',
  signed: true
}, // TODO
{
  prop: 'config.mqtt.retain_flag',
  type: 'byte'
}, {
  prop: 'hardware.spi.enabled',
  type: 'byte'
}, [...Array(CONTROLLER_MAX)].map((x, i) => ({
  prop: `controllers[${i}].protocol`,
  type: 'byte'
})), [...Array(NOTIFICATION_MAX)].map((x, i) => ({
  prop: `notifications[${i}].type`,
  type: 'byte'
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].device`,
  type: 'byte'
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].OLD_TaskDeviceID`,
  type: 'int32'
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].gpio1`,
  type: 'byte'
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].gpio2`,
  type: 'byte'
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].gpio3`,
  type: 'byte'
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].gpio4`,
  type: 'byte'
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].pin1pullup`,
  type: 'byte'
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].configs`,
  type: 'ints',
  length: PLUGIN_CONFIGVAR_MAX
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].pin1inversed`,
  type: 'byte'
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].configs_float`,
  type: 'floats',
  length: PLUGIN_CONFIGFLOATVAR_MAX
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].configs_long`,
  type: 'longs',
  length: PLUGIN_CONFIGFLOATVAR_MAX
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].OLD_senddata`,
  type: 'byte'
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].global_sync`,
  type: 'byte'
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].data_feed`,
  type: 'byte'
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].interval`,
  type: 'int32'
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].enabled`,
  type: 'byte'
})), [...Array(CONTROLLER_MAX)].map((x, i) => ({
  prop: `controllers[${i}].enabled`,
  type: 'byte'
})), [...Array(NOTIFICATION_MAX)].map((x, i) => ({
  prop: `notifications[${i}].enabled`,
  type: 'byte'
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].TaskDeviceID`,
  type: 'longs',
  length: CONTROLLER_MAX
})), [...Array(TASKS_MAX)].map((x, i) => ({
  prop: `tasks[${i}].TaskDeviceSendData`,
  type: 'bytes',
  length: CONTROLLER_MAX
})), {
  prop: 'hardware.led.inverse',
  type: 'byte'
}, {
  prop: 'config.sleep.sleeponfailiure',
  type: 'byte'
}, {
  prop: 'UseValueLogger',
  type: 'byte'
}, // TODO
{
  prop: 'ArduinoOTAEnable',
  type: 'byte'
}, // TODO
{
  prop: 'config.dst.DST_Start',
  type: 'int16'
}, {
  prop: 'config.dst.DST_End',
  type: 'int16'
}, {
  prop: 'UseRTOSMultitasking',
  type: 'byte'
}, // TODO
{
  prop: 'hardware.reset.pin',
  type: 'byte'
}, {
  prop: 'config.log.syslog_facility',
  type: 'byte'
}, {
  prop: 'StructSize',
  type: 'int32'
}, // TODO
{
  prop: 'config.mqtt.useunitname',
  type: 'byte'
}, {
  prop: 'config.location.lat',
  type: 'float'
}, {
  prop: 'config.location.long',
  type: 'float'
}, {
  prop: 'config._emptyBit',
  type: 'bit'
}, {
  prop: 'config.general.appendunit',
  type: 'bit'
}, {
  prop: 'config.mqtt.changeclientid',
  type: 'bit'
}, {
  prop: 'config.rules.oldengine',
  type: 'bit'
}, {
  prop: 'config._bit4',
  type: 'bit'
}, {
  prop: 'config._bit5',
  type: 'bit'
}, {
  prop: 'config._bit6',
  type: 'bit'
}, {
  prop: 'config._bit7',
  type: 'bit'
}, {
  prop: 'config._bits1',
  type: 'byte'
}, {
  prop: 'config._bits2',
  type: 'byte'
}, {
  prop: 'config._bits3',
  type: 'byte'
}, {
  prop: 'ResetFactoryDefaultPreference',
  type: 'int32'
}].flat();
const TaskSettings = [{
  prop: 'index',
  type: 'byte'
}, {
  prop: 'name',
  type: 'string',
  length: NAME_FORMULA_LENGTH_MAX + 1
}, [...Array(VARS_PER_TASK)].map((x, i) => ({
  prop: `values[${i}].formula`,
  type: 'string',
  length: NAME_FORMULA_LENGTH_MAX + 1
})), [...Array(VARS_PER_TASK)].map((x, i) => ({
  prop: `values[${i}].name`,
  type: 'string',
  length: NAME_FORMULA_LENGTH_MAX + 1
})), {
  prop: 'value_names',
  type: 'string',
  length: NAME_FORMULA_LENGTH_MAX + 1
}, {
  prop: 'plugin_config_long',
  type: 'longs',
  length: PLUGIN_EXTRACONFIGVAR_MAX
}, {
  prop: 'decimals',
  type: 'bytes',
  length: VARS_PER_TASK
}, {
  prop: 'plugin_config',
  type: 'ints',
  length: PLUGIN_EXTRACONFIGVAR_MAX
}].flat();
const ControllerSettings = [{
  prop: 'dns',
  type: 'byte'
}, {
  prop: 'IP',
  type: 'bytes',
  length: 4
}, {
  prop: 'port',
  type: 'int32'
}, {
  prop: 'hostname',
  type: 'string',
  length: 65
}, {
  prop: 'publish',
  type: 'string',
  length: 129
}, {
  prop: 'subscribe',
  type: 'string',
  length: 129
}, {
  prop: 'MQTT_lwt_topic',
  type: 'string',
  length: 129
}, {
  prop: 'lwt_message_connect',
  type: 'string',
  length: 129
}, {
  prop: 'lwt_message_disconnect',
  type: 'string',
  length: 129
}, {
  prop: 'minimal_time_between',
  type: 'int32'
}, {
  prop: 'max_queue_depth',
  type: 'int32'
}, {
  prop: 'max_retry',
  type: 'int32'
}, {
  prop: 'delete_oldest',
  type: 'byte'
}, {
  prop: 'client_timeout',
  type: 'int32'
}, {
  prop: 'must_check_reply',
  type: 'byte'
}];
const NotificationSettings = [{
  prop: 'server',
  type: 'string',
  length: 65
}, {
  prop: 'port',
  type: 'int16'
}, {
  prop: 'domain',
  type: 'string',
  length: 65
}, {
  prop: 'sender',
  type: 'string',
  length: 65
}, {
  prop: 'receiver',
  type: 'string',
  length: 65
}, {
  prop: 'subject',
  type: 'string',
  length: 129
}, {
  prop: 'body',
  type: 'string',
  length: 513
}, {
  prop: 'pin1',
  type: 'byte'
}, {
  prop: 'pin2',
  type: 'byte'
}, {
  prop: 'user',
  type: 'string',
  length: 49
}, {
  prop: 'pass',
  type: 'string',
  length: 33
}];
const SecuritySettings = [{
  prop: 'WifiSSID',
  type: 'string',
  length: 32
}, {
  prop: 'WifiKey',
  type: 'string',
  length: 64
}, {
  prop: 'WifiSSID2',
  type: 'string',
  length: 32
}, {
  prop: 'WifiKey2',
  type: 'string',
  length: 64
}, {
  prop: 'WifiAPKey',
  type: 'string',
  length: 64
}, [...Array(CONTROLLER_MAX)].map((x, i) => ({
  prop: `controllers[${i}].user`,
  type: 'string',
  length: 26
})), [...Array(CONTROLLER_MAX)].map((x, i) => ({
  prop: `controllers[${i}].password`,
  type: 'string',
  length: 64
})), {
  prop: 'password',
  type: 'string',
  length: 26
}, {
  prop: 'AllowedIPrangeLow',
  type: 'bytes',
  length: 4
}, {
  prop: 'AllowedIPrangeHigh',
  type: 'bytes',
  length: 4
}, {
  prop: 'IPblockLevel',
  type: 'byte'
}, {
  prop: 'ProgmemMd5',
  type: 'bytes',
  length: 16
}, {
  prop: 'md5',
  type: 'bytes',
  length: 16
}].flat();
const loadConfig = () => {
  return fetch('config.dat').then(response => response.arrayBuffer()).then(async response => {
    const settings = Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["parseConfig"])(response, configDatParseConfig);
    [...Array(12)].map((x, i) => {
      settings.tasks[i].settings = Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["parseConfig"])(response, TaskSettings, 1024 * 4 + 1024 * 2 * i);
      settings.tasks[i].extra = Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["parseConfig"])(response, TaskSettings, 1024 * 5 + 1024 * 2 * i);
    });
    [...Array(3)].map((x, i) => {
      settings.controllers[i].settings = Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["parseConfig"])(response, ControllerSettings, 1024 * 27 + 1024 * 2 * i);
      settings.controllers[i].extra = Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["parseConfig"])(response, ControllerSettings, 1024 * 28 + 1024 * 2 * i);
    });
    const notificationResponse = await fetch('notification.dat').then(response => response.arrayBuffer());
    [...Array(3)].map((x, i) => {
      settings.notifications[i].settings = Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["parseConfig"])(notificationResponse, NotificationSettings, 1024 * i);
    });
    const securityResponse = await fetch('security.dat').then(response => response.arrayBuffer());
    settings.config.security = [...Array(3)].map((x, i) => {
      console.log(i);
      return Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["parseConfig"])(securityResponse, SecuritySettings, 1024 * i);
    });
    return {
      response,
      settings
    };
  }).then(conf => {
    _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].init(conf.settings);
    _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].binary = new Uint8Array(conf.response);
    console.log(conf.settings);
  });
};

const saveData = function () {
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  return function (data, fileName) {
    const blob = new Blob([new Uint8Array(data)]);
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };
}();

let ii = 0;
const saveConfig = (save = true) => {
  if (ii === 0) {
    const buffer = new ArrayBuffer(65536);
    Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["writeConfig"])(buffer, _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].settings, configDatParseConfig);
    [...Array(12)].map((x, i) => {
      return {
        settings: Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["writeConfig"])(buffer, _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].settings.tasks[i].settings, TaskSettings, 1024 * 4 + 1024 * 2 * i),
        extra: Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["writeConfig"])(buffer, _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].settings.tasks[i].extra, TaskSettings, 1024 * 5 + 1024 * 2 * i)
      };
    });
    [...Array(3)].map((x, i) => {
      return {
        settings: Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["writeConfig"])(buffer, _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].settings.controllers[i].settings, ControllerSettings, 1024 * 28 + 1024 * 2 * i),
        extra: Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["writeConfig"])(buffer, _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].settings.controllers[i].extra, ControllerSettings, 1024 * 29 + 1024 * 2 * i)
      };
    });
    if (save) saveData(buffer, 'config.dat');else return buffer;
  } else if (ii === 1) {
    const bufferNotifications = new ArrayBuffer(4096);
    [...Array(3)].map((x, i) => {
      return Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["writeConfig"])(bufferNotifications, _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].settings.notifications[i], NotificationSettings, 1024 * i);
    });
    saveData(bufferNotifications, 'notification.dat');
  } else if (ii === 2) {
    const bufferSecurity = new ArrayBuffer(4096);
    [...Array(3)].map((x, i) => {
      return Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["writeConfig"])(bufferSecurity, _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].settings.security[i], SecuritySettings, 1024 * i);
    });
    saveData(bufferSecurity, 'security.dat');
  }

  ii = (ii + 1) % 3;
};

/***/ }),

/***/ "./src/lib/espeasy.js":
/*!****************************!*\
  !*** ./src/lib/espeasy.js ***!
  \****************************/
/*! exports provided: getJsonStat, loadDevices, getConfigNodes, getVariables, getDashboardConfigNodes, storeFile, deleteFile, storeDashboardConfig, storeRuleConfig, loadRuleConfig, loadDashboardConfig, storeRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJsonStat", function() { return getJsonStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDevices", function() { return loadDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigNodes", function() { return getConfigNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVariables", function() { return getVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDashboardConfigNodes", function() { return getDashboardConfigNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeFile", function() { return storeFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFile", function() { return deleteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeDashboardConfig", function() { return storeDashboardConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRuleConfig", function() { return storeRuleConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRuleConfig", function() { return loadRuleConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDashboardConfig", function() { return loadDashboardConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRule", function() { return storeRule; });
/* harmony import */ var mini_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mini-toastr */ "./node_modules/mini-toastr/mini-toastr.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "./src/lib/loader.js");


const getJsonStat = async (url = '') => {
  return await fetch(`${url}/json`).then(response => response.json());
};
const loadDevices = async url => {
  return getJsonStat(url).then(response => response.Sensors);
};
const getConfigNodes = async () => {
  const devices = await loadDevices();
  const vars = [];
  const nodes = devices.map(device => {
    const taskValues = device.TaskValues || [];
    taskValues.map(value => vars.push(`${device.TaskName}#${value.Name}`));
    const result = [{
      group: 'TRIGGERS',
      type: device.TaskName || `${device.TaskNumber}-${device.Type}`,
      inputs: [],
      outputs: [1],
      config: [{
        name: 'variable',
        type: 'select',
        values: taskValues.map(value => value.Name),
        value: taskValues.length ? taskValues[0].Name : ''
      }, {
        name: 'euqality',
        type: 'select',
        values: ['', '=', '<', '>', '<=', '>=', '!='],
        value: ''
      }, {
        name: 'value',
        type: 'number'
      }],
      indent: true,
      toString: function () {
        const comparison = this.config[1].value === '' ? 'changes' : `${this.config[1].value} ${this.config[2].value}`;
        return `when ${this.type}.${this.config[0].value} ${comparison}`;
      },
      toDsl: function () {
        const comparison = this.config[1].value === '' ? '' : `${this.config[1].value}${this.config[2].value}`;
        return [`on ${this.type}#${this.config[0].value}${comparison} do\n%%output%%\nEndon\n`];
      }
    }];
    let fnNames, fnName, name;

    switch (device.Type) {
      // todo: need access to GPIO number
      // case 'Switch input - Switch':
      //     result.push({
      //         group: 'ACTIONS',
      //         type: `${device.TaskName} - switch`,
      //         inputs: [1],
      //         outputs: [1],
      //         config: [{
      //             name: 'value',
      //             type: 'number',
      //         }],
      //         toString: function () { return `${device.TaskName}.level = ${this.config[0].value}`; },
      //         toDsl: function () { return [`config,task,${device.TaskName},setlevel,${this.config[0].value}`]; }
      //     });
      //     break;
      case 'Regulator - Level Control':
        result.push({
          group: 'ACTIONS',
          type: `${device.TaskName} - setlevel`,
          inputs: [1],
          outputs: [1],
          config: [{
            name: 'value',
            type: 'number'
          }],
          toString: function () {
            return `${device.TaskName}.level = ${this.config[0].value}`;
          },
          toDsl: function () {
            return [`config,task,${device.TaskName},setlevel,${this.config[0].value}`];
          }
        });
        break;

      case 'Extra IO - PCA9685':
      case 'Switch input - PCF8574':
      case 'Switch input - MCP23017':
        fnNames = {
          'Extra IO - PCA9685': 'PCF',
          'Switch input - PCF8574': 'PCF',
          'Switch input - MCP23017': 'MCP'
        };
        fnName = fnNames[device.Type];
        result.push({
          group: 'ACTIONS',
          type: `${device.TaskName} - GPIO`,
          inputs: [1],
          outputs: [1],
          config: [{
            name: 'pin',
            type: 'select',
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
          }, {
            name: 'value',
            type: 'select',
            values: [0, 1]
          }],
          toString: function () {
            return `${device.TaskName}.pin${this.config[0].value} = ${this.config[1].value}`;
          },
          toDsl: function () {
            return [`${fnName}GPIO,${this.config[0].value},${this.config[1].value}`];
          }
        });
        result.push({
          group: 'ACTIONS',
          type: `${device.TaskName} - Pulse`,
          inputs: [1],
          outputs: [1],
          config: [{
            name: 'pin',
            type: 'select',
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
          }, {
            name: 'value',
            type: 'select',
            values: [0, 1]
          }, {
            name: 'unit',
            type: 'select',
            values: ['ms', 's']
          }, {
            name: 'duration',
            type: 'number'
          }],
          toString: function () {
            return `${device.TaskName}.pin${this.config[0].value} = ${this.config[1].value} for ${this.config[3].value}${this.config[2].value}`;
          },
          toDsl: function () {
            if (this.config[2].value === 's') {
              return [`${fnName}LongPulse,${this.config[0].value},${this.config[1].value},${this.config[2].value}`];
            } else {
              return [`${fnName}Pulse,${this.config[0].value},${this.config[1].value},${this.config[2].value}`];
            }
          }
        });
        break;

      case 'Extra IO - ProMini Extender':
        result.push({
          group: 'ACTIONS',
          type: `${device.TaskName} - GPIO`,
          inputs: [1],
          outputs: [1],
          config: [{
            name: 'pin',
            type: 'select',
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
          }, {
            name: 'value',
            type: 'select',
            values: [0, 1]
          }],
          toString: function () {
            return `${device.TaskName}.pin${this.config[0].value} = ${this.config[1].value}`;
          },
          toDsl: function () {
            return [`EXTGPIO,${this.config[0].value},${this.config[1].value}`];
          }
        });
        break;

      case 'Display - OLED SSD1306':
      case 'Display - LCD2004':
        fnNames = {
          'Display - OLED SSD1306': 'OLED',
          'Display - LCD2004': 'LCD'
        };
        fnName = fnNames[device.Type];
        result.push({
          group: 'ACTIONS',
          type: `${device.TaskName} - Write`,
          inputs: [1],
          outputs: [1],
          config: [{
            name: 'row',
            type: 'select',
            values: [1, 2, 3, 4]
          }, {
            name: 'column',
            type: 'select',
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
          }, {
            name: 'text',
            type: 'text'
          }],
          toString: function () {
            return `${device.TaskName}.text = ${this.config[2].value}`;
          },
          toDsl: function () {
            return [`${fnName},${this.config[0].value},${this.config[1].value},${this.config[2].value}`];
          }
        });
        break;

      case 'Generic - Dummy Device':
        result.push({
          group: 'ACTIONS',
          type: `${device.TaskName} - Write`,
          inputs: [1],
          outputs: [1],
          config: [{
            name: 'variable',
            type: 'select',
            values: taskValues.map(value => value.Name)
          }, {
            name: 'value',
            type: 'text'
          }],
          toString: function () {
            return `${device.TaskName}.${this.config[0].value} = ${this.config[1].value}`;
          },
          toDsl: function () {
            return [`TaskValueSet,${device.TaskNumber},${this.config[0].values.findIndex(this.config[0].value)},${this.config[1].value}`];
          }
        });
        break;
    }

    return result;
  }).flat();
  return {
    nodes,
    vars
  };
};
const getVariables = async () => {
  const urls = ['']; //, 'http://192.168.1.130'

  const vars = {};
  await Promise.all(urls.map(async url => {
    const stat = await getJsonStat(url);
    stat.Sensors.map(device => {
      device.TaskValues.map(value => {
        vars[`${stat.System.Name}@${device.TaskName}#${value.Name}`] = value.Value;
      });
    });
  }));
  return vars;
};
const getDashboardConfigNodes = async url => {
  const devices = await loadDevices(url);
  const vars = [];
  const nodes = devices.map(device => {
    device.TaskValues.map(value => vars.push(`${device.TaskName}#${value.Name}`));
    return [];
  }).flat();
  return {
    nodes,
    vars
  };
};
const storeFile = async (filename, data) => {
  _loader__WEBPACK_IMPORTED_MODULE_1__["loader"].show();
  const file = data ? new File([new Blob([data])], filename) : filename;
  const formData = new FormData();
  formData.append('edit', 1);
  formData.append('file', file);
  return await fetch('/upload', {
    method: 'post',
    body: formData
  }).then(() => {
    _loader__WEBPACK_IMPORTED_MODULE_1__["loader"].hide();
    mini_toastr__WEBPACK_IMPORTED_MODULE_0__["default"].success('Successfully saved to flash!', '', 5000);
  }, e => {
    _loader__WEBPACK_IMPORTED_MODULE_1__["loader"].hide();
    mini_toastr__WEBPACK_IMPORTED_MODULE_0__["default"].error(e.message, '', 5000);
  });
};
const deleteFile = async filename => {
  return await fetch('/filelist?delete=' + filename).then(() => {
    mini_toastr__WEBPACK_IMPORTED_MODULE_0__["default"].success('Successfully saved to flash!', '', 5000);
  }, e => {
    mini_toastr__WEBPACK_IMPORTED_MODULE_0__["default"].error(e.message, '', 5000);
  });
};
const storeDashboardConfig = async config => {
  storeFile('d1.txt', config);
};
const storeRuleConfig = async config => {
  storeFile('r1.txt', config);
};
const loadRuleConfig = async () => {
  return await fetch('/r1.txt').then(response => response.json());
};
const loadDashboardConfig = async nodes => {
  return await fetch('/d1.txt').then(response => response.json());
};
const storeRule = async rule => {
  const formData = new FormData();
  formData.append('set', 1);
  formData.append('rules', rule);
  return await fetch('/rules', {
    method: 'post',
    body: formData
  });
};

/***/ }),

/***/ "./src/lib/helpers.js":
/*!****************************!*\
  !*** ./src/lib/helpers.js ***!
  \****************************/
/*! exports provided: get, set, getKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeys", function() { return getKeys; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "get", function() { return lodash_get__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "set", function() { return lodash_set__WEBPACK_IMPORTED_MODULE_1___default.a; });

 // const get = (obj, path, defaultValue) => path.replace(/\[/g, '.').replace(/\]/g, '').split(".")
// .reduce((a, c) => (a && a[c] ? a[c] : (defaultValue || null)), obj)
// const set = (obj, path, value) => {
//     path.replace(/\[/g, '.').replace(/\]/g, '').split('.').reduce((a, c, i, src) => {
//         if (!a[c]) a[c] = {};
//         if (i === src.length - 1) a[c] = value;
//     }, obj)
// }

const getKeys = object => {
  const keys = [];

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key);
    }
  }

  return keys;
};



/***/ }),

/***/ "./src/lib/loader.js":
/*!***************************!*\
  !*** ./src/lib/loader.js ***!
  \***************************/
/*! exports provided: loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loader", function() { return loader; });
class Loader {
  constructor() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = 'loading';
    document.body.appendChild(loader);
    this.loader = loader;
  }

  show() {
    this.loader.classList.add('show');
  }

  hide() {
    this.loader.classList.add('hide');
    setTimeout(() => {
      this.loader.classList.remove('hide');
      this.loader.classList.remove('show');
    }, 1000);
  }

}

const loader = new Loader();

/***/ }),

/***/ "./src/lib/parser.js":
/*!***************************!*\
  !*** ./src/lib/parser.js ***!
  \***************************/
/*! exports provided: parseConfig, writeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseConfig", function() { return parseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeConfig", function() { return writeConfig; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/lib/helpers.js");


class DataParser {
  constructor(data) {
    this.view = new DataView(data);
    this.offset = 0;
    this.bitbyte = 0;
    this.bitbytepos = 7;
  }

  pad(nr) {
    while (this.offset % nr) {
      this.offset++;
    }
  }

  bit(signed = false, write = false, val) {
    if (this.bitbytepos === 7) {
      if (!write) {
        this.bitbyte = this.byte();
        this.bitbytepos = 0;
      } else {
        this.byte(signed, write, this.bitbyte);
      }
    }

    if (!write) {
      return this.bitbyte >> this.bitbytepos++ & 1;
    } else {
      this.bitbyte = val ? this.bitbyte | 1 << this.bitbytepos++ : this.bitbyte & ~(1 << this.bitbytepos++);
    }
  }

  byte(signed = false, write = false, val) {
    this.pad(1);
    const fn = `${write ? 'set' : 'get'}${signed ? 'Int8' : 'Uint8'}`;
    const res = this.view[fn](this.offset, val);
    this.offset += 1;
    return res;
  }

  int16(signed = false, write = false, val) {
    this.pad(2);
    let fn = signed ? 'Int16' : 'Uint16';
    const res = write ? this.view[`set${fn}`](this.offset, val, true) : this.view[`get${fn}`](this.offset, true);
    this.offset += 2;
    return res;
  }

  int32(signed = false, write = false, val) {
    this.pad(4);
    let fn = signed ? 'Int32' : 'Uint32';
    const res = write ? this.view[`set${fn}`](this.offset, val, true) : this.view[`get${fn}`](this.offset, true);
    this.offset += 4;
    return res;
  }

  float(signed = false, write = false, val) {
    this.pad(4);
    const res = write ? this.view.setFloat32(this.offset, val, true) : this.view.getFloat32(this.offset, true);
    this.offset += 4;
    return res;
  }

  bytes(nr, signed = false, write = false, vals) {
    const res = [];

    for (var x = 0; x < nr; x++) {
      res.push(this.byte(signed, write, vals ? vals[x] : null));
    }

    return res;
  }

  ints(nr, signed = false, write = false, vals) {
    const res = [];

    for (var x = 0; x < nr; x++) {
      res.push(this.int16(signed, write, vals ? vals[x] : null));
    }

    return res;
  }

  longs(nr, signed = false, write = false, vals) {
    const res = [];

    for (var x = 0; x < nr; x++) {
      res.push(this.int32(signed, write, vals ? vals[x] : null));
    }

    return res;
  }

  floats(nr, signed = false, write = false, vals) {
    const res = [];

    for (var x = 0; x < nr; x++) {
      res.push(this.float(write, vals ? vals[x] : null));
    }

    return res;
  }

  string(nr, signed = false, write = false, val) {
    if (write) {
      for (var i = 0; i < nr; ++i) {
        var code = val.charCodeAt(i) || '\0';
        this.byte(false, true, code);
      }
    } else {
      const res = this.bytes(nr);
      return String.fromCharCode.apply(null, res).replace(/\x00/g, '');
    }
  }

}

const parseConfig = (data, config, start) => {
  const p = new DataParser(data);
  if (start) p.offset = start;
  const result = {};
  config.map(value => {
    const prop = value.length ? value.length : value.signed;
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["set"])(result, value.prop, p[value.type](prop, value.signed));
  });
  return result;
};
const writeConfig = (buffer, data, config, start) => {
  const p = new DataParser(buffer);
  if (start) p.offset = start;
  config.map(value => {
    const val = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["get"])(data, value.prop);

    if (value.length) {
      p[value.type](value.length, value.signed, true, val);
    } else {
      p[value.type](value.signed, true, val);
    }
  });
};

/***/ }),

/***/ "./src/lib/plugins.js":
/*!****************************!*\
  !*** ./src/lib/plugins.js ***!
  \****************************/
/*! exports provided: loadPlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPlugins", function() { return loadPlugins; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/lib/settings.js");
/* harmony import */ var _espeasy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./espeasy */ "./src/lib/espeasy.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader */ "./src/lib/loader.js");



const PLUGINS = ['dash.js', 'flow.js'];

const dynamicallyLoadScript = url => {
  return new Promise(resolve => {
    var script = document.createElement("script"); // create a script DOM node

    script.src = url; // set its src to the provided URL

    script.onreadystatechange = resolve;
    script.onload = resolve;
    script.onerror = resolve;
    document.head.appendChild(script); // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
  });
};

const getPluginAPI = () => {
  return {
    settings: _settings__WEBPACK_IMPORTED_MODULE_0__["settings"],
    loader: _loader__WEBPACK_IMPORTED_MODULE_2__["loader"],
    espeasy: _espeasy__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
};

window.getPluginAPI = getPluginAPI;
const loadPlugins = async () => {
  return Promise.all(PLUGINS.map(async plugin => {
    return dynamicallyLoadScript(plugin);
  }));
};

/***/ }),

/***/ "./src/lib/settings.js":
/*!*****************************!*\
  !*** ./src/lib/settings.js ***!
  \*****************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/lib/helpers.js");


const diff = (obj1, obj2, path = '') => {
  return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getKeys"])(obj1).map(key => {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (val1 instanceof Object) return diff(val1, val2, path ? `${path}.${key}` : key);else if (val1 !== val2) {
      return [{
        path: `${path}.${key}`,
        val1,
        val2
      }];
    } else return [];
  }).flat();
};

class Settings {
  init(settings) {
    this.settings = settings;
    this.apply();
  }

  get(prop) {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["get"])(this.settings, prop);
  }
  /**
   * sets changes to the current version and sets changed flag
   * @param {*} prop 
   * @param {*} value 
   */


  set(prop, value) {
    const obj = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["get"])(this.settings, prop);

    if (typeof obj === 'object') {
      console.warn('settings an object!');
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["set"])(this.settings, prop, value);
    } else {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["set"])(this.settings, prop, value);
    }

    if (this.diff().length) this.changed = true;
  }
  /**
   * returns diff between applied and current version
   */


  diff() {
    return diff(this.stored, this.settings);
  }
  /***
   * applys changes and creates new version in localStorage
   */


  apply() {
    this.stored = JSON.parse(JSON.stringify(this.settings));
    this.changed = false;
  }

}

const settings = window.settings1 = new Settings();

/***/ })

/******/ });
//# sourceMappingURL=app.js.map