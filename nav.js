document.addEventListener('DOMContentLoaded', () => {
  const dropdownButtons = document.querySelectorAll('.dropdown-btn');
  let activeDropdown = null;

  dropdownButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const dropdownId = button.getAttribute('data-dropdown');
      const dropdown = document.getElementById(dropdownId);

      // Close active dropdown if it's not the same as the clicked one
      if (activeDropdown && activeDropdown !== dropdown) {
        activeDropdown.classList.remove('active');
      }

      // Toggle the clicked dropdown
      dropdown.classList.toggle('active');
      activeDropdown = dropdown.classList.contains('active') ? dropdown : null;
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-btn')) {
      if (activeDropdown) {
        activeDropdown.classList.remove('active');
        activeDropdown = null;
      }
    }
  });

  // Toggle hamburger menu
  const hamburger = document.getElementById('hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    menu.style.display = isExpanded ? 'none' : 'flex';

    // Close active dropdown when toggling menu
    if (isExpanded && activeDropdown) {
      activeDropdown.classList.remove('active');
      activeDropdown = null;
    }
  });
});



// document.addEventListener('DOMContentLoaded', () => {
//   const dropdownButtons = document.querySelectorAll('.dropdown-btn');
//   let activeDropdown = null;

//   dropdownButtons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//       const dropdownId = button.getAttribute('data-dropdown');
//       const dropdown = document.getElementById(dropdownId);

//       if (activeDropdown && activeDropdown !== dropdown) {
//         activeDropdown.classList.remove('active');
//       }

//       dropdown.classList.toggle('active');
//       activeDropdown = dropdown.classList.contains('active') ? dropdown : null;
//     });
//   });

  
//   document.addEventListener('click', (e) => {
//     if (
//       !e.target.closest('.dropdown') &&
//       !e.target.closest('.dropdown-btn')
//     ) {
//       if (activeDropdown) {
//         activeDropdown.classList.remove('active');
//         activeDropdown = null;
//       }
//     }
//   });

  
//   const hamburger = document.getElementById('hamburger');
//   const menu = document.querySelector('.menu');

//   hamburger.addEventListener('click', () => {
//     const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
//     hamburger.setAttribute('aria-expanded', !isExpanded);
//     menu.style.display = isExpanded ? 'none' : 'flex';
//   });
// });







