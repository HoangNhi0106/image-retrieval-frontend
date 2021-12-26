import React, { useEffect } from 'react';
import './Pagination.css'

function Pagination(props) {
    var page = props.page;
    var pages = props.pages;

    useEffect(() => {
        page = props.page;
        pages = props.pages;
    }, [props])

    const handleNext = () => {
        if (page == pages[1])
            if (page + 1 <= props.numPages)
                props.changePages([page, page + 1])
        if (page + 1 <= props.numPages)
            props.changePage(page + 1)
    }

    const handlePrevious = () => {
        if (page == pages[0])
            if (page - 1 >= 1)
                props.changePages([page - 1, page])
        if (page - 1 >= 1)
            props.changePage(page - 1)
    }

    const handleStart = () => {
        if (props.numPages > 1)
            props.changePages([1, 2])
        else
            props.changePages([1])
        props.changePage(1)
    }

    const handleEnd = () => {
        if (props.numPages > 1)
            props.changePages([props.numPages - 1, props.numPages])
        else
            props.changePages([1])
        props.changePage(props.numPages)
    }

    return (
        <div className='pagination'>
            <button className='pagination-btn' onClick={handleStart}>{"<<"}</button>
            <button className='pagination-btn' onClick={handlePrevious}>{"<"}</button>
            {pages.map((item) => 
                <button className={item == page ? 'pagination-btn-chosen' : 'pagination-btn'} onClick={() => props.changePage(item)}>{item}</button>
            )}
            <button className='pagination-btn' onClick={handleNext}>{">"}</button>
            <button className='pagination-btn' onClick={handleEnd}>{">>"}</button>
        </div>
    );
}

export default Pagination;
