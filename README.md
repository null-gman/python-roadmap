# hello ,world
it's just an image i saw on the internet , and my frind ask me to make it a website for his use as a todo .

# how it's works ?
using the **localStorage** in the browser .

# how to compile the project ?
1. install  [sass](https://github.com/sass/sass)  and  [browserify](https://github.com/browserify/browserify) .
2. run : 
```
npm start
```
  - that will bundel all the commonjs scripts in **/scripts/** folder into one `/script.js` in the root , using [browserify](https://github.com/browserify/browserify) CLI tools.
  - and will compile all sass file in **/sass/** codes into one `/main.css` file , using [sass](https://github.com/sass/sass) CLI tools.
# want edit the content ?
doit! , go to **/scripts/main.js** and add or remove from the arrays :
```
const content = {}
content.basics = ["Variables","Conditions","Chained Conditionals","Operateros","Control Flow(if/ele)","Loops And lterables","Basic Data Structures","Functions","Mutable VS immutable","Common Methods","File I/O"]
content.intermidiate = ["OOPs","Data Structures","OOPs","Data structures","Comprehensions","Lambdafun Functions","Map , Filter","Collections","*Args & **Kwargs","Inheritance","Dunder Methods","PIP","Environments","Modules","Async 10"]
content.expert = ["Decorators","Genrators","Context Managers","Metaclasses","Parallelism","Testing","packages","Cython"]

```
> if you will do more than **push** or **pop** form the arrays do it , but if the program crash fix it *mr. software engineer* by your own :) .
