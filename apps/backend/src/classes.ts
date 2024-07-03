/* eslint-disable @typescript-eslint/no-unused-vars */
'operator-overloading enabled';

class Add {
  [Symbol.for('+')](other: unknown) {
    throw `Implement [Symbol.for('+')]`;
  }
}

class Sub {
  [Symbol.for('-')](other: unknown) {
    throw `Implement [Symbol.for('-')]`;
  }
}

class Mul {
  [Symbol.for('*')](other: unknown) {
    throw `Implement [Symbol.for('*')]`;
  }
}

class Div {
  [Symbol.for('/')](other: unknown) {
    throw `Implement [Symbol.for('/')]`;
  }
}

class Pow {
  [Symbol.for('**')](other: unknown) {
    throw `Implement [Symbol.for('**')]`;
  }
}
