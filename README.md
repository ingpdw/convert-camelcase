# convert-camelcase

Converts object keys to camelCase


## Install

```
$npm install convert-camelcase
```

## Usage

```
import CamelCase from 'convert-camelcase';
let camelCase = new CamelCase;

camelCase.convert({my_name: 'pdw'})
//{myName: 'pdw'}

camelCase.convert({my_name: 'pdw', my_arr:{arr_one: 1, arr_two: 2}})
//{myName: 'pdw', myArr: {arrOne: 1, arrTwo: 2}};

```

## test
$npm test

## License
© 2015 ingpdw. MIT License
