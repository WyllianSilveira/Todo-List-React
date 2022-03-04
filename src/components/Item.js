
class Item {


    static lastid =  JSON.parse(localStorage.getItem("id")) + 1 


    constructor(text){
        this.id = Item.lastid++
        this.text = text
        this.done = false
    }


}


export default Item