const initSkills = () => {
  const root = document.documentElement;
  const skillsElementsDisplayed = getComputedStyle(root).getPropertyValue("--skills-elements-displayed");
  const skillsContent = document.querySelector("ul.skills-content");
  
  root.style.setProperty("--skills-elements", skillsContent.children.length);
  
  for(let i=0; i<skillsElementsDisplayed; i++) {
    skillsContent.appendChild(skillsContent.children[i].cloneNode(true));
  }

}

export { initSkills };