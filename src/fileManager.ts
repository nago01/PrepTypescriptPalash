import '../src/style.css';
let fileFolderData = [
    {
        id: 1,
        name: "Root Folder",
        type: "folder",
        children: [
            {
                id: 2,
                name: "Documents",
                type: "folder",
                children: [
                    {
                        id: 3,
                        name: "Resume.pdf",
                        type: "file",
                    },
                    {
                        id: 4,
                        name: "Project Proposal.docx",
                        type: "file",
                    },
                ],
            },
            {
                id: 5,
                name: "Pictures",
                type: "folder",
                children: [
                    {
                        id: 6,
                        name: "Vacation.jpg",
                        type: "file",
                    },
                    {
                        id: 7,
                        name: "Profile.png",
                        type: "file",
                    },
                ],
            },
            {
                id: 8,
                name: "Music",
                type: "folder",
                children: [
                    {
                        id: 9,
                        name: "Song1.mp3",
                        type: "file",
                    },
                    {
                        id: 10,
                        name: "Song2.mp3",
                        type: "file",
                    },
                ],
            },
        ],
    },
];



let fileSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="40px"
  width="40px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
  <path style="fill:#707487;"
    d="M197.628,101.517l9.756-29.271c1.203-3.612,4.569-6.039,8.375-6.039h80.483  c3.806,0,7.172,2.426,8.375,6.039l9.756,29.271h18.612l-11.618-34.858c-3.612-10.831-13.71-18.108-25.124-18.108h-80.483  c-11.414,0-21.513,7.276-25.126,18.108l-11.617,34.858H197.628z" />
  <g>
    <path style="fill:#959CB3;"
      d="M211.862,110.345h-44.138v-8.828c0-4.875,3.953-8.828,8.828-8.828h26.483   c4.875,0,8.828,3.953,8.828,8.828V110.345z" />
    <path style="fill:#959CB3;"
      d="M344.276,110.345h-44.138v-8.828c0-4.875,3.953-8.828,8.828-8.828h26.483   c4.875,0,8.828,3.953,8.828,8.828V110.345z" />
  </g>
  <path style="fill:#C7CFE2;"
    d="M485.517,463.448H26.483C11.857,463.448,0,451.592,0,436.966V136.828  c0-14.626,11.857-26.483,26.483-26.483h459.034c14.626,0,26.483,11.857,26.483,26.483v300.138  C512,451.592,500.143,463.448,485.517,463.448z" />
  <path style="fill:#AFB9D2;"
    d="M35.31,172.138H0v-35.31c0-14.626,11.857-26.483,26.483-26.483h35.31v35.31  C61.793,160.281,49.937,172.138,35.31,172.138z" />
  <circle style="fill:#707487;" cx="35.31" cy="145.655" r="8.828" />
  <path style="fill:#AFB9D2;"
    d="M476.69,172.138H512v-35.31c0-14.626-11.857-26.483-26.483-26.483h-35.31v35.31  C450.207,160.281,462.063,172.138,476.69,172.138z" />
  <circle style="fill:#707487;" cx="476.69" cy="145.655" r="8.828" />
  <path style="fill:#AFB9D2;"
    d="M476.69,401.655H512v35.31c0,14.626-11.857,26.483-26.483,26.483h-35.31v-35.31  C450.207,413.512,462.063,401.655,476.69,401.655z" />
  <circle style="fill:#707487;" cx="476.69" cy="428.138" r="8.828" />
  <path style="fill:#AFB9D2;"
    d="M35.31,401.655H0v35.31c0,14.626,11.857,26.483,26.483,26.483h35.31v-35.31  C61.793,413.512,49.937,401.655,35.31,401.655z" />
  <circle style="fill:#707487;" cx="35.31" cy="428.138" r="8.828" />
  <g>
    <path style="fill:#AFB9D2;"
      d="M423.724,295.724H88.276c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828   h335.448c4.875,0,8.828,3.953,8.828,8.828l0,0C432.552,291.772,428.599,295.724,423.724,295.724z" />
    <path style="fill:#AFB9D2;"
      d="M423.724,216.276H88.276c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828   h335.448c4.875,0,8.828,3.953,8.828,8.828l0,0C432.552,212.323,428.599,216.276,423.724,216.276z" />
    <path style="fill:#AFB9D2;"
      d="M423.724,375.172H88.276c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828   h335.448c4.875,0,8.828,3.953,8.828,8.828l0,0C432.552,371.22,428.599,375.172,423.724,375.172z" />
  </g>
