const textElement = document.getElementById("timeInfo");
const hoursElement = document.getElementById("hour_hand");
const minutesElement = document.getElementById("minute_hand");
const secondsElement = document.getElementById("second_hand");

let showDate = true;

function animate() {
  const date = new Date();

  const day = date.getDate();
  const hour = date.getHours() + date.getMinutes() / 60;
  const minute = date.getMinutes() + date.getSeconds() / 60;
  const second = date.getSeconds() + date.getMilliseconds() / 1000;

  hoursElement.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
  minutesElement.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
  secondsElement.setAttribute("transform", `rotate(${(360 / 60) * second})`);

  const ampm = date.getHours() >= 12 ? "PM" : "AM";
  textElement.textContent = showDate ? day : ampm;

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

textElement.addEventListener("click", () => {
  showDate = !showDate;
});
