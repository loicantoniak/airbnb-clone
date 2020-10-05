import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from './Search'
import { useHistory } from "react-router-dom";


export default function Banner() {

  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search/>}
        <Button className="banner__searchButton" variant="outlined" onClick={() => setShowSearch(!showSearch)}>
          {!showSearch ?  "Trouver une date" : "Réserver"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Le dépaysement à deux pas de chez vous</h1>
        <h5>
          Voyagez autrement et explorez les trésors cachés de votre région.
        </h5>
        <Button onClick={() => history.push('/search')}>Explorer les alentours</Button>
      </div>
    </div>
  );
}
