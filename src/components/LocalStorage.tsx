import { useState, useEffect } from 'react';



  const LocalStorage = () => {
    const [storageData, setStorageData] = useState<Array<object> | null>([]);

    useEffect(() => {
      if (localStorage.getItem('todos')) {
        setStorageData(JSON.parse(localStorage.getItem('todos') as string))
      }
    }, []);

    return (
        <>
            {
                storageData.map(todo:object => {
                    return (
                        <>
                            <h3>{renderToNodeStream.title}</h3>
                            <p>{todo.text}</p>
                        </>
                    )
                })
            }
        </>
    )
}

export default LocalStorage 
