import { useState, useEffect, useRef } from "react";

export default function WeatherProjectCard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [locationMethod, setLocationMethod] = useState("");
  const [showEmbedCode, setShowEmbedCode] = useState(false);
  const codeRef = useRef(null);
  const YOUR_PORTFOLIO_URL = "https://ftarasow.ru";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        let coords = null;
        let cityName = "";
        let country = "";
        let method = "";

        try {
          const ipRes = await fetch("https://ipapi.co/json/");
          const ipData = await ipRes.json();
          
          if (ipData.latitude && ipData.longitude) {
            coords = {
              latitude: ipData.latitude,
              longitude: ipData.longitude
            };
            cityName = ipData.city || ipData.region || "Неизвестный город";
            country = ipData.country_name || ipData.country || "";
            method = ipData.org && ipData.org.includes("VPN") ? "VPN" : "IP";
          }
        } catch (ipErr) {
          console.log("ipapi.co не доступен");
        }

        if (!coords) {
          coords = { latitude: 55.7558, longitude: 37.6173 };
          cityName = "Москва";
          country = "Россия";
          method = "По умолчанию";
        }

        const displayLocation = country 
          ? `${cityName}, ${country}`
          : cityName;

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,pressure_msl,visibility,is_day&timezone=auto`
        );

        if (!weatherRes.ok) {
          throw new Error("Ошибка получения погоды");
        }

        const weatherData = await weatherRes.json();
        const current = weatherData.current;

        if (!current) {
          throw new Error("Нет данных о погоде");
        }

        const getWeatherCondition = (code, isDay) => {
          const conditions = {
            0: { text: "Ясно", emoji: isDay ? "☀️" : "🌙" },
            1: { text: "Преимущ. ясно", emoji: isDay ? "🌤️" : "🌙" },
            2: { text: "Переменная облачность", emoji: "⛅" },
            3: { text: "Пасмурно", emoji: "☁️" },
            45: { text: "Туман", emoji: "🌫️" },
            48: { text: "Туман", emoji: "🌫️" },
            51: { text: "Легкая морось", emoji: "🌧️" },
            53: { text: "Морось", emoji: "🌧️" },
            55: { text: "Сильная морось", emoji: "🌧️" },
            61: { text: "Небольшой дождь", emoji: "🌧️" },
            63: { text: "Умеренный дождь", emoji: "🌧️" },
            65: { text: "Сильный дождь", emoji: "⛈️" },
            71: { text: "Небольшой снег", emoji: "🌨️" },
            73: { text: "Умеренный снег", emoji: "🌨️" },
            75: { text: "Сильный снег", emoji: "❄️" },
            80: { text: "Небольшой ливень", emoji: "🌧️" },
            81: { text: "Умеренный ливень", emoji: "⛈️" },
            82: { text: "Сильный ливень", emoji: "⛈️" },
            95: { text: "Гроза", emoji: "⛈️" },
            96: { text: "Гроза с градом", emoji: "⛈️🧊" },
            99: { text: "Сильная гроза", emoji: "⛈️⚡" }
          };

          return conditions[code] || { text: "Ясно", emoji: "☀️" };
        };

        const weatherCondition = getWeatherCondition(current.weather_code, current.is_day);

        setWeather({
          city: displayLocation,
          temp: Math.round(current.temperature_2m),
          feels: Math.round(current.apparent_temperature),
          condition: weatherCondition.text,
          emoji: weatherCondition.emoji,
          humidity: current.relative_humidity_2m,
          wind: Math.round(current.wind_speed_10m),
          visibility: Math.round((current.visibility || 0) / 1000),
          pressure: Math.round(current.pressure_msl),
          isDay: current.is_day,
          lastUpdated: new Date().toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          })
        });

        setLocationMethod(method);
        setLoading(false);

      } catch (err) {
        console.error("Ошибка загрузки погоды:", err);
        
        setWeather({
          city: "Москва, Россия",
          temp: 1,
          feels: -1,
          condition: "Облачно",
          emoji: "☁️",
          humidity: 85,
          wind: 5,
          visibility: 10,
          pressure: 1029,
          isDay: true,
          lastUpdated: new Date().toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          })
        });
        
        setLocationMethod("Кэш");
        setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Генерируем код для вставки
  const generateEmbedCode = () => {
    const widgetId = 'ftarason-widget-' + Math.random().toString(36).substr(2, 9);
    
    return `<!-- FTarasow.ru Weather Widget -->
