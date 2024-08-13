import './App.css';
import EvaluatedCarForm from "./components/EvaluatedCarForm";
import CarComparison from "./components/CarComparison";

const App = () => {
  return (
      <div className="App">
        <div className="grid-container">
          <div className="grid-item"><EvaluatedCarForm/></div>
          <div className="grid-item"><CarComparison/></div>
        </div>
      </div>

  );
};

export default App;
