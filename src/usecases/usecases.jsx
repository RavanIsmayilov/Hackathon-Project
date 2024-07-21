import React from "react";
import "./usecases.css";
import Header from "../components/shared/header/header";
import ECommerceIcon from "../assets/images/cart 02.png"
import BankIcon from "../assets/images/bank.png"
import HealthIcon from "../assets/images/hospital.png"
import DigitalIcon from "../assets/images/widgets.png"
import CryptIcon from "../assets/images/coin-euro.png"
import TravelIcon from "../assets/images/Rectangle 971.png"
import { Link } from "react-router-dom";

const UseCases = () => {
    return (
        <>
            <Header />

            <section class="fraud-detection">
                <div className="fraud-detection-text">
                    <h1>Real-World Applications of Our Fraud Detection Solutions</h1>
                    <span>Real-World Applications of Our Fraud Detection Solutions</span>
                </div>
                    <div class="applications">
                        <div class="application">
                            <img src={ECommerceIcon} alt="ECommerceIcon" />
                            <div className="application_text">
                                <h2>eCommerce</h2>
                                <p>Safeguarding transactions, protecting customer data, and ensuring regulatory compliance.</p>
                            </div>
                        </div>
                        <div class="application">
                            <img src={BankIcon} alt="BankIcon" />
                                <div className="application_text">
                                    <Link className="application_text-link" to="/bank">Banks and Finance</Link>
                                    <p>Identity verification solutions into banking systems, helping to monitor transactions.</p>
                                </div>
                            </div>
                        <div class="application">
                            <img src={HealthIcon} alt="HealthIcon" />
                            <div className="application_text">
                                <h2>Healthcare</h2>
                                <p>Help healthcare institutions monitor claims and ensure regulatory compliance.</p>
                            </div>
                        </div>
                        <div class="application">
                            <img src={DigitalIcon} alt="DigitalIcon" />
                            <div className="application_text">
                                <h2>Digital goods</h2>
                                <p>Safeguarding transactions, protecting customer data, and ensuring regulatory compliance.</p>
                            </div>
                        </div>
                        <div class="application">
                            <img src={CryptIcon} alt="CryptIcon" />
                            <div className="application_text">
                                <h2>Cryptocurrency</h2>
                                <p>Comprehensive protection for wallets, payment gateways, crypto ATMs etc.</p>
                            </div>
                            </div>
                        <div class="application">
                            <img src={TravelIcon} alt="TravelIcon" />
                            <div className="application_text">
                                <h2>Travel</h2>
                                <p>Safeguarding transactions, protecting customer data, and ensuring regulatory compliance.</p>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    );
};

export default UseCases;
