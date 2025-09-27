try {
    let cny_rate = document.getElementById('cny');
        let usd_rate = document.getElementById('usd');

        const rate = fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
            .then(res => res.json())
            .then(data => data.usd.cny);

        cny_rate.addEventListener('input', async function() {
            let r = await rate;
            usd.value = (this.value / r).toFixed(2);
        });

        usd_rate.addEventListener('input', async function() {
            let r = await rate;
            cny.value = (this.value * r).toFixed(5);
        });
} catch (error) {
    console.error
}