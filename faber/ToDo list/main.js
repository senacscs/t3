alert("isso está funcionando");

let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
 
    formValidation();
  });
 
  let formValidation = () => {};
 
  let formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Post cannot be blank";
      console.log("failure");
    } else {
      console.log("successs");
      msg.innerHTML = "";
    }
  };
 
  let data = {};
 
let acceptData = () => {};
 
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
  };
 
  let formValidation = () => {
    if (input.value === "") {
      // Other codes are here
    } else {
      // Other codes are here
      acceptData();
    }
  };
 
  let createPost = () => {
    posts.innerHTML += ``;
  };
 
  let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
  };
 
  let acceptData = () => {
    // Other codes are here
 
    createPost();
  };
 