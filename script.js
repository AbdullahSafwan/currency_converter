try {
  let cny_rate = document.getElementById("cny");
  let usd_rate = document.getElementById("usd");
  let exchangeRate;
  const getRate = async () => {
    const data = await fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
    );
    const json = await data.json();
    const para = document.createElement("p");
    const node = document.createTextNode(`1 USD = ${json.usd.cny} CNY`);
    para.appendChild(node);
    document.body.appendChild(para);
    return json.usd.cny;
  };

  (async () => {
    exchangeRate = await getRate();

    cny_rate.addEventListener("input", function () {
      usd.value = (this.value / exchangeRate).toFixed(2);
    });

    usd_rate.addEventListener("input", function () {
      cny.value = (this.value * exchangeRate).toFixed(5);
    });
  })();

  cny_rate.addEventListener("input", function () {
    usd.value = (this.value / exchangeRate).toFixed(2);
  });

  usd_rate.addEventListener("input", function () {
    cny.value = (this.value * exchangeRate).toFixed(5);
  });
} catch (error) {
  console.error;
}
