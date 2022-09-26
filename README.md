<h1 align="center"> JavaScriptDOM </h1>

<p align="center">
<img src="https://miro.medium.com/max/461/1*XKhoU3EZcH9CrUfD5iztCw.png">
</p>

DOM stands for Document Object Model.  
DOM manipulation is when you use JavaScript to add, remove, and modify elements of a website. It is very common in web development.

## Selecting Elements in the DOM

- `getElementById()`
- `getElementByClassName()`
- `getElementByTagName()`
- `querySelector()`
- `querySelectorAll()`

Examples

```js
const title = document.querySelector("#nav");
const subTitle = document.querySelector(".navSubtitle");
```

## Styling an Element

- We can add css styling using `.style`
- You have to use camelCase to access css properties

Example

```js
const title = document.querySelector("#nav");

title.style.fontSize = "blue";
title.style.color = "blue";
```

## Creating Elements

Also we can create elements using `.createElement`

Example:

```js
const ul = document.querySelector("ul");
const li = document.createElement("li");
```

## Adding Elements

```js
ul.append(li);
```

## Modify Text

- innerText
- textContent
- innerHTML

Example

```js
li.innerText = "Star Wars";
```

## Modifying Elements Attributes & Classes

## Parent Node Traversal

## Child Node Traversal

- childNodes
- firstChild
- lastChild

Example:

```js
let ul = document.querySelector("ul");

ul.childNodes[1].style.backgroundColor = "blue";
```

## Sibling Node Traversal

## Events

Syntax:

```js
element.addEventListner("click", function)
```

Example:

```js
const button = document.querySelector(".btn");

const alertBtn = () => {
  alert(`I dont like JavaScript, its so hard!`);
};

button.addEventListener("click", alerBtn);
```

### Mouseover Event

```js
const nav = document.querySelector("#nav");

const newBackgroundColorNav = () => {
  nav.style.backgroundColor = "Blue";
};

nav.addEventListner("mouseover", newBackgroundColorNav);
```
