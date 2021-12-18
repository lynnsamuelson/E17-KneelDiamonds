import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()

const buildOrderListItem = (order) => {
    // get price from the metal

    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    ) 
    
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const metalPrice = foundMetal.price
    const sizePrice = foundSize.price
    const stylePrice = foundStyle.price

    const totalCost = metalPrice + sizePrice + stylePrice

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} was placed on ${costString}
    </li>`
}

export const Orders = () => {
    /*
    Can you explain why the state variable has to be inside
    the component function for Orders, but not the others?
    */
   const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(order => {
        return buildOrderListItem(order)
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

