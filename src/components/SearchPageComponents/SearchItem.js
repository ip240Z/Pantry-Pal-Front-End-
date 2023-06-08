let SearchItem = (props) => {
return (
    <article className="searchedItem">
        <header>
            <span>
                {props.name}
                item name
            </span>
        </header>
        <body>
            <div> Image goes here
                <img src="" alt="" />
            </div>
            <div className="searchItemBtns">
                <button>
                    add to inventory
                </button>
                <button>
                    Add to shopping list
                </button>
            </div>
        </body>
    </article>
    )
}

export default SearchItem;