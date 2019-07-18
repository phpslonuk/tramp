let rawFile = new XMLHttpRequest();
rawFile.open("GET", 'db.json');
rawFile.onload = () => {
    let all = rawFile.responseText;
    let mydata = JSON.parse(all);
    putData(mydata);
};
rawFile.send();

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