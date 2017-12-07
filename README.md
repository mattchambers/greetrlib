# greetrlib
Small JS Library to get my feet wet!

I created this JS library after learning the depts of how JS works. It's a library that gives developers the option to greet their users in either english or spanish with formal and informal greetings.

## LIVE PREVIEW
https://mattchambers.github.io/greetrlib/

## Methods 

### greet()
Takes a booleen `true` or `false` to determine whether or not the greeting should be formal or informal.

### setLang()
Takes a string `'en'` or `'es'` to change the results of the greeting to the passed language.

### HTMLGreeting()

Takes 2 params, a `selector` and boolen `true` or `false`. 
This is the same as greet but can write to html based on the selector given.

## Usage 

```javascript

var Greetr = G$('John','Doe','en');

Greetr.greet().setLang('es').greet(true);

//Hello John Doe
//Saludos John Doe



```

## Requirements 
- jQuery

## License 
This Project is licensed under [The MIT License] (https://opensource.org/licenses/MIT)
