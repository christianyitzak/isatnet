let pricingCards = '';
const pricingGrids = document.querySelector('.pricing-grid');

const pricingData = [
    {
        color: 'white',
        name: 'Silver',
        speed: 30,
        price: '300.000',
        device: 10,
    },
    
    {
        color: 'linear-gradient(180deg, #FFCDBC 0%, #F37248 100%)',
        name: 'Gold',
        speed: 50,
        price: '600.000',
        device: 20,
    },

    {
        color: 'linear-gradient(180deg, #88E6B6 0%, #0AB65E 100%)',
        name: 'Platinum',
        speed: 100,
        price: '800.000',
        device: 30,
    },
];

pricingData.forEach((data) => {
    pricingCards += `
        <div class="rounded-lg p-5 shadow-lg" style="background: ${data.color}">
            <p class="font-semibold mb-2.5">${data.name}</p>
            <div class="flex flex-row md:flex-col gap-3.5">
                <div>
                    <p class="text-4xl font-bold mb-2.5">${data.speed} <span class="text-sm font-normal">Mbps</span></p>
                    <p class="text-sm">Rp${data.price}/month</p>
                </div>

                <hr class="hidden md:block">

                <div class="flex flex-col justify-between border-l-1 border-black md:border-none pl-2.5 md:pl-0">
                    <div class="flex items-center">
                        <img src="src/img/icon-checkbox.svg" alt="">
                        <p class="text-xs font-medium">Free installation</p>
                    </div>

                    <div class="flex items-center">
                        <img src="src/img/icon-checkbox.svg" alt="">
                        <p class="text-xs font-medium">Up to ${data.device} devices</p>
                    </div>
                </div>
            </div>
        </div>
    `
})

pricingGrids.innerHTML = pricingCards;