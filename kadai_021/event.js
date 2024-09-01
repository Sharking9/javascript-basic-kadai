const textchange = document.getElementById("text");
const btnchange = document.getElementById("btn");

btnchange.addEventListener("click", () => {
    setTimeout(() => {
        textchange.textContent = "ボタンをクリックしました";
      }, 2000);
})