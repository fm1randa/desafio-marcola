axios.get("https://reqres.in/api/users")
    .then(function(response){
        console.log(response.data.data[0].id);
    })
    .catch(function(error){
        console.warn(error);
    });

    