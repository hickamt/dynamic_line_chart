// NOTE: to export the 'setSparklineData()' method for use in another file,
// you must add the <script type="module" src="line_chart.js"></script> to the
// body of the HTML file

// ** CoinGecko API Fetch()
async function fetchCryptoData(URL) {
  // const geckoURL =
  //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=true";
  const response = await fetch(URL);
  return await response.json();
}

export async function setSparklineData(URL) {
  let sparklineData = [];
  let cryptoData = await fetchCryptoData(URL);

  for (let key in cryptoData) {
    for (let index in cryptoData[key].sparkline_in_7d.price) {
      sparklineData.push(cryptoData[key].sparkline_in_7d.price[index]);
    }
  }

  console.table(sparklineData);
  return sparklineData;
}
// ** CoinGecko API Fetch()