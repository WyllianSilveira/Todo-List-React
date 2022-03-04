import React, { useEffect, useState } from "react";
import './Todo.css'
import List from "./components/List"
import Item from './components/Item'
import TodoForm from './components/TodoForm'
import Modal from './components/Modal'
import Img from './components/Img'

const SAVED_ITEMS = "savedItems"

function Todo(){

    const [items, setItems] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [showImg, setShowImg] = useState(true)


    //EXECUTADO UMA UNICA VEZ PARA PEGAR ITEMS SALVOS NO LOCALSTORAGE
    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if(savedItems){
            setItems(savedItems)
        }
    },[])



    //SALVA NO LOCALSTORAGE QUANDO ESTADO DE ITEMS É ALTERADO
    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
        items.forEach(it=>{
            localStorage.setItem("id", JSON.stringify(it.id))
        })

         onHideShowImg();

    },[items])
  
    //ADICIONA VALOR DO INPUT NO TODOFORM AOS ITEMS
    function onAddItem(text){
        let item = new Item(text)
        setItems([...items, item])
        onHideModal()
    }

    //FUNÇÃO PARA DELETAR ITEM 
    function onItemDeleted(item){
        //CRIA NOVO ARRAY SEM O ITEM PASSADO PELO COMPONENTE LIST
        let filteredItems = items.filter(it=> it.id !== item.id) 
        //SETA NOVO ARR ITEMS COM FILTEREDITEMS
        setItems(filteredItems)
    }

    //FUNÇÃO ALTERA ESTADO DA ATIVIDADE PARA DONE OU UNDONE
    //E SETA NOVO ESTADO PARA ITEMS
    function onDone(item){
        let updateItems = items.map(it=>{
            if(it.id === item.id){
                it.done = !it.done

            }
            return it
        })
        setItems(updateItems)
    }

    //FUNÇÃO REMOVE MODAL DA TELA
    function onHideModal(){
        setShowModal(false)
    }

    //ALTERA ESTADO DA IMAGEM NA PAG
    function onHideShowImg(){
        let itemsSaved = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if(itemsSaved.length !== 0){
            setShowImg(false)
        }
        else{
            setShowImg(true)
        }
    }

    
    
    return(
        <div className="container">
            <header className="header">
                <h1>TODO-LIST</h1>
                <button className="add-button" onClick={()=>{setShowModal(true)}}>Add+</button>
            </header>

            <Img showImg={showImg}></Img>

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

            <Modal onHideModal={onHideModal} showModal={showModal}>
                <TodoForm onAddItem={onAddItem}></TodoForm>
            </Modal>
            
        </div>
    )
}

export default Todo