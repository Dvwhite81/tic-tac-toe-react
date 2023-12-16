function Square({ onClick, value }) {
  const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '10vh',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
  };

  return (
    <button type="button" style={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
