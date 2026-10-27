export async function renderCatalog() {
  const container = document.getElementById('catalog-grid');
  if (!container) return;

  try {
    const response = await fetch('/json/catalog.json');
    if (!response.ok) throw new Error('Не удалось загрузить каталог');
    
    const products = await response.json();
    container.innerHTML = '';

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col';
      
      // Генерируем HTML для картинок
      const imagesHTML = product.images.map((img, index) => `
        <div class="snap-center shrink-0 w-full h-64 relative">
          <img src="${img}" alt="${product.name} - вид ${index + 1}" class="w-full h-full object-cover">
          <span class="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded font-mono">
            ${index + 1} / ${product.images.length}
          </span>
        </div>
      `).join('');

      // Формируем кнопки (проверяем, есть ли ссылка, чтобы не показывать пустую кнопку)
      const wbButton = product.wbLink ? `
        <a href="${product.wbLink}" target="_blank" class="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-lg font-bold transition font-kellyslab text-sm shadow-md hover:shadow-lg">
          <span>🟣</span> Wildberries
        </a>
      ` : '';

      const ozonButton = product.ozonLink ? `
        <a href="${product.ozonLink}" target="_blank" class="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-bold transition font-kellyslab text-sm shadow-md hover:shadow-lg">
          <span>🔵</span> OZON
        </a>
      ` : '';

      card.innerHTML = `
        <!-- КАРУСЕЛЬ -->
        <div class="relative">
          <div class="carousel-track flex overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden h-64">
            ${imagesHTML}
          </div>
          <button class="carousel-prev absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 text-gray-800 dark:text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-purple-100 hover:text-purple-700 shadow-md z-10">
            ❮
          </button>
          <button class="carousel-next absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 text-gray-800 dark:text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-purple-100 hover:text-purple-700 shadow-md z-10">
            ❯
          </button>
        </div>

        <!-- ИНФОРМАЦИЯ О ТОВАРЕ -->
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="font-kellyslab text-xl font-bold mb-2 dark:text-white line-clamp-2">${product.name}</h3>
          
          <!-- whitespace-pre-line сохраняет переносы строк \n из JSON -->
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow whitespace-pre-line">${product.description}</p>
          
          <!-- Блок цены и кнопок -->
          <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex flex-col gap-3">
            <span class="text-2xl font-bold text-lightbody dark:text-lightbody">${product.price}₽</span>
            
            <div class="flex flex-col sm:flex-row gap-2">
              ${wbButton}
              ${ozonButton}
            </div>
          </div>
        </div>
      `;
      
      container.appendChild(card);

      // ЛОГИКА КАРУСЕЛИ
      const track = card.querySelector('.carousel-track');
      const prevBtn = card.querySelector('.carousel-prev');
      const nextBtn = card.querySelector('.carousel-next');

      nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
      });

      prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
      });
    });

  } catch (error) {
    console.error('Ошибка рендера каталога:', error);
    container.innerHTML = '<p class="text-center text-red-500 col-span-full py-10 font-kellyslab text-xl">Ошибка 404: Данные не найдены в матрице.</p>';
  }
}