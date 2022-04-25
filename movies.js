// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

const g = (id)=>{
    return document.getElementById(id)

}

const m = (el)=>{
    return document.createElement(el)

}






let amount = localStorage.getItem("amount")
let sub = amount
console.log(amount)
let h1 = m("h1")
h1.innerText =sub
g("navbar").append(h1)


const searchMovie = async()=>{
    try {
        let inp = g("search").value
        let res = await fetch(` https://www.omdbapi.com/?s=${inp}&apikey=550739fd`)
        let data = await res.json()
        console.log(data)
        let movie = data.Search
        return movie

    } catch (e) {
        console.log("error:-",e)

    }
}
let arr = []

const appendData=(mov)=>{
    g("movies").innerHTML = null;
    mov.forEach((el) => {
        let div = m("div")
        let img = m("img")
        img.src = el.Poster
        let name = m("p")
        name.innerText =el.Title

        let btn = m("button")
        btn.innerText = "Book Now"

        btn.setAttribute("class","book_now")
        let obj = {
            img :el.Poster,
            title:el.Title,
        }
       
        btn.onclick = ()=>{
            window.location.href = "checkout.html"
          
arr.push(obj)
            localStorage.setItem("movies",JSON.stringify(obj))
        }


        div.append(img,name,btn)
        g("movies").append(div)
    });
}


const main = async()=>{
    let data =await searchMovie()
    appendData(data)
    if(data === undefined){
        return false

    }

}

let id;
const debounce = (fun,delay)=>{
    if(id){
        clearTimeout(id)

    }
id = setTimeout(()=>{
    fun()
},delay)
}






























