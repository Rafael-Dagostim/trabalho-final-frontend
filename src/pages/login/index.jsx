import { useReducer, useEffect, useState } from "react";
import { Repository } from "../../shared/repository";

import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const userRepository = new Repository("user");
  const navigate = useNavigate();

  const [userList, setUserList] = useState([]);
  const loadUserList = () => userRepository.list().then(setUserList);

  const userFormInitialState = { name: "", cpf: "" };
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

  const handleName = (e) => {
    dispatch({ type: "set", obj: { name: e.target.value } });
  };

  const handleCpf = (e) => {
    dispatch({ type: "set", obj: { cpf: e.target.value } });
  };

  const handleClear = () => dispatch({ type: "reset" });

  const login = async (e) => {
    e.preventDefault();

    const findUser = userList.find(
      (usr) => usr.name === user.name && usr.cpf === user.cpf
    );

    if (!findUser) {
      window.alert("Usuário não encontrado!");
      return;
    }

    window.localStorage.setItem("isLogged", true);

    navigate("/products");
  };

  useEffect(() => {
    loadUserList();
  }, []);

  return (
    <div className="page">
      <div className="nav">
        <h2>CRUD com JSON Server</h2>
      </div>
      <div className="content-login">
        <h3>Login</h3>
        <form onSubmit={(e) => login(e)}>
          <label className="form-label" htmlFor="nome">
            Nome:
          </label>
          <input
            className="form-input"
            value={user.name}
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
            value={user.cpf}
            type="number"
            name="cpf"
            onChange={(e) => handleCpf(e)}
            required
          />

          <div className="form-button-group">
            <input
              className="form-button form-clear"
              type="button"
              onClick={handleClear}
              value="Limpar"
            />
            <input
              className="form-button form-submit"
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
