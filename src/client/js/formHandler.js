function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log("::: Text was Submitted :::" + formText)

    fetch('http://localhost:8080/checkurl', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formText }),
        })
        .then(res => res.json())
        .then(function(res) {
            console.log("response:" + res.polarity_confidence);
            document.getElementById('results').innerHTML = res.polarity_confidence;
        })
}

export { handleSubmit }