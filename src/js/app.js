import isWebp from "./mudules/isWebp.js";

import enLocal from '../Localizations/en.json' assert { type: 'json' }
import esLocal from '../Localizations/es.json' assert { type: 'json' }
import frLocal from '../Localizations/fr.json' assert { type: 'json' }
import jaLocal from '../Localizations/ja.json' assert { type: 'json' }
import nlLocal from '../Localizations/nl.json' assert { type: 'json' }
import ruLocal from '../Localizations/ru.json' assert { type: 'json' }
import zhLocal from '../Localizations/zh.json' assert { type: 'json' }

isWebp()

const languages = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh']

const leftChoise = 'https://apple.com/'
const rightChoise = 'https://google.com/'
const wrapper = document.getElementById("wrapper");

const userlanguage = navigator.language.substring(0, 2).toLowerCase()
const currentLanguage = languages.includes(userlanguage) ? userlanguage : 'en'

let localization = enLocal

switch (currentLanguage) {
    case 'es':
        localization = esLocal
        break;
    case 'fr':
        localization = frLocal
        break;
    case 'ja':
        localization = jaLocal
        break;
    case 'nl':
        localization = nlLocal
        break;
    case 'ru':
        localization = ruLocal
        break;
    case 'zh':
        localization = zhLocal
        break;
    default:
        localization = enLocal
        break;
}


console.log(localization['-83%']);

let userChoise = leftChoise

const setMonthly = () => {
    userChoise = leftChoise
}

const setAnnually = () => {
    userChoise = rightChoise
}

const sumbitChoise = () => {
    return location.href = `${userChoise}?lang=${currentLanguage}`
}

const addImg = (src, className, alt, parent) => {

    const img = new Image();
    img.src = src
    img.setAttribute("class", className)
    img.setAttribute("alt", alt)

    parent.prepend(img);
}


const createHTML = (localization) => {
    return `
    <div class="wrapper">
    <header class="header">
        <a href="#" id="headerLink">
        </a>
        <a href="#" class="restore">${localization['Restore']}</a>
    </header>
    <!-- <main> -->
    <h1>${localization['Unlimited Access<br>to All Features']}</h1>
    <section class="features">
        <ul class="features-set">
            <li class="features-item"><a href="#" id="unlimitedLink">
                    <span class="freature-title">${localization['Unlimited documents']}</span>
                </a></li>
            <li class="features-item"><a href="#" id="exportLink">
                    <span class="freature-title">${localization['Count mode']}</span>
                </a></li>
            <li class="features-item"><a href="#" id="noAdsLink">
                    <span class="freature-title">${localization['Text recognition (OCR)']}</span>
                </a></li>
        </ul>
    </section>
    <section class="subscription">
        <ul class="subscription-set">
            <a href="#" id="monthlyChoise">
                <li class="subscription-item monthly-item">
                    <section class="subscription-body">
                        <h3 class="subscription-title">
                            ${localization['Monthly']}
                        </h3>
                        <div class="subscription-terms">
                            ${localization['<strong>{{price}}</strong><br>per month'].replace(/{{price}}/g, '$9.99')}
                        </div>
                        <strong class="advantages">${localization['3 DAYS FREE']}</strong>
                        <p class="description">${localization['{{price}}/month'].replace(/{{price}}/g, '$9.99')}</p>
                    </section>
                </li>
            </a>
            <a href="#" id="annuallyChoise">
                <li class="subscription-item annually-item">
                    <section class="subscription-body">
                        <div class="discount">
                            <div class="discount-title">${localization['-83%']}</div>
                        </div>
                        <h3 class="subscription-title">
                            ${localization['Annually']}
                        </h3>
                        <div class="subscription-terms">
                            ${localization['<strong>{{price}}</strong><br>per year'].replace(/{{price}}/g, '$19.99')}
                        </div>
                        <strong class="advantages">${localization['MOST POPULAR']}</strong>
                        <p class="description">${localization['{{price}}/month'].replace(/{{price}}/g, '$1.66')}</p>
                    </section>
                </li>
            </a>
        </ul>
    </section>
    <a href="#" class="continue" id="sumbit">${localization['Continue']}</a>
    <!-- <button class="continue">Continue </button> -->
    <p class="features-info">${localization['Auto-renewable. Cancel anytime.']}</p>
    <!-- </main> -->
    <footer class="footer">
        <ul class="footer-set">
            <li><a class="footer-link" href="#">${localization['Terms of Use']}</a></li>
            <li><a class="footer-link" href="#">${localization['Privacy Policy']}</a></li>
        </ul>
    </footer>
    <div class="indicator"></div>
</div>
    `
}

wrapper.innerHTML = createHTML(localization)


const monthlyChoise = document.getElementById("monthlyChoise");
const annuallyChoise = document.getElementById("annuallyChoise");
const sumbit = document.getElementById("sumbit");

const headerLink = document.getElementById("headerLink")
const unlimitedLink = document.getElementById("unlimitedLink");
const exportLink = document.getElementById("exportLink");
const noAdsLink = document.getElementById("noAdsLink");


addImg("img/icons/close.svg", "close", "close", headerLink)
addImg("img/unlimitedDocs.svg", "feature-img", "unlimited Docs", unlimitedLink)
addImg("img/export.svg", "feature-img", "export", exportLink)
addImg("img/noAds.svg", "feature-img", "no Ads", noAdsLink)


monthlyChoise.addEventListener("click", setMonthly)
annuallyChoise.addEventListener('click', setAnnually)
sumbit.addEventListener('click', sumbitChoise)

