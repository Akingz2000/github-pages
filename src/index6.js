import React, {useState, useEffect, useReducer, useRef} from "react";
import {ImSpoonKnife} from 'react-icons/im'
import { Link } from "react-router-dom";
import {VscChevronDown , VscChevronUp} from 'react-icons/vsc';
import {BsFlower1 , BsFillPersonLinesFill} from 'react-icons/bs'
import {FaPizzaSlice} from 'react-icons/fa'
import {AiOutlineSearch , AiOutlineShoppingCart} from 'react-icons/ai'
import rice from "./rice";


const Index6 = () => {

  const stateReducer = {
    state1: '	https://s3-ap-southeast-1.amazonaws.com/foodvista.1/974fa2d8-702f-4a19-bc60-a13cf76f4007.jpg',
    state2: '	https://s3-ap-southeast-1.amazonaws.com/foodvista.1/c504fdd2-3e11-43f1-8b31-7a5bed0883b9.jpg',
    state3: '	https://s3-ap-southeast-1.amazonaws.com/foodvista.1/1346b994-a852-4aad-8b14-1765575ac619.png'


  }

  const reducer = (state, action) => {
    return state;
    
  }



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


 const [state, dispatch] = useReducer(reducer , stateReducer);

 const [ba, setBA] = useState('	https://s3-ap-southeast-1.amazonaws.com/foodvista.1/974fa2d8-702f-4a19-bc60-a13cf76f4007.jpg')

 const First = () => {
    setC(!c)
    
   // setB("first-section__2-2-para2-p1")
  }
  

  

  

  return <main className="main">

  <section style={{width: "100%"}} className="section   section1">


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

   <div className="second2-section">
       <section className="second2-section__holder">
           
           <div className="second2-section__div">
           <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
            <defs>
                <linearGradient id="a" x1="100%" x2="0%" y1="50%" y2="50%">
                    <stop offset="0%" stop-color="#D9CEC0"></stop>
                    <stop offset="100%" stop-color="#FFF"></stop>
                </linearGradient>
                <linearGradient id="b" x1="0%" y1="50%" y2="50%">
                    <stop offset="0%" stop-color="#F5914E"></stop>
                    <stop offset="100%" stop-color="#E85826"></stop>
                </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
                <path className="second2-section__path" fill="url(#292a2e)" d="M17.528 18.54H3.506a1.08 1.08 0 0 0-1.078-1.082V-1.218c0-.598.485-1.083 1.083-1.083h14.013c.598 0 1.083.485 1.083 1.083v18.676a1.08 1.08 0 0 0-1.079 1.083z" transform="rotate(54 9.895 23.089)"></path>
                <path className="second2-section__path" fill="#4A4A4A" d="M20.626 15.891c-.914.664-1.98.46-2.58-.368-.609-.836-.48-1.922.434-2.586.923-.67 1.995-.457 2.603.38.601.827.466 1.904-.457 2.574zm2.32 3.005l-.672.489-.495-8.71.681-.494.486 8.715zm3.277-2.217c-.914.664-1.98.46-2.581-.368-.608-.837-.486-1.931.428-2.595.914-.664 2.002-.449 2.61.388.6.827.457 1.91-.457 2.575zm-6.101-1.482c.412-.3.497-.823.154-1.295-.355-.49-.88-.57-1.292-.27-.403.292-.488.816-.132 1.305.342.472.867.553 1.27.26zm5.597.788c.412-.3.503-.815.154-1.295-.355-.49-.88-.57-1.292-.271-.412.3-.488.817-.133 1.306.35.48.859.56 1.27.26z"></path>
                <path fill="url(#b)" d="M11.139 3.992c0 .493.483.893 1.078.893v6.28c0 .598-.484 1.083-1.082 1.083H-2.88a1.083 1.083 0 0 1-1.083-1.083v-6.28c.596 0 1.079-.4 1.079-.893h14.022z" transform="rotate(45 -13.525 23.257)"></path>
            </g>
        </svg></div>
            
            <h1 className="second2-section__h1">
           

            FreshMenu Offers

            </h1>

           
           
           
           
        </section>
  </div>

  <div className="third3-section">
      <section className="third3-section__holder">
             <div className="third1-section__first">
                    <p style={{ minWidth: "13%", fontSize: "1.6rem" , fontWeight: "600", color: "#000"}} className="third1-section__first-para">Payment Discounts</p>
                    <div style={{ minWidth: "87%"}} className="third1-section__first-line"></div>
                    
              </div>

              <div className="third3-section__second">
                  <section className="third3-section__second-holder">
                      <div className="third3-section__second-1">
                          <section className="third3-section__second-1-holder">
                              <img className="third3-section__second-1-img" src={state.state1} alt="" />
                              <p className="third3-section__second-1-para">Pay by Mobikwik and Get Maximum Rs 150 cashback</p>
                              <a href="#" className="third3-section__second-1-link">view details</a>
                              <ul className="third3-section__second-1-ul">
                                  <li className="third3-section__second-1-li">
                                  Minimum assured cashback is Rs 21
                                      </li>
                                      <li className="third3-section__second-1-li">
                                      Use code KWIK150 to avail the cashback upto Rs 150
                                      </li>
                                      <li className="third3-section__second-1-li">
                                      The minimum order value to avail the offer is Rs199
                                      </li>
                                      <li className="third3-section__second-1-li">
                                      SuperCash will be credited to your Mobikwik Wallet within 48 hours of completing the offer
                                      </li>
                                      <li className="third3-section__second-1-li">
                                      Mobikwik solely reserves the right to change offer terms at any time without prior notice to the customer
                                      </li>
                            </ul>
                          </section>
                        </div>

                        <div className="third3-section__second-2">
                          <section className="third3-section__second-2-holder">
                          <img className="third3-section__second-1-img" src={state.state2} alt="" />
                              <p className="third3-section__second-1-para">Get 10% Cashback upto Rs.75 on transactions using PayZapp with Minimum transaction value Rs.350</p>
                              <a href="#" className="third3-section__second-2-link">view details</a>
                              <ul className="third3-section__second-2-ul">
                                  <li className="third3-section__second-1-li">
                                  Minimum cart value should be 350 and above (No promo code
                                      </li>
                                      <li className="third3-section__second-1-li">
                                      offer will be applicable only for HDFC Linked cards and PayZapp prepaid cards/wallet
                                      </li>
                                      <li className="third3-section__second-1-li">
                                      The minimum order value to avail the offer is Rs199
                                      </li>
                                      <li className="third3-section__second-1-li">
                                      Cashback will be credited to your PayZapp Wallet within 5 days of completing the offer </li>
                                      <li className="third3-section__second-1-li">
                                      PayZapp solely reserves the right to change offer terms at any time without prior notice to the customer </li>
                            </ul>


                         </section>
                          
                          
                        </div>

                        <div className="third3-section__second-3">

                          <section className="third3-section__second-3-holder">
                          <img className="third3-section__second-1-img" src={state.state3} alt="" />
                              <p className="third3-section__second-1-para">Buy Large Pass and get instant cashback of Rs 1000/-</p>
                              <a href="#" className="third3-section__second-3-link">view details</a>
                              <ul className="third3-section__second-3-ul">
                                  <li className="third3-section__second-1-li">
                                  You can buy a FreshPass. The amount paid by you will be credited as Freshmoney.
                                      </li>
                                      <li className="third3-section__second-1-li">
                                      Pay Rs 999 & get Rs 1129 as FreshMoney. Savings upto 13%. Cashback expires in 3 month
                                      </li>
                                      <li className="third3-section__second-1-li">
                                      Pay Rs 1999 & get Rs 2299 as FreshMoney. Savings upto 15%. Cashback expires in 3 months
                                      </li>
                                      <li className="third3-section__second-1-li">
                                      Pay Rs 3000 & get Rs 4000 as FreshMoney. Savings upto 33%. Cashback expires in 4 months
                                      </li>
                                      <li className="third3-section__second-1-li">
                                      FreshMoney will be auto applied in cart page
                                      </li>
                            </ul>
                          </section>
                          
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



export default Index6