document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const nameInput = document.getElementById("name").value.trim();
  const ageInput = document.getElementById("age").value.trim();

  // Validate inputs
  if (!nameInput || !ageInput) {
    alert("Both fields are required.");
    return;
  }

  // Convert age to a number
  const age = parseInt(ageInput, 10);

  // Create a promise that resolves or rejects based on age
  const ageValidationPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${nameInput}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput}. You aren't old enough.`);
      }
    }, 4000); // Delay of 4 seconds
  });

  // Handle the promise
  ageValidationPromise
    .then((message) => {
      alert(message); // Alert for successful promise resolution
    })
    .catch((errorMessage) => {
      alert(errorMessage); // Alert for promise rejection
    });
});
