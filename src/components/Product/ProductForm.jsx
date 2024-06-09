import "./ProductForm.css";

function ProductForm({
  name,
  price,
  stock,
  handleName,
  handlePrice,
  handleStock,
  onSaveProduct,
  onClear,
}) {
  return (
    <div className="container">
      <h2>Cadastro de Produtos</h2>
      <form onSubmit={(e) => onSaveProduct(e)}>
        <label className="form-label" htmlFor="nome">
          Nome:
        </label>
        <input
          className="form-input"
          value={name}
          type="text"
          name="nome"
          onChange={(e) => handleName(e)}
          required
        />
        <label className="form-label" htmlFor="preco">
          Preço:
        </label>
        <input
          className="form-input"
          value={price}
          type="number"
          name="preco"
          onChange={(e) => handlePrice(e)}
          required
        />
        <label className="form-label" htmlFor="estoque">
          Estoque:
        </label>
        <input
          className="form-input"
          value={stock}
          type="number"
          name="estoque"
          onChange={(e) => handleStock(e)}
          required
        />
        <div className="form-button-group">
          <input
            className="form-button form-clear"
            type="button"
            onClick={onClear}
            value="Limpar"
          />
          <input
            className="form-button form-submit"
            type="submit"
            value="Cadastrar"
          />
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
