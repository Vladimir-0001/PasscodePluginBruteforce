const crypto = require('crypto');

let salt = ""
let hash = ""
const hashCode = (string) => {
    let iterations = 10000;
    let hash = crypto.pbkdf2Sync(string, salt, iterations, 512, 'sha512').toString('hex');

    return hash;
};

for (let i = 0; i < 10000; i++) {
    if (hashCode(i.toString()) == hash.toString()){
        console.log("The passcode is : "+i);
    }
    
}
