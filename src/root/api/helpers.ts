import apiConfig from "./config";

export const originImage = (imgPath: string) =>
  apiConfig.baseImage + `original${imgPath}`;

export const w500Image = (imgPath: string) =>
  apiConfig.baseImage + `w500${imgPath}`;

export const trailerVideo = (id: string) =>
  `https://www.youtube.com/embed/${id}`;
