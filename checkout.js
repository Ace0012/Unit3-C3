// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount = localStorage.getItem("amount")
console.log(amount)
let data = JSON.parse(localStorage.getItem("movies"))

console.log(data)


const g = (id)=>{
    return document.getElementById(id)

}

const m = (el)=>{
    return document.createElement(el)

}



let sub = 0

let h1 = m("h1")
h1.innerText = amount
g("navbar").append(h1)


let div = m("div")
let img = m("img")
img.src = data.img
let name = m("h3")
name.innerText = data.title
div.append(name,img)
g("movie").append(div)
    


const conFirm = ()=>{

let  inp2 = g("number_of_seats").value
if(inp2!==null)
{
    let total = inp2*100
    if(total>amount){
        alert("Insufficient Balance ")

    }
    else{
        alert("booking successful")
        sub = amount-total
        localStorage.setItem("amount",sub)
    }
}
}