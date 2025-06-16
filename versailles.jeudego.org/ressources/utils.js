document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
      document.querySelectorAll(".menu-item > a").forEach(link => {
        link.addEventListener("click", function (e) {
          const parent = this.parentElement;

          // Close other open dropdowns
          document.querySelectorAll(".menu-item").forEach(item => {
            if (item !== parent) {
              item.classList.remove("open");
            }
          });

          // Toggle this one
          parent.classList.toggle("open");
          e.preventDefault(); // prevent link navigation if it's just for dropdown
        });
      });
    }
  });