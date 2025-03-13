let projectCards = '';
const projectGrids = document.querySelector('.projects-grid');

const projectsData = [
    {
        id: 'fiber-optic',
        img: 'src/img/projects/tree.svg',
        name: 'Fiberization Batam ± 500 km',
        desc: 'Build and maintenance fiber optic backbone and lastmile.',
        year: '2018 - Now',
        location: 'Batam',
    },

    {
        id: 'fiber-home',
        img: 'src/img/projects/tree.svg',
        name: 'Fiberization Kupang ± 180 km',
        desc: 'Build and maintenance fiber optic backbone and lastmile.',
        year: '2018 - Now',
        location: 'Nusa Tenggara Timur',
    },

    {
        id: 'closed-internet',
        img: 'src/img/projects/tree.svg',
        name: 'Fiberization Kendal ± 340 km',
        desc: 'Build and maintenance fiber optic backbone and lastmile.',
        year: '2018 - Now',
        location: 'Jawa Tengah',
    },

    {
        id: 'network-monitoring',
        img: 'src/img/projects/tree.svg',
        name: 'Fiberization Pemalang ± 440 km',
        desc: 'Build and maintenance fiber optic backbone and lastmile.',
        year: '2018 - Now',
        location: 'Jawa Tengah',
    },

    {
        id: 'fiber-home',
        img: 'src/img/projects/building.svg',
        name: 'Apartement Akasa Puri Living BSD',
        desc: 'Fiber to The Home (FTTH) and maintenance to all tenants for triple play service.',
        year: '2018 - Now',
        location: 'Tangerang Selatan',
    },

    {
        id: 'fiber-home',
        img: 'src/img/projects/house.svg',
        name: 'Telkom Housing Project',
        desc: 'Migration project in some area in Jakarta.',
        year: '2016',
        location: 'Jakarta',
    },

    {
        id: 'network-monitoring',
        img: 'src/img/projects/building.svg',
        name: 'Apartement Green Pramuka',
        desc: 'Infrastructure maintenance service for triple play.',
        year: '2015',
        location: 'Jakarta',
    },

    {
        id: 'network-monitoring',
        img: 'src/img/projects/building.svg',
        name: 'Apartement Serpong Greenview',
        desc: 'Fiber to The Home (FTTH) and maintenance to all tenants for triple play service.',
        year: '2014 - Now',
        location: 'Tangerang Selatan',
    },

    {
        id: 'network-monitoring',
        img: 'src/img/projects/tree.svg',
        name: 'Fiberization Batam ± 500 km',
        desc: 'Build and maintenance fiber optic backbone and lastmile.',
        year: '2018 - Now',
        location: 'Batam',
    },
];

projectsData.forEach((data) => {
    projectCards += `
        <div class="bg-white rounded-lg p-5">
            <img src="${data.img}" alt="">
            <p class="text-base font-bold my-1.5">${data.name}</p>
            <p class="text-[#999999] text-sm h-16">${data.desc}</p>
            <hr class="text-[#59595949] my-3">
            <p class="text-[#999999] text-xs">${data.year} | ${data.location}</p>
        </div>
    `
})

projectGrids.innerHTML = projectCards;

function filter(value) {
    projectCards = '';
    
    projectsData.forEach((project) => {
        if (value === 'all') {
            projectCards += `
            <div class="bg-white rounded-lg p-5">
                <img src="${project.img}" alt="">
                <p class="text-base font-bold my-1.5">${project.name}</p>
                <p class="text-[#999999] text-sm h-16">${project.desc}</p>
                <hr class="text-[#59595949] my-3">
                <p class="text-[#999999] text-xs">${project.year} | ${project.location}</p>
            </div>
            `
            projectGrids.innerHTML = projectCards;
        }        

        else if (project.id === value) {
            projectCards += `
            <div class="bg-white rounded-lg p-5">
                <img src="${project.img}" alt="">
                <p class="text-base font-bold my-1.5">${project.name}</p>
                <p class="text-[#999999] text-sm h-16">${project.desc}</p>
                <hr class="text-[#59595949] my-3">
                <p class="text-[#999999] text-xs">${project.year} | ${project.location}</p>
            </div>
            `

            projectGrids.innerHTML = projectCards;
        }
    })
}

const dropdowns = document.querySelectorAll('.projects-dropdown-container');

document.querySelectorAll('.project-dropdown-menu li')
.forEach(project => {
    project.addEventListener('click', () => {
        const data = String(project.dataset.menu);
        
        filter(data);

        document.querySelector('.selected').textContent = project.textContent;
    })
})