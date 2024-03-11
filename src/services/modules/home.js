import request from "../request";

// 高分房源
export function getHomeHighScoreData() {
  return request.get({
    url: "/home/highscore",
  });
}

// 高性价比房源
export function getHomeGoodPriceData() {
  return request.get({
    url: "/home/goodprice",
  });
}

// 折扣房源
export function getHomeDiscountData() {
  return request.get({
    url: "/home/discount",
  });
}

// 推荐房源
export function getHomeHotRecommendData() {
  return request.get({
    url: "/home/hotrecommenddest",
  });
}
