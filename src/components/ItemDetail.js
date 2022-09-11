
const ItemDetail = ( {item:{name,price,imagen,description}} ) => {
  return (
    <div className="m-5">
        <li>{name}</li>
        <li>Precio: {price}</li>
        <img src = {imagen} style = { {width:"15rem"} } />
        <li>Descripcion: {description}</li>
    </div>
  )
}
export default ItemDetail

// alt="" }