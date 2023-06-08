import { useState } from "react";


let SearchBox = () => {

    let APIKEY = process.env.REACT_APP_APIKEY

    const [itemSearch, setItemSearch] = useState({ searchString: "" })

    const [searchSuggestions, setSearchSuggestions] = useState({ suggestionString: "" })

    const [searchData, setSearchData] = useState([]);

    let getSearchSuggestions = async (itemSearch) => {
        try {
            const response = await fetch(
                
            )
        }
    }

    let getSearchItems = async (itemSearch) => {
        try {
            const response = await fetch(
                `https://api.spoonacular.com/food/products/?apiKey=${APIKEY}`
            )
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setItemSearch({searchString: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let searchValue = itemSearch.searchString.toLowerCase();

    }

    return (
        <article>
            <header>
                <h3>Search items to add to your inventory</h3>
            </header>
            <form className="searchForm" onSubmit={handleSubmit}>
                <div>
                    <input 
                    type="text"
                    name="itemSearch"
                    placeholder="Item Search"
                    value={itemSearch.searchString}
                    onChange={handleChange}
                    />
                </div>
                <button>Search</button>
            </form>
        </article>
    )
}

export default SearchBox;