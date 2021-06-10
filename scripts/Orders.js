import { getOrders, getInteriors, getTechnologies, getPaints, getWheels } from "./data.js"


const interiors = getInteriors()
const technologies = getTechnologies()
const paints = getPaints()
const Wheels = getWheels()

const buildOrderListItem = (order) => {
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )

    const foundWheel = Wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const totalCost = foundInterior.price + foundTechnology.price + foundPaint.price + foundWheel.price
    
    return `<li>
        Order #${order.id} cost ${totalCost}
    </li>`
}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
