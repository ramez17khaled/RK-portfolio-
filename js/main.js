const API_URL = "https://portfolio-backend.onrender.com";


async function loadProfile() {
    const res = await fetch(`${API_URL}/profile`);
    const data = await res.json();


    document.getElementById("full-name").textContent = data.full_name;
    document.getElementById("title").textContent = data.title;
    document.getElementById("bio").textContent = data.bio;
    document.getElementById("location").textContent = data.location;
}


async function loadSkills() {
    const res = await fetch(`${API_URL}/skills`);
    const skills = await res.json();


    const ul = document.getElementById("skills");
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = `${skill.name} (${skill.category})`;
        ul.appendChild(li);
    });
}


async function loadProjects() {
const res = await fetch(`${API_URL}/projects`);
    const projects = await res.json();


    const container = document.getElementById("projects");
    projects.forEach(project => {
        const div = document.createElement("div");
        div.innerHTML = `<h4>${project.title}</h4><p>${project.description}</p>`;
        container.appendChild(div);
});
}


loadProfile();
loadSkills();
loadProjects();