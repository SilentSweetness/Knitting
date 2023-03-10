const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

const deleteButton = document.getElementsByClassName("delete");

function inputLength() {
    return input.value.length;
}

function createListElement() {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
        var deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete");
        deleteButton.appendChild(document.createTextNode("Delete"));
        li.appendChild(deleteButton);
        deleteButton.addEventListener("click", function(e) {
            e.target.parentNode.remove()
          });
}

function addListAfterClick() {
        if (inputLength() > 0) {
        createListElement();
        }
}

function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.keyCode === 13){
            createListElement();
        }
    }


    Array.prototype.slice.call(deleteButton).forEach(function(item) {
        item.addEventListener("click", function(e) {
          e.target.parentNode.remove()
        });
      
      })


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);