function obtain_data(){

    fetch('/api')
    .then(response => {
        return response.json()
    }).then(data =>{
        console.log(data)
    })

}

obtain_data()