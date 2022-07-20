import "./App.css";

function App() {
  return (
    <div>
        <h1>{process.env.REACT_APP_ID_RECIPE}</h1>
        <h1>{process.env.REACT_APP_KEY_RECIPE}</h1>
        <h1>{process.env.REACT_APP_ID_FOOD}</h1>
        <h1>{process.env.REACT_APP_KEY_FOOD}</h1>
    </div>
  );
}

export default App;
