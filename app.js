// navbar js start
let menu_bar = document.querySelector(".menu");
let side_menu = document.querySelector(".side_menu");
let cancel = document.querySelector(".cancel");
let links = document.querySelectorAll("nav a");

menu_bar.addEventListener("click", () => {
  side_menu.classList.toggle("hide");
  menu_bar.classList.add("opacity");
});

cancel.addEventListener("click", () => {
  side_menu.classList.toggle("hide");
  menu_bar.classList.remove("opacity");
});

links.forEach((option) => {
  option.addEventListener("click", () => {
    document.querySelector("nav .active").classList.remove("active");
    option.classList.add("active");
  });
});

//navbar js end

// about js start
let skill = document.querySelector(".about_me .skills");
let education = document.querySelector(".about_me .education");
let achievements = document.querySelector(".about_me .achievements");

let about_links = document.querySelectorAll(".about_me .links a");

about_links.forEach((option) => {
  option.addEventListener("click", (e) => {
    document
      .querySelector(".about_me .links .active")
      .classList.remove("active");
    option.classList.add("active");

    let result = e.target.dataset.tab;
    if (result === "skills") {
      skill.classList.remove("display");
      education.classList.add("display");
      achievements.classList.add("display");
    } else if (result === "education") {
      education.classList.remove("display");
      skill.classList.add("display");
      achievements.classList.add("display");
    } else {
      achievements.classList.remove("display");
      skill.classList.add("display");
      education.classList.add("display");
    }
  });
});

// about js end
