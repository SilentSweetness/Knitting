const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const deleteButton = document.getElementsByClassName("delete");

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