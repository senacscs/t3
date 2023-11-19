document.querySelector("input[type=checkbox]").addEventListener("change", function() {
    if (this.checked) {
      document.querySelectorAll("details").forEach(function(details) {
        details.open = true;
      });
    } else {
      document.querySelectorAll("details").forEach(function(details) {
        details.open = false;
      });
    }
  });  