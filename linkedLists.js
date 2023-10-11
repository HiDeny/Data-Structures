const Node = (value) => {
  return {
    value,
    next: null,
  };
};

const LinkedList = () => {
  let head = null;
  let tail = null;

  return {
    // Adds a new node containing value to the end of the list.
    append(value) {
      if (!head) {
        head = Node(value);
        return;
      }

      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = Node(value);
      tail = currentNode.next;
    },

    // Adds a new node containing value to the start of the list.
    prepend(value) {
      const newNode = Node(value);

      if (!head) {
        head = newNode;
        tail = newNode;
        return;
      }

      newNode.next = head;
      if (!head.next) tail = head;
      head = newNode;
    },

    // Returns the total number of nodes in the list
    get size() {
      if (!head) return 'List is empty';

      let count = 0;
      let currentNode = head.next;

      while (currentNode) {
        currentNode = currentNode.next;
        count += 1;
      }
      return count;
    },

    // Returns the first node in the list.
    get head() {
      return head;
    },

    // Returns the last node in the list.
    get tail() {
      return tail;
    },

    // at(index) returns the node at the given index.
    at(index) {
      if (!head || index < 0) return 'List is empty';

      let currentNode = head;
      for (let i = 0; i < index; i += 1) {
        if (!currentNode.next) return null;
        currentNode = currentNode.next;
      }
      return currentNode;
    },

    // Removes the last element from the list
    pop() {
      if (!head) return 'List is empty';
      if (!head.next) {
        head = null;
        tail = null;
        return;
      }

      let lastNode = null;
      let currentNode = head;

      while (currentNode.next) {
        lastNode = currentNode;
        currentNode = currentNode.next;
      }
      tail = lastNode;
      tail.next = null;
    },

    // Returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
      if (!head) return 'List is empty';

      let currentNode = head;
      while (currentNode) {
        if (currentNode.value === value) return true;
        currentNode = currentNode.next;
      }
      return false;
    },

    // Returns the index of the node containing value, or null if not found.
    find(value) {
      if (!head) return 'List is empty';

      let count = 0;
      let currentNode = head;
      while (currentNode) {
        if (currentNode.value === value) return count;
        count += 1;
        currentNode = currentNode.next;
      }
      return null;
    },

    // Represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null
    get toString() {
      if (!head) return 'List is empty';

      let resultString = `( ${head.value} )`;
      let currentNode = head.next;

      while (currentNode) {
        resultString += ` -> ( ${currentNode.value} )`;
        currentNode = currentNode.next;
      }

      resultString += ` -> null`;
      return resultString;
    },

    //? Extra Credit Tip:
    //? When you insert or remove a node, consider how it will affect the existing nodes.
    //? Some of the nodes will need their nextNode link updated.

    // Inserts a new node with the provided value at the given index.
    insertAt(value, index) {
      if (index < 0) {
        return console.error(`Error: insertAt: 'Positive integer only.'`);
      }

      if (index === 0) return this.prepend(value);
      if (index === this.size + 1) return this.append(value);
      if (index > this.size + 1) {
        return console.error(
          `Error: insertAt: Index too big, max index: ${this.size}`
        );
      }

      const newNode = Node(value);
      let previousNode = this.at(index - 1);
      let currentNode = this.at(index);

      newNode.next = currentNode;
      previousNode.next = newNode;
    },

    // That removes the node at the given index.
    removeAt(index) {
      if (index < 0) {
        return console.error(`Error: removeAt: 'Positive integer only.'`);
      }
      if (!head) return 'List is empty.';
      if (index === this.size) return this.pop();
      if (index > this.size) {
        return console.error(
          `Error: insertAt: Index too big, max index: ${this.size}`
        );
      }

      let previousNode = this.at(index - 1);
      let currentNode = this.at(index);
      let nextNode = this.at(index + 1);

      if (currentNode === head && !head.next) return this.pop();
      previousNode.next = nextNode;
      console.log(`Removed: ${currentNode.value}`);
      currentNode = null;
      return;
    },
  };
};

const list1 = LinkedList();

list1.append('First Node');
list1.append('Second Node');
list1.append('Third Node');

list1.prepend('Forth Node');
list1.prepend('Fifth Node');

// console.log(list1.at(0));
// console.log(list1.at(1));
// console.log(list1.at(2));
// console.log(list1.at(3));
// console.log(list1.at(4));

// console.log(list1.tail);

// list1.pop();
// console.log(list1.size);
// console.log(list1.tail);

console.log(list1.contains('Node'));
console.log(list1.contains('First Node'));
console.log(list1.contains('Second Node'));
console.log(list1.contains('Third Node'));
console.log(list1.contains('Forth Node'));
console.log(list1.contains('Fifth Node'));
console.log(list1.contains('Node'));

console.log(list1.find('Node'));
console.log(list1.find('First Node'));
console.log(list1.find('Second Node'));
console.log(list1.find('Third Node'));
console.log(list1.find('Forth Node'));
console.log(list1.find('Fifth Node'));
console.log(list1.find('Node'));

// console.log(list1.toString);
// list1.insertAt('Inserted node', 3);
// console.log(list1.toString);

// console.log(list1.tail);
// console.log(list1.toString);
// list1.removeAt(5);
// console.log(list1.toString);
// console.log(list1.tail);
