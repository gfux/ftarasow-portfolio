import React, { useState, useEffect } from "react";
import qrCodeImage from '../assets/ftarasow.ru.png';
import { evaluate } from 'mathjs';

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  const [showCalculator, setShowCalculator] = useState(false);

  // Определяем, является ли проект калькулятором
  const isCalculatorProject = title === "Интерактивный калькулятор";

  return (
    <article
      className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900"
      onMouseEnter={() => isCalculatorProject && setShowCalculator(true)}
      onMouseLeave={() => isCalculatorProject && setShowCalculator(false)}
    >
      {showCalculator ? (
        // ✅ Если это калькулятор и showCalculator = true — отображаем его
        <CalculatorView image={image} />
      ) : (
        // ✅ Иначе — обычный проект
        <>
          <img src={image} alt="" loading="lazy" />
          <div className="dark:bg-dark-card p-4">
            <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{title}</h1>
            <p className="text-content pt-4 font-light">{description}</p>
            <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
              Tech Stack : <span className="font-light">{techstack}</span>
            </h3>
            <div className="flex justify-between items-center mt-5">
              <div className="flex items-center">
                <svg
                  className="stroke-dark-heading dark:stroke-white inline-block min-w-fit"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2867 8.7133C10.6041 8.031 9.67846 7.64771 8.71334 7.64771C7.74821 7.64771 6.82259 8.031 6.14 8.7133L3.56584 11.2866C2.88324 11.9692 2.49976 12.895 2.49976 13.8604C2.49976 14.8257 2.88324 15.7515 3.56584 16.4341C4.24844 17.1167 5.17424 17.5002 6.13959 17.5002C7.10493 17.5002 8.03074 17.1167 8.71334 16.4341L10 15.1475"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.71338 11.2867C9.39597 11.969 10.3216 12.3523 11.2867 12.3523C12.2518 12.3523 13.1775 11.969 13.86 11.2867L16.4342 8.71334C17.1168 8.03074 17.5003 7.10493 17.5003 6.13959C17.5003 5.17424 17.1168 4.24844 16.4342 3.56584C15.7516 2.88324 14.8258 2.49976 13.8605 2.49976C12.8951 2.49976 11.9693 2.88324 11.2867 3.56584L10 4.8525"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a
                  href={previewLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline pl-2 font-light dark:text-white"
                >
                  Live Preview
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  className="dark:fill-light-heading fill-dark-heading inline-block min-w-fit"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z"
                  />
                </svg>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline pl-2 font-light dark:text-white"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </article>
  );
}

// ✅ Обновлённый компонент: именной калькулятор с QR, звуком, easter egg и всеми фишками
  const CalculatorView = ({ image }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Загружаем историю из localStorage при монтировании
  useEffect(() => {
    const savedHistory = localStorage.getItem('fedorCalculatorHistory');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.warn('Невозможно загрузить историю калькулятора');
      }
    }
  }, []);

  // Сохраняем историю в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('fedorCalculatorHistory', JSON.stringify(history));
  }, [history]);

  // Приветствие при первом открытии
  useEffect(() => {
    const audio = new Audio('/sounds/fedor-hello.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {}); // Игнорируем, если браузер блокирует автовоспроизведение
  }, []);

  // Сброс состояния "Скопировано!" через 2 секунды
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleButtonClick = (value) => {
    if (value === '=') {
      // Easter Egg: FT
      if (input === 'FT') {
        setShowEasterEgg(true);
        setInput('');
        return;
      }

      try {
        let expr = input.trim();

        // ✅ Проверка: если это просто число — выводим его
        if (/^-?\d*\.?\d+$/.test(expr)) {
          const numResult = Number(expr);
          setResult(numResult);
          setHistory(prev => [...prev, { expr, result: numResult }]);
          setInput('');
          return;
        }

        // Проверка на корректность
        if (/[+\-*/]$/.test(expr)) {
          setResult('Ошибка');
          setInput('');
          return;
        }
        if (/^[*/]/.test(expr)) {
          setResult('Ошибка');
          setInput('');
          return;
        }
        if (!/^[0-9+\-*/.() ]+$/.test(expr)) {
          setResult('Ошибка');
          setInput('');
          return;
        }

        // Безопасное вычисление
  const calculated = evaluate(expr);
        if (isNaN(calculated) || !isFinite(calculated)) {
          setResult('Ошибка');
        } else {
          setResult(calculated);
          // Добавляем в историю
          setHistory(prev => [...prev, { expr, result: calculated }]);
        }
        setInput('');
      } catch (e) {
        setResult('Ошибка');
        setInput('');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
      setShowEasterEgg(false);
    } else if (value === '←') {
      setInput((prev) => prev.slice(0, -1));
    } else {
      // Не допускаем двойные операторы
      if (input === '') {
        if (['+', '*', '/'].includes(value)) return;
      }
      if (/[+\-*/]$/.test(input) && ['+', '-', '*', '/'].includes(value)) return;

      setInput((prev) => prev + value);
    }
  };

  // Функция копирования результата
  const copyResult = () => {
    if (result !== '' && result !== 'Ошибка') {
      navigator.clipboard.writeText(result);
      setCopied(true);
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="p-4 bg-white">
      {/* Имя и QR-код */}
      <div className="flex flex-col items-center mb-4 relative group">
        <img
          src={image}
          alt="Фёдор — мультяшный персонаж"
          className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
          onMouseEnter={() => setShowQR(true)}
          onMouseLeave={() => setShowQR(false)}
        />
        {showQR && (
        <img
          src={qrCodeImage} // ✅ Используем импортированную переменную
          alt="QR: ftarasow.ru"
          className="absolute top-full mt-2 w-24 h-24 border border-gray-300 rounded bg-white shadow-lg"
  />
)}
        <h3 className="text-lg font-bold text-blue-700 mt-2">Фёдор Тарасов</h3>
        <p className="text-sm text-gray-600">Web Developer</p>
      </div>

      {/* Easter Egg */}
      {showEasterEgg && (
        <div className="text-center text-xs bg-yellow-100 p-2 rounded mb-2 animate-pulse">
          Привет, Фёдор! 👋 Это твой калькулятор.
        </div>
      )}

      {/* Дисплей */}
      <div className="bg-gray-100 p-3 mb-2 rounded text-right text-lg font-mono">
        {input || '0'}
      </div>

      {/* ✅ Результат с кнопкой "Копировать" (теперь всегда появляется при результате) */}
      {result !== '' && (
        <div className="flex items-center justify-end bg-green-50 p-3 mb-4 rounded">
          <span className="text-lg font-bold text-green-700 dark:text-green-400">
            = {result}
          </span>
          {result !== 'Ошибка' && (
            <button
              onClick={copyResult}
              className="ml-3 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 dark:text-blue-300 dark:bg-blue-900 dark:hover:bg-blue-800 px-2 py-1 rounded transition-all"
            >
              Копировать
            </button>
          )}
        </div>
      )}

      {/* Отображение "Скопировано!" */}
      {copied && (
        <div className="text-center text-sm text-green-600 font-medium mb-2 animate-pulse">
          Скопировано!
        </div>
      )}

      {/* Кнопки калькулятора */}
      <div className="grid grid-cols-5 gap-2 mb-4">
        {['7', '8', '9', '/', 'C', '4', '5', '6', '*', '←', '1', '2', '3', '-', '=', '0', '.', '+'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className={`p-2 text-lg font-bold rounded transition-all ${
              btn === '='
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : btn === 'C'
                ? 'bg-red-500 text-white hover:bg-red-600'
                : btn === '←'
                ? 'bg-gray-300 hover:bg-gray-400 text-dark-heading dark:text-light-heading'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* История */}
      {history.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              История вычислений — {history.length} шт.
            </h4>
            <button
              onClick={clearHistory}
              className="text-xs text-red-500 hover:text-red-700 underline"
            >
              Очистить
            </button>
          </div>
          <div className="max-h-32 overflow-y-auto space-y-1 text-sm">
            {history.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-2 rounded text-gray-800 dark:text-gray-200"
              >
                <span className="font-mono">{item.expr}</span>
                <span className="mx-1">→</span>
                <span className="font-bold text-green-600 dark:text-green-400">{item.result}</span>
              </div>
            ))}
          </div>
          <small className="text-xs text-gray-500 block mt-2">Автор: Фёдор Тарасов</small>
        </div>
      )}

      {/* Контакты */}
      <div className="flex justify-center space-x-4 mt-4 text-gray-600">
        <a href="https://github.com/gfux" target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:text-black">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
        <a href="mailto:ft-35@mail.ru" target="_blank" rel="noopener noreferrer" title="Email" className="hover:text-black">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </a>
      </div>

      {/* Подпись */}
      <p className="mt-4 text-xs text-gray-500 text-center border-t pt-2">
        © 2025 Фёдор Тарасов | Москва | <a href="https://ftarasow.ru" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">ftarasow.ru</a><br />
        Собрано: 21 ноября 2025 г.
      </p>
    </div>
  );
};

export default Project;