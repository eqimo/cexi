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
  var phoneNumber = document.getElementById("telephoneNumber").innerText;
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
function switchLanguage(languageCode) {
  fetch(`http://localhost:3000/${languageCode}.json`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("nav-a-1").innerText = data.gallery;
      document.getElementById("nav-a-2").innerText = data.about_us;
      document.getElementById("nav-a-3").innerText = data.contact_us;
      document.getElementById("header-1").innerText = data.service_title_1;
      document.getElementById("header-2").innerText = data.service_title_2;
      document.getElementById("header-3").innerText = data.service_title_3;
      document.getElementById("header-4").innerText = data.service_title_4;
      document.getElementById("para-1").innerText = data.service_text_1;
      document.getElementById("para-2").innerText = data.service_text_2;
      document.getElementById("para-3").innerText = data.service_text_3;
      document.getElementById("para-4").innerText = data.service_text_4;
      document.getElementById("para-5").innerText = data.service_text_5;
      document.getElementById("para-6").innerText = data.contact_text;
      document.getElementById("showmorebutton").innerText = data.button_1;
      document.getElementById("showlessbutton").innerText = data.button_2;
      document.getElementById("contactButton").innerText = data.button_3;
      document.getElementById("messagebutton").innerText = data.button_4;
      document.getElementById("li-1").innerText = data.li_1;
      document.getElementById("li-2").innerText = data.li_2;
      document.getElementById("li-3").innerText = data.li_3;
      document.getElementById("li-4").innerText = data.li_4;
      document.getElementById("li-5").innerText = data.li_5;
      document.getElementById("li-6").innerText = data.li_6;
      document.getElementById("li-7").innerText = data.li_7;
      document.getElementById("li-8").innerText = data.li_8;
      document.getElementById("form-name").innerText = data.form_name;
      document.getElementById("form-mail").innerText = data.form_mail;
      document.getElementById("form-msg").innerText = data.form_msg;
      document.getElementById("form-submit").innerText = data.form_submit;
    })
    .catch((error) => console.error("Error loading language file", error));
}

switchLanguage("ka");
