import { FoodTicketHolder } from "./food/FoodTicketHolder.js"
import { GameTicketHolder } from "./games/GameTicketHolder.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"

const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")




//***EXAMPLE....if you select html object with id "flower", the html object with class "flowerSelection" will have an innerhtml value of "daisy"


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id = "rideTicket">Ride Ticket</button>
            <button id = "foodTicket">Food Ticket</button>
            <button id = "gameTicket">Game Ticket</button>
        </div>`
}


eventHub.addEventListener(
    "rideTicketPurchased",
    (customEvent) => {
        RideTicketHolders()
    })

eventHub.addEventListener(
    "foodTicketPurchased",
    (customEvent) => {
        FoodTicketHolder()
    })
    
eventHub.addEventListener(
    "gameTicketPurchased",
    (customEvent) => {
        GameTicketHolder()
    }
)