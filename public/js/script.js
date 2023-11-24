document.addEventListener('DOMContentLoaded', () => {
  // Example: Add toggle functionality to the navbar menu for mobile view
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('is-active');
    });
  }

  // Example: Handling form submissions
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      // Prevent default form submission behavior
      event.preventDefault();

      // Example form processing logic
      const formData = new FormData(form);
      console.log('Form data:', Object.fromEntries(formData.entries()));

      // You can implement AJAX requests or other logic here
    });
  });

  // Additional scripts and functionalities can be added here
});

// Function to show a message (example for using it in login, register, etc.)
function showMessage(message, type = 'info') {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}`;
  messageDiv.textContent = message;

  document.body.appendChild(messageDiv);

  // Remove the message after a few seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

// Example usage: showMessage('Welcome to Build_Link!', 'success');
