const titleTexts = ["Chapter 1", "Chapter II", "Chapter 3", "Chapter 4"];
const colors = ["#348898", "#13678a", "#107dac", "#3d4a71"];
const subColor = ["#b294c8", "#f4ffdc", "#09331d", "#5a1d75"];
const container = document.querySelector(".container");
const container2 = document.querySelector("#container-2");

for (let i = 0; i < titleTexts.length; i++) {
  const title = document.createElement("h1");
  const subTitle = document.createElement("h2");
  title.textContent = titleTexts[i];
  subTitle.textContent = "How dom works";
  title.style.color = colors[i];
  title.style.fontSize = `${i * 25}px`;
  subTitle.style.color = subColor[i];
  container.appendChild(title);
  container.appendChild(subTitle);
}