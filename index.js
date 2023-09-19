const select = document.getElementById("select-box");
const inputs = document.getElementById("inputs");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const generateBtn = document.querySelector("generate");
const body = document.getElementById("bgcolor");
const showdata = document.getElementById("showValue");


//For show-hide color options
select.addEventListener("change", function (event) {
    if (event.target.value == "") {
        input1.style.display = "none"
        input2.style.display = "none"
    }
    else if (event.target.value == "gradient") {
        input1.style.display = "block"
        input2.style.display = "none"
    }
    else if (event.target.value == "basic") {
        input1.style.display = "none"
        input2.style.display = "block"
    }
})
//For generate background color

//for gradient color
function setbgcolor(){
    body.style.background = "linear-gradient(to right ,"+ color1.value + "," + color2.value + ")"; 
    
    showdata.textContent="Copy Color Code : "+body.style.background+ ";";
}

color1.addEventListener("input", setbgcolor);
color2.addEventListener("input", setbgcolor);

//for basic color
function setbasiccolor(){
    body.style.background = color3.value ; 

    showdata.textContent="Copy Color Code : "+body.style.background+ ";";  
}

color3.addEventListener("input", setbasiccolor);




