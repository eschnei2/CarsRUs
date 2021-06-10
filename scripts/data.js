

const database = {
    interiors : [
        {id: 1, fabric: "Beige Fabric", price: 2000},
        {id: 2, fabric: "Charcoal Fabric", price: 2100},
        {id: 3, fabric: "White Leather", price: 3400},
        {id: 4, fabric: "Black Leather", price: 3100}
    ],
    paints : [
        {id: 1, color: "Silver", price: 1000},
        {id: 2, color: "Midnight Blue", price: 3000},
        {id: 3, color: "Firebrick Red", price: 4000},
        {id: 4, color: "Spring Green", price: 6000},
    ],
    technologies : [
        {id: 1, package: "Basic Package (basic sound system)", price: 300},
        {id: 2, package: "Navigation Package (includes integrated navigation controls)", price: 500},
        {id: 3, package: "Visibility Package (includes side and rear cameras)", price: 1200},
        {id: 4, package: "Ultra Package (includes navigation and visibility package)", price: 1600}
    ],
    wheels : [
        {id:1, type:"17-inch Pair Radial", price: 1200},
        {id:2, type:"17-inch Pair Radial Black", price: 1400},
        {id:3, type:"18-inch Pair Spoke Silver", price: 1800},
        {id:4, type:"18-inch Pair Spoke Black", price: 22000}
    ],
    orders : [
        {id:1, interiorId: 2, paintId : 3, technologyId : 2, wheelId = 4}
    ]
}

export const getInteriors = () => {
    return database.metals.map(interior => ({...interior}))
}
export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}