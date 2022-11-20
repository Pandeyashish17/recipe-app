import axios from "axios";
import { useEffect, useState } from "react";
import RandomFood from "../components/RandomFood";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        setData(res.data.meals);
      });
  }, []);
  // console.log(data);
  return (
    <>
      <SearchBar />
      {data?.map((item, i) => {
        return <RandomFood data={item} key={i} />;
      })}
    </>
  );
}
