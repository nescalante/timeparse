# Time Parse

> Time parse utility

## Install

Using `npm`

```
npm install timeparse
```

## Usage

```js
var timeparse = require('timeparse');
var result = timeparse('2m2s'); // 122000 (2 minutes and 2 seconds in milliseconds)
var result2 = timeparse('3m43s', 's') //223 (3 minutes, 43 seconds in seconds)
```

## Units

- **w**: weeks
- **d**: days
- **h**: hours
- **m**: minutes
- **s**: seconds
- **ms**: milliseconds
- **μs**: microseconds

## License

MIT
