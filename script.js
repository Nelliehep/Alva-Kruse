function scrollToColors() {
  document.getElementById("farger").scrollIntoView({ behavior: "smooth" });
}

function chooseColor(color) {
  document.getElementById("chosen-color").innerText = `Du valde färgen: ${color}`;
  document.getElementById("chosen-color").style.color = color;
}