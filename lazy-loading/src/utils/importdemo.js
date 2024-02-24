import { lazy } from "react";

const importDemo = (file) => {
  return lazy(() => import(`../components/${file}`));
};

export { importDemo };
