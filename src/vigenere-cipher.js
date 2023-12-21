const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    return this.directMachineActive(message, key, 1);
  }

  decrypt(message, key) {
    return this.directMachineActive(message, key, 0);
  }

  directMachineActive(message, key, encrypt) {

    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();
    let indexKey = 0;
    let result = '';

    for (let i = 0; i < message.length; i += 1) {

      const charCode = message.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        if (encrypt === 1) {
          result += String.fromCharCode(((charCode + key.charCodeAt(indexKey % key.length)) % 26) + 65);
        }

        if (encrypt === 0) {
          result += String.fromCharCode(((charCode - key.charCodeAt(indexKey % key.length) + 26) % 26) + 65);
        }
        indexKey += 1;
      } else {
        result += message[i];
      }
    }
    if(this.direct) {
      return result;
    } else{
      return result.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
