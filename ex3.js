var cod = 101
var qnt = 3

var total

switch (cod) {
    case 100:
        
        total = qnt * 1.20
        console.log(`Você pediu um cachorro quente e o total foi de ${total}`)
    break
    case 101:
       
        total = qnt * 1.30
        console.log(`Você pediu um Bauru simples e o total foi de ${total}`)
    break
    case 102:
       
        total = qnt * 1.50
        console.log(`Você pediu um Bauru com ovo e o total foi de ${total}`)
    break
    case 103:
        
        total = qnt * 1.20
        console.log(`Você pediu um Hamburguer e o total foi de ${total}`)
    break
    default:
        console.log('Código não existe')

    
}