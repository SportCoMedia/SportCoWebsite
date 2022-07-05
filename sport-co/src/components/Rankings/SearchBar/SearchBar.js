const SearchBar = ({ accounts }) => {
    return (
        <div className="twitter_description">
            <input className="search-box" placeholder="WIP" onInput={filterCards}/>
        </div>
    )
}

const filterCards = event => {

};

export default SearchBar;