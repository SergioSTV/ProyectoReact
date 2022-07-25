function ProductList({greeting, estilo}){
    return(
        <div>
            <h2 className= "text-center pb-2" style={estilo}>{greeting}</h2>
            <ul>
                <li> Nacionales </li>
                <li> Importados</li>
                
            </ul>
        </div>
        )
}
export default ProductList