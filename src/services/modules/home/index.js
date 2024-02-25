import request from "../../request";

export function getHomeHighScoreData() {
  return request.get({
    url: "/home/highscore",
  });
}
