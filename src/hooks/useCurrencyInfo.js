import { useState, useEffect } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {

    if (currency) {

      fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      )
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch((error) => {
          console.error("Error fetching currency data:", error);
          setData({});
        });
    }

  }, [currency]);
  return data;
}
