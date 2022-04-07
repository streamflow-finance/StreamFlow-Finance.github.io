function mobileMenu() {
    var menu = document.getElementById("mobile-menu");
    var content = document.getElementById("content");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }

    if(content.style.display === "none"){
        content.style.display = "block";
    }else{
        content.style.display = "none";
    }
  
    var threeLines = document.getElementById("three-lines");
    var xButton = document.getElementById("x-button");

    if (threeLines.style.display === "none"){
      threeLines.style.display = "block";
      }else{
        threeLines.style.display = "none";
      }

    if (xButton.style.display === "block"){
      xButton.style.display = "none";
    }else{
      xButton.style.display = "block";
    }
    
}

  