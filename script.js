const form = document.getElementById("form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

function checkVotingEligibility(age, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const age = Number(ageInput.value);
  const name = nameInput.value.trim();

  // Validation
  if (!age || !name) {
    alert("Please enter valid details.");
    return;
  }

  checkVotingEligibility(age, name)
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});
