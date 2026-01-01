import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import PeriodicTable from "../src/components/PeriodicTable";
import ElementModal from "./components/ElementModal";
import Legend from "./components/Legend";

function App() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchElements = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json"
        );
        const data = await response.json();
        setElements(data.elements);
      } catch (error) {
        console.error("Error fetching elements:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchElements();
  }, []);

  return (
    <div className="App">
      <h1>Periodic Table</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <PeriodicTable
            elements={elements}
            onElementClick={(element) => setSelectedElement(element)}
          />

          <ElementModal
            element={selectedElement}
            onClose={() => setSelectedElement(null)}
          />
          <Legend />
        </>
      )}
    </div>
  );
}

export default App;
