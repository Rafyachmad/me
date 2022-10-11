let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");

function generatePassword(len) {
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const upper = "ABCDEFGHIJKLMNOPQQRSTUVWXYZ"
    const numeric = "1234567890"
    const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`"

    const data = lower + upper + numeric + symbol

    const inputLimit = 0;
    let generator = ' ';

    // Proses if / validation
    if (inputLimit <= 1) {
        for (let index = 0; index < len; index++) {
            generator += data[~~(Math.random() * data.length)];
        }
        return generator
    }

}

function getPassword() {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
}
