//2
export class Stack {
  public nodes: (number | undefined)[] = [];

  isEmpty(): boolean {
    return this.nodes.length > 0;
  }

  push(value: number): void {
    this.nodes.push(value);
  }

  pop(): number {
		const nodeToPop = this.nodes[this.nodes.length - 1];
    this.nodes[this.nodes.length - 1] = undefined;
    this.nodes.length -= 1;
		return nodeToPop;
  }

  print(): void {
    for (let i = 0; i < this.nodes.length; i++) {
      console.log(`Elemento ${i + 1}: `, this.nodes[i]);
    }
  }
}
const stack = new Stack()

stack.push(1)
stack.push(10)
stack.push(15)
stack.print()

//3
