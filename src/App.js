import "./App.css";
import SummaryForm from "./pages/summary/SummaryForm";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  return <SummaryForm />;
}

export default App;
