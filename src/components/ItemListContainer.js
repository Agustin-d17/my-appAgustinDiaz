import { useState } from "react";
import ItemCount from "./ItemCount";

function ItemListContainer() {
    return <>
                <ItemCount stock="5" initial="1" onAdd={(seleccion) => alert(`Agregaste ${seleccion} articulos al carrito`)}/>
           </>
}

export default ItemListContainer;