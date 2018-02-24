# floating-point-calculator
A JavaScript library for floating-point calculator.

## Installation

```bash
npm install floating-point-calculator --save
```

## Example

```javascript
import FPC from 'floating-point-calculator';

0.1 + 0.2; // 0.30000000000000004
FPC.add(0.1, 0.2); // 0.3

0.3 - 0.2; // 0.09999999999999998
FPC.sub(0.3, 0.2); // 0.1

2.01 * 10; // 20.099999999999998
FPC.mult(2.01, 10); // 20.1
```

## License

MIT
