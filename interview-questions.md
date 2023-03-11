# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:

The earliest computers relied entirely upon functional programming. In essence, these Turing machines operated on data by executing sequential lines of code to perform basic operations. Early computers used punch cards to read instructions for calculations, reading one line after another. More advanced computers began to introduce techniques for using conditional statements to determine whether to perform an operation, loops to iterate over commands, and tags to jump between different segments of code. Modern functional code consists largely of functions that are called or invoked within an application. These functions receive arguments, process through a statement, and can return data. Functions provide reuseable and repeatable behavior.

Much like functional programming, object-oriented programming (OOP) seeks to provide reusable and repeatable behavior. Abstraction takes similar types of data and functions and combines them into classes. Classes define the types of data that they contain and provide access to their data through methods. During execution, objects are initialized as an instance of a class. OOP seeks to provide data security through an idea known as encapsulation. Each object protects its data (or attributes) from direct access, instead providing methods to define specific ways for creating, retrieving, updating, or deleting data. Many languages also implement public and private attributes and methods to further protect data. 

Object-oriented programming (OOP) and functional programming are often viewed as opposing approaches to coding. Opponents of OOP often point to the challenges associated with effectively defining useful and meaningful classes and with teaching OOP.

In practice, meaningful applications frequently integrate both approaches at varying points. While objects can provide useful ways to visualize and solve problems, they complicate others. It's important to consider both approaches and make meaningful decisions in when to create a function vs when to create a class and implement objects.

Researched answer:

1. What is the difference between a Float and an Integer in Ruby?

Your answer: Floats are floating point numbers. This means that they allow the decimal to move within their value, providing a wide range of useful values with a limited number of significant figures. Integers are whole numbers. Ruby implementation of these classes is signed, meaning that a bit is used to indicate whether the value is positive or negative. Ruby further provides methods for these classes both directly and through duck typing.

Researched answer:

1. Ruby has an implicit return. What does that mean?

Your answer: Implicit return means that the final line of code in a statement is used to determine the return from the block. For contrast, explicit return requires a return statement to identify what should exit from that block. In Ruby, the use of implicit return prevents compiler errors from unexpected undefined values being returned from blocks (as JavaScript performs).

Researched answer:

1. What is a block in Ruby?

Your answer: Ruby blocks group together operations within a unanamous function.

Researched answer:

1. How do you extract a value in a Ruby hash?

Your answer:

In Ruby, hashes are created using key:value pairs such that the key is a symbol and the value can be any data type. The syntax for creating a new hash and accessing a value is listed in the below block.

```ruby
# Create a new hash and assign values
test = Hash.new
test = {key: 1, key1: 2, key2: 3}

# Print the value associated with the first key
p test[:key]
```

Researched answer:

## Looking Ahead: Terms for Next Week

1. Class Inheritance:

2. RSpec:

3. CRUD:

4. Test-driven development:

5. HTTP:
