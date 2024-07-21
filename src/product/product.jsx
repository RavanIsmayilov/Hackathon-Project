import React from "react";
import "./product.css";
import Header from "../components/shared/header/header";
import CyberIcon from "../assets/icons/Frame 10.png";
import UserIcon from "../assets/icons/Frame 11.png";
import FingerIcon from "../assets/icons/Frame 12.png";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <>
            <Header />
                <section className="products">
                    <div className="products_text">
                        <h2>Comprehensive Protection Against Fraudulent Activities</h2>
                        <span>Advanced Fraud Prevention, AML Compliance, and Identity Verification Solutions for Ultimate Security</span>
                    </div>
                    <div className="products_grid">
                        <div className="product_card">
                                <img className="product_icon" src={CyberIcon} alt="Fraud Prevention" />
                                <Link className="product_card-link" to="/qkd"><h3>QKD</h3></Link>
                            <p>Quantum Key Distribution service provides the highest level of protection for your sensitive communications</p>
                        </div>
                        <div className="product_card">
                                <img className="product_icon" src={UserIcon} alt="AML" />
                                <Link className="product_card-link" to=""><h3>AML</h3></Link>
                            <p>Services focused on identifying and preventing money laundering activities, ensuring compliance with financial regulations.</p>
                        </div>
                        <div className="product_card">
                                <img className="product_icon" src={FingerIcon} alt="Identity Verification" />
                                <Link className="product_card-link" to=""><h3>Identity Verification</h3></Link>
                            <p>Ensuring that users are who they claim to be through various verification processes, reducing the risk of identity fraud.</p>
                        </div>
                    </div>
                </section>
        </>
    );
};

export default Product;
