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

skillsSection.addEventListener('mouseover', (event, event1) => {
    if(event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toUpperCase()
      }
});
skillsSection.addEventListener('mouseout', (event) => {
    if(event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toLowerCase();
      }
});

for(let i = 0; i < techSkills.length; i++) {
    const techSkill = document.createElement('li');
    techSkill.innerText = techSkills[i];
    techSkill.addEventListener('mouseover', () => {
        techSkill.style.color = 'red';
    });
    techSkill.addEventListener('mouseout', () => {
        techSkill.style.color = 'black';
    });
    techSkillsList.appendChild(techSkill);
};

for(let i = 0; i < busnSkills.length; i++) {
    const busnSkill = document.createElement('li');
    busnSkill.innerHTML = busnSkills[i];
    busnSkill.addEventListener('mouseover', () => {
        busnSkill.style.color = 'red';
    });
    busnSkill.addEventListener('mouseout', () => {
        busnSkill.style.color = 'black';
    });
    busnSkillsList.appendChild(busnSkill);
};

 for(let i = 0; i < personalSkills.length; i++) {
    const personalSkill = document.createElement('li');
    personalSkill.textContent = personalSkills[i];
    personalSkill.addEventListener('mouseover', () => {
        personalSkill.style.color = 'red';
    });
    personalSkill.addEventListener('mouseout', () => {
        personalSkill.style.color = 'black';
    });
    personalSkillsList.appendChild(personalSkill);
 };

