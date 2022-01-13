### config handling

espeasy uses binary config file with fixed offsets for its configuration. We take that file and map it into editor state (think of it as mapping the binary file to json). In the editor you are then manipulating this state and when saving we convert it back into binary format and upload it to esp.

#### parser

'lib/parser.js' contains parser class definition which contains utilities to process the binary file and convert to/from json
- `parseConfig = (data: Buffer, config: ParserConfig, startOffset: int) => EditorState` parseConfig function takes the binary data buffer, parser configuration and the initial offset. On completion it returns editorstate object pupulated with configuration parsed from binary buffer.
- `writeConfig = (buffer: Buffer, data: EditorState, config: ParserConfig, startOffset: int) => void` writeConfig function takes binary data buffer, configuration object and start offset. It converts the configuration object back into binary format and updates the passed in buffer.
- `DataParser` class contains helper methods for parsing different kind of c++ types

#### parser configuration

For a sample parser configuration its best to look at the current `config.dat.js` file
- `configDatParseConfig` is configuration for the main `config.dat` file. It lists all the types in the config.dat file and to which property in the EditorState they should be mapped.

```$xslt
[
    { prop: 'status.PID', type: 'int32' },
    { prop: 'status.version', type: 'int32' },
    { prop: 'status.build', type: 'int16' },
    { prop: 'config.IP.ip', type: 'bytes', length: 4 },
    { prop: 'config.IP.gw', type: 'bytes', length: 4 }, 
    { prop: 'config.IP.subnet', type: 'bytes', length: 4 },
    { prop: 'config.IP.dns', type: 'bytes', length: 4 },
    { prop: 'config.experimental.ip_octet', type: 'byte' },
    ...
``` 

this will result the binary file to be parsed into the following object:

```$xslt
{
    status: {
        PID: 1231345325,
        version: 1223,
        build: 12323,
    },
    config: {
        IP: {
            ip: [80, 0, 0, 1],
            gw: [255, 255, 255, 255],
            subnet: [255, 255, 255, 0],
            dns: [80, 0, 0, 1],
        },
        experimental: {
            ip_octet: 23
        }
        ....
    }
    ...
}
```

this object can then be accessed inside the editor thru the settings service
```$xslt
const ip = settings.get('config.IP.ip');
```


- as `config.dat` contains main configuration and then 12 extended task settings and 3 controller settings we have `TaskSettings` and `ControllerSettings` defined as well
- `saveConfig` function does all of the saving (so taking Config, 12 TaskConfigs and 3 ControlerConfigs and puting them into a single buffer) it also can update the `notifications.dat` and `security.dat`
- `loadConfig` function does all of the loading (so it parses config.dat into main config, 12 task configs and 3 controller configs)

#### loading different versions of `config.dat`

if `config.dat` would to change between versions of espeasy, best thing to do would be to copy `config.dat.js` into `config.dat.version.js` where we would implement the necesarry changes. Same would be true for implementing loading/saving esp32 version of configuration.

as `config.dat` is always parsed to EditorState, no matter which version of `config.dat.version.js` you use and EditorState can be converted to `config.dat` by any `config.dat.version.js` it means we can easily load one version and save it as a different version.
- when saving a config.dat to espeasy we should query espeasy for version and use approprate parser config for saving the file
- when loading config.dat we should also check version to use the correct parser config for loading
- when downloading a configuration we should download `.json`, not the binary. this means we could send this json to somebody using different version of espeasy, he can load it and store without any problems, as appropriate parser will be used for generating .dat file for his espeasy version.