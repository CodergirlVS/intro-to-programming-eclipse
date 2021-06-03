const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p')
copyright.innerHTML = `&copy; Vaidehi ${thisYear}`;
footer.appendChild(copyright);
const skillsSection = document.getElementById('skills');

const techSkills = ['JavaScript', 'HTML/CSS', 'Microsoft Office', 'Visio', 'Basic SQL', 'Basic Tableau'];
const techSkillsList = skillsSection.querySelector('ul#technicalSkills');

const busnSkills = ['Process GAP Analysis', 'Requirement Gathering and Analysis', 'USE Case', 'UAT Testing',
                     'Performance Analysis and Enhancement Solution', 'KPI and Dashboard Scorecard'];
const busnSkillsList = skillsSection.querySelector('ul#businessSkills');

const personalSkills = ['Communication', 'leadership', 'Team Work', 'Prioritization', 'Organization skills', 'Focused and Detail Oriented'];
const personalSkillsList = skillsSection.querySelector('ul#personalSkills');

const profileName = document.getElementsByTagName('h1')[0];

profileName.addEventListener('mouseover', () => {
    profileName.textContent = profileName.innerText.toUpperCase();
});

profileName.addEventListener('mouseout', () => {
    profileName.textContent = profileName.textContent.toLowerCase();
});

skillsSection.addEventListener('mouseover', (event) => {
    if(event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toUpperCase()
        event.target.style.color = 'red';
      }
});
skillsSection.addEventListener('mouseout', (event) => {
    if(event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toLowerCase();
        event.target.style.color = 'black';
      }
});

for(let i = 0; i < techSkills.length; i++) {
    const techSkill = document.createElement('li');
    techSkill.innerText = techSkills[i];
    techSkillsList.appendChild(techSkill);
};

for(let i = 0; i < busnSkills.length; i++) {
    const busnSkill = document.createElement('li');
    busnSkill.innerHTML = busnSkills[i];
    busnSkillsList.appendChild(busnSkill);
};

 for(let i = 0; i < personalSkills.length; i++) {
    const personalSkill = document.createElement('li');
    personalSkill.textContent = personalSkills[i];
    personalSkillsList.appendChild(personalSkill);
 };

