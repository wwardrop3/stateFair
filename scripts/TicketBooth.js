import { FoodTicketHolder } from "./food/FoodTicketHolder.js"
import { GameTicketHolder } from "./games/GameTicketHolder.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { SideshowTicketHolder } from "./sideshows/SideShowTicketHolder.js"

const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

export let ticketTracker = 0


//***EXAMPLE....if you select html object with id "flower", the html object with class "flowerSelection" will have an innerhtml value of "daisy"


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class = "totalTickets">TotalTicketsPurchased: ${ticketTracker}</div>
        <div class="ticketBooth">
            <button id = "rideTicket">Ride Ticket</button>
            <button id = "foodTicket">Food Ticket</button>
            <button id = "gameTicket">Game Ticket</button>
            <button id = "sideshowTicket">Sideshow Ticket</button>
            <button id = "fullTicket">Full Package</button>
        </div>`
}


eventHub.addEventListener(
    "rideTicketPurchased",
    (customEvent) => {
        RideTicketHolders()
        ticketTracker++
        TicketBooth()
    })

eventHub.addEventListener(
    "foodTicketPurchased",
    (customEvent) => {
        FoodTicketHolder()
        ticketTracker++
        TicketBooth()
    })
    
eventHub.addEventListener(
    "gameTicketPurchased",
    (customEvent) => {
        GameTicketHolder()
        ticketTracker++
        TicketBooth()
    }
)

eventHub.addEventListener(
    "sideshowTicketPurchased",
    (customEvent) => {
        SideshowTicketHolder()
        ticketTracker++
        TicketBooth()
    }
)


eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id === "fullTicket"){
            RideTicketHolders("bigSpender")
            FoodTicketHolder("bigSpender")
            GameTicketHolder("bigSpender")
            SideshowTicketHolder("bigSpender") 
            ticketTracker +=4
            TicketBooth()
        }   
    }
)
