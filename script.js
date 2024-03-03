const divNotLoaded = document.querySelector(".not-loaded");

const div = document.createElement("div");
document.body.appendChild(div);

const text = "Hai! Cantik, apa kabar?";
const text2 = "Aku harap kamu baik-baik saja";
const text3 = "Aku ingin memberitahumu sesuatu";
const text4 = "Aku sayang kamu";
const text5 = "Melinda &hearts;";
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

//typing animation
div.style.position = "absolute";
div.style.left = "50%";
div.style.top = "30%";
div.style.transform = "translate(-50%, -50%)";
div.style.fontSize = "2em";
div.style.color = "white";
div.style.fontFamily = "monospace";

onload = () => {
  div.textContent = currentText;

  //create button with rounded a neon effect
  const button = document.createElement("button");
  //center the button
  button.style.position = "absolute";
  button.style.left = "50%";
  button.style.top = "50%";
  button.style.transform = "translate(-50%, -50%)";

  button.classList.add("button-neon");
  button.classList.add("rounded");
  button.textContent = "Click me &hearts;";
  document.body.appendChild(button);
  button.onclick = () => {
    //remove button
    button.remove();
    //add text to div then remove the div
    div.textContent = text;

    //remove the div after 3 seconds
    // setTimeout(() => {
    //   // div.remove();
    // }, 3000);
    //add the second text after 3 seconds
    setTimeout(() => {
      div.textContent = text2;
    }, 2000);
    //add the third text after 3 seconds
    setTimeout(() => {
      div.textContent = text3;
    }, 4000);
    //add the fourth text after 3 seconds
    setTimeout(() => {
      div.textContent = text4;
    }, 6000);
    //add the fifth text after 3 seconds
    setTimeout(() => {
      div.style.fontSize = "3em";
      //change text color to cyan
      div.style.color = "white";
      //make it bold
      div.style.fontWeight = "bold";
      //make it brighter
      div.style.textShadow = "0 0 10px cyan";
      div.textContent = text5;
    }, 8000);
    //remove the div after 3 seconds
    setTimeout(() => {
      div.remove();
    }, 10000);

    //remove the not loaded text after 15 seconds
    setTimeout(() => {
      divNotLoaded.classList.remove("not-loaded");
    }, 10000);
    // divNotLoaded.classList.remove("not-loaded");
  };
};
