import React, { useContext } from "react";
import { UsersContext } from "./UsersContext";

const GitHubRepos = () => {
  const repoContext = useContext(UsersContext);
  //fetching the github repos
  const getGitHubRepos = () => {
    fetch(`https://api.github.com/users/HackYourFuture-CPH/repos`)
      .then((res) => res.json())
      .then((reposdata) => {
        repoContext.setRepos(reposdata);
      });
  };

  return (
    <>
      <h1>HackYour Future Repositories</h1>
      <div className="githubrepos">
        <a href="#" onClick={getGitHubRepos}>
          GitHub Repos
        </a>
        <ul>
          {repoContext.repos &&
            repoContext.repos.map((repo) => <li key={repo.id}>{repo.name}</li>)}
        </ul>
      </div>
    </>
  );
};

export default GitHubRepos;
