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
/* harmony import */ var _lib_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/menu */ "./src/lib/menu.js");









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
      menu: _lib_menu__WEBPACK_IMPORTED_MODULE_8__["menu"].menus[0],
      page: _lib_menu__WEBPACK_IMPORTED_MODULE_8__["menu"].menus[0],
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
      menus: _lib_menu__WEBPACK_IMPORTED_MODULE_8__["menu"].menus,
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
        const m = _lib_menu__WEBPACK_IMPORTED_MODULE_8__["menu"].menus.find(menu => menu.href === parts[0]);
        const page = parts.length > 1 ? _lib_menu__WEBPACK_IMPORTED_MODULE_8__["menu"].routes.find(route => route.href === `${parts[0]}/${parts[1]}`) : m;

        if (page) {
          this.setState({
            page,
            menu: m,
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

/***/ "./src/components/espeasy_p2p/index.js":
/*!*********************************************!*\
  !*** ./src/components/espeasy_p2p/index.js ***!
  \*********************************************/
/*! exports provided: EspEaspP2PComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspEaspP2PComponent", function() { return EspEaspP2PComponent; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");

class EspEaspP2PComponent extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      nodes: []
    };

    this.refresh = () => {
      fetch('/node_list_json').then(res => res.json()).then(nodes => {
        this.setState({
          nodes
        });
      });
    };
  }

  render(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, this.state.nodes.map(node => {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, "Unit ", node.first, ": ", node.name, " [", node.ip, "]");
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      type: "button",
      onClick: this.refresh
    }, "REFRESH"));
  }

  componentDidMount() {
    this.refresh();
  }

}

/***/ }),

/***/ "./src/components/form/index.js":
/*!**************************************!*\
  !*** ./src/components/form/index.js ***!
  \**************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/helpers */ "./src/lib/helpers.js");
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/settings */ "./src/lib/settings.js");



class Form extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.onChange = (id, prop, config = {}) => {
      return e => {
        let val = this.form.elements[id].value;

        if (config.type === 'checkbox') {
          val = this.form.elements[id].checked ? 1 : 0;
        } else if (config.type === 'number' || config.type === 'ip') {
          val = parseFloat(val);
        } else if (config.type === 'select') {
          val = isNaN(val) ? val : parseInt(val);
        }

        if (prop.startsWith('ROOT')) {
          _lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].set(prop.replace('ROOT.', ''), val);
        } else {
          Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_1__["set"])(this.props.selected, prop, val);
        }

        if (config.onChange) {
          config.onChange(e);
        }
      };
    };
  }

  renderConfig(id, config, value, varName) {
    switch (config.type) {
      case 'string':
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
          id: id,
          type: "text",
          value: value,
          onChange: this.onChange(id, varName, config)
        });

      case 'number':
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
          id: id,
          type: "number",
          value: value,
          min: config.min,
          max: config.max,
          onChange: this.onChange(id, varName, config)
        });

      case 'ip':
        return [Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
          id: `${id}.0`,
          type: "number",
          min: "0",
          max: "255",
          onChange: this.onChange(`${id}.0`, `${varName}.0`, config),
          style: "width: 80px",
          value: value ? value[0] : null
        }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
          id: `${id}.1`,
          type: "number",
          min: "0",
          max: "255",
          onChange: this.onChange(`${id}.1`, `${varName}.1`, config),
          style: "width: 80px",
          value: value ? value[1] : null
        }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
          id: `${id}.2`,
          type: "number",
          min: "0",
          max: "255",
          onChange: this.onChange(`${id}.2`, `${varName}.2`, config),
          style: "width: 80px",
          value: value ? value[2] : null
        }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
          id: `${id}.3`,
          type: "number",
          min: "0",
          max: "255",
          onChange: this.onChange(`${id}.3`, `${varName}.3`, config),
          style: "width: 80px",
          value: value ? value[3] : null
        })];

      case 'password':
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
          id: id,
          type: "password",
          onChange: this.onChange(id, varName, config)
        });

      case 'checkbox':
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
          id: id,
          type: "checkbox",
          defaultChecked: value,
          onChange: this.onChange(id, varName, config)
        });

      case 'select':
        const options = typeof config.options === 'function' ? config.options() : config.options;
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("select", {
          id: id,
          type: "password",
          onChange: this.onChange(id, varName, config)
        }, options.map(option => {
          const name = option instanceof Object ? option.name : option;
          const val = option instanceof Object ? option.value : option;

          if (val === value) {
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
              value: val,
              selected: true
            }, name);
          } else {
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
              value: val
            }, name);
          }
        }));

      case 'file':
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
          id: id,
          type: "file"
        });

      case 'button':
        const clickEvent = () => {
          if (!config.click) return;
          config.click(this.props.selected);
        };

        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
          type: "button",
          onClick: clickEvent
        }, "GET IT");
    }
  }

  renderConfigGroup(id, configs, values) {
    const configArray = Array.isArray(configs) ? configs : [configs];
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "pure-control-group"
    }, configArray.map((conf, i) => {
      const varId = configArray.length > 1 ? `${id}.${i}` : id;
      const varName = conf.var ? conf.var : varId;
      const val = varName.startsWith('ROOT') ? _lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].get(varName.replace('ROOT.', '')) : Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_1__["get"])(values, varName, null);

      if (conf.if) {
        if (!Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_1__["get"])(_lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].settings, conf.if, false)) return null;
      }

      if (conf.type === 'custom') {
        const CustomComponent = conf.component;
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(CustomComponent, {
          conf: conf,
          values: values
        });
      }

      return [Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
        for: varId
      }, conf.name), this.renderConfig(varId, conf, val, varName)];
    }));
  }

  renderGroup(id, group, values) {
    if (!group.configs || !Object.keys(group.configs).length) return null;
    const keys = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_1__["getKeys"])(group.configs);
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("fieldset", {
      name: id
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", null, group.name), keys.map(key => {
      const conf = group.configs[key];
      return this.renderConfigGroup(`${id}.${key}`, conf, values);
    }));
  }

  render(props) {
    const keys = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_1__["getKeys"])(props.config.groups);
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("form", {
      class: "pure-form pure-form-aligned",
      ref: ref => this.form = ref
    }, keys.map(key => this.renderGroup(key, props.config.groups[key], props.selected)));
  }

}

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
  length: PLUGIN_CONFIGLONGVAR_MAX
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
        settings: Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["writeConfig"])(buffer, _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].settings.controllers[i].settings, ControllerSettings, 1024 * 27 + 1024 * 2 * i),
        extra: Object(_lib_parser__WEBPACK_IMPORTED_MODULE_0__["writeConfig"])(buffer, _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].settings.controllers[i].extra, ControllerSettings, 1024 * 28 + 1024 * 2 * i)
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

/***/ }),

/***/ "./src/devices/10_light_lux.js":
/*!*************************************!*\
  !*** ./src/devices/10_light_lux.js ***!
  \*************************************/
/*! exports provided: bh1750 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bh1750", function() { return bh1750; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const i2c_address = [{
  value: 35,
  name: '0x23 (35) - default'
}, {
  value: 92,
  name: '0x5c (92)'
}];
const measurmentMode = [{
  value: 1,
  name: 'RESOLUTION_LOW'
}, {
  value: 2,
  name: 'RESOLUTION_NORMAL'
}, {
  value: 3,
  name: 'RESOLUTION_HIGH'
}, {
  value: 99,
  name: 'RESOLUTION_AUTO_HIGH'
}];
const bh1750 = {
  defaults: () => ({
    'configs[0]': 35,
    'settings.values[0].name': 'Lux'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      i2c_address: {
        name: 'I2C Address',
        type: 'select',
        options: i2c_address,
        var: 'configs[0]'
      },
      mode: {
        name: 'Measurement mode',
        type: 'select',
        options: measurmentMode,
        var: 'configs[1]'
      },
      send_to_sleep: {
        name: 'Send sensor to sleep',
        type: 'checkbox',
        var: 'configs[2]'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/11_pme.js":
/*!*******************************!*\
  !*** ./src/devices/11_pme.js ***!
  \*******************************/
/*! exports provided: pme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pme", function() { return pme; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const mode = [{
  value: 0,
  name: 'Digital'
}, {
  value: 1,
  name: 'Analog'
}];
const pme = {
  defaults: () => ({
    'settings.values[0].name': 'Value'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      port: {
        name: 'Port',
        type: 'number',
        var: 'gpio4'
      },
      mode: {
        name: 'Port Type',
        type: 'select',
        options: mode,
        var: 'configs[0]'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/12_lcd.js":
/*!*******************************!*\
  !*** ./src/devices/12_lcd.js ***!
  \*******************************/
/*! exports provided: lcd2004 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lcd2004", function() { return lcd2004; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const i2c_address = [{
  value: 35,
  name: '0x23 (35) - default'
}, {
  value: 92,
  name: '0x5c (92)'
}];
const displaySize = [{
  value: 1,
  name: 'RESOLUTION_LOW'
}, {
  value: 2,
  name: 'RESOLUTION_NORMAL'
}, {
  value: 3,
  name: 'RESOLUTION_HIGH'
}, {
  value: 99,
  name: 'RESOLUTION_AUTO_HIGH'
}];
const lcdCommand = [{
  value: 1,
  name: 'RESOLUTION_LOW'
}, {
  value: 2,
  name: 'RESOLUTION_NORMAL'
}, {
  value: 3,
  name: 'RESOLUTION_HIGH'
}, {
  value: 99,
  name: 'RESOLUTION_AUTO_HIGH'
}];
const lcd2004 = {
  defaults: () => ({
    'configs[0]': 32
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      i2c_address: {
        name: 'I2C Address',
        type: 'select',
        options: i2c_address,
        var: 'configs[0]'
      },
      size: {
        name: 'Display Size',
        type: 'select',
        options: displaySize,
        var: 'configs[1]'
      },
      line1: {
        name: 'Line 1',
        type: 'string'
        /*var: 'configs[2]' */

      },
      line2: {
        name: 'Line 2',
        type: 'string'
        /*var: 'configs[2]' */

      },
      line3: {
        name: 'Line 3',
        type: 'string'
        /*var: 'configs[2]' */

      },
      line4: {
        name: 'Line 4',
        type: 'string'
        /*var: 'configs[2]' */

      },
      button: {
        name: 'Display Button',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio3'
      },
      timeout: {
        name: 'Display Timeout',
        type: 'number',
        var: 'configs[2]'
      },
      command: {
        name: 'LCD Command Mode',
        type: 'select',
        options: lcdCommand,
        var: 'configs[3]'
      }
    }
  }
};

/***/ }),

/***/ "./src/devices/13_hcsr04.js":
/*!**********************************!*\
  !*** ./src/devices/13_hcsr04.js ***!
  \**********************************/
/*! exports provided: hcsr04 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hcsr04", function() { return hcsr04; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const mode = [{
  value: 0,
  name: 'Value'
}, {
  value: 1,
  name: 'State'
}];
const units = [{
  value: 0,
  name: 'Metric'
}, {
  value: 1,
  name: 'Imperial'
}];
const filters = [{
  value: 0,
  name: 'None'
}, {
  value: 1,
  name: 'Median'
}];
const hcsr04 = {
  defaults: () => ({
    gpio1: 255,
    gpio2: 255,
    'settings.values[0].name': 'Distance'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      gpio1: {
        name: 'GPIO Trigger',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      gpio2: {
        name: 'GPIO Echo, 5V',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio2'
      },
      mode: {
        name: 'Mode',
        type: 'select',
        options: mode,
        var: 'configs[0]'
      },
      treshold: {
        name: 'Treshold',
        type: 'number',
        var: 'configs[1]'
      },
      max_distance: {
        name: 'Max Distance',
        type: 'number',
        var: 'configs[2]'
      },
      unit: {
        name: 'Unit',
        type: 'select',
        options: units,
        var: 'configs[3]'
      },
      filter: {
        name: 'Filter',
        type: 'select',
        options: filters,
        var: 'configs[4]'
      },
      filter_size: {
        name: 'Filter Size',
        type: 'number',
        var: 'configs[5]'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/14_si7021.js":
/*!**********************************!*\
  !*** ./src/devices/14_si7021.js ***!
  \**********************************/
/*! exports provided: si7021 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "si7021", function() { return si7021; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const resolution = [{
  value: 0,
  name: 'Temp 14 bits, RH 12 bits'
}, {
  value: 128,
  name: 'Temp 13 bits, RH 10 bits'
}, {
  value: 1,
  name: 'Temp 12 bits, RH 8 bits'
}, {
  value: 129,
  name: 'Temp 11 bits, RH 11 bits'
}];
const si7021 = {
  defaults: () => ({
    interval: 60,
    'settings.values[0].name': 'Temperature',
    'settings.values[1].name': 'Humidity'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      resolution: {
        name: 'Resolution',
        type: 'select',
        options: resolution,
        var: 'configs[0]'
      }
    }
  },
  data: true,
  vals: 2
};

/***/ }),

/***/ "./src/devices/15_tls2561.js":
/*!***********************************!*\
  !*** ./src/devices/15_tls2561.js ***!
  \***********************************/
/*! exports provided: tls2561 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tls2561", function() { return tls2561; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const i2c_address = [{
  value: 57,
  name: '0x39 (57) - default'
}, {
  value: 73,
  name: '0x49 (73)'
}, {
  value: 41,
  name: '0x29 (41)'
}];
const measurmentMode = [{
  value: 0,
  name: '13 ms'
}, {
  value: 1,
  name: '101 ms'
}, {
  value: 2,
  name: '402 ms'
}];
const tls2561 = {
  defaults: () => ({
    'configs[0]': 57,
    'settings.values[0].name': 'Lux',
    'settings.values[1].name': 'Infrared',
    'settings.values[2].name': 'Broadband'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      i2c_address: {
        name: 'I2C Address',
        type: 'select',
        options: i2c_address,
        var: 'configs[0]'
      },
      mode: {
        name: 'Integration time',
        type: 'select',
        options: measurmentMode,
        var: 'configs[1]'
      },
      send_to_sleep: {
        name: 'Send sensor to sleep',
        type: 'checkbox',
        var: 'configs[2]'
      },
      gain: {
        name: 'Enable 16x gain',
        type: 'checkbox',
        var: 'configs[3]'
      }
    }
  },
  data: true,
  vals: 3
};

/***/ }),

/***/ "./src/devices/17_pn532.js":
/*!*********************************!*\
  !*** ./src/devices/17_pn532.js ***!
  \*********************************/
/*! exports provided: pn532 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pn532", function() { return pn532; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const pn532 = {
  defaults: () => ({
    gpio1: 255,
    'settings.values[0].name': 'Tag'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      gpio1: {
        name: 'Reset Pin',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/18_dust.js":
/*!********************************!*\
  !*** ./src/devices/18_dust.js ***!
  \********************************/
/*! exports provided: dust */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dust", function() { return dust; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const i2c_address = [{
  value: 35,
  name: '0x23 (35) - default'
}, {
  value: 92,
  name: '0x5c (92)'
}];
const measurmentMode = [{
  value: 1,
  name: 'RESOLUTION_LOW'
}, {
  value: 2,
  name: 'RESOLUTION_NORMAL'
}, {
  value: 3,
  name: 'RESOLUTION_HIGH'
}, {
  value: 99,
  name: 'RESOLUTION_AUTO_HIGH'
}];
const dust = {
  defaults: () => ({
    gpio1: 255,
    'settings.values[0].name': 'Dust'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      gpio1: {
        name: 'GPIO - LED',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/19_pcf8574.js":
/*!***********************************!*\
  !*** ./src/devices/19_pcf8574.js ***!
  \***********************************/
/*! exports provided: pcf8574 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pcf8574", function() { return pcf8574; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const eventTypes = [{
  value: 0,
  name: 'Disabled'
}, {
  value: 1,
  name: 'Active on LOW'
}, {
  value: 2,
  name: 'Active on HIGH'
}, {
  value: 3,
  name: 'Active on LOW and HIGH'
}];
const pcf8574 = {
  defaults: () => ({
    gpio4: 0,
    'settings.values[0].name': 'Switch'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      port: {
        name: 'PORT',
        type: 'number',
        var: 'gpio4'
      },
      inversed: {
        name: 'Inversed logic',
        type: 'checkbox',
        var: 'pin1inversed'
      },
      send_boot_state: {
        name: 'Send Boot State',
        type: 'checkbox',
        var: 'configs[3]'
      }
    }
  },
  advanced: {
    name: 'Advanced event management',
    configs: {
      debounce: {
        name: 'De-bounce (ms)',
        type: 'number',
        var: 'configs_float[0]'
      },
      dblclick: {
        name: 'Doublclick Event',
        type: 'select',
        options: eventTypes,
        var: 'configs[4]'
      },
      dblclick_interval: {
        name: 'Doubleclick Max interval (ms)',
        type: 'number',
        var: 'configs_float[1]'
      },
      longpress: {
        name: 'Longpress event',
        type: 'select',
        options: eventTypes,
        var: 'configs[5]'
      },
      longpress_interval: {
        name: 'Longpress min interval (ms)',
        type: 'number',
        var: 'configs_float[2]'
      },
      safe_button: {
        name: 'Use safe button',
        type: 'checkbox',
        var: 'configs_float[3]'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/1_input_switch.js":
/*!***************************************!*\
  !*** ./src/devices/1_input_switch.js ***!
  \***************************************/
/*! exports provided: inputSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputSwitch", function() { return inputSwitch; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const eventTypes = [{
  value: 0,
  name: 'Disabled'
}, {
  value: 1,
  name: 'Active on LOW'
}, {
  value: 2,
  name: 'Active on HIGH'
}, {
  value: 3,
  name: 'Active on LOW and HIGH'
}];
const inputSwitch = {
  defaults: () => ({
    gpio1: 255,
    interval: 60,
    'configs_float[1]': 1000,
    'configs_float[2]': 1000,
    'settings.values[0].name': 'Switch'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      pullup: {
        name: 'Internal PullUp',
        type: 'checkbox',
        var: 'pin1pullup'
      },
      inversed: {
        name: 'Inversed logic',
        type: 'checkbox',
        var: 'pin1inversed'
      },
      gpio: {
        name: 'GPIO',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      switch_type: {
        name: 'Switch Type',
        type: 'select',
        options: [{
          name: 'switch',
          value: 0
        }, {
          name: 'dimmer',
          value: 3
        }],
        var: 'configs[0]'
      },
      switch_button_type: {
        name: 'Switch Button Type',
        type: 'select',
        options: [{
          name: 'normal',
          value: 0
        }, {
          name: 'active low',
          value: 1
        }, {
          name: 'active high',
          value: 2
        }],
        var: 'configs[2]'
      },
      send_boot_state: {
        name: 'Send Boot State',
        type: 'checkbox',
        var: 'configs[3]'
      }
    }
  },
  advanced: {
    name: 'Advanced event management',
    configs: {
      debounce: {
        name: 'De-bounce (ms)',
        type: 'number',
        var: 'configs_float[0]'
      },
      dblclick: {
        name: 'Doublclick Event',
        type: 'select',
        options: eventTypes,
        var: 'configs[4]'
      },
      dblclick_interval: {
        name: 'Doubleclick Max interval (ms)',
        min: 1000,
        max: 3000,
        type: 'number',
        var: 'configs_float[1]'
      },
      longpress: {
        name: 'Longpress event',
        type: 'select',
        options: eventTypes,
        var: 'configs[5]'
      },
      longpress_interval: {
        name: 'Longpress min interval (ms)',
        min: 1000,
        max: 5000,
        type: 'number',
        var: 'configs_float[2]'
      },
      safe_button: {
        name: 'Use safe button',
        type: 'checkbox',
        var: 'configs_float[3]'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/20_ser2net.js":
/*!***********************************!*\
  !*** ./src/devices/20_ser2net.js ***!
  \***********************************/
/*! exports provided: ser2net */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ser2net", function() { return ser2net; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const serialConfig = [{
  value: 0,
  name: 'No Parity'
}, {
  value: 1,
  name: 'Even'
}, {
  value: 2,
  name: 'Odd'
}];
const eventProcessing = [{
  value: 0,
  name: 'None'
}, {
  value: 1,
  name: 'Generic'
}, {
  value: 2,
  name: 'RFLink'
}];
const ser2net = {
  defaults: () => ({
    gpio1: 255
  }),
  sensor: {
    name: 'Settings',
    configs: {
      port: {
        name: 'TCP Port',
        type: 'number',
        var: 'extra.plugin_config_long[0]'
      },
      baudrate: {
        name: 'Baudrate',
        type: 'number',
        var: 'extra.plugin_config_long[1]'
      },
      serial_config: {
        name: 'Data Bits',
        type: 'select',
        options: serialConfig,
        var: 'configs[2]'
      },
      reset_after_boot: {
        name: 'Reset target after boot',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      timeout: {
        name: 'RX Receive Timeout',
        type: 'number',
        var: 'configs[0]'
      },
      event_processing: {
        name: 'Event Processing',
        type: 'select',
        options: eventProcessing,
        var: 'configs[1]'
      }
    }
  }
};

/***/ }),

/***/ "./src/devices/21_level_control.js":
/*!*****************************************!*\
  !*** ./src/devices/21_level_control.js ***!
  \*****************************************/
/*! exports provided: levelControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelControl", function() { return levelControl; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const sensorModel = [{
  value: 11,
  name: 'DHT11'
}, {
  value: 22,
  name: 'DHT22'
}, {
  value: 12,
  name: 'DHT12'
}, {
  value: 23,
  name: 'Sonoff am2301'
}, {
  value: 70,
  name: 'Sonoff si7021'
}];
const levelControl = {
  defaults: () => ({
    gpio1: 255,
    'settings.values[0].name': 'Output'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      gpio: {
        name: 'GPIO Level Low',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      check_task: {
        name: 'Check Task',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["getTasks"],
        var: 'configs[0]'
      },
      check_value: {
        name: 'Check Value',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["getTaskValues"],
        var: 'configs[1]'
      },
      level: {
        name: 'Set Level',
        type: 'number',
        var: 'configs_float[0]'
      },
      hysteresis: {
        name: 'Hysteresis',
        type: 'number',
        var: 'configs_float[1]'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/22_pca9685.js":
/*!***********************************!*\
  !*** ./src/devices/22_pca9685.js ***!
  \***********************************/
/*! exports provided: pca9685 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pca9685", function() { return pca9685; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const mode = [...Array(32)].map((v, i) => ({
  value: i,
  name: `0x${i.toString(16)} (${i})`
}));
const i2c_address = [...Array(32)].map((v, i) => ({
  value: i + 64,
  name: `0x${(i + 64).toString(16)} (${i + 64})`
}));
const pca9685 = {
  defaults: () => ({
    gpio1: 255,
    'configs_float[0]': 1500,
    'configs_float[1]': 4095,
    'settings.values[0].name': 'Output'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      i2c_address: {
        name: 'I2C Address',
        type: 'select',
        options: i2c_address,
        var: 'configs[0]'
      },
      mode: {
        name: 'Mode 2',
        type: 'select',
        options: mode,
        var: 'configs[1]'
      },
      frequency: {
        name: 'Frequency (23 - 1500)',
        type: 'number',
        min: 23,
        max: 1500,
        var: 'configs_float[0]'
      },
      range: {
        name: 'Range (1-10000)',
        type: 'number',
        min: 1,
        max: 10000,
        var: 'configs_float[1]'
      }
    }
  }
};

/***/ }),

