import  MD5 from './md5';
const privateKey ="457456a87fee270cdd14a66fba297583c68cc0ae",
    publicKey ="1861cffafdb4e3be24458342cfc915e9";
const ts = Date.now();

export  const hash = MD5(ts + privateKey + publicKey);
console.log(hash);
// export default hash;