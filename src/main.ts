import './style.css'
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

function numberOfVowel(s: string) {
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      console.log(s[i].toUpperCase());
    }
  }
}
// numberOfVowel("aeiouysdafAFG");

// let subBtn = document.querySelector("button");
// subBtn?.addEventListener('click', async () => {
//   let currText = subBtn.innerText;
//   subBtn.innerText = "loading";
//   const data = {
//     action: currText === 'like' ? 'unlike' : 'like'
//   };
//   const apiContent = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data),
//   }
//   let apiRes = await fetch('https://www.greatfrontend.com/api/questions/like-button', apiContent);
//   if (apiRes.ok) {
//     currText = (currText === 'like' ? 'unlike' : 'like');
//     subBtn.innerText = currText;
//   }
//   else {
//     subBtn.innerText = currText;
//     alert("API response failed");
//   }
//   console.log(apiRes, 'apiRes');
 


// })


// let textHtml = "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.";
// let textCSS = "  Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.";
// let textJS = "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.";

// let content = document.createElement("p");
// console.log(document.getElementById("htmlBtn"), ' document.getElementById("htmlBtn")')
// document.getElementById("htmlBtn")?.addEventListener('click', () => {
//   console.log('called');
//   content.innerText = "";
//   document.getElementById("contentId")?.appendChild(content);
//   content.innerText = textHtml;
// });
// document.getElementById("cssBtn")?.addEventListener('click', () => {
//   content.innerText = "";
//   content.innerText = textCSS;
// });
// document.getElementById("jsBtn")?.addEventListener('click', () => {
//   content.innerText = "";
//   content.innerText = textJS;
// });

// let allSVG = document.querySelectorAll("svg");
// let currIndex = 0;
// let hoverIndex = 0;
// for (let i = 0; i < allSVG.length; i++) {
//   allSVG[i].addEventListener('click', () => {
//     currIndex = i;
//     handleColor();
//   })

//   allSVG[i].addEventListener("mouseover", () => {
//     hoverIndex = i;
//     for (let i = 0; i < allSVG.length; i++) {
//       if (i <= hoverIndex) {
//         allSVG[i].querySelector("path")?.classList.add('filledCss');
//       }
//       else {
//         allSVG[i].querySelector("path")?.classList.remove('filledCss');
//       }
//     }
//   });


// }
// function handleColor() {
//   for (let i = 0; i < allSVG.length; i++) {
//     if (i <= currIndex) {
//       allSVG[i].querySelector("path")?.classList.add('filledCss');
//     }
//     else {
//       allSVG[i].querySelector("path")?.classList.remove('filledCss');
//     }
//   }
// }


// document.querySelector('.starCnt')?.addEventListener('mouseout', () => {
//   handleColor();
// })

