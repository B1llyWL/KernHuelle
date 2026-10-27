export async function renderVacancies() {
  const container = document.getElementById('vacancy-grid'); // Убедись, что id в HTML именно такой
  if (!container) return;

  try {
    const response = await fetch('/json/vacancy.json');
    if (!response.ok) throw new Error('Не удалось загрузить вакансии');
    
    const vacancies = await response.json();
    container.innerHTML = '';

    vacancies.forEach(vacancy => {
      const card = document.createElement('div');
      card.className = 'group bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 dark:border-gray-700';
      
      // Генерируем теги
      const tagsHTML = vacancy.tags.map(tag => 
        `<span class="inline-block bg-lightbody/20 dark:bg-darkblue/30 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full font-mono mr-2 mb-2">${tag}</span>`
      ).join('');

      card.innerHTML = `
        <div class="flex-grow">
          <h3 class="font-kellyslab text-2xl font-bold mb-2 dark:text-white">${vacancy.title}</h3>
          <p class="text-lightbody dark:text-blue-400 font-bold text-lg mb-4">${vacancy.salary}</p>
          
          <div class="mb-4">
            ${tagsHTML}
          </div>
          
          <p class="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line leading-relaxed">
            ${vacancy.description}
          </p>
        </div>

        <div class="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <a href="${vacancy.applyLink}" class="block w-full text-center bg-gray-900 dark:bg-lightbody text-white dark:text-gray-900 px-4 py-3 rounded-lg font-bold hover:opacity-90 transition font-kellyslab">
            Откликнуться.exe
          </a>
        </div>
      `;
      
      container.appendChild(card);
    });

  } catch (error) {
    console.error('Ошибка рендера вакансий:', error);
    container.innerHTML = '<p class="text-center text-red-500 col-span-full">Ошибка 404: Вакансии не найдены в матрице. Попробуйте позже.</p>';
  }
}