// components/FedorCalculator.jsx
import React, { useState } from 'react';
import qrCodeImage from '../assets/ftarasow.ru.png'; // Путь может отличаться, уточните его относительно расположения файла
import { evaluate } from 'mathjs';

const FedorCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // Безопасное вычисление
        const evalResult = evaluate(input);
        setResult(evalResult);
        setInput('');
      } catch (e) {
        setResult('Ошибка');
        setInput('');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto my-8 border border-gray-200">
      {/* Заголовок */}
      <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">🧮 Калькулятор Фёдора</h3>

     {/*QR-code*/}
<div className="absolute top-full mt-2 w-24 h-24 border border-gray-300 rounded bg-white shadow-lg">
  <img
    src={qrCodeImage} // ✅ Используем импортированную переменную
    alt="QR-код для калькулятора"
  />
</div>

      {/* Картинка */}
      <div className="flex justify-center mb-4">
        <img
          src="/assets/fedor-character.png" // Вставьте URL вашей картинки (или замените на локальный путь)
          alt="Фёдор — мультяшный персонаж"
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
        />
      </div>

      {/* Дисплей */}
      <div className="bg-gray-100 p-3 mb-4 rounded text-right text-xl font-mono overflow-x-auto">
        {input || '0'}
      </div>
      <div className="bg-green-50 p-3 mb-4 rounded text-right text-xl font-bold text-green-700">
        {result ? `= ${result}` : ''}
      </div>

      {/* Кнопки */}
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className={`p-3 text-xl font-bold rounded transition-all ${
              btn === '='
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : btn === 'C'
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {btn}
          </button>
        ))}
        <button
          onClick={() => handleButtonClick('C')}
          className="col-span-2 p-3 text-xl font-bold bg-red-500 text-white rounded hover:bg-red-600 transition-all"
        >
          C
        </button>
      </div>

      {/* Подпись */}
      <p className="mt-4 text-xs text-gray-500 text-center">
        © 2025 Фёдор Тарасов .| Мои "игрушки" .
      </p>
    </div>
  );
};

export default FedorCalculator;