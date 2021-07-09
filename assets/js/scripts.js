// SCROLL TO TOP ON PAGE RELOAD
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// PHONE MODAL ELEMENT
const phoneModal = document.getElementById("phone-modal");

// PHONE MODAL ELEMENT
const emailModal = document.getElementById("email-modal");

// MODAL BUTTON
const phoneBtn = document.querySelector(".phone-number");

// MODAL BUTTON
const emailBtn = document.querySelector(".email-address");

// CLOSE BUTTON
const phoneCloseBtn = document.getElementById("phone-closeBtn");

// CLOSE BUTTON
const emailCloseBtn = document.getElementById("email-closeBtn");

// OUTSIDE CLICK ON WINDOW
window.addEventListener("click", function (e) {
  if (e.target == phoneModal) {
    phoneModal.style.display = "none";
  }

  if (e.target == emailModal) {
    emailModal.style.display = "none";
  }
});

// EVENT LISTENER FOR OPENING MODAL
phoneBtn.addEventListener("click", function () {
  phoneModal.style.display = "block";
});

emailBtn.addEventListener("click", function () {
  emailModal.style.display = "block";
});

// EVENT LISTENER FOR CLOSING MODAL
emailCloseBtn.addEventListener("click", function () {
  emailModal.style.display = "none";
});

phoneCloseBtn.addEventListener("click", function () {
    phoneModal.style.display = "none";
});
