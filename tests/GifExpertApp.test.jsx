import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
  test("no debe agregar la categoría si ya existe", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = input.closest("form");

    fireEvent.change(input, { target: { value: "One Punch" } });
    fireEvent.submit(form);

    const items = screen.getAllByText("One Punch");
    expect(items.length).toBe(1);
  });
  
  test("debe agregar una nueva categoría si no existe", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = input.closest("form");

    fireEvent.change(input, { target: { value: "Sakura" } });
    fireEvent.submit(form);

    expect(screen.getByText("Sakura")).toBeTruthy();
  });
});
