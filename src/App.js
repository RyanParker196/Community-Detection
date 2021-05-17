import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Community Detection Between Soundcloud Artists</h2>
        <p>Nodes are SoundCloud User IDs, edges are combined interaction (likes, follows, reposts, comments). Colors correspond to communities assigned by the Louvain method, node labels are scaled by in-degree.</p>
        <iframe allowfullscreen="true" src="https://www.easyzoom.com/embed/94341e98e8d94eb4923b5f21657fb768" width="90%" height="750"></iframe>
      </header>
    </div>
  );
}

export default App;
