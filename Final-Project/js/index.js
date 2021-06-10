//**************************Lesson-4-2****************************************

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; Vaidehi ${thisYear}`;
footer.appendChild(copyright);

const profileName = document.getElementById("profileName");

profileName.addEventListener("mouseover", () => {
  profileName.textContent = profileName.innerText.toUpperCase();
  profileName.style.color = "tomato";
});

profileName.addEventListener("mouseout", () => {
  profileName.textContent = profileName.textContent.toLowerCase();
  profileName.style.color = "seashell";
});

const skillsSection = document.getElementById("skills");

skillsSection.addEventListener("mouseover", (event) => {
  if (event.target.tagName == "LI") {
    event.target.textContent = event.target.textContent.toUpperCase();
    event.target.style.color = "red";
  }
});
skillsSection.addEventListener("mouseout", (event) => {
  if (event.target.tagName == "LI") {
    event.target.textContent = event.target.textContent.toLowerCase();
    event.target.style.color = "black";
  }
});

const techSkills = [
  "JavaScript",
  "HTML/CSS",
  "Microsoft Office",
  "Visio",
  "Basic SQL",
  "Basic Tableau",
];
const techSkillsList = skillsSection.querySelector("ul#technicalSkills");

const busnSkills = [
  "Process GAP Analysis",
  "Requirement Gathering and Analysis",
  "USE Case",
  "UAT Testing",
  "Performance Analysis and Enhancement Solution",
  "KPI and Dashboard Scorecard",
];
const busnSkillsList = skillsSection.querySelector("ul#businessSkills");

const personalSkills = [
  "Communication",
  "leadership",
  "Team Work",
  "Prioritization",
  "Organization skills",
  "Focused and Detail Oriented",
];
const personalSkillsList = skillsSection.querySelector("ul#personalSkills");

for (let i = 0; i < techSkills.length; i++) {
  const techSkill = document.createElement("li");
  techSkill.innerText = techSkills[i];
  techSkillsList.appendChild(techSkill);
}

for (let i = 0; i < busnSkills.length; i++) {
  const busnSkill = document.createElement("li");
  busnSkill.innerHTML = busnSkills[i];
  busnSkillsList.appendChild(busnSkill);
}

for (let i = 0; i < personalSkills.length; i++) {
  const personalSkill = document.createElement("li");
  personalSkill.textContent = personalSkills[i];
  personalSkillsList.appendChild(personalSkill);
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
  const name = li.children[0].textContent;
  const email = li.children[0].href.slice(7);
  const message = li.children[1].textContent.slice(8);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.value = name;
  const emailInput = document.createElement('input');
  emailInput.type = 'email'
  emailInput.value = email
  const messageInput = document.createElement("input");
  messageInput.type = "text";
  messageInput.value = message;

  li.innerHTML = "";
  li.appendChild(nameInput);
  li.appendChild(emailInput);
  li.appendChild(messageInput);
  li.appendChild(createRemoveButton());
  li.appendChild(createSaveButton());
  
 //createLi(nameInput, emailInput, messageInput);

  e.target.removeEventListener("click", editFunction);
  e.target.addEventListener('click', saveFunction);
  e.target.textContent = "Save";
};

const saveFunction = function (e) {
  
  const li = e.target.parentNode;

  const name = li.children[0].value;
  const email = li.children[1].value;
  const message = li.children[2].value;

  populateLi(li, name, email, message);
  // const updatedMessage = createLi(name, email, message);
  // li.replaceWith(updatedMessage);
};


//Creating Save Button
function createSaveButton() {
  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.type = "Save";
  saveButton.addEventListener("click", saveFunction);
  return saveButton;
}

//Creating Edit Button
function createEditButton() {
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.type = "Edit";
  editButton.addEventListener("click", editFunction);
  return editButton;
}

//Creating Remove Button
function createRemoveButton() {
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    entry.remove();
    verifyingEmptyMesaages();
  });
  return removeButton;
}

function formLiText(fullName, email, message) {
  return  `<a href = "mailto:${email}">${fullName}</a><span> wrote: ${message}</span>`;
}

// creating Li
function createLi (fullName, email, message) {
  const newLi = document.createElement("li");
  return populateLi(newLi, fullName, email, message);
}

function populateLi(liNode, fullName, email, message) {
  liNode.innerHTML = formLiText(fullName, email, message);

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
  console.log(fullName, email, message);
  
  const newLi = createLi(fullName, email, message);

  messageList.appendChild(newLi);
  
  messageForm.reset();
});

/**                 ************ CODE TO USE THE SAME BUTTON FOR EDIT AND SAVE ***********
 * 
 const messageForm = document.querySelector('[name="leave_message"]');
const messageSection = document.querySelector("#messages");
const messageList = messageSection.querySelector("ul");
verifyingEmptyMesaages();

function verifyingEmptyMesaages() {
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  }
}

function createRemoveButton() {
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    const ul = entry.parentNode;
    ul.removeChild(entry);
    verifyingEmptyMesaages();
  });
  return removeButton;
}

const editMessageButtonOnClick = function (buttonEditEvent) {
  const li = buttonEditEvent.target.parentNode;

  const editedMessageSpan = li.children[2];
  console.log(editedMessageSpan);
  const editedMessageInput = document.createElement("input");
  editedMessageInput.type = "text";
  editedMessageInput.value = editedMessageSpan.textContent;
  li.insertBefore(editedMessageInput, editedMessageSpan);
  li.removeChild(editedMessageSpan);

  const editedNameSpan = li.children[0];
  const editedNameInput = document.createElement("input");
  editedNameInput.type = "text";
  editedNameInput.value = editedNameSpan.textContent;
  li.insertBefore(editedNameInput, editedNameSpan);
  li.removeChild(editedNameSpan);
  console.log("check");
  buttonEditEvent.target.removeEventListener("click", editMessageButtonOnClick);
  buttonEditEvent.target.addEventListener("click", saveMessageButtonOnClick);
  buttonEditEvent.target.textContent = "Save";
};

const saveMessageButtonOnClick = function (event) {
  const li = event.target.parentNode;

  const updatedMessageInput = li.children[2];
  const updatedMessageSpan = document.createElement("span");
  console.log(updatedMessageInput);
  updatedMessageSpan.textContent = updatedMessageInput.value;
  li.insertBefore(updatedMessageSpan, updatedMessageInput);
  li.removeChild(updatedMessageInput);

  const updatedNameInput = li.children[0];
  const updatedNameSpan = document.createElement("span");
  updatedNameSpan.textContent = updatedNameInput.value;
  li.insertBefore(updatedNameSpan, updatedNameInput);
  li.removeChild(updatedNameInput);
  console.log("save");
  event.target.removeEventListener("click", saveMessageButtonOnClick);
  event.target.addEventListener("click", editMessageButtonOnClick);
  event.target.textContent = "Edit";
};

function createEditButton() {
  // edit function
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.type = "Edit";

  editButton.addEventListener("click", editMessageButtonOnClick);
  console.log("edit is done");

  console.log("save is done");
  return editButton;
}

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageSection.style.display = "block";
  const fullName = e.target.user_name.value;
  const email = e.target.user_email.value;
  const message = e.target.user_message.value;
  console.log(fullName, email, message);
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href = "mailto:${email}">${fullName}</a>
                            <span> wrote: </span> <span>${message}</span>`;

  const removeButton = createRemoveButton();
  const editButton = createEditButton();

  messageList.appendChild(newMessage);
  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);
  messageForm.reset();
});
  
 */
//****************************************************************************LESSON-4-4****************************************************************************