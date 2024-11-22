import './style.css';
function Pagination() {
  console.log('called');
  let data = {};
  let currLimit = 10;
  let currSkip = 0;
  async function fetchData() {
    try {
      let data1 = await fetch(`https://dummyjson.com/products?limit=${currLimit}&skip=${currSkip}`);
      if(data1.ok){
      data = await data1.json();
      }
      if (Object.keys(data).length) {
        data = data.products;
        console.log(data, 'data');
        showProduct(data);
      }
    }
    catch (e) {
      console.log('error file calling APi');
    }
  }
  fetchData();
  function showProduct(arr) {
    console.log('called');
    document.getElementById('gridId').innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      let ele = document.createElement('div');
      ele.innerText = arr[i].title + ' '+ arr[i].id;
      ele.classList.add('productCard');
      document.getElementById('gridId')?.appendChild(ele);
    }
  }
  function renderBtn() {
    let btnLeft = document.createElement('button');
    btnLeft.innerText = 'LEFT';
    document.getElementById('pagesId')?.appendChild(btnLeft);
    for (let i = 1; i <= 10; i++) {
      let btn = document.createElement('button');
      btn.innerText = i;
      document.getElementById('pagesId')?.appendChild(btn);
    }
    let btnRight = document.createElement('button');
    btnRight.innerText = 'Right';
    document.getElementById('pagesId')?.appendChild(btnRight);
  }
  renderBtn();
  function handlePagination(){
    document.getElementById('pagesId')?.addEventListener('click',(e)=>{
       if(e.target.innerText == 'LEFT'){
            if(currSkip == 0){
              return;
            }
            else {
              currSkip = currSkip - 10;
            }
       }
       else if(e.target.innerText == 'Right'){
        if(currSkip == 100){
          return;
        }
        else {
          currSkip = currSkip + 10;
        }
       }
       else {
        let val = e.target.innerText;
        val = val - 1;
        currSkip = val*10;
       }
       fetchData();
    })
  }
  handlePagination();
}
Pagination();