# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

## Create a function to determine whether a number is even or odd
# Input: a number (float or integer)
# Output: a string concatenating input with a statement of even/oddness
# Function returns a catchall phrase if the input was not an integer

def odd_ball(num)
      if num % 2 == 0
            "#{num} is even"
      elsif num % 2 == 1
            "#{num} is odd"
      else
            "#{num} is not an integer"
      end
end

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

p odd_ball num1
p odd_ball num2
p odd_ball num3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

## Create a method no_vowels that removes vowels from strings
# Input: a string
# Output: a string with no vowels (a, e, i, o, u)
# Uses the .delete method for strings to remove characters passed in the argument
# Uses an extended list of capital and lowercase vowels to maintain the case of input string
# Does not include functionality for diacritcial marks combined with vowels (eg é)

def no_vowels(string)
      string.delete 'aeiouAEIOU'
end

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd' < y should be a vowel... I'll refactor my code...

p no_vowels beatles_album1
p no_vowels beatles_album2
p no_vowels beatles_album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# Create a function that determines whether a string is a palindrome
# Input: a string
# Output: a string concatenating the input with a sentence describing whether it is a palindrom
# Trim the input using .delete method to remove any spaces and use .downcase to allow more interesting palindromes
# Create a conditional to compare this string to its reverse
# Due to the use of downcase, arrays or hashes would break the function with an undefined method error

def palindromer(string)
      clean_string = string.delete(' ').downcase
      if clean_string == clean_string.reverse
            "#{string} is a palindrome"
      elsif clean_string != clean_string.reverse
            "#{string} is not a palindrome"
      else
            'Something went wrong'
      end
end

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

p palindromer palindrome_tester1
p palindromer palindrome_tester2
p palindromer palindrome_tester3

super_test = 'Taco cat'
sentence_test = 'Are we not pure? “No, sir!” Panama\'s moody Noriega brags. “It is garbage!” Irony dooms a man—a prisoner up to new era.'

p palindromer super_test
p palindromer sentence_test

p palindromer [1, 2, 3, 4, 3, 2, 1]