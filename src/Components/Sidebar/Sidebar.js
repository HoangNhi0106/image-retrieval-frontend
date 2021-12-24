import React, { useState } from "react";
import './Sidebar.css'

const Sidebar = () => {
    const [type, setType] = useState(1);
    const [query, setQuery] = useState(null)

    const handleChangeType = (t) => {
        setType(t)
    }

    return (
        <div className="sidebar">
            <div className="filter-box">
                <div className="filter-box-header">
                    <div className={type == 1 ? "filter-type-chosen" : "filter-type"} onClick={() => handleChangeType(1)}>
                        <img src={type == 1 ? "text-blue.png" : "text-black.png"} width={30} height={30}/>
                        <div className={type == 1 ? "filter-type-blue" : "filter-type-black"}>TEXT</div>
                    </div>

                    <div className={type == 2 ? "filter-type-chosen" : "filter-type"} onClick={() => handleChangeType(2)}>
                        <img src={type == 2 ? "map-blue.png" : "map-black.png"} width={30} height={30}/>
                        <div className={type == 2 ? "filter-type-blue" : "filter-type-black"}>LOCATIONS</div>
                    </div>

                    <div className={type == 3 ? "filter-type-chosen" : "filter-type"} onClick={() => handleChangeType(3)}>
                        <img src={type == 3 ? "time-blue.png" : "time-black.png"} width={30} height={30}/>
                        <div className={type == 3 ? "filter-type-blue" : "filter-type-black"}>TIME</div>
                    </div>
                </div>
                <div className="filter-box-body">
                    <div className={type == 1 ? "show" : "close"}>
                        <div className="input-item">
                            <label className="sidebar-label" htmlFor="query-sentences">Query sentence</label>
                            <input type="text" value={query} className="text-input" id="query-sentences" onChange={(e) => setQuery(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;