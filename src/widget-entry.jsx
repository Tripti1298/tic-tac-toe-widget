import React from "react";
import { createRoot } from "react-dom/client";
import TicTacToeWidget from "./TicTacToeWidget";
import "./styles.css";

function injectWidget() {
  const container = document.createElement("div");
  container.id = "tic-tac-toe-widget-container";
  container.style.position = "fixed";
  container.style.bottom = "32px";
  container.style.right = "32px";
  container.style.zIndex = "9999";
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(<TicTacToeWidget />);
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  injectWidget();
} else {
  window.addEventListener("DOMContentLoaded", injectWidget);
}
