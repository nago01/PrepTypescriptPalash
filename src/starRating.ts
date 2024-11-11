import './style.css';
let allSVG = document.querySelectorAll("svg");
let currIndex = 0;
let hoverIndex = 0;
for (let i = 0; i < allSVG.length; i++) {
  allSVG[i].addEventListener('click', () => {
    currIndex = i;
    handleColor();
  })

  allSVG[i].addEventListener("mouseover", () => {
    hoverIndex = i;
    for (let i = 0; i < allSVG.length; i++) {
      if (i <= hoverIndex) {
        allSVG[i].querySelector("path")?.classList.add('filledCss');
      }
      else {
        allSVG[i].querySelector("path")?.classList.remove('filledCss');
      }
    }
  });


}
function handleColor() {
  for (let i = 0; i < allSVG.length; i++) {
    if (i <= currIndex) {
      allSVG[i].querySelector("path")?.classList.add('filledCss');
    }
    else {
      allSVG[i].querySelector("path")?.classList.remove('filledCss');
    }
  }
}


document.querySelector('.starCnt')?.addEventListener('mouseout', () => {
  handleColor();
})