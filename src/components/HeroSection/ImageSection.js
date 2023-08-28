import React from "react";
import ben from "../images/customers/ben.jpg";
import customer1 from "../images/customers/customer-1.jpg";
import customer2 from "../images/customers/customer-2.jpg";
import customer3 from "../images/customers/customer-3.jpg";
import customer4 from "../images/customers/customer-4.jpg";
import customer5 from "../images/customers/customer-5.jpg";
import customer6 from "../images/customers/customer-6.jpg"; 
import "./ImageSection.css";



function ImageSection() {
    return(
        <div className="delivered-meals">
            <div className="delivered-imgs">
                <img src={customer1} alt="Customer Photo" />
                <img src={customer2} alt="Customer Photo" />
                <img src={customer3} alt="Customer Photo" />
                <img src={customer4} alt="Customer Photo" />
                <img src={customer5} alt="Customer Photo" />
                <img src={customer6} alt="Customer Photo" />
            </div>
            <p className="delivered-text"><span>250,000+</span> meals delivered last year!</p>

        </div>
    )

}

export default ImageSection;