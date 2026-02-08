// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

function moveNoButton() {
  const padding = 12; // keep away from edges

  // Temporarily reset transform to measure current position correctly
  const prevTransform = noBtn.style.transform;
  noBtn.style.transform = "translate(0px, 0px)";
  const rect = noBtn.getBoundingClientRect();
  noBtn.style.transform = prevTransform;

  // How far we are allowed to move without leaving the viewport
  const minX = -rect.left + padding;
  const maxX = (window.innerWidth - rect.right) - padding;
  const minY = -rect.top + padding;
  const maxY = (window.innerHeight - rect.bottom) - padding;

  // If space is tight (small screens), avoid NaN / weirdness
  const safeMinX = Math.min(minX, maxX);
  const safeMaxX = Math.max(minX, maxX);
  const safeMinY = Math.min(minY, maxY);
  const safeMaxY = Math.max(minY, maxY);

  // Random translate within allowed range
  const moveX = Math.floor(Math.random() * (safeMaxX - safeMinX + 1)) + safeMinX;
  const moveY = Math.floor(Math.random() * (safeMaxY - safeMinY + 1)) + safeMinY;

  noBtn.style.transition = "transform 0.25s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

// Desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile: touch
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // stops “tap” selecting/dragging images
  moveNoButton();
}, { passive: false });

// Optional: also move on click (works everywhere)
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
