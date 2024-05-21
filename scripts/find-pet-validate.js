function validateCheckBox(group) {
  return group.length != 0;
}

function addError(allErrors, error) {
  allErrors.push(error);
}

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("find-pet-form");

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
    if (errors.length > 0) {
      alert(errors.join("\n"));
    }
  });
});
