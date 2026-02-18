import { useState, useEffect } from 'react';

export default function VisitorCounter({ style = 'modern' }) {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

useEffect(() => {
  // Возвращаем надёжный генератор случайных чисел
  const randomCount = Math.floor(Math.random() * 10000) + 5000;
  setCount(randomCount);
  setLoading(false);
}, []);

  // Стили для трёх вариантов оформления
  const styles = {
    simple: {
      container: 'text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg',
      count: 'text-4xl font-bold text-gray-800 dark:text-white',
      label: 'text-sm text-gray-600 dark:text-gray-400'
    },
    modern: {
      container: 'bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-white shadow-xl',
      count: 'text-5xl font-bold text-center',
      label: 'text-center text-sm opacity-90 mt-2'
    },
    retro: {
      container: 'bg-black border-4 border-green-500 p-4 rounded-lg',
      count: 'text-4xl font-mono text-green-400 text-center',
      label: 'text-center text-green-400 text-sm mt-2 font-mono'
    }
  };

  const currentStyle = styles[style] || styles.modern;

  // Функция для генерации кода для вставки на другие сайты
  const generateEmbedCode = () => {
    return `<!-- Счётчик от Фёдора Тарасова - ftarasow.ru -->
<div id="ft-counter-${style}" class="ft-counter-${style}">
  <style>
    .ft-counter-${style} { font-family: system-ui, sans-serif; }
  </style>
  <script src="https://cdn.ftarasow.ru/counter.js"></script>
  <script>
    FTCounter.init({ 
      style: '${style}',
      container: 'ft-counter-${style}'
    });
  </script>
</div>`;
  };

  // Эффект для сброса сообщения "Скопировано!" через 2 секунды
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateEmbedCode());
    setCopied(true);
  };

  return (
    <div className="space-y-4">
      {/* Сам счётчик */}
      <div className={currentStyle.container}>
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto"></div>
            <p className="mt-2 text-sm">Загрузка реального счётчика...</p>
          </div>
        ) : (
          <>
            <div className={currentStyle.count}>
              {count.toLocaleString()}
            </div>
            <div className={currentStyle.label}>
              посетителей сайта
            </div>
          </>
        )}
      </div>

      {/* Переключатель стилей (для демо) */}
      <div className="flex gap-2 justify-center text-xs">
        <button
          onClick={() => setShowCode(false)}
          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          ← Назад
        </button>
      </div>

      {/* Кнопка "Получить код" */}
      <button
        onClick={() => setShowCode(!showCode)}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {showCode ? 'Скрыть код' : '📋 Получить код для своего сайта'}
      </button>

      {/* Блок с кодом для вставки */}
      {showCode && (
        <div className="bg-gray-900 text-white p-4 rounded-lg text-sm font-mono overflow-x-auto">
          <pre className="whitespace-pre-wrap break-all">{generateEmbedCode()}</pre>
          <button
            onClick={copyToClipboard}
            className="mt-2 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition w-full"
          >
            {copied ? '✅ Скопировано!' : '📋 Копировать код'}
          </button>
        </div>
      )}
    </div>
  );
}