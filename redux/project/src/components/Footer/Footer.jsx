import "./Footer.scss";
import { FaLocationArrow,FaMobileAlt,FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"




const Footer = () => {
    return <footer className="footer">
    <div className="footer-content">
        <div className="col">
            <div className="title">About</div>
            <div className="text">
                hi welcome to our website, we are happy to see ,
                you are ok with everyone,nice to meet you,visit our website.
            </div>
        </div>


        <div className="col">
        <div className="title">Contact</div>

        <div className="c-item">
            <FaLocationArrow/>
            <div className="text">101,kunal complex
             nizampura,vadodara-390002</div>
        </div>

        <div className="c-item">
            <FaMobileAlt/>
            <div className="text">+931 605 1171</div>
        </div>
       

        <div className="c-item">
            <FaEnvelope/>
            <div className="text">abc@gmail.com</div>
        </div>
        </div>

        <div className="col">
        <div className="title">Categories</div>
        <div className="text">Headphones</div>
        <div className="text">Smart Watches</div>
        <div className="text">Blutooth Speakers</div>
        <div className="text">Wireless Earburds</div>
        <div className="text">Home Theatre</div>
        <div className="text">Projectors</div>
       
        
        
        </div>

        <div className="col">
        <div className="title">Pages</div>
        <span className="text">Home</span>
        <span className="text">About</span>
        <span className="text">Privacy Policy</span>
        <span className="text">Return</span>
        <span className="text">Terms & Conditions</span>
        <span className="text">Contact Us</span>
       
        
        </div>
        
    </div>

    <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                Vx STORE 2023 CREATED BY VEER.PREMIUM E-COMERCE SOLUTION.
            </div>
            <img src={Payment}/>
        </div>
    </div>


    </footer>;
};

export default Footer;
