

export default class Calc {

  add(...args) {
    return args.reduce((a, b) => a + b, 0);
  }

}
