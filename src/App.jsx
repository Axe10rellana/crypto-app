//react
import { useEffect, useState } from "react";

//axios
import axios from "axios";

//components
import TableCoins from "./components/TableCoins";

const App = () => {
  //state variables
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  //useEffect
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
      );
      setCoins(res.data);
    };
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1>Mercado de monedas</h1>
        <input
          type="text"
          placeholder="Buscar una cryptomoneda"
          className="form-control bg-dark text-light border-0 mt-4 text-center formInput"
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
};

export default App;
