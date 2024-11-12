import './style.css';
function tableComponent() {
    let data = [
        { name: 'Alice Johnson', age: 30, country: 'USA' },
        { name: 'Bryan Smith', age: 22, country: 'Canada' },
        { name: 'Charlotte Brown', age: 25, country: 'UK' },
        { name: 'David Wilson', age: 28, country: 'Australia' },
        { name: 'Evelyn Garcia', age: 35, country: 'Spain' },
    ];

    showData();

    function showData() {
        let tbl = document.querySelector("table");
        removeOlderData();
        data.map((item) => {
            let rData = document.createElement("tr");
            let cData = document.createElement("td");
            let cData2 = document.createElement("td");
            let cData3 = document.createElement("td");
            cData.innerText = item.name;
            rData.appendChild(cData);
            cData2.innerText = item.age;
            rData.appendChild(cData2);
            cData3.innerText = item.country;
            rData.appendChild(cData3);
            tbl?.appendChild(rData);
        })
    }
    function customSort(item1, item2) {
        console.log(item1, 'item1');
        if (item1.age >= item2.age) {
            return 1;
        }
        return -1;
    }
    document.querySelectorAll("th").forEach((item) => {
        item.addEventListener('click', (e) => {
            data = data.sort(customSort);
            console.log(data, 'data');
            showData();
        })
    })
    function removeOlderData() {
        let currentChild = document.querySelectorAll("td");
        currentChild.forEach((item) => {
            item.remove();
        })
    }

    document.querySelectorAll("input").forEach((item) => {
        item.addEventListener('change', (e) => {
            console.log(e.target,'eee');
            let toRemove = e.target.value;
            if (e.target.id === "input1") {
                data = data.filter((item) => {
                    return item['country'].toLowerCase() !== toRemove.toLowerCase();
                })
                console.log(data, 'data');
                showData();
            }
            let newObj = {};

            // if(e.target.id === "input2"){
            //   newObj["name"] = e.target.value;
            // }
            // if(e.target.id === "input3"){
            //     newObj["age"] = e.target.value;
            // }
            // if(e.target.id === "input4"){
            //     newObj["country"] = e.target.value;
            // }
            // data.push(newObj);
            // showData();
        })
    });
}

tableComponent();