const listItem = document.querySelectorAll(".menu__item");

function removeActive() {
  listItem.forEach((item) => {
    item.classList.remove("active");
  });
}

function clickItem() {
  listItem.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault(); //
      removeActive();
      item.classList.add("active");
    });
  });
}

clickItem();
