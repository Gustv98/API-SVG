function userException(message){
    this.message = message;
    this.name = "userException"
}

function buscaSvgCidade() {

    const cidade = document.getElementById('cidade').value;

    try{
        if(cidade === ''){
            throw new userException("Informe o nome de uma cidade");
        }
        console.log('ok');
    }catch(error){
        console.log('name',error.name);
        alert(error.message);
    }

    const requestCidadeSvg = new Request(`http://localhost:3000/getSvg/${cidade}`);
    const requestCidadeViewbox = new Request(`http://localhost:3000/getViewBox/${cidade}`);

    fetch(requestCidadeSvg)
     .then(response => {
        return response.json();
    }).then(response => {
        document.getElementById('path').setAttribute('d', response[0].st_assvg)
    })
        
    fetch(requestCidadeViewbox)
     .then(response => {
        return response.json();
    }).then(response => {
        document.getElementById('svg').setAttribute('viewBox', response[0].getviewbox);
    })
}

