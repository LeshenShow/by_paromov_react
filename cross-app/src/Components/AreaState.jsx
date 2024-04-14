import { useState } from "react";
import { Area } from "./Area";

export const AreaState = (props) => {
  const SYMBOL_X = "X";
  const SYMBOL_O = "O";
  const startCells = Array.from({ length: 9 }, () => null);

  const [cells, setCells] = useState(startCells);
  const changeCells = (index) => {
    getCurrentStep();
    cells[index] = currentStep;
    setWinner(isWinner(cells));
    // console.log(winner);
    setCells([...cells]);
  };
  const [currentStep, setCurrentStep] = useState(SYMBOL_X);
  const getCurrentStep = () => {
    setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
  };
  const resetCells = () => {
    setCells(startCells);
    setCurrentStep(SYMBOL_X);
    setWinner();
  };
  const [winner, setWinner] = useState();
  const isWinner = (cells) => {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return [a, b, c];
      }
    }
  };

  return (
    <Area
      currentStep={currentStep}
      cells={cells}
      winner={winner}
      changeCells={changeCells}
      resetCells={resetCells}
    />
  );
};
