import { useState } from "react";

export default function useCurencyInfo() {
  const [data, setData] = useState({});
  fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  )
    .then((res) => res.json())
    .then((res) => setData.apply(res[currency]));
  console.log(data);
  return data;
}
