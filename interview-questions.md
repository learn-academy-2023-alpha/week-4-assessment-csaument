# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:

The earliest computers relied entirely upon functional programming. In essence, these Turing machines operated on data by executing sequential lines of code to perform basic operations. Early computers used punch cards to read instructions for calculations, reading one line after another. More advanced computers began to introduce techniques for using conditional statements to determine whether to perform an operation, loops to iterate over commands, and tags to jump between different segments of code. Modern functional code consists largely of functions that are called or invoked within an application. These functions receive arguments, process through a statement, and can return data. Functions provide reuseable and repeatable behavior.

Much like functional programming, object-oriented programming (OOP) seeks to provide reusable and repeatable behavior. Abstraction takes similar types of data and functions and combines them into classes. Classes define the types of data that they contain and provide access to their data through methods. During execution, objects are initialized as an instance of a class. OOP seeks to provide data security through an idea known as encapsulation. Each object protects its data (or attributes) from direct access, instead providing methods to define specific ways for creating, retrieving, updating, or deleting data. Many languages also implement public and private attributes and methods to further protect data. 

Object-oriented programming (OOP) and functional programming are often viewed as opposing approaches to coding. Opponents of OOP often point to the challenges associated with effectively defining useful and meaningful classes and with teaching OOP. In practice, meaningful applications frequently integrate both approaches at varying points. While objects can provide useful ways to visualize and solve problems, they complicate others. It's important to consider both approaches and make meaningful decisions in when to create a function vs when to create a class and implement objects.

Researched answer: I started going down a rabbit-hole looking into the relative utility of both paradigms within parallel and distributed computing problems. One table comparing the relative strengths and weakness of these options indicated that OOP does not support parallel programming. This seemed like an interesting and strong assertion. Looking deeper, I think that there is a more nuanced explanation that OOP requires some deliberate organization of a system, allowing subcomponents and their objects to function independently of other subcomponents, whereby both subcomponents can complete their calculations independently. Functional programming seems to be much more commonly used in academic environments, particularly by scientists. This is likely a confluence of perpetual education, system efficiency, and a preference for highly-logical (and sometimes linear) styles of thought.

1. What is the difference between a Float and an Integer in Ruby?

Your answer: Floats are floating point numbers. This means that they allow the decimal to move within their value, providing a wide range of useful values with a limited number of significant figures. Integers are whole numbers. Ruby implementation of these classes is signed, meaning that a bit is used to indicate whether the value is positive or negative. Ruby further provides methods for these classes both directly and through duck typing.

Researched answer: It took some research to find the exact ranges for Ruby's implementation of these classes. Specifically for numbers, which represent integers, two subclasses are relevant. fixnum represents normal integers used by machine logic. bignum represents integers beyond this normal range. I suspect that under the hood, the code is referencing multiple memory locations to accomplish this. 

1. Ruby has an implicit return. What does that mean?

Your answer: Implicit return means that the final line of code in a statement is used to determine the return from the block. For contrast, explicit return requires a return statement to identify what should exit from that block. In Ruby, the use of implicit return prevents compiler errors from unexpected undefined values being returned from blocks (as JavaScript performs). Float is a separate subclass that inherits/implements the numeric class. The representation of floats within Ruby presents several changes with rounding errors between decimal and binary values. Backwards error analysis can provide better understanding for the number of significant figures maintained in computations involving these floating point numbers. Rounding errors due to floating point value inaccuracy led to the initial basis for the butterfly effect theory.

Researched answer:

Ruby implicit returns can provide some undesired behavior when programmers do not consider the return provided by function or method calls. It can also provide tricky interaction when using console commands within loops and functions. For example, iterating backwards through a loop would provide very different return with a p or puts command within the loop compared to running the p or puts after the function.

```ruby
my_array = [1, 2, 3]
for i in my_array
    p i
end

# 1
# 2
# 3

output = for i in my_array
    i
end

p output

# [1, 2, 3]

```

1. What is a block in Ruby?

Your answer: Ruby blocks group together operations within a unanamous function.

Researched answer: Ruby blocks are anonymous functions, similar to the use of => in JavaScript. For Ruby blocks, they are outlined using the do / end statements or { } and can take one or more arguments inside of | | pipes. As an object-oriented programming language, Ruby allows the use of functions or blocks as arguments to function/method calls. This can provide complex and interesting behavior. When a block is passed to a function as an argument, the yield keyword allows the function to call the block one or more times.

```ruby
def function_name
    puts 'demonstration of a block'
    yield
end

function_name {puts 'the block is doing this'}

# 'demonstration of a block'
# 'the block is doing this'
```

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

A lot of discussion on extracting values from a Ruby hash seem to be centered around SQL Queries in applications built using Ruby on Rails. In this context, the SQL Queries need keys and values separated so that they can be formatted correctly for an INSERT operation within an SQL database. This is accomplished by calling the .extract method on the hash and passing the desired keys or values:

```ruby
# Extract key
my_hash.extract! ('key_name').keys

# Extract value
my_hash.extract! ('key_name').values

```

## Looking Ahead: Terms for Next Week

1. Class Inheritance: Class inheritence provdes the ability for subclasses to inherit data and functions from their superclass or template. In addition to inheriting these data, Ruby allows subclasses to override inherited functions with new statements.

2. RSpec: RSpec provides an environment for conducting test-driven development within a Ruby framework. RSPec includes several libraries, and I expect the rspec-mock (providing mock datasets for robust testing) and rspec-rails (providing an alternative to the vanilla Rails testing environment) will be used in this course.

3. CRUD: Create, read, update, delete. The four basic functions for managing data within a persistent architecture. They provide the building blocks for operations at clients, servers, routers, and other elements of computational systems. In HTTP, GET, PUT, POST, and DELETe provide CRUD functionality. Comparable functions in SQL are INSERT, SELECT, UPDATE, and DELETE.

4. Test-driven development: Test-driven development is a process of developing applications or features by beginning with the development of a test to confirm that behavior matches expectations. This approach can improve the quality of development by enfocing clear expectations for outcomes based upon given inputs. It also provides a safe environment for refactoring to improve the speed and efficiency of the application or feature.

5. HTTP: Hypertext Transfer Protocol (HTTP) provides application-layer instructions for the transmission of data packets within a network.