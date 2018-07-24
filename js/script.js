    var rawFile = new XMLHttpRequest();
        rawFile.open("GET", 'db.json');
        rawFile.onload = () => {
            var all = rawFile.responseText;
            var mydata = JSON.parse(all);
            console.log(mydata[0].title);
            renderHTML(mydata);
        };
        rawFile.send();


    function renderHTML(data){
        //header
        document.getElementById("img17").src = "img/17.png";
        document.getElementById("circle").src = "img/circle.png";
        //content
        document.getElementById("trampImg").src = "img/" + data[0].img;
        document.getElementById("trampTitle").innerHTML = data[0].title;
        document.getElementById("trampDescription").innerHTML = data[0].description;
        document.getElementById("trampSmallImg").src = "img/" + data[2].img;

        document.getElementById("kampImg").src = "img/" + data[1].img;
        document.getElementById("kampTitle").innerHTML = data[1].title;
        document.getElementById("kampDescription").innerHTML = data[1].description;
        document.getElementById("kampSmallImg").src = "img/" + data[1].img;

        document.getElementById("groteImg").src = "img/" + data[2].img;
        document.getElementById("groteTitle").innerHTML = data[2].title;
        document.getElementById("groteDescription").innerHTML = data[2].description;
        document.getElementById("groteSmallImg").src = "img/" + data[2].img;

    }
