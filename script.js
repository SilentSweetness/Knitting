const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const deleteButton = document.getElementsByClassName("delete");
const totalCount = document.getElementById("total-count")
//select increment and decrement buttons
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");
//global counter
let count = 0;
//display initial count value
totalCount.innerHTML = count;
//function to increment count
const handleIncrement = () => {
    count++;
    totalCount.innerHTML = count;
}
//function to increment count
const handleDecrement = () => {
    if (count < 0 || count === 0) {
        return 0;
    } else {
        count--;
    }
    totalCount.innerHTML = count;
}
//add click event
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);

//checks the input length 
function inputLength() {
    return input.value.length;
}

//creates a list item with a delete button
function createListElement() {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete");
        deleteButton.appendChild(document.createTextNode("Delete"));
        li.appendChild(deleteButton);
        deleteButton.addEventListener("click", function(e) {
            e.target.parentNode.remove()
          });
}

//creates list item after mouse click
function addListAfterClick() {
        if (inputLength() > 0) {
        createListElement();
        }
}

//creates list item after keypress
function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.keyCode === 13){
            createListElement();
        }
    }


//deletes item from list
    Array.prototype.slice.call(deleteButton).forEach(function(item) {
        item.addEventListener("click", function(e) {
          e.target.parentNode.remove()
        });
      
      })


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

/*row counter 
figure out how to not repeat code*/
const rowTotalCount = document.getElementById("row-total-count")
//select increment and decrement buttons
const rowIncrementCount = document.getElementById("row-increment-count");
const rowDecrementCount = document.getElementById("row-decrement-count");
//global counter
let rowCount = 0;
//display initial count value
rowTotalCount.innerHTML = count;
//function to increment count
const rowIncrement = () => {
    count++;
    rowTotalCount.innerHTML = count;
}
//function to increment count
const rowDecrement = () => {
    if (count < 0 || count === 0) {
        return 0;
    } else {
        count--;
    }
    rowTotalCount.innerHTML = count;
}
//add click event
rowIncrementCount.addEventListener("click", handleIncrement);
rowDecrementCount.addEventListener("click", handleDecrement);