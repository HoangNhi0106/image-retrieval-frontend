import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './ImageGallery.css'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ImageGallery = (props) => {
    return (
        <div className="image-gallery">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={props.cols} rows={props.rows}>
                    <Grid item xs={1}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default ImageGallery;