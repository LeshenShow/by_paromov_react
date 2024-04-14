import { AreaStyle, StepOrWinnerStyle } from "../Style/CellsStyle";
import { Cells } from "./Cells";

export const Area = (props) => {
  // console.log(props.cells);

  const isWinner = props.winner !== undefined && props.winner;
  return (
    <AreaStyle className="area">
      {isWinner ? (
        <Winner winner={isWinner} />
      ) : (
        <Step currentStep={props.currentStep} />
      )}

      <Cells
        cells={props.cells}
        changeCells={props.changeCells}
        winner={isWinner}
      />
      <Reset resetCells={props.resetCells} />
    </AreaStyle>
  );
};
const Step = (props) => {
  return (
    <StepOrWinnerStyle>
      <span>Ход:{props.currentStep}</span>
    </StepOrWinnerStyle>
  );
};
const Winner = (props) => {
  return (
    <StepOrWinnerStyle>
      <span>Победил:{props.winner}</span>
    </StepOrWinnerStyle>
  );
};
const Reset = (props) => {
  return (
    <div
      onClick={() => {
        props.resetCells();
      }}
    >
      <button>Заново</button>
    </div>
  );
};
