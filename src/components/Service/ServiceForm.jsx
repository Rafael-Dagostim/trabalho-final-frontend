import "./ServiceForm.css";

function ServiceForm({
  description,
  price,
  openingDate,
  completionDate,

  handleDescription,
  handlePrice,
  handleOpeningDate,
  handleCompletionDate,

  onSaveService,
  onClear,
}) {

  return (
    <div className="container">
      <h2>Cadastro de Serviços</h2>
      <form onSubmit={(e) => onSaveService(e)}>
        <label className="form-label" htmlFor="description">
          Descrição:
        </label>
        <input
          className="form-input"
          value={description}
          type="text"
          name="description"
          onChange={(e) => handleDescription(e)}
          required
        />
        <label className="form-label" htmlFor="price">
          Preço:
        </label>
        <input
          className="form-input"
          value={price}
          type="number"
          name="price"
          onChange={(e) => handlePrice(e)}
          required
        />

        <label className="form-label" htmlFor="openingDate">
          Data de abertura:
        </label>
        <input
          className="form-input"
          value={openingDate}
          type="date"
          name="openingDate"
          onChange={(e) => handleOpeningDate(e)}
          required
        />
        
        <label className="form-label" htmlFor="completionDate">
          Data de conclusão:
        </label>
        <input
          className="form-input"
          value={completionDate}
          type="date"
          name="completionDate"
          onChange={(e) => handleCompletionDate(e)}
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

export default ServiceForm;
