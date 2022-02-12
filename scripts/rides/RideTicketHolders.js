const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")



//this function will be called everytime the customEvent (notification) "rideTicketPurchased" is heard in eventHub
export const RideTicketHolders = (fullTicketClass) => {
    let html = `
    <div class = "person rider ${fullTicketClass}"></div>`
    contentTarget.innerHTML += html
    return contentTarget
    }

eventHub.addEventListener(//where we are listening
    "click", //who we are listening for
    (clickEvent) => { //what we do if we hear them
        if(clickEvent.target.id === "rideTicket"){ //if we like what we hear
            const rideListener = new CustomEvent("rideTicketPurchased") //create a notification that we liked what we heard
            eventHub.dispatchEvent(rideListener)//press SEND on the notification to everyone inside eventHub (html elements contained inside element with id = stateFair)  
        }   
    }
)