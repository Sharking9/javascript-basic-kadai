const textchange = document.getElementById("text");
const btnchange = document.getElementById("btn");

btnchange.addEventListener("click", () => {
    textchange.textContent = "ボタンをクリックしました"
})