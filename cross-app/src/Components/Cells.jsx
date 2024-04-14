import { ButtonCellStyle, CellsStyle, CellStyle } from "../Style/CellsStyle";

export const Cells = (props) => {
  // console.log(props.winner);
  const cell = props.cells.map((elem, index) => {
    return (
      <Cell
        winner={props.winner}
        elem={elem}
        changeCells={props.changeCells}
        key={index}
        index={index}
      />
    );
  });
  return <CellsStyle className="cells">{cell} </CellsStyle>;
};

export const Cell = (props) => {
  const winner =
    props.winner && props.winner.includes(props.index) && "winCell";
  const disable = props.elem && true;
  return (
    <CellStyle className={`cell`}>
      <ButtonCellStyle
        className={`btncell ${props.elem} ${winner}`}
        onClick={() => {
          props.changeCells(props.index);
        }}
        disabled={disable}
      >
        <span>{props.elem}</span>
      </ButtonCellStyle>
    </CellStyle>
  );
};
