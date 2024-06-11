import classes from "./UserTable.module.css";

export default function UserTable({ users, deleteUser, editUser }) {
  const renderCpf = (cpf) => cpf // TODO :)

  const dictSex = {
    M: "Masculino",
    F: "Feminino",
    O: "Outro"
  }

  const dictIsPayingCostumer = {
    [true]: "Pagante",
    [false]: "Não pagante",
  }

  return (
    <div className={classes.table_container}>
      <h2>Lista de Usuários</h2>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Cod.</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Sexo</th>
            <th>Data de Nasc.</th>
            <th>É cliente pagante</th>
            <th style={{ textAlign: "center" }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{renderCpf(user.cpf)}</td>
              <td>{dictSex[user.sex] ?? "Outro"}</td>
              <td>{user.dateBirth}</td>
              <td>{dictIsPayingCostumer[user.isPayingCostumer]}</td>
              <td className={classes.actions}>
                <button onClick={() => editUser(user.id)}>Editar</button>
                <button onClick={() => deleteUser(user.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
