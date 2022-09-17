const markRead = document.getElementById("markRead");
let notiCount = document.getElementById("notiCount");
const notis = document.querySelectorAll(".noti");
const redDot = document.querySelectorAll(".red-dot");
const eventClass = document.querySelectorAll(".event");

// Mark All Read

markRead.addEventListener("click", () => {
  notiCount.style.visibility = "hidden";

  notis.forEach((noti) => {
    noti.style.backgroundColor = "white";
  });

  redDot.forEach((dot) => {
    dot.style.visibility = "hidden";
  });
});

// Mark Each Read on Click

notis.forEach((noti) => {
  noti.addEventListener("click", () => {
    noti.style.backgroundColor = "white";
    noti.querySelector("#redDot").style.visibility = "hidden";
    notiCount.innerHTML--;
    if (notiCount.innerHTML == 0) {
      notiCount.style.visibility = "hidden";
    }
  });
});

// let notiNumber = 0;

// redDot.forEach((dot) => {
//   if ((dot.style.visibility = "visible")) {
//     notiNumber++;
//     console.log(notiNumber);
//   }

//   notiCount.innerHTML = notiNumber;
// });
