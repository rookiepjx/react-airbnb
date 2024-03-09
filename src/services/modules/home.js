import request from "../request";

export function getHomeHighScoreData() {
  return request.get({
    url: "/home/highscore",
  });
}

export function getHomeGoodPriceData() {
  return request.get({
    url: "/home/goodprice",
  });
}
