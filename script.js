//your JS code here. If required.
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

openBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

// ✅ Detect click outside the modal-content
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};