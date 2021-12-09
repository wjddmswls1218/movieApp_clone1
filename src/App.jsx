import React from "react";
import MovieBox from "./components/MovieBox";

const movies = [
  {
    title: "스파이더맨",
    score: 9.3,
    poster:
      "https://file.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1079080_16371247144853257.jpg",
  },
  {
    title: "스파이더맨",
    score: 9.3,
    poster:
      "https://file.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1079080_16371247144853257.jpg",
  },
  {
    title: "스파이더맨",
    score: 9.3,
    poster:
      "https://file.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1079080_16371247144853257.jpg",
  },
  {
    title: "스파이더맨",
    score: 9.3,
    poster:
      "https://file.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1079080_16371247144853257.jpg",
  },
  {
    title: "스파이더맨",
    score: 9.3,
    poster:
      "https://file.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1079080_16371247144853257.jpg",
  },
];

class App extends React.Component {
  render() {
    return (
      <main className="main">
        <section className="content">
          {movies.map((movie) => {
            return <MovieBox movie={movie} />;
          })}
        </section>
      </main>
    );
  }
}

export default App;
