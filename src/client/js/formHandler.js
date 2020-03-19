function handleSubmit(event) {
    event.preventDefault()
    const formText = document.getElementById('url').value;
    const errormessage = Client.checktheURL(formText)
    document.getElementById("err").innerHTML = '';
    if (errormessage) {
        document.getElementById("err").innerHTML = errormessage
        return
    }

    fetch('http://localhost:8081/checkurl', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formText }),
    })

    .then(res => res.json())
        .then(function(jsonresults) {
            document.getElementById('results').innerHTML = jsonresults.text;
            document.getElementById('polarity').innerHTML = jsonresults.polarity;
            document.getElementById('polarity_confidence').innerHTML = (jsonresults.polarity_confidence.toFixed(2)) * 100;
            document.getElementById('subjectivity_confidence').innerHTML = (jsonresults.subjectivity_confidence.toFixed(2)) * 100;

        })


}
export { handleSubmit }