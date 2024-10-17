import './nav.css'

export default function NavBar ({sortData}){
    return(
        <div className="navDiv">
            <input className="nav" type="text" name="" id="" />
            <div className='checkBox'>
              <h3>Only Show Product in Stock</h3>
              <button className='sortBtn' onClick={sortData}>sort</button>
            </div>
            <div className="priceDiv">
                <h3>Name</h3>
                <h3>Price</h3>
            </div>
            <h1 className='fruits-h1'>Fruits</h1>
        </div>
    )
} 