function Header() {
  return (
    <header className="header">
      <h1 className="game-title">Witcher Memory Card</h1>
      <h2 className="game-rules">Remeber all cards you already pointed out, and make sure you won't pointed them out again</h2>
      <div className="statistics">
        <p className="points">Points: 11</p>
        <p className="high-score">High Score: 12</p>
      </div>
    </header>
  );
}

export default Header;