/***/ "./src/devices/23_oled1306.js":
/*!************************************!*\
  !*** ./src/devices/23_oled1306.js ***!
  \************************************/
/*! exports provided: oled1306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oled1306", function() { return oled1306; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const i2c_address = [{
  value: 35,
  name: '0x23 (35) - default'
}, {
  value: 92,
  name: '0x5c (92)'
}];
const displaySize = [{
  value: 1,
  name: 'RESOLUTION_LOW'
}, {
  value: 2,
  name: 'RESOLUTION_NORMAL'
}, {
  value: 3,
  name: 'RESOLUTION_HIGH'
}, {
  value: 99,
  name: 'RESOLUTION_AUTO_HIGH'
}];
const oled1306 = {
  sensor: {
    name: 'Sensor',
    configs: {
      i2c_address: {
        name: 'I2C Address',
        type: 'select',
        options: i2c_address,
        var: 'configs[0]'
      },
      rotation: {
        name: 'Rotation',
        type: 'select',
        options: displaySize,
        var: 'configs[1]'
      },
      size: {
        name: 'Display Size',
        type: 'select',
        options: displaySize,
        var: 'configs[1]'
      },
      font: {
        name: 'Font Width',
        type: 'select',
        options: displaySize,
        var: 'configs[1]'
      },
      line1: {
        name: 'Line 1',
        type: 'text',
        var: 'configs[2]'
      },
      line2: {
        name: 'Line 2',
        type: 'text',
        var: 'configs[2]'
      },
      line3: {
        name: 'Line 3',
        type: 'text',
        var: 'configs[2]'
      },
      line4: {
        name: 'Line 4',
        type: 'text',
        var: 'configs[2]'
      },
      line5: {
        name: 'Line 4',
        type: 'text',
        var: 'configs[2]'
      },
      line6: {
        name: 'Line 4',
        type: 'text',
        var: 'configs[2]'
      },
      line7: {
        name: 'Line 4',
        type: 'text',
        var: 'configs[2]'
      },
      line8: {
        name: 'Line 4',
        type: 'text',
        var: 'configs[2]'
      },
      button: {
        name: 'Display Button',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      timeout: {
        name: 'Display Timeout',
        type: 'number',
        var: 'configs[2]'
      }
    }
  }
};

/***/ }),

/***/ "./src/devices/24_mlx90614.js":
/*!************************************!*\
  !*** ./src/devices/24_mlx90614.js ***!
  \************************************/
/*! exports provided: mlx90614 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mlx90614", function() { return mlx90614; });
const options = [{
  value: 0,
  name: 'IR Object Temperature'
}, {
  value: 1,
  name: 'Ambient Temperature'
}];
const mlx90614 = {
  sensor: {
    name: 'Sensor',
    configs: {
      port: {
        name: 'Port',
        type: 'number',
        var: 'gpio4'
      },
      option: {
        name: 'Option',
        type: 'select',
        options: options,
        var: 'configs[0]'
      }
    }
  }
};

/***/ }),

/***/ "./src/devices/25_ads1115.js":
/*!***********************************!*\
  !*** ./src/devices/25_ads1115.js ***!
  \***********************************/
/*! exports provided: ads1115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ads1115", function() { return ads1115; });
const i2c_address = [{
  value: 72,
  name: '0x48 (72)'
}, {
  value: 73,
  name: '0x49 (73)'
}, {
  value: 74,
  name: '0x4A (74)'
}, {
  value: 75,
  name: '0x4B (75)'
}];
const gainOptions = [{
  value: 0,
  name: '2/3x gain (FS=6.144V)'
}, {
  value: 1,
  name: '1x gain (FS=4.096V)'
}, {
  value: 2,
  name: '2x gain (FS=2.048V)'
}, {
  value: 3,
  name: '4x gain (FS=1.024V)'
}, {
  value: 4,
  name: '8x gain (FS=0.512V)'
}, {
  value: 5,
  name: '16x gain (FS=0.256V)'
}];
const multiplexerOptions = [{
  value: 0,
  name: 'AIN0 - AIN1 (Differential)'
}, {
  value: 1,
  name: 'AIN0 - AIN3 (Differential)'
}, {
  value: 2,
  name: 'AIN1 - AIN3 (Differential)'
}, {
  value: 3,
  name: 'AIN2 - AIN3 (Differential)'
}, {
  value: 4,
  name: 'AIN0 - GND (Single-Ended)'
}, {
  value: 5,
  name: 'AIN1 - GND (Single-Ended)'
}, {
  value: 6,
  name: 'AIN2 - GND (Single-Ended)'
}, {
  value: 7,
  name: 'AIN3 - GND (Single-Ended)'
}];
const ads1115 = {
  sensor: {
    name: 'Sensor',
    configs: {
      i2c_address: {
        name: 'I2C Address',
        type: 'select',
        options: i2c_address,
        var: 'configs[0]'
      },
      gain: {
        name: 'Gain',
        type: 'select',
        options: gainOptions,
        var: 'configs[1]'
      },
      multiplexer: {
        name: 'Input Multiplexer',
        type: 'select',
        options: multiplexerOptions,
        var: 'configs[2]'
      }
    }
  },
  advanced: {
    name: 'Two point calibration',
    configs: {
      enabled: {
        name: 'Calibration Enabled',
        type: 'number',
        var: 'configs[3]'
      },
      point1: [{
        name: 'Point 1',
        type: 'number',
        var: 'configs_long[0]'
      }, {
        name: '=',
        type: 'number',
        var: 'configs_float[1]'
      }],
      point2: [{
        name: 'Point 2',
        type: 'number',
        var: 'configs_long[1]'
      }, {
        name: '=',
        type: 'number',
        var: 'configs_float[1]'
      }]
    }
  }
};

/***/ }),

/***/ "./src/devices/26_system_info.js":
/*!***************************************!*\
  !*** ./src/devices/26_system_info.js ***!
  \***************************************/
/*! exports provided: systemInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemInfo", function() { return systemInfo; });
const indicator = [{
  value: 0,
  name: 'Uptime'
}, {
  value: 1,
  name: 'Free Ram'
}, {
  value: 2,
  name: 'WiFi RSSI'
}, {
  value: 3,
  name: 'Input VCC'
}, {
  value: 4,
  name: 'System load'
}, {
  value: 5,
  name: 'IP 1.Octet'
}, {
  value: 6,
  name: 'IP 2.Octet'
}, {
  value: 7,
  name: 'IP 3.Octet'
}, {
  value: 8,
  name: 'IP 4.Octet'
}, {
  value: 9,
  name: 'Web activity'
}, {
  value: 10,
  name: 'Free Stack'
}, {
  value: 11,
  name: 'None'
}];
const systemInfo = {
  sensor: {
    name: 'Settings',
    configs: {
      indicator1: {
        name: 'Indicator 1',
        type: 'select',
        options: indicator,
        var: 'configs_long[0]'
      },
      indicator1: {
        name: 'Indicator 2',
        type: 'select',
        options: indicator,
        var: 'configs_long[1]'
      },
      indicator1: {
        name: 'Indicator 3',
        type: 'select',
        options: indicator,
        var: 'configs_long[2]'
      },
      indicator1: {
        name: 'Indicator 4',
        type: 'select',
        options: indicator,
        var: 'configs_long[3]'
      }
    }
  }
};

/***/ }),

/***/ "./src/devices/27_ina219.js":
/*!**********************************!*\
  !*** ./src/devices/27_ina219.js ***!
  \**********************************/
/*! exports provided: ina219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ina219", function() { return ina219; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const measurmentRange = [{
  value: 0,
  name: '32V, 2A'
}, {
  value: 1,
  name: '32V, 1A'
}, {
  value: 2,
  name: '16V, 0.4A'
}];
const measurmentType = [{
  value: 0,
  name: 'Voltage'
}, {
  value: 1,
  name: 'Current'
}, {
  value: 2,
  name: 'Power'
}, {
  value: 3,
  name: 'Voltage/Current/Power'
}];
const i2c_address = [{
  value: 64,
  name: '0x40 (64) - (default)'
}, {
  value: 65,
  name: '0x41 (65)'
}, {
  value: 68,
  name: '0x44 (68)'
}, {
  value: 69,
  name: '0x45 (69)'
}];
const ina219 = {
  sensor: {
    name: 'Sensor',
    configs: {
      i2c_address: {
        name: 'I2C Address',
        type: 'select',
        options: i2c_address,
        var: 'configs[0]'
      },
      check_task: {
        name: 'Measurment Range',
        type: 'select',
        options: measurmentRange,
        var: 'configs[1]'
      },
      check_value: {
        name: 'Measurment Type',
        type: 'select',
        options: measurmentType,
        var: 'configs[2]'
      }
    }
  }
};

/***/ }),

/***/ "./src/devices/28_bmx280.js":
/*!**********************************!*\
  !*** ./src/devices/28_bmx280.js ***!
  \**********************************/
/*! exports provided: bmx280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bmx280", function() { return bmx280; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const i2c_address = [{
  value: 118,
  name: '0x76 (118) - (default)'
}, {
  value: 119,
  name: '0x77 (119) - (default)'
}];
const bmx280 = {
  defaults: () => ({
    ValueCount: 1,
    SendDataOption: 1,
    TimerOption: 1,
    TimerOptional: 1,
    GlobalSync: 1,
    'settings.values[0].name': 'Temperature',
    'settings.values[1].name': 'Humidity',
    'settings.values[2].name': 'Pressure'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      i2c_address: {
        name: 'I2C Address',
        type: 'select',
        options: i2c_address,
        var: 'configs[0]'
      },
      altitude: {
        name: 'Altitude',
        type: 'number',
        var: 'configs[1]'
      },
      offset: {
        name: 'Temperature Offset',
        type: 'number',
        var: 'configs[2]'
      }
    }
  },
  data: true,
  vals: 3
};

/***/ }),

/***/ "./src/devices/29_mqtt_domoticz.js":
/*!*****************************************!*\
  !*** ./src/devices/29_mqtt_domoticz.js ***!
  \*****************************************/
/*! exports provided: mqttDomoticz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mqttDomoticz", function() { return mqttDomoticz; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const mqttDomoticz = {
  sensor: {
    name: 'Actuator',
    configs: {
      gpio: {
        name: 'GPIO',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      idx: {
        name: 'IDX',
        type: 'number',
        var: 'configs[0]'
      }
    }
  }
};

/***/ }),

/***/ "./src/devices/2_analog_input.js":
/*!***************************************!*\
  !*** ./src/devices/2_analog_input.js ***!
  \***************************************/
/*! exports provided: analogInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analogInput", function() { return analogInput; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const analogInput = {
  defaults: () => ({
    'settings.values[0].name': 'Analog'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      oversampling: {
        name: 'Oversampling',
        type: 'checkbox',
        var: 'configs[0]'
      }
    }
  },
  advanced: {
    name: 'Two point calibration',
    configs: {
      enabled: {
        name: 'Calibration Enabled',
        type: 'checkbox',
        var: 'configs[3]'
      },
      point1: [{
        name: 'Point 1',
        type: 'number',
        var: 'configs_long[0]'
      }, {
        name: '=',
        type: 'number',
        var: 'configs_float[0]'
      }],
      point2: [{
        name: 'Point 2',
        type: 'number',
        var: 'configs_long[1]'
      }, {
        name: '=',
        type: 'number',
        var: 'configs_float[1]'
      }]
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/30_bmp280.js":
/*!**********************************!*\
  !*** ./src/devices/30_bmp280.js ***!
  \**********************************/
/*! exports provided: bmp280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bmp280", function() { return bmp280; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const i2c_address = [{
  value: 118,
  name: '0x76 (118) - (default)'
}, {
  value: 119,
  name: '0x77 (119) - (default)'
}];
const bmp280 = {
  defaults: () => ({
    ValueCount: 1,
    SendDataOption: 1,
    TimerOption: 1,
    TimerOptional: 1,
    GlobalSync: 1,
    'settings.values[0].name': 'Temperature',
    'settings.values[1].name': 'Pressure'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      i2c_address: {
        name: 'I2C Address',
        type: 'select',
        options: i2c_address,
        var: 'configs[0]'
      },
      altitude: {
        name: 'Altitude',
        type: 'number',
        var: 'configs[1]'
      }
    }
  },
  data: true,
  vals: 2
};

/***/ }),

/***/ "./src/devices/31_sht1x.js":
/*!*********************************!*\
  !*** ./src/devices/31_sht1x.js ***!
  \*********************************/
/*! exports provided: sht1x */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sht1x", function() { return sht1x; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const sht1x = {
  sensor: {
    name: 'Sensor',
    configs: {
      pullup: {
        name: 'Internal PullUp',
        type: 'checkbox',
        var: 'pin1pullup'
      },
      gpio1: {
        name: 'GPIO Data',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      gpio2: {
        name: 'GPIO SCK',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio2'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/32_ms5611.js":
/*!**********************************!*\
  !*** ./src/devices/32_ms5611.js ***!
  \**********************************/
/*! exports provided: ms5611 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms5611", function() { return ms5611; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const i2c_address = [{
  value: 118,
  name: '0x76 (118)'
}, {
  value: 119,
  name: '0x77 (119) - (default)'
}];
const ms5611 = {
  sensor: {
    name: 'Sensor',
    configs: {
      i2c_address: {
        name: 'I2C Address',
        type: 'select',
        options: i2c_address,
        var: 'configs[0]'
      },
      altitude: {
        name: 'Altitude',
        type: 'number',
        var: 'configs[1]'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/33_dummy_device.js":
/*!****************************************!*\
  !*** ./src/devices/33_dummy_device.js ***!
  \****************************************/
/*! exports provided: dummyDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyDevice", function() { return dummyDevice; });
const sensorModel = [{
  value: 1,
  name: 'SENSOR_TYPE_SINGLE'
}, {
  value: 2,
  name: 'SENSOR_TYPE_TEMP_HUM'
}, {
  value: 3,
  name: 'SENSOR_TYPE_TEMP_BARO'
}, {
  value: 4,
  name: 'SENSOR_TYPE_TEMP_HUM_BARO'
}, {
  value: 5,
  name: 'SENSOR_TYPE_DUAL'
}, {
  value: 5,
  name: 'SENSOR_TYPE_TRIPLE'
}, {
  value: 7,
  name: 'SENSOR_TYPE_QUAD'
}, {
  value: 10,
  name: 'SENSOR_TYPE_SWITCH'
}, {
  value: 11,
  name: 'SENSOR_TYPE_DIMMER'
}, {
  value: 20,
  name: 'SENSOR_TYPE_LONG'
}, {
  value: 21,
  name: 'SENSOR_TYPE_WIND'
}];
const dummyDevice = {
  defaults: () => ({
    interval: 0,
    'settings.values[0].name': 'Dummy1',
    'settings.values[1].name': 'Dummy1',
    'settings.values[2].name': 'Dummy3',
    'settings.values[3].name': 'Dummy4'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      switch_type: {
        name: 'Simulate Sensor Type',
        type: 'select',
        options: sensorModel,
        var: 'configs[0]'
      },
      interval: {
        name: 'Interval',
        type: 'number'
      }
    }
  },
  data: true,
  vals: 4
};

/***/ }),

/***/ "./src/devices/34_dht12.js":
/*!*********************************!*\
  !*** ./src/devices/34_dht12.js ***!
  \*********************************/
/*! exports provided: dht12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dht12", function() { return dht12; });
const sensorModel = [{
  value: 1,
  name: 'SENSOR_TYPE_SINGLE'
}, {
  value: 2,
  name: 'SENSOR_TYPE_TEMP_HUM'
}, {
  value: 3,
  name: 'SENSOR_TYPE_TEMP_BARO'
}, {
  value: 4,
  name: 'SENSOR_TYPE_TEMP_HUM_BARO'
}, {
  value: 5,
  name: 'SENSOR_TYPE_DUAL'
}, {
  value: 5,
  name: 'SENSOR_TYPE_TRIPLE'
}, {
  value: 7,
  name: 'SENSOR_TYPE_QUAD'
}, {
  value: 10,
  name: 'SENSOR_TYPE_SWITCH'
}, {
  value: 11,
  name: 'SENSOR_TYPE_DIMMER'
}, {
  value: 20,
  name: 'SENSOR_TYPE_LONG'
}, {
  value: 21,
  name: 'SENSOR_TYPE_WIND'
}];
const dht12 = {
  data: {
    name: 'Data Acquisition',
    configs: {
      interval: {
        name: 'Interval',
        type: 'number'
      }
    }
  },
  data: true,
  vals: 2
};

/***/ }),

