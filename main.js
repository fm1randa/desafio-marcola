axios.get("https://reqres.in/api/users")
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });