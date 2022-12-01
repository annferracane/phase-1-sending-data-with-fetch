function submitData(userName, userEmail) {
    const userData = {
        name: userName,
        email: userEmail,
    };

    const configObj = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },

        body: JSON.stringify(userData)

    };

    return fetch('http://localhost:3000/users', configObj)
    .then(resp => resp.json())
    .then(data => appendToDOM(data.id))
    .catch(error => appendToDOM(error.message))

}

function appendToDOM(resp) {
    const p = document.createElement('p');
    p.textContent = resp;
    document.querySelector('body').appendChild(p);
}

