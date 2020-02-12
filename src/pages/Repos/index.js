import React, { useState, useEffect } from "react";
import api from "../../services/api";

import "./styles.css"

const Repos = ({ match }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const login = match.params.login;

    api
      .get(`/${login}/repos`)
      .then(res => {
        console.log(res);
        setRepos(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="repos-wrapper">
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Repos;
