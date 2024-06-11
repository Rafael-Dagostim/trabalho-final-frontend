import "./UserForm.css";

function UserForm({
  name,
  cpf,
  sex,
  dateBirth,
  isPayingCostumer,

  handleName,
  handleCpf,
  handleSex,
  handleDateBirth,
  handleIsPayingCostumer,

  onSaveUser,
  onClear,
}) {

  return (
    <div className="container">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={(e) => onSaveUser(e)}>
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
        <label className="form-label" htmlFor="cpf">
          CPF:
        </label>
        <input
          className="form-input"
          value={cpf}
          type="number"
          name="cpf"
          onChange={(e) => handleCpf(e)}
          required
        />
        <label className="form-label" htmlFor="sexo">
          Sexo:
        </label>
        <select
          className="form-input"
          value={sex}
          name="sexo"
          onChange={(e) => handleSex(e)}
          required
        >
          <option value="">Selecione...</option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
          <option value="O">Outro</option>
        </select>

        <label className="form-label" htmlFor="dateNasc">
          Data de nasc.:
        </label>
        <input
          className="form-input"
          value={dateBirth}
          type="date"
          name="dateNasc"
          onChange={(e) => handleDateBirth(e)}
          required
        />
        <label className="form-label" htmlFor="isPayingCostumer">
          É cliente pagante?
        </label>
        <select
          className="form-input"
          value={isPayingCostumer}
          name="isPayingCostumer"
          onChange={(e) => handleIsPayingCostumer(e)}
          required
        >
          <option value="">Selecione...</option>
          <option value={"true"}>Pagante</option>
          <option value={"false"}>Não pagante</option>
        </select>
       
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

export default UserForm;
