function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// const counter = document.querySelector(".counter-number");
// async function updateCounter() {
//   let response = await fetch("https://rnarsvlk4iq4vupnocd6eviqvm0ocqyl.lambda-url.us-east-1.on.aws/");
//   let data = await response.json();
//   counter.innerHTML = ` Views: ${data}`;
// }

// updateCounter();
const viewCountElement = document.querySelector(".counter-number");
const viewCountElementMobile = document.querySelector(".counter-number-mobile-view");
const typingSpeed = 50; // Adjust typing speed (milliseconds per character)
const targetText = `Viewed by Tech Enthusiasts!`; // Placeholder text for typing effect

async function updateCounter() {
  try {
    let response = await fetch("https://rnarsvlk4iq4vupnocd6eviqvm0ocqyl.lambda-url.us-east-1.on.aws/");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();

    if (typeof data === 'number') {
      const targetCount = data;
      let currentCount = 0;

      // Clear previous content
      viewCountElement.innerText = '';
      viewCountElementMobile.innerText = 'Views: ';

      // Simulate typing effect for the entire sentence
      const interval = setInterval(() => {
        currentCount++;
        const currentText = `${targetText.slice(0, 9)} ${currentCount.toLocaleString()} ${targetText.slice(9)}`;
        viewCountElement.innerText = currentText.slice(0, currentCount) + '|'; // Show typing cursor
        viewCountElementMobile.innerText = `Views: ${currentCount.toLocaleString()}`;

        if (currentCount >= targetCount) {
          clearInterval(interval);
          viewCountElement.innerText = `${targetText.slice(0, 9)} ${targetCount.toLocaleString()} ${targetText.slice(9)}`; // Remove cursor after typing completes
          viewCountElementMobile.innerText = `Views: ${targetCount.toLocaleString()}`;
        }
      }, typingSpeed);
    } else {
      throw new Error('View count data is not a valid number');
    }
  } catch (error) {
    console.error('Failed to fetch view count:', error);
    viewCountElement.innerText = 'View count unavailable';
    viewCountElementMobile.innerText = 'Views: N/A';
  }
}

updateCounter();

