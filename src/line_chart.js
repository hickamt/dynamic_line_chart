import { setSparklineData } from "./api.js"; // Coingecko API Call

const btcURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=true";
const ethURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=true";

// Set 168 x-axis data points | 7-days of data points
function setLabels() {
  let labels = [];
  for(let i = 0; i < 168; ++i) {
    labels.push(i);
  }
  return labels;
}

// Initial Chart Line Configuration
const btcOriginal = [0, 10, 5, 2, 20, 30, 45];
const ethOriginal = [10, 20, 30, 15, 3, 18, 12];

const data = {
  labels: setLabels(),
  datasets: [
    {
      label: "Bitcoin",
      backgroundColor: "rgb(0, 99, 132)", // blue line
      borderColor: "rgb(0, 99, 132)", // blue line
      pointBorderWidth: 0,
      data: btcOriginal,
    },
    {
      label: "Ethereum",
      backgroundColor: "rgb(255, 99, 132)", // red line
      borderColor: "rgb(255, 99, 132)", // red line
      data: ethOriginal,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};
// End of initial line configuration


// Button onClick() updated data for each line
const myChart = new Chart(document.getElementById("myChart"), config);

document.getElementById("button-refresh").onclick = updateChart;

async function updateChart() {
  myChart.data.datasets[0].data = await setSparklineData(btcURL);
  myChart.update();

  myChart.data.datasets[1].data = await setSparklineData(ethURL);
  myChart.update();
}