</svg>`;

let folderSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve" width="40px" height="40px">
<path id="SVGCleanerId_0" style="fill:#FFC36E;" d="M183.295,123.586H55.05c-6.687,0-12.801-3.778-15.791-9.76l-12.776-25.55  l12.776-25.55c2.99-5.982,9.103-9.76,15.791-9.76h128.246c6.687,0,12.801,3.778,15.791,9.76l12.775,25.55l-12.776,25.55  C196.096,119.808,189.983,123.586,183.295,123.586z"/>
<g>
  <path id="SVGCleanerId_0_1_" style="fill:#FFC36E;" d="M183.295,123.586H55.05c-6.687,0-12.801-3.778-15.791-9.76l-12.776-25.55   l12.776-25.55c2.99-5.982,9.103-9.76,15.791-9.76h128.246c6.687,0,12.801,3.778,15.791,9.76l12.775,25.55l-12.776,25.55   C196.096,119.808,189.983,123.586,183.295,123.586z"/>
</g>
<path style="fill:#EFF2FA;" d="M485.517,70.621H26.483c-4.875,0-8.828,3.953-8.828,8.828v44.138h476.69V79.448  C494.345,74.573,490.392,70.621,485.517,70.621z"/>
<rect x="17.655" y="105.931" style="fill:#E1E6F2;" width="476.69" height="17.655"/>
<path style="fill:#FFD782;" d="M494.345,88.276H217.318c-3.343,0-6.4,1.889-7.895,4.879l-10.336,20.671  c-2.99,5.982-9.105,9.76-15.791,9.76H55.05c-6.687,0-12.801-3.778-15.791-9.76L28.922,93.155c-1.495-2.99-4.552-4.879-7.895-4.879  h-3.372C7.904,88.276,0,96.18,0,105.931v335.448c0,9.751,7.904,17.655,17.655,17.655h476.69c9.751,0,17.655-7.904,17.655-17.655  V105.931C512,96.18,504.096,88.276,494.345,88.276z"/>
<path style="fill:#FFC36E;" d="M485.517,441.379H26.483c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828  h459.034c4.875,0,8.828,3.953,8.828,8.828l0,0C494.345,437.427,490.392,441.379,485.517,441.379z"/>
<path style="fill:#EFF2FA;" d="M326.621,220.69h132.414c4.875,0,8.828-3.953,8.828-8.828v-70.621c0-4.875-3.953-8.828-8.828-8.828  H326.621c-4.875,0-8.828,3.953-8.828,8.828v70.621C317.793,216.737,321.746,220.69,326.621,220.69z"/>
<path style="fill:#C7CFE2;" d="M441.379,167.724h-97.103c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828  h97.103c4.875,0,8.828,3.953,8.828,8.828l0,0C450.207,163.772,446.254,167.724,441.379,167.724z"/>
<path style="fill:#D7DEED;" d="M441.379,203.034h-97.103c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828  h97.103c4.875,0,8.828,3.953,8.828,8.828l0,0C450.207,199.082,446.254,203.034,441.379,203.034z"/>
</svg>`
let leftPadding = 0;
function fileManager() {
    let parentComp = document.getElementById('fileCmpId');
    
    function renderData(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (!Object.keys(arr[i]).includes("isOpen")) {
                arr[i]["isOpen"] = true;
            }
            console.log(arr , arr[i] , arr[i].id)
            const parser = new DOMParser();
            const svgNode = parser.parseFromString(folderSVG, "image/svg+xml").documentElement;
            let newComp = document.createElement('div');
            newComp.style.paddingLeft = `${leftPadding}px`;
            newComp.id = arr[i].id;
            if (arr[i].type === "folder") {
                leftPadding = leftPadding + 20;
                newComp.innerText = "||||->" + arr[i].name;
                parentComp?.appendChild(newComp);
                if (arr[i]["isOpen"]) {
                    renderData(arr[i].children);
                }
            }
            else {
                newComp.innerText = "--->" + arr[i].name;
                parentComp?.appendChild(newComp);
            }

        }
        fileFolderData = arr;
    }
    renderData(fileFolderData);

    function changeIndex(id, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].type == 'folder') {
                if (arr[i].id == id) {
                    arr[i].isOpen = !arr[i].isOpen;
                    fileFolderData = arr;
                    console.log(fileFolderData , 'fileFolderData');
                    return;
                }
                else {
                    changeIndex(id, arr[i].children);
                }
            }

        }
        clearChildNodes();
        leftPadding = 0;
        renderData(fileFolderData);
    }

    parentComp.addEventListener('click', (e) => {
        console.log(e , 'clicked');
        // changeIndex(e.target.id, fileFolderData);
        // clearChildNodes();
    })

    function clearChildNodes() {
        console.log(parentComp?.childNodes , 'parentComp?.childNodes')
        parentComp?.childNodes.forEach((item)=>{
           item.remove();
        })
    }
}

fileManager();

