import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  // get current date
  const date = new Date().toISOString().split("T")[0];
  // example: 2026-03-09

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency, date]);

  console.log(data);

  return data;
}

export default useCurrencyInfo;
