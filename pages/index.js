import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PacmanLoader from "react-spinners/PacmanLoader";
export default function Home() {
  const [category, setCategory] = useState(null);
  const [data, setData] = useState(null);
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let letter = letters[Math.floor(Math.random() * letters.length)];
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        setCategory(res.data.categories);
      });
  }, []);
  useEffect(() => {
    if (!letter) return;
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => {
        setData(res.data.meals);
      });
  }, []);

  return (
    <>
      {!category || !data ? (
        <div className="min-h-screen grid place-content-center">
          <PacmanLoader color="#00ACEE" />
        </div>
      ) : (
        <>
          <Navbar />
          <HeroSection categories={category} data={data && data[0]} />
          <section class="py-10 px-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {data?.map((item, i) => {
                return <Card item={item} key={i} />;
              })}
            </div>
          </section>
        </>
      )}
    </>
  );
}
