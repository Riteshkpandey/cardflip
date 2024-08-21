import "./styles.css";
import Card from "./components/cardFlips";

export default function App() {
  return (
    <div className="App">
      <Card title="front" bgColor="bg-red" />
      <Card title="Back" bgColor="bg-yellow" />
    </div>
  );
}
