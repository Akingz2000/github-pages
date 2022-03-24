
import React, {useState, useEffect, useReducer, useRef} from "react";
import { useNavigate } from 'react-router-dom';
import rice5 from './rice/rice5';



const Index4 = () => {
    const navigate = useNavigate();
  
    const [ah , setAH] = useState(rice5)
  
  
 return (

    
 <section className="fourth-section__second-7-holder" id = 'about' >
 {
   

ah.map((e, f) => {
const { id, image, title, name, order, price} = e;

/*   onChange = {(eae) =>
setB(eae.target.value)}  */
return (





<div className="fourth-section__firstmap">
<div onClick={() => {
navigate('/try' , {
state: {
name: 'xyz',
id
}
})
}}   >

<section className="fourth-section__firstmap-holder">
<div className="fourth-section__firstmap-holder-part1">
<img  className="fourth-section__firstmap-holder-part1-img" src={image} alt="" />

</div>  

<div className="fourth-section__firstmap-holder-part2">
<p   className="fourth-section__firstmap-holder-part1-para">  {title} </p>
<section className="fourth-section__firstmap-holder-part2-holder">



<p   className="fourth-section__firstmap-holder-part2-price">{price}</p>
<p   className="fourth-section__firstmap-holder-part2-order">{order}</p>
<p   className="fourth-section__firstmap-holder-part2-name">{name}</p>

</section>


</div>
</section>
</div> 


</div>




)

})





 }
</section>

 )
    


  

}



export default Index4





