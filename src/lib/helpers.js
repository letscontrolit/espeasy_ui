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

export { get, set, merge, getKeys }