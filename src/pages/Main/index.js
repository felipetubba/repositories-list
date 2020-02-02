import React, { useState, useEffect } from "react";
import api from "../../services/api";

import "./styles.css";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [newUsers, setNewUsers] = useState('');

  useEffect(() => {
    api
      .get("/felipetubba")
      .then(res => {
        console.log(res);
        setUsers([res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  function addNewUser(e) {
    e.preventDefault()
    api.get(newUsers).then(res => {
      setUsers([...users, res.data]);
      console.log(users);
    });
  }

  return (
    <div className="main-wrapper">
      <form onSubmit={addNewUser}>
        <input type="text" onChange={ e => (setNewUsers(e.target.value))}/>
        <button type="submit">Adicionar</button>
      </form>
      {users.map(user => (
        <div key={user.id} className="usuarios">
          <img src={user.avatar_url} alt="" />
          <div>
            <h2>{user.login}</h2>
            <p>{user.location}</p>
            <p>Repositórios publicos: {user.public_repos}</p>
            <a href={user.html_url}>Perfil do usuário</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
