import { Paints } from "./PaintColor.js"
import { Interiors } from "./Interior.js"
import { Orders } from "./Orders.js"
import { Technologies } from "./Technology.js"
import { Wheels } from "./Wheels.js"
import { addCustomOrder } from "./data.js"

document.addEventListener(
    "click",
    (event) => {
      if (event.target.id === "orderButton") {
          addCustomOrder()
      }
    }
)

export const CarsRUs = () => { 
    
    return` 
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paint Color</h2>
                ${Paints()}
            </section>
            <section class="choices__sizes options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__styles options">
                <h2>Technology Packages</h2>
                ${Technologies()}
            </section>
            <section class="choices__styles options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}
