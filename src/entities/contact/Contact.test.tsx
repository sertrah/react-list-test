import React, { FC } from "react";
import ContactForm from "./ContactForm";
import { render, screen } from "@testing-library/react";

describe("Contact tests", () => {
  beforeEach(() => {
    const handleSubmit = () => {};
    render(<ContactForm handleSubmitForm={handleSubmit} />);
  });

  it("Expect form button is disabled", function () {
    const button = screen.getByRole("button", { name: /Submit/i });
    expect(button).toBeDisabled();
  });
});
