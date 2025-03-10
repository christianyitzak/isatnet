let projectCards = '';
const projectGrids = document.querySelector('.projects-grid');

const projectsData = [
    {
        name: 'Fiberization Batam ± 500 km',
        desc: 'Build and maintenance fiber optic backbone and lastmile.',
        year: '2018',
        location: 'Batam',
    },

    {
        name: 'Fiberization Kupang ± 180 km',
        desc: 'Build and maintenance fiber optic backbone and lastmile.',
        year: '2018',
        location: 'Nusa Tenggara Timur',
    },

    {
        name: 'Fiberization Kendal ± 340 km',
        desc: 'Build and maintenance fiber optic backbone and lastmile.',
        year: '2018',
        location: 'Jawa Tengah',
    },

    {
        name: 'Fiberization Pemalang ± 440 km',
        desc: 'Build and maintenance fiber optic backbone and lastmile.',
        year: '2018',
        location: 'Jawa Tengah',
    },

    {
        name: 'Fiberization Kupang ± 180 km',
        desc: 'Build and maintenance fiber optic backbone and lastmile.',
        year: '2018',
        location: 'Nusa Tenggara Timur',
    },

    {
        name: 'Fiberization Kendal ± 340 km',
        desc: 'Build and maintenance fiber optic backbone and lastmile.',
        year: '2018',
        location: 'Jawa Tengah',
    },

    {
        name: 'Fiberization Pemalang ± 440 km',
        desc: 'Build and maintenance fiber optic backbone and lastmile.',
        year: '2018',
        location: 'Jawa Tengah',
    },

    {
        name: 'Fiberization Kendal ± 340 km',
        desc: 'Build and maintenance fiber optic backbone and lastmile.',
        year: '2018',
        location: 'Jawa Tengah',
    },

    {
        name: 'Fiberization Pemalang ± 440 km',
        desc: 'Build and maintenance fiber optic backbone and lastmile.',
        year: '2018',
        location: 'Jawa Tengah',
    },
];

projectsData.forEach((data) => {
    projectCards += `
        <div class="bg-white rounded-lg p-5">
            <img src="src/img/icon-dedicated-internet.png" alt="">
            <p class="text-base font-bold my-1.5">${data.name}</p>
            <p class="text-[#999999] text-sm">${data.desc}</p>
            <hr class="text-[#59595949] my-3">
            <p class="text-[#999999] text-xs">${data.year}-Now | ${data.location}</p>
        </div>
    `
})

projectGrids.innerHTML = projectCards;