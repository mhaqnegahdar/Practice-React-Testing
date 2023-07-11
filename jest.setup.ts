// src/setupTests.js
import { server } from "@/mocks/server";
// on Fetch is undefined error: https://stackoverflow.com/questions/49618484/jest-typeerror-fetch-is-not-a-function
import "whatwg-fetch";
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
