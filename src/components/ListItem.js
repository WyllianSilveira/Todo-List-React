import React from "react";
import Card from './Card'



function DoneImg(props){
    //SE ATIVIDADE FEITA CARREGAR IMAGEM CHECKED SENAO UNCHECKED
    if(props.done){
        return ( <img className="btn-img" src="./assets/checked.png" alt="checked"></img> )
    }else{
        return ( <img  className="btn-img" src="./assets/unchecked.png" alt="unchecked"></img> )
    }
}



function ListItem(props){
    return(
       <li>
            <Card className={props.item.done? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={()=>props.onItemDeleted(props.item)}><img className="btn-img" src="./assets/trash-can.png" alt="delet"></img></button>
                </div>
            </Card>
            </li>
    )
}

export default ListItem