axios.get("https://reqres.in/api/users")
    .then(function(response){
        //console.log(response.data.data[0].id);
        tamanho = Object.keys(response.data.data).length;
        tbody = document.querySelector("table tbody");
        for (var i = 0; i < tamanho; i++){
            tr = document.createElement("tr");
            tbody.appendChild(tr);
            console.log("tr adicionado");
        }

    })
    .catch(function(error){
        console.warn(error);
    });

    