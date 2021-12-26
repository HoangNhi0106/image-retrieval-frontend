import React, {useEffect, useState, useLayoutEffect} from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import './ImageGallery.css'

const ImageGallery = (props) => {
    const cols = props.cols;
    const rows = props.rows;
    var size = Math.min((props.windowWidth - 600) / cols, (props.windowHeight - 180) / rows)
    const [images, setImages] = useState([])

    useEffect(() => {
        console.log(size)
        var limit = cols * rows;
        var arr = []
        for (let i = 0; i < limit; i++) {
            arr.push("pika.png")
        }
        setImages(arr)
    }, [props])

    

    return (
        <div className="image-gallery">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0} columns={props.cols}>
                    {images.map((image) => 
                        <Grid item xs={1}>
                            <img src={image} width={size} height={size}/>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </div>
    )
}

export default ImageGallery;