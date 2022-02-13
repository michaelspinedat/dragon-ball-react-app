import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { Characters } from '../models/Characters';
import Character from '../components/Character';

const SearchScreen = ({ history }) => {
    const location = useLocation();
    const { query = "" } = queryString.parse(location.search);
    console.log(query);
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState(query);

    const handleChange = e => {
        const { value } = e.target;
        setSearch(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`?query=${search}`);
    }

    const getCharacters = () => {
        if (search.trim() !== "") {
            const value = search.toLowerCase();
            const characters =
                Characters.filter(
                    char => char.name.toLowerCase().includes(value));
            setCharacters(characters);
        } else {
            setCharacters([]);
        }
    }

    useEffect(() => {
        getCharacters();
    }, [query])


    return (
        <div className="container">
            <h1>Search Screen</h1>
            <div className="row">
                <div className="col-6">
                    <h2>Search</h2>
                    <form>
                        <div className="my-2">
                            <label htmlFor="search" className="form-label">
                                Character
                            </label>
                            <input
                                type="search"
                                className="form-control"
                                id="search"
                                placeholder="Character name"
                                value={search}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary"
                            onClick={handleSubmit}>Buscar</button>
                    </form>
                </div>
                <div className="col-6">
                    <h2>Results: {characters.length} </h2>
                    {
                        characters.length === 0
                            ? (<div className="alert alert-warning text-center">No results found</div>)
                            : characters.map(char => (<Character key={char.id} {...char} />))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen