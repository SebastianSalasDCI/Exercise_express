



function obtain_data(){
        
    fetch('/api')
    .then( response =>{
        console.log(response)
        return response.json()
    })
    .then(data =>{
        console.log(data)
        create_table(data)
    })
}


function create_table(raw_data){

    let output = '';

    let table_headers = Object.keys(raw_data[0])

    output += '<thead>'
    table_headers.forEach(element => {
        output += `
            
                <th>${element}</th>
        `
    });
    
    output += `
        </thead>
        <tbody>
    `
    
    raw_data.forEach(element => {
        output += `
            <tr>
            <td onclick=delete_data(${element.id}) >${element.id}</td>
            <td onclick=delete_data(${element.id}) >${element.name}</td>
            </tr>   
        ` 
    });
    
    output += "</tbody>"
    
    document.getElementById("tabla").innerHTML = output;
    

}

function delete_data(id){

    console.log(id)

    data = {id: id}

    fetch('/api/delete',{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    obtain_data()
}



obtain_data()