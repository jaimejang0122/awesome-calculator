# Awesome Calculator

A simple calculator library for basic arithmetic in JavaScript.

## Features

- Basic addition, subtraction, multiplication, and division
- Throws an error when dividing by zero

## Installation

```bash
npm install
```

## Usage

```js
const Calculator = require('./index');

const calculator = new Calculator();
console.log(calculator.add(2, 3)); // 5
console.log(calculator.divide(10, 2)); // 5
```

## Testing

```bash
npm test
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development and contribution guidelines.

## Code of Conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.