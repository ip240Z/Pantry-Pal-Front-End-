import SearchBox from "./SearchBox";
import SearchItem from "./SearchItem";

let SearchPage = () => {
    return (
        <main>
            <section>
                <SearchBox />
            </section>
            <section className="searchResults">
                {/* Map our results here */}
                <SearchItem />
            </section>
        </main>
    )
}

export default SearchPage;

