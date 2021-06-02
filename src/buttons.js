import {Link} from 'react-router-dom';

const Buttons=()=>{
    return(
        
        <section className="buttons">
          {/*Buttons are actually links :D */}
       
           
           <Link to="/">HomePage</Link>
            <Link to="/stocks">Stocks</Link>
         
          
        </section>
    )
}

export default Buttons;