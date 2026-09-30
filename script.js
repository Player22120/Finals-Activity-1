document.addEventListener("DOMContentLoaded", () => {

  const showBtn = document.getElementById("show");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeBtn");
  const modalContent = document.getElementById("modalContent");

  showBtn.addEventListener("click", () => {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const age = document.querySelector("#age").value;

    let sex = "";
    const radios = document.getElementsByClassName("gender");
    if (radios[0]?.checked) sex = radios[0].value;
    else if (radios[1]?.checked) sex = radios[1].value;


    const selects = document.getElementsByTagName("select");
    let favoriteColor = "";
    if (selects.length > 0) {
      favoriteColor = selects[0].options[selects[0].selectedIndex].value;
    }

    let hobbies = "";
    if (document.querySelector("#doodling")?.checked) {
      hobbies += (hobbies ? ", " : "") + "Doodling";
    }
    if (document.querySelector("#sim-racing")?.checked) {
      hobbies += (hobbies ? ", " : "") + "Sim Racing";
    }
    if (hobbies === "") hobbies = "N/A";


    const about = document.getElementById("about").value;

    if (name === "" || email === "" || age === "" || sex === "" || favoriteColor === "") {
      alert("Please fill out all required fields!");
      return;
    }

    const output =
      "Name: " + name + "<br>" +
      "Email: " + email + "<br>" +
      "Age: " + age + "<br>" +
      "Sex: " + sex + "<br>" +
      "Favorite Color: " + favoriteColor + "<br>" +
      "Hobby: " + hobbies + "<br>" +
      "About Yourself: " + about;

    modalContent.innerHTML = output;
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
