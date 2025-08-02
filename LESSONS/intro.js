//javascript is a programming language that allows you to implement complex features on web pages. It is an essential part of web development, alongside HTML and CSS.
// It enables interactive web pages and is an integral part of web applications. JavaScript is versatile and can be used for both client-side and server-side development.

// In this lesson, we will cover the basics of JavaScript, including variables, data types, functions, and control structures.
// We will also explore how to manipulate the Document Object Model (DOM) to create dynamic web content.  
// By the end of this lesson, you will have a foundational understanding of JavaScript and be able to write simple scripts to enhance your web pages.
// Let's start with the basics of JavaScript syntax and how to include it in your HTML documents.
// JavaScript can be included in HTML documents in three ways: inline, internal, and external.
// 1. Inline JavaScript: This is done by adding the `onclick`, `onchange`, or other event attributes directly in HTML elements.
// Example: <button onclick="alert('Hello, World!')">Click Me</button>
// 2. Internal JavaScript: This is done by placing JavaScript code within a `<script>` tag in the HTML document's `<head>` or `<body>` section.
// Example: 


// <script>
// alert("Hello, World from internal script!");       
// </script>
// 3. External JavaScript: This is done by linking to an external `.js` file using the `<script>` tag with a `src` attribute.
// Example: <script src="script.js"></script> 
// In the external file (script.js):

document.querySelector('.alertBtn').addEventListener('click', function(e) {
  alert('Hello, World from external script!');
});


