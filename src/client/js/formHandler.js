const handleSubmit = async (event) => {
    event.preventDefault()

    let url = document.getElementById('url').value

    if (Client.validURL(url)) {
        console.log(url)
        fetch('http://localhost:8080/article-data', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({url})}).then( res =>  res.json())
        .then( res => {
        updateResult(res)
        })

    } else {
        alert("Sorry, I couldn't analyze the link you requested.")
    }
}

function updateResult (res) {
        console.log('API sentiment data:', res)
        document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
        document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`
        document.getElementById('irony').innerHTML = `Irony: ${res.irony}`
}

export { handleSubmit }
