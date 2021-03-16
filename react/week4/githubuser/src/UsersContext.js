import React, { createContext, useState } from "react";

export const UsersContext = createContext();

const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [repos, setRepos] = useState([]);

  const contextValue = {
    isLoading,
    setIsLoading,
    users,
    setUsers,
    inputvalue,
    setInputValue,
    message,
    setMessage,
    repos,
    setRepos,
    getGitHubUserWithFetch: () => {
      if (inputvalue !== "") {
        setIsLoading(true);
        fetch(`https://api.github.com/search/users?q=${inputvalue}`)
          .then((res) => res.json())
          .then((data) => {
            setIsLoading(false);
            if (data.message) {
              setMessage(data.message);
            } else {
              setUsers(data.items);
            }
          });
      }
    },
  };

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default ContextProvider;
