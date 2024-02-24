import { wrapPromise } from "../utils/wrapPromise";

const getPosts = (url) => {
  const response = fetch(url).then((res) => res.json());
  return wrapPromise(response);
};

export { getPosts };
