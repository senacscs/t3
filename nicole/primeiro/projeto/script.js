//  The function to change the class
var changeClass = function (r, className1, className2) {
    var regex = new RegExp("(?:^|\\s+)" + className1 + "(?:\\s+|$)");
    if (regex.test(r.className)) {
      r.className = r.className.replace(regex, " " + className2 + " ");
    } else {
      r.className = r.className.replace(
        new RegExp("(?:^|\\s+)" + className2 + "(?:\\s+|$)"),
        " " + className1 + " "
      );
    }
    return r.className;
  };
  
  //  Creating our button for smaller screens
  var menuElements = document.getElementById("navigation");
  var htmlElement = document.getElementsByTagName("html")[0];
  menuElements.insertAdjacentHTML(
    "afterBegin",
    '<button type="button" id="menutoggle" class="navtoogle" aria-hidden="true">Menu</button>'
  );
  // Adding a JS class when JS is activated
  changeClass(document.getElementsByTagName("html")[0], "no-js", "js");
  
  //  Toggle the class on click to show / hide the menu
  document.getElementById("menutoggle").onclick = function () {
    changeClass(this, "navtoogle active", "navtoogle");
  };
  
  // document click to hide the menu	credits to http://inpx.it/13WjECm
  document.onclick = function (e) {
    var mobileButton = document.getElementById("menutoggle"),
      buttonStyle = mobileButton.currentStyle
        ? mobileButton.currentStyle.display
        : getComputedStyle(mobileButton, null).display;
  
    if (
      buttonStyle === "block" &&
      e.target !== mobileButton &&
      new RegExp(" " + "active" + " ").test(" " + mobileButton.className + " ")
    ) {
      changeClass(mobileButton, "navtoogle active", "navtoogle");
    }
  };
  
  
  
  