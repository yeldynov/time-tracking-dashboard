const dailyBtn = document.querySelector('#daily-btn');
const weeklyBtn = document.querySelector('#weekly-btn');
const monthlyBtn = document.querySelector('#monthly-btn');

const hours = document.querySelectorAll('.hours h1');
const lastTime = document.querySelectorAll('.hours p');

function dailyData() {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) =>
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
        lastTime[i].innerHTML =
          'Last Day - ' + data[i].timeframes.daily.previous + 'hrs';
      })
    );
}

function weeklyData() {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs';
        lastTime[i].innerHTML =
          'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs';
      });
    });
}

function monthlyData() {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs';
        lastTime[i].innerHTML =
          'Last Month - ' + data[i].timeframes.monthly.previous + 'hrs';
      });
    });
}

dailyBtn.addEventListener('click', () => {
  dailyBtn.classList.add('active');
  weeklyBtn.classList.remove('active');
  monthlyBtn.classList.remove('active');
  dailyData();
});

weeklyBtn.addEventListener('click', () => {
  weeklyBtn.classList.add('active');
  dailyBtn.classList.remove('active');
  monthlyBtn.classList.remove('active');
  weeklyData();
});

monthlyBtn.addEventListener('click', () => {
  monthlyBtn.classList.add('active');
  dailyBtn.classList.remove('active');
  weeklyBtn.classList.remove('active');
  monthlyData();
});
