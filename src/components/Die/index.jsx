import { DieWrapper } from "./Die.style";

const Die = ({ isHeld, onHoldDice, image, value }) => {
  return (
    <DieWrapper isHeld={isHeld} onClick={onHoldDice} image={image}>
      <h2>{value}</h2>{" "}
    </DieWrapper>
  );
};

export default Die;
