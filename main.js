axios.get("https://reqres.in/api/users")
    .then(function(response){
        //console.log(response.data.data[0].id);
        tamanho = Object.keys(response.data.data).length;
        tbody = document.querySelector("table tbody");
        for (var i = 0; i < tamanho; i++){
            tr = document.createElement("tr");
            tbody.appendChild(tr);
            //console.log("tr adicionado");
        }

        colunas = tbody.getElementsByTagName("tr");
        tamanhocol = colunas.length;

        for (var i = 0; i < tamanhocol; i++){
            th = document.createElement("th");
            textoid = document.createTextNode(response.data.data[i].id);
            th.appendChild(textoid);
            colunas[i].appendChild(th);

            tdemail = document.createElement("td");
            textoemail = document.createTextNode(response.data.data[i].email);
            tdemail.appendChild(textoemail);
            colunas[i].appendChild(tdemail);

            tdfname = document.createElement("td");
            textofname = document.createTextNode(response.data.data[i].first_name);
            tdfname.appendChild(textofname);
            colunas[i].appendChild(tdfname);

            tdlname = document.createElement("td");
            textolname = document.createTextNode(response.data.data[i].last_name);
            tdlname.appendChild(textolname);
            colunas[i].appendChild(tdlname);

            tdactions = document.createElement("td");
            //console.log(response.data.data[i].first_name, response.data.data[i].first_name.length);
            first_name = response.data.data[i].first_name;
            if(first_name.length < 5){
                //spani = document.createElement("span");
                div = document.createElement("div");
                div.setAttribute("style", "font-size: 20px;");
                icon = document.createElement("i");
                icon.classList.add("fas");
                icon.classList.add("fa-apple-alt");
                icon.classList.add("fa-lg");
                div.appendChild(icon);
                tdactions.appendChild(div);
                colunas[i].appendChild(tdactions);

                div2 = document.createElement("div");
                div2.setAttribute("style", "font-size: 25px;");
                icon3 = document.createElement("i");
                icon3.classList.add("fab");
                icon3.classList.add("fa-buromobelexperte");
                div2.appendChild(icon3);
                tdactions.appendChild(div2);
                colunas[i].appendChild(tdactions);
            }
            else if (first_name.length >= 5){
                div = document.createElement("div");
                div.setAttribute("style", "font-size: 25px;");
                icon = document.createElement("i");
                icon.classList.add("fab");
                icon.classList.add("fa-apple");
                icon.classList.add("fa-lg");
                div.appendChild(icon);
                tdactions.appendChild(div);
                colunas[i].appendChild(tdactions);

                div2 = document.createElement("div");
                div2.setAttribute("style", "font-size: 25px;");
                icon3 = document.createElement("i");
                icon3.classList.add("fab");
                icon3.classList.add("fa-buromobelexperte");
                div2.appendChild(icon3);
                tdactions.appendChild(div2);
                colunas[i].appendChild(tdactions);
            }
        }


        /*for (var i = 0; i < tamanho; i++){
            th = document.createElement("th");
            texto = document.createTextNode(response.data.data[i].id);
            tr.appendChild(texto);
        }*/

        /*kkk = tbody.getElementsByTagName("th");
        console.log(kkk);
        kkk[].appendChild(document.createTextNode("9?"));*/
    })
    .catch(function(error){
        console.warn(error);
    });

    