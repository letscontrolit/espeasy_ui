import get from 'lodash/get';
import set from 'lodash/set';

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
}

export { get, set, getKeys }