import React, {useState, useEffect, useReducer, useRef} from "react";
import {ImSpoonKnife} from 'react-icons/im'
import { Link } from "react-router-dom";
import {VscChevronDown , VscChevronUp} from 'react-icons/vsc';
import {BsFlower1 , BsFillPersonLinesFill} from 'react-icons/bs'
import {FaPizzaSlice} from 'react-icons/fa'
import {AiOutlineSearch , AiOutlineShoppingCart} from 'react-icons/ai'
import rice from "./rice";

const Index5 = () => {
    
  const [a, setA] = useState("first-section__2-2-para2-p1");
  const [b, setB] = useState("first-section__2-2-para2-p2");
  const [d, setD] = useState("first-section__2-2-para2-p2-edit");
  const [f, setF] = useState("try1");
  const [l, setL] = useState(5);
  
  const [h, setH] = useState('translateX(0vw)')
  const [k, setK] = useState('translateX(-200vw)')
  const [q, setQ] = useState("translateX(0%)")
  const [n, setN] = useState("translateX(100%)");
  const [o, setO] = useState("translateX(200%)")
  const [p, setP] = useState("translateX(300%)")
 const [g, setG] = useState("try2");
 const [c, setC] = useState(true);

 const First = () => {
    setC(!c)
    
   // setB("first-section__2-2-para2-p1")
  }
  



     return <main className="main">

         <section style={{width: "100%"}} className="section  section1">


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
                    <p onClick={First} className={a}>india   {c ?  <VscChevronUp className='first-section__2-2-icon-up'></VscChevronUp>   :<VscChevronDown className='first-section__2-2-icon-up'></VscChevronDown>  } </p>
                    <p className={c ? b : d}>india 1    </p>
                    <p className={c ? b : d}>india 2     </p>
                    <p className={c ? b : d}>india 3</p> 
                  </div>

                </section>
                
              </div>
              <div className="first-section__3   first-section__3-3-fix">

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



          <div className="second1-section">

              <section className="second1-section__holder">

                    
                    <Link className="second1-section__link"  to = '/'>  back to home   </Link>
                  
                      <div  className="second1-section__first-holder">
                      <AiOutlineSearch  className="second1-section__icon"></AiOutlineSearch>
                     <form className="second1-section__form">
                         
                           <input className="second1-section__input" type="text" placeholder="search" />
                     </form>
                     <p className="second1-section__para"> clear </p>
                        
                      </div>
                    
                   
                  
                  
              </section>
              
              
              </div>

              <div className="third1-section">

                <section className="third1-section__holder">
                  <div className="third1-section__first">
                    <p className="third1-section__first-para">TOP CATEGORIES</p>
                    <div className="third1-section__first-line"></div>
                    
                   </div>
                   <div className="third1-section__second">
                     <section className="third1-section__second-holder">
         
                        {

                       rice.map((e) => {
                         const {image, order} = e;
                        return (

                          <figure className="third1-section__second-figure">
                            <img src={image} alt="" className="third1-section__second-img" />
                            <figcaption className="third1-section__second-figcaption">
                                {order}
                              </figcaption> 
                          </figure>

                        )

                       })

                        }
                       
                       </section>
                     
                     
                     
                     </div>
                  
                  
                  
                  </section>
                
                </div>

  




                
                <div className="footer1">
                  <section className="footer1__holder">
                    <section className="footer1__first">
                      <div className="footer1__first-holder">
                         <section className="footer1__first1">
                           <h3 className="footer1__first1-head">
                           COMPANY
                             </h3>

                             <ul className="footer1__first1-ul">
                                 <li className="footer1__first1-li1">
                                   
                                     <Link className="footer1__first1-link" to="/">  FAQ  </Link>
                                 </li>

                                 <li className="footer1__first1-li1">
                                   
                                   <Link className="footer1__first1-link" to="/">  About </Link>
                                 </li>

                                 <li className="footer1__first1-li1">
                                   
                                   <Link className="footer1__first1-link" to="/">  Careers  </Link>
                                 </li>
                                 <li className="footer1__first1-li1">
                                   
                                   <Link className="footer1__first1-link" to="/">  Blog </Link>
                                 </li>

                                 <li className="footer1__first1-li2">
                                   
                                   <Link className="footer1__first1-link" to="/">  Terms </Link>  <Link className="footer1__first3-link" to="/">  Privacy </Link>
                                 </li>
                               
                               </ul>

                           
                           
                           </section>
                           <section className="footer1__first2">
                           <h3 className="footer1__first1-head">
                           HELP & CONTACT
                             </h3>

                             <ul className="footer1__first2-ul">
                                 <li className="footer1__first2-li1">
                                   
                                     <Link className="footer1__first2-link" to="/">  <BsFlower1 className="footer1__first2-icon"></BsFlower1>  <span className="footer1__first2-span">help center</span>  </Link>
                                 </li>

                                 <li className="footer1__first2-li1">
                                   
                                     <Link className="footer1__first2-link" to="/">  <BsFlower1 className="footer1__first2-icon"></BsFlower1>  <span className="footer1__first2-span">email us</span>  </Link>
                                 </li>

                                 <li className="footer1__first2-li1">
                                   
                                     <Link className="footer1__first2-link" to="/">  <BsFlower1 className="footer1__first2-icon"></BsFlower1>  <span className="footer1__first2-span">08071434571</span>  </Link>
                                 </li>

                              </ul>

                             
                             
                             </section>

                             <section className="footer1__first3">  
                             <h3 className="footer1__first1-head">
                             MORE FROM US

                             </h3>

                             <ul className="footer1__first3-ul">
                                 <li className="footer1__first3-li1">
                                   
                                     <Link className="footer1__first1-link" to="/">  Bulk/Party Order </Link>
                                 </li>

                                 <li className="footer1__first3-li1">
                                   
                                   <Link className="footer1__first1-link" to="/">  Cake Order </Link>
                                 </li>

                                 <li className="footer1__first3-li1">
                                   
                                   <Link className="footer1__first1-link" to="/">  FreshClub </Link>
                                 </li>
                                 <li className="footer1__first3-li1">
                                   
                                   <Link className="footer1__first1-link" to="/">  Offers </Link>
                                 </li>
                               </ul>
                             </section>
                        
                        
                        </div>
                      
                      </section>
                      <section className="footer1__second">
                      <div className="footer1__second-holder">
                        <h3 className="footer1__second-head">
SUBSCRIBE TO OUR DROOLWORTHY NEWSLETTER</h3>
                        <form  className="footer1__second-form">
                            <input className="footer1__second-input" type="text" placeholder="enter email"  />
                            <button className="footer1__second-button">subscribe</button>
                          </form>
                        </div>      
                        </section>
                    
                    </section>
                  
                  </div>












                  <div className="footer2">
                      <section className="footer2__holder">
                      <section className="footer1__first">
                      <div className="footer1__first-holder">
                         <section className="footer1__first1">
                           <h3 className="footer1__first1-head">
                           CATEGORIES
                             </h3>

                             <ul className="footer1__first1-ul">
                                 <li className="footer1__first1-li1">
                                   
                                     <Link className="footer1__first1-link" to="/">  Mains  </Link>
                                 </li>

                                 <li className="footer1__first1-li1">
                                   
                                   <Link className="footer1__first1-link" to="/"> Pizzas </Link>
                                 </li>

                                 <li className="footer1__first1-li1">
                                   
                                   <Link className="footer1__first1-link" to="/">  Salads </Link>
                                 </li>
                                 <li className="footer1__first1-li1">
                                   
                                   <Link className="footer1__first1-link" to="/">  Desserts </Link>
                                 </li>

                                 <li className="footer1__first1-li1">
                                   
                                   <Link className="footer1__first1-link" to="/">  Quickbites</Link>
                                 </li>


                                
                               </ul>

                           
                           
                           </section>
                           <section className="footer1__first2">
                           <h3 className="footer1__first1-head">
                           CUISINES

                             </h3>

                             <li className="footer1__first3-li1">
                                   
                                   <Link className="footer1__first1-link" to="/">  

Indian </Link>
                               </li>

                               <li className="footer1__first3-li1">
                                 
                                 <Link className="footer1__first1-link" to="/">  






Chinese

 </Link>
                               </li>

                               <li className="footer1__first3-li1">
                                 
                                 <Link className="footer1__first1-link" to="/">  






italian

 </Link>
                               </li>

                               <li className="footer1__first3-li1">
                                 
                                 <Link className="footer1__first1-link" to="/">  American</Link>
                               </li>
                          

                             
                             
                             </section>

                             <section className="footer1__first3">  
                             
                             <ul className="footer1__first3-ul">
                                 <li className="footer1__first3-li1  footer1__first3-li1-sub">
                                   
                                     <Link className="footer1__first1-link" to="/">  Mexican </Link>
                                 </li>

                                 <li className="footer1__first3-li1">
                                   
                                   <Link className="footer1__first1-link" to="/">  Thai </Link>
                                 </li>

                                 <li className="footer1__first3-li1">
                                   
                                   <Link className="footer1__first1-link" to="/"> Continental </Link>
                                 </li>

                                 <li className="footer1__first3-li1">
                                   
                                   <Link className="footer1__first1-link" to="/">  Mediterranean </Link>
                                 </li>
                                
                                
                               </ul>
                             </section>
                        
                        
                        </div>
                      
                      </section>
                        
                        
                        
                        
                        </section>
                    
                    
                    
                    
                    </div>

                 


















         </section>




     </main>



}



export default Index5;