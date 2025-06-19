const srchbox = document.getElementById('Serach-inp')
console.log(srchbox)
document.getElementById('submit-butn').addEventListener('click',function(e){
    e.preventDefault()
    const srchvalue = srchbox.value.trim();
    // Remove  the whitespace

    if(srchvalue == "")
        alert("Please Enter the City Name")
    else{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${srchvalue}&units=metric&appid=30c57aaa31356639f82849e3808f9f81`)
        .then((respond)=>{ return respond.json()})
        .then((data)=>{
            showUI(data)
        }).catch((error)=>console.log(error))
    }

})


function showUI(data){
    console.log(data)

    if(data.cod==404)
        alert("Error 404 City not found")
    const temp = data.main.temp
    const location = data.name
    const weather = data.weather[0].main
    const logo = data.weather[0].icon

    const html = `<div class="result-div-inner">
        <img src="https://openweathermap.org/img/wn/${logo}@2x.png" alt="">
    </div>
    <div class="result-div-inner">
        <h1>${location}</h1>
    </div>
    <div class="result-div-inner" >
        <h3>${temp}<sup>o</sup>C</h3>
    </div>
    <div class="result-div-inner">
        <h4>${weather}</h4>
    </div>`

    document.getElementById("result-div").innerHTML = html

    
}