<div id="${widgetId}">
  <style>
    .ft-weather-widget {
      font-family: 'Segoe UI', system-ui, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 12px;
      padding: 20px;
      width: 100%;
      max-width: 320px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      position: relative;
      overflow: hidden;
    }
    .ft-weather-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 15px;
    }
    .ft-weather-location {
      font-size: 18px;
      font-weight: 600;
    }
    .ft-weather-temp {
      font-size: 42px;
      font-weight: 700;
    }
    .ft-weather-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin: 15px 0;
    }
    .ft-weather-detail {
      background: rgba(255,255,255,0.15);
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 14px;
    }
    .ft-weather-footer {
      text-align: center;
      font-size: 12px;
      opacity: 0.8;
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid rgba(255,255,255,0.2);
    }
    .ft-weather-link {
      color: #a5b4fc;
      text-decoration: none;
    }
    .ft-weather-link:hover {
      color: #ffffff;
      text-decoration: underline;
    }
  </style>
  
  <div class="ft-weather-widget">
    <div class="ft-weather-header">
      <div>
        <div class="ft-weather-location">📍 <span id="ft-location">Определяем...</span></div>
        <div style="font-size: 14px; opacity: 0.9;" id="ft-condition">Загрузка...</div>
      </div>
      <div class="ft-weather-temp" id="ft-weather-temp">--°</div>
    </div>
    
    <div class="ft-weather-details">
      <div class="ft-weather-detail">💧 <span id="ft-humidity">--%</span></div>
      <div class="ft-weather-detail">🌬️ <span id="ft-wind">-- км/ч</span></div>
      <div class="ft-weather-detail">👁️ <span id="ft-visibility">-- км</span></div>
      <div class="ft-weather-detail">📊 <span id="ft-pressure">-- гПа</span></div>
    </div>
    
    <div class="ft-weather-footer">
      <a href="${YOUR_PORTFOLIO_URL}" target="_blank" rel="nofollow noopener" class="ft-weather-link">
        🚀 Создал Фёдор Тарасов • Веб-разработчик
      </a>
      <div style="margin-top: 5px; font-size: 11px;">
        Бесплатный виджет погоды
      </div>
    </div>
  </div>

  <script>
    (function() {
      async function loadWeather() {
        try {
          const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6173&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,pressure_msl,visibility');
          const data = await response.json();
          const current = data.current;
          
          if (current) {
            document.getElementById('ft-weather-temp').textContent = Math.round(current.temperature_2m) + '°';
            document.getElementById('ft-humidity').textContent = Math.round(current.relative_humidity_2m) + '%';
            document.getElementById('ft-wind').textContent = Math.round(current.wind_speed_10m) + ' км/ч';
            document.getElementById('ft-visibility').textContent = Math.round(current.visibility / 1000) + ' км';
            document.getElementById('ft-pressure').textContent = Math.round(current.pressure_msl) + ' гПа';
          }
        } catch (error) {
          console.log('Не удалось загрузить погоду');
        }
      }
      
      loadWeather();
      setInterval(loadWeather, 30 * 60 * 1000);
    })();
  </script>
