import React from "react";
import { useLocation } from "react-router-dom";

import {ImSpoonKnife} from 'react-icons/im';
import {GiChickenOven} from "react-icons/gi"
import {FaTwitterSquare ,   FaFacebookSquare  ,  FaLinkedin} from "react-icons/fa";

import { Link } from "react-router-dom";

import {BsFlower1 , BsFillPersonLinesFill} from 'react-icons/bs'




const Index2 = () => {
  

  const location = useLocation();
  const { id, image, title, name, order, price} = location.state;



     return  <main className="main2">

     <section style={{width: "100%"}} className="section2  ">
   
   
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
          
          <div style={{backgroundColor: "transparent", marginLeft: "auto" ,  width: "12rem"}} className="first-section__3  first-section__3-3-fix">
   
            <section className="first-section__3-3  ">
              <div className="first-section__3-3-1">
              
              </div>
              <div className="first-section__3-3-2">
                <p className="first-section__3-3-1-para1">download app</p>
                <p className="first-section__3-3-1-para2">for more offers</p>
         
              </div>
   
   
   
   
            </section>
            
   
   
   
          </div>
          <div  style={{backgroundColor: "transparent", color: '#000',  width: "12rem"}} className="first-section__4">
   
          <section className="first-section__4-4">
    
              <div className="first-section__4-4-2">
                <p className="first-section__4-4-2-para1"><BsFlower1 className="first-section__4-4-2-icon"></BsFlower1>  </p>
         
              </div>
   
   
   
   
            </section>
            
          </div>
          <div  style={{backgroundColor: "transparent" }} className="first-section__5">
            <section className="first-section__5-5">
              <p className="first-section__5-5-para"><BsFlower1 className="first-section__5-5-2-icon"></BsFlower1> </p>
            </section>
            
          </div>
   
   
        </header>
        
   
   
      </div>

      <div className="second3-section">
        <section className="second3-section__holder">
            <div className="second3-section__first">

              <section className="second3-section__first-holder">
                   <div className="second3-section__img-holder">
                   <img src={image} alt="" className="second3-section__img" />
                     </div>

                 
                   <div className="second3-section__icon-holder">
                   <FaFacebookSquare className="second3-section__times1"></FaFacebookSquare>
                   <FaTwitterSquare className="second3-section__times2"></FaTwitterSquare>
                   <FaLinkedin  className="second3-section__times3"></FaLinkedin>
                   </div>
                </section>
              
              
              </div>
              <div className="second3-section__second">

                <section className="second3-section__second-holder">
                    <p className="second3-section__title">{title}</p>
                    <div className="second3-section__pan">
                     
                      <p className="second3-section__area">pan-asia</p>
                      <p className="second3-section__avail-time">Available from 10:45AM</p>
                    </div>
                    <p className="second3-section__price">{price}</p>
                    <p className="second3-section__order">  <span className="second3-section__span"> {order}</span>  </p>
                    <div className="second3-section__detail">

                      <h2 className="second3-section__detail-h2">DETAILS ABOUT THIS MEAL</h2>
                      <p className="second3-section__detail-para">A crunch here and crunch there, in a mild fried rice works stupendously well with a luscious crushed black-pepper and honey infused, chilli and oyster sauce teeming with batter-fried bits of chicken. May contain mushrooms.</p>
                      
                    </div>

                    <div className="second3-section__veg">
                      <GiChickenOven className="second3-section__times"></GiChickenOven>
                      <p className="second3-section__veg-para">non-veg</p>
                      
                      </div>

                      <div className="second3-section__ingre">
                        <h2 className="second3-section__ingre-h2">INGREDIENTS</h2>
                        <p className="second3-section__ingre-para"> Chicken, Rice, Black Pepper, Honey, Oyster Sauce, Bell Pepper, Onion, Red Chilli, Light Soy Sauce, Dark Soy Sauce, Carrot, Green Bean </p>
                      </div>
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



export default Index2