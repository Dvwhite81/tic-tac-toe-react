import Square from './Square';

function Board({ squares, onClick }) {
  const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '50vh',
    height: '50vh',
    margin: 'auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
  };

  return (
    <div style={style}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Board;
