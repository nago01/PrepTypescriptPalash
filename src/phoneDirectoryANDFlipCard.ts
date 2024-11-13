import './style.css';
function phoneDi() {
    let name = document.getElementById('input1');
    let phone = document.getElementById('input2');
    let num = document.getElementById('input3');
    let email = document.getElementById('input4');
    console.log('called');

    document.querySelector('#submitId')?.addEventListener("click", (e) => {
        e.preventDefault();
        let newObj = {};
        let valid = true;
        // if( phone.value ) {phone.value = parseInt(phone.value);}

        // if(num.value) { num.value = praseInt(num.value);}

        console.log(typeof (phone.value), 'typeof(phone.value)');
        let err = document.createElement("div");
        err.style.color = "red";
        err.innerText = "ERROR";

        newObj['name'] = name.value;
        newObj['phone'] = phone.value;
        newObj['num'] = num.value;
        newObj['email'] = email.value;

        data.push(newObj);
        renderItem();
    })


    let data = [{
        name: "Palash",
        phone: 78823,
        num: 9032123,
        email: "sda@gmail.com"
    }, {
        name: "Palash2",
        phone: 788232322223,
        num: 9032132,
        email: "sda@gmail.com"
    }, {
        name: "Palash3",
        phone: 78823123,
        num: 9032123,
        email: "sda@gmail.com"
    }]
    document?.querySelector('#tableId');
    let table = document.createElement("table");
    function renderItem() {
        if (document?.querySelector('#tableId')) {
            table.innerHTML = "";

            let header = document.createElement("th");
            let header1 = document.createElement("th");
            let header2 = document.createElement("th");
            let header3 = document.createElement("th");

            header.innerText = "Name";
            table.appendChild(header);
            header1.innerText = "phone";
            table.appendChild(header1);
            header2.innerText = "num";
            table.appendChild(header2);
            header3.innerText = "email";
            table.appendChild(header3);
            document.querySelector('#tableId')?.appendChild(table);
            addData();
        }
    }
    renderItem();
    function addData() {
        // creating this here will be wrong 

        // The issue you're encountering is due to the way the data1, data2, data3, and data4 cells are being reused across iterations. Since data1 through data4 are created outside the loop, they are being modified on each iteration, resulting in only the last row's data being retained for every row in the table.

        // To fix this, you need to move the creation of the table cell elements inside the loop so that each row has its own set of cells. Here’s the updated code:
        // let data1 = document.createElement("td");
        // let data2 = document.createElement("td");
        // let data3 = document.createElement("td");
        // let data4 = document.createElement("td");
        for (let i = 0; i < data.length; i++) {
            let data1 = document.createElement("td");
            let data2 = document.createElement("td");
            let data3 = document.createElement("td");
            let data4 = document.createElement("td");
            let row = document.createElement("tr");
            data1.innerText = data[i]['name'];
            data2.innerText = data[i]['phone'];
            data3.innerText = data[i]['num'];
            data4.innerText = data[i]['email'];
            row.appendChild(data1);
            row.appendChild(data2);
            row.appendChild(data3);
            row.appendChild(data4);
            table.appendChild(row);
        }
    }

    document.querySelector("#searchId").addEventListener('change', (e) => {
        handleSearch(e.target.value);
    });

    function handleSearch(search) {
        data = data.filter((item) => {
            return item['phone'] === parseInt(search?.toLowerCase());
        });
        console.log(data, 'data');
        renderItem();
    }
}

phoneDi();


let languages = [
    {
        language: "Hindi",
        wordList: [{ word: "Namaste", read: false }, { word: "Pass Aao", read: false },{ word: "Namaste", read: false }, { word: "Pass Aao", read: false }],
    },
    {
        language: "Spanish",
        wordList: [{ word: "Namaste", read: false }, { word: "Pass Aao", read: false }],
    },
    {
        language: "France",
        wordList: [{ word: "Namaste", read: false }, { word: "Pass Aao", read: false }],
    },
    {
        language: "Marathi",
        wordList: [{ word: "Namaste", read: false }, { word: "Pass Aao", read: false }],
    },
    {
        language: "Orria",
        wordList: [{ word: "Namaste", read: false }, { word: "Pass Aao", read: false }],
    },

]

let newLanguage = {
    language: "Hindi",
    wordList: [{ word: "Kaise Ho", read: false }, { word: "Khana Khaya", read: false },{ word: "Namaste", read: false }, { word: "Pass Aao", read: false }],
}

function handleNewWord(lang: string) {
   
    languages = languages.filter((item)=>{
        return item.language !== lang;
    })
    languages.push(newLanguage);
    console.log(languages , 'languages');
    renderCard();
}

document.getElementById('loadid')?.addEventListener('click',()=>{
    handleNewWord('Hindi');
});


let dictionary =["Greeting" , "Come Here" , "Go There"];


function renderCard(){

    languages.forEach((item , index)=>{
        let category = document.createElement('div');
        category.innerText = "This contains Hindi";
        category.classList.add('categoryCSS');
        document.getElementById("cardContainer")?.appendChild(category);
         
        for(let i=0;i<item.wordList.length;i++){
        let newCard = document.createElement('button');
        newCard.id = "card"+index;
        newCard.innerText = item.wordList[i].word;
        newCard.classList.add('card');
        newCard.addEventListener('click',(e)=>{
            newCard.innerText = dictionary[i];
            item.wordList[i].read = true;
            console.log(languages , 'languages');
            newCard.classList.add('flipCss');
        })
        category?.appendChild(newCard);
        }
       
        let breakEle = document.createElement('br');
        document.getElementById("cardContainer")?.appendChild(breakEle);
    
    })
    
}
renderCard();