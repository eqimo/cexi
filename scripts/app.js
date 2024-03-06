function toggleList() {
  var list = document.getElementById("mainlist");
  var showMoreButton = document.querySelector(".showmorebutton");
  var showLessButton = document.querySelector(".showlessbutton");

  if (list.style.display === "none") {
    list.style.display = "block";
    showMoreButton.style.display = "none";
    showLessButton.style.display = "inline-block";
  } else {
    list.style.display = "none";
    showMoreButton.style.display = "inline-block";
    showLessButton.style.display = "none";
  }
}
// NUMBER COPY
function copyToClipboard() {
  var phoneNumber = document.getElementById("li-6a").innerText;
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = phoneNumber;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);

  // Display a non-blocking toast notification
  showToast("Telephone number copied to clipboard: " + phoneNumber);
}

function showToast(message) {
  var toast = document.getElementById("toast");
  toast.innerHTML = message;
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000); // Hide after 3 seconds
}

//GALLERY_____script is linked

//scrolldown
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.getElementById("contactButton").addEventListener("click", function () {
  document.querySelector("#header-3").scrollIntoView({
    behavior: "smooth",
  });
});
document.getElementById("messagebutton").addEventListener("click", function () {
  document.querySelector("#form").scrollIntoView({
    behavior: "smooth",
  });
});
//change language
