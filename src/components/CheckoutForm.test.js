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
    // 1. Getters for all inputs & typing in inputs

    const fNameInput = screen.queryByLabelText('First Name:')
    userEvent.type(fNameInput, "Peter")

    const lNameInput = screen.queryByLabelText('Last Name:')
    userEvent.type(lNameInput, "Conley")

    const addressInput = screen.queryByLabelText('Address:')
    userEvent.type(addressInput, "315 S Cayuga Rd")

    const cityInput = screen.queryByLabelText('City:')
    userEvent.type(cityInput, "Buffalo")

    const stateInput = screen.queryByLabelText('State:')
    userEvent.type(stateInput, "NY")

    const zipInput = screen.queryByLabelText('Zip:')
    userEvent.type(zipInput, "14221")

    // 3. Submit with button 

    const button = screen.getByRole("button");
    userEvent.click(button);

    // 4. Getter for success message & input values



    // Assert

    await waitFor(() => {

    const successMessage = screen.queryByText('You have ordered some plants!')
    expect(successMessage).toBeInTheDocument();
    const firstName = screen.getByText('Peter')
    expect(firstName).toBeInTheDocument();
    const lastName = screen.getByText('Conley')
    expect(lastName).toBeInTheDocument();
    const address = screen.getByText('315 S Cayuga Rd')
    expect(address).toBeInTheDocument();
    const city = screen.getByText('Buffalo')
    expect(city).toBeInTheDocument();
    const state = screen.getByText('NY')
    expect(state).toBeInTheDocument();
    const zip = screen.getByText('14221')
    expect(zip).toBeInTheDocument();

    })

});
