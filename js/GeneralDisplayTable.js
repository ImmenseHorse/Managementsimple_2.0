const displayItems = (object, x) => {
    let strHTML = '';
    for (let i in object) {
        if (i === "idx" || i === "idy") {
            strHTML = `<td>${object[i]}</td>` + strHTML;
        } else if (i != "username" && i != "id") {
            strHTML += `<td>${object[i]}</td>`;
        }
    };
    x.innerHTML += '<tr>' + strHTML + `<td><button id="bnnn1" class=${object["id"]}>X</button></td>` +
        `<td><button id="bnnn2" class=${object["id"]}>U</button></td></tr>`;
}


async function displayArr(json, x) {
    x.innerHTML = '';
    for (let i = 0; i < json.length; i++) {
        displayItems(json[i], x);
    }
}

async function displayList(source, x, updButton) {
    if (source === 'https://60dab586801dcb0017290af3.mockapi.io/api/ducnguyen/employeesData') {
        tID.value = '';
        name2.value = '';
        degree.value = '';
        age.value = '';
        gender.value = '';
        citizenship.value = '';
        salary.value = '';
        pStatus.value = '';
        bonus.value = '';

    } else if (source === 'https://60dab586801dcb0017290af3.mockapi.io/api/ducnguyen/stockData') {
        theID.value = '';
        name1.value = '';
        grade.value = '';
        origin1.value = '';
        unitPrice.value = '';
        availability.value = '';
        shipping.value = '';
        promotion.value = '';
    }

    updButton.style.display = 'none';
    const data = await fetch(source);
    const json = await data.json();

    let user = [];


    for (let i of json) {
        if (i["username"] === localStorage.username) {
            user.push(i);
        };

    }

    //search
    // console.log(user);
    let user1 = [], user2 = [];
    if ( text.value ) {
        for(let i of user){
            if(text.value == i.name) user1.push(i);
        }
        console.log(user1);
        displayArr(user1, x);
        for (let i of user1) {
            document.getElementsByClassName(`${i["id"]}`)[0].addEventListener('click', () => {
                deleteItem(source, x, `${i["id"]}`, updButton)
            })
    
            updateOneItem(source, user1, updButton)
    
        }
    } else {
        displayArr(user, x);
        for (let i of user) {
            document.getElementsByClassName(`${i["id"]}`)[0].addEventListener('click', () => {
                deleteItem(source, x, `${i["id"]}`, updButton)
            })
    
            updateOneItem(source, user, updButton)
    
        }
    }
    
}

function updateOneItem(source, json, updButton) {
    if (source === 'https://60dab586801dcb0017290af3.mockapi.io/api/ducnguyen/stockData') {
        for (let i of json) {
            document.getElementsByClassName(`${i["id"]}`)[1].addEventListener('click', () => {
                add.style.display = 'none';
                updButton.style.display = 'inline';
                theID.value = i["idx"];
                name1.value = i["name"];
                grade.value = i["grade"];
                origin1.value = i["origin"];
                unitPrice.value = i["unitprice"];
                availability.value = i["availability"];
                shipping.value = i["shipping"];
                promotion.value = i["promotion"];
                updButton.onclick = () => {
                    updateListStock(`${i["id"]}`);
                }
            })
        }
    } else if (source === 'https://60dab586801dcb0017290af3.mockapi.io/api/ducnguyen/employeesData') {
        for (let i of json) {
            document.getElementsByClassName(`${i["id"]}`)[1].addEventListener('click', () => {
                add2.style.display = 'none';
                updButton.style.display = 'inline';
                name2.value = i["name"];
                degree.value = i["degree"];
                age.value = i["age"];
                gender.value = i["gender"];
                citizenship.value = i["citizenship"];
                salary.value = i["salary"];
                pStatus.value = i["promotionstatus"];
                bonus.value = i["bonus"];
                tID.value = i["idy"];
                updButton.onclick = () => {
                    updateListEmployees(`${i["id"]}`);
                }
            })
        }


    }
}

const backFunction = () => {
    location.replace('index.html');
}