function postFetch() {
    let btn = document.getElementById('btnId');
    let prv = "like";
    btn.innerText = "like";
    // btn?.innerText = "like";
    // in typescript this will throw error
    const requestObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            action: btn.innerText == 'like' ? 'unlike' : 'like'
        })
    };

    document.getElementById('btnId')?.addEventListener('click', () => {
        fetchData();
    });
    async function fetchData() {
        prv = btn?.innerText;
        try {
            btn.innerText = 'loading';
            let data = await fetch('https://www.greatfrontend.com/api/questions/like-button', requestObj);
            if(data.ok){
                console.log(data , btn?.innerText , 'data');
                if(prv == 'like'){
                    btn.innerText = 'unlike'
                }
                else {
                    btn.innerText = 'like'
                }
            }
            else {
                btn.innerText = prv;
            }
        }
        catch (e) {
            console.log(e, 'e');
        }

    }
}

postFetch();