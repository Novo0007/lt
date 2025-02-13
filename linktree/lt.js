
     // Initialize EmailJS with your User ID
  emailjs.init('Oqta761ipm11BdNN7');

  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Send email
    emailjs.sendForm('service_8z32a8b', 'template_2h9c59q', this)
      .then(() => {
        alert('Message sent successfully! 💝');
      })
      .catch(() => {
        alert('Failed to send message. Please try again.');
      });
  });

    // Theme Toggle
    function toggleTheme() {
      const body = document.body;
      body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
      const icon = document.querySelector('.theme-toggle i');
      icon.classList.toggle('fa-moon');
      icon.classList.toggle('fa-sun');
    }

    // Countdown Timer
    const countdownDate = new Date("2024-02-14T00:00:00").getTime();
    const timer = document.getElementById("timer");

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timer.textContent = `${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;

      if (distance < 0) {
        clearInterval(interval);
        timer.textContent = "Happy Valentine's Day! 💝";
      }
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();