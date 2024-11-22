import "./styles/main.scss";
import typescriptLogo from "./typescript.svg";
import sassLogo from "./sass.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo ts" alt="TypeScript logo" />
    </a>
    <a href="https://sass-lang.com/" target="_blank">
      <img src="${sassLogo}" class="logo sass" alt="Sass logo" />
    </a>
    <h1>Vite CI/CD</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
