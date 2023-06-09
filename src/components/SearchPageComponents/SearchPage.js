import SearchBox from "./SearchBox";
import SearchItem from "./SearchItem";
import { useState } from "react";
import "./SearchPage.css";

let SearchPage = () => {

    let APIKEY = process.env.REACT_APP_APIKEY

    const [itemSearch, setItemSearch] = useState({ searchString: "" })

    const [searchData, setSearchData] = useState();

    let getSearchItems = async (itemSearch) => {
        try {
            const response = await fetch(
                `https://api.spoonacular.com/food/ingredients/search?query=${itemSearch}`,
                { headers: {
                    "x-api-key": `${APIKEY}`
                }}
            )
            if (!response.ok) {
                throw new Error("Error fetching items");
        };
        let data = await response.json();
        console.log("Data before adding image url", data)
        setSearchData(await data)
        console.log("searchData set to: ", searchData)
    } catch (error) {
        console.error("An error occurred: ", error);
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setItemSearch({searchString: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchData()
        let searchValue = itemSearch.searchString.toLowerCase();
        getSearchItems(searchValue);
        setItemSearch({ searchString: "" })
    }


    return (
        <main>
            <section className="searchBoxWrapper">
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
            </section>
            <section className="searchResults">
                {searchData ? searchData.results.map((itemData, index) => <SearchItem key={index + "i"} data={itemData} />) : "No items found"}
            </section>
        </main>
    )
}

export default SearchPage;

