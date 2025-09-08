// alert("connected");
let hold = document.getElementById('changeTextButton').
    addEventListener('click',
        ()=> {
            let pragraph = document.getElementById("myParagraph");
            console.log(pragraph);
            
            pragraph.textContent = "the paragraph is changed";
            
    })
// console.log(hold);


// exmple2
document
    .getElementById("hightlightFirstCity")
    .addEventListener("click", function () {
        let citiesList = document.getElementById("citiesList")
        citiesList.firstElementChild.classList.add("hightlight");
         
         
    });
 

 