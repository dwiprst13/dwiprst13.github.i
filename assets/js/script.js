document.addEventListener('mousedown', function(e) {
    if (!e.target.closest('form')) {
      e.preventDefault();
    }
  });
  

document.addEventListener("DOMContentLoaded", function () {
  const icon = document.getElementById("warning-icon");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("close-btn");

  icon.addEventListener("click", function () {
    popup.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });
});



