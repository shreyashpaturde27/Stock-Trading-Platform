import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";
import Hero from "../src/landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero/>);
    
    const heroImage = screen.getByAltText("hero");
    
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });
});