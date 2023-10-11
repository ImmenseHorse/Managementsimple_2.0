let stockRealTime = 'https://60dab586801dcb0017290af3.mockapi.io/api/ducnguyen/stockData';


const add = document.getElementById('add');
const update2 = document.getElementById('myUpdate');

const delete1 = document.getElementsByClassName('delBtn');
const clear = document.getElementById('clear');

const theID = document.getElementById("idx");
const name1 = document.getElementById('Name');
const grade = document.getElementById('Grade');
const origin1 = document.getElementById('Origin');
const unitPrice = document.getElementById('UnitPrice');
const availability = document.getElementById('Availability');
const shipping = document.getElementById('Shipping');
const promotion = document.getElementById('Promotion');

const theBody = document.getElementById('StockBody');

//search
const text = document.getElementById("textName");
const btnSearch = document.getElementById("search");
const btnRestore = document.getElementById("restore");

btnSearch.addEventListener('click', () => {
    btnRestore.style.display = "inline";
    btnSearch.style.display = "none";
    displayList(stockRealTime, theBody, update2);
});

btnRestore.addEventListener('click', () => {
    text.value = "";
    btnRestore.style.display = "none";
    btnSearch.style.display = "inline";
    displayList(stockRealTime, theBody, update2);
});

clear.addEventListener('click', () => {
    theID.value = name1.value = grade.value = origin1.value = unitPrice.value = availability.value = shipping.value = promotion.value = '';
    update2.style.display = 'none';
    add.style.display = 'inline';
});


async function updateListStock(id) {
    await updateItem(stockRealTime, id, {
        "idx": theID.value,
        "name": name1.value,
        "grade": grade.value,
        "origin": origin1.value,
        "unitprice": unitPrice.value,
        "availability": availability.value,
        "shipping": shipping.value,
        "promotion": promotion.value,
    });
    displayList(stockRealTime, theBody, update2)
    add.style.display = 'inline';
};

add.addEventListener('click', async function() {
    await addNewItem(stockRealTime, {
        "idx": theID.value,
        "name": name1.value,
        "grade": grade.value,
        "origin": origin1.value,
        "unitprice": unitPrice.value,
        "availability": availability.value,
        "shipping": shipping.value,
        "promotion": promotion.value,
        "username": localStorage.username,
    });
    theID.value = name1.value = grade.value = origin1.value = unitPrice.value = availability.value = shipping.value = promotion.value = '';
    displayList(stockRealTime, theBody, update2);
});

displayList(stockRealTime, theBody, update2);