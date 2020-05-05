import React from 'react'
import './Footer.css';


function Footer(){

    return(
        
 
        
        <footer id="dk-footer" class="dk-footer">
            <div class="top-buffer"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-lg-4">
                            <div class="dk-footer-box-info">

                                <p class="footer-info-text">
                                <h2>Banglasoft IT</h2>
                                </p>
                                <div class="footer-social-link">
                                    <h3>Follow us</h3>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                       
                        <div class="col-md-12 col-lg-8">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="contact-us">
                                        <div class="contact-icon">
                                            <i class="fa fa-map-o" aria-hidden="true"></i>
                                        </div>
                                       
                                        <div class="contact-info">
                                            <h3>Capital Super Market</h3>
                                            <p>Dhaka,Bangladesh</p>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                              
                                <div class="col-md-6">
                                    <div class="contact-us contact-us-last">
                                        <div class="contact-icon">
                                            <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                                        </div>
                                       
                                        <div class="contact-info">
                                            <h3>+880 1715 360130</h3>
                                            <p>Give us a call</p>
                                        </div>
                                        
                                    </div>
                                 
                                </div>
                            
                            </div>
                   
                           

                        </div>
                    </div>
                </div>
        
        
                <div class="copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <span>Copyright © 2019, All Right Reserved Banglasoft IT.</span>
                            </div>
                            <div class="col-md-6">
                                <div class="copyright-menu">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="back-to-top" class="back-to-top">
                    <button class="btn btn-dark" title="Back to Top" style={{display: 'block;'}}>
                        <i class="fa fa-angle-up"></i>
                    </button>
                </div>
        </footer>
    
    );
    
    }
    
    export default Footer