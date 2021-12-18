import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "metal") {
            console.log("the metal changed")
            //set the metal
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const metalsArray = metals.map(metal => {
        return `<li>
                 <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
             </li>`
    })

    html += metalsArray.join('')

    // for (const metal of metals) {
    //     html += `<li>
    //         <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
    //     </li>`
    // }

    html += "</ul>"
    return html
}

