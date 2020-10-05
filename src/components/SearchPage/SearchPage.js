import React, { useEffect, useState } from "react";
import database from "../firebase/firebase";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

export default function SearchPage() {
    
  const [search, setSearch] = useState([]);

  useEffect(() => {
    database
      .collection("search")
      .onSnapshot((snapshot) =>
        setSearch(snapshot.docs.map((doc) => doc.data()))
      );
  });

  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 séjours · 7 oct. - 14 oct. · 2 voyageurs</p>
        <h1>Séjours à proximité</h1>
        <Button variant="outlined">Conditions d'annulation flexibles</Button>
        <Button variant="outlined">Type de logement</Button>
        <Button variant="outlined">Prix</Button>
        <Button variant="outlined">Chambres et lits</Button>
        <Button variant="outlined">Plus de filtres</Button>
      </div>
      {search.map((result) => (
        <SearchResult
          key={result.id}
          img={result.img}
          location={result.location}
          description={result.description}
          title={result.title}
          star={result.star}
          price={result.price}
          total={result.total}
        />
      ))}
    </div>
  );
}
