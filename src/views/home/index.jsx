import { useEffect, memo } from "react";
// import { getHomeHighScoreData } from "@/services/modules/home";
import request from "@/services";
import HomeBanner from "./home-banner";

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
  return (
    <div>
      <HomeBanner />
    </div>
  );
});

export default Home;
