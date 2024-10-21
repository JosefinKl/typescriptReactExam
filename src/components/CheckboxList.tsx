import { useState, useEffect } from 'react';

interface Item {
  id: number;
  name: string;
  checked: boolean;
}



const CheckboxList = (props:any) => {
  const [items, setItems] = useState<Item[]>([]);

  const handleCheckboxChange = (id: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ) 
    );
  };
}




  useEffect(() => {
    if (props.addToDo) { // Kontrollera att det finns ett värde i inputfältet
      const newToDo: Item = {
        id: props.numberOfClicks,
        name: props.addToDo,
        checked: false
      };
      setItems(items => [...items, newToDo]);
      
    }
  }, [props.numberOfClicks]); // Kör när numberOfClicks ändras


  useEffect(() => {
    console.log(items);
  }, [items]);


  return (
    
    <ul>
      
      {items.map(item => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.name}
          </label>
        </li>
      ))}
    </ul>
  );
};


export default CheckboxList;
