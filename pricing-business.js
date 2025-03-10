let pricingHTML = '';
const pricingData = [
    {
        name: 'Starter',
        speed: '10',
        price: '650.000',
    },

    {
        name: 'Small Business',
        speed: '25',
        price: '1.250.000',
    },

    {
        name: 'Medium Office',
        speed: '50',
        price: '1.700.000',
    },

    {
        name: 'Big Group',
        speed: '100',
        price: '2.150.000',
    },

    {
        name: 'Professional',
        speed: '150',
        price: '3.250.000',
    },

    {
        name: 'Corporate',
        speed: '250',
        price: '4.500.000',
    },

    {
        name: 'Big Company',
        speed: '350',
        price: '6.050.000',
    },

    {
        name: 'Super Office',
        speed: '500',
        price: '8.550.000',
    },
];

pricingData.forEach((data) => {
    pricingHTML += `
        <div class="bg-white rounded-lg p-5 shadow-lg">
            <p class="font-semibold mb-2.5">${data.name}</p>
            <div class="flex flex-row md:flex-col gap-3.5">
                <div>
                    <p class="text-4xl font-bold">${data.speed} <span class="text-sm font-normal">Mbps</span></p>
                    <p class="text-sm">Rp${data.price}/month</p>
                </div>

                <hr class="hidden md:block">

                <div class="flex flex-col justify-between border-l-1 border-black md:border-none pl-2.5 md:pl-0">
                    <div class="flex items-center gap-1 md:gap-0">
                        <img src="src/img/icon-checkbox.svg" alt="">
                        <p class="text-sm font-medium">Free installation</p>
                    </div>

                    <div class="flex items-center gap-1 md:gap-0">
                        <img src="src/img/icon-checkbox.svg" alt="">
                        <p class="text-sm font-medium">
                        Broadband 
                        Internet Service
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `
});

document.querySelector('.pricing-grid').innerHTML = pricingHTML;