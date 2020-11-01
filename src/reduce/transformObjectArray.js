
/**
 * Use array.reduce() to transform an array 
 * of objects into an object whose key is a
 * is a property of each object ('code' in this example)
 * 
 * Usage node/deno:
 * node transformObjectArray.js
 * deno run transformObjectArray.js 
 */
const prop = 'code';
const arr = [{id:1, [`${prop}`]: 'one'}, {id:2, code: 'two'}];
const newobj = arr.reduce((accum, item) => ({...accum, [item[`${prop}`]]: item }), {} )
console.log('New object: ', newobj);
// { one: { id: 1, code: 'one' }, two: { id: 2, code: 'two' } }