/***/ "./src/devices/36_sh1106.js":
/*!**********************************!*\
  !*** ./src/devices/36_sh1106.js ***!
  \**********************************/
/*! exports provided: sh1106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sh1106", function() { return sh1106; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const i2c_address = [{
  value: 35,
  name: '0x23 (35) - default'
}, {
  value: 92,
  name: '0x5c (92)'
}];
const displaySize = [{
  value: 1,
  name: 'RESOLUTION_LOW'
}, {
  value: 2,
  name: 'RESOLUTION_NORMAL'
}, {
  value: 3,
  name: 'RESOLUTION_HIGH'
}, {
  value: 99,
  name: 'RESOLUTION_AUTO_HIGH'
}];
const sh1106 = {
  sensor: {
    name: 'Sensor',
    configs: {
      i2c_address: {
        name: 'I2C Address',
        type: 'select',
        options: i2c_address,
        var: 'configs[0]'
      },
      rotation: {
        name: 'Rotation',
        type: 'select',
        options: displaySize,
        var: 'configs[1]'
      },
      size: {
        name: 'Display Size',
        type: 'select',
        options: displaySize,
        var: 'configs[1]'
      },
      font: {
        name: 'Font Width',
        type: 'select',
        options: displaySize,
        var: 'configs[1]'
      },
      line1: {
        name: 'Line 1',
        type: 'text',
        var: 'configs[2]'
      },
      line2: {
        name: 'Line 2',
        type: 'text',
        var: 'configs[2]'
      },
      line3: {
        name: 'Line 3',
        type: 'text',
        var: 'configs[2]'
      },
      line4: {
        name: 'Line 4',
        type: 'text',
        var: 'configs[2]'
      },
      line5: {
        name: 'Line 4',
        type: 'text',
        var: 'configs[2]'
      },
      line6: {
        name: 'Line 4',
        type: 'text',
        var: 'configs[2]'
      },
      line7: {
        name: 'Line 4',
        type: 'text',
        var: 'configs[2]'
      },
      line8: {
        name: 'Line 4',
        type: 'text',
        var: 'configs[2]'
      },
      button: {
        name: 'Display Button',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      timeout: {
        name: 'Display Timeout',
        type: 'number',
        var: 'configs[2]'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/37_mqtt_import.js":
/*!***************************************!*\
  !*** ./src/devices/37_mqtt_import.js ***!
  \***************************************/
/*! exports provided: mqttImport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mqttImport", function() { return mqttImport; });
const mqttImport = {
  data: {
    name: 'Data Acquisition',
    configs: {
      switch_type: {
        name: 'MQTT Topic 1',
        type: 'text',
        var: 'configs[0]'
      },
      switch_type: {
        name: 'MQTT Topic 2',
        type: 'text',
        var: 'configs[0]'
      },
      switch_type: {
        name: 'MQTT Topic 3',
        type: 'text',
        var: 'configs[0]'
      },
      switch_type: {
        name: 'MQTT Topic 4',
        type: 'text',
        var: 'configs[0]'
      }
    }
  }
};

/***/ }),

/***/ "./src/devices/38_neopixel_basic.js":
/*!******************************************!*\
  !*** ./src/devices/38_neopixel_basic.js ***!
  \******************************************/
/*! exports provided: neopixelBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neopixelBasic", function() { return neopixelBasic; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const type = [{
  value: 1,
  name: 'GRB'
}, {
  value: 2,
  name: 'GRBW'
}];
const neopixelBasic = {
  sensor: {
    name: 'Sensor',
    configs: {
      leds: {
        name: 'LEd Count',
        type: 'number',
        var: 'configs[0]'
      },
      gpio: {
        name: 'GPIO',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      type: {
        name: 'Strip Type',
        type: 'select',
        options: type,
        var: 'configs[1]'
      }
    }
  }
};

/***/ }),

/***/ "./src/devices/39_thermocouple.js":
/*!****************************************!*\
  !*** ./src/devices/39_thermocouple.js ***!
  \****************************************/
/*! exports provided: thermocouple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thermocouple", function() { return thermocouple; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const type = [{
  value: 1,
  name: 'MAX 6675'
}, {
  value: 2,
  name: 'MAX 31855'
}];
const thermocouple = {
  sensor: {
    name: 'Sensor',
    configs: {
      gpio: {
        name: 'GPIO',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      type: {
        name: 'Adapter IC',
        type: 'select',
        options: type,
        var: 'configs[0]'
      }
    }
  }
};

/***/ }),

/***/ "./src/devices/3_generic_pulse.js":
/*!****************************************!*\
  !*** ./src/devices/3_generic_pulse.js ***!
  \****************************************/
/*! exports provided: genericPulse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genericPulse", function() { return genericPulse; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const modeTypes = [{
  value: 0,
  name: 'LOW'
}, {
  value: 1,
  name: 'CHANGE'
}, {
  value: 2,
  name: 'RISING'
}, {
  value: 3,
  name: 'FALLING'
}];
const counterTypes = [{
  value: 0,
  name: 'Delta'
}, {
  value: 1,
  name: 'Delta/Total/Time'
}, {
  value: 2,
  name: 'Total'
}, {
  value: 3,
  name: 'Delta/Total'
}];
const genericPulse = {
  sensor: {
    defaults: () => ({
      gpio1: 255,
      'settings.values[0].name': 'Count',
      'settings.values[1].name': 'Total',
      'settings.values[2].name': 'Time'
    }),
    name: 'Sensor',
    configs: {
      gpio: {
        name: 'GPIO',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      debounce: {
        name: 'De-bounce (ms)',
        type: 'number',
        var: 'configs[0]'
      },
      counter_type: {
        name: 'Counter Type',
        type: 'select',
        options: counterTypes,
        var: 'configs[1]'
      },
      mode_type: {
        name: 'Switch Button Type',
        type: 'select',
        options: modeTypes,
        var: 'configs[2]'
      }
    }
  },
  data: true,
  vals: 3
};

/***/ }),

/***/ "./src/devices/41_neopixel_clock.js":
/*!******************************************!*\
  !*** ./src/devices/41_neopixel_clock.js ***!
  \******************************************/
/*! exports provided: neopixelClock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neopixelClock", function() { return neopixelClock; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const neopixelClock = {
  sensor: {
    name: 'Actuator',
    configs: {
      gpio: {
        name: 'GPIO',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      R: {
        name: 'Red',
        type: 'number',
        min: 0,
        max: 255,
        var: 'configs[0]'
      },
      G: {
        name: 'Green',
        type: 'number',
        min: 0,
        max: 255,
        var: 'configs[1]'
      },
      B: {
        name: 'Blue',
        type: 'number',
        min: 0,
        max: 255,
        var: 'configs[2]'
      }
    }
  }
};

/***/ }),

/***/ "./src/devices/42_neopixel_candle.js":
/*!*******************************************!*\
  !*** ./src/devices/42_neopixel_candle.js ***!
  \*******************************************/
/*! exports provided: neopixelCandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neopixelCandle", function() { return neopixelCandle; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const neopixelCandle = {
  sensor: {
    name: 'Sensor',
    configs: {
      gpio: {
        name: 'GPIO',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      }
    }
  }
};

/***/ }),

/***/ "./src/devices/43_output_clock.js":
/*!****************************************!*\
  !*** ./src/devices/43_output_clock.js ***!
  \****************************************/
/*! exports provided: clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clock", function() { return clock; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const type = [{
  value: 0,
  name: ''
}, {
  value: 1,
  name: 'Off'
}, {
  value: 2,
  name: 'On'
}];
const clock = {
  sensor: {
    name: 'Sensor',
    configs: {
      gpio: {
        name: 'GPIO - Clock Event',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      event1: [{
        name: 'Day, Time 1',
        type: 'string',
        var: 'configs[0]'
      }, {
        name: '',
        type: 'select',
        options: type,
        var: 'configs[1]'
      }],
      event2: [{
        name: 'Day, Time 1',
        type: 'string',
        var: 'configs[0]'
      }, {
        name: '',
        type: 'select',
        options: type,
        var: 'configs[1]'
      }],
      event3: [{
        name: 'Day, Time 1',
        type: 'string',
        var: 'configs[0]'
      }, {
        name: '',
        type: 'select',
        options: type,
        var: 'configs[1]'
      }],
      event4: [{
        name: 'Day, Time 1',
        type: 'string',
        var: 'configs[0]'
      }, {
        name: '',
        type: 'select',
        options: type,
        var: 'configs[1]'
      }],
      event5: [{
        name: 'Day, Time 1',
        type: 'string',
        var: 'configs[0]'
      }, {
        name: '',
        type: 'select',
        options: type,
        var: 'configs[1]'
      }],
      event6: [{
        name: 'Day, Time 1',
        type: 'string',
        var: 'configs[0]'
      }, {
        name: '',
        type: 'select',
        options: type,
        var: 'configs[1]'
      }],
      event7: [{
        name: 'Day, Time 1',
        type: 'string',
        var: 'configs[0]'
      }, {
        name: '',
        type: 'select',
        options: type,
        var: 'configs[1]'
      }],
      event8: [{
        name: 'Day, Time 1',
        type: 'string',
        var: 'configs[0]'
      }, {
        name: '',
        type: 'select',
        options: type,
        var: 'configs[1]'
      }]
    }
  }
};

/***/ }),

/***/ "./src/devices/44_wifi_gateway.js":
/*!****************************************!*\
  !*** ./src/devices/44_wifi_gateway.js ***!
  \****************************************/
/*! exports provided: wifiGateway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wifiGateway", function() { return wifiGateway; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const parity = [{
  value: 0,
  name: 'No Parity'
}, {
  value: 1,
  name: 'Even'
}, {
  value: 2,
  name: 'Odd'
}];
const wifiGateway = {
  sensor: {
    name: 'Settings',
    configs: {
      port: {
        name: 'TCP Port',
        type: 'number',
        var: 'configs_float[0]'
      },
      baudrate: {
        name: 'Baudrate',
        type: 'number',
        var: 'configs_float[0]'
      },
      data_bits: {
        name: 'Data Bits',
        type: 'number',
        var: 'configs_float[0]'
      },
      parity: {
        name: 'Parity',
        type: 'select',
        options: parity,
        var: 'configs[0]'
      },
      stop_bits: {
        name: 'Stop Bits',
        type: 'number',
        var: 'configs_float[0]'
      },
      reset_after_boot: {
        name: 'Reset target after boot',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'configs[1]'
      },
      timeout: {
        name: 'RX Receive Timeout',
        type: 'number',
        var: 'configs_float[0]'
      }
    }
  }
};

/***/ }),

/***/ "./src/devices/49_mhz19.js":
/*!*********************************!*\
  !*** ./src/devices/49_mhz19.js ***!
  \*********************************/
/*! exports provided: mhz19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mhz19", function() { return mhz19; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const mhz19 = {
  sensor: {
    name: 'Data Acquisition',
    configs: {
      gpio1: {
        name: 'GPIO - TX',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      gpio2: {
        name: 'GPIO - RX',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio2'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/4_ds18b20.js":
/*!**********************************!*\
  !*** ./src/devices/4_ds18b20.js ***!
  \**********************************/
/*! exports provided: ds18b20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ds18b20", function() { return ds18b20; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const ds18b20 = {
  defaults: () => ({
    gpio1: 255,
    'settings.values[0].name': 'Temperature'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      gpio: {
        name: 'GPIO',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/52_senseair.js":
/*!************************************!*\
  !*** ./src/devices/52_senseair.js ***!
  \************************************/
/*! exports provided: senseAir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "senseAir", function() { return senseAir; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const senseAir = {
  sensor: {
    name: 'Data Acquisition',
    configs: {
      gpio1: {
        name: 'GPIO - TX',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      gpio2: {
        name: 'GPIO - RX',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio2'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/56_sds011.js":
/*!**********************************!*\
  !*** ./src/devices/56_sds011.js ***!
  \**********************************/
/*! exports provided: sds011 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sds011", function() { return sds011; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const sds011 = {
  sensor: {
    name: 'Data Acquisition',
    configs: {
      gpio1: {
        name: 'GPIO - TX',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      gpio2: {
        name: 'GPIO - RX',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio2'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/59_rotary_encoder.js":
/*!******************************************!*\
  !*** ./src/devices/59_rotary_encoder.js ***!
  \******************************************/
/*! exports provided: rotaryEncoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotaryEncoder", function() { return rotaryEncoder; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const rotaryEncoder = {
  defaults: () => ({
    ValueCount: 1,
    SendDataOption: 1,
    TimerOption: 1,
    TimerOptional: 1,
    GlobalSync: 1
  }),
  sensor: {
    name: 'Data Acquisition',
    configs: {
      gpio1: {
        name: 'GPIO A - CLK',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      gpio2: {
        name: 'GPIO B - DT',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio2'
      },
      gpio3: {
        name: 'GPIO I - Z',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio3'
      },
      limit_min: {
        name: 'Limit - Min',
        type: 'number',
        var: 'configs_long[0]'
      },
      limit_max: {
        name: 'Limit - Max',
        type: 'number',
        var: 'configs_long[1]'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/5_dht.js":
/*!******************************!*\
  !*** ./src/devices/5_dht.js ***!
  \******************************/
/*! exports provided: dht */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dht", function() { return dht; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const sensorModel = [{
  value: 11,
  name: 'DHT11'
}, {
  value: 22,
  name: 'DHT22'
}, {
  value: 12,
  name: 'DHT12'
}, {
  value: 23,
  name: 'Sonoff am2301'
}, {
  value: 70,
  name: 'Sonoff si7021'
}];
const dht = {
  defaults: () => ({
    gpio1: 255,
    interval: 60,
    'configs[0]': 11,
    'settings.values[0].name': 'Temperature',
    'settings.values[1].name': 'Humidity'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      gpio: {
        name: 'GPIO Data',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      switch_type: {
        name: 'Sensor model',
        type: 'select',
        options: sensorModel,
        var: 'configs[0]'
      }
    }
  },
  data: true,
  vals: 2
};

/***/ }),

/***/ "./src/devices/63_ttp229.js":
/*!**********************************!*\
  !*** ./src/devices/63_ttp229.js ***!
  \**********************************/
/*! exports provided: ttp229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttp229", function() { return ttp229; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const ttp229 = {
  defaults: () => ({
    'gpio1': 1
  }),
  sensor: {
    defaults: () => ({
      ValueCount: 1,
      SendDataOption: 1,
      TimerOption: 1,
      TimerOptional: 1,
      GlobalSync: 1
    }),
    name: 'Sensor',
    configs: {
      gpio1: {
        name: 'GPIO A - CLK',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      gpio2: {
        name: 'GPIO B - DT',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio2'
      },
      scancode: {
        name: 'ScanCode',
        type: 'checkbox',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'configs[1]'
      }
    }
  },
  data: true,
  vals: 1
};

/***/ }),

/***/ "./src/devices/6_bmp085.js":
/*!*********************************!*\
  !*** ./src/devices/6_bmp085.js ***!
  \*********************************/
/*! exports provided: bmp085 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bmp085", function() { return bmp085; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const eventTypes = [{
  value: 0,
  name: 'Disabled'
}, {
  value: 1,
  name: 'Active on LOW'
}, {
  value: 2,
  name: 'Active on HIGH'
}, {
  value: 3,
  name: 'Active on LOW and HIGH'
}];
const bmp085 = {
  defaults: () => ({
    'settings.values[0].name': 'Temperature',
    'settings.values[1].name': 'Pressure'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      altitude: {
        name: 'Altitude',
        type: 'number',
        var: 'configs[1]'
      }
    }
  },
  data: true,
  vals: 2
};

/***/ }),

/***/ "./src/devices/7_pcf8591.js":
/*!**********************************!*\
  !*** ./src/devices/7_pcf8591.js ***!
  \**********************************/
/*! exports provided: pcf8591 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pcf8591", function() { return pcf8591; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const pcf8591 = {
  defaults: () => ({
    'settings.values[0].name': 'Analog'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      port: {
        name: 'PORT',
        type: 'number',
        var: 'gpio4'
      }
    }
  },
  data: true,
  vars: 1
};

/***/ }),

/***/ "./src/devices/8_rfid.js":
/*!*******************************!*\
  !*** ./src/devices/8_rfid.js ***!
  \*******************************/
/*! exports provided: rfidWeigand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rfidWeigand", function() { return rfidWeigand; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const weigandType = [{
  value: 26,
  name: '26 Bits'
}, {
  value: 34,
  name: '34 Bits'
}];
const rfidWeigand = {
  defaults: () => ({
    gpio1: 255,
    gpio2: 255,
    'settings.values[0].name': 'Tag'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      gpio1: {
        name: 'GPIO D0 (green, 5V)',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio1'
      },
      gpio2: {
        name: 'GPIO D1 (white, 5V)',
        type: 'select',
        options: _defs__WEBPACK_IMPORTED_MODULE_0__["pins"],
        var: 'gpio2'
      },
      type: {
        name: 'Weigand Type',
        type: 'select',
        options: weigandType,
        var: 'configs[0]'
      }
    }
  },
  data: true,
  vars: 1
};

/***/ }),

/***/ "./src/devices/9_io_mcp.js":
/*!*********************************!*\
  !*** ./src/devices/9_io_mcp.js ***!
  \*********************************/
/*! exports provided: inputMcp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputMcp", function() { return inputMcp; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defs */ "./src/devices/_defs.js");

const eventTypes = [{
  value: 0,
  name: 'Disabled'
}, {
  value: 1,
  name: 'Active on LOW'
}, {
  value: 2,
  name: 'Active on HIGH'
}, {
  value: 3,
  name: 'Active on LOW and HIGH'
}];
const inputMcp = {
  defaults: () => ({
    gpio4: 0,
    'settings.values[0].name': 'Switch'
  }),
  sensor: {
    name: 'Sensor',
    configs: {
      port: {
        name: 'PORT',
        type: 'number',
        var: 'gpio4'
      },
      inversed: {
        name: 'Inversed logic',
        type: 'checkbox',
        var: 'pin1inversed'
      },
      send_boot_state: {
        name: 'Send Boot State',
        type: 'checkbox',
        var: 'configs[3]'
      }
    }
  },
  advanced: {
    name: 'Advanced event management',
    configs: {
      debounce: {
        name: 'De-bounce (ms)',
        type: 'number',
        var: 'configs_float[0]'
      },
      dblclick: {
        name: 'Doublclick Event',
        type: 'select',
        options: eventTypes,
        var: 'configs[4]'
      },
      dblclick_interval: {
        name: 'Doubleclick Max interval (ms)',
        type: 'number',
        var: 'configs_float[1]'
      },
      longpress: {
        name: 'Longpress event',
        type: 'select',
        options: eventTypes,
        var: 'configs[5]'
      },
      longpress_interval: {
        name: 'Longpress min interval (ms)',
        type: 'number',
        var: 'configs_float[2]'
      },
      safe_button: {
        name: 'Use safe button',
        type: 'checkbox',
        var: 'configs_float[3]'
      }
    }
  },
  data: true,
  vars: 1
};

/***/ }),

