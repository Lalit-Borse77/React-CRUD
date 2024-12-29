import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSave = () => {
    if (currentItem.trim() === "") return;

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = currentItem;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, currentItem]);
    }
    setCurrentItem("");
  };

  const handleEdit = (index) => {
    setCurrentItem(items[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="main">
      <div className="App">
        <h1>React CRUD Example</h1>

        <div>
          <input
            type="text"
            value={currentItem}
            onChange={(e) => setCurrentItem(e.target.value)}
            placeholder="Enter item"
          />
          <button onClick={handleSave}>
            {editIndex !== null ? "Update Item" : "Add Item"}
          </button>
        </div>

        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
