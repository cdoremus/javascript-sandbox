
/**
 * Transform an array of objects into an object whose key 
 * is the code property of each object
*/
arr = [{id:1, code: 'one'}, {id:2, code: 'two'}];
newobj = arr.reduce((accum, item) => ({...accum, [item.code]: p }), {} )
console.log(`New object: ${newobj}`);