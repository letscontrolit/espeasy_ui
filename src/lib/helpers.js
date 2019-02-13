import get from 'lodash/get';
import set from 'lodash/set';
import merge from 'lodash/merge'

const getKeys = object => {
    const keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

const INFINITY = 1 / 0

function isKey(value, object) {
    if (Array.isArray(value)) {
      return false
    }
    const type = typeof value
    if (type == 'number' || type == 'boolean' || value == null || isSymbol(value)) {
      return true
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object))
  }

  
function castPath(value, object) {
    if (Array.isArray(value)) {
      return value
    }
    return isKey(value, object) ? [value] : stringToPath(value)
}

  

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value
  }
  const result = `${value}`
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result
}


function baseGet(object, path) {
    path = castPath(path, object)
  
    let index = 0
    const length = path.length
  
    while (object != null && index < length) {
      object = object[toKey(path[index++])]
    }
    return (index && index == length) ? object : undefined
}

function get(object, path, defaultValue) {
    const result = object == null ? undefined : baseGet(object, path)
    return result === undefined ? defaultValue : result
}

function set(object, path, value) {
    return object == null ? object : baseSet(object, path, value)
}

function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return
    }
    baseFor(source, (srcValue, key) => {
      if (isObject(srcValue)) {
        stack || (stack = new Stack)
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack)
      }
      else {
        let newValue = customizer
          ? customizer(object[key], srcValue, `${key}`, object, source, stack)
          : undefined
  
        if (newValue === undefined) {
          newValue = srcValue
        }
        assignMergeValue(object, key, newValue)
      }
    }, keysIn)
}

const merge = createAssigner((object, source, srcIndex) => {
    baseMerge(object, source, srcIndex)
})

export { get, set, merge, getKeys }