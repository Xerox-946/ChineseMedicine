// src/common/api/game.ts
import request from "./request";

interface GameHttpParams {
  [key: string]: any;
}

export function gameHttp(url: string, api: string, params: GameHttpParams): Promise<any> {
  const content = JSON.stringify({ Cmd: api, Params: params });
  const _url = `${url}?Content=${encodeURIComponent(content)}`;
  console.log(_url);
  return request({ url: _url, method: "get" });
}