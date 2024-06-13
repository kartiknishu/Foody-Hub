import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import CardsDiv from './Components/CardsDiv'


const BASE_URL = "http://localhost:9000/"

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] =useState(false);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState("All");

useEffect(()=>{

    const fetchFoodData = async()=>{
      setLoading(true);
      try{
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setFilteredData(json);
        setData(json);
        setLoading(false);
      }
      catch(error){
        setError("Error in fetching the data.")
      }
    }

    fetchFoodData();

  },[])

  const foodSearch = (e)=>{
    const searchData = e.target.value;

    const filter = data?.filter(food=>food.name.toLowerCase().includes(searchData.toLowerCase()));

    setFilteredData(filter);
    
  }
  

  const tabFilter = (e)=>{
    const currentTab = e.target.value;
    setTab(currentTab);
    console.log(currentTab);

    
  }

  useEffect(() => {
    if (tab === 'All') {
      setFilteredData(data);
    } else {
      const filter = data?.filter((food) => food.type.toLowerCase() === tab.toLowerCase());
      setFilteredData(filter);
    }
  }, [tab, data]);



  if(error){
    return <div>{error}</div>     
  }
  if(loading){
    return <div>Loading....</div>
  }

  return (
    <div className='bg-[url("/bg.png")] bg-cover bg-full min-h-screen'>
      <Header foodSearch={foodSearch} tab={tab} setTab={setTab} tabFilter={tabFilter}/>
      <CardsDiv data={filteredData}/>
      
    </div>
  )
}

export default App
