function Card(props) {
  return (
    <div onClick={props.handleClick} className="card">
      <img className="card-img" src={props.picture} alt="" />
      <p className="card-name">{props.title}</p>
    </div>
  );
}

export default Card;