/***/ "./src/devices/_defs.js":
/*!******************************!*\
  !*** ./src/devices/_defs.js ***!
  \******************************/
/*! exports provided: pins, getTasks, getTaskValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasks", function() { return getTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskValues", function() { return getTaskValues; });
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/settings */ "./src/lib/settings.js");
/* harmony import */ var _pages_config_hardware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/config.hardware */ "./src/pages/config.hardware.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pins", function() { return _pages_config_hardware__WEBPACK_IMPORTED_MODULE_1__["pins"]; });



const getTasks = () => {
  return _lib_settings__WEBPACK_IMPORTED_MODULE_0__["settings"].get('tasks').filter(task => task.enabled).map(task => ({
    value: task.settings.index,
    name: task.settings.name
  }));
};
const getTaskValues = () => {
  return [1, 2, 3, 4];
};

/***/ }),

/***/ "./src/devices/index.js":
/*!******************************!*\
  !*** ./src/devices/index.js ***!
  \******************************/
/*! exports provided: devices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devices", function() { return devices; });
/* harmony import */ var _1_input_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1_input_switch */ "./src/devices/1_input_switch.js");
/* harmony import */ var _2_analog_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2_analog_input */ "./src/devices/2_analog_input.js");
/* harmony import */ var _3_generic_pulse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3_generic_pulse */ "./src/devices/3_generic_pulse.js");
/* harmony import */ var _4_ds18b20__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./4_ds18b20 */ "./src/devices/4_ds18b20.js");
/* harmony import */ var _5_dht__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./5_dht */ "./src/devices/5_dht.js");
/* harmony import */ var _6_bmp085__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./6_bmp085 */ "./src/devices/6_bmp085.js");
/* harmony import */ var _7_pcf8591__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./7_pcf8591 */ "./src/devices/7_pcf8591.js");
/* harmony import */ var _8_rfid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./8_rfid */ "./src/devices/8_rfid.js");
/* harmony import */ var _9_io_mcp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./9_io_mcp */ "./src/devices/9_io_mcp.js");
/* harmony import */ var _10_light_lux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./10_light_lux */ "./src/devices/10_light_lux.js");
/* harmony import */ var _11_pme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./11_pme */ "./src/devices/11_pme.js");
/* harmony import */ var _12_lcd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./12_lcd */ "./src/devices/12_lcd.js");
/* harmony import */ var _13_hcsr04__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./13_hcsr04 */ "./src/devices/13_hcsr04.js");
/* harmony import */ var _14_si7021__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./14_si7021 */ "./src/devices/14_si7021.js");
/* harmony import */ var _15_tls2561__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./15_tls2561 */ "./src/devices/15_tls2561.js");
/* harmony import */ var _17_pn532__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./17_pn532 */ "./src/devices/17_pn532.js");
/* harmony import */ var _18_dust__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./18_dust */ "./src/devices/18_dust.js");
/* harmony import */ var _19_pcf8574__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./19_pcf8574 */ "./src/devices/19_pcf8574.js");
/* harmony import */ var _20_ser2net__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./20_ser2net */ "./src/devices/20_ser2net.js");
/* harmony import */ var _21_level_control__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./21_level_control */ "./src/devices/21_level_control.js");
/* harmony import */ var _22_pca9685__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./22_pca9685 */ "./src/devices/22_pca9685.js");
/* harmony import */ var _23_oled1306__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./23_oled1306 */ "./src/devices/23_oled1306.js");
/* harmony import */ var _24_mlx90614__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./24_mlx90614 */ "./src/devices/24_mlx90614.js");
/* harmony import */ var _25_ads1115__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./25_ads1115 */ "./src/devices/25_ads1115.js");
/* harmony import */ var _26_system_info__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./26_system_info */ "./src/devices/26_system_info.js");
/* harmony import */ var _27_ina219__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./27_ina219 */ "./src/devices/27_ina219.js");
/* harmony import */ var _28_bmx280__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./28_bmx280 */ "./src/devices/28_bmx280.js");
/* harmony import */ var _29_mqtt_domoticz__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./29_mqtt_domoticz */ "./src/devices/29_mqtt_domoticz.js");
/* harmony import */ var _30_bmp280__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./30_bmp280 */ "./src/devices/30_bmp280.js");
/* harmony import */ var _31_sht1x__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./31_sht1x */ "./src/devices/31_sht1x.js");
/* harmony import */ var _32_ms5611__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./32_ms5611 */ "./src/devices/32_ms5611.js");
/* harmony import */ var _33_dummy_device__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./33_dummy_device */ "./src/devices/33_dummy_device.js");
/* harmony import */ var _34_dht12__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./34_dht12 */ "./src/devices/34_dht12.js");
/* harmony import */ var _36_sh1106__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./36_sh1106 */ "./src/devices/36_sh1106.js");
/* harmony import */ var _37_mqtt_import__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./37_mqtt_import */ "./src/devices/37_mqtt_import.js");
/* harmony import */ var _38_neopixel_basic__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./38_neopixel_basic */ "./src/devices/38_neopixel_basic.js");
/* harmony import */ var _39_thermocouple__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./39_thermocouple */ "./src/devices/39_thermocouple.js");
/* harmony import */ var _41_neopixel_clock__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./41_neopixel_clock */ "./src/devices/41_neopixel_clock.js");
/* harmony import */ var _42_neopixel_candle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./42_neopixel_candle */ "./src/devices/42_neopixel_candle.js");
/* harmony import */ var _43_output_clock__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./43_output_clock */ "./src/devices/43_output_clock.js");
/* harmony import */ var _44_wifi_gateway__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./44_wifi_gateway */ "./src/devices/44_wifi_gateway.js");
/* harmony import */ var _49_mhz19__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./49_mhz19 */ "./src/devices/49_mhz19.js");
/* harmony import */ var _52_senseair__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./52_senseair */ "./src/devices/52_senseair.js");
/* harmony import */ var _56_sds011__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./56_sds011 */ "./src/devices/56_sds011.js");
/* harmony import */ var _59_rotary_encoder__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./59_rotary_encoder */ "./src/devices/59_rotary_encoder.js");
/* harmony import */ var _63_ttp229__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./63_ttp229 */ "./src/devices/63_ttp229.js");














































const devices = [{
  name: '- None -',
  value: 0,
  fields: []
}, {
  name: 'Switch input - Switch',
  value: 1,
  fields: _1_input_switch__WEBPACK_IMPORTED_MODULE_0__["inputSwitch"]
}, {
  name: 'Analog input - internal',
  value: 2,
  fields: _2_analog_input__WEBPACK_IMPORTED_MODULE_1__["analogInput"]
}, {
  name: 'Generic - Pulse counter',
  value: 3,
  fields: _3_generic_pulse__WEBPACK_IMPORTED_MODULE_2__["genericPulse"]
}, {
  name: 'Environment - DS18b20',
  value: 4,
  fields: _4_ds18b20__WEBPACK_IMPORTED_MODULE_3__["ds18b20"]
}, {
  name: 'Environment - DHT11/12/22  SONOFF2301/7021',
  value: 5,
  fields: _5_dht__WEBPACK_IMPORTED_MODULE_4__["dht"]
}, {
  name: 'Environment - BMP085/180',
  value: 6,
  fields: _6_bmp085__WEBPACK_IMPORTED_MODULE_5__["bmp085"]
}, {
  name: 'Analog input - PCF8591',
  value: 7,
  fields: _7_pcf8591__WEBPACK_IMPORTED_MODULE_6__["pcf8591"]
}, {
  name: 'RFID - Wiegand',
  value: 8,
  fields: _8_rfid__WEBPACK_IMPORTED_MODULE_7__["rfidWeigand"]
}, {
  name: 'Switch input - MCP23017',
  value: 9,
  fields: _9_io_mcp__WEBPACK_IMPORTED_MODULE_8__["inputMcp"]
}, {
  name: 'Light/Lux - BH1750',
  value: 10,
  fields: _10_light_lux__WEBPACK_IMPORTED_MODULE_9__["bh1750"]
}, {
  name: 'Extra IO - ProMini Extender',
  value: 11,
  fields: _11_pme__WEBPACK_IMPORTED_MODULE_10__["pme"]
}, {
  name: 'Display - LCD2004',
  value: 12,
  fields: _12_lcd__WEBPACK_IMPORTED_MODULE_11__["lcd2004"]
}, {
  name: 'Position - HC-SR04, RCW-0001, etc.',
  value: 13,
  fields: _13_hcsr04__WEBPACK_IMPORTED_MODULE_12__["hcsr04"]
}, {
  name: 'Environment - SI7021/HTU21D',
  value: 14,
  fields: _14_si7021__WEBPACK_IMPORTED_MODULE_13__["si7021"]
}, {
  name: 'Light/Lux - TSL2561',
  value: 15,
  fields: _15_tls2561__WEBPACK_IMPORTED_MODULE_14__["tls2561"]
}, //{ name: 'Communication - IR', value: 16, fields: bh1750 },
{
  name: 'RFID - PN532',
  value: 17,
  fields: _17_pn532__WEBPACK_IMPORTED_MODULE_15__["pn532"]
}, {
  name: 'Dust - Sharp GP2Y10',
  value: 18,
  fields: _18_dust__WEBPACK_IMPORTED_MODULE_16__["dust"]
}, {
  name: 'Switch input - PCF8574',
  value: 19,
  fields: _19_pcf8574__WEBPACK_IMPORTED_MODULE_17__["pcf8574"]
}, {
  name: 'Communication - Serial Server',
  value: 20,
  fields: _20_ser2net__WEBPACK_IMPORTED_MODULE_18__["ser2net"]
}, {
  name: 'Regulator - Level Control',
  value: 21,
  fields: _21_level_control__WEBPACK_IMPORTED_MODULE_19__["levelControl"]
}, {
  name: 'Extra IO - PCA9685',
  value: 22,
  fields: _22_pca9685__WEBPACK_IMPORTED_MODULE_20__["pca9685"]
}, {
  name: 'Display - OLED SSD1306',
  value: 23,
  fields: _23_oled1306__WEBPACK_IMPORTED_MODULE_21__["oled1306"]
}, {
  name: 'Environment - MLX90614',
  value: 24,
  fields: _24_mlx90614__WEBPACK_IMPORTED_MODULE_22__["mlx90614"]
}, {
  name: 'Analog input - ADS1115',
  value: 25,
  fields: _25_ads1115__WEBPACK_IMPORTED_MODULE_23__["ads1115"]
}, {
  name: 'Generic - System Info',
  value: 26,
  fields: _26_system_info__WEBPACK_IMPORTED_MODULE_24__["systemInfo"]
}, {
  name: 'Energy (DC) - INA219',
  value: 27,
  fields: _27_ina219__WEBPACK_IMPORTED_MODULE_25__["ina219"]
}, {
  name: 'Environment - BMx280',
  value: 28,
  fields: _28_bmx280__WEBPACK_IMPORTED_MODULE_26__["bmx280"]
}, {
  name: 'Output - Domoticz MQTT Helper',
  value: 29,
  fields: _29_mqtt_domoticz__WEBPACK_IMPORTED_MODULE_27__["mqttDomoticz"]
}, {
  name: 'Environment - BMP280',
  value: 30,
  fields: _30_bmp280__WEBPACK_IMPORTED_MODULE_28__["bmp280"]
}, {
  name: 'Environment - SHT1X',
  value: 31,
  fields: _31_sht1x__WEBPACK_IMPORTED_MODULE_29__["sht1x"]
}, {
  name: 'Environment - MS5611 (GY-63)',
  value: 32,
  fields: _32_ms5611__WEBPACK_IMPORTED_MODULE_30__["ms5611"]
}, {
  name: 'Generic - Dummy Device',
  value: 33,
  fields: _33_dummy_device__WEBPACK_IMPORTED_MODULE_31__["dummyDevice"]
}, {
  name: 'Environment - DHT12 (I2C)',
  value: 34,
  fields: _34_dht12__WEBPACK_IMPORTED_MODULE_32__["dht12"]
}, {
  name: 'Display - OLED SSD1306/SH1106 Framed',
  value: 36,
  fields: _36_sh1106__WEBPACK_IMPORTED_MODULE_33__["sh1106"]
}, {
  name: 'Generic - MQTT Import',
  value: 37,
  fields: _37_mqtt_import__WEBPACK_IMPORTED_MODULE_34__["mqttImport"]
}, {
  name: 'Output - NeoPixel (Basic)',
  value: 38,
  fields: _38_neopixel_basic__WEBPACK_IMPORTED_MODULE_35__["neopixelBasic"]
}, {
  name: 'Environment - Thermocouple',
  value: 39,
  fields: _39_thermocouple__WEBPACK_IMPORTED_MODULE_36__["thermocouple"]
}, {
  name: 'Output - NeoPixel (Word Clock)',
  value: 41,
  fields: _41_neopixel_clock__WEBPACK_IMPORTED_MODULE_37__["neopixelClock"]
}, {
  name: 'Output - NeoPixel (Candle)',
  value: 42,
  fields: _42_neopixel_candle__WEBPACK_IMPORTED_MODULE_38__["neopixelCandle"]
}, {
  name: 'Output - Clock',
  value: 43,
  fields: _43_output_clock__WEBPACK_IMPORTED_MODULE_39__["clock"]
}, {
  name: 'Communication - P1 Wifi Gateway',
  value: 44,
  fields: _44_wifi_gateway__WEBPACK_IMPORTED_MODULE_40__["wifiGateway"]
}, {
  name: 'Gases - CO2 MH-Z19',
  value: 49,
  fields: _49_mhz19__WEBPACK_IMPORTED_MODULE_41__["mhz19"]
}, {
  name: 'Gases - CO2 Senseair',
  value: 52,
  fields: _52_senseair__WEBPACK_IMPORTED_MODULE_42__["senseAir"]
}, {
  name: 'Dust - SDS011/018/198',
  value: 56,
  fields: _56_sds011__WEBPACK_IMPORTED_MODULE_43__["sds011"]
}, {
  name: 'Switch Input - Rotary Encoder',
  value: 59,
  fields: _59_rotary_encoder__WEBPACK_IMPORTED_MODULE_44__["rotaryEncoder"]
}, {
  name: 'Keypad - TTP229 Touc',
  value: 63,
  fields: _63_ttp229__WEBPACK_IMPORTED_MODULE_45__["ttp229"]
}].sort((a, b) => a.name.localeCompare(b.name));

/***/ }),

/***/ "./src/lib/espeasy.js":
/*!****************************!*\
  !*** ./src/lib/espeasy.js ***!
  \****************************/
/*! exports provided: getJsonStat, loadDevices, getConfigNodes, getVariables, getDashboardConfigNodes, fetchProgress, storeFile, deleteFile, storeDashboardConfig, loadDashboardConfig, storeRuleConfig, loadRuleConfig, storeRule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJsonStat", function() { return getJsonStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDevices", function() { return loadDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigNodes", function() { return getConfigNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVariables", function() { return getVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDashboardConfigNodes", function() { return getDashboardConfigNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProgress", function() { return fetchProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeFile", function() { return storeFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFile", function() { return deleteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeDashboardConfig", function() { return storeDashboardConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDashboardConfig", function() { return loadDashboardConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRuleConfig", function() { return storeRuleConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRuleConfig", function() { return loadRuleConfig; });
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
const fetchProgress = (url, opts = {}) => {
  return new Promise((res, rej) => {
    var xhr = new XMLHttpRequest();
    xhr.open(opts.method || 'get', url);

    for (var k in opts.headers || {}) xhr.setRequestHeader(k, opts.headers[k]);

    xhr.onload = e => res(e.target.responseText);

    xhr.onerror = rej;
    if (xhr.upload && opts.onProgress) xhr.upload.onprogress = opts.onProgress; // event.loaded / event.total * 100 ; //event.lengthComputable

    xhr.send(opts.body);
  });
};
const storeFile = async (filename, data, onProgress) => {
  _loader__WEBPACK_IMPORTED_MODULE_1__["loader"].show();
  const file = data ? new File([new Blob([data])], filename) : filename;
  const formData = new FormData();
  formData.append('edit', 1);
  formData.append('file', file);
  return await fetchProgress('/upload_json', {
    method: 'post',
    body: formData
  }, onProgress).then(() => {
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
const loadDashboardConfig = async nodes => {
  return await fetch('/d1.txt').then(response => response.json());
};
const storeRuleConfig = async config => {
  storeFile('r1.txt', config);
};
const loadRuleConfig = async () => {
  return await fetch('/r1.txt').then(response => response.json());
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
/* harmony default export */ __webpack_exports__["default"] = ({
  getJsonStat,
  loadDevices,
  getConfigNodes,
  getDashboardConfigNodes,
  getVariables,
  storeFile,
  deleteFile,
  storeDashboardConfig,
  loadDashboardConfig,
  storeRuleConfig,
  loadRuleConfig,
  storeRule
});

/***/ }),

/***/ "./src/lib/floweditor.js":
/*!*******************************!*\
  !*** ./src/lib/floweditor.js ***!
  \*******************************/
