import { loadHeaderAndFooter } from './utilities.js';

loadHeaderAndFooter();

const successMessage = `
    <img src="/assets/success.jpg" alt="Successful payment icon" />
    <h1>Thank you for your purchase!</h1>
    <p>Here's more info about shipping and receiving products</p>
    <a href="/">Continue Shopping</a>
`;

const failureMessage = `
    <img src="/assets/failure.jpg" alt="Unsuccessful payment icon" />
    <h1>Sorry! Something went wrong</h1>
    <p>Please try again</p>
    <a href="/checkout">Checkout</a>
`;

const confirmationMessageWrapper = document.querySelector('.confirmation');
confirmationMessageWrapper.innerHTML = successMessage;
