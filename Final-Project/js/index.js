// Image Gallery Scroll...

let gLi = document.getElementsByClassName("gImages");
let index = 0;
window.show = function (increase) {
  index = index + increase;

  index = Math.min(Math.max(index, 0), gLi.length - 1);
  gLi[index].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  });
};

// Skills Section- Array**

const skillsArray = [
  {
    name: "JavaScript",
    category: "Tech",
  },
  {
    name: "HTML/CSS",
    category: "Tech",
  },
  {
    name: "Microsoft Office",
    category: "Tech",
  },
  {
    name: "Visio",
    category: "Tech",
  },
  {
    name: "Basic SQL",
    category: "Tech",
  },
  {
    name: "Basic Tableau",
    category: "Tech",
  },
  {
    name: "Process GAP Analysis",
    category: "Business",
  },
  {
    name: "Requirement Gathering and Analysis",
    category: "Business",
  },
  {
    name: "USE Case",
    category: "Business",
  },
  {
    name: "UAT Testing",
    category: "Business",
  },
  {
    name: "Performance Analysis and Enhancement Solution",
    category: "Business",
  },
  {
    name: "KPI and Dashboard Scorecard",
    category: "Business",
  },
  {
    name: "Communication",
    category: "Personal",
  },
  {
    name: "Leadership",
    category: "Personal",
  },
  {
    name: "Prioritization",
    category: "Personal",
  },
  {
    name: "Team Work",
    category: "Personal",
  },
  {
    name: "Organization skills",
    category: "Personal",
  },
  {
    name: "Focused and Detail Oriented",
    category: "Personal",
  },
];
const skillsSection = document.getElementById("skills");
const techSkillsList = document.getElementById("technicalSkills");
const busnSkillsList = document.querySelector("#businessSkills");
const personalSkillsList = document.querySelector("#personalSkills");

for (let i = 0; i < skillsArray.length; i++) {
  const skillsLi = document.createElement("li");
  skillsLi.setAttribute("data-id", i);
  skillsLi.innerText = skillsArray[i].name;
  if (skillsArray[i].category === "Tech") {
    techSkillsList.appendChild(skillsLi);
  } else if (skillsArray[i].category === "Business") {
    busnSkillsList.appendChild(skillsLi);
  } else if (skillsArray[i].category === "Personal") {
    personalSkillsList.appendChild(skillsLi);
  }
}

skillsSection.addEventListener("mouseover", (event) => {
  if (event.target.tagName == "LI") {
    event.target.textContent = event.target.textContent.toUpperCase();
    event.target.style.color = "blue";
  }
});
skillsSection.addEventListener("mouseout", (event) => {
  if (event.target.tagName == "LI") {
    const index = event.target.getAttribute("data-id");
    event.target.textContent = skillsArray[index].name;
    event.target.style.color = "black";
  }
});

//*************************************Lessaon-6-2**************************************************

fetch("https://api.github.com/users/CodergirlVS/repos")
  .then(checkStatus)
  .then((response) => response.json())
  .then((data) => onload(data))
  .catch((error) => {
    document.querySelector(
      "#projects",
      "ul"
    ).innerHTML = `<h1> Ooops! ${error} </h1>`;
  });

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.status));
  }
}

function onload(data) {
  const projectSection = document.getElementById("projects");
  const projectList = projectSection.querySelector("ul");
  for (i = 0; i < data.length; i++) {
    const project = document.createElement("li");
    project.className = "repoList";
    const atag = document.createElement("a");
    atag.className = "projectLink";
    atag.setAttribute("target", "_blank");
    atag.href = data[i].html_url;
    atag.innerText = data[i].name;
    const ptag = document.createElement("p");
    ptag.innerText =
      data[i].created_at.slice(0, 10) + "\n" + data[i].description;
    const itag = document.createElement("i");
    itag.className = "fa fa-thumb-tack pin";
    projectList.appendChild(project);
    project.append(atag, ptag, itag);
  }
}

//*****************************************************************Leasson-4-3****************************************************
//                        ************* CODE REMOVES THE EDIT BUTTON AND CREATES A SAVE BUTTON **********************

const messageForm = document.querySelector('[name="leave_message"]');
const messageSection = document.querySelector("#messages");
const messageList = messageSection.querySelector("ul");
verifyingEmptyMesaages();

function verifyingEmptyMesaages() {
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  }
}

const editFunction = function (e) {
  const li = e.target.parentNode;

  const name = li.firstElementChild.children[1];
  const email = li.firstElementChild.children[1];
  const message = li.firstElementChild.children[2];

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.value = name.textContent;
  nameInput.className = "userInput";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.value = email.href.slice(7);
  emailInput.className = "userInput";

  const messageInput = document.createElement("textarea");
  messageInput.type = "text";
  messageInput.id = "userMessageInput";
  messageInput.value = message.textContent.slice(8);

  const messageDate = new Date();
  const span = document.createElement("span");
  span.innerText = `${messageDate.toLocaleString()} `;

  while (li.children.length > 0) {
    li.removeChild(li.firstElementChild);
  }

  const div = document.createElement("div");
  div.appendChild(span);
  div.appendChild(nameInput);
  div.appendChild(emailInput);
  div.appendChild(messageInput);

  li.appendChild(div);
  li.appendChild(createSaveButton());
  li.appendChild(createRemoveButton());

  e.target.addEventListener("click", saveFunction);
};

const saveFunction = function (e) {
  const li = e.target.parentNode;

  const name = li.firstElementChild.children[1].value;
  const email = li.firstElementChild.children[2].value;
  const message = li.firstElementChild.children[3].value;

  while (li.children.length > 0) {
    li.removeChild(li.firstElementChild);
  }

  populateLi(li, name, email, message);
};
//Creating Save Button

function createSaveButton() {
  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.type = "Save";
  saveButton.className = "buttons";
  saveButton.addEventListener("click", saveFunction);
  return saveButton;
}

//Creating Edit Button

function createEditButton() {
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.type = "Edit";
  editButton.className = "buttons";
  editButton.addEventListener("click", editFunction);
  return editButton;
}

//Creating Remove Button

function createRemoveButton() {
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.type = "button";
  removeButton.className = "buttons";
  removeButton.style.backgroundColor = "red";
  removeButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    entry.remove();
    verifyingEmptyMesaages();
  });
  return removeButton;
}

function formLiText(fullName, email, message) {
  const messageDate = new Date();
  const div = document.createElement("div");
  const span1 = document.createElement("span");
  span1.innerText = `${messageDate.toLocaleString()} `;
  const a = document.createElement("a");
  a.href = `mailto:${email}`;
  a.innerText = fullName;
  const span = document.createElement("span");
  span.innerText = ` wrote: ${message}`;
  div.append(span1, a, span);
  return div;
}

// creating Li

function createLi(fullName, email, message) {
  const newLi = document.createElement("li");
  newLi.classList.add("newMessageList");
  return populateLi(newLi, fullName, email, message);
}

function populateLi(liNode, fullName, email, message) {
  liNode.appendChild(formLiText(fullName, email, message));

  liNode.appendChild(createEditButton());
  liNode.appendChild(createRemoveButton());

  return liNode;
}

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageSection.style.display = "block";
  const fullName = e.target.user_name.value;
  const email = e.target.user_email.value;
  const message = e.target.user_message.value;
  const newLi = createLi(fullName, email, message);
  messageList.appendChild(newLi);
  messageForm.reset();
});

//**************************Lesson-4-2****************************************

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.getElementById("footerP");
copyright.innerHTML = `&copy; Vaidehi ${thisYear}`;
