import React, {useState , useEffect, useReducer, useRef} from 'react';
import { useNavigate  , Link} from 'react-router-dom';

import Index4 from './index4';

import {FaPizzaSlice, FaTimes} from 'react-icons/fa'
import {FiHelpCircle} from "react-icons/fi"
import {BsFlower1 , BsFillPersonLinesFill} from 'react-icons/bs'
import { GiOldLantern, GiStarsStack } from 'react-icons/gi';
import {AiOutlineSearch , AiOutlineShoppingCart} from 'react-icons/ai'
import {ImSpoonKnife} from 'react-icons/im'
import {VscChevronDown , VscChevronUp} from 'react-icons/vsc';
import people from './data';
import people1 from './data2';
import rice from './rice';
import rice1 from './rice1';
import rice2 from './rice/rice2';
import rice3 from './rice/rice3';
import rice4 from './rice/rice4';




const Index3 = () => {

  const stateObject = {

    state1: true,
    state2: true,
    state3: true,
    state4: true,
    state5: true,
    state6: true,
    state7: true,
    state8: true,




  }
  const reducer = () => {

  }


  
 
  const Key1 = useRef(null)
  const Key2 = useRef(null)
  const Key3 = useRef(null)
  const Key4 = useRef(null)
  const Key5 = useRef(null)
  const Key6 = useRef(null)
  const Key7 = useRef(null)
  const Key8 = useRef(null)
  const Key = useRef(null);

  const [state, dispatch] = useReducer(reducer, stateObject)
 
  const navigate = useNavigate();
  const [a, setA] = useState("first-section__2-2-para2-p1");
  const [b, setB] = useState("first-section__2-2-para2-p2");
  const [d, setD] = useState("first-section__2-2-para2-p2-edit");
  const [f, setF] = useState("try1");
  const [l, setL] = useState(5);
  
  const [h, setH] = useState('translateX(0vw)')
  const [k, setK] = useState('translateX(-200vw)')
  const [q, setQ] = useState("translateX(0%)")
  const [n, setN] = useState("translateX(100%)");
  
 const [g, setG] = useState("try2");
  const [c, setC] = useState(true);
  const [ca, setCA] = useState(true);
  const [cb , setCB] = useState("fourth-section__5")
  const [cc , setCC] = useState(true)
  const [cd , setCD] = useState(true)
  const [ce , setCE] = useState(true)
  const [cf , setCF] = useState(true)
  const [cg , setCG] = useState(true)
  const [ch , setCH] = useState(true)
  const [ci , setCI] = useState(true)
  const [cj , setCJ] = useState(true)
  const [ck , setCK] = useState("fourth-section__all fourth-section__active")
 // const [r, setR] = useState(0);
  const [z, setZ] = useState('third-section__1');
  const [j , setJ] = useState(['sa' , 'sb' , 'sc'])
  const [ac , setAC] = useState(rice)
  const [ad , setAD] = useState(rice1)
  const [ae , setAE] = useState(rice2)
  const [af , setAF] = useState(rice3)
  const [ag , setAG] = useState(rice4)
  const [co, setCO] = useState('slider-fix')
  const [cp, setCP] = useState("100%")
  const [cq, setCQ] = useState("100vw")   
  const [da, setDA] = useState(true)
  const [dc, setDC] = useState(true)                                         
  const [db, setDB] = useState('pop-up1' )  
  
  
  



  const [cr, setCR] = useState("20%")
  const [cs, setCS] = useState("6rem")
  const [ct, setCT] = useState("")
  const [cu, setCU] = useState("29rem")
  const [cv, setCV] = useState("20rem")


  
   const RAE2 = () => {

     setCO("slider");
     setCP("78%")
     setCQ("80vw")
     setCR("15%")
     setCS("2rem")
     setCU("25rem")
     setCV("15rem")

   }
  const FIX = () => {

    setCO('slider-fix')
    setCP("100%")
    setCQ("100vw")
    setCR("20%")
    setCS("6rem")
    setCU("29rem")
    setCV("20rem")
    

  }


 const Ruger = () => {
  
  
     setQ("translateX(-100%)")
     setN("translateX(0%)")

   }


   


 

 const Ruger2 = () => {
 
    setQ("translateX(0%)")
    setN("translateX(100%)")
   
  

}














let sa = () => {
  
  setInterval(() => {
    Ruger()
  }, 3500)

   setInterval(() => {
    
    Ruger2()
   
  }, 7500)
}


  


useEffect((e) => {
 
 sa()



}, [])
    

   

  

  const First = () => {
    setC(!c)
    
   // setB("first-section__2-2-para2-p1")
  }
  

  
  

const executeScroll = () => {
  Key.current.scrollIntoView({behavior: 'smooth'})
  setCK("fourth-section__all fourth-section__active")
  setCE(true)
  setCC(true)
  setCF(true)
  setCI(true)
  setCG(true)
  setCD(true)
  setCH(true)
  setCJ(true)
}

const executeScroll1 = () => {
  Key1.current.scrollIntoView({behavior: 'smooth'})
  setCE(true)
  setCC(true)
  setCF(true)
  setCI(true)
  setCG(true)
  setCD(false)
  setCH(true)
  setCJ(true)
  setCK("fourth-section__all")
}
const executeScroll2 = () => {
  Key2.current.scrollIntoView({behavior: 'smooth'})
  setCE(false)
  setCC(true)
  setCF(true)
  setCI(true)
  setCG(true)
  setCD(true)
  setCH(true)
  setCJ(true)
  setCK("fourth-section__all")
}
const executeScroll3 = () => {
  Key3.current.scrollIntoView({behavior: 'smooth'})
  setCE(true)
  setCC(true)
  setCF(false)
  setCI(true)
  setCG(true)
  setCD(true)
  setCH(true)
  setCJ(true)
  setCK("fourth-section__all")
}
const executeScroll4 = () => {
  Key4.current.scrollIntoView({behavior: 'smooth'})
  setCE(true)
  setCC(false)
  setCF(true)
  setCI(true)
  setCG(true)
  setCD(true)
  setCH(true)
  setCJ(true)
  setCK("fourth-section__all")
}
const executeScroll5 = () => {
  Key5.current.scrollIntoView({behavior: 'smooth'})
  setCE(true)
  setCC(true)
  setCF(true)
  setCI(true)
  setCG(false)
  setCD(true)
  setCH(true)
  setCJ(true)
  setCK("fourth-section__all")
  
}
const executeScroll6 = () => {
  Key6.current.scrollIntoView({behavior: 'smooth'})
  setCE(true)
  setCC(true)
  setCF(true)
  setCI(true)
  setCG(true)
  setCD(true)
  setCH(false)
  setCJ(true)
  setCK("fourth-section__all")

  
}
const executeScroll7 = () => {
  Key7.current.scrollIntoView({behavior: 'smooth'})
  setCE(true)
  setCC(true)
  setCF(true)
  setCI(false)
  setCG(true)
  setCD(true)
  setCH(true)
  setCJ(true)
  setCK("fourth-section__all")
}
const executeScroll8 = () => {
  Key8.current.scrollIntoView({behavior: 'smooth'})
  setCE(true)
  setCC(true)
  setCF(true)
  setCI(true)
  setCG(true)
  setCD(true)
  setCH(true)
  setCJ(false)
  setCK("fourth-section__all")
}

const RAE = () => {
setCA(false)
}


const RAE1 = () => {
  setCA(true)
  }

  
  
  const Mohbad = () => {
    setDA(false)
  }

  const Mohbad1 = () => {
    setDA(true)
  }

  const Fine = () => {
    setDC(false)
  }
  const Fine1 = () => {
    setDC(true)
  }






    return (
  
      <main className="main">

        <section style={{width: cp}} className="section">

          <div className={co}>
            <section className="slider__holder">
              <header className='slider__header'>

                 <h2 className="slider__h2"> your cart  </h2>
                 <span onClick={FIX} className="slider__times"> &times; </span>

              </header>
                  <div className="slider__div-img">
                      
                      <img className='slider__img' src="	https://www.freshmenu.com/pages/menu/images/ghost1.1.svg" alt="" />
                    
                    </div>
                    <div className="slider__paras">
                        <h3 className="slider__h3">
                        Your cart is empty.
                          </h3>
                          <p className="slider__p">
                          Add some delicious food available on our menu to checkout.
                            </p>
                            <button className="slider__button">
                               browse food
                              </button>

                      
                      
                      
                      
                      </div>
              
              
              
              
              
              
              </section>
            
            </div>
           


          <div  className={ca ? 'pop-up' : 'pop-up__pop-replace'}>

            <section  className="pop-up__holder">
              <div onClick={RAE1} class="pop-up__close">&times;</div>
              <h3 className="pop-up__head">Customer Support</h3>
              <p className="pop-up__main-para">
              Our customer experience team is
available all days from
9am to 12.00am to assist you with any
questions or issues you might have.
                </p>
                <div className="pop-up__email-holder">
                    <p className="pop-up__email">
                      
                    EMAIL US
                      </p>
                      <p className="pop-up__actual-email">
                      
                       order@freashmenu.com
                      </p>
                  </div>

                  <div className="pop-up__call-us">
                    <p className="pop-up__call">
                      
                    CALL US
                      </p>
                      <p className="pop-up__actual-call">
                      
                     08071434751
                      </p>
                  </div>
              </section>
            </div>






           
          <div  className={da ?  'pop-up1__pop-up1-fix'  : db } >

<section className="pop-up1__holder">

      <div className="pop-up1__1">
        <section className="pop-up1__1-holder">
       
         <img src='https://www.freshmenu.com/pages/common/images/google_signin_logo_v1.png' alt="" className="pop-up1__img" />

        </section>
        </div>
        <div className="pop-up1__2">
            <section className="pop-up1__2-holder">
              <div className="pop-up1__line1"></div>
              <p className="pop-up1__2-para">or</p>
              <div className="pop-up1__line2"></div>
              
              </section>
          
          </div>

          <div className="pop-up1__3">
            <section className="pop-up1__3-holder">

              <input placeholder='mobile number/ email' type="text" className="pop-up1__3-input" />
              <button className="pop-up1__3-button">
                  send otp
                </button>
              
              


              </section>
            
            </div>

            <div className="pop-up1__4">
              <section className="pop-up1__4-holder">

                <p className="pop-up1__4-para">Don't have an account? <span className="pop-up1__4-span">sign up</span>    </p>  <div onClick={Mohbad1} className="pop-up1__4-times">&times;</div>
                
                </section>
              
              </div>

  </section>
</div>


 
















<div  className={dc ?  'pop-up1__pop-up1-fix'  : db } >

<section style={{height: '70%'}} className="pop-up1__holder">

      <div className="pop-up1__1">
        <section className="pop-up1__1-holder">
       
         <img src='https://www.freshmenu.com/pages/common/images/google_signin_logo_v1.png' alt="" className="pop-up1__img" />

        </section>
        </div>
        <div className="pop-up1__2">
            <section className="pop-up1__2-holder">
              <div className="pop-up1__line1"></div>
              <p className="pop-up1__2-para">or</p>
              <div className="pop-up1__line2"></div>
              
              </section>
          
          </div>

          <div className="pop-up1__3">
            <section className="pop-up1__3-holder">

              <input style={{ marginBottom: "2rem"}} placeholder='mobile number/ email' type="text" className="pop-up1__3-input" />
              <input placeholder='mobile number/ email' type="text" className="pop-up1__3-input1" />
              <input placeholder='mobile number/ email' type="text" className="pop-up1__3-input2" />
              <input placeholder='mobile number/ email' type="text" className="pop-up1__3-input3" />
              <button className="pop-up1__3-button">
                  send otp
                </button>
              
              


              </section>
            
            </div>

            <div  style={{position:"absolute" , left: "5%" , bottom: "-1.5%"  }} >
              <section className="pop-up1__4-holder">

                <p className="pop-up1__4-para">Don't have an account? <span className="pop-up1__4-span">sign up</span>    </p>  <div onClick={Fine1} className="pop-up1__4-times">&times;</div>
                
                </section>
              
              </div>

  </section>
</div>





















































          <div className="first-section"    >
            <header className="first-section__header">
              <div className="first-section__1">
                <div className="first-section__1-1">
                  <ImSpoonKnife className='first-section__spoon'></ImSpoonKnife>
                </div>
                <h2  className="first-section__1-1-head">
                  freshMenu
                </h2>

              </div>
              <div className="first-section__2">
                <section className="first-section__2-2">
                  <div className="first-section__2-2-para">deliver to :  </div>
                  <div className="first-section__2-2-para2">
                    <p  onClick={First} className={a}>india   {c ?  <VscChevronUp className='first-section__2-2-icon-up'></VscChevronUp>   :<VscChevronDown className='first-section__2-2-icon-up'></VscChevronDown>  } </p>
                    
                  </div>

                </section>
                
              </div>
              <div className="first-section__3   ">

                <section className="first-section__3-3">
                  <div className="first-section__3-3-1">
                  <FaPizzaSlice className='first-section__pizza'></FaPizzaSlice>
                  </div>
                  <div className="first-section__3-3-2">
                    <p className="first-section__3-3-1-para1">freashpass</p>
                    <p className="first-section__3-3-1-para2">get extra 20% off</p>
             
                  </div>




                </section>
                



              </div>
              <div className="first-section__4">

              <section className="first-section__4-4">
                  <div className="first-section__4-4-1">
                    <BsFlower1 className='first-section__pizza2'></BsFlower1>
        
                  </div>
                  <div className="first-section__4-4-2">
                    <p className="first-section__4-4-2-para1">try freashpass</p>
             
                  </div>




                </section>
                
              </div>
              <div className="first-section__5">
                <section className="first-section__5-5">
                  <p className="first-section__5-5-para">download app</p>
                </section>
                
              </div>


            </header>


          </div>

          <div className="second-section">
            <section className="second-section__holder">
              <div className="second-section__1">
                

                  <Link  className="second-section__1-1" to= '/try1'>
                  <AiOutlineSearch   className='second-section__search'></AiOutlineSearch>
                  <p  className="second-section__1-1-para">search</p>

                   </Link>
                   
                


                
              </div>
              <div className="second-section__2">
                
                <Link  className="second-section__2-2" to= '/try2'>
                  
                  <p className="second-section__2-2-para">offers</p>
            
              
                  </Link>
                
              </div>
              <div  className="second-section__3">
                <section onClick={RAE} className="second-section__3-3">

                   <div className="second-section__3-icon-holder">
                   <FiHelpCircle className='second-section__search'></FiHelpCircle>
                     </div>
               
                </section>
                <div  className="second-section__3-3-sub-base">
                    <p  onClick={RAE} className="second-section__3-3-cart">help center</p>
                  </div>
              </div> 
              <div className="second-section__7">
                <section className="second-section__7-7">
                <div className="second-section__3-icon-holder">
                <BsFillPersonLinesFill className='second-section__search'></BsFillPersonLinesFill>
                </div>
                </section>
                <div className="second-section__7-7-sub-base">
                    <p onClick={Mohbad} className="second-section__7-7-cart" >login</p>
                    <p  onClick={Fine} className="second-section__7-7-cart">sign up</p>
                  </div>
              </div>
              <div className="second-section__4">
                <section className="second-section__4-4">
                <AiOutlineShoppingCart  onClick={RAE2} className='second-section__search'></AiOutlineShoppingCart>
                </section>
                <div className="second-section__4-4-sub-base">
                    <p onClick={RAE2} className="second-section__4-4-cart">cart</p>
                  </div>
              </div>

            </section>

          </div>

        




          <div className="third-section">

            <button onClick={Ruger} className='third-section__button'> button </button>
            <button onClick={Ruger2} className='third-section__button1'> button2 </button>
            
            <section style={{ backgroundColor: "white"}} className="third-section__holder">
              

            
           
          
                
           <div className= "third-section__holder-page1" style={{transform: q}} >
                  
           {  
           people.map((e) => {
             const {image} = e;
             
             return  (
               <div   className="third-section__1" >
                  <section  className="third-section__1-1">
    <img className="third-section__img" src={image} alt="" /> 
                
                  </section>

                </div>
//style={{transform : h, backgroundColor: "green", transition: 'all 3s'}}    ref = {inputEl}
             )
               
           })

                    
         }  
          </div>

        

         

        <div className= "third-section__holder-page2" style = {{transform: n}} >
        {
           people1.map((e) => {
             const {image} = e;
             
             return  (
               <div  className="third-section__2" >
                  <section className="third-section__2-2">
                  <img className="third-section__img2" src={image} alt="" /> 
          
                  </section>
                </div>
             )
                     //style={{transform : k, backgroundColor: "red", transition: 'all 3s'}}      ref = {inputEl1} 
           })
         }
        </div>

     


                  
            </section>
          </div>



    
          <div style={{width: cq}} className="fourth-section">
            <section className="fourth-section__holder">
              <div style={{width: cr}} className="fourth-section__first">
                <section style={{marginLeft: cs   }} className="fourth-section__first-holder">
                                              
                <div  onClick={executeScroll} className={ck}>

                      all food   

                     
                  </div>
                  
                  <div  onClick={executeScroll1}   className={cd ? "fourth-section__1" : "fourth-section__1 fourth-section__active"}>
                    rice



                
                      
                  </div>
                  <div onClick={executeScroll2}  className={ce ? "fourth-section__2" : "fourth-section__2  fourth-section__active"}>
                  bean
                  </div>
                  <div  onClick={executeScroll3}  className={cf ? "fourth-section__3" : "fourth-section__3  fourth-section__active"}>
                  water
                  </div>
                  <div onClick={executeScroll4}  className={cc ? "fourth-section__4" : "fourth-section__4  fourth-section__active"}>
                 spag
                  </div>
                  <div  onClick={executeScroll5} className={cg ? "fourth-section__5" : "fourth-section__5  fourth-section__active"}>
                  rice and bean
                    </div>
                    <div onClick={executeScroll6}  className={ch ? "fourth-section__6" : "fourth-section__6  fourth-section__active"}>
                   bread
                  </div>
                  <div onClick={executeScroll7}  className={ci ? "fourth-section__7" : "fourth-section__7  fourth-section__active"}>
                  stew
                  </div>
                  <div onClick={executeScroll8}  className={cj ? "fourth-section__8" : "fourth-section__8  fourth-section__active"}>
             egusi
                  </div>
                  




                </section>

              </div>

              <div className="fourth-section__second" >
              <section className="fourth-section__second-holder">
                <div className="fourth-section__second-1"   ref={Key}>
                  <h2 className="fourth-section__second-1-head">all food</h2>
                  <section className="fourth-section__second-1-holder">

                  {

ac.map((e, f) => {
  const { id, image, title, name, order, price} = e;

  /*   onChange = {(eae) =>
    setB(eae.target.value)}  */
  return (

    <div className="fourth-section__firstmap">
       <div onClick={() => {
         navigate('/try' , {
           state: {
             name: 'xyz',
             id, image, title, name, order, price
           }
         })
       }}   >
          
     <section className="fourth-section__firstmap-holder">
         <div style={{width:  cu ,   height: cv ,  }} className="fourth-section__firstmap-holder-part1">
                <img className="fourth-section__firstmap-holder-part1-img" src={image} alt="" />
               
         </div>  

         <div className="fourth-section__firstmap-holder-part2">
         <p  className="fourth-section__firstmap-holder-part1-para">  {title} </p>
             <section className="fourth-section__firstmap-holder-part2-holder">


                <p   className="fourth-section__firstmap-holder-part2-price">{price}</p>
                 <p  className="fourth-section__firstmap-holder-part2-order">{order}</p>
                 <p  className="fourth-section__firstmap-holder-part2-name">{name}</p>
                
             </section>


         </div>
     </section>
     </div> 
          
    
     </div>

  
  

  )

})


  
         


}

                  

        


                     
                  </section>
                </div>
                <div className="fourth-section__second-2"  ref={Key1}>
                <h2 className="fourth-section__second-1-head">rice</h2>
                  <section className="fourth-section__second-2-holder">
          
                    {
                      
ad.map((e, f) => {
  const { id, image, title, name, order, price} = e;

  /*   onChange = {(eae) =>
    setB(eae.target.value)}  */
  return (

   
      
     

    <div className="fourth-section__firstmap">
       <div onClick={() => {
         navigate('/try' , {
           state: {
             name: 'xyz',
             id, image, title, name, order, price
           }
         })
       }}   >
          
     <section className="fourth-section__firstmap-holder">
         <div style={{width:  cu ,   height: cv ,  }} className="fourth-section__firstmap-holder-part1">
                <img  className="fourth-section__firstmap-holder-part1-img" src={image} alt="" />
               
         </div>  

         <div className="fourth-section__firstmap-holder-part2">
         <p   className="fourth-section__firstmap-holder-part1-para">  {title} </p>
             <section className="fourth-section__firstmap-holder-part2-holder">


                
                <p   className="fourth-section__firstmap-holder-part2-price">{price}</p>
                 <p  className="fourth-section__firstmap-holder-part2-order">{order}</p>
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
                </div>

                <div className="fourth-section__second-3"  ref={Key2}>
                <h2 className="fourth-section__second-1-head">bean</h2>
                  <section className="fourth-section__second-3-holder">
                    {
                     

ae.map((e, f) => {
  const { id, image, title, name, order, price} = e;

  /*   onChange = {(eae) =>
    setB(eae.target.value)}  */
  return (

   
      
     

    <div className="fourth-section__firstmap">
       <div onClick={() => {
         navigate('/try' , {
           state: {
             name: 'xyz',
             id, image, title, name, order, price
           }
         })
       }}   >
          
     <section className="fourth-section__firstmap-holder">
         <div style={{width:  cu ,   height: cv ,  }} className="fourth-section__firstmap-holder-part1">

                <img className="fourth-section__firstmap-holder-part1-img" src={image} alt="" />

         </div>  

         <div className="fourth-section__firstmap-holder-part2">
         <p  className="fourth-section__firstmap-holder-part1-para">  {title} </p>
             <section className="fourth-section__firstmap-holder-part2-holder">


                
                <p  className="fourth-section__firstmap-holder-part2-price">{price}</p>
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
                </div>





                <div className="fourth-section__second-3"  ref={Key3}>
                <h2 className="fourth-section__second-1-head">water</h2>
                  <section className="fourth-section__second-3-holder">
                    {
                     

ae.map((e, f) => {
  const { id, image, title, name, order, price} = e;

  /*   onChange = {(eae) =>
    setB(eae.target.value)}  */
  return (

   
      
     

    <div className="fourth-section__firstmap">
       <div onClick={() => {
         navigate('/try' , {
           state: {
             name: 'xyz',
             id, image, title, name, order, price
           }
         })
       }}   >
          
     <section className="fourth-section__firstmap-holder">
         <div style={{width:  cu ,   height: cv ,  }} className="fourth-section__firstmap-holder-part1">
                <img  className="fourth-section__firstmap-holder-part1-img" src={image} alt="" />
               
         </div>  

         <div className="fourth-section__firstmap-holder-part2">
         <p   className="fourth-section__firstmap-holder-part1-para">  {title} </p>
             <section className="fourth-section__firstmap-holder-part2-holder">


                
                <p  className="fourth-section__firstmap-holder-part2-price">{price}</p>
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
                </div>
                <div className="fourth-section__second-4"  ref={Key4}>
                <h2 className="fourth-section__second-1-head">spag</h2>
                  <section className="fourth-section__second-4-holder">
                    {

                      

ae.map((e, f) => {
  const { id, image, title, name, order, price} = e;

  /*   onChange = {(eae) =>
    setB(eae.target.value)}  */
  return (

   
      
     

    <div className="fourth-section__firstmap">
       <div onClick={() => {
         navigate('/try' , {
           state: {
             name: 'xyz',
             id, image, title, name, order, price
           }
         })
       }}   >
          
     <section className="fourth-section__firstmap-holder">
         <div style={{width:  cu ,   height: cv ,  }} className="fourth-section__firstmap-holder-part1">
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
                </div>
                <div className="fourth-section__second-5"   ref={Key5}>
                <h2 className="fourth-section__second-1-head">  rice and bean</h2>
                  <section className="fourth-section__second-5-holder">
                    {
                   

af.map((e, f) => {
  const { id, image, title, name, order, price} = e;

  /*   onChange = {(eae) =>
    setB(eae.target.value)}  */
  return (

   
      
     

    <div className="fourth-section__firstmap">
       <div onClick={() => {
         navigate('/try' , {
           state: {
             name: 'xyz',
             id, image, title, name, order, price
           }
         })
       }}   >
          
     <section className="fourth-section__firstmap-holder">
         <div style={{width:  cu ,   height: cv ,  }} className="fourth-section__firstmap-holder-part1">
                <img  className="fourth-section__firstmap-holder-part1-img" src={image} alt="" />
               
         </div>  

         <div className="fourth-section__firstmap-holder-part2">
         <p   className="fourth-section__firstmap-holder-part1-para">  {title} </p>
             <section className="fourth-section__firstmap-holder-part2-holder">


                
                <p  className="fourth-section__firstmap-holder-part2-price">{price}</p>
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
                </div>
                <div className="fourth-section__second-6"   ref = {Key6}>
                <h2 className="fourth-section__second-1-head"> bread </h2>
                  <section className="fourth-section__second-6-holder">
                    {
                 

ag.map((e, f) => {
  const { id, image, title, name, order, price} = e;

  /*   onChange = {(eae) =>
    setB(eae.target.value)}  */
  return (

   
      
     

    <div className="fourth-section__firstmap">
       <div onClick={() => {
         navigate('/try' , {
           state: {
             name: 'xyz',
             id, image, title, name, order, price
           }
         })
       }}   >
          
     <section className="fourth-section__firstmap-holder">
         <div style={{width:  cu ,   height: cv ,  }} className="fourth-section__firstmap-holder-part1">
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
                </div>
                <div className="fourth-section__second-7"   ref={Key7}>
                <h2 className="fourth-section__second-1-head"> stew </h2>
                 
                    
           <Index4 />



                </div>
                <div id='#try' className="fourth-section__second-8"  ref={Key8}>
                <h2 className="fourth-section__second-1-head">egusi</h2>
                  <section className="fourth-section__second-8-holder">
                    {
                      

ad.map((e, f) => {
  const { id, image, title, name, order, price} = e;

  /*   onChange = {(eae) =>
    setB(eae.target.value)}  */
  return (

   
      
     

    <div className="fourth-section__firstmap">
       <div onClick={() => {
         navigate('/try' , {
           state: {
             name: 'xyz',
             id, image, title, name, order, price
           }
         })
       }}   >
          
     <section className="fourth-section__firstmap-holder">
         <div style={{width:  cu ,   height: cv ,  }} className="fourth-section__firstmap-holder-part1">
                <img  className="fourth-section__firstmap-holder-part1-img" src={image} alt="" />
               
         </div>  

         <div className="fourth-section__firstmap-holder-part2">
         <p   className="fourth-section__firstmap-holder-part1-para">  {title} </p>
             <section className="fourth-section__firstmap-holder-part2-holder">


                
                <p   className="fourth-section__firstmap-holder-part2-price">{price}</p>
                 <p   className="fourth-section__firstmap-holder-part2-order">{order}</p>
                 <p  className="fourth-section__firstmap-holder-part2-name">{name}</p>
                
             </section>


         </div>
     </section>
     </div> 
          
    
     </div>

  
  

  )

})


  
         

                      
                    }
                  </section>
                </div>


                  
              </section>
                
              </div>


            </section>



          </div>









          















        </section>







      </main>
      
      

    )

}


export default Index3