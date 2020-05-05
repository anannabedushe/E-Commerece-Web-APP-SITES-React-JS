import React from 'react';
import './Style.css';
import './Body.css';

class Body extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

   
    componentDidMount() {

        fetch('http://pvcrfidcardprintingsolution.com/api.php')
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

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
<div class="main">
                <div class="wrap">
             	  <div class="content-top">
             		<div class="lsidebar span_1_of_c1">
					  
					</div>

					<div class="cont span_2_of_c1">
					  <div class="social">	
					     <ul>	
						  <li class="facebook"><a href="#"><span> </span></a><div class="radius"> <img src="images/radius.png"/><a href="#"> </a></div><div class="border hide"><p class="num">1.51K</p></div></li>
						 </ul>
			   		   </div>
					   <div class="social">	
						   <ul>	
							  <li class="twitter"><a href="#"><span> </span></a><div class="radius"> <img src="images/radius.png"/></div><div class="border hide"><p class="num">1.51K</p></div></li>
						  </ul>
			     		</div>
						 <div class="social">	
						   <ul>	
							  <li class="google"><a href="#"><span> </span></a><div class="radius"> <img src="images/radius.png"/></div><div class="border hide"><p class="num">1.51K</p></div></li>
						   </ul>
			    		 </div>
						 <div class="social">	
						   <ul>	
							  <li class="dot"><a href="#"><span> </span></a><div class="radius"> <img src="images/radius.png"/></div><div class="border hide"><p class="num">1.51K</p></div></li>
						  </ul>
			     		</div>
						<div class="clear"> </div>
					  </div>
					  <div class="clear"></div>			
				   </div>
				   <div class="container-fluid white">
				   <div class="top-buffer"></div>
<div class="row white">
{items.map(item => (
<div class="col-md-3 col-sm-6" key={item.id}>
            <div class="product-grid">
                <div class="product-image">
                    <a href={"details/"+item.id}>
                        <img class="pic-1" src={item.image}/>
                        <img class="pic-2" src={item.image}/>
                    </a>
                
             
                </div>
                <ul class="rating">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star disable"></li>
                </ul>
                <div class="product-content">
                    <h3 class="title"><a href={"details/"+item.id}>{item.name}</a></h3>
                    <div class="price">{item.price}
                        <span></span>
                    </div>
                    <a class="add-to-cart" href={"details/"+item.id}>+ Details</a>
                </div>
            </div>
			<div class="top-buffer"></div>
        </div>
		  ))}
</div>
<div class="top-buffer"></div>
				   </div>
			 </div>
             </div>
		);
		}
  }
  
  export default Body