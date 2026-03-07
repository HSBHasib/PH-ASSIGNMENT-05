# PH-ASSIGNMENT-05

## 1. What is the difference between var, let, and const?
```js
  ↪ var, let, and const are used to declare variables in JavaScript.
  The main difference is their scope and reassignment behavior.

• var is function-scoped and can be redeclared and updated.
• let is block-scoped and can be updated but not redeclared in the same scope.
• const is also block-scoped, but it cannot be reassigned after declaration.
```

## 2. What is the spread operator (...)?
```js
  ↪ The spread operator (...) expands elements of an array or properties of an object, and it is also used for copying or merging data.

• We usually use spread operator for-
   copying arrays or objects
   merging arrays or objects
   passing elements individually
```

## 3. What is the difference between map(), filter(), and forEach()?
```js
  ↪ These 3 methods used to iterate over arrays.

  • map() is used to transform each element and it must returns a new array.
  • filter() is used to select elements based on a condition and also returns a new array.
  • forEach() is simply go on each element but does not return anything.
```

## 4. What is an arrow function?
```js
  ↪ An arrow function is a shorter syntax for writing functions introduced in ES6.
    It makes the code cleaner and does not have its own 'this' instead, it inherits this from the lexical scope.

  Example:
  • Regular function -
    function abc() {
      //code
    };

  • Arrow Fuction -
   const add = (a, b) => a + b;
```


