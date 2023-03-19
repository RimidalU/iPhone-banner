import isWebp from "./mudules/isWebp.js";

import enLocal from '../Localizations/en.json' assert { type: 'json' }
import esLocal from '../Localizations/es.json' assert { type: 'json' }
import frLocal from '../Localizations/fr.json' assert { type: 'json' }
import jaLocal from '../Localizations/ja.json' assert { type: 'json' }
import nlLocal from '../Localizations/nl.json' assert { type: 'json' }
import ruLocal from '../Localizations/ru.json' assert { type: 'json' }
import zhLocal from '../Localizations/zh.json' assert { type: 'json' }

isWebp()

let params = new URLSearchParams(location.search);
const requestedLanguage = params.get("lang")

const languages = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh']
const leftChoise = 'https://apple.com/'
const rightChoise = 'https://google.com/'
const wrapper = document.getElementById("body");

let userlanguage = navigator.language.substring(0, 2).toLowerCase()

if (requestedLanguage) {
    userlanguage = requestedLanguage
}

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



let userChoise = null

const sumbitChoise = () => {
    if (userChoise) {
        return location.href = userChoise
    }
}

const addImg = (src, className, alt, parent) => {
    const img = new Image();
    img.src = src
    img.setAttribute("class", className)
    img.setAttribute("alt", alt)
    parent.prepend(img);
}

const createHTML = (localization) => {
    return `<div class="wrapper">
    <header class="header">
        <a href="#" id="headerLink">
        </a>
        <a href="#" class="restore">${localization['Restore']}</a>
    </header>
    <!-- <main> -->
    <h1 id="mainTitle">${localization['Unlimited Access<br>to All Features']}</h1>
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
    <ul class="subscription-set">
        <li class="subscription-item monthly-item" id="monthlyChoise">
            <section class="subscription-body">
                <h3 class="subscription-title">
                    ${localization['Monthly']}
                </h3>
                <div class="subscription-terms">
                    ${localization['<strong>{{price}}</strong><br>per month'].replace(/{{price}}/g, '$9.99')}
                </div>
                <strong class="advantages" id="advantagesMonthly">${localization['3 DAYS FREE']}</strong>
                <p class="description">${localization['{{price}}/month'].replace(/{{price}}/g, '$9.99')}</p>
            </section>
        </li>
        <li class="subscription-item annually-item" id="annuallyChoise">
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
                <strong class="advantages" id="advantagesAnnually">${localization['MOST POPULAR']}</strong>
                <p class="description">${localization['{{price}}/month'].replace(/{{price}}/g, '$1.66')}</p>
            </section>
        </li>
    </ul>
    <a href="#" class="continue" id="sumbit">${localization['Continue']}</a>
    <!-- <button class="continue">Continue </button> -->
    <p class="features-info">${localization['Auto-renewable. Cancel anytime.']}</p>
    <!-- </main> -->
    <footer class="footer">
        <ul class="footer-set">
            <li><a class="footer-link" href="#">${localization['Terms of Use']}</a></li>
            <li><a class="footer-link" href="#">${localization['Privacy Policy']}</a></li>
        </ul>
        <div class="indicator"></div>
    </footer>
</div>`
}

wrapper.innerHTML = createHTML(localization)

const monthlyChoise = document.getElementById("monthlyChoise");
const annuallyChoise = document.getElementById("annuallyChoise");
const sumbit = document.getElementById("sumbit");

const headerLink = document.getElementById("headerLink")
const unlimitedLink = document.getElementById("unlimitedLink");
const exportLink = document.getElementById("exportLink");
const noAdsLink = document.getElementById("noAdsLink");
const mainTitle = document.getElementById("mainTitle");
const advantagesMonthly = document.getElementById("advantagesMonthly");
const advantagesAnnually = document.getElementById("advantagesAnnually");

addImg("img/icons/close.svg", "close", "close", headerLink)
addImg("img/unlimitedDocs.svg", "feature-img", "unlimited Docs", unlimitedLink)
addImg("img/export.svg", "feature-img", "export", exportLink)
addImg("img/noAds.svg", "feature-img", "no Ads", noAdsLink)

if(localization['Unlimited Access<br>to All Features'].length> 37){
    mainTitle.classList.add('reduceHeader')
}

if(localization['3 DAYS FREE'].length> 13){
    advantagesMonthly.classList.add('reduceAdvantages')
    advantagesAnnually.classList.add('reduceAdvantages')

    console.log(localization['3 DAYS FREE'].length);
}

const setMonthly = () => {
    userChoise = leftChoise
    sumbit.classList.add('active')
    annuallyChoise.classList.remove('active-item')
    monthlyChoise.classList.add('active-item')
}

const setAnnually = () => {
    userChoise = rightChoise
    sumbit.classList.add('active')
    monthlyChoise.classList.remove('active-item')
    annuallyChoise.classList.add('active-item')
}

monthlyChoise.addEventListener("click", setMonthly)
annuallyChoise.addEventListener('click', setAnnually)
sumbit.addEventListener('click', sumbitChoise)

