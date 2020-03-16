function checktheURL(inputText) {
    if (!inputText || inputText.lenght == 0) {
        return "the URL is empty - you have to Enter a Valid URL";
    }
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(inputText)) {
        console.log("Running checkForName URL is Valid --  " + inputText);
        return '';
    } else {
        const errorMsg = "URL is not valid please enter a Valid URL";
        return errorMsg;
    }
}

export { checktheURL }; // i need this for the project
//module.exports = checktheURL; //i need it for the unit-tests