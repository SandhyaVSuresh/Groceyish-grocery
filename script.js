document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.querySelector(".menu-icon");
    var navBar = document.querySelector('.nav-bar');
  
    menuIcon.addEventListener("click", function() {
        navBar.classList.toggle('active');
        toggleMenuIcon();
    });
  
    function toggleMenuIcon() {
        if (navBar.classList.contains('active')) {
            menuIcon.innerHTML = '<i class="bi bi-x"></i>';
        } else {
            menuIcon.innerHTML = '<i class="bi bi-list"></i>';
        }
    }
  });
  
//   footer
document.addEventListener("DOMContentLoaded", function() {
    var plusElements = document.querySelectorAll(".plus");
    
    plusElements.forEach(function(plus) {
        plus.addEventListener("click", function() {
            var content = this.parentElement.nextElementSibling;
            content.classList.toggle('show');
            toggleMenuIcon(content, plus);
        });
    });
  
    function toggleMenuIcon(content, plus) {
      if (content.classList.contains('show')) {
          plus.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5z"/></svg>';
      } else {
          plus.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg>';
      }
    }
  });
  
