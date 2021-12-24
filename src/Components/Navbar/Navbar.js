import React, { useState } from "react";
import './Navbar.css'

const Navbar = () => {
    const [cols, setCols] = useState(1)
    const [rows, setRows] = useState(1)
    const [session, setSession] = useState(null)

    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src="menu-btn.png" width={32} height={32}/>
                <div className="app-name">Lifelog Retrieval</div>
            </div>
            <div className="navbar-right">
                <div className="slider-item">
                    <label className="navbar-label" htmlFor="num-cols">Num cols</label>
                    <input type="range" min="1" max="10" value={cols} className="slider" id="num-cols" onChange={(e) => setCols(e.target.value)}/>
                </div>

                <div className="slider-item">
                    <label className="navbar-label" htmlFor="num-rows">Num rows</label>
                    <input type="range" min="1" max="10" value={rows} className="slider" id="num-rows" onChange={(e) => setRows(e.target.value)}/>
                </div>

                <div className="text-item">
                    <label className="navbar-label" htmlFor="session-id">Session ID</label>
                    <input type="text" value={session} className="textbox" id="session-id" onChange={(e) => setSession(e.target.value)}/>
                </div>

                <button className="show-result-btn">SHOW RESULTS</button>
            </div>
        </div>
    )
}

export default Navbar;