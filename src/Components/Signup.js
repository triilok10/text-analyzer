import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [click, setClick] = useState()
    const changeClick = () => {
        setClick(alert("Successfully Signup"))
    }

    return (
        <>
            <div className="bg-sign"><div className="mainText-left-signup"><Link to="/">TextAnalyzer</Link></div>
                <div className="main-signup">
                    <div className="main-signup-input">
                        <div className="main-signup-heading"><h1>Signup for TextAnanlyzer</h1>
                            <p>Create a free account or <span><Link to="/login">log in</Link></span></p>
                        </div>
                        <div className="main-signup-email"><b>Email</b>
                            <input type="text" />
                        </div>
                        <div className="main-signup-email"><b>Username</b>
                            <input type="text" />
                        </div>
                        <div className="main-signup-email"><b>Email</b>
                            <input type="text" />
                        </div>
                        <div className="main-signup-email-set">
                            <p><input type="checkbox" />I don't want to receive more mails here. I'm okay with the protocoals that they require from us. Ally happy with the <span><Link to="">terms</Link></span> and <span><Link to="">conditions</Link></span></p>
                        </div>
                        <div className="main-signup-email-create"><button onClick={changeClick} value={click}>Signup</button></div>

                    </div>
                </div>
            </div>
        </>
    )
}
