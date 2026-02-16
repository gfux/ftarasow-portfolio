import { useState } from 'react';
import { templateCategories } from '../TemplateData';

export default function TemplateMatrix() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-8 rounded-3xl shadow-2xl my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
        🏗️ Готовые макеты сайтов
      </h2>
      
      {/* Сетка 2x3 для категорий */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {templateCategories.map((category, catIndex) => (
          <div
            key={category.id}
            className={`
              relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-3 md:p-4
              border-2 border-gray-700 hover:border-purple-500 transition-all duration-300
              ${expandedCategory === catIndex ? 'scale-105 z-10 shadow-2xl border-purple-500' : ''}
            `}
            onMouseEnter={() => setExpandedCategory(catIndex)}
            onMouseLeave={() => setExpandedCategory(null)}
          >
            {/* Заголовок категории */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-sm md:text-base font-bold text-white">
                {category.title}
              </h3>
            </div>

            {/* Сетка 2x2 с шаблонами */}
            <div className="grid grid-cols-2 gap-1 md:gap-2">
              {category.templates.map((template, tempIndex) => (
                <div
                  key={tempIndex}
                  onClick={() => setSelectedTemplate({
                    category: category.title,
                    ...template
                  })}
                  className={`
                    relative group cursor-pointer
                    bg-gradient-to-br ${category.color}
                    rounded-lg p-2 aspect-square
                    hover:scale-110 hover:z-20 transition-all duration-300
                    shadow-lg hover:shadow-2xl
                  `}
                >
                  {/* Иконка шаблона */}
                  <div className="text-2xl md:text-3xl mb-1 text-center">
                    {template.icon}
                  </div>
                  
                  {/* Название (появляется при наведении) */}
                  <div className="absolute inset-0 bg-black/80 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-[10px] md:text-xs font-bold text-center px-1">
                      {template.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Индикатор активности */}
            {expandedCategory === catIndex && (
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* Модальное окно для выбранного шаблона */}
      {selectedTemplate && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedTemplate(null)}
        >
          <div
            className="bg-gray-800 rounded-2xl p-6 md:p-8 max-w-2xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Заголовок */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-sm text-purple-400">
                  {selectedTemplate.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                  {selectedTemplate.icon} {selectedTemplate.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            {/* Описание */}
            <p className="text-gray-300 mb-6">
              {selectedTemplate.description}
            </p>

            {/* Технологии */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">
                Технологии:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedTemplate.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

{/* ✅ КНОПКИ: предпросмотр и скачивание ZIP */}
<div className="flex flex-col sm:flex-row gap-3">
  <a
    href={selectedTemplate.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition text-center font-medium"
  >
    👁️ Смотреть демо
  </a>
  <a
    href={selectedTemplate.zip}
    download
    className="flex-1 bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition font-medium text-center"
  >
    📥 Скачать ZIP
  </a>
</div>

            {/* Авторство */}
            <p className="text-center text-xs text-gray-500 mt-6">
              Шаблон предоставлен <a href="https://html5up.net" target="_blank" rel="noreferrer" className="underline hover:text-gray-400">HTML5 UP</a> • Бесплатно для любых целей
            </p>
          </div>
        </div>
      )}
    </div>
  );
}