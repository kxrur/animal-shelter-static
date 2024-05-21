function validateCheckBox(group) {
  return group.length != 0;
}
function validateName(name) {
  const trimmedValue = name.trim();

  const words = trimmedValue.split(" ").filter((word) => word !== "");
  if (words.length < 2) {
    return false;
  }

  const validNameRegex = /^[a-zA-Z\s]+$/;
  return validNameRegex.test(trimmedValue);
}

function addError(allErrors, error) {
  allErrors.push(error);
}

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("give-pet-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let errors = [];

    //validate checkboxes
    let array = [];
    let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

    for (let i = 0; i < checkboxes.length; i++) {
      array.push(checkboxes[i].value);
    }
    if (!validateCheckBox(array)) {
      addError(errors, "A compatibility option must be chosen.");
    }
    //validate name
    let name = document.getElementById("owner-name");
    if (!validateName(name.value)) {
      addError(
        errors,
        "Invalid name (must be at least 2 space separated strings without special characters.)",
      );
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
    }
  });
});
