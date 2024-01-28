import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [text, settext] = useState()

    const handletext = (event) => {
        settext(event.target.value)
    }
    const changeUppercase = () => {
        settext(text.toUpperCase())
    }
    const changeLowercase = () => {
        settext(text.toLowerCase())
    }
    const clearText = () => {
        settext("")
    }
    const changeSplitText = () => {
        settext(text.split('').join('+'))

    }
    const [fontweight, setFontWeight] = useState('normal')
    const changeFont = () => {
        setFontWeight((prevFontWeight) =>
            prevFontWeight === 'normal' ? 'bold' : 'normal'
        );


    }
    const changeCube = () => {
        if (isNaN(text)) {
            alert("Please enter only number");
        } else {
            alert(`Cube: ${text ** 3}`);
        }
    }

    const changePopup = () => {
        settext(alert(`Hello  ${text}`))
    }
    return (
        <div>
            <div className="mainText" ><div className="mainText-left">TextAnalyzer</div>
                <div className="mainText-right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <input type="search" placeholder='Search' />
                    <li><Link to="/search">Search</Link></li></div></div>
            <div className="textAnalyize"><h1>Enter your Text to Analyze below</h1></div>
            <div className="textform"><textarea name="textarea1" id="textareaid" cols="150" rows="22" value={text} onChange={handletext} style={{ fontWeight: fontweight }}></textarea></div>
            <div className="footerbtn">
                <button onClick={changeUppercase}>Convert to UpperCase</button>
                <button onClick={changeLowercase}>Convert to LowerCase</button>
                <button onClick={clearText}>Clear Text</button>
                <button onClick={changePopup}>Popup Text</button>
                <button onClick={changeSplitText}>Convert to Splittext</button>
                <button onClick={changeFont}>Convert Font Style</button>
                <button onClick={changeCube}>Convert to Cube</button>
            </div>
            <div className="footer">
                <div className="footer-left"> Admin: Trilok Chand Swami
                </div><div className="footer-right">
                    <Link to="https://www.w3schools.com/"> <img src="./Images/insta.png" alt="insta" /></Link>
                    <Link to="https://www.w3schools.com/"><img src="./Images/facebook.png" alt="fb" /></Link>
                    <Link to="https://www.w3schools.com/"> <img src="./Images/tweet.png" alt="tweet" /></Link>
                </div>
            </div>
        </div >
    )
}