/*! exports provided: FlowEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowEditor", function() { return FlowEditor; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/lib/helpers.js");
 // todo:
// improve relability of moving elements around
// global config

const color = '#000000';

const saveChart = renderedNodes => {
  // find initial nodes (triggers);
  const triggers = renderedNodes.filter(node => node.inputs.length === 0); // for each initial node walk the tree and produce one 'rule'

  const result = triggers.map(trigger => {
    const walkRule = rule => {
      return {
        t: rule.type,
        v: rule.config.map(config => config.value),
        o: rule.outputs.map(out => out.lines.map(line => walkRule(line.input.nodeObject))),
        c: [rule.position.x, rule.position.y]
      };
    };

    return walkRule(trigger);
  });
  return result;
};

const loadChart = (config, chart, from) => {
  config.map(config => {
    let node = chart.renderedNodes.find(n => n.position.x === config.c[0] && n.position.y === config.c[1]);

    if (!node) {
      const configNode = chart.nodes.find(n => config.t == n.type);
      node = new NodeUI(chart.canvas, configNode, {
        x: config.c[0],
        y: config.c[1]
      });
      node.config.map((cfg, i) => {
        cfg.value = config.v[i];
      });
      node.render();
      chart.renderedNodes.push(node);
    }

    if (from) {
      const fromDimension = from.getBoundingClientRect();
      const toDimension = node.inputs[0].getBoundingClientRect();
      const lineSvg = new svgArrow(document.body.clientWidth, document.body.clientHeight, 'none', color);
      chart.canvas.appendChild(lineSvg.element);
      const x1 = fromDimension.x + fromDimension.width;
      const y1 = fromDimension.y + fromDimension.height / 2;
      const x2 = toDimension.x;
      const y2 = toDimension.y + toDimension.height / 2;
      lineSvg.setPath(x1, y1, x2, y2);
      const connection = {
        output: from,
        input: node.inputs[0],
        svg: lineSvg,
        start: {
          x: x1,
          y: y1
        },
        end: {
          x: x2,
          y: y2
        }
      };
      node.inputs[0].lines.push(connection);
      from.lines.push(connection);
    }

    config.o.map((output, outputI) => {
      loadChart(output, chart, node.outputs[outputI]);
    });
  });
};

const exportChart = renderedNodes => {
  // find initial nodes (triggers);
  const triggers = renderedNodes.filter(node => node.group === 'TRIGGERS');
  let result = ''; // for each initial node walk the tree and produce one 'rule'

  triggers.map(trigger => {
    const walkRule = (r, i) => {
      const rules = r.toDsl ? r.toDsl() : [];
      let ruleset = '';
      let padding = r.indent ? '  ' : '';
      r.outputs.map((out, outI) => {
        let rule = rules[outI] || r.type;
        let subrule = '';

        if (out.lines) {
          out.lines.map(line => {
            subrule += walkRule(line.input.nodeObject, r.indent ? i + 1 : i);
          });
          subrule = subrule.split('\n').map(line => padding + line).filter(line => line.trim() !== '').join('\n') + '\n';
        }

        if (rule.includes('%%output%%')) {
          rule = rule.replace('%%output%%', subrule);
        } else {
          rule += subrule;
        }

        ruleset += rule;
      });
      return ruleset;
    };

    const rule = walkRule(trigger, 0);
    result += rule + "\n\n";
  });
  return result;
}; // drag and drop helpers


const dNd = {
  enableNativeDrag: (nodeElement, data) => {
    nodeElement.draggable = true;

    nodeElement.ondragstart = ev => {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getKeys"])(data).map(key => {
        ev.dataTransfer.setData(key, data[key]);
      });
    };
  },
  enableNativeDrop: (nodeElement, fn) => {
    nodeElement.ondragover = ev => {
      ev.preventDefault();
    };

    nodeElement.ondrop = fn;
  } // svg helpers

};

class svgArrow {
  constructor(width, height, fill, color) {
    this.element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.element.setAttribute('style', 'z-index: -1;position:absolute;top:0px;left:0px');
    this.element.setAttribute('width', width);
    this.element.setAttribute('height', height);
    this.element.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    this.line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.line.setAttributeNS(null, "fill", fill);
    this.line.setAttributeNS(null, "stroke", color);
    this.element.appendChild(this.line);
  }

  setPath(x1, y1, x2, y2, tension = 0.5) {
    const delta = (x2 - x1) * tension;
    const hx1 = x1 + delta;
    const hy1 = y1;
    const hx2 = x2 - delta;
    const hy2 = y2;
    const path = `M ${x1} ${y1} C ${hx1} ${hy1} ${hx2} ${hy2} ${x2} ${y2}`;
    this.line.setAttributeNS(null, "d", path);
  }

} // node configuration (each node in the left menu is represented by an instance of this object)


class Node {
  constructor(conf) {
    this.type = conf.type;
    this.group = conf.group;
    this.config = conf.config.map(config => Object.assign({}, config));
    this.inputs = conf.inputs.map(input => {});
    this.outputs = conf.outputs.map(output => {});
    this.toDsl = conf.toDsl;
    this.toString = conf.toString;
    this.toHtml = conf.toHtml;
    this.indent = conf.indent;
  }

} // node UI (each node in your flow diagram is represented by an instance of this object)


class NodeUI extends Node {
  constructor(canvas, conf, position) {
    super(conf);
    this.canvas = canvas;
    this.position = position;
    this.lines = [];
    this.linesEnd = [];
    this.toDsl = conf.toDsl;
    this.toString = conf.toString;
    this.toHtml = conf.toHtml;
    this.indent = conf.indent;
  }

  updateInputsOutputs(inputs, outputs) {
    inputs.map(input => {
      const rect = input.getBoundingClientRect();
      input.lines.map(line => {
        line.end.x = rect.x;
        line.end.y = rect.y + rect.height / 2;
        line.svg.setPath(line.start.x, line.start.y, line.end.x, line.end.y);
      });
    });
    outputs.map(output => {
      const rect = output.getBoundingClientRect();
      output.lines.map(line => {
        line.start.x = rect.x + rect.width;
        line.start.y = rect.y + rect.height / 2;
        line.svg.setPath(line.start.x, line.start.y, line.end.x, line.end.y);
      });
    });
  }

  handleMoveEvent(ev) {
    if (!this.canvas.canEdit) return;
    const shiftX = ev.clientX - this.element.getBoundingClientRect().left;
    const shiftY = ev.clientY - this.element.getBoundingClientRect().top;

    const onMouseMove = ev => {
      const newy = ev.y - shiftY;
      const newx = ev.x - shiftX;
      this.position.y = newy - newy % this.canvas.gridSize;
      this.position.x = newx - newx % this.canvas.gridSize;
      this.element.style.top = `${this.position.y}px`;
      this.element.style.left = `${this.position.x}px`;
      this.updateInputsOutputs(this.inputs, this.outputs);
    };

    const onMouseUp = ev => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  handleDblClickEvent(ev) {
    if (!this.canvas.canEdit) return;
    if (this.config.length) showConfigBox(this.type, this.config, () => {
      if (this.toHtml) {
        this.text.innerHTML = this.toHtml();
      } else {
        this.text.textContent = this.toString();
      }
    });
  }

  handleRightClickEvent(ev) {
    if (!this.canvas.canEdit) return;
    this.inputs.map(input => {
      input.lines.map(line => {
        line.output.lines = [];
        line.svg.element.parentNode.removeChild(line.svg.element);
      });
      input.lines = [];
    });
    this.outputs.map(output => {
      output.lines.map(line => {
        const index = line.input.lines.indexOf(line);
        line.input.lines.splice(index, 1);
        line.svg.element.parentNode.removeChild(line.svg.element);
      });
      output.lines = [];
    });
    this.element.parentNode.removeChild(this.element);
    if (this.destroy) this.destroy();
    ev.preventDefault();
    ev.stopPropagation();
    return false;
  }

  render() {
    this.element = document.createElement('div');
    this.element.nodeObject = this;
    this.element.className = `node node-chart group-${this.group}`;
    this.text = document.createElement('span');

    if (this.toHtml) {
      this.text.innerHTML = this.toHtml();
    } else {
      this.text.textContent = this.toString();
    }

    this.element.appendChild(this.text);
    this.element.style.top = `${this.position.y}px`;
    this.element.style.left = `${this.position.x}px`;
    const inputs = document.createElement('div');
    inputs.className = 'node-inputs';
    this.element.appendChild(inputs);
    this.inputs.map((val, index) => {
      const input = this.inputs[index] = document.createElement('div');
      input.className = 'node-input';
      input.nodeObject = this;
      input.lines = [];

      input.onmousedown = ev => {
        ev.preventDefault();
        ev.stopPropagation();
      };

      inputs.appendChild(input);
    });
    const outputs = document.createElement('div');
    outputs.className = 'node-outputs';
    this.element.appendChild(outputs);
    this.outputs.map((val, index) => {
      const output = this.outputs[index] = document.createElement('div');
      output.className = 'node-output';
      output.nodeObject = this;
      output.lines = [];

      output.oncontextmenu = ev => {
        output.lines.map(line => {
          line.svg.element.parentNode.removeChild(line.svg.element);
        });
        output.lines = [];
        ev.stopPropagation();
        ev.preventDefault();
        return false;
      };

      output.onmousedown = ev => {
        ev.stopPropagation();
        if (output.lines.length) return;
        const rects = output.getBoundingClientRect();
        const x1 = rects.x + rects.width;
        const y1 = rects.y + rects.height / 2;
        const lineSvg = new svgArrow(document.body.clientWidth, document.body.clientHeight, 'none', color);
        this.canvas.appendChild(lineSvg.element);

        const onMouseMove = ev => {
          lineSvg.setPath(x1, y1, ev.pageX, ev.pageY);
        };

        const onMouseUp = ev => {
          const elemBelow = document.elementFromPoint(ev.clientX, ev.clientY);
          const input = elemBelow ? elemBelow.closest('.node-input') : null;

          if (!input) {
            lineSvg.element.remove();
          } else {
            const inputRect = input.getBoundingClientRect();
            const x2 = inputRect.x;
            const y2 = inputRect.y + inputRect.height / 2;
            lineSvg.setPath(x1, y1, x2, y2);
            const connection = {
              output,
              input,
              svg: lineSvg,
              start: {
                x: x1,
                y: y1
              },
              end: {
                x: x2,
                y: y2
              }
            };
            output.lines.push(connection);
            input.lines.push(connection);
          }

          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      };

      outputs.appendChild(output);
    });
    this.element.ondblclick = this.handleDblClickEvent.bind(this);
    this.element.onmousedown = this.handleMoveEvent.bind(this);
    this.element.oncontextmenu = this.handleRightClickEvent.bind(this);
    this.canvas.appendChild(this.element);
  }

}

const getCfgUI = cfg => {
  const template = document.createElement('template');

  const getSelectOptions = val => {
    const selected = val == cfg.value ? 'selected' : '';
    return `<option ${selected}>${val}</option>`;
  };

  switch (cfg.type) {
    case 'text':
      template.innerHTML = `<div class="pure-control-group"><label>${cfg.name}</label><input type='text' name='${cfg.name}' value='${cfg.value}' /></div>`;
      break;

    case 'number':
      template.innerHTML = `<div class="pure-control-group"><label>${cfg.name}</label><input type='number' name='${cfg.name}' value='${cfg.value}' /></div>`;
      break;

    case 'select':
      template.innerHTML = `<div class="pure-control-group"><label>${cfg.name}</label><select name='${cfg.name}'>${cfg.values.map(val => getSelectOptions(val))}</select></div>`;
      break;

    case 'textselect':
      template.innerHTML = `<div class="pure-control-group"><label>${cfg.name}</label><div style="position:relative;display:inline-block;height:30px;">
            <select style="position:absolute;"
                    onchange="document.getElementById('displayValue').value=this.options[this.selectedIndex].text; document.getElementById('idValue').value=this.options[this.selectedIndex].value;">
                    ${cfg.values.map(val => getSelectOptions(val))}
            </select>
            <input type="text" name="${cfg.name}" id="displayValue" 
                   placeholder="add/select a value" onfocus="this.select()"
                   style="position:absolute;top:0px;left:0px;z-index:100;width: 190px;"  >
            <input name="idValue" id="idValue" type="hidden">
          </div></div>`;
  }

  return template.content.cloneNode(true);
};

const showConfigBox = (type, config, onclose) => {
  const template = document.createElement('template');
  template.innerHTML = `
        <div class='configbox'>
            <form class="pure-form pure-form-aligned" name=configform onsubmit="return false;">
                <fieldset>
                    <label>${type}</label>
                    <div class="configbox-body"></div>
                </fieldset>
            </form>
            <div class="configbox-footer">
                <button class="pure-button pure-button-primary" id=ob>OK</button>
                <button class="pure-button" id=cb>Cancel</button>
            </div>
        </div>
    `;
  document.body.appendChild(template.content.cloneNode(true));
  const configBox = document.body.querySelectorAll('.configbox')[0];
  const body = document.body.querySelectorAll('.configbox-body')[0];
  const okButton = document.getElementById('ob');
  const cancelButton = document.getElementById('cb');

  cancelButton.onclick = () => {
    configBox.remove();
  };

  okButton.onclick = () => {
    // set configuration to node
    config.map(cfg => {
      cfg.value = document.forms['configform'].elements[cfg.name].value;
    });
    configBox.remove();
    onclose();
  };

  config.map(cfg => {
    const cfgUI = getCfgUI(cfg);
    body.appendChild(cfgUI);
  });
};

class FlowEditor {
  constructor(element, nodes, config) {
    this.nodes = [];
    this.renderedNodes = [];
    this.onSave = config.onSave;
    this.canEdit = !config.readOnly;
    this.debug = config.debug != null ? config.debug : true;
    this.gridSize = config.gridSize || 1;
    this.element = element;
    nodes.map(nodeConfig => {
      const node = new Node(nodeConfig);
      this.nodes.push(node);
    });
    this.render();
    if (this.canEdit) dNd.enableNativeDrop(this.canvas, ev => {
      const configNode = this.nodes.find(node => node.type == ev.dataTransfer.getData('type'));
      let node = new NodeUI(this.canvas, configNode, {
        x: ev.x,
        y: ev.y
      });
      node.render();

      node.destroy = () => {
        this.renderedNodes.splice(this.renderedNodes.indexOf(node), 1);
        node = null;
      };

      this.renderedNodes.push(node);
    });
  }

  loadConfig(config) {
    loadChart(config, this);
  }

  saveConfig() {
    return saveChart(this.renderedNodes);
  }

  renderContainers() {
    if (this.canEdit) {
      this.sidebar = document.createElement('div');
      this.sidebar.className = 'sidebar';
      this.element.appendChild(this.sidebar);
    }

    this.canvas = document.createElement('div');
    this.canvas.className = 'canvas';
    this.canvas.canEdit = this.canEdit;
    this.canvas.gridSize = this.gridSize;
    this.element.appendChild(this.canvas);

    if (this.canEdit && this.debug) {
      this.debug = document.createElement('div');
      this.debug.className = 'debug';
      const text = document.createElement('div');
      this.debug.appendChild(text);
      const saveBtn = document.createElement('button');
      saveBtn.textContent = 'SAVE';

      saveBtn.onclick = () => {
        const config = JSON.stringify(saveChart(this.renderedNodes));
        const rules = exportChart(this.renderedNodes);
        this.onSave(config, rules);
      };

      const loadBtn = document.createElement('button');
      loadBtn.textContent = 'LOAD';

      loadBtn.onclick = () => {
        const input = prompt('enter config');
        loadChart(JSON.parse(input), this);
      };

      const exportBtn = document.createElement('button');
      exportBtn.textContent = 'EXPORT';

      exportBtn.onclick = () => {
        const exported = exportChart(this.renderedNodes);
        text.textContent = exported;
      };

      this.debug.appendChild(exportBtn);
      this.debug.appendChild(saveBtn);
      this.debug.appendChild(loadBtn);
      this.debug.appendChild(text);
      this.element.appendChild(this.debug);
    }
  }

  renderConfigNodes() {
    const groups = {};
    this.nodes.map(node => {
      if (!groups[node.group]) {
        const group = document.createElement('div');
        group.className = 'group';
        group.textContent = node.group;
        this.sidebar.appendChild(group);
        groups[node.group] = group;
      }

      const nodeElement = document.createElement('div');
      nodeElement.className = `node group-${node.group}`;
      nodeElement.textContent = node.type;
      groups[node.group].appendChild(nodeElement);
      dNd.enableNativeDrag(nodeElement, {
        type: node.type
      });
    });
  }

  render() {
    this.renderContainers();
    if (this.canEdit) this.renderConfigNodes();
  }

}

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
    this.loader = document.querySelector('.loading');
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

/***/ "./src/lib/menu.js":
/*!*************************!*\
  !*** ./src/lib/menu.js ***!
  \*************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages */ "./src/pages/index.js");
/* harmony import */ var _conf_config_dat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../conf/config.dat */ "./src/conf/config.dat.js");



class Menus {
  constructor() {
    this.menus = [];
    this.routes = [];

    this.addMenu = menu => {
      this.menus.push(menu);
      this.addRoute(menu);
    };

    this.addRoute = route => {
      this.routes.push(route);

      if (route.children) {
        route.children.forEach(child => this.routes.push(child));
      }
    };
  }

}

const menus = [{
  title: 'Devices',
  href: 'devices',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["DevicesPage"],
  children: []
}, {
  title: 'Controllers',
  href: 'controllers',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["ControllersPage"],
  children: []
}, {
  title: 'Automation',
  href: 'rules',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["RulesEditorPage"],
  class: 'full',
  children: []
}, {
  title: 'Config',
  href: 'config',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["ConfigPage"],
  children: [{
    title: 'Hardware',
    href: 'config/hardware',
    component: _pages__WEBPACK_IMPORTED_MODULE_0__["ConfigHardwarePage"]
  }, {
    title: 'Advanced',
    href: 'config/advanced',
    component: _pages__WEBPACK_IMPORTED_MODULE_0__["ConfigAdvancedPage"]
  }, {
    title: 'Rules',
    href: 'config/rules',
    component: _pages__WEBPACK_IMPORTED_MODULE_0__["RulesPage"]
  }, {
    title: 'Save',
    href: 'config/save',
    action: _conf_config_dat__WEBPACK_IMPORTED_MODULE_1__["saveConfig"]
  }, {
    title: 'Load',
    href: 'config/load',
    component: _pages__WEBPACK_IMPORTED_MODULE_0__["LoadPage"]
  }, {
    title: 'Reboot',
    href: 'config/reboot',
    component: _pages__WEBPACK_IMPORTED_MODULE_0__["RebootPage"]
  }, {
    title: 'Factory Reset',
    href: 'config/factory',
    component: _pages__WEBPACK_IMPORTED_MODULE_0__["FactoryResetPage"]
  }]
}, {
  title: 'Tools',
  href: 'tools',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["ToolsPage"],
  children: [{
    title: 'Discover',
    href: 'tools/discover',
    component: _pages__WEBPACK_IMPORTED_MODULE_0__["DiscoverPage"]
  }, {
    title: 'Info',
    href: 'tools/sysinfo',
    component: _pages__WEBPACK_IMPORTED_MODULE_0__["SysVarsPage"]
  }, {
    title: 'Update',
    href: 'tools/update',
    component: _pages__WEBPACK_IMPORTED_MODULE_0__["UpdatePage"]
  }, {
    title: 'Filesystem',
    href: 'tools/fs',
    component: _pages__WEBPACK_IMPORTED_MODULE_0__["FSPage"]
  }]
}];
const routes = [{
  title: 'Edit Controller',
  href: 'controllers/edit',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["ControllerEditPage"]
}, {
  title: 'Edit Notification',
  href: 'controllers/notification',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["ControllerNotificationsPage"]
}, {
  title: 'Edit Device',
  href: 'devices/edit',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["DevicesEditPage"]
}, {
  title: 'Save to Flash',
  href: 'tools/diff',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["DiffPage"]
}, {
  title: 'Setup',
  href: 'config/setup',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["SetupPage"]
}];
const menu = new Menus();
routes.forEach(menu.addRoute);
menus.forEach(menu.addMenu);


/***/ }),

/***/ "./src/lib/node_definitions.js":
/*!*************************************!*\
  !*** ./src/lib/node_definitions.js ***!
  \*************************************/
