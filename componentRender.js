class MyComponent extends HTMLElement {
    constructor() {
      super(); // Always call super first in the constructor
    }
  }
  

  const template = document.createElement('template');
template.innerHTML = `
  <style>
    /* Add CSS styles here */
  </style>
  <div>
    <!-- Add HTML content here -->
    <h1>Hello, World!</h1>
  </div>
`;
