


const LocalStorage = () => {
    const [storageData, setStorageData] = useState<Array<object> | null>([]);
  
    useEffect(() => {
      if (localStorage.getItem('todos')) {
        const storedData = JSON.parse(localStorage.getItem('todos') as string);
        setStorageData(storedData);
    setItems(items => [...items, ...storedData]);
      }
    }, []);

    useEffect(() => {
        if (props.addToDo) { // Kontrollera att det finns ett värde i inputfältet
          const newToDo: Item = {
            id: props.numberOfClicks,
            name: props.addToDo,
            checked: false
          };
    
          setItems(items => [...items, newToDo]);
          localStorage.setItem(props.numberOfClicks, JSON.stringify(newToDo));
    
        }
      }, [props.numberOfClicks]); // Kör när numberOfClicks ändras