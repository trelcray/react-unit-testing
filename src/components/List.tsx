import { useState } from "react";

interface ListProps {
  initialItems: string[];
}

export function List({ initialItems}: ListProps) {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(initialItems);

  function addToList() {
      setList(state => [...state, newItem]);
  }

  function removeFromList(item: string) {
    setTimeout(() => {
      setList(state => state.filter(item => item !== item));
    }, 500);
  }

  return (
    <>
      <input
        placeholder="Novo item"
        value={newItem}
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}
