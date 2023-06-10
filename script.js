window.onload = function() {
  const currentDateElement = document.getElementById('current-date');
  const currentDate = new Date();
  currentDateElement.innerText = currentDate.toDateString();
};


window.onload = function() {
  const currentTimeElement = document.getElementById('current-time');
  const currentTime = new Date();
  currentTimeElement.innerText = currentTime.toLocaleTimeString();
};
