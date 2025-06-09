# TypeScript Basics for Python Developers

This guide explains TypeScript syntax using Python concepts you already know. TypeScript is essentially JavaScript with type annotations - think of it like Python with type hints, but more strictly enforced.

## 🔤 Basic Syntax Comparison

### Variables and Types

#### TypeScript:
```typescript
// Variables (like Python variables)
let name: string = "Alice";          // mutable (like regular Python variable)
const age: number = 30;              // immutable (like Python's final or constant)
var oldStyle: boolean = true;        // avoid this (old JavaScript style)

// Type inference (TypeScript figures out the type)
let message = "Hello";               // TypeScript knows this is string
let count = 42;                      // TypeScript knows this is number
```

#### Python equivalent:
```python
# Variables with type hints
name: str = "Alice"                  # mutable
age: int = 30                        # mutable (Python doesn't have real constants)
from typing import Final
OLD_STYLE: Final[bool] = True        # closest to const

# Type inference (mypy figures out the type)
message = "Hello"                    # mypy knows this is str
count = 42                           # mypy knows this is int
```

**Key differences:**
- TypeScript: `let` (mutable), `const` (immutable)
- Python: everything mutable unless explicitly marked `Final`
- TypeScript types: `string`, `number`, `boolean`
- Python types: `str`, `int`, `float`, `bool`

### Functions

#### TypeScript:
```typescript
// Function with type annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Arrow function (like Python lambda but more powerful)
const add = (a: number, b: number): number => {
    return a + b;
};

// Short arrow function (like Python lambda)
const multiply = (a: number, b: number): number => a * b;

// Optional parameters (like Python default arguments)
function createUser(name: string, age?: number): string {
    if (age !== undefined) {
        return `${name} is ${age} years old`;
    }
    return `${name}'s age is unknown`;
}
```

#### Python equivalent:
```python
# Function with type hints
def greet(name: str) -> str:
    return f"Hello, {name}!"

# Regular function
def add(a: int, b: int) -> int:
    return a + b

# Lambda function
multiply = lambda a, b: a * b

# Optional parameters (using None or Union)
from typing import Optional

def create_user(name: str, age: Optional[int] = None) -> str:
    if age is not None:
        return f"{name} is {age} years old"
    return f"{name}'s age is unknown"
```

### Arrays and Lists

#### TypeScript:
```typescript
// Arrays (like Python lists)
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["Alice", "Bob"];    // alternative syntax

// Array methods (similar to Python list methods)
numbers.push(5);                    // like list.append()
let first = numbers[0];             // same as Python
let length = numbers.length;        // like len() in Python

// Array iteration
numbers.forEach(num => console.log(num));  // like for num in numbers
let doubled = numbers.map(num => num * 2); // like [num * 2 for num in numbers]
```

#### Python equivalent:
```python
# Lists with type hints
from typing import List

numbers: List[int] = [1, 2, 3, 4]
names: List[str] = ["Alice", "Bob"]

# List methods
numbers.append(5)                   # same as push()
first = numbers[0]                  # same as TypeScript
length = len(numbers)               # different syntax

# List iteration
for num in numbers:                 # like forEach
    print(num)
doubled = [num * 2 for num in numbers]  # like map
```

### Objects and Dictionaries

#### TypeScript:
```typescript
// Object types (like Python TypedDict or dataclasses)
interface Person {
    name: string;
    age: number;
    email?: string;    // optional property
}

// Creating objects
let user: Person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

// Accessing properties
console.log(user.name);             // like user.name in Python
console.log(user["age"]);           // like user["age"] in Python

// Object literal (like Python dict)
let config = {
    host: "localhost",
    port: 3000,
    debug: true
};
```

#### Python equivalent:
```python
# Using dataclasses or TypedDict
from dataclasses import dataclass
from typing import Optional, TypedDict

@dataclass
class Person:
    name: str
    age: int
    email: Optional[str] = None

# Or with TypedDict
class PersonDict(TypedDict, total=False):
    name: str
    age: int
    email: str  # optional because total=False

# Creating objects
user = Person(name="Alice", age=30, email="alice@example.com")
# or
user_dict: PersonDict = {
    "name": "Alice",
    "age": 30,
    "email": "alice@example.com"
}

# Accessing properties
print(user.name)                    # same as TypeScript
print(user_dict["age"])             # same as TypeScript

# Dict literal
config = {
    "host": "localhost",
    "port": 3000,
    "debug": True
}
```

## 🏗️ Classes and Inheritance

#### TypeScript:
```typescript
// Class definition (similar to Python classes)
class Animal {
    private name: string;           // private attribute
    protected species: string;     // protected attribute
    public age: number;            // public attribute

    constructor(name: string, species: string, age: number) {
        this.name = name;
        this.species = species;
        this.age = age;
    }

