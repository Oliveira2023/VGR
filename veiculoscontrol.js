var carro = ''

function cardetails(car){
    
    sessionStorage.setItem('carro', car)
    
    window.open('veiculoSelecionado.html', '_blank')

    switch (carro){

        case "car1":
            console.log('carro 1 selecionao')

        break

        case "car2":
            console.log('carro 2 selecionado')
            
            console.log(carro)

        break

        default:
            console.log('default')
    }
}

