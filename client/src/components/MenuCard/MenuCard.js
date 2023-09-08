import React from "react";
import image1 from '../../assets/calzone.png';
import image2 from '../../assets/chickensalad.png';
import image3 from '../../assets/coldsub.png';
import image4 from '../../assets/hotsub.png';
import image5 from '../../assets/meatballsliders.png';
import image6 from '../../assets/pasta.png';
import image7 from '../../assets/pizza.png';
import image8 from '../../assets/sausagerolls.png';
import image9 from '../../assets/stromboli.png';
import image10 from '../../assets/tiramisu.png';
import image11 from '../../assets/beer.png';

function MenuCard() {
  return (
    <div className="container mt-3">
			<div className="row">
				<div className="col-md-4">
					<div className="card shadow-lg">
						<img src={image1} alt=""/>
						<div className="card-body">
							<h3>Calzone</h3>
						</div>
					</div>
				</div>
        <div className="col-md-4">
					<div className="card shadow-lg">
						<img src={image2} alt=""/>
						<div className="card-body">
							<h3>Chicken Salad</h3>
						</div>
					</div>
        </div>
        <div className="col-md-4">
					<div className="card shadow-lg">
						<img src={image3} alt=""/>
						<div className="card-body">
							<h3>Cold Sub</h3>
						</div>
					</div>
        </div>
        <div className="col-md-4">
					<div className="card shadow-lg">
						<img src={image4} alt=""/>
						<div className="card-body">
							<h3>Hot Sub</h3>
						</div>
					</div>
        </div>
        <div className="col-md-4">
					<div className="card shadow-lg">
						<img src={image5} alt=""/>
						<div className="card-body">
							<h3>Meatball Sliders</h3>
						</div>
					</div>
        </div>
        <div className="col-md-4">
					<div className="card shadow-lg">
						<img src={image6} alt=""/>
						<div className="card-body">
							<h3>Pasta</h3>
						</div>
					</div>
        </div>
        <div className="col-md-4">
					<div className="card shadow-lg">
						<img src={image7} alt=""/>
						<div className="card-body">
							<h3>Pizza</h3>
						</div>
					</div>
        </div>
        <div className="col-md-4">
					<div className="card shadow-lg">
						<img src={image8} alt=""/>
						<div className="card-body">
							<h3>Sausage Rolls</h3>
						</div>
        	</div>
        </div>
        <div className="col-md-4">
					<div className="card shadow-lg">
						<img src={image9} alt=""/>
						<div className="card-body">                
							<h3>Stromboli</h3>
						</div>
					</div>
        </div>
        <div className="col-md-4">
					<div className="card shadow-lg">
						<img src={image10} alt=""/>
						<div className="card-body">
							<h3>Tiramisu</h3>
						</div>
					</div>
        </div>
        <div className="col-md-4">
					<div className="card shadow-lg">
						<img src={image11} alt=""/>
						<div className="card-body">
							<h3>Beer</h3>
						</div>
					</div>
        </div>
			</div>
    </div>
  )
};

export default MenuCard;