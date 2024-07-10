import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recomendados</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="Todos" />
          <Button onClickHandler={handleClick} value="organicos" title="Orgânicos" />
          <Button onClickHandler={handleClick} value="bebidas" title="Bebidas" />
          <Button onClickHandler={handleClick} value="laticinios" title="Laticínios" />
          <Button onClickHandler={handleClick} value="defumados" title="Defumados" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
