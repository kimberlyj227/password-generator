# password-generator

## About this project

This app was created to allow users to create a secure randomly-generated password. Users will be able to input the length of the password along with choosing what kind of characters they want included in the password. 

After the password is generated, the user will be able to copy the password to their clipboard using the "copy password" button.


## Steps

I first created four arrays for uppercase and lowercase letters, numbers, and special characters. Then I created variables for the user response.

The user first inputs how many characters they need for their password. Before the user confirms the type of characters to use, the length of the password is validated to ensure it is between 8 and 128.

If/Else Conditions:

There are 16 possible combinations of character choices that are split into if/else conditionals. 

All four: this condition will run if the using chooses all four conditions.

3 Conditions true:
-lowercase, uppercase, and numbers
-lowercase, uppercase, and special characters
-lowercase, numbers, and special characters
-uppercase, numbers, and special characters

2 Conditions true:
-lowercase and uppercase
-lowercase and numbers
-lowercase and special characters
-uppercase and numbers
-uppercase and special characters
-numbers and special characters

1 Condition true:
-lowercase
-uppercase
-numbers
-special characters

All conditions false:
Will alert the user to choose at least one parameter.



## Links

[live site] (https://kimberlyj227.github.io/password-generator/)
[github profile] (https://github.com/kimberlyj227/password-generator)

## Demonstration

Video demonstrating how the app works:

![demonstration video] (pass_demo.mp4)

