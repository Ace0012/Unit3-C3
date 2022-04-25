// Store the wallet amount to your local storage with key "amount"

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=550739fd


const g = (id)=>{
    return document.getElementById(id)

}

const m = (el)=>{
    return document.createElement(el)

}






let h1  = m("h1")

let sum = 0
h1.innerText = sum

    g("navbar").append(h1)

const addAmount = ()=>{
    let inp = g("amount").value
  
    sum =sum+Number(inp)
    console.log(sum)
    h1.innerText = sum
    localStorage.setItem("amount",sum)

    }


    const goAnother = ()=>{
        window.location.href = "movies.html"
        
    }





