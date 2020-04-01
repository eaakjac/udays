fetch("http://worldtimeapi.org/api/timezone/Europe/Copenhagen")

    .then(function (data) {
        return data.json();
    })


    .then(function (post) {
        const tid = document.getElementById("tid");

        tid.innerHTML = (post.datetime);

        const dato = new Date(post.datetime);
        tid.innerHTML = dato.getDate() + "/" + dato.getMonth() + "-" + dato.getFullYear();

    });
