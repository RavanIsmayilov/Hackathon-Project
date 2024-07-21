import React from "react";
import "./qkd.css";
import Header from "../components/shared/header/header";
import VerifiedIcon from "../assets/icons/lets-icons_check-fill.png"
import Image1 from "../assets/images/Frame 26image99.png"
import Image2 from "../assets/images/Frame 26image98.png"
import Footer from "../components/shared/footer/footer";

const Qkd = () => {
    return (
        <>
            <Header />

            <div class="container">
                <div className="container_text">
                    <h1>Quantum Key Distribution</h1>
                        <p class="description">
                            QKD service offers unparalleled security for your organization by leveraging the principles of quantum mechanics. With features like unbreakable encryption, real-time key generation, and tamper detection, our QKD solutions ensure that your data remains secure against the most sophisticated threats.
                        </p>
                </div>
                <button class="cta-button">Get started</button>


                <h1 className="container2_text">Our approach to quantum key distribution</h1>

            <div class="container2">

                <div className="container3">
                    <div class="section">
                        <div class="text">
                            <div className="text_title">
                                <span className="text_title-num">01</span>
                                <span className="text_title-head">Unbreakable Encryption</span>
                            </div>
                            <div className="section_text">
                                <div className="section_texts">
                                    <img className="section_text-img" src={VerifiedIcon} alt="VerifiedIcon" /> <span className="section_text-span">Utilizes quantum mechanics to generate and distribute cryptographic keys.</span>
                                </div>

                                <div className="section_texts">
                                    <img className="section_text-img" src={VerifiedIcon} alt="VerifiedIcon" /> <span className="section_text-span">Provides theoretically unbreakable encryption, ensuring data security against any future advancements.</span>
                                </div>

                                <div className="section_texts">
                                    <img className="section_text-img" src={VerifiedIcon} alt="VerifiedIcon" /> <span className="section_text-span">QKD systems like those from ID Quantique use quantum bits (qubits) for key distribution, which are inherently secure due to the principles of quantum entanglement.</span>
                                </div>

                            </div>
                        </div>
                            <img className="section_end" src={Image1} alt="Image1"/>
                    </div>

                    <div class="section">
                        <div class="text">
                            <div className="text_title">
                                <span className="text_title-num">02</span>
                                <span className="text_title-head">Real-Time Key Generation</span>
                            </div>
                            <div className="section_text">
                                <div className="section_texts">
                                    <img className="section_text-img" src={VerifiedIcon} alt="VerifiedIcon" /> <span className="section_text-span">Generates encryption keys in real-time, ensuring that each communication session uses a unique key</span>
                                </div>

                                <div className="section_texts">
                                    <img className="section_text-img" src={VerifiedIcon} alt="VerifiedIcon" /> <span className="section_text-span">Prevents the reuse of keys, a common vulnerability in traditional encryption methods.</span>
                                </div>

                                <div className="section_texts">
                                    <img className="section_text-img" src={VerifiedIcon} alt="VerifiedIcon" /> <span className="section_text-span">Toshiba’s QKD solutions provide real-time key generation and distribution over optical fiber networks, enabling secure communication for financial institutions and government agencies.</span>
                                </div>

                            </div>
                        </div>
                            <img className="section_end" src={Image2} alt="Image2"/>
                    </div>

                </div>
            </div>
        </div>

        <Footer/>



        </>
    );
};

export default Qkd;
