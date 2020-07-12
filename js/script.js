"use strict";

let d = new Date();
let time = 1000;

document.getElementById("year" ).innerHTML = d.getFullYear();

var myVar = setInterval(timer, 1000);


function timer() {
  var d = new Date();
  document.getElementById("showTime").innerHTML = d.toLocaleTimeString();
  if (d.getHours() == 9) {
    displayImage("morning");
    getTimeLeft(d, "morning");
  } else if (d.getHours() == 15) {
    displayImage("afternoon");
    getTimeLeft(d, "afternoon");
  } else if (d.getHours() == 21) {
    displayImage("night");
    getTimeLeft(d, "night");
  } else {
    displayImage("all_time");
    getTimeLeft(d, "all_time");
  }
};

function displayImage(period) {
  let img = '<img src="{{ src }}" alt="{{ alt }}">';
  let descText, fullDesc = ""
  if (period == "morning") {
    img = img.replace("{{ src }}", "images/morning.jpg").replace("{{ alt }}", "I read great quotes in the morning.");
    descText = "My Awesome Morning";
    fullDesc = "Whatever I envisioned in the morning, I set out to achieve through the day. Therefore, I feed my mind and spirit with positive and uplifting thoughts to keep me activated all through the hassle. This I do by reading great quotes, setting achievable plans and eating healthy.";
  } else if (period == "afternoon") {
    img = img.replace("{{ src }}", "images/afternoon.jpg").replace("{{ alt }}", "I read relevant programming books.");
    descText = "What A Great Afternoon";
    fullDesc = "As the day progresses, I take a look at the plans and check what has been accomplished, study what needs to be accomplished and then get my body strong by taking Lunch. Have I told you? I use this moment to read about new technologies and programming concepts that I will love to dive deeper into during the nights.";
  } else if (period == "night") {
    img = img.replace("{{ src }}", "images/night.jpg").replace("{{ alt }}", "I do a lot of programming.");
    descText = "The Night Is Progressing As Planned";
    fullDesc = "This is usually the time to take it slow for a while. Whatever is left unaccomplished at this period is normally studied critically and shifted to the next day's task list. This is because it is time to face the real challenge and fun too. Guess...? Programming.";
  } else {
    img = img.replace("{{ src }}", "images/all_time.jpg").replace("{{ alt }}", "I engage with family and loved ones.");
    descText = "Always Having A great Moment";
    fullDesc = "On a normal, I spend quality time with my family, friends and loved ones. This is the time I get to look up new technologies too. What to program, news, tech, social media and even Slack Workspace get my time at these moments."
  }
  document.getElementById("showImage").innerHTML = img;
  document.getElementById("descText").innerHTML = descText;
  document.getElementById("fullDesc").innerHTML = fullDesc;

};

function getTimeLeft(time, period) {
  let timeLeft = ""
  if (period == "morning") {
    timeLeft = `${1 - time.getHours()}:${59 - time.getMinutes()}:${59 - time.getSeconds()}`;
  } else if (period == "afternoon") {
    timeLeft = `${1 - time.getHours()}:${59 - time.getMinutes()}:${59 - time.getSeconds()}`;
  } else if (period == "night") {
    timeLeft = `${1 - time.getHours()}:${59 - time.getMinutes()}:${59 - time.getSeconds()}`;
  } else {
    if (time.getHours() > 9 && time.getHours() < 15) {
      timeLeft = `${15 - time.getHours()}:${59 - time.getMinutes()}:${59 - time.getSeconds()}`;
    } else if (time.getHours() > 15 && time.getHours() < 21) {
      timeLeft = `${21 - time.getHours()}:${59 - time.getMinutes()}:${59 - time.getSeconds()}`;
    } else {
      timeLeft = `${9 - time.getHours()}:${59 - time.getMinutes()}:${59 - time.getSeconds()}`;
    }
  }
  document.getElementById("timeLeft").innerHTML = timeLeft
}
