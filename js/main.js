//Импорт хедера и футера
import { loadLayout } from './layout.js';

//запуск при старте (ждем загрузки!)
await loadLayout();

//1. Бургер-меню
function burgerMenu() {
    const menu = document.querySelector('#menu');
    const burger = document.querySelector('.burger');
    
    // ВАЖНО: проверяем существование элементов
    if (burger && menu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });
    }
}
burgerMenu();

//dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

//Переключение
const modeBtn = document.querySelector('#mode');
if (modeBtn) {
    modeBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    });
}