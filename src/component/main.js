
import './main.css'
const Main=()=>{
    return(

        <div className="main">
            <h1 className="info-title">OUR STORY</h1>
            <div className="info-flex">
                <div className="info-text">
                    <h2 className="info-par1">Founded in 2011 by John Mathew Smith, <span
                        className="blue-text">Konstruct </span>has become the number one construction management firm
                    </h2>
                    <p className="info-par2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                        aliquam erat.</p>
                </div>

                <ul className="info-img">
                    <li className="info-list img1">
                        <a href="#" className="info-link ">

                                <span className="info-item">WE<br></br>PLAN</span>
                        </a></li>
                    <li className="info-list img2">
                        <a href="#" className="info-link ">

                                <span className="info-item">WE<br></br>MANAGE</span>
                        </a></li>
                    <li className="info-list img3">
                        <a href="#" className="info-link img3">

                                <span className="info-item">WE<br></br>BUILD</span>
                        </a></li>
                </ul>
            </div>
        </div>

    )
}
export default Main