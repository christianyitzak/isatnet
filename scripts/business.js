import { pricingData } from "../data/pricing-business.js";

let pricingHTML = '';

pricingData.forEach((data) => {
    pricingHTML += `
        <div class="bg-white rounded-lg p-5 shadow-lg">
            <p class="font-semibold mb-2.5">${data.name}</p>
            <div class="flex flex-row md:flex-col gap-3.5">
                <div>
                    <p class="text-4xl font-bold mb-2.5">${data.speed} <span class="text-sm font-normal">Mbps</span></p>
                    <p class="text-sm">Rp${data.price}/month</p>
                </div>

                <hr class="hidden md:block">

                <div class="flex flex-col justify-between border-l-1 border-black md:border-none pl-2 md:pl-0">
                    <div class="flex items-center gap-1 md:gap-2">
                        <img src="src/img/icon-checkbox.svg" alt="">
                        <p class="text-xs font-medium">Free installation</p>
                    </div>

                    <div class="flex items-center gap-1 md:gap-2">
                        <img src="src/img/icon-checkbox.svg" alt="">
                        <p class="font-medium text-xs">
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