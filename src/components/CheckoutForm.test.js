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
    // Getters for all inputs & typing in inputs

    const fNameInput = screen.queryByLabelText(/First Name:/i)
    userEvent.type(fNameInput, "Peter")

    const lNameInput = screen.queryByLabelText(/Last Name:/i)
    userEvent.type(lNameInput, "Conley")

    const addressInput = screen.queryByLabelText(/Address:/i)
    userEvent.type(addressInput, "315 S Cayuga Rd")

    const cityInput = screen.queryByLabelText(/City:/i)
    userEvent.type(cityInput, "Buffalo")

    const stateInput = screen.queryByLabelText(/State:/i)
    userEvent.type(stateInput, "NY")

    const zipInput = screen.queryByLabelText(/Zip:/i)
    userEvent.type(zipInput, "14221")

    // Submit with button 

    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert

   

    const successMessage = screen.queryByText('You have ordered some plants!')
    expect(successMessage).toBeInTheDocument();
    const firstName = screen.queryByText('Peter')
    expect(firstName).toBeInTheDocument();
    const lastName = screen.queryByText('Conley')
    expect(lastName).toBeInTheDocument();
    const address = screen.queryByText('315 S Cayuga Rd')
    expect(address).toBeInTheDocument();
    const city = screen.queryByText('Buffalo')
    expect(city).toBeInTheDocument();
    const state = screen.queryByText('NY')
    expect(state).toBeInTheDocument();
    const zip = screen.queryByText('14221')
    expect(zip).toBeInTheDocument();

    

});
