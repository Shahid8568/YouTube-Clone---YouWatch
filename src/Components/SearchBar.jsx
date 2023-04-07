import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({mode}) => {
    const navi = useNavigate();

    const onSubmit = (e) =>{
        e.preventDefault();
        navi(`/search/${search}`)

    }
    
    const [search, setSearch] = useState('')
  return (
    <div>
         <form className="d-flex" role="search" onSubmit={onSubmit}>
        <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"  style={{padding: "5px 20px",borderRadius: "18px",outline: "none",border: "none",width:"100%"}} />
      <SearchIcon className="iconSearch" style={{position: "absolute",right: "35px",top: "20px",background:"white",color: "darkblue"}}/>
      </form>
    </div>
  )
}

export default SearchBar