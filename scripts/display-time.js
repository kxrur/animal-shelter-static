document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector("header");
  let div = document.createElement("div");
  div.style.fontSize = "1rem";
  const element = document.querySelector("body");
  const primaryColor = window
    .getComputedStyle(element)
    .getPropertyValue("--text-primary:");
  div.style.color = primaryColor;
  div.style.marginLeft = "15rem";
  div.style.paddingTop = "1rem";

  function updateTime() {
    let date = new Date();
    div.textContent = date.toLocaleTimeString(undefined, { hour12: false });
  }
  updateTime();

  setInterval(updateTime, 1000);

  header.appendChild(div);
});
