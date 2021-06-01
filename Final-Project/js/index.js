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

for(i = 0; i < techSkills.length; i++) {
    const techSkill = document.createElement('li');
    techSkill.innerText = techSkills[i];
    techSkillsList.appendChild(techSkill);
}

for(i = 0; i < busnSkills.length; i++) {
    const busnSkill = document.createElement('li');
    busnSkill.innerHTML = busnSkills[i];
    busnSkillsList.appendChild(busnSkill);
}

 for(i = 0; i < personalSkills.length; i++) {
    const personalSkill = document.createElement('li');
    personalSkill.textContent = personalSkills[i];
    personalSkillsList.appendChild(personalSkill);
 }

