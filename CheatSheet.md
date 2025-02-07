To ensure our software works we test our application. There are many ways to test our app and its features. Here are some of them, their advantages and drawbacks.

## Manual Testing

We need to test the by using the application, going through all the features and see if it works as expected.

**Drawbacks**:

- Time Consuming
- High risk of human error
- You might not be able to test all the features you should

## Automated Testing

Programs that automate the testing process, you write code to test your code.

Pros:

- Not time consuming
- Reliable, consistence and not error prone
- You can easily identify broken features and fix them

Here are some libraries you can use for testing React apps:

## Jest vs RTL

- **Jest:**  a JS framework and a test runner, it finds the test, runs it, determines whether it passes or fails and than returns a human readable report.
- RTL: a testing utility that provides Virtual Dom for testing react components.

## Types of Automated Test

### Unit Test

Tests the individual building blocks of the application. (components, functions, classes, ..)

- Each unit is tested independently
- Dependencies are mocked
- Runs very fast and makes it easy to pinpoint failures
- They are easy to write and maintain

### Integration Test

Tests a combination of units 

- Takes longer than Unit Test

### E2E Test

Tests the entire application flow, needs real ui and real API

- Takes longer than other ways

![Screenshot 2025-02-05 at 13.09.50.png](attachment:4d486a4f-b2fe-4759-a763-fbe3ab16b19f:Screenshot_2025-02-05_at_13.09.50.png)

### Anatomy of a tes

test(’Name’, callback, Timeout ) 

*Default Timeout is 5s*

## Test Driven Development (TDD)

- Write the test first
- Write the code to make the test pass

## Watch Mode

press w

## Code Coverage

a metric that can help you understand how much of your code is covered

- Statement
- Branches
- Function
- Line

```jsx
node test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectCoverageFrom='!/src/file that doesnt need to be covered'

```

- minimum threshold inforcement:

```jsx
"jest": {
		"coverageThreshold": {
				"global":{
				"branches":
				80,
				"functions": 80,
				"lines": 80,
				"statements":-10
				
				}
			}
	}
```

## Assertions

- [Jest-Dom](https://github.com/testing-library/jest-dom)
- [Jest](https://jestjs.io/docs/expect)

## What to Test and What not to Test?

### What to test?

- Test component renders
- Test component renders with props
- Test component renders in different states
- Test component reacts to events

### What NOT to test?

- Implementation details
- Third party code
- Code that is not important from a user point of view

## Debug

```jsx
screen.debug()

logRoles()
```