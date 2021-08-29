const handleSubmit = async (event) => {
    event.preventDefault()

    let inputText = document.getElementById('url').value

    if (Client.validURL(inputText)) {
        console.log('Form Submitted')

        postData('http://localhost:8080/api', { url: inputText })

    } else {
        alert('Invalid URL, please try again with a valid URL.')
    }
}

const postData = async (url='', data={}) => {
    console.log('Analyzing URL:', data)
    await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then( res =>  res.json())
        .then( res => {
        console.log('Data received:', res)
        document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
        document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`
        document.getElementById('irony').innerHTML = `Irony: ${res.irony}`
        document.getElementById('score-tag').innerHTML = `Score Tag: ${res.score_tag}`
        })
}

export { handleSubmit }
