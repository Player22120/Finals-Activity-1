document.addEventListener("DOMContentLoaded", () => {
  const showBtn = document.getElementById("show");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeBtn");
  const modalContent = document.getElementById("modalContent");

  showBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    let sex = "";
    if (document.getElementById("male")?.checked) {
      sex = document.getElementById("male").value;
    } else if (document.getElementById("female")?.checked) {
      sex = document.getElementById("female").value;
    }

    const colorSelect = document.getElementById("colors");
    let favoriteColor = "";
    if (colorSelect) {
      favoriteColor = colorSelect.options[colorSelect.selectedIndex].value;
    }

    let hobbies = "";
    if (document.getElementById("doodling")?.checked) {
      hobbies += (hobbies ? ", " : "") + "Doodling";
    }
    if (document.getElementById("sim-racing")?.checked) {
      hobbies += (hobbies ? ", " : "") + "Sim Racing";
    }

    if (hobbies === "") {
      hobbies = "N/A";
    }

    if (
      name === "" ||
      email === "" ||
      age === "" ||
      sex === "" ||
      favoriteColor === ""
    ) {
      alert("Please fill out all required fields!");
      return;
    }

    const about = document.getElementById("about").value;

    const output =
      "Name: " +
      name +
      "<br>" +
      "Email: " +
      email +
      "<br>" +
      "Age: " +
      age +
      "<br>" +
      "Sex: " +
      sex +
      "<br>" +
      "Favorite Color: " +
      favoriteColor +
      "<br>" +
      "Hobby: " +
      hobbies.trim() +
      "<br>" +
      "About Yourself: " +
      about;

    modalContent.innerHTML = output;

    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
