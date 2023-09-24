var carro = ''

function cardetails(car){
    
    sessionStorage.setItem('carro', car)
    
    window.open('/veiculoSelecionado', '_blank')

}

