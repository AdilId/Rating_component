let mainDiv = document.querySelector(".container .main-div");
let numbersDiv = document.querySelectorAll(
  ".container .main-div .numbers .number"
);
let btn = document.querySelector(".container .main-div .btn");
let active;

numbersDiv.forEach((number) => {
  number.addEventListener("click", (e) => {
    numbersDiv.forEach((number) => {
      number.classList.remove("active");
    });
    number.classList.add("active");
    active = document.querySelector(".active");
  });
});

btn.onclick = () => {
  mainDiv.innerHTML = "";
  let image = document.createElement("img");
  image.src = "images/illustration-thank-you.svg";
  mainDiv.appendChild(image);
  let ratingDiv = document.createElement("div");
  ratingDiv.className = "rating-div";
  let ratingDivText = document.createTextNode(
    `You selected ${active.innerHTML} out of 5`
  );
  ratingDiv.appendChild(ratingDivText);
  ratingDiv.style.cssText =
    "margin-top: 35px; background-color: var(--rating-background-color); border-radius: 20px; padding: 6px 26px; font-size: 14px; color: var(--orange-second-color); margin-bottom: 15px";
  mainDiv.appendChild(ratingDiv);
  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("Thank You!");
  h2.appendChild(h2Text);
  h2.style.fontSize = "28px";
  mainDiv.appendChild(h2);
  let p = document.createElement("p");
  p.innerHTML =
    "We appreciate you taking the time to give a rating.<br>If you ever need more support, don't hesitate to<br>get in touch!";
  p.style.textAlign = "center";
  mainDiv.style.cssText =
    "display: flex; flex-direction: column; align-items: center;";
  mainDiv.appendChild(p);
};
