let numbers = "0123456789";
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let specialChar = "!@#$%^&*()-_=+<>?/";

let otp = () => {
    // Generate one random character from each category
    let randomNum = numbers[Math.floor(Math.random() * numbers.length)];
    let randomLetter = letters[Math.floor(Math.random() * letters.length)];
    let randomSpChar = specialChar[Math.floor(Math.random() * specialChar.length)];

    // Combine all sets for the fourth random character
    let allChar = numbers + letters + specialChar;
    let randomAllChar = allChar[Math.floor(Math.random() * allChar.length)];

    // Manually assemble the OTP
    let otpArray = [randomNum, randomLetter, randomSpChar, randomAllChar];
    let otpCode = "";

    // Pick characters randomly from `otpArray` until it’s empty
    while (otpArray.length > 0) {
        let randomIndex = Math.floor(Math.random() * otpArray.length);
        otpCode += otpArray[randomIndex]; 
        otpArray.splice(randomIndex, 1); // Remove used character
    }

    // Display the OTP in the HTML
    document.querySelector('#generate').innerHTML = otpCode;
};
