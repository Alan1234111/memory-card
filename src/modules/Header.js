function Header(props) {
  return (
    <header className="header">
      <h1 className="game-title">Witcher Memory Card</h1>
      <h2 className="game-rules">emeber all cards you already pointed out, and make sure you won't pointed them out again</h2>
      <div className="statistics">
        <p className="points">Points: {props.points}</p>
        <p className="high-score">High Score: {props.highScore}</p>
      </div>
      <p className="game-status">{props.status && props.status}</p>
    </header>
  );
}

export default Header;
