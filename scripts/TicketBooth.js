import { RideTicketHolders } from "./rides/RideTicketHolders.js"

const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")




//***EXAMPLE....if you select html object with id "flower", the html object with class "flowerSelection" will have an innerhtml value of "daisy"


/*
I take my kid to a playground where a lot of other kids are playing. 
There are snakes in the area so I want to make sure my kid is not in danger
As a parent, even if I am not watching the kids playing, I keep my ears open incase my kid calls for me.
My kid's friend is also at the playground and knows that if he hears someone yell DANGER, he has to run)
*/



playground.addEventListener(//I can hear all the kids voices in the playground
    "myKidsVoice",//(aka "click")  I am listening for my kids voice
    (myKidsMessage) => {//When I hear my kid's voice, I am going to do something
        if(myKidsMessage.target.id === "there is a snake")//When I hear my kids voice, is he saying there is a snake? (i ignore my kid otherwise)
        {
            const warnPlayground = new CustomEvent("DANGER")//if my kid saw there is a snake, I mentally prepare that i am going to yell DANGER
            playground.dispatchEvent(warnPlayground)//I then yell out DANGER so that all the kids in the playground can hear me   
        }   
    }
)

playground.addEventListener(//My kid's friend can also hear everyone else in the playground 
    "DANGER",//the friend listens incase someone yells danger
    (customEvent) => {//when the friend hears DANGER, they do something
        RunAway()//the friend then runs away
    })



export const RideTicketHolders = () => {
    let html = `
    <div class = "person rider"></div>`
    contentTarget.innerHTML += html
    return contentTarget
    }



    export const TicketBooth = () => {
        contentTarget.innerHTML = `
            <div class="ticketBooth">
                <button id = "rideTicket">Ride Ticket</button>
                <button id = "foodTicket">Food Ticket</button>
            </div>`
    }












eventHub.addEventListener(
    "foodTicketPurchased",
    (customEvent) => {
        RideTicketHolders()
    })
    
