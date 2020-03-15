function handleSubmit(event) {
    event.preventDefault()
        // check what text was put into the form field
    const formText = document.getElementById('name').value
    if (document.getElementById('name').value === '') {
        alert('the URL is empty - you have to Enter a Valid URL');
        console.log('an empty URL was submited')
    } else {
        Client.checktheURL(formText)
    }

    fetch('http://localhost:8080/checkurl', {
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
        .else(error)(
            error.status
        )

}

export { handleSubmit }