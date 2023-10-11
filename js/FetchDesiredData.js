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

async function deleteItem(source, x, id, updButton) {
    const itemDeleted = await fetch(`${source}/${id}`, {
        method: 'DELETE',
    });
    displayList(source, x, updButton);
    return itemDeleted.json();
}

async function updateItem(source, id, data) {
    const itemUpdated = await fetch(`${source}/${id}`, {
        method: 'PUT',
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
    return itemUpdated.json();
}