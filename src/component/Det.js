import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Det.css';
import Desc from './Desc'

function Det() {
    return (
<div class="container">
            <section class="htc__product__details bg__white ptb--100">
           
            <div class="htc__product__details__top">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                            <div class="htc__product__details__tab__content">
                               
                                <div class="product__big__images">
                                    <div class="portfolio-full-image tab-content">
                                        
                                            <img src="http://pvcrfidcardprintingsolution.com/images/product_image/featured-img-0716.jpg" alt="full-image"/>
                                        
                                    </div>
                                </div>
                            
                                                         
                                                          
                            </div>
                        </div>
                        <div class="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                            <div class="ht__product__dtl mt-n1">
                                <h2 class="text-left">ID cards printing online</h2>
                                <h6 class="text-left">Price: <span>DC-12<span></span></span></h6>
                                 <h6 class="text-left">Model: <span>DC-12<span></span></span></h6>
                                 <p class="product-details-contact pull-left"><i class="fa fa-phone"></i>01711739603</p>
                                                                                         
                                
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <Desc></Desc>
   </div>
        );
    }
    
    export default Det