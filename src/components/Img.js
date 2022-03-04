import React from "react";


function Img(props){
    return (
    <div className={props.showImg? "container-img" : "hide"}>
        <img src="./assets/checklist.png" alt="checklist-img"></img>
    </div>
    )
}

export default Img