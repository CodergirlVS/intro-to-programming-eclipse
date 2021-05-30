const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p')
copyright.innerHTML = `&copy; Vaidehi ${thisYear}`;
footer.appendChild(copyright);

const skills = ['JavaScript', 'Agile', 'Accounts', 'Communication']

const skillsSection = document.getElementById('skills')

const skillsList = skillsSection.querySelector('ul')

for(i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill)
}

console.log(skillsList)
