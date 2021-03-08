import React from "react";
import style from './Loading.module.css';
import loadingGif from '../../assets/images/loading.gif';

const Loading = (props) => {
    return (
        <div className={style.container}>
            <img src={loadingGif} alt='loading'/>
        </div>
    )
}

export default Loading;