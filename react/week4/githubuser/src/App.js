import "./App.css";
import GithubUsers from "./GithubUsers";
import GitHubRepos from "./GithubRepos";

function App() {
  return (
    <div className="App">
      <div className="users">
        <h1>Git Hub User Searcher</h1>
        <GithubUsers />
      </div>
      <div className="repos">
        <GitHubRepos />
      </div>
    </div>
  );
}

export default App;
