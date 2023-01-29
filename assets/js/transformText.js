// This function has the rules to encrypt / decrypt the text
function transformText (action, text = textToEncrypt.value){

    const encryptionPairs = {
        'e' : 'enter',
        'i' : 'imes',
        'a' : 'ai',
        'o' : 'ober',
        'u' : 'ufat'
    };

    if(encryptedText.textContent.length > 0) {

        asideMessage.classList.remove('invisible');
        asideNoMessage.classList.add('invisible');

        for(let key in encryptionPairs) {
            switch(action) {
                case 'encrypt': 
                    text = text.replaceAll(key, encryptionPairs[key]);
                    break;
                case 'decrypt':
                    text = text.replaceAll(encryptionPairs[key], key);
                    break;
            }
        }
    }

    return text;
}