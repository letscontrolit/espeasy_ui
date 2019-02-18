### developing

1. you will need `nodejs` and `git`
2. 
```
git clone https://github.com/ppisljar/espeasy_new_ui
cd espeasy_new_ui
npm install
npm start
```

3. upload `build/index.dev.html` to espeasy

4. naviate to `http://esp-easy-ip/index.dev.htm`

### installation

upload `build/index.html` to espeasy

### adding plugins

## devices

To add new devices follow this steps:

1) create a new file inside `/src/devices` named `XX_PluginName.js` where `XX` is your plugin number. For example `1_input_switch.js`
note: its best if you just copy existing file (for example copy `1_input_switch.js` into `103_your_plugin_name.js`)

2) open your file and add correct form information. If you copied an existing file make sure to rename the export (line 10 in `1_input_switch.js`) to your plugins
for example change `export const inputSwitch = {` to `export const yourPluginName = {` 

3) correctly update the form settings. lets look at simplified `1_input_switch.js`:

```
import { pins } from './_defs';             // import list of pins, so we can fill it to the GPIO dropdown
const switchType = [                        // defines switchType array, with two entries. We will fill this to Switch Type dropdown
    { name: 'switch', value: 0 },
    { name: 'dimmer', value: 3 },
]

export const inputSwitch = {                // definition of our form
    defaults: () => ({                      // each form can define default values
        gpio1: 255,
        interval: 60,
        'configs_float[1]': 1000,           // if name contains weird charracters wrap it in string
        'configs_float[2]': 1000,
        'settings.values[0].name': 'Switch',// default name of first output variable
    }),
    sensor: {                               // each form can define multiple groups of configuration
        name: 'Sensor',                     // name of the group
        configs: {                          // options in this group
            pullup: { name: 'Internal PullUp', type: 'checkbox', var: 'pin1pullup' },                       // first option of type checkbox
            gpio: { name: 'GPIO', type: 'select', options: pins, var: 'gpio1' },                            // second option of type select (dropdown)
            switch_type: { name: 'Switch Type', type: 'select', options: switchType, var: 'configs[0]'  },
            send_boot_state: { name: 'Send Boot State', type: 'checkbox', var: 'configs[3]'  },
        }
    },
    advanced: {                             // second group of options
        name: 'Advanced event management',
        configs: {
            longpress_interval: { name: 'Longpress min interval (ms)', min: 1000, max: 5000, type: 'number',  var: 'configs_float[2]' },
            safe_button: { name: 'Use safe button', type: 'checkbox', var: 'configs_float[3]' },
        }
    },
    data: true,                             // settings `data` to true will show 'send to controller' settings
    vals: 1,                                // number of output values this device has
}
```

lets look into above in more detail.

Each form can define multiple groups of ouptions. Each group has a name and a list of options. First option from above looks like this:
```
pullup: { name: 'Internal PullUp', type: 'checkbox', var: 'pin1pullup' },
^       ^
ID      Option object
```

This is the list of `Option object` properties:
- name: name of the option (as shown in form)
- type: type of the option
> Possible types:
>  - string: renders text box input
>  - number: renders number input
>  - select: renders dropdown. `options` property must be provided and must be an array of objects with property `name` and `value`
>  - checkbox: renders checkbox
>  - password: renders password input
>  - button: renders button
- if: [optional] name of a variable that will be evaluated, if false the option will not show
- var: [optional] name of the variable to read/write

ID of option defines which variable the option represents. For example if option with id `pullup` is in the group with id `sensor`, then by default the variable to read/write that option would be `task[taskId].sensor.pullup`. But if option has a var property, that variable will be used instead. In above case instead of using `task[taskId].sensor.pullup` we use `task[taskId].pin1pullup

List of commonly used variables and their arduino code counterpart:
- `pin1pullup`: `Device[deviceCount].PullUpOption`
- `pin1inversed`: `Device[deviceCount].InverseLogicOption`
- `gpio1`: `CONFIG_PIN1` (same for gpio2, gpio3)
- `port`: `CONFIG_PORT`
- `configs[i]`: `PCONFIG(i)`
- `configs_long[i]`: `PCONFIG_LONG(i)`
- `configs_float[i]`: `PCONFIG_FLOAT(i)`
- `extra.plugin_config[i]`: `ExtraTaskSettings.TaskDevicePluginConfig[i]`
- `extra.plugin_config_long[i]`: `ExtraTaskSettings.TaskDevicePluginConfigLong[i]`


4) now that your file is complete, you need to import it in `index.js` (in `/src/devices/` folder)
you will need to add a line like this `import { yourPluginName } from './103_your_plugin_name';` near the top, using the name you exported inside {} and pointing to your file name (without .js extension)
before the last line insert something like `{ name: 'My Plugin Name', value: 103, fields: yourPluginName },`, where name is the name as shown in UI, value is your plugin id number and for fields pass the imported object.

5) save all files and from project root run `npm run build`, which will build new files for you in `/build` folder. Its time to test!