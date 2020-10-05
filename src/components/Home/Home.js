import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";
import database from "../firebase/firebase";

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    database
      .collection("location")
      .onSnapshot((snapshot) =>
        setLocations(snapshot.docs.map((doc) => doc.data()))
      );
  });

  useEffect(() => {
    database
      .collection("experience")
      .onSnapshot((snapshot) =>
        setExperiences(snapshot.docs.map((doc) => doc.data()))
      );
  });

  return (
    <div>
      <Banner />

      <div className="home__section">
        {experiences.map((experience) => (
          <Card
            key={experience.id}
            src={experience.src}
            title={experience.title}
            description={experience.description}
          />
        ))}
      </div>

      <div className="home__section">
        {locations.map((location) => (
          <Card
            key={location.id}
            src={location.src}
            title={location.title}
            description={location.description}
            price={location.price}
          />
        ))}
      </div>
    </div>
  );
}
