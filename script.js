// function btn1(){
//     var x = document.createElement("FORM");
//     x.setAttribute("id", "myForm");
//     document.body.appendChild(x)

//     var y = document.createElement("input")
//     y.setAttribute("type", "text")
//     y.setAttribute("placeholder", "Zunga")
//     y.setAttribute("class", "input00")
//     document.getElementById("myForm").appendChild(y)

//     document.getElementById("button1").disabled = true
// }

function myConfig(){
    var data = confirm('Ты гей?')   
    
    if(data){
        var x = document.createElement("FORM");
            x.setAttribute("id", "myForm");
            document.body.appendChild(x)

        var y = document.createElement("input");
        y.setAttribute("type", "text");
        y.setAttribute("placeholder", "Нет ты гей");
        y.setAttribute("class", "input00");
        document.getElementById("myForm").appendChild(y)
    } else {
        var d = document.createElement("input")
        d.setAttribute("value", "Ну тогда на меня")
        d.setAttribute("type", "button");
        d.setAttribute("class", "btn3")
        d.setAttribute("onclick", "strashna()")
        document.body.appendChild(d)
    }
}

function strashna(){
    document.getElementById("body").className = "kartinka"
}

