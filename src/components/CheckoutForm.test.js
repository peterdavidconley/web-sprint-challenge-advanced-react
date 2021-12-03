import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';


// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {

    render(<CheckoutForm />)

});

test("shows success message on submit with form details", () => {

    // Arrange
    render(<CheckoutForm />)

    // Act
    // 1. Getters for all inputs

    const fNameInput = screen.queryByLabelText('First Name:')
    const lNameInput = screen.queryByLabelText('Last Name:')
    const addressInput = screen.queryByLabelText('Address:')
    const cityInput = screen.queryByLabelText('City:')
    const stateInput = screen.queryByLabelText('State:')
    const zipInput = screen.queryByLabelText('Zip:')

    // 2. Type into all inputs

    // 3. Submit with button 

    const button = screen.getByRole("button");
    userEvent.click(button);

    // 4. Getter for success message

    const successMessage = screen.getByText('')

    // Assert

    expect(successMessage).toBeInTheDocument();

});
