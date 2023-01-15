const LinkedList = require("./linked-list");
const testList = new LinkedList();

test("Linked List initializes with a header of null", () => {
  expect(testList.headvalue).toBe(null);
})

test("Linked List initializes with size 0", () => {
  expect(testList.size()).toBe(0);
})

test("Prepend adds one item to Linked List", () => {
  testList.prepend(1);
  expect(testList.size()).toBe(1);
})

test("Headvalue returns correct value", () => {
  expect(testList.headvalue).toBe(1);
})

test("Tailvalue returns value of head if Linked List size is 1", () => {
  expect(testList.tailvalue).toBe(1);
})

test("Prepend adds value to the front of the Linked List", () => {
  testList.prepend(5);
  expect(testList.headvalue).toBe(5);
})

test("Append adds value to the tail of the Linked List", () => {
  testList.append(10);
  expect(testList.tailvalue).toBe(10);
})

test("size function returns correct value after append and prepend", () => {
  expect(testList.size()).toBe(3);
})

test("at function returns the correct index of a passed value", () => {
  expect(testList.at(1)).toBe(1);
  expect(testList.at(2)).toBe(10);
  expect(() => {testList.at(3)}).toThrow(RangeError);
})

test("pop removes the last Node from the Linked List", () => {
  testList.pop()
  expect(testList.headvalue).toBe(5);
  expect(testList.tailvalue).toBe(1);
  expect(testList.size()).toBe(2);
})

test("contains function returns true if value exists in Linked List", () => {
  testList.append(15);
  expect(testList.contains(15)).toBe(true);
  expect(testList.contains(5)).toBe(true);
  expect(testList.contains(1)).toBe(true);
})

test("contains function returns false if value doesn't exist", () => {
  expect(testList.contains(14)).toBe(false);
  expect(testList.contains("Penguin")).toBe(false);
})

test("find function returns index if found", () => {
  expect(testList.find(15)).toBe(2);
  expect(testList.find(5)).toBe(0);
  expect(testList.find(1)).toBe(1);
})

test("find function returns null if not in Linked List", () => {
  expect(testList.find(42)).toBe(null);
  expect(testList.find("Elephant")).toBe(null);
})

test("toString function returns correct string representation", () => {
  const expected = "( 5 ) => ( 1 ) => ( 15 ) => null"
  expect(testList.toString()).toBe(expected);
})

test("Methods work with strings", () => {
  testList.prepend("Polar Bear");
  testList.append("Puffer Fish");
  expect(testList.size()).toBe(5);
  expect(testList.at(0)).toBe("Polar Bear");
  expect(testList.at(4)).toBe("Puffer Fish");
  expect(testList.contains("Polar Bear")).toBe(true);
  expect(testList.find("Puffer Fish")).toBe(4);

  const expected = "( Polar Bear ) => ( 5 ) => ( 1 ) => ( 15 ) => ( Puffer Fish ) => null"
  expect(testList.toString()).toBe(expected);
})

test("insertAt function inserts a new node in the correct position", () => {
  testList.insertAt("Aladdin", 3);
  expect(testList.find("Aladdin")).toBe(3);
  expect(() => {testList.insertAt("Bitcoin", 27)}).toThrow(RangeError);
})
