document.addEventListener("DOMContentLoaded", function () {
  function addStyles() {
    const styles = `
/* Additional CSS styles */
.pets-container {
  display: flex;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  min-height: 100vh; /* Set container minimum height to full viewport height */
  margin-top: 10px;
}

.pet {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin: 0 1rem 1rem 0; /* Add margin for separation */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  max-width: 20rem; /* Limit width to 20rem */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  text-align: center; /* Center text */
}

.pet:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.pet-info {
  margin-top: 10px;
}

.pet-info p {
  margin: 5px 0;
}

.pet-info button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pet-info button:hover {
  background-color: #45a049;
}

.pet-image {
  max-width: 100%; /* Limit image width */
  height: auto; /* Maintain aspect ratio */
}
  `;
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;

    document.head.appendChild(styleElement);
  }

  // Define the Pet object constructor
  class Pet {
    constructor(
      name,
      type,
      breed,
      age,
      gender,
      compatibility,
      description,
      ownerName,
      ownerEmail,
      image,
    ) {
      this.name = name;
      this.type = type;
      this.breed = breed;
      this.age = age;
      this.gender = gender;
      this.compatibility = compatibility;
      this.description = description;
      this.ownerName = ownerName;
      this.ownerEmail = ownerEmail;
      this.image = image;
    }
  }

  // Create instances of the Pet object for each fictitious pet
  const pets = [
    new Pet(
      "Fluffy",
      "Cat",
      "Persian",
      "Adult",
      "Female",
      "Loves cats, Loves children",
      "Fluffy is a beautiful Persian cat who loves to cuddle and play. She's great with children and other cats.",
      "John Doe",
      "john@example.com",
      "futuristic-cat.png",
    ),
    new Pet(
      "Max",
      "Dog",
      "Labrador Retriever",
      "Puppy",
      "Male",
      "Loves dogs, Loves children",
      "Max is an adorable Labrador Retriever puppy who loves to play fetch and go for walks. He's great with other dogs and children.",
      "Jane Smith",
      "jane@example.com",
      "cartoon-dog.png",
    ),
  ];

  // Function to create pet fields dynamically
  function createPetFields(pet) {
    const petDiv = document.createElement("div");
    petDiv.classList.add("pet");

    const petInfo = document.createElement("div");
    petInfo.classList.add("pet-info");

    const petImage = document.createElement("img");
    petImage.src = `../assets/${pet.image}`;
    petImage.alt = pet.type;
    petImage.style.maxWidth = "10rem";

    const petName = document.createElement("h2");
    petName.textContent = `Name: ${pet.name}`;

    const petType = document.createElement("p");
    petType.textContent = `Type: ${pet.type}`;

    const petBreed = document.createElement("p");
    petBreed.textContent = `Breed: ${pet.breed}`;

    const petAge = document.createElement("p");
    petAge.textContent = `Age: ${pet.age}`;

    const petGender = document.createElement("p");
    petGender.textContent = `Gender: ${pet.gender}`;

    const petCompatibility = document.createElement("p");
    petCompatibility.textContent = `Compatibility: ${pet.compatibility}`;

    const petDescription = document.createElement("p");
    petDescription.textContent = `Description: ${pet.description}`;

    const petOwnerName = document.createElement("p");
    petOwnerName.textContent = `Owner's Name: ${pet.ownerName}`;

    const petOwnerEmail = document.createElement("p");
    petOwnerEmail.textContent = `Owner's Email: ${pet.ownerEmail}`;

    const interestedButton = document.createElement("button");
    interestedButton.textContent = "Interested";
    interestedButton.classList.add("interested-button");

    petInfo.appendChild(petName);
    petInfo.appendChild(petType);
    petInfo.appendChild(petBreed);
    petInfo.appendChild(petAge);
    petInfo.appendChild(petGender);
    petInfo.appendChild(petCompatibility);
    petInfo.appendChild(petDescription);
    petInfo.appendChild(petOwnerName);
    petInfo.appendChild(petOwnerEmail);
    petInfo.appendChild(interestedButton);

    petDiv.appendChild(petImage);
    petDiv.appendChild(petInfo);

    return petDiv;
  }

  // Display pets on the page
  const petList = document.getElementById("pet-list");
  const petsContainer = document.createElement("div");
  petsContainer.classList.add("pets-container");

  pets.forEach((pet) => {
    const petDiv = createPetFields(pet);
    petsContainer.appendChild(petDiv);
  });

  petList.appendChild(petsContainer);

  addStyles();
});
