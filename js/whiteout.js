async function addNewItem(source, data) {
    const itemAdded = await fetch(source, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return itemAdded.json();
}

document.getElementById('blank1').addEventListener('click', () => {
    addNewItem("https://60dab586801dcb0017290af3.mockapi.io/api/ducnguyen/feedback", {
        "username": `${localStorage.username}`,
        "content": `${document.getElementById("blank2").value}`,
    }).then(document.getElementById("blank2").value = '');
})