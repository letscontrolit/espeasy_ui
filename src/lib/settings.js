import { get, set } from 'lodash';

class Settings {
    init(settings) {
        this.settings = settings;
    }

    get(prop) {
        return get(this.settings, prop);
    }

    set(prop, value) {
        return set(this.settings, prop, value);
    }
}

export const settings = new Settings();