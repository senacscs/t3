import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Categorias</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Tudo
        </label>
        <Input
          handleChange={handleChange}
          value="organicos"
          title="Orgânicos"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="bebidas"
          title="Bebidas"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="laticinios"
          title="Laticínios"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="defumados"
          title="Defumados"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
