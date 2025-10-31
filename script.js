//your JS code here. If required.
const modal = document.getElementById("myModal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close-modal");

    openBtn.onclick = () => {
  modal.style.display = "block"; // ✅ changed from flex to block
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};