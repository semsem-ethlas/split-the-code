Splitter = require('keysplitter');
splitter = new Splitter();
 
// edit originalKey with your private key
originalKey = '3a1076bf45ab87712ad64ccb3b10217737f7faacbf2872e88fdd9a537d8fe266'; 
keys = splitter.splitPrivateKey(originalKey);
// convert Buffer keys to Strings
strKeys = keys.map((key) => { return key.toString('hex') });
console.log(strKeys);
// [ '010b218e0fee10c72fdb7b43c20bd0a56970225b5f50fd2aa60b0fcee550a48f693467f85f0ba8e574e2d501c562f6ed',
//   '120bc4f5f571d3b89ececb47770a7d266a8d3edc14bb859e0b1b9e7951556ca8aa51958e0ba8e574e2d501c562f6ed',
//   '020b31b893cba77e86b44820a10a79406aa978867c4a80900b1b9e7951556ca8aa51958e0fcee550a48f693467f85f' ]
 
// now you can restore the private key using any 2 of the keys. 
let restoredKey = splitter.restorePrivateKey(strKeys[0], strKeys[1]);  // (or just pass in the 'keys' Buffer objects)
console.log(restoredKey);
// true