const CoinRow = ({ coin, index }) => {
  return (
    <tr className="trBody">
      <td>{index}</td>
      <td>
        <img
          src={coin.image}
          alt={coin.name}
          className="imagen img-fluid me-2"
        />
        <span>{coin.name}</span>
        <span className="ms-2 text-muted text-uppercase coinSymbol">
          {coin.symbol}
        </span>
      </td>
      <td>{coin.current_price}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h}
      </td>
      <td>{coin.total_volume}</td>
    </tr>
  );
};

export default CoinRow;
