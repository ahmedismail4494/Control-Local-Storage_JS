

// Select Elements
let TheInput  = document.getElementById("search_input");
let allSpans  = document.querySelectorAll("#buttons span");
let results   = document.querySelector(".results > span");


//  1:-  Loop on The All Buttons 
allSpans.forEach(span => {
  span.addEventListener("click", (e) => {
    if(e.target.classList.contains("check_item")){
      CheckItem();
    }
    if(e.target.classList.contains("add_item")){
      AddItem();
    }
    if(e.target.classList.contains("delete_item")){
      DeleteItem();
    }
    if(e.target.classList.contains("show_item")){
      ShowItem();
    }
  })
});

  


//  2:-  The Check Function
function CheckItem(){
  if(TheInput.value  !== ""){
    if(localStorage.getItem(TheInput.value)){
      results.innerHTML = `Found Local Item Called <span> ${TheInput.value} </span>`;
    }else{
      results.innerHTML = `No Local Item Called <span> ${TheInput.value} </span>`;
    }
    
  }else{
    results.innerHTML = "Input Cant Be Empty";
  }
};

//  3:- The Add Function
function AddItem(){
  if (TheInput.value  !== "") {
    localStorage.setItem(TheInput.value, TheInput.value);
    results.innerHTML = ` Local Storage Item <span> ${TheInput.value} </span> Added `;
    TheInput.value = "";
  }else{
    results.innerHTML = "Input Cant Be Empty";
  }
};

//  4:- The Delete Function
function DeleteItem(){
  if (TheInput.value  !== "") {
    if (localStorage.getItem(TheInput.value)) {
      localStorage.removeItem(TheInput.value);
      results.innerHTML = ` The Local Storage Item <span> ${TheInput.value} </span> Is Delelted `;
    }else{
      results.innerHTML =  ` No Local Storage Item With The Name <span> ${TheInput.value} </span> `;
    }; 
    TheInput.value = "";
  }
  else{
    results.innerHTML = "Input Cant Be Empty";
  }  
};

//  5:- The Show Function
function ShowItem(){
  if (localStorage.length) {
    results.innerHTML = "";
    for (const [k,v] of Object.entries(localStorage)) {
      results.innerHTML += `<span>  The ${k} => Is ${v} , </span>`;
    }
    TheInput.value = "";
  }
  else{
    results.innerHTML = "No Item To Show";
  }
};

