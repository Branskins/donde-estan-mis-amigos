import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "../src";
import "../src/styles.css";
import "./canvas.css";

/**
 * Scratch space for trying out specific components, drafts, and new ideas
 * before they land in gallery/ or src/. Edit this file freely — nothing
 * here needs to stay tidy, stay working, or match anyone else's idea of
 * what belongs here.
 */
function Canvas() {
  return (
    <div className="canvas">
      <Button variant="primary">Hello</Button>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Canvas />
  </StrictMode>,
);
