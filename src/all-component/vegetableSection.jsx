
export default function VegeSection({vegetable}){
    const {name,category, price, stocked} = vegetable;
    return(
        <div className="fruit-section">
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <h3 style={{color: !stocked? "red": "black"}}>{name}</h3>
                <h3 style={{color: !stocked? "red": "black"}}>{price}</h3>
            </div>

        </div>
    )
}