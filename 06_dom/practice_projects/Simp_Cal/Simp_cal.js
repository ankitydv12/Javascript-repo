const result = document.querySelector("#final-result")
const n1 = document.querySelector("#n1")
const n2 = document.querySelector("#n2")
function calbutn(){
    let num1 = Number(n1.value);
    let num2 = Number(n2.value)
    const op = document.getElementById("operator").value
    let res
    switch(op)
    {
        case "+":
            res = num1 + num2
            break
        case "-":
            res = num1 - num2
            break
        case "*":
            res = num1 * num2
            break
        case "/":
            if(num2==0)
            {
                alert("Math Error")
                return
            }
            res = num1 / num2
            break
        default:
            alert("Select the operator")
    }
    result.innerHTML = res

    
}
function resetBtn() {
  var r = (document.getElementById("final-result").innerHTML = "");

  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";

  document.getElementById("operator").value = "undefined";
}
