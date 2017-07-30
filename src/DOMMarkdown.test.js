import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import DOMMarkdown from "./DOMMarkdown";

test("Heading", () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown>{`
  # Test  
  `}</DOMMarkdown>
    )
  ).toBe("<div><h1><span>Test</span></h1></div>");
});

test("List", () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown>{`
 - Apple
 - Banana
 - Melon
  `}</DOMMarkdown>
    )
  ).toBe(
    "<div><ul><li><p><span>Apple</span></p></li><li><p><span>Banana</span></p></li><li><p><span>Melon</span></p></li></ul></div>"
  );
});
