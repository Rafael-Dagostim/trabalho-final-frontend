import { useState, useEffect, useReducer } from "react";

import { Repository } from "../../shared/repository";

import UserForm from "../../components/User/UserForm";
import UserTable from "../../components/User/UserTable";

export function Users() {

  const userFormInitialState = { name: "", cpf: 0, sex: "", dateBirth: "", isPayingCostumer: false };
  const reducer = (state, action) => {
    switch (action.type) {
      case "set":
        return { ...state, ...action.obj };
      case "load":
        return action.obj;
      case "reset":
        return userFormInitialState;
      default:
        window.alert(`Evento '${action.type}' não reconhecido!`);
        return state;
    }
  };

  const [user, dispatch] = useReducer(reducer, userFormInitialState);
  const [userList, setUserList] = useState([]);

  const userRepository = new Repository("user");
  const loadUserList = () => userRepository.list().then(setUserList);

  useEffect(() => {
    loadUserList();
  }, []);

  const getUserById = async (id) => {
    const prod = await userRepository.get(id);

    if (!prod) {
      window.alert(`Usuário com id ${id} não encontrado!`);
      return;
    }
    dispatch({ type: "load", obj: prod });
  };

  const saveUser = async (e) => {
    e.preventDefault();
    const isEdit = !!user.id;

    if (isEdit) await userRepository.update(user.id, user);
    else await userRepository.create(user);

    dispatch({ type: "reset" });
    await loadUserList();
  };

  const deleteUser = async (id) => {
    await userRepository.delete(id);
    await loadUserList();
  };

  const handleName = (e) => {
    dispatch({ type: "set", obj: { name: e.target.value } });
  };

  const handleCpf = (e) => {
    dispatch({ type: "set", obj: { cpf: e.target.value } });
  };

  const handleSex = (e) => {
    dispatch({ type: "set", obj: { sex: e.target.value } });
  };

  const handleDateBirth = (e) => {
    dispatch({ type: "set", obj: { dateBirth: e.target.value } });
  };

  const handleIsPayingCostumer = (e) => {
    dispatch({ type: "set", obj: { isPayingCostumer: e.target.value } });
  };

  const handleClear = () => dispatch({ type: "reset" });

  return (
    <>
      <div>
        {userList.length > 0 ? (
          <UserTable
            users={userList}
            deleteUser={deleteUser}
            editUser={getUserById}
          />
        ) : (
          <h3 style={{ marginBottom: "30px" }}>Nenhum usuário cadastrado...</h3>
        )}
      </div>

      <UserForm
        name={user.name}
        cpf={user.cpf}
        dateBirth={user.dateBirth}
        isPayingCostumer={user.isPayingCostumer}
        sex={user.sex}
        handleName={handleName}
        handleCpf={handleCpf}
        handleSex={handleSex}
        handleDateBirth={handleDateBirth}
        handleIsPayingCostumer={handleIsPayingCostumer}
        handleClear={handleClear}
        onSaveUser={saveUser}
        onClear={handleClear}
      />
    </>
  );
}

export default Users;
