const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolder = (fullTicketClass) => {
    let html = `<div class="person eater ${fullTicketClass}"></div>`
    contentTarget.innerHTML += html ///adds a box each time
    return contentTarget

}

eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id === "foodTicket"){
            const foodListener = new CustomEvent("foodTicketPurchased")
            eventHub.dispatchEvent(foodListener)   
            const ticketListener = new CustomEvent("ticketPurchased")
        }   
    }
)