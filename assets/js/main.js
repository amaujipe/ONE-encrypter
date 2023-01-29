// Getting all the necessary elements from the HTML
const textToEncrypt     = document.querySelector('#textToEncrypt');
const encryptedText     = document.querySelector('#encryptedText');
const encryptButton     = document.querySelector('#encryptButton');
const decryptButton     = document.querySelector('#decryptButton');
const copyButton        = document.querySelector('#copyButton');
const asideMessage      = document.querySelector('#asideMessage');
const asideNoMessage    = document.querySelector('#asideNoMessage');

// Autoheight for the textarea
textToEncrypt.addEventListener('keyup', function(event){
    textToEncrypt.style.height = 'auto';
    let scHeight = event.target.scrollHeight;
    textToEncrypt.style.height = `${scHeight}px`;
});

// Encrypting text
encryptButton.addEventListener('click', function(event){
    event.preventDefault();
    encryptedText.textContent = transformText('encrypt');
});

// Decrypt text
decryptButton.addEventListener('click', function(event){
    event.preventDefault();
    encryptedText.textContent = transformText('decrypt');
});

// Copy text to clipboard from copyButton
copyButton.addEventListener('click', function(){
    navigator.clipboard.writeText(encryptedText.textContent).then(function(){
        copyButton.textContent = 'Copiado';
        copyButton.classList.remove('button--secondary');
        copyButton.classList.add('button--primary');
        setTimeout(function(){
            copyButton.textContent = 'Copiar';
            copyButton.classList.remove('button--primary');
            copyButton.classList.add('button--secondary');
        }, 2000);
    });
});