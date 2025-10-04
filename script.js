try {
  const cny_rate = document.getElementById("cny");
  const usd_rate = document.getElementById("usd");
  const para = document.getElementById("rate-para");
  const fetchButton = document.getElementById("fetch-button");

  // const url ="htps://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";
  const url =
    "https://www.xe.com/api/protected/midmarket-converter/";

  const getRate = async () => {
    try {
      const data = await fetch(url);
      const json = await data.json();
      if (json.result !== "success") {
        para.innerText = "Failed to fetch exchange rate.";
        return null;
      }

      const rate = json.conversion_rates.CNY;
      para.innerText = `1 USD = ${rate} CNY at ${new Date().toLocaleString()}`;
      return rate;
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      para.innerText = "Error fetching exchange rate.";
      return null;
    }
  };

  const updateRates = (exchangeRate) => {
    cny_rate.addEventListener("input", () => {
      usd_rate.value = (cny_rate.value / exchangeRate).toFixed(2);
    });

    usd_rate.addEventListener("input", () => {
      cny_rate.value = (usd_rate.value * exchangeRate).toFixed(5);
    });
  };

  const fetchRate = async () => {
    const exchangeRate = await getRate();
    if (exchangeRate) updateRates(exchangeRate);
  };

  fetchButton.addEventListener("click", fetchRate);

  fetchRate();
} catch (error) {
  console.error("Script error:", error);
}
