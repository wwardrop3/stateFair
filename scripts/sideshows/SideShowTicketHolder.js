const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

//this function will be called everytime the customEvent (notification) "rideTicketPurchased" is heard in eventHub
export const SideshowTicketHolder = () => {
    let html = `
    <div class = "person gawker"></div>`
    contentTarget.innerHTML += html
    return contentTarget
    }

eventHub.addEventListener(//where we are listening
    "click", //who we are listening for
    (clickEvent) => { //what we do if we hear them
        if(clickEvent.target.id === "sideshowTicket"){ //if we like what we hear
            const sideshowListener = new CustomEvent("sideshowTicketPurchased") //create a notification that we liked what we heard
            eventHub.dispatchEvent(sideshowListener)//press SEND on the notification to everyone inside eventHub (html elements contained inside element with id = stateFair)  
        }   
    }
)