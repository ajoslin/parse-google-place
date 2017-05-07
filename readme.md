# parse-google-place [![Build Status](https://travis-ci.org/ajoslin/parse-google-place.svg?branch=master)](https://travis-ci.org/ajoslin/parse-google-place)

> Parse a google place into a normal US address format


## Install

```
$ npm install --save parse-google-place
```

## Usage

```js
var parseGooglePlace = require('parse-google-place')

parseGooglePlace(googlePlace)
//=> address
```

## API

#### `parseGooglePlace(place)` -> `address`

##### place

*Required*
Type: `object`

A place from the google places API. See ./fixture.js for an example.

##### Returns address

"Address" is an object with the following keys:

- streetNumber
- streetName
- address
- city
- county
- stateShort
- stateLong
- countryShort
- countryLong
- zipCode

Any properties not found in the place result will default to empty string.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
