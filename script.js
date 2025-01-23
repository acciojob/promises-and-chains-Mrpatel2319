//your JS code here. If required.
document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from reloading the page

  const nameInput = document.getElementById("name").value.trim();
  const ageInput = document.getElementById("age").value;

  // Validation: Ensure inputs are not empty
  if (!nameInput || !ageInput) {
    alert("Both fields are required.");
    return;
  }

  // Create a promise to handle the age validation
  const validateAge = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(ageInput) > 18) {
        resolve(`Welcome, ${nameInput}. You can vote.`);
      } else {
        reject(`Oh sorry, ${nameInput}. You aren't old enough.`);
      }
    }, 4000); // Simulate a 4-second delay
  });

  // Handle the promise
  validateAge
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});
