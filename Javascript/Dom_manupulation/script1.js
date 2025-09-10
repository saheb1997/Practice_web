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

// example-3 Manipulation Dom elements
document.getElementById("changeorder").addEventListener('click',
    function(){
        let coffeType = document.getElementById("coffeType");
        coffeType.textContent = "Espresso";
        coffeType.style.background = "brown";
        coffeType.style.padding = "5px";
    }
)

//Example 4: create and Inserting Elements 
document.getElementById("addNewItem").addEventListener('click',
    function(){
        let newItem = document.createElement('li');
        newItem.textContent = "Eggs";

        document.getElementById("shoppingList").appendChild(newItem);
    }
)

// Example 5 : Removing the Dom elements 
document.getElementById("removeLastTask").addEventListener('click',
    function(){
        let taskList = document.getElementById("taskList");
        taskList.lastElementChild.remove()
    }
)

 

 