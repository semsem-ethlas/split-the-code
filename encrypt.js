const encoder = new TextEncoder();
 

function encodeIntoAtPosition(string, u8array, position) {
   return encoder.encodeInto(
     string,
     position ? u8array.subarray(position | 0) : u8array
   );
 }

const u8array = new Uint8Array(126);
encodeIntoAtPosition("https://dp.st.dev.bzoDgaqa8GBg7VQU2iMWZdLZYMgMGkC9TOHOGNRwSAK@api.doppler.com/v3/configs/config/secrets/download?format=json", u8array, 2);
console.log(u8array.join()); // 0,0,104,101,108,108,111,0
    let decoder = new TextDecoder();
let uint8Array = new Uint8Array([104,116,116,112,115,58,47,47,100,112,46,115,116,46,100,101,118,46,98,122,111,68,103,97,113,97,56,71,66,103,55,86,81,85,50,105,77,87,90,100,76,90,89,77,103,77,71,107,67,57,84,79,72,79,71,78,82,119,83,65,75,64,97,112,105,46,100,111,112,112,108,101,114,46,99,111,109,47,118,51,47,99,111,110,102,105,103,115,47,99,111,110,102,105,103,47,115,101,99,114,101,116,115,47,100,111,119,110,108,111,97,100,63,102,111,114,109,97,116,61,106,115,111,110]);
console.log(decoder.decode(uint8Array));