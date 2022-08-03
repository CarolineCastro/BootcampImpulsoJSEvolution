fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json));
//retorna uma Promise

//OPERAÇÕES NO BANCO (POST, GET, PUT, DELETE, ETC)

fetch('https://endereco-api.com/', {
    method: 'GET', //'POST'
    cache: 'no-cache',
    //body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json))
//retorna uma Promise

