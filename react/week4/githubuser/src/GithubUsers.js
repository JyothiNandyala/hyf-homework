import React, { useContext, useEffect } from "react";
import { UsersContext } from "./UsersContext";
//import GitHubRepos from "./GithubRepos";

const GithubUsers = () => {
  const userContext = useContext(UsersContext);

  useEffect(() => {
    userContext.getGitHubUserWithFetch();
  }, [userContext.inputvalue]);

  const onChangeInputValue = (e) => {
    let value = e.target.value;
    userContext.setInputValue(value);
  };

  return (
    <>
      <div className="githubusers">
        <input
          type="text"
          name="user"
          value={userContext.inputvalue}
          placeholder="search for user"
          onChange={onChangeInputValue}
        />

        {userContext.isLoading ? <h3>Loading...</h3> : !userContext.isLoading}
        {userContext.message !== "" ? (
          <h5 className="error-message">{userContext.message}</h5>
        ) : (
          <ul>
            {userContext.users.length > 0 ? (
              userContext.users &&
              userContext.users.map((user) => {
                return <li key={user.id}>{user.login}</li>;
              })
            ) : (
              <h2>No Users</h2>
            )}
          </ul>
        )}
      </div>
    </>
  );
};
export default GithubUsers;
