import React from "react";
import requests from "./requests";
import Row from "./Row";
import "./App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargerow
      />
      <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Popular" fetchURL={requests.fetchPopular} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row title="Action movies" fetchURL={requests.fetchActionmovies} />
      <Row title="Horror movies" fetchURL={requests.fetchHorrormovies} />
    </div>
  );
}

export default App;
