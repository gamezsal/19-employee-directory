import React from 'react'
import './style.css'

function Search() {
    return (
        <form>
            <label>
                <input type="text" name="search" />
            </label>
            <input className="submitBtn" type="submit" value="Submit" />
        </form>
    )
}

export default Search