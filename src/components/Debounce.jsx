import  { useEffect, useState } from 'react'

const Debounce = () => {
    //the value which stores the value of the text input
    const [search, setSearch] = useState("");
    //the debounced value of the search
   const [debounce, setDebounce] = useState("");


useEffect(() => {
    const timeout = setTimeout(() => {
        setDebounce(search);
    }, 500);
    return () => clearTimeout(timeout);
   }, [search]);

  return (
    <div >
        <h1>{search} And {debounce}</h1>
      <input className='border-2 border-red-500' value={search} onChange={(e)=>setSearch(e.target.value)} type="text" />
    </div>
  )
}

export default Debounce
