function CoisarCEP(){
    let input = document.querySelector('.input-cep').value
    console.log(input)
    dados(input)
}


 async function dados(input){
    let dados= await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    console.log(dados)
    exibirDados(dados)
}


function ExibirDados(dados){
   
    
    document.querySelector('.endereco').value = dados.logradouro
    document.querySelector('.bairro').value = dados.bairro
    document.querySelector('.cidade').value = dados.localidade
}

