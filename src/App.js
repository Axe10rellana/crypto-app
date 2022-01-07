import { useEffect, useState } from "react";
import axios from "axios";

//componentes
import TableCoins from "./components/TableCoins";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
      );
      //console.log(res.data);
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
          placeholder="Busca una moneda"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
};

export default App;
