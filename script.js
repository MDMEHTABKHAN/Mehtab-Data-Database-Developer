 function toggleMobileMenu() {
      document.getElementById("mobileMenu").classList.toggle("hidden");
    }

  // Rotating full sentence
  const roles = [
    "Data Analyst",
    "SQL Developer",
    "Business Analyst",
    "Junior Database Administrator",
    "Reporting Analyst",
    "Operations Analyst",
    "MIS Executive",
    "MIS Analyst",
    "Data Quality Analyst",
    "Junior Data Analyst",
  ];

  let index = 0;
  const headline = document.getElementById("rotatingHeadline");

  setInterval(() => {
    headline.classList.add("opacity-0");
    setTimeout(() => {
      headline.textContent = `Hi, I'm Md Mehtab Khan, ${roles[index]}`;
      headline.classList.remove("opacity-0");
      index = (index + 1) % roles.length;
    }, 400); // 0.4s fade transition
  }, 4000); // Change every 4 seconds
