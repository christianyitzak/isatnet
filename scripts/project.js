import { projectsData } from "../data/project.js";

let projectHTML = '';

projectsData.forEach((data) => {
    projectHTML += `
        <div class="bg-white rounded-lg p-5">
            <img src="${data.img}" alt="">
            <p class="text-base font-bold my-1.5">${data.name}</p>
            <p class="text-[#999999] text-sm h-16">${data.desc}</p>
            <hr class="text-[#59595949] my-3">
            <p class="text-[#999999] text-xs">${data.year} | ${data.location}</p>
        </div>
    `
})

document.querySelector('.projects-grid').innerHTML = projectHTML;

function filter(value) {
    projectHTML = '';
    
    projectsData.forEach((project) => {
        if (value === 'all') {
            projectHTML += `
            <div class="bg-white rounded-lg p-5">
                <img src="${project.img}" alt="">
                <p class="text-base font-bold my-1.5">${project.name}</p>
                <p class="text-[#999999] text-sm h-16">${project.desc}</p>
                <hr class="text-[#59595949] my-3">
                <p class="text-[#999999] text-xs">${project.year} | ${project.location}</p>
            </div>
            `
            
            document.querySelector('.projects-grid').innerHTML = projectHTML;
            document.querySelector('.project-dropdown-menu').classList.add('hidden');
        }        

        else if (project.id === value) {
            projectHTML += `
            <div class="bg-white rounded-lg p-5">
                <img src="${project.img}" alt="">
                <p class="text-base font-bold my-1.5">${project.name}</p>
                <p class="text-[#999999] text-sm h-16">${project.desc}</p>
                <hr class="text-[#59595949] my-3">
                <p class="text-[#999999] text-xs">${project.year} | ${project.location}</p>
            </div>
            `

            document.querySelector('.projects-grid').innerHTML = projectHTML;
            document.querySelector('.project-dropdown-menu').classList.add('hidden');
        }
        
    })
}

document.querySelector('.project-dropdown').addEventListener('click', () => {
    document.querySelector('.project-dropdown-menu').classList.toggle('hidden');
});

document.querySelectorAll('.project-dropdown-menu li')
.forEach(project => {
    project.addEventListener('click', () => {
        const data = String(project.dataset.menu);
        
        filter(data);

        document.querySelector('.selected').textContent = project.textContent;

    })
})