    // Method
    public speak(): string {
        return `${this.name} makes a sound`;
    }

    // Getter (like Python @property)
    get getName(): string {
        return this.name;
    }
}

// Inheritance
class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, "Canine", age);  // call parent constructor
    }

    // Override method
    public speak(): string {
        return `${this.getName()} barks!`;
    }
}
```

#### Python equivalent:
```python
class Animal:
    def __init__(self, name: str, species: str, age: int):
        self._name = name           # private by convention
        self._species = species     # protected by convention  
        self.age = age              # public

    def speak(self) -> str:
        return f"{self._name} makes a sound"

    @property
    def name(self) -> str:          # getter property
        return self._name

# Inheritance
class Dog(Animal):
    def __init__(self, name: str, age: int):
        super().__init__(name, "Canine", age)  # call parent constructor

    def speak(self) -> str:         # override method
        return f"{self.name} barks!"
```

## 🎯 Important TypeScript Concepts for Python Developers

### 1. String Interpolation
```typescript
// TypeScript template literals (like Python f-strings)
let name = "Alice";
let age = 30;
let message = `Hello, ${name}! You are ${age} years old.`;
```
```python
# Python f-strings
name = "Alice"
age = 30
message = f"Hello, {name}! You are {age} years old."
```

### 2. Destructuring (like Python unpacking)
```typescript
// Array destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
let {name, age} = {name: "Alice", age: 30, city: "NYC"};
```
```python
# Python unpacking
first, second, *rest = [1, 2, 3, 4, 5]

# Dictionary unpacking (not exactly the same)
data = {"name": "Alice", "age": 30, "city": "NYC"}
name, age = data["name"], data["age"]
```

### 3. Promises (like Python async/await)
```typescript
// Promise (like Python coroutine)
async function fetchData(): Promise<string> {
    const response = await fetch('https://api.example.com/data');
    return await response.text();
}

// Using the async function
fetchData().then(data => console.log(data));
```
```python
# Python async/await
import aiohttp
import asyncio

async def fetch_data() -> str:
    async with aiohttp.ClientSession() as session:
        async with session.get('https://api.example.com/data') as response:
            return await response.text()

# Using the async function
asyncio.run(fetch_data())
```

### 4. Modules and Imports
```typescript
// Exporting (like Python module exports)
export function myFunction() { }
export const myVariable = 42;
export default class MyClass { }

// Importing (like Python imports)
import MyClass, { myFunction, myVariable } from './mymodule';
import * as utils from './utils';
```
```python
# Python exports (everything is automatically exportable)
def my_function():
    pass

my_variable = 42

class MyClass:
    pass

# Python imports
from mymodule import MyClass, my_function, my_variable
import utils
```

## 🚀 VS Code Extension Specific Patterns

### Command Registration Pattern
```typescript
// Registering a command (like click command registration)
const disposable = vscode.commands.registerCommand('extension.myCommand', () => {
    vscode.window.showInformationMessage('Hello World!');
});
```
```python
# Python click equivalent
import click

@click.command()
def my_command():
    click.echo('Hello World!')

if __name__ == '__main__':
    my_command()
```

### Event Handling Pattern
```typescript
// Listening to events (like Python event handlers)
vscode.workspace.onDidChangeTextDocument((event) => {
    console.log(`Document ${event.document.fileName} was changed`);
});
```
```python
# Python event handling (conceptual)
def on_document_change(event):
    print(f"Document {event.document.filename} was changed")

# Register the event handler
workspace.on_did_change_text_document(on_document_change)
```

## 🎪 Common Gotchas for Python Developers

1. **Semicolons**: Optional in TypeScript, but good practice
2. **`this` keyword**: Like `self` in Python, but behavior can change
3. **`null` vs `undefined`**: TypeScript has both (Python only has `None`)
4. **Brackets for objects**: `{}` not `{}`  (Python uses `:`)
5. **Array indexing**: Same as Python, but `.length` not `len()`

## 🎓 Quick Reference

| Python | TypeScript | Notes |
|--------|------------|-------|
| `def func():` | `function func() {}` | Function definition |
| `lambda x: x*2` | `(x) => x*2` | Anonymous function |
| `[x*2 for x in list]` | `list.map(x => x*2)` | List comprehension |
| `f"Hello {name}"` | `` `Hello ${name}` `` | String interpolation |
| `len(array)` | `array.length` | Get length |
| `str(value)` | `value.toString()` | Convert to string |
| `isinstance(obj, Class)` | `obj instanceof Class` | Type checking |
| `import module` | `import * as module` | Import everything |

Remember: TypeScript is just JavaScript with types, so if you know the JavaScript equivalent of a Python concept, just add type annotations! 