
import './App.css'
import Fruits from './all-Object/object'
import NavBar from './all-component/navBar';
import FruitsSection from './all-component/fruitSection';
import VegeSection from './all-component/vegetableSection';
import { useState } from 'react';

function App() {
  
 const allItem = Fruits();
 const [all, setAll] = useState(allItem);

 function sortData(){
 const sortAll = all.filter(item=> item.stocked===true)
  setAll(sortAll)
}
 const fruits = all.filter(item=> item.category==="Fruits");
 const vegetables = all.filter(item=> item.category==="Vegetable");

  return (
   <div className='mainDiv'>
    <div className='container'>
      <NavBar sortData={sortData}></NavBar>
      {fruits.map(fruit=> <FruitsSection fruit = {fruit}></FruitsSection>)}
      <h1 className='fruits-h1'>Vegetable</h1>
      {vegetables.map(vegetable=> <VegeSection vegetable={vegetable}></VegeSection>)}

    </div>

   </div>
  )
}

export default App
