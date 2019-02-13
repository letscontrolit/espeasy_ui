import { get, set } from './helpers';

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
            return (this.bitbyte >> this.bitbytepos++) & 1;
        } else {
            this.bitbyte = val ? (this.bitbyte | (1 << this.bitbytepos++)) : (this.bitbyte & ~(1 << this.bitbytepos++));
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
        const res =  write ? this.view[`set${fn}`](this.offset, val, true) : this.view[`get${fn}`](this.offset, true);
        this.offset += 2;
        return res;
    }

    int32(signed = false, write = false, val) {
        this.pad(4);
        let fn = signed ? 'Int32' : 'Uint32';
        const res =  write ? this.view[`set${fn}`](this.offset, val, true) : this.view[`get${fn}`](this.offset, true);
        this.offset += 4;
        return res;
    }
    float(signed = false, write = false, val) {
        this.pad(4);
        const res =  write ? this.view.setFloat32(this.offset, val, true) : this.view.getFloat32(this.offset, true);
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

export const parseConfig = (data, config, start) => {
    const p = new DataParser(data);
    if (start) p.offset = start;
    const result = {};
    config.map(value => {
        const prop = value.length ? value.length : value.signed;
        set(result, value.prop, p[value.type](prop, value.signed));
    });
    return result;
}

export const writeConfig = (buffer, data, config, start) => {
    const p = new DataParser(buffer);
    if (start) p.offset = start;
    config.map(value => {
        const val = get(data, value.prop);
        if (value.length) {
            p[value.type](value.length, value.signed, true, val);
        } else {
            p[value.type](value.signed, true, val);
        }
    });
}