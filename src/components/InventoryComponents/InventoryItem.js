import '../css/InventoryItem.css'


let InventoryItem = (props) => {

    return (
        <article className="box2">
            <header>
                <span className='YellowTag'>
                    {props.name}
                </span>
            </header>
            <body>
                <div>
                    <img className='image2' src="https://picsum.photos/150" alt="" />
                </div>

            </body>
        </article>
    )
}

export default InventoryItem;