/*! exports provided: nodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodes", function() { return nodes; });
const nodes = [// TRIGGERS
{
  group: 'TRIGGERS',
  type: 'timer',
  inputs: [],
  outputs: [1],
  config: [{
    name: 'timer',
    type: 'select',
    values: [1, 2, 3, 4, 5, 6, 7, 8]
  }],
  indent: true,
  toString: function () {
    return `timer ${this.config[0].value}`;
  },
  toDsl: function () {
    return [`on Rules#Timer=${this.config[0].value} do\n%%output%%\nEndon\n`];
  }
}, {
  group: 'TRIGGERS',
  type: 'event',
  inputs: [],
  outputs: [1],
  config: [{
    name: 'name',
    type: 'text'
  }],
  indent: true,
  toString: function () {
    return `event ${this.config[0].value}`;
  },
  toDsl: function () {
    return [`on ${this.config[0].value} do\n%%output%%\nEndon\n`];
  }
}, {
  group: 'TRIGGERS',
  type: 'clock',
  inputs: [],
  outputs: [1],
  config: [],
  indent: true,
  toString: () => {
    return 'clock';
  },
  toDsl: () => {
    return ['on Clock#Time do\n%%output%%\nEndon\n'];
  }
}, {
  group: 'TRIGGERS',
  type: 'system boot',
  inputs: [],
  outputs: [1],
  config: [],
  indent: true,
  toString: function () {
    return `on boot`;
  },
  toDsl: function () {
    return [`On System#Boot do\n%%output%%\nEndon\n`];
  }
}, {
  group: 'TRIGGERS',
  type: 'Device',
  inputs: [],
  outputs: [1],
  config: [],
  indent: true,
  toString: function () {
    return `on boot`;
  },
  toDsl: function () {
    return [`On Device#Value do\n%%output%%\nEndon\n`];
  }
}, // LOGIC
{
  group: 'LOGIC',
  type: 'if/else',
  inputs: [1],
  outputs: [1, 2],
  config: [{
    name: 'variable',
    type: 'textselect',
    values: ['Clock#Time']
  }, {
    name: 'equality',
    type: 'select',
    values: ['=', '<', '>', '<=', '>=', '!=']
  }, {
    name: 'value',
    type: 'text'
  }],
  indent: true,
  toString: function () {
    return `IF ${this.config[0].value}${this.config[1].value}${this.config[2].value}`;
  },
  toDsl: function () {
    return [`If [${this.config[0].value}]${this.config[1].value}${this.config[2].value}\n%%output%%`, `Else\n%%output%%\nEndif`];
  }
}, {
  group: 'LOGIC',
  type: 'delay',
  inputs: [1],
  outputs: [1],
  config: [{
    name: 'delay',
    type: 'number'
  }],
  toString: function () {
    return `delay: ${this.config[0].value}`;
  },
  toDsl: function () {
    return [`Delay ${this.config[0].value}\n`];
  }
}, // ACTIONS
{
  group: 'ACTIONS',
  type: 'GPIO',
  inputs: [1],
  outputs: [1],
  config: [{
    name: 'gpio',
    type: 'select',
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  }, {
    name: 'value',
    type: 'select',
    values: [0, 1]
  }],
  toString: function () {
    return `GPIO ${this.config[0].value}, ${this.config[1].value}`;
  },
  toDsl: function () {
    return [`GPIO,${this.config[0].value},${this.config[1].value}\n`];
  }
}, {
  group: 'ACTIONS',
  type: 'Pulse',
  inputs: [1],
  outputs: [1],
  config: [{
    name: 'gpio',
    type: 'select',
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    value: 0
  }, {
    name: 'value',
    type: 'select',
    values: [0, 1],
    value: 1
  }, {
    name: 'unit',
    type: 'select',
    values: ['s', 'ms'],
    value: 'ms'
  }, {
    name: 'duration',
    type: 'number',
    value: 1000
  }],
  toString: function () {
    return `Pulse ${this.config[0].value}=${this.config[1].value} for ${this.config[3].value}${this.config[2].value}`;
  },
  toDsl: function () {
    const fn = this.config[2].value === 's' ? 'LongPulse' : 'Pulse';
    return [`${fn},${this.config[0].value},${this.config[1].value},${this.config[2].value}\n`];
  }
}, {
  group: 'ACTIONS',
  type: 'PWM',
  inputs: [1],
  outputs: [1],
  config: [{
    name: 'gpio',
    type: 'select',
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    value: 0
  }, {
    name: 'value',
    type: 'number',
    value: 1023
  }],
  toString: function () {
    return `PWM.GPIO${this.config[0].value} = ${this.config[1].value}`;
  },
  toDsl: function () {
    return [`PWM,${this.config[0].value},${this.config[1].value}\n`];
  }
}, {
  group: 'ACTIONS',
  type: 'SERVO',
  inputs: [1],
  outputs: [1],
  config: [{
    name: 'gpio',
    type: 'select',
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    value: 0
  }, {
    name: 'servo',
    type: 'select',
    values: [1, 2],
    value: 0
  }, {
    name: 'position',
    type: 'number',
    value: 90
  }],
  toString: function () {
    return `SERVO.GPIO${this.config[0].value} = ${this.config[2].value}`;
  },
  toDsl: function () {
    return [`Servo,${this.config[1].value},${this.config[0].value},${this.config[2].value}\n`];
  }
}, {
  group: 'ACTIONS',
  type: 'fire event',
  inputs: [1],
  outputs: [1],
  config: [{
    name: 'name',
    type: 'text'
  }],
  toString: function () {
    return `event ${this.config[0].value}`;
  },
  toDsl: function () {
    return [`event,${this.config[0].value}\n`];
  }
}, {
  group: 'ACTIONS',
  type: 'settimer',
  inputs: [1],
  outputs: [1],
  config: [{
    name: 'timer',
    type: 'select',
    values: [1, 2, 3, 4, 5, 6, 7, 8]
  }, {
    name: 'value',
    type: 'number'
  }],
  toString: function () {
    return `timer${this.config[0].value} = ${this.config[1].value}`;
  },
  toDsl: function () {
    return [`timerSet,${this.config[0].value},${this.config[1].value}\n`];
  }
}, {
  group: 'ACTIONS',
  type: 'MQTT',
  inputs: [1],
  outputs: [1],
  config: [{
    name: 'topic',
    type: 'text'
  }, {
    name: 'command',
    type: 'text'
  }],
  toString: function () {
    return `mqtt ${this.config[1].value}`;
  },
  toDsl: function () {
    return [`Publish ${this.config[0].value},${this.config[1].value}\n`];
  }
}, {
  group: 'ACTIONS',
  type: 'UDP',
  inputs: [1],
  outputs: [1],
  config: [{
    name: 'ip',
    type: 'text'
  }, {
    name: 'port',
    type: 'number'
  }, {
    name: 'command',
    type: 'text'
  }],
  toString: function () {
    return `UDP ${this.config[1].value}`;
  },
  toDsl: function () {
    return [`SendToUDP ${this.config[0].value},${this.config[1].value},${this.config[2].value}\n`];
  }
}, {
  group: 'ACTIONS',
  type: 'HTTP',
  inputs: [1],
  outputs: [1],
  config: [{
    name: 'host',
    type: 'text'
  }, {
    name: 'port',
    type: 'number',
    value: 80
  }, {
    name: 'url',
    type: 'text'
  }],
  toString: function () {
    return `HTTP ${this.config[2].value}`;
  },
  toDsl: function () {
    return [`SentToHTTP ${this.config[0].value},${this.config[1].value},${this.config[2].value}\n`];
  }
}, {
  group: 'ACTIONS',
  type: 'ESPEASY',
  inputs: [1],
  outputs: [1],
  config: [{
    name: 'device',
    type: 'number'
  }, {
    name: 'command',
    type: 'text'
  }],
  toString: function () {
    return `mqtt ${this.config[1].value}`;
  },
  toDsl: function () {
    return [`SendTo ${this.config[0].value},${this.config[1].value}\n`];
  }
}];

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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/lib/menu.js");




const PLUGINS = ['http://localhost:8080/build/dash.js'];

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
    menu: _menu__WEBPACK_IMPORTED_MODULE_3__["menu"],
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

/***/ }),

/***/ "./src/pages/config.advanced.js":
/*!**************************************!*\
  !*** ./src/pages/config.advanced.js ***!
  \**************************************/
/*! exports provided: ConfigAdvancedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigAdvancedPage", function() { return ConfigAdvancedPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form */ "./src/components/form/index.js");
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/settings */ "./src/lib/settings.js");



const logLevelOptions = [{
  name: 'None',
  value: 0
}, {
  name: 'Error',
  value: 1
}, {
  name: 'Info',
  value: 2
}, {
  name: 'Debug',
  value: 3
}, {
  name: 'Debug More',
  value: 4
}, {
  name: 'Debug Dev',
  value: 9
}];
const formConfig = {
  onSave: vals => {
    console.log(vals);
  },
  groups: {
    rules: {
      name: 'Rules Settings',
      configs: {
        enabled: {
          name: 'Enabled',
          type: 'checkbox'
        },
        oldengine: {
          name: 'Old Engine',
          type: 'checkbox'
        }
      }
    },
    mqtt: {
      name: 'Controller Settings',
      configs: {
        retain_flag: {
          name: 'MQTT Retain Msg',
          type: 'checkbox'
        },
        interval: {
          name: 'Message Interval',
          type: 'number'
        },
        useunitname: {
          name: 'MQTT use unit name as ClientId',
          type: 'checkbox'
        },
        changeclientid: {
          name: 'MQTT change ClientId at reconnect',
          type: 'checkbox'
        }
      }
    },
    ntp: {
      name: 'NTP Settings',
      configs: {
        enabled: {
          name: 'Use NTP',
          type: 'checkbox'
        },
        host: {
          name: 'NTP Hostname',
          type: 'string'
        }
      }
    },
    dst: {
      name: 'DST Settings',
      configs: {
        enabled: {
          name: 'Use DST',
          type: 'checkbox'
        }
      }
    },
    location: {
      name: 'Location Settings',
      configs: {
        long: {
          name: 'Longitude',
          type: 'number'
        },
        lat: {
          name: 'Latitude',
          type: 'number'
        }
      }
    },
    log: {
      name: 'Log Settings',
      configs: {
        syslog_ip: {
          name: 'Syslog IP',
          type: 'ip'
        },
        syslog_level: {
          name: 'Syslog Level',
          type: 'select',
          options: logLevelOptions
        },
        syslog_facility: {
          name: 'Syslog Level',
          type: 'select',
          options: [{
            name: 'Kernel',
            value: 0
          }, {
            name: 'User',
            value: 1
          }, {
            name: 'Daemon',
            value: 3
          }, {
            name: 'Message',
            value: 5
          }, {
            name: 'Local0',
            value: 16
          }, {
            name: 'Local1',
            value: 17
          }, {
            name: 'Local2',
            value: 18
          }, {
            name: 'Local3',
            value: 19
          }, {
            name: 'Local4',
            value: 20
          }, {
            name: 'Local5',
            value: 21
          }, {
            name: 'Local6',
            value: 22
          }, {
            name: 'Local7',
            value: 23
          }]
        },
        serial_level: {
          name: 'Serial Level',
          type: 'select',
          options: logLevelOptions
        },
        web_level: {
          name: 'Web Level',
          type: 'select',
          options: logLevelOptions
        }
      }
    },
    serial: {
      name: 'Serial Settings',
      configs: {
        enabled: {
          name: 'Enable Serial',
          type: 'checkbox'
        },
        baudrate: {
          name: 'Baud Rate',
          type: 'number'
        }
      }
    },
    experimental: {
      name: 'Experimental Settings',
      configs: {
        ip_octet: {
          name: 'Fixed IP Octet',
          type: 'number'
        },
        WDI2CAddress: {
          name: 'WD I2C Address',
          type: 'number'
        },
        ssdp: {
          name: 'Use SSDP',
          type: 'checkbox',
          var: 'ssdp.enabled'
        },
        ConnectionFailuresThreshold: {
          name: 'Connection Failiure Treshold',
          type: 'number'
        },
        WireClockStretchLimit: {
          name: 'I2C ClockStretchLimit',
          type: 'number'
        }
      }
    }
  }
};
class ConfigAdvancedPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render(props) {
    formConfig.onSave = values => {
      _lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].set('config', values);
      window.location.href = '#devices';
    };

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_components_form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      config: formConfig,
      selected: _lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].get('config')
    });
  }

}

/***/ }),

/***/ "./src/pages/config.hardware.js":
/*!**************************************!*\
  !*** ./src/pages/config.hardware.js ***!
  \**************************************/
/*! exports provided: pins, ConfigHardwarePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pins", function() { return pins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigHardwarePage", function() { return ConfigHardwarePage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form */ "./src/components/form/index.js");
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/settings */ "./src/lib/settings.js");



const pins = [{
  name: 'None',
  value: 255
}, {
  name: 'GPIO-0',
  value: 0
}, {
  name: 'GPIO-1',
  value: 1
}, {
  name: 'GPIO-2',
  value: 2
}, {
  name: 'GPIO-3',
  value: 3
}, {
  name: 'GPIO-4',
  value: 4
}, {
  name: 'GPIO-5',
  value: 5
}, {
  name: 'GPIO-9',
  value: 9
}, {
  name: 'GPIO-10',
  value: 10
}, {
  name: 'GPIO-12',
  value: 12
}, {
  name: 'GPIO-13',
  value: 13
}, {
  name: 'GPIO-14',
  value: 14
}, {
  name: 'GPIO-15',
  value: 15
}, {
  name: 'GPIO-16',
  value: 16
}];
const pinState = [{
  name: 'Default',
  value: 0
}, {
  name: 'Low',
  value: 1
}, {
  name: 'High',
  value: 2
}, {
  name: 'Input',
  value: 3
}];
const formConfig = {
  groups: {
    led: {
      name: 'WiFi Status LED',
      configs: {
        gpio: {
          name: 'GPIO --> LED',
          type: 'select',
          options: pins
        },
        inverse: {
          name: 'Inversed LED',
          type: 'checkbox'
        }
      }
    },
    reset: {
      name: 'Reset Pin',
      configs: {
        pin: {
          name: 'GPIO <-- Switch',
          type: 'select',
          options: pins
        }
      }
    },
    i2c: {
      name: 'I2C Settings',
      configs: {
        sda: {
          name: 'GPIO - SDA',
          type: 'select',
          options: pins
        },
        scl: {
          name: 'GPIO - SCL',
          type: 'select',
          options: pins
        }
      }
    },
    spi: {
      name: 'SPI Settings',
      configs: {
        enabled: {
          name: 'Init SPI',
          type: 'checkbox'
        }
      }
    },
    gpio: {
      name: 'GPIO boot states',
      configs: {
        0: {
          name: 'Pin Mode GPIO-0',
          type: 'select',
          options: pinState
        },
        1: {
          name: 'Pin Mode GPIO-1',
          type: 'select',
          options: pinState
        },
        2: {
          name: 'Pin Mode GPIO-2',
          type: 'select',
          options: pinState
        },
        3: {
          name: 'Pin Mode GPIO-3',
          type: 'select',
          options: pinState
        },
        4: {
          name: 'Pin Mode GPIO-4',
          type: 'select',
          options: pinState
        },
        5: {
          name: 'Pin Mode GPIO-5',
          type: 'select',
          options: pinState
        },
        9: {
          name: 'Pin Mode GPIO-9',
          type: 'select',
          options: pinState
        },
        10: {
          name: 'Pin Mode GPIO-10',
          type: 'select',
          options: pinState
        },
        12: {
          name: 'Pin Mode GPIO-12',
          type: 'select',
          options: pinState
        },
        13: {
          name: 'Pin Mode GPIO-13',
          type: 'select',
          options: pinState
        },
        14: {
          name: 'Pin Mode GPIO-14',
          type: 'select',
          options: pinState
        },
        15: {
          name: 'Pin Mode GPIO-15',
          type: 'select',
          options: pinState
        }
      }
    }
  }
};
class ConfigHardwarePage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render(props) {
    const config = _lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].get('hardware');

    formConfig.onSave = values => {
      _lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].set('hardware', values);
      window.location.href = '#devices';
    };

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_components_form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      config: formConfig,
      selected: config
    });
  }

}

/***/ }),

/***/ "./src/pages/config.js":
/*!*****************************!*\
  !*** ./src/pages/config.js ***!
  \*****************************/
/*! exports provided: ConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPage", function() { return ConfigPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form */ "./src/components/form/index.js");
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/settings */ "./src/lib/settings.js");



const ipBlockLevel = [{
  name: 'Allow All',
  value: 0
}, {
  name: 'Allow Local Subnet',
  value: 1
}, {
  name: 'Allow IP Range',
  value: 2
}];
const formConfig = {
  groups: {
    general: {
      name: 'General',
      configs: {
        unitname: {
          name: 'Unit Name',
          type: 'string'
        },
        unitnr: {
          name: 'Unit Number',
          type: 'number'
        },
        appendunit: {
          name: 'Append Unit Name to Hostname',
          type: 'checkbox'
        },
        password: {
          name: 'Admin Password',
          type: 'password',
          var: 'security[0].password'
        }
      }
    },
    wifi: {
      name: 'WiFi',
      configs: {
        ssid: {
          name: 'SSID',
          type: 'string',
          var: 'security[0].WifiSSID'
        },
        passwd: {
          name: 'Password',
          type: 'password',
          var: 'security[0].WifiKey'
        },
        fallbackssid: {
          name: 'Fallback SSID',
          type: 'string',
          var: 'security[0].WifiSSID2'
        },
        fallbackpasswd: {
          name: 'Fallback Password',
          type: 'password',
          var: 'security[0].WifiKey2'
        },
        wpaapmode: {
          name: 'WPA AP Mode Key:',
          type: 'string',
          var: 'security[0].WifiAPKey'
        }
      }
    },
    clientIP: {
      name: 'Client IP Filtering',
      configs: {
        blocklevel: {
          name: 'IP Block Level',
          type: 'select',
          options: ipBlockLevel,
          var: 'security[0].IPblockLevel'
        },
        lowerrange: {
          name: 'Access IP lower range',
          type: 'ip',
          var: 'security[0].AllowedIPrangeLow'
        },
        upperrange: {
          name: 'Access IP upper range',
          type: 'ip',
          var: 'security[0].AllowedIPrangeHigh'
        }
      }
    },
    IP: {
      name: 'IP Settings',
      configs: {
        ip: {
          name: 'IP',
          type: 'ip'
        },
        gw: {
          name: 'Gateway',
          type: 'ip'
        },
        subnet: {
          name: 'Subnet',
          type: 'ip'
        },
        dns: {
          name: 'DNS',
          type: 'ip'
        }
      }
    },
    sleep: {
      name: 'Sleep Mode',
      configs: {
        awaketime: {
          name: 'Sleep awake time',
          type: 'number'
        },
        sleeptime: {
          name: 'Sleep time',
          type: 'number'
        },
        sleeponfailiure: {
          name: 'Sleep on connection failure',
          type: 'checkbox'
        }
      }
    }
  }
};
class ConfigPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render(props) {
    formConfig.onSave = values => {
      _lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].set(`config`, values);
      window.location.href = '#devices';
    };

    const config = _lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].get('config');
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_components_form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      config: formConfig,
      selected: config
    });
  }

}

/***/ }),

/***/ "./src/pages/controllers.edit.js":
/*!***************************************!*\
  !*** ./src/pages/controllers.edit.js ***!
  \***************************************/
/*! exports provided: protocols, ControllerEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protocols", function() { return protocols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerEditPage", function() { return ControllerEditPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form */ "./src/components/form/index.js");
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/settings */ "./src/lib/settings.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/helpers */ "./src/lib/helpers.js");
/* harmony import */ var _components_espeasy_p2p__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/espeasy_p2p */ "./src/components/espeasy_p2p/index.js");





