document.addEventListener('DOMContentLoaded', () => {
  const themeButtonHeader = document.getElementById("theme-button-header");

  const toggleDarkMode = () => {
    console.log("toggleDarkMode called");
    document.body.classList.toggle("dark-mode");
  };

  function toggleModal(person) {
    const modal = document.getElementById("thanks-modal");
    const modalContent = document.getElementById("thanks-modal-content");
    modal.style.display = "flex";
    modalContent.textContent = `Thank you, ${person.name}, for signing the petition!`;

    // Automatically close modal after 5 seconds
    setTimeout(() => {
        modal.style.display = "none";
    }, 5000);
  }

  // Add event listener to the theme button in the header
  if (themeButtonHeader) {
    themeButtonHeader.addEventListener("click", toggleDarkMode);
  }

  const exploreResourcesButton = document.getElementById('explore-resources');
  const joinCommunityButton = document.getElementById('join-community');
  const HomeButton = document.getElementById('home');

  if (HomeButton) {
    HomeButton.addEventListener("click", redirectToIndex);
  }

  if (exploreResourcesButton) {
    exploreResourcesButton.addEventListener("click", redirectToResources);
  }

  if (joinCommunityButton) {
    joinCommunityButton.addEventListener("click", redirectToCommunity);
  }

  // Replace the event listener for 'Sign Now' button
  const signNowButton = document.querySelector('button[type="submit"]');
  if (signNowButton) {
    signNowButton.addEventListener('click', (event) => {
      event.preventDefault();
      validateForm();
    });
  }

  // Trigger fadeInSections on page load
  fadeInSections();
});

function redirectToResources() {
  window.location.href = 'resources.html';
}

function redirectToCommunity() {
  window.location.href = 'community.html';
}

function redirectToIndex() {
  window.location.href = 'index.html';
}

// Add signature function
const addSignature = () => {
  const nameInput = document.getElementById('name');
  const hometownInput = document.getElementById('hometown');
  const name = nameInput.value.trim();
  const hometown = hometownInput.value.trim();

  if (name !== '' && hometown !== '') {
    const signatureParagraph = document.createElement('p');
    signatureParagraph.textContent = `🖊️ ${name} from ${hometown} supports this.`;

    const signaturesSection = document.querySelector('.signatures');
    const existingSignatures = signaturesSection.querySelectorAll('p');
    if (existingSignatures.length > 0) {
      const lastSignature = existingSignatures[existingSignatures.length - 1];
      signaturesSection.insertBefore(signatureParagraph, lastSignature.nextSibling);
    } else {
      signaturesSection.appendChild(signatureParagraph);
    }

    nameInput.value = '';
    hometownInput.value = '';

    // Update the signature count display
    updateSignatureCount();
  } else {
    alert('Please enter both your name and hometown.');
  }
};

// Update signature count function
const updateSignatureCount = () => {
  const signaturesSection = document.querySelector('.signatures');
  const signatureCount = signaturesSection.querySelectorAll('p').length;
  const signatureCountElement = document.getElementById('signature-count');
  signatureCountElement.textContent = `Total Signatures: ${signatureCount}`;
};
// Validate form function
const validateForm = () => {
  let containsErrors = false;
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const hometownInput = document.getElementById('hometown');

  // Remove existing error classes
  nameInput.classList.remove('error');
  emailInput.classList.remove('error');
  hometownInput.classList.remove('error');

  // Check for errors
  if (nameInput.value.trim() === '') {
    nameInput.classList.add('error');
    containsErrors = true;
  }
  if (emailInput.value.trim() === '' || !emailInput.value.includes('@') || !emailInput.value.includes('.')) {
    emailInput.classList.add('error');
    containsErrors = true;
  }
  if (hometownInput.value.trim() === '') {
    hometownInput.classList.add('error');
    containsErrors = true;
  }

  // If there are no errors, add the signature and update count
  if (!containsErrors) {
    addSignature();
    updateSignatureCount();
    nameInput.value = '';
    emailInput.value = '';
    hometownInput.value = '';
  }
};

 // Trigger fadeInSections on page load
  fadeInSections();

  // Add event listener for scroll event to trigger fadeInSections function
  window.addEventListener('scroll', fadeInSections);


// Function to add 'fade-in' class to sections in viewport
function fadeInSections() {
  const sections = document.querySelectorAll('section'); // Select all sections

  sections.forEach(section => {
    if (isInViewport(section)) { // If section is in viewport
      section.classList.add('fade-in'); // Add 'fade-in' class
    }
  });
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
