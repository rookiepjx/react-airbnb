import { useEffect, memo } from "react";
// import { getHomeHighScoreData } from "@/services/modules/home";
import request from "@/services";

const Home = memo(() => {
  useEffect(() => {
    request
      .get({ url: "/home/highscore" })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>Home</div>;
});

export default Home;
