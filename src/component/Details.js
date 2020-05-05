import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './Details.css';

class Details extends React.Component { 

  constructor(props) {

    super(props);

    this.state = {
        items: [],
        isLoaded: false
    }

}


componentDidMount() {
  const { params } = this.props.match;
    fetch('http://pvcrfidcardprintingsolution.com/api1.php?id='+params.id)
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: json,
                isLoaded: true, 
            })
        }).catch((err) => {
            console.log(err);
        });

}

  render() {
    const { isLoaded, items } = this.state;
    return (
<div class="container">
<div>
{items.map(item => (
      <div class="product-content product-wrap clearfix product-deatil">
        <div class="row">
            <div class="col-md-5 col-sm-12 col-xs-12 ">
              <div class="product-image"> 
                <div id="myCarousel-2" class="carousel slide">
                <ol class="carousel-indicators">
                  <li data-target="#myCarousel-2" data-slide-to="0" class=""></li>
                  <li data-target="#myCarousel-2" data-slide-to="1" class="active"></li>
                  <li data-target="#myCarousel-2" data-slide-to="2" class=""></li>
                </ol>
                <div class="carousel-inner">

                  <div class="item active">
                    <img src={item.image} alt=""/>
                  </div>
  
                  <div class="item">
                    <img src={item.image} alt=""/>
                  </div>

                  <div class="item">
                    <img src={item.image} alt=""/>
                  </div>
                </div>
                <a class="left carousel-control" href="#myCarousel-2" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a>
                <a class="right carousel-control" href="#myCarousel-2" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-sm-12 col-xs-12">
          
            <h4 class="name">
            {item.name}
              
              <i class="fa fa-star fa-2x text-primary"></i>
              <i class="fa fa-star fa-2x text-primary"></i>
              <i class="fa fa-star fa-2x text-primary"></i>
              <i class="fa fa-star fa-2x text-primary"></i>
              <i class="fa fa-star fa-2x text-muted"></i>
              
            </h4>
            <hr/>
            <h3 class="price-container">
            {item.price}
              
            </h3>
            <div class="certified">
              <ul>
                <li><a href="">Delivery time<span>7 Working Days</span></a></li>
                <li><a href="">Certified<span>Quality Assured</span></a></li>
              </ul>
              
            </div>
            
            <hr/>
<div class="def-number-input number-input safari_only container">
<b>Model:</b> {item.model}
</div>
            <hr/>
            
            <div class="description description-tabs ">
              
            <p class="product-details-contact"><i class="fa fa-phone"></i>Call - 0171173603</p>
                
               
              </div>
            </div>
            <hr/>
            <div class="row">
            <div id="myTabContent" class="tab-content">
                <div class="" id="">
                  <br/>
                  <h1>Product Description</h1>
                  <td dangerouslySetInnerHTML={{__html: item.desc}} />
                 
                </div>
              <div class="col-sm-12 col-md-6 col-lg-6">
                  
              </div>
              
            </div>
          </div>
        </div>
        </div>
         ))}
        
       
    </div>
    
    </div>
    );
  }
}

export default Details