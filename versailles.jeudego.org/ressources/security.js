let correctCode = ""; // Global variable

window.onload = function () {
  const protectedContainer = document.getElementById("protected-container");
  const checker = document.getElementById("security-check");

  // ✅ If already passed, show protected content and skip test
  if (sessionStorage.getItem("securityPassed") === "true") {
    protectedContainer.style.display = "block";
    checker.style.display = "none";
    return;
  }

  // Otherwise, prepare the test
  const images = [
    { src: "ressources/verif/Go_Atari.png", code: "Atari" },
    { src: "ressources/verif/Go_Hane.png", code: "Hane" },
    { src: "ressources/verif/Go_Ikken_Tobi.png", code: "Ikken Tobi" },
    { src: "ressources/verif/Go_Keima.png", code: "Keima" },
    { src: "ressources/verif/Go_Kosumi.png", code: "Kosumi" },
    { src: "ressources/verif/Go_Tobi.png", code: "Tobi" }
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  const chosenImage = images[randomIndex];
  document.getElementById("random-image").src = chosenImage.src;
  correctCode = chosenImage.code;
  console.log("Chosen code is:", correctCode);
};

function runSecurityCheck() {
  const input = document.getElementById("access-code").value.trim();
  const message = document.getElementById("message");
  const checker = document.getElementById("security-check");
  const protectedContainer = document.getElementById("protected-container");

  if (input === correctCode) {
    sessionStorage.setItem("securityPassed", "true");
    protectedContainer.style.display = "block";
    checker.style.display = "none";
    message.textContent = "";
    console.log("Correct");
  } else {
    protectedContainer.style.display = "none";
    message.textContent = "Incorrect code. Try again.";
    console.log("False");
  }
}