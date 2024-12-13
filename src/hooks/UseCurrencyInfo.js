import { data } from "autoprefixer";
import { React, useEffect, useState } from "react";

export const UseCurrencyInfo = (currency) => {
  useEffect(() => {
    const [data, setData] = useState({});
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/$%7Bcurrency%7D.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response));

    console.log("Data stored : ", data);
  }, [currency]);
  return data;
};
