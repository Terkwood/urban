Urban
===

A Deno wrapper for the UrbanDictionary API

## Usage


```js

import { define, vote, defid, random } from './mod.js';

console.log(await random());
console.log(await define('jeff'));
console.log(await vote(15020880, 'up'));
console.log(await defid(15020880));

```

