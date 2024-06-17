
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    formValidation();
  });
  
  let formValidation = () => {}; {
    if (input.value === "") {
      // Other codes are here
    } else {
      // Other codes are here
      acceptData();
    }
  };
  let data = {};

let acceptData = () => {}; {
    data["text"] = input.value;
    console.log(data);
  };