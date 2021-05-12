"use strict";

let items = [
  {
    verb: "mow the lawn",
    checked: false,
  },
  {
    verb: "get groceries",
    checked: false,
  },
  {
    verb: "call momma on mothers day",
    checked: false,
  },
];
let todoForm = document.querySelector(".todo-form");
let todoContainer = document.querySelector(".todo-container");
let check = document.querySelector("#check");
let cross = document.querySelector("#cross");
let moon = document.querySelector("#moon");
let sun = document.querySelector("#sun");

let all = document.querySelector(".all");
let active = document.querySelector(".active");
let complete = document.querySelector(".complete");

//HERE'S A FUNCTION THAT CREATES CARDS ON THE DOM FOR EACH ITEM IN THE ARRAY
// I'M CURRENTLY TRYING TO ADD THE SVGS BUT THEY'RE GIVING ME A TOUGH TIME; THE DELETE BUTTON AND CHECKED BUTTON.`
const display = () => {
  todoContainer.innerHTML = "";
  items.forEach((wombo, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let itemParagraph = document.createElement("p");
    let deleteButton = document.createElement("img"[`${cross}`]);
    let checkButton = document.createElement("img"[`${check}`]);
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("data-index", index);
    itemParagraph.textContent = wombo.verb;
    card.append(itemParagraph, deleteButton, checkButton);
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

// THIS IS A FUNCTION THAT LISTENS TO THE FORM SUBMIT AND
// ADDS A NEW CARD ON THE PAGE WITH THE CORRESPONDING ITEM FROM THE ARRAY THAT WAS SUBMITTED
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  todoContainer.innerHTML = "";
  let formData = new FormData(todoForm);
  let verb = formData.get("verb");
  let newObject = {
    verb: verb,
    checked: false,
  };
  todoForm.reset();
  items.push(newObject);
  display();
  console.log(items);
  formContainer.style.display = "none";
});

// THIS IS A FUNCTION TO DELETE A TODO IF ITS 'X' IS CLICKED
todoContainer.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.classlist.contains("delete")) {
    let index = e.target.getAttribute("data-index");
    items.splice(index, 1);
    display();
  }
});

// ADD A FUNCTION THAT FLIPS THE ITEM'S 'CHECKED' VALUE TO TRUE
// THIS IS CONSIDERED THE 'CHECK' FUNCTION.
// THIS FUNCTION CAN ALSO ADD A CLASS TO THE 'VERB' PORTION OF THE SELECTED ITEM TO GRAY IT OUT AND LINETHROUGH

// THIS IS A FUNCTION TO SHOW (FILTER) ALL OF THE ACTIVE TODOS
active.addEventListener("click", (e) => {});

// THIS IS A FUNCTION TO SHOW (FILTER) ALL OF THE COMPLETED TODOS
// complete.addEventListener("click",(e)=>{
// })
//THIS IS A FUNCTION TO FILTER ALL OF THE TODOS
// all.addEventListener("click", (e) => {
//   console.log(e);

// });
