export function CardContainer({ leader: { playerName, imgSrc, cardName, cardNumber }}) {
  return (
    <div className="leader-info-container mb-3">
      <h2 className="mb-3">{playerName}</h2>
      <img src={imgSrc} className="card-container mb-3"></img>
      <h2>{cardName} - {cardNumber}</h2>
    </div>
  );
}