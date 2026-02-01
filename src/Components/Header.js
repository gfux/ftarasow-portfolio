import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { socialMediaUrl } from "../Details";
import ftarasowImage from '../assets/ftarasow.ru.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const location = useLocation();
  
  const { github, twitter, whatsapp } = socialMediaUrl;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: "/", label: "Домашняя" },
    { path: "/about", label: "О себе" },
    { path: "/technologies", label: "Увлечения" },
    { path: "/projects", label: "Проекты" },
    { path: "/contact", label: "Контакты" }
  ];

  // URL вашего сайта
  const portfolioUrl = "https://ftarasow.ru";

  // Генерация QR-кода
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(portfolioUrl)}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 md:px-8 max-width">
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            {/* QR-код - кликабельный для показа модального окна */}
            <div 
              className="relative cursor-pointer"
              onClick={() => setShowQRModal(true)}
              title="Нажмите, чтобы показать QR-код для сканирования"
            >
              <div className="relative">
                <img 
                  src={ftarasowImage} 
                  alt="QR Code" 
                  className="
                    w-12 h-12 object-contain 
                    transition-all duration-300 ease-out
                    transform-gpu 
                    shadow-lg rounded-lg
                    group-hover:scale-125 group-hover:z-50
                    group-hover:shadow-2xl
                    border-2 border-transparent group-hover:border-blue-500
                  "
                />
                
                {/* Индикатор кликабельности */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              </div>
            </div>
            
            {/* Текст логотипа */}
            <div className="hidden md:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Портфолио
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Разработчик</p>
            </div>
          </NavLink>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-1">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            {/* Социальные иконки для десктопа */}
            <div className="ml-6 flex items-center space-x-4 border-l pl-6 border-gray-200 dark:border-gray-700">
              {[
                { href: twitter, icon: "twitter", color: "hover:text-blue-400" },
                { href: whatsapp, icon: "whatsapp", color: "hover:text-green-500" },
                { href: github, icon: "github", color: "hover:text-gray-800 dark:hover:text-white" }
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  {social.icon === "twitter" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  )}
                  {social.icon === "whatsapp" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.86 9.86 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                    </svg>
                  )}
                  {social.icon === "github" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </nav>

          {/* Кнопка мобильного меню */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 top-0 h-0.5 w-6 bg-gray-800 dark:bg-white rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 top-2" : ""
              }`} />
              <span className={`absolute left-0 top-2 h-0.5 w-6 bg-gray-800 dark:bg-white rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`} />
              <span className={`absolute left-0 top-4 h-0.5 w-6 bg-gray-800 dark:bg-white rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 top-2" : ""
              }`} />
            </div>
          </button>
        </div>

        {/* Мобильное меню */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border border-gray-200 dark:border-gray-700">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 font-medium"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="ml-2">{item.label}</span>
                        {isActive && (
                          <span className="ml-auto w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            {/* Социальные иконки для мобильной версии */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-center space-x-6">
                {[
                  { href: twitter, icon: "twitter", label: "Twitter" },
                  { href: whatsapp, icon: "whatsapp", label: "WhatsApp" },
                  { href: github, icon: "github", label: "GitHub" }
                ].map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex flex-col items-center group"
                  >
                    <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-all duration-300 group-hover:scale-110">
                      {social.icon === "twitter" && (
                        <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      )}
                      {social.icon === "whatsapp" && (
                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.86 9.86 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                        </svg>
                      )}
                      {social.icon === "github" && (
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )}
                    </div>
                    <span className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно ТОЛЬКО с QR-кодом */}
      {showQRModal && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90"
          onClick={() => setShowQRModal(false)}
        >
          {/* Контейнер только для QR-кода */}
          <div 
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* QR-код */}
            <img 
              src={qrCodeUrl} 
              alt="QR Code для сканирования" 
              className="w-72 h-72 md:w-80 md:h-80 bg-white p-4 rounded-lg shadow-2xl"
            />
            
            {/* Кнопка закрытия (крестик) */}
            <button
              onClick={() => setShowQRModal(false)}
              className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors text-gray-800 font-bold text-lg"
              aria-label="Закрыть"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;