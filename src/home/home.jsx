import "./home.css"
import Header from "../components/shared/header/header"
import HomeImage from "../assets/images/cyber security 1.png"

const Home = () =>{

    return(
        <>
            <Header/>
                <section class="hero">
                    <div class="hero_content">
                        <h1>Protect Your Finances with Confidence</h1>
                        <p>Cutting-edge detection technology for comprehensive security across all sectors</p>
                        <a class="btn" href="#">Get started</a>
                    </div>
                        <img src={HomeImage} alt="HomeImage" />
                </section>
        </>
    )
}

export default Home