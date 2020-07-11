import { render } from "@testing-library/react";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CasesByCountry } from "../components/CasesByCountry";
import { FormRapidTest } from "../components/FormRapidTest";
import { IndonesiaCases } from "../components/IndonesiaCases";
import { MalaysiaCases } from "../components/MalaysiaCases";
import { SingaporeCases } from "../components/SingaporeCases";

test("Render Home Component", () => {
  render(Home);
});

test("Render Navbar Component", () => {
  render(Navbar);
});

test("Render Footer Component", () => {
  render(Footer);
});

test("Render Cases By Country Component", () => {
  render(CasesByCountry);
});

test("Render Form Rapid Test Component", () => {
  render(FormRapidTest);
});

test("Render Indonesia Cases Component", () => {
  render(IndonesiaCases);
});

test("Render Malaysia Cases Component", () => {
  render(MalaysiaCases);
});

test("Render Singapore Cases Component", () => {
  render(SingaporeCases);
});
