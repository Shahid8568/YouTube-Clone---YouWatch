import React from 'react'
import SearchBar from './SearchBar'
import logo from '../../public/logo.png'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = ({ mode, toggleMode }) => {

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar-${mode === "white" ? "dark" : "light"}`} style={{ borderBottom: "1px solid white", position: "sticky", top: "0px", zIndex: "1", backgroundColor: mode === 'white' ? 'black' : 'whitesmoke', color: mode === "white" ? "black" : "white" }}>
        <div className="container-fluid">

          <a className="navbar-brand" href="/"><img src={logo} alt="" style={{ width: "42px", paddingRight: "5px", borderRadius: "15px" }} />YouWatch</a>
          <div className={`form-check form-switch text-${mode === 'white' ? 'white' : 'black'} d-flex align-items-center gap-2`}>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><LightModeIcon /></label>
            <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ cursor: 'pointer' }} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><DarkModeIcon /></label>
          </div>
          <SearchBar mode={mode} />
        </div>
      </nav>
    </>
  )
}

export default Navbar