const protocols = [{
  name: '- Standalone -',
  value: 0
}, {
  name: 'Domoticz HTTP',
  value: 1
}, {
  name: 'Domoticz MQTT',
  value: 2
}, {
  name: 'Nodo Telnet',
  value: 3
}, {
  name: 'ThingSpeak',
  value: 4
}, {
  name: 'OpenHAB MQTT',
  value: 5
}, {
  name: 'PiDome MQTT',
  value: 6
}, {
  name: 'Emoncms',
  value: 7
}, {
  name: 'Generic HTTP',
  value: 8
}, {
  name: 'FHEM HTTP',
  value: 9
}, {
  name: 'Generic UDP',
  value: 10
}, {
  name: 'ESPEasy P2P Networking',
  value: 13
}, {
  name: 'Email',
  value: 25
}];
const baseFields = {
  dns: {
    name: 'Locate Controller',
    type: 'select',
    options: [{
      value: 0,
      name: 'Use IP Address'
    }, {
      value: 1,
      name: 'Use Hostname'
    }]
  },
  IP: {
    name: 'IP',
    type: 'ip'
  },
  hostname: {
    name: 'Hostname',
    type: 'string'
  },
  port: {
    name: 'Port',
    type: 'number'
  },
  minimal_time_between: {
    name: 'Minimum Send Interval',
    type: 'number'
  },
  max_queue_depth: {
    name: 'Max Queue Depth',
    type: 'number'
  },
  max_retry: {
    name: 'Max Retries',
    type: 'number'
  },
  delete_oldest: {
    name: 'Full Queue Action',
    type: 'select',
    options: [{
      value: 0,
      name: 'Ignore New'
    }, {
      value: 1,
      name: 'Delete Oldest'
    }]
  },
  must_check_reply: {
    name: 'Check Reply',
    type: 'select',
    options: [{
      value: 0,
      name: 'Ignore Acknowledgement'
    }, {
      value: 1,
      name: 'Check Acknowledgement'
    }]
  },
  client_timeout: {
    name: 'Client Timeout',
    type: 'number'
  }
};
const user = {
  name: 'Controller User',
  type: 'string'
};
const password = {
  name: 'Controller Password',
  type: 'password'
};
const subscribe = {
  name: 'Controller Subscribe',
  type: 'string'
};
const publish = {
  name: 'Controller Publish',
  type: 'string'
};
const lwtTopicField = {
  MQTT_lwt_topic: {
    name: 'Controller LWT topic:',
    type: 'string'
  },
  lwt_message_connect: {
    name: 'LWT Connect Message',
    type: 'string'
  },
  lwt_message_disconnect: {
    name: 'LWT Disconnect Message',
    type: 'string'
  }
};
const baseDefaults = {
  port: 1883,
  minimal_time_between: 100,
  max_queue_depth: 10,
  max_retry: 10,
  client_timeout: 1000
};
const getDefaults = {
  1: () => ({
    // Domoticz HTTP
    port: 8080
  }),
  2: () => ({
    // Domoticz MQTT
    subscribe: 'domoticz/out',
    public: 'domoticz/in'
  }),
  3: () => ({
    // Nodo Telnet
    port: 23
  }),
  4: () => ({
    // ThingSpeak
    port: 80
  }),
  5: () => ({
    // OpenHAB MQTT
    subscribe: '/%sysname%/#',
    publish: '/%sysname%/%tskname%/%valname%'
  }),
  6: () => ({
    // PiDome MQTT
    subscribe: '/Home/#',
    publish: '/hooks/devices/%id%/SensorData/%valname%'
  }),
  7: () => ({
    // Emoncms
    port: 80
  }),
  8: () => ({
    // Generic HTTP
    port: 80,
    publish: 'demo.php?name=%sysname%&task=%tskname%&valuename=%valname%&value=%value%'
  }),
  9: () => ({
    // FHEM HTTP
    port: 8383
  }),
  10: () => ({
    // Generic UDP
    port: 514,
    publish: '%sysname%_%tskname%_%valname%=%value%'
  }),
  13: () => ({
    // EspEasy P2P
    port: 65501,
    Custom: 1
  })
};

const setDefaultConfig = (type, config) => {
  const defaults = { ...baseDefaults,
    ...getDefaults[type]()
  };
  Object.keys(defaults).forEach(key => {
    const val = defaults[key];
    Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_3__["set"])(config.settings, key, val);
  });
};

const getFormConfig = type => {
  let additionalFields = {};
  let additionalGroups = {};

  switch (Number(type)) {
    case 2: // Domoticz MQTT

    case 5:
      // OpenHAB MQTT
      additionalFields = { ...baseFields,
        user,
        password,
        subscribe,
        publish,
        ...lwtTopicField
      };
      break;

    case 6:
      // 'PiDome MQTT'
      additionalFields = { ...baseFields,
        subscribe,
        publish,
        ...lwtTopicField
      };
      break;

    case 3: //'Nodo Telnet'

    case 7:
      //'Emoncms':
      additionalFields = { ...baseFields,
        password
      };
      break;

    case 8:
      // 'Generic HTTP'
      additionalFields = { ...baseFields,
        user,
        password,
        subscribe,
        publish
      };
      break;

    case 1: // Domoticz HTTP

    case 9:
      // 'FHEM HTTP'
      additionalFields = { ...baseFields,
        user,
        password
      };
      break;

    case 10:
      //'Generic UDP': 
      additionalFields = { ...baseFields,
        subscribe,
        publish
      };
      break;

    case 13:
      //'ESPEasy P2P Networking':
      additionalGroups = {
        global: {
          name: 'Global Settings',
          configs: {
            port: {
              name: 'UDP Port',
              type: 'number',
              var: 'ROOT.config.espnetwork.port'
            }
          }
        },
        nodes: {
          name: 'Connected Nodes',
          configs: {
            nodes: {
              type: 'custom',
              component: _components_espeasy_p2p__WEBPACK_IMPORTED_MODULE_4__["EspEaspP2PComponent"]
            }
          }
        }
      };
      break;

    case 0:
    default:
      additionalFields = { ...baseFields
      };
  }

  return {
    groups: {
      settings: {
        name: 'Controller Settings',
        configs: {
          protocol: {
            name: 'Protocol',
            type: 'select',
            var: 'protocol',
            options: protocols
          },
          enabled: {
            name: 'Enabled',
            type: 'checkbox',
            var: 'enabled'
          },
          ...additionalFields
        }
      },
      ...additionalGroups
    }
  };
}; // todo: changing protocol needs to update:
// -- back to default (correct default)
// -- field list 


class ControllerEditPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.config = _lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].get(`controllers[${props.params[0]}]`);
    this.state = {
      protocol: this.config.protocol
    };
  }

  render(props) {
    const formConfig = getFormConfig(this.state.protocol);

    formConfig.groups.settings.configs.protocol.onChange = e => {
      this.setState({
        protocol: e.currentTarget.value
      });
      setDefaultConfig(e.currentTarget.value, this.config);
    };

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_components_form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      config: formConfig,
      selected: this.config
    });
  }

}

/***/ }),

/***/ "./src/pages/controllers.js":
/*!**********************************!*\
  !*** ./src/pages/controllers.js ***!
  \**********************************/
/*! exports provided: ControllersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllersPage", function() { return ControllersPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/settings */ "./src/lib/settings.js");
/* harmony import */ var _controllers_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers.edit */ "./src/pages/controllers.edit.js");
/* harmony import */ var _controllers_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers.notifications */ "./src/pages/controllers.notifications.js");




class ControllersPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render(props) {
    const controllers = _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].get('controllers');
    const notifications = _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].get('notifications');
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, " ", Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, "Controllers"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, controllers.map((c, i) => {
      const editUrl = `#controllers/edit/${i}`;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        class: "device"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        class: "info"
      }, i + 1, ": ", c.enabled ? Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("b", null, "\u2713") : Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("b", null, "\u2717"), "\xA0\xA0[", _controllers_edit__WEBPACK_IMPORTED_MODULE_2__["protocols"].find(p => p.value === c.protocol).name, "] PORT:", c.settings.port, " HOST:", c.settings.host, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
        href: editUrl
      }, "edit")));
    })), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, "Notifications"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, notifications.map((n, i) => {
      const editUrl = `#controllers/notification/${i}`;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        class: "device"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        class: "info"
      }, i + 1, ": ", n.enabled ? Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("b", null, "\u2713") : Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("b", null, "\u2717"), "\xA0\xA0[", _controllers_notifications__WEBPACK_IMPORTED_MODULE_3__["types"].find(p => p.value === n.type).name, "] PORT:", n.settings.port, " HOST:", n.settings.host, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
        href: editUrl
      }, "edit")));
    })));
  }

}

/***/ }),

/***/ "./src/pages/controllers.notifications.js":
/*!************************************************!*\
  !*** ./src/pages/controllers.notifications.js ***!
  \************************************************/
/*! exports provided: types, ControllerNotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerNotificationsPage", function() { return ControllerNotificationsPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form */ "./src/components/form/index.js");
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/settings */ "./src/lib/settings.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/helpers */ "./src/lib/helpers.js");
/* harmony import */ var _devices_defs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../devices/_defs */ "./src/devices/_defs.js");





const types = [{
  name: '- None -',
  value: 0
}, {
  name: 'Email',
  value: 1
}, {
  name: 'Buzzer',
  value: 2
}];
const baseDefaults = {};
const getDefaults = {
  0: () => ({}),
  1: () => ({// Email
  }),
  2: () => ({// Buzzer
  })
};

const setDefaultConfig = (type, config) => {
  const defaults = { ...baseDefaults,
    ...getDefaults[type]()
  };
  Object.keys(defaults).forEach(key => {
    const val = defaults[key];
    Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_3__["set"])(config.settings, key, val);
  });
};

const getFormConfig = type => {
  let additionalFields = {};

  switch (Number(type)) {
    case 1:
      // Email
      additionalFields = {
        domain: {
          name: 'Domain',
          type: 'string'
        },
        hostname: {
          name: 'Hostname',
          type: 'string'
        },
        port: {
          name: 'Port',
          type: 'number'
        },
        sender: {
          name: 'Sender',
          type: 'string'
        },
        receiver: {
          name: 'Receiver',
          type: 'string'
        },
        subject: {
          name: 'Subject',
          type: 'string'
        },
        user: {
          name: 'Username',
          type: 'string'
        },
        pass: {
          name: 'Password',
          type: 'string'
        },
        body: {
          name: 'Body',
          type: 'textarea'
        }
      };
      break;

    case 2:
      // Buzzer
      additionalFields = {
        pin1: {
          name: '1st GPIO',
          type: 'select',
          options: _devices_defs__WEBPACK_IMPORTED_MODULE_4__["pins"]
        }
      };
      break;
  }

  return {
    groups: {
      settings: {
        name: 'Notification Settings',
        configs: {
          type: {
            name: 'Type',
            type: 'select',
            var: 'type',
            options: types
          },
          enabled: {
            name: 'Enabled',
            type: 'checkbox',
            var: 'enabled'
          },
          ...additionalFields
        }
      }
    }
  };
}; // todo: changing protocol needs to update:
// -- back to default (correct default)
// -- field list 


class ControllerNotificationsPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.config = _lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].get(`notifications[${props.params[0]}]`);
    this.state = {
      type: this.config.type
    };
  }

  render(props) {
    const formConfig = getFormConfig(this.state.type);

    formConfig.groups.settings.configs.type.onChange = e => {
      this.setState({
        type: e.currentTarget.value
      });
      setDefaultConfig(e.currentTarget.value, this.config);
    };

    formConfig.onSave = values => {
      _lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].set(`notifications[${props.params[0]}]`, values);
      window.location.href = '#controllers';
    };

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_components_form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      config: formConfig,
      selected: this.config
    });
  }

}

/***/ }),

/***/ "./src/pages/devices.edit.js":
/*!***********************************!*\
  !*** ./src/pages/devices.edit.js ***!
  \***********************************/
/*! exports provided: DevicesEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesEditPage", function() { return DevicesEditPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form */ "./src/components/form/index.js");
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/settings */ "./src/lib/settings.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../devices */ "./src/devices/index.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/helpers */ "./src/lib/helpers.js");





const baseFields = {
  enabled: {
    name: 'Enabled',
    type: 'checkbox',
    var: 'enabled'
  },
  name: {
    name: 'Name',
    type: 'string'
  }
};

const getFormConfig = type => {
  const device = _devices__WEBPACK_IMPORTED_MODULE_3__["devices"].find(d => d.value === parseInt(type));
  if (!device) return null;
  const dataAcquisitionForm = device.fields.data ? {
    name: 'Data Acquisition',
    configs: {
      send1: {
        name: 'Send to Controller 1',
        type: 'checkbox',
        var: 'TaskDeviceSendData[0]',
        if: 'controllers[0].enabled'
      },
      send2: {
        name: 'Send to Controller 2',
        type: 'checkbox',
        var: 'TaskDeviceSendData[1]',
        if: 'controllers[1].enabled'
      },
      send3: {
        name: 'Send to Controller 3',
        type: 'checkbox',
        var: 'TaskDeviceSendData[2]',
        if: 'controllers[2].enabled'
      },
      idx1: {
        name: 'IDX1',
        type: 'number',
        var: 'TaskDeviceID[0]',
        if: 'controllers[0].enabled'
      },
      idx2: {
        name: 'IDX2',
        type: 'number',
        var: 'TaskDeviceID[1]',
        if: 'controllers[1].enabled'
      },
      idx3: {
        name: 'IDX3',
        type: 'number',
        var: 'TaskDeviceID[2]',
        if: 'controllers[2].enabled'
      },
      interval: {
        name: 'Interval',
        type: 'number',
        var: 'interval'
      }
    }
  } : {};
  return {
    groups: {
      settings: {
        name: 'Device Settings',
        configs: {
          device: {
            name: 'Device',
            type: 'select',
            var: 'device',
            options: _devices__WEBPACK_IMPORTED_MODULE_3__["devices"]
          },
          ...baseFields
        }
      },
      ...device.fields,
      data: dataAcquisitionForm,
      values: {
        name: 'Values',
        configs: { ...[...new Array(device.fields.vals || 0)].reduce((acc, x, i) => {
            acc[`value${i}`] = [{
              name: `Name ${i + 1}`,
              var: `settings.values[${i}].name`,
              type: 'string'
            }, {
              name: `Formula ${i + 1}`,
              var: `settings.values[${i}].formula`,
              type: 'string'
            }, {
              name: `Decimals ${i + 1}`,
              var: `extra.decimals[${i}]`,
              type: 'number'
            }];
            return acc;
          }, {})
        }
      }
    }
  };
};

const setDefaultConfig = (type, config) => {
  const device = _devices__WEBPACK_IMPORTED_MODULE_3__["devices"].find(d => d.value === parseInt(type));
  Object.keys(device.fields).forEach(groupKey => {
    const group = device.fields[groupKey];
    if (!group.configs) return;
    Object.keys(group.configs).forEach(configKey => {
      const cfg = group.configs[configKey];
      const key = cfg.var || `${groupKey}.${configKey}`;
      let val = 0;
      if (cfg.type === 'string') val = '';else if (cfg.type === 'ip') val = [0, 0, 0, 0];
      Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_4__["set"])(config, key, val);
    });
  });

  if (device.fields.defaults) {
    const defaultConfig = device.fields.defaults();
    Object.keys(defaultConfig).forEach(key => {
      const val = defaultConfig[key];
      Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_4__["set"])(config, key, val);
    });
  }
}; // todo: changing protocol needs to update:
// -- back to default (correct default)
// -- field list 


class DevicesEditPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.config = _lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].get(`tasks[${props.params[0]}]`);
    this.state = {
      device: this.config.device
    };
  }

  render(props) {
    const formConfig = getFormConfig(this.state.device);

    if (!formConfig) {
      alert('something went wrong, cant edit device');
      window.location.href = '#devices';
    }

    formConfig.groups.settings.configs.device.onChange = e => {
      this.setState({
        device: e.currentTarget.value
      });
      setDefaultConfig(e.currentTarget.value, this.config);
    };

    formConfig.onSave = values => {
      _lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].set(`tasks[${props.params[0]}]`, values);
      window.location.href = '#devices';
    };

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_components_form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      config: formConfig,
      selected: this.config
    });
  }

}

/***/ }),

/***/ "./src/pages/devices.js":
/*!******************************!*\
  !*** ./src/pages/devices.js ***!
  \******************************/
/*! exports provided: DevicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesPage", function() { return DevicesPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/settings */ "./src/lib/settings.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../devices */ "./src/devices/index.js");



class DevicesPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleEnableToggle = e => {
      _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].set(e.currentTarget.dataset.prop, e.currentTarget.checked ? 1 : 0);
    };
  }

  render(props) {
    const tasks = _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].get('tasks');
    if (!tasks) return;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, tasks.map((task, i) => {
      const editUrl = `#devices/edit/${i}`;
      const device = _devices__WEBPACK_IMPORTED_MODULE_2__["devices"].find(d => d.value === task.device);
      const deviceType = device ? device.name : '--unknown--';
      const enabledProp = `tasks[${i}].enabled`;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        class: "device"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        class: "info"
      }, i + 1, ": ", Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
        type: "checkbox",
        defaultChecked: task.enabled,
        "data-prop": enabledProp,
        onChange: this.handleEnableToggle
      }), "\xA0\xA0", task.settings.name, " [", deviceType, "] ", task.gpio1 !== 255 ? `GPIO:${task.gpio1}` : '', Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
        href: editUrl
      }, "edit")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        class: "vars"
      }));
    }));
  }

}

/***/ }),

/***/ "./src/pages/diff.js":
/*!***************************!*\
  !*** ./src/pages/diff.js ***!
  \***************************/
/*! exports provided: DiffPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffPage", function() { return DiffPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/settings */ "./src/lib/settings.js");
/* harmony import */ var _conf_config_dat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../conf/config.dat */ "./src/conf/config.dat.js");
/* harmony import */ var _lib_espeasy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/espeasy */ "./src/lib/espeasy.js");
/* harmony import */ var _lib_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/loader */ "./src/lib/loader.js");





class DiffPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.diff = _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].diff();
    this.stage = 0;

    this.calculateByteDiff = () => {
      this.data = Object(_conf_config_dat__WEBPACK_IMPORTED_MODULE_2__["saveConfig"])(false);
      this.bytediffcount = 0;
      this.bytediff = Array.from(new Uint8Array(this.data));
      this.bytediff = this.bytediff.map((byte, i) => {
        const binary = _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].binary[i];

        if (byte !== binary) {
          this.bytediffcount++;
          return `<b style='color:red'>${binary.toString(16)}:${byte.toString(16)}</b>`;
        } else return `${byte.toString(16)}`;
      });
      this.bytediff = this.bytediff.join(' ');
    };

    this.calculateByteDiff();

    this.applyChanges = () => {
      if (this.stage === 0) {
        this.diff.map(d => {
          const input = this.form.elements[d.path];

          if (!input.checked) {
            _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].set(input.name, d.val1);
          }
        });
        _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].apply();
        this.diff = _lib_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].diff();
        this.calculateByteDiff();
        this.stage = 1;
        return;
      }

      _lib_loader__WEBPACK_IMPORTED_MODULE_4__["loader"].show();
      Object(_lib_espeasy__WEBPACK_IMPORTED_MODULE_3__["storeFile"])('config.dat', this.data).then(() => {
        this.stage = 0;
        window.location.href = '#config/reboot';
      });
    };
  }

  render(props) {
    if (this.bytediff && this.stage === 1
    /*|| this.bytediffcount*/
    ) {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        dangerouslySetInnerHTML: {
          __html: this.bytediff
        }
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
        type: "button",
        onClick: this.applyChanges
      }, "APPLY (bytes: ", this.bytediffcount, ")"));
    }

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "byte diff: ", this.bytediffcount), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("form", {
      ref: ref => this.form = ref
    }, this.diff.map(change => {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("b", null, change.path), ": before: ", Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("b", null, JSON.stringify(change.val1)), " now:", Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("b", null, JSON.stringify(change.val2)), " ", Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
        name: change.path,
        type: "checkbox",
        defaultChecked: true
      }));
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      type: "button",
      onClick: this.applyChanges
    }, "APPLY")));
  }

}

/***/ }),

/***/ "./src/pages/discover.js":
/*!*******************************!*\
  !*** ./src/pages/discover.js ***!
  \*******************************/
/*! exports provided: DiscoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPage", function() { return DiscoverPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");

const devices = [{
  nr: 1,
  name: 'Senzor',
  type: 'DH11',
  vars: [{
    name: 'Temperature',
    formula: '',
    value: 21
  }, {
    name: 'Humidity',
    formula: '',
    value: 65
  }]
}, {
  nr: 1,
  name: 'Humidity',
  type: 'Linear Regulator',
  vars: [{
    name: 'Output',
    formula: '',
    value: 1
  }]
}];
class DiscoverPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      devices: []
    };

    this.scani2c = () => {
      fetch('/i2cscanner').then(r => r.json()).then(r => {
        this.setState({
          devices: r
        });
      });
    };

    this.scanwifi = () => {
      fetch('/wifiscanner').then(r => r.json()).then(r => {
        this.setState({
          devices: r
        });
      });
    };
  }

  render(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      type: "button",
      onClick: this.scani2c
    }, "Scan I2C"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      type: "button",
      onClick: this.scanwifi
    }, "Scan WiFi")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("table", null, this.state.devices.map(device => {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("tr", {
        class: "device"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("td", {
        class: "info"
      }, JSON.stringify(device)));
    })));
  }

}

/***/ }),

