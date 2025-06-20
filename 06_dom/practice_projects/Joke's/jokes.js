const jokespara = document.querySelector(".jokesdiv")
const button = document.querySelector(".jokesbutton")
console.log(jokespara)
console.log(button)
const url = "https://icanhazdadjoke.com/"
let interval

function StartInterval(){
    interval = setInterval((jokesgenrator),10000)
}
async function jokesgenrator(params) {
    button.setAttribute("disabled", "disabled");
    try {
        const response = await fetch(url,{
            headers:{
                Accept:"application/json",
            },
        })
        const data = await response.json();
        console.log(data.joke)
        jokespara.innerHTML = data.joke
    } catch (error) {
        jokespara.innerHTML = "Error"
    }
    finally{
        jokespara.removeAttribute("disabled");
    }
    
}

jokesgenrator()
StartInterval()
button.addEventListener('click',function(){
    jokesgenrator()
    clearInterval(interval)
    StartInterval()
})