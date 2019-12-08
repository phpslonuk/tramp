let trampPromise = new Promise((resolve, reject) => {
    fetch('db.json')
        .then(data => {
            resolve(data.text());
        })
});

trampPromise.then(data => {
    putData(JSON.parse(data));
})

function putData(data) {
    document.getElementById("tor").innerHTML = renderContent(data);
}

function renderContent(data) {
    let res = data.map((item) => {
        return `<div class="trampimg">
                    <img class="mainImg" src="img/${item.img}" >
                </div>

                <div class="text">
                    <div class="textarea">
                        <p class="someDate"> ${item.date.toUpperCase()} </p>
                    </div>
                    <div class="secondimg">
                        <h2 class="title">${item.title}</h2>
                        <p class="description">${item.description}</p>
                        <img class="smallimg" src="img/${item.img}">
                    </div>
                </div>`;
    });
    return res;
}