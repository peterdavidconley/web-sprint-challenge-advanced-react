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

    userEvent.type(fNameInput, "Peter")
    userEvent.type(lNameInput, "Conley")
    userEvent.type(addressInput, "315 S Cayuga Rd")
    userEvent.type(cityInput, "Buffalo")
    userEvent.type(stateInput, "NY")
    userEvent.type(zipInput, "14221")

    // 3. Submit with button 

    const button = screen.getByRole("button");
    userEvent.click(button);

    // 4. Getter for success message & input values

    const successMessage = screen.queryByText('You have ordered some plants!')
    const firstName = screen.getByText('Peter')
    const lastName = screen.getByText('Conley')
    const address = screen.getByText('315 S Cayuga Rd')
    const city = screen.getByText('Buffalo')
    const state = screen.getByText('NY')
    const zip = screen.getByText('14221')


    // Assert

    expect(successMessage).toBeInTheDocument();
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zip).toBeInTheDocument();


});
