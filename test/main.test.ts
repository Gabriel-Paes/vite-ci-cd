import { describe, it, expect, vi, beforeEach } from "vitest";

describe("Main DOM Initialization", () => {
  // Prepara um DOM básico antes de cada teste
  beforeEach(() => {
    document.body.innerHTML = `<div id="app"></div>`;
    vi.resetModules();
  });

  it("should render the main app container", async () => {
    await import("../src/main.ts"); // Importa o arquivo principal

    const app = document.querySelector<HTMLDivElement>("#app");
    expect(app).not.toBeNull(); // Certifica que o container existe
    expect(app!.innerHTML).toContain("<div>"); // Confirma que contém elementos filhos
  });

  it("should render all logos with correct classes", async () => {
    await import("../src/main.ts");

    const logos = document.querySelectorAll(".logo");
    expect(logos.length).toBe(3); // Deve haver 3 logos
    expect(
      Array.from(logos).some((logo) => logo.classList.contains("ts"))
    ).toBeTruthy(); // Deve ter uma logo TypeScript
    expect(
      Array.from(logos).some((logo) => logo.classList.contains("sass"))
    ).toBeTruthy(); // Deve ter uma logo Sass
  });

  it("should set correct href attributes for links", async () => {
    await import("../src/main.ts");

    const viteLink = document.querySelector<HTMLAnchorElement>(
      'a[href="https://vite.dev"]'
    );
    const tsLink = document.querySelector<HTMLAnchorElement>(
      'a[href="https://www.typescriptlang.org/"]'
    );
    const sassLink = document.querySelector<HTMLAnchorElement>(
      'a[href="https://sass-lang.com/"]'
    );

    expect(viteLink).not.toBeNull(); // Link para Vite deve existir
    expect(tsLink).not.toBeNull(); // Link para TypeScript deve existir
    expect(sassLink).not.toBeNull(); // Link para Sass deve existir
  });

  it("should display the correct title", async () => {
    await import("../src/main.ts");

    const title = document.querySelector("h1");
    expect(title).not.toBeNull(); // O título deve existir
    expect(title!.textContent).toBe("Vite + TypeScript + Sass"); // Deve ter o texto correto
  });

  it("should display a message for documentation links", async () => {
    await import("../src/main.ts");

    const docsMessage = document.querySelector(".read-the-docs");
    expect(docsMessage).not.toBeNull(); // A mensagem de documentação deve existir
    expect(docsMessage!.textContent).toContain(
      "Click on the Vite and TypeScript logos to learn more"
    ); // Texto da mensagem deve estar correto
  });
});
