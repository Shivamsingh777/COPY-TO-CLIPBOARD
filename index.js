const Btn = document.getElementById("btn");
const input  = document.getElementById("input");

Btn.addEventListener("click", () => {


navigator.clipboard.writeText(input.value)
  Btn.classList.toggle("success");
  Btn.innerHTML = "Copied!";

  setTimeout(function () {
    Btn.classList.toggle("success");
    Btn.innerHTML = "Copy";
  }, 2000);
});