</div>`;
  };

  const copyToClipboard = () => {
    const code = generateEmbedCode();
    const textArea = document.createElement('textarea');
    textArea.value = code;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      const button = document.querySelector('.copy-button');
      if (button) {
        const originalText = button.textContent;
        button.textContent = '✅ Скопировано!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      }
    } catch (err) {
      alert('Не удалось скопировать код. Скопируйте вручную.');
    } finally {
      document.body.removeChild(textArea);
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg h-64 flex flex-col justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Определяем ваше местоположение...
        </p>
      </div>
    );
  }

  const locationIcon = locationMethod === "VPN" ? "🔒" : 
                      locationMethod === "Браузер" ? "📍" : 
                      locationMethod === "IP" ? "🌐" : "🏙️";

  return (
    <div className="w-full">
      {/* Основной виджет погоды */}
      <div className={`bg-gradient-to-br ${weather.isDay ? 'from-blue-50 to-cyan-100' : 'from-indigo-900 to-blue-800'} dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-6`}>
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">{locationIcon}</span>
              <h3 className={`font-bold text-lg ${weather.isDay ? 'text-gray-900' : 'text-white'} dark:text-white truncate`}>
                {weather.city}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{weather.emoji}</span>
              <span className={`text-sm ${weather.isDay ? 'text-gray-700' : 'text-gray-300'}`}>
                {weather.condition}
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Обновлено: {weather.lastUpdated}
            </p>
          </div>
          
          <div className="text-right">
            <div className={`text-4xl font-bold ${weather.isDay ? 'text-gray-900' : 'text-white'} dark:text-white`}>
              {weather.temp}°
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              ощущается {weather.feels}°
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className={`flex items-center gap-3 p-3 ${weather.isDay ? 'bg-white/80' : 'bg-gray-800/70'} rounded-lg`}>
            <span className="text-lg">💧</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Влажность</p>
              <p className={`font-semibold text-sm ${weather.isDay ? 'text-gray-900' : 'text-white'}`}>
                {weather.humidity}%
              </p>
            </div>
          </div>
          
          <div className={`flex items-center gap-3 p-3 ${weather.isDay ? 'bg-white/80' : 'bg-gray-800/70'} rounded-lg`}>
            <span className="text-lg">🌬️</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ветер</p>
              <p className={`font-semibold text-sm ${weather.isDay ? 'text-gray-900' : 'text-white'}`}>
                {weather.wind} км/ч
              </p>
            </div>
          </div>
          
          <div className={`flex items-center gap-3 p-3 ${weather.isDay ? 'bg-white/80' : 'bg-gray-800/70'} rounded-lg`}>
            <span className="text-lg">👁️</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Видимость</p>
              <p className={`font-semibold text-sm ${weather.isDay ? 'text-gray-900' : 'text-white'}`}>
                {weather.visibility} км
              </p>
            </div>
          </div>
          
          <div className={`flex items-center gap-3 p-3 ${weather.isDay ? 'bg-white/80' : 'bg-gray-800/70'} rounded-lg`}>
            <span className="text-lg">📊</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Давление</p>
              <p className={`font-semibold text-sm ${weather.isDay ? 'text-gray-900' : 'text-white'}`}>
                {weather.pressure} гПа
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowEmbedCode(!showEmbedCode)}
            className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition font-medium"
          >
            {showEmbedCode ? "Скрыть код для сайта" : "📦 Получить код для своего сайта"}
          </button>
        </div>
      </div>

      {/* Секция с кодом для вставки - ТОЛЬКО ЕСЛИ НАЖАТА КНОПКА */}
      {showEmbedCode && (
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg mb-6">
          {/* Код для копирования */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <button
                onClick={copyToClipboard}
                className="copy-button px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition font-medium"
              >
                📋 Копировать код
              </button>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <pre className="text-gray-200 p-4 overflow-x-auto text-sm font-mono max-h-80">
                <code ref={codeRef}>{generateEmbedCode()}</code>
              </pre>
            </div>
          </div>

          {/* Инструкция */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">📝Виджет автоматически покажет погоду в Вашей стране&nbsp;.</h4>
            <ol className="text-sm text-gray-600 dark:text-gray-300 space-y-2 list-decimal pl-5">
              <li>Скопируйте код выше.&nbsp;</li>
              <li>Вставьте в HTML вашего сайта&nbsp;.</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}