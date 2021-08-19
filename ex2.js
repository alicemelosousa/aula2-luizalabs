var letra = 'A'
var idade = 10

switch (letra) {
    case 'A':
        idade++;
        console.log('Anne')
        break
    case 'B': 
        if (idade < 10) {
            idade = idade  + 2
        }
        console.log('Bianca')
        break;
    case 'C': 
        console.log('Carla')
}