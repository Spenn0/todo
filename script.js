"use strict";

let items = [
  {
    verb: "mow the lawn",
  },
  {
    verb: "get groceries",
  },
  {
    verb: "call momma on mothers day",
  },
];
let todoForm = document.querySelector(".todo-form");
let todoContainer = document.querySelector(".todo-container");
let check = document.querySelector("#check");
let cross = document.querySelector("#cross");
let moon = document.querySelector("#moon");
let sun = document.querySelector("#sun");

const display = () => {
  todoContainer.innerHTML = "";
  items.forEach((wombo, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let itemParagraph = document.createElement("p");
    let deleteButton = document.createElement("img");
    let checkButton = check;
    // deleteButton.innerHTML = cross;
    checkButton.classList.add("check");
    // deleteButton.classList.add("delete");
    deleteButton.setAttribute("data-index", index);
    itemParagraph.textContent = wombo.verb;
    card.append(itemParagraph, cross, check);

    todoContainer.append(card);
  });
};

// checkButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (event) {
//     checkButton.classList.add("checked");
//   }
// });
display();

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  todoContainer.innerHTML = "";
  let formData = new FormData(todoForm);
  let verb = formData.get("verb");
  let newObject = {
    verb: verb,
  };
  todoForm.reset();
  items.push(newObject);
  display();
  console.log(items);
  formContainer.style.display = "none";
});

todoContainer.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.classlist.contains("delete")) {
    let index = e.target.getAttribute("data-index");
    contacts.splice(index, 1);
    display();
  }
});
