import React from 'react'
import './Footer.css';

import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

import { Grid, Slider } from '@material-ui/core';

import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__album__logo" src="" alt="" />
                <div className="footer__songInfo">
                    <h4>Song</h4>
                    <p>Akon</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>                
                <SkipPreviousIcon className="footer__icon"/>                
                <PlayCircleFilledWhiteOutlinedIcon fontSize="large" className="footer__icon"/>                
                <SkipNextIcon className="footer__icon"/>                
                <RepeatIcon className="footer__green"/>                
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
