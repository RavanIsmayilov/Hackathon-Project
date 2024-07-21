import "./bank.css"
import Footer from "../components/shared/footer/footer"
import Header from "../components/shared/header/header"
import MainImage from "../assets/images/[03.01.00] Solutions - Industry - E-commerce 01 protect ecommerce 1.png"

const Bank = () =>{
    

    return(

        <>
            <Header/>
    <div className="content">
        <div class="content_head">
            <div class="text-section">
                <span>Banks & Finance</span>
                <p>
                    Fraud detection in banking and finance is critical for protecting financial institutions and their customers from fraudulent activities. By leveraging advanced technologies such as real-time monitoring, identity verification, AML compliance, and machine learning, banks can detect and prevent fraud effectively.
                </p>
                <button class="cta-button">Get started</button>
            </div>

            <img  src={MainImage} alt="Fraud Detection"/>
        </div>

        <div className="content_main">
            <div className="content_main-text">
                <span>Bank Automates Fraud Investigations</span>
                <p>For years, a prominent global bank depended on a dedicated 24/7 team of fraud investigators to manually review over 12,000 credit and debit card transactions each month. With the implementation of our AI-powered fraud detection software, the number of transactions requiring manual review was cut in half. This software identifies and flags only the highest-risk transactions for further investigation, significantly enhancing efficiency. Here are some of the impressive results delivered by our state-of-the-art fraud detection AI:</p>
            </div>

            <div className="content_main_end">
                <div className="content_main_frame">
                    <div className="content_main_frame-head">
                        <span className="content_main_frame-title">95.5% +</span>
                        <span className="content_main_frame-subtitle">Accurate</span>
                    </div>
                    <span className="content_main_frame-end">Risk-score Predictions</span>
                </div>

                <div className="content_main_frame">
                    <div className="content_main_frame-head">
                        <span className="content_main_frame-title">66% </span>
                        <span className="content_main_frame-subtitle">Reduction</span>
                    </div>
                    <span className="content_main_frame-end">Investigation Hours</span>
                </div>

                <div className="content_main_frame">
                    <div className="content_main_frame-head">
                        <span className="content_main_frame-title">4X</span>
                        <span className="content_main_frame-subtitle">İncrease</span>
                    </div>
                    <span className="content_main_frame-end">Amount of Fraud Detected</span>
                </div>

                <div className="content_main_frame">
                    <div className="content_main_frame-head">
                        <span className="content_main_frame-title">5X</span>
                        <span className="content_main_frame-subtitle">İncrease</span>
                    </div>
                    <span className="content_main_frame-end">Reduced Fraud Losses </span>
                </div>
            </div>
        </div>
    </div>



            <Footer/>
        </>
    )
}

export default Bank