async function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
  
    const exchangeRate = data.rates[toCurrency];
    const result = (amount * exchangeRate).toFixed(2);
  
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
  }
  