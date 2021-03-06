const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")


export const GameTicketHolder = (fullTicketClass) => {
    let html = `<div class="person player ${fullTicketClass}"></div>`
    contentTarget.innerHTML += html
    return contentTarget

}

eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id === "gameTicket"){
            const gameListener = new CustomEvent("gameTicketPurchased")
            eventHub.dispatchEvent(gameListener)
        }
        
    }
)