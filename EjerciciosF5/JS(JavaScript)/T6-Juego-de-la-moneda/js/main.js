const flipBtn = document.getElementById("flip_btn");
const resetBtn = document.getElementById("reset_btn");
const headImage = document.getElementById("heads");
const tailImage = document.getElementById("tails");
const mainCoin = document.getElementById("main_coin");
const headCountElement = document.getElementById("count_heads")
const tailCountElement = document.getElementById("count_tails")

let headCount = 0;
let tailCount = 0;

function updateCounts(){
    headCountElement.textContent = `Cara: ${headCount}`;
    tailCountElement.textContent = `Cruz: ${tailCount}`;
}

function lanzarMoneda() {
    headImage.style.display = "none";
    tailImage.style.display = "none";
    mainCoin.style.display = "none";

    requestAnimationFrame(() => {
        const result = Math.round(Math.random()) + 1;
        if (result == 1) {
            headCount += 1;
            requestAnimationFrame(() => {
                headImage.style.display = "block";

            });
        } else {
            tailCount += 1;
            requestAnimationFrame(() => {
                tailImage.style.display = "block";
            });
        }
        updateCounts()
    });

}

function resetCount(){
    headCount = 0;
    tailCount = 0;

    updateCounts();


    mainCoin.style.display = "block";
    headImage.style.display = "none";
    tailImage.style.display = "none";

}

flipBtn.addEventListener("click", lanzarMoneda);
resetBtn.addEventListener("click", resetCount);
