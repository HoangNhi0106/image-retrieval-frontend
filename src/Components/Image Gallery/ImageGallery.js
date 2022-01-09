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
        var limit = cols * rows;
        var j = (props.page - 1) * limit;
        var arr = []
        for (let i = 0; i < limit; i++) {
            if (j >= props.images.length)
                break;
            arr.push(props.images[j])
            j++;
        }
        setImages(arr)
        props.saveNumPages(Math.ceil(props.images.length / limit))
    }, [props])

    

    return (
        <div className="image-gallery">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0} columns={props.cols}>
                    {images.map((image) => 
                        <Grid item xs={1}>
                            <img src={`https://8f2d-2402-800-6314-bd02-f49c-706d-7377-bc5b.ngrok.io/myapp/server/LSC_Thumbnail/${image}`} width={size} height={size}/>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </div>
    )
}

export default ImageGallery;