/***/ "./src/pages/factory_reset.js":
/*!************************************!*\
  !*** ./src/pages/factory_reset.js ***!
  \************************************/
/*! exports provided: FactoryResetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryResetPage", function() { return FactoryResetPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form */ "./src/components/form/index.js");


const formConfig = {
  onSave: vals => {
    console.log(vals);
  },
  groups: {
    keep: {
      name: 'Settings to keep',
      configs: {
        unit: {
          name: 'Keep Unit/Name',
          type: 'checkbox'
        },
        wifi: {
          name: 'Keep WiFi config',
          type: 'checkbox'
        },
        network: {
          name: 'Keep network config',
          type: 'checkbox'
        },
        ntp: {
          name: 'Keep NTP/DST config',
          type: 'checkbox'
        },
        log: {
          name: 'Keep log config',
          type: 'checkbox'
        }
      }
    },
    load: {
      name: 'Pre-defined configurations',
      configs: {
        config: {
          name: 'Pre-Defined config',
          type: 'select',
          options: [{
            name: 'default',
            value: 0
          }, {
            name: 'Sonoff Basic',
            value: 1
          }, {
            name: 'Sonoff TH1x',
            value: 2
          }, {
            name: 'Sonoff S2x',
            value: 3
          }, {
            name: 'Sonoff TouchT1',
            value: 4
          }, {
            name: 'Sonoff TouchT2',
            value: 5
          }, {
            name: 'Sonoff TouchT3',
            value: 6
          }, {
            name: 'Sonoff 4ch',
            value: 7
          }, {
            name: 'Sonoff POW',
            value: 8
          }, {
            name: 'Sonoff POW-r2',
            value: 9
          }, {
            name: 'Shelly1',
            value: 10
          }]
        }
      }
    }
  }
};
const config = {};
class FactoryResetPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render(props) {
    formConfig.onSave = config => {
      const data = new FormData();
      if (config.keep.unit) data.append('kun', 'on');
      if (config.keep.wifi) data.append('kw', 'on');
      if (config.keep.network) data.append('knet', 'on');
      if (config.keep.ntp) data.append('kntp', 'on');
      if (config.keep.log) data.append('klog', 'on');
      data.append('fdm', config.load.config);
      data.append('savepref', 'Save Preferences');
      fetch('/factoryreset', {
        method: 'POST',
        body: data
      }).then(() => {
        data.delete('savepref');
        data.append('performfactoryreset', 'Factory Reset');
        fetch('/factoryreset', {
          method: 'POST',
          body: data
        }).then(() => {
          setTimeout(() => {
            window.location.href = "#devices";
          }, 5000);
        }, e => {});
      }, e => {});
    };

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_components_form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      config: formConfig,
      selected: config
    });
  }

}

/***/ }),

/***/ "./src/pages/fs.js":
/*!*************************!*\
  !*** ./src/pages/fs.js ***!
  \*************************/
/*! exports provided: FSPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSPage", function() { return FSPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _lib_espeasy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/espeasy */ "./src/lib/espeasy.js");


class FSPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };

    this.saveForm = () => {
      Object(_lib_espeasy__WEBPACK_IMPORTED_MODULE_1__["storeFile"])(this.file.files[0]);
    };

    this.deleteFile = e => {
      const fileName = e.currentTarget.dataset.name;
      Object(_lib_espeasy__WEBPACK_IMPORTED_MODULE_1__["deleteFile"])(fileName).then(() => this.fetch());
    };
  }

  fetch() {
    fetch('/filelist_json').then(response => response.json()).then(fileList => {
      this.setState({
        files: fileList
      });
    });
  }

  render(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("form", {
      class: "pure-form pure-form-aligned"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "pure-control-group"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
      for: "file",
      class: "pure-checkbox"
    }, "File:"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
      id: "file",
      type: "file",
      ref: ref => this.file = ref
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      type: "button",
      onClick: this.saveForm
    }, "upload"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("table", {
      class: "pure-table"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("thead", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("tr", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("th", null, "File"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("th", null, "Size"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("th", null))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("tbody", null, this.state.files.map(file => {
      const url = `/${file.fileName}`;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("tr", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("td", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
        href: url
      }, file.fileName)), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("td", null, file.size), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("td", null, file.fileName.endsWith('.dat') ? null : Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
        type: "button",
        onClick: this.deleteFile,
        "data-name": file.fileName
      }, "X")));
    }))));
  }

  componentDidMount() {
    this.fetch();
  }

}

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: ControllersPage, DevicesPage, ConfigPage, ConfigAdvancedPage, pins, ConfigHardwarePage, RebootPage, LoadPage, UpdatePage, RulesPage, ToolsPage, FSPage, FactoryResetPage, DiscoverPage, protocols, ControllerEditPage, types, ControllerNotificationsPage, DevicesEditPage, DiffPage, RulesEditorPage, SetupPage, SysVarsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers */ "./src/pages/controllers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllersPage", function() { return _controllers__WEBPACK_IMPORTED_MODULE_0__["ControllersPage"]; });

/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devices */ "./src/pages/devices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicesPage", function() { return _devices__WEBPACK_IMPORTED_MODULE_1__["DevicesPage"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/pages/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigPage", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["ConfigPage"]; });

/* harmony import */ var _config_advanced__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.advanced */ "./src/pages/config.advanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigAdvancedPage", function() { return _config_advanced__WEBPACK_IMPORTED_MODULE_3__["ConfigAdvancedPage"]; });

/* harmony import */ var _config_hardware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.hardware */ "./src/pages/config.hardware.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pins", function() { return _config_hardware__WEBPACK_IMPORTED_MODULE_4__["pins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigHardwarePage", function() { return _config_hardware__WEBPACK_IMPORTED_MODULE_4__["ConfigHardwarePage"]; });

/* harmony import */ var _reboot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reboot */ "./src/pages/reboot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RebootPage", function() { return _reboot__WEBPACK_IMPORTED_MODULE_5__["RebootPage"]; });

/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./load */ "./src/pages/load.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadPage", function() { return _load__WEBPACK_IMPORTED_MODULE_6__["LoadPage"]; });

/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update */ "./src/pages/update.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePage", function() { return _update__WEBPACK_IMPORTED_MODULE_7__["UpdatePage"]; });

/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rules */ "./src/pages/rules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RulesPage", function() { return _rules__WEBPACK_IMPORTED_MODULE_8__["RulesPage"]; });

/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools */ "./src/pages/tools.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolsPage", function() { return _tools__WEBPACK_IMPORTED_MODULE_9__["ToolsPage"]; });

/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fs */ "./src/pages/fs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FSPage", function() { return _fs__WEBPACK_IMPORTED_MODULE_10__["FSPage"]; });

/* harmony import */ var _factory_reset__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./factory_reset */ "./src/pages/factory_reset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FactoryResetPage", function() { return _factory_reset__WEBPACK_IMPORTED_MODULE_11__["FactoryResetPage"]; });

/* harmony import */ var _discover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./discover */ "./src/pages/discover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscoverPage", function() { return _discover__WEBPACK_IMPORTED_MODULE_12__["DiscoverPage"]; });

/* harmony import */ var _controllers_edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controllers.edit */ "./src/pages/controllers.edit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "protocols", function() { return _controllers_edit__WEBPACK_IMPORTED_MODULE_13__["protocols"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerEditPage", function() { return _controllers_edit__WEBPACK_IMPORTED_MODULE_13__["ControllerEditPage"]; });

/* harmony import */ var _controllers_notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controllers.notifications */ "./src/pages/controllers.notifications.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "types", function() { return _controllers_notifications__WEBPACK_IMPORTED_MODULE_14__["types"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerNotificationsPage", function() { return _controllers_notifications__WEBPACK_IMPORTED_MODULE_14__["ControllerNotificationsPage"]; });

/* harmony import */ var _devices_edit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./devices.edit */ "./src/pages/devices.edit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicesEditPage", function() { return _devices_edit__WEBPACK_IMPORTED_MODULE_15__["DevicesEditPage"]; });

/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./diff */ "./src/pages/diff.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiffPage", function() { return _diff__WEBPACK_IMPORTED_MODULE_16__["DiffPage"]; });

/* harmony import */ var _rules_editor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rules.editor */ "./src/pages/rules.editor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RulesEditorPage", function() { return _rules_editor__WEBPACK_IMPORTED_MODULE_17__["RulesEditorPage"]; });

/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./setup */ "./src/pages/setup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetupPage", function() { return _setup__WEBPACK_IMPORTED_MODULE_18__["SetupPage"]; });

/* harmony import */ var _tools_sysvars__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tools.sysvars */ "./src/pages/tools.sysvars.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SysVarsPage", function() { return _tools_sysvars__WEBPACK_IMPORTED_MODULE_19__["SysVarsPage"]; });






















/***/ }),

/***/ "./src/pages/load.js":
/*!***************************!*\
  !*** ./src/pages/load.js ***!
  \***************************/
/*! exports provided: LoadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPage", function() { return LoadPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _lib_espeasy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/espeasy */ "./src/lib/espeasy.js");


class LoadPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.saveForm = () => {
      Object(_lib_espeasy__WEBPACK_IMPORTED_MODULE_1__["storeFile"])(this.file.files[0]);
    };
  }

  render(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("form", {
      class: "pure-form pure-form-aligned"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "pure-control-group"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
      for: "file",
      class: "pure-checkbox"
    }, "File:"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
      id: "file",
      type: "file",
      ref: ref => this.file = ref
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      type: "button",
      onClick: this.saveForm
    }, "upload")));
  }

}

/***/ }),

/***/ "./src/pages/reboot.js":
/*!*****************************!*\
  !*** ./src/pages/reboot.js ***!
  \*****************************/
/*! exports provided: RebootPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RebootPage", function() { return RebootPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _lib_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/loader */ "./src/lib/loader.js");


class RebootPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "ESPEasy is rebooting ... please wait a while, this page will auto refresh.");
  }

  componentDidMount() {
    _lib_loader__WEBPACK_IMPORTED_MODULE_1__["loader"].show();
    fetch('/?cmd=reboot').then(() => {
      setTimeout(() => {
        _lib_loader__WEBPACK_IMPORTED_MODULE_1__["loader"].hide();
        window.location.hash = '#devices';
        window.location.reload();
      }, 5000);
    });
  }

}

/***/ }),

/***/ "./src/pages/rules.editor.js":
/*!***********************************!*\
  !*** ./src/pages/rules.editor.js ***!
  \***********************************/
/*! exports provided: RulesEditorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesEditorPage", function() { return RulesEditorPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _lib_floweditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/floweditor */ "./src/lib/floweditor.js");
/* harmony import */ var _lib_node_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/node_definitions */ "./src/lib/node_definitions.js");
/* harmony import */ var _lib_espeasy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/espeasy */ "./src/lib/espeasy.js");




class RulesEditorPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.nodes = _lib_node_definitions__WEBPACK_IMPORTED_MODULE_2__["nodes"];
  }

  render(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "editor",
      ref: ref => this.element = ref
    });
  }

  componentDidMount() {
    Object(_lib_espeasy__WEBPACK_IMPORTED_MODULE_3__["getConfigNodes"])().then(out => {
      out.nodes.forEach(device => _lib_node_definitions__WEBPACK_IMPORTED_MODULE_2__["nodes"].unshift(device));
      const ifElseNode = _lib_node_definitions__WEBPACK_IMPORTED_MODULE_2__["nodes"].find(node => node.type === 'if/else');

      if (!ifElseNode.config[0].loaded) {
        out.vars.forEach(v => ifElseNode.config[0].values.push(v));
        ifElseNode.config[0].loaded = true;
      }

      this.chart = new _lib_floweditor__WEBPACK_IMPORTED_MODULE_1__["FlowEditor"](this.element, _lib_node_definitions__WEBPACK_IMPORTED_MODULE_2__["nodes"], {
        onSave: (config, rules) => {
          Object(_lib_espeasy__WEBPACK_IMPORTED_MODULE_3__["storeRuleConfig"])(config);
          Object(_lib_espeasy__WEBPACK_IMPORTED_MODULE_3__["storeRule"])(rules);
        }
      });
      Object(_lib_espeasy__WEBPACK_IMPORTED_MODULE_3__["loadRuleConfig"])().then(config => {
        this.chart.loadConfig(config);
      });
    });
  }

}

/***/ }),

/***/ "./src/pages/rules.js":
/*!****************************!*\
  !*** ./src/pages/rules.js ***!
  \****************************/
/*! exports provided: RulesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesPage", function() { return RulesPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");

const rules = [{
  name: 'Rule 1',
  file: 'rules1.txt',
  index: 1
}, {
  name: 'Rule 2',
  file: 'rules2.txt',
  index: 2
}, {
  name: 'Rule 3',
  file: 'rules3.txt',
  index: 3
}, {
  name: 'Rule 4',
  file: 'rules4.txt',
  index: 4
}];
class RulesPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      selected: rules[0]
    };

    this.selectionChanged = e => {
      this.setState({
        selected: rules[e.currentTarget.value]
      });
    };

    this.saveRule = () => {
      const data = new FormData();
      data.append('set', this.state.selected.index);
      data.append('rules', this.text.value);
      fetch('/rules', {
        method: 'POST',
        body: data
      }).then(res => {
        console.log('succesfully saved');
        console.log(res.text());
      });
    };

    this.fetch();
  }

  render(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("select", {
      onChange: this.selectionChanged
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
      value: "0"
    }, "Rule 1"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
      value: "1"
    }, "Rule 2"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
      value: "2"
    }, "Rule 3"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
      value: "3"
    }, "Rule 4"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("form", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("textarea", {
      style: "width: 100%; height: 400px",
      ref: ref => this.text = ref
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      type: "button",
      onClick: this.saveRule
    }, "Save"))));
  }

  async fetch() {
    const text = await fetch(this.state.selected.file).then(response => response.text());
    this.text.value = text;
  }

  async componentDidUpdate() {
    this.fetch();
  }

}

/***/ }),

/***/ "./src/pages/setup.js":
/*!****************************!*\
  !*** ./src/pages/setup.js ***!
  \****************************/
/*! exports provided: SetupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupPage", function() { return SetupPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form */ "./src/components/form/index.js");
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/settings */ "./src/lib/settings.js");
/* harmony import */ var _lib_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/loader */ "./src/lib/loader.js");




const formConfig = {
  groups: {
    wifi: {
      name: 'WiFi',
      configs: {
        ssid: {
          name: 'SSID',
          type: 'select',
          options: [],
          var: 'security[0].WifiSSID'
        },
        passwd: {
          name: 'Password',
          type: 'password',
          var: 'security[0].WifiKey'
        }
      }
    }
  }
};
class SetupPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      devices: []
    };
    _lib_loader__WEBPACK_IMPORTED_MODULE_3__["loader"].show();

    this.save = () => {
      _lib_loader__WEBPACK_IMPORTED_MODULE_3__["loader"].show();
      const data = new FormData();
      data.append('ssid', this.config.security[0].WifiSSID);
      data.append('pass', this.config.security[0].WifiKey);
      fetch('/setup', {
        method: 'POST',
        data
      }).then(() => {
        setTimeout(() => {
          _lib_loader__WEBPACK_IMPORTED_MODULE_3__["loader"].hide();
          window.location.href = '/';
        }, 5000);
      });
    };
  }

  render(props) {
    formConfig.groups.wifi.configs.ssid.options = this.state.devices.map(device => ({
      name: device.ssid,
      value: device.ssd
    }));
    const config = _lib_settings__WEBPACK_IMPORTED_MODULE_2__["settings"].get('config');
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_components_form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      config: formConfig,
      selected: config
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      type: "button",
      onClick: this.save
    }, "CONTINUE"));
  }

  componentDidMount() {
    fetch('/wifiscanner').then(r => r.json()).then(r => {
      this.setState({
        devices: r
      });
      _lib_loader__WEBPACK_IMPORTED_MODULE_3__["loader"].hide();
    });
  }

}

/***/ }),

/***/ "./src/pages/tools.js":
/*!****************************!*\
  !*** ./src/pages/tools.js ***!
  \****************************/
/*! exports provided: ToolsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsPage", function() { return ToolsPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");

class ToolsPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.history = '';

    this.sendCommand = e => {
      fetch(`/control?cmd=${this.cmd.value}`).then(response => response.text()).then(response => {
        this.cmdOutput.value = response;
      });
    };
  }

  fetch() {
    fetch('/logjson').then(response => response.json()).then(response => {
      response.Log.Entries.map(log => {
        this.history += `<div class="log_level${log.level}"><span class="date">${new Date(log.timestamp).toLocaleTimeString()}</span><span class="value">${log.text}</span></div>`;
        this.log.innerHTML = this.history;

        if (true) {
          this.log.scrollTop = this.log.scrollHeight;
        }
      });
    });
  }

  render(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      style: "width: 100%; height: 200px; overflow-y: scroll;",
      ref: ref => this.log = ref
    }, "loading logs ..."), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Command: ", Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
      type: "text",
      ref: ref => this.cmd = ref
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      type: "button",
      onClick: this.sendCommand
    }, "send")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("textarea", {
      style: "width: 100%; height: 200px",
      ref: ref => this.cmdOutput = ref
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.fetch();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

}

/***/ }),

/***/ "./src/pages/tools.sysvars.js":
/*!************************************!*\
  !*** ./src/pages/tools.sysvars.js ***!
  \************************************/
/*! exports provided: SysVarsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysVarsPage", function() { return SysVarsPage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");

class SysVarsPage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      device: props.params[0],
      vars: {}
    };
  }

  fetch() {
    fetch(`/sysinfo_json`).then(response => response.json()).then(vars => {
      this.setState({
        vars
      });
    });
  }

  render(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("form", {
      class: "pure-form pure-form-aligned"
    }, Object.keys(this.state.vars).map(v => {
      const value = this.state.vars[v];
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("fieldset", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", null, v), Object.keys(value).map((v1, i) => {
        const value1 = value[v1];
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "pure-control-group"
        }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
          class: "pure-checkbox"
        }, v1), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
          readOnly: true,
          type: "text",
          value: value1
        }));
      }));
    }));
  }

  componentDidMount() {
    this.fetch();
  }

}

/***/ }),

/***/ "./src/pages/update.js":
/*!*****************************!*\
  !*** ./src/pages/update.js ***!
  \*****************************/
/*! exports provided: UpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePage", function() { return UpdatePage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _lib_espeasy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/espeasy */ "./src/lib/espeasy.js");
/* harmony import */ var _lib_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/loader */ "./src/lib/loader.js");



class UpdatePage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };

    this.saveForm = () => {
      _lib_loader__WEBPACK_IMPORTED_MODULE_2__["loader"].show();
      const data = new FormData();
      data.append('file', this.file.files[0]);
      data.append('user', 'hubot');
      Object(_lib_espeasy__WEBPACK_IMPORTED_MODULE_1__["fetchProgress"])('/update', {
        method: 'POST',
        body: data,
        onProgress: e => {
          const perc = 100 * e.loaded / e.total;
          this.setState({
            progress: perc
          });
        }
      }).then(() => {
        window.location.href = '#config/reboot';
      });
    };
  }

  render(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("form", {
      class: "pure-form pure-form-aligned"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "pure-control-group"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
      for: "file",
      class: "pure-checkbox"
    }, "Firmware:"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
      id: "file",
      type: "file",
      ref: ref => this.file = ref
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      type: "button",
      onClick: this.saveForm
    }, "upload"), this.state.progress ? Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, " ", Math.round(this.state.progress), "%") : null));
  }

}

/***/ })

/******/ });
//# sourceMappingURL=app.js.map