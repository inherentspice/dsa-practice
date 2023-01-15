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

// contains
// find
// toString
// different data types
// toString
