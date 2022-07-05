const SearchBar = ({ accounts }) => {
    return (
        <div className="twitter_description">
            <input className="search-box" placeholder="Search.." onInput={filterCards}/>
        </div>
    )
}

const filterCards = event => {

};

export default SearchBar;