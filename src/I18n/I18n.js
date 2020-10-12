import Vue from 'vue'
import VueI18n from 'vue-i18n'

import tw from './tw.json'
import en from './en.json'

Vue.use(VueI18n)

function change(lang) {
    switch (lang) {
        case 'tw':
            return 'tw'
        case 'en':
            return 'en'
        default:
            localStorage.setItem('lang', 'tw')
            return 'tw'
    }
}

//取得localstorage的lang - key
const locale = change(localStorage.getItem('lang'))


const message = {
    en: en,
    tw: tw
}

const i18n = new VueI18n({
    message,
    //默認值
    locale
})

export default i18n