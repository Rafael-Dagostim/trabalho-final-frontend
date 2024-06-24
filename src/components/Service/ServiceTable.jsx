import classes from "./ServiceTable.module.css";

export default function ServiceTable({ services, deleteService, editService }) {

  return (
    <div className={classes.table_container}>
      <h2>Lista de Serviços</h2>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Cod.</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Data de abertura</th>
            <th>Data de conclusão</th>
            <th style={{ textAlign: "center" }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.description}</td>
              <td>{service.price}</td>
              <td>{service.openingDate}</td>
              <td>{service.completionDate}</td>
              <td className={classes.actions}>
                <button onClick={() => editService(service.id)}>Editar</button>
                <button onClick={() => deleteService(service.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
