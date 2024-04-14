import styled from "styled-components";
export const AreaStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const StepOrWinnerStyle = styled.div`
  font-size: 2em;
`;
export const CellsStyle = styled.div`
  background-color: red;
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  width: 300px;
`;
export const CellStyle = styled.div`
  --font-size: 50px;
  width: 100px;
  height: 100px;
  & > .X {
    background-color: brown;
  }
  & > .O {
    background-color: greenyellow;
  }
  & > .winCell {
    background-color: blue;
  }
`;
export const ButtonCellStyle = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
  &:disabled {
    color: black;
  }
  & > span {
    color: red;
    font-size: calc();
    font-size: var(--font-size);
  }
  &:hover {
    background-color: grey;
  }
`;
