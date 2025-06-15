const countvalue = document.querySelector("#count-value")
const butns = document.querySelectorAll(".button-area")
butns.forEach(btns=>{
    btns.addEventListener('click',function(e){
        const btnclass = e.target.classList;
        let count = Number(countvalue.innerText)
        if(btnclass.contains("inc"))
            count++;
        else if(btnclass.contains("dec"))
            count--;
        else if(btnclass.contains("reload"))
            count=0;
        if(count>0)
            countvalue.style.color = "green"
        else if(count<0)
            countvalue.style.color = "red"

        countvalue.innerText = count
    })
})