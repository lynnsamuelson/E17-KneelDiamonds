import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

document.addEventListener("stateChanged", (event) => {
    renderAllHTML()
})

renderAllHTML()

