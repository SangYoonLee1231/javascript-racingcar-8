export class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  tryMoveForward(randomNumber) {
    if (randomNumber >= 4) {
      this.position += 1;
    }
  }

  getStatusLine() {
    return `${this.name} : ${"-".repeat(this.position)}`;
  }
}
