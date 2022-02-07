const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolder = () => {
    let html = `<div class="person eater"></div>`
    contentTarget.innerHTML += html
    return contentTarget

}

eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id === "foodTicket"){
            const foodListener = new CustomEvent("foodTicketPurchased")
            eventHub.dispatchEvent(foodListener)   
        }   
    }
)