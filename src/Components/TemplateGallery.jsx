import { useState } from 'react';
import { templates } from '../TemplateDataSimple';

export default function TemplateGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-8 rounded-3xl shadow-2xl my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
        🖼️ 24 бесплатных шаблона от html5up.net
      </h2>
      
      {/* Сетка 4x6 для 24 скриншотов */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {templates.map((template, index) => (
          <div
            key={index}
            onClick={() => setSelected(template)}
            className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            <div className="bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-700 hover:border-purple-500">
              <img
                src={`/screenshots/${template.image}`}
                alt={template.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-center">
                <p className="text-white text-sm truncate">{template.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-gray-800 rounded-2xl p-6 md:p-8 max-w-2xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Заголовок */}
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {selected.name}
              </h3>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            {/* Описание */}
            <p className="text-gray-300 mb-6">
              {selected.description}
            </p>

            {/* Технологии */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">
                Технологии:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selected.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={selected.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition text-center font-medium"
              >
                👁️ Смотреть демо
              </a>
              <a
                href={selected.zip}
                download
                className="flex-1 bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition font-medium text-center"
              >
                📥 Скачать ZIP
              </a>
            </div>

            {/* Авторство */}
            <p className="text-center text-xs text-gray-500 mt-6">
              Шаблон предоставлен <a href="https://html5up.net" target="_blank" rel="noreferrer" className="underline hover:text-gray-400">HTML5 UP</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}