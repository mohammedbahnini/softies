
const menuItems = document.querySelectorAll("#menu > ul > li > a");
const menuButton = document.querySelector(".menu-button");
console.log(menuItems);
for (item of menuItems) {
item.addEventListener("click", () => {
    console.log(item);
    const list = item.parentElement.classList.toggle("open");
});
}

menuButton.addEventListener("click", function () {
console.log(this);
const menuID = this.dataset.menu;
this.classList.toggle("open");
const menu = document
    .querySelector(`#${menuID}`)
    .classList.toggle("open");
if (this.classList.contains("open")) {
    document.body.style.overflow = "hidden";
} else {
    document.body.style.overflow = "auto";
}
});
