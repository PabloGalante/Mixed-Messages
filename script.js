//Create OBJECT with arrays of possibilities
const dataobject = {
    sabores: ['vainilla', 'chocolate', 'frambuesa'],
    rellenos: ['chocolate', 'nutella', 'dulce de leche'],
    bebidas: ['cafe', 'te', 'mate']
};

//Generate random numbers to fetch array info
function randomizer(property) {
    return Math.floor(Math.random() * 3);
}

console.log(`Hoy es un gran dia para comer una cookie de ${dataobject.sabores[randomizer()]} 
            rellena de ${dataobject.rellenos[randomizer()]} 
            con un ${dataobject.bebidas[randomizer()]}`
            );