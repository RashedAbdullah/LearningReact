import { StrictMode, useState } from "react";
import { Footer } from "./template/Footer";
import { Refresh } from "./template/Refresh";
import Mouse from "./Mouse";

function AppWithUI() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <Refresh onClick={() => setCount(count + 1)} />
      <Mouse key={count} />
      <Footer
        title="Rashed Abdullah"
        url="https://github.com/RashedAbdullah"
      />
    </StrictMode>
  );
}
export default AppWithUI;