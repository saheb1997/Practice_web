// alert("connected");
let hold = document.getElementById('changeTextButton').
    addEventListener('click',
        ()=> {
            let pragraph = document.getElementById("myParagraph");
            console.log(pragraph);
            
            pragraph.textContent = "the paragraph is changed";
            
    })
// console.log(hold);


//  <!-- Example 2: Traversing the Dom  and change the color of slected-->
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

//Example 6

document.getElementById("cilickMeButton").addEventListener('click',
    function(){
        alert("chai code");
    }
)

// Example 7:Event Delegation
document.getElementById("teaList").addEventListener('click',
    function (event) {
        if (event.target && event.target.matches('.teaItem')) {
            alert(`you slected : ${event.target.textContent}`);

        }
        
    }
)

// example 8
document.getElementById("feedbackForm").addEventListener('submit',
    function (event) {
        event.preventDefault()
        let feedback = document.getElementById("feedbackInput").value;
        console.log(feedback.value);
        document.getElementById("feedbackDisplay").textContent=
        `Feedback is : ${feedback}`
        
    }

)

//example 9
document.addEventListener('DOMContentLoaded',
    function(){
        document.getElementById('domStatus').textContent = 
        "Dom fully loaded";
    }
)

//example 10

document.getElementById('toggleHighlight').addEventListener('click',
    function(){
        let descriptionText =document.getElementById('descriptionText');
        // descriptionText.classList.add('hightlight');
        descriptionText.classList.toggle ('hightlight');

    }
)
 

 
