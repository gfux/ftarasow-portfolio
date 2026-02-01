import React, { useState, useEffect, useRef, useMemo } from "react"
import { X, Send, Brain, GraduationCap, ExternalLink, BookOpen, Video, FileText, Code, Briefcase } from "lucide-react"

export function ChatMessenger() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: `🎓 **Привет! Я бот-наставник по веб-разработке.**

Я не просто болтаю — я предоставляю **реальные учебные ресурсы**:

📚 **Бесплатные книги и курсы**
🎥 **Проверенные видеоуроки**
⚡ **Практические задания**
🔗 **Официальную документацию**
💼 **Карьерные рекомендации**

**Спросите меня о:**
• Конкретной технологии (HTML, CSS, JS, React)
• Том, с чего начать
• Лучших бесплатных ресурсах
• Решении проблем в коде
• Построении карьеры

Что вы хотите изучить? 👨‍💻`,
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  // ОБНОВЛЕННАЯ база знаний с реальными ресурсами
  const knowledgeBase = useMemo(() => ({
    // ========== ОСНОВЫ И СТАРТ ==========
    basics: {
      patterns: [/основы/i, /начать/i, /новичок/i, /с нуля/i, /старт/i, /как начать/i],
      resources: [
        {
          type: "course",
          title: "The Odin Project - Полный путь",
          description: "Бесплатный курс от нуля до найма. Лучший выбор для начинающих.",
          url: "https://www.theodinproject.com/",
          icon: <GraduationCap size={14} />,
          lang: "en"
        },
        {
          type: "course",
          title: "freeCodeCamp - Responsive Web Design",
          description: "Сертификация по основам HTML и CSS с практикой в браузере.",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
          icon: <Code size={14} />,
          lang: "en"
        },
        {
          type: "video",
          title: "Веб-разработка с нуля - Владилен Минин",
          description: "Полный плейлист для начинающих на русском.",
          url: "https://www.youtube.com/playlist?list=PL0lO_mIqDDFUvYVbleO4wJX6QqJBi4z1f",
          icon: <Video size={14} />,
          lang: "ru"
        },
        {
          type: "book",
          title: "HTML & CSS: Design and Build Websites",
          description: "Визуальное руководство для новичков (можно найти на libgen).",
          url: "http://libgen.rs/",
          icon: <BookOpen size={14} />,
          lang: "en"
        },
        {
          type: "practice",
          title: "HTML Academy",
          description: "Интерактивные тренажеры по HTML/CSS (первые главы бесплатны).",
          url: "https://htmlacademy.ru/courses/basic-html-css",
          icon: <FileText size={14} />,
          lang: "ru"
        }
      ]
    },

    // ========== JAVASCRIPT ==========
    javascript: {
      patterns: [/javascript/i, /js/i, /ecmascript/i, /джаваскрипт/i],
      resources: [
        {
          type: "book",
          title: "Современный учебник JavaScript",
          description: "Лучший бесплатный учебник на русском языке от Ильи Кантора.",
          url: "https://learn.javascript.ru/",
          icon: <BookOpen size={14} />,
          lang: "ru"
        },
        {
          type: "course",
          title: "JavaScript Algorithms and Data Structures",
          description: "Сертификация freeCodeCamp с 300+ заданиями.",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
          icon: <Code size={14} />,
          lang: "en"
        },
        {
          type: "video",
          title: "JavaScript - весь курс за 6 часов",
          description: "Концентрированный курс от WebDev с нуля.",
          url: "https://youtu.be/CxgOKJh4zWE",
          icon: <Video size={14} />,
          lang: "ru"
        },
        {
          type: "book",
          title: "Eloquent JavaScript (3rd edition)",
          description: "Классика, доступна бесплатно онлайн с интерактивными примерами.",
          url: "https://eloquentjavascript.net/",
          icon: <BookOpen size={14} />,
          lang: "en"
        },
        {
          type: "practice",
          title: "Codewars - JavaScript Katas",
          description: "Задачи для практики от простых до сложных.",
          url: "https://www.codewars.com/?language=javascript",
          icon: <FileText size={14} />,
          lang: "en"
        },
        {
          type: "docs",
          title: "MDN JavaScript Guide",
          description: "Официальная документация с примерами.",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
          icon: <FileText size={14} />,
          lang: "en"
        }
      ]
    },

    // ========== REACT ==========
    react: {
      patterns: [/react/i, /реакт/i, /хук/i, /компонент/i],
      resources: [
        {
          type: "docs",
          title: "Официальная документация React (beta)",
          description: "Новейшая интерактивная документация с песочницей.",
          url: "https://beta.reactjs.org/",
          icon: <FileText size={14} />,
          lang: "en"
        },
        {
          type: "video",
          title: "React JS курс для начинающих - Владилен Минин",
          description: "Полный практический курс на русском.",
          url: "https://www.youtube.com/playlist?list=PL0lO_mIqDDFUev1gp9yEwmwcy8SicqKbt",
          icon: <Video size={14} />,
          lang: "ru"
        },
        {
          type: "course",
          title: "React - The Net Ninja",
          description: "Понятный пошаговый курс на английском.",
          url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
          icon: <Video size={14} />,
          lang: "en"
        },
        {
          type: "book",
          title: "The Road to React",
          description: "Актуальное руководство, автор предоставляет бесплатный PDF.",
          url: "https://www.robinwieruch.de/the-road-to-react-book/",
          icon: <BookOpen size={14} />,
          lang: "en"
        },
        {
          type: "practice",
          title: "React на FreeCodeCamp",
          description: "Интерактивные задания прямо в браузере.",
          url: "https://www.freecodecamp.org/learn/front-end-development-libraries/#react",
          icon: <Code size={14} />,
          lang: "en"
        }
      ]
    },

    // ========== HTML/CSS ==========
    htmlcss: {
      patterns: [/html/i, /css/i, /в[ёе]рстк/i, /верста/i],
      resources: [
        {
          type: "course",
          title: "HTML & CSS - FreeCodeCamp",
          description: "Интерактивный курс с проектами.",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
          icon: <Code size={14} />,
          lang: "en"
        },
        {
          type: "video",
          title: "HTML & CSS за 5 часов - WebDev с нуля",
          description: "Полный курс по верстке на русском.",
          url: "https://youtu.be/DOEtVdkKwcU",
          icon: <Video size={14} />,
          lang: "ru"
        },
        {
          type: "practice",
          title: "Frontend Mentor",
          description: "Реальные проекты для портфолио с макетами.",
          url: "https://www.frontendmentor.io/",
          icon: <FileText size={14} />,
          lang: "en"
        },
        {
          type: "docs",
          title: "MDN HTML & CSS",
          description: "Полная документация с примерами.",
          url: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
          icon: <FileText size={14} />,
          lang: "en"
        },
        {
          type: "book",
          title: "Изучаем HTML, XHTML и CSS (Head First)",
          description: "Отличная книга для визуалов (ищите на libgen).",
          url: "http://libgen.rs/",
          icon: <BookOpen size={14} />,
          lang: "ru"
        }
      ]
    },

    // ========== КАРЬЕРА ==========
    career: {
      patterns: [/карьер/i, /работ/i, /собеседован/i, /резюме/i, /портфолио/i, /джуниор/i],
      resources: [
        {
          type: "practice",
          title: "LeetCode (Easy задачи)",
          description: "Подготовка к техническим собеседованиям.",
          url: "https://leetcode.com/problemset/all/?difficulty=EASY",
          icon: <FileText size={14} />,
          lang: "en"
        },
        {
          type: "course",
          title: "Как устроиться джуниором - Ulbi TV",
          description: "Практические советы по поиску первой работы.",
          url: "https://youtu.be/8pIZ1JK7rQ0",
          icon: <Video size={14} />,
          lang: "ru"
        },
        {
          type: "guide",
          title: "Frontend Roadmap 2024",
          description: "Актуальная карта развития фронтенд-разработчика.",
          url: "https://roadmap.sh/frontend",
          icon: <Briefcase size={14} />,
          lang: "en"
        },
        {
          type: "practice",
          title: "GitHub профиль для джуниора",
          description: "Как оформить GitHub для поиска работы.",
          url: "https://youtu.be/bVti_qfQ_fc",
          icon: <FileText size={14} />,
          lang: "ru"
        }
      ]
    },

    // ========== ПРОБЛЕМЫ И ЗАДАЧИ ==========
    problems: {
      patterns: [/задач/i, /проблем/i, /ошибк/i, /баг/i, /не работает/i, /помоги с кодом/i],
      resources: [
        {
          type: "docs",
          title: "Stack Overflow",
          description: "Задайте вопрос сообществу разработчиков.",
          url: "https://stackoverflow.com/questions/tagged/javascript",
          icon: <FileText size={14} />,
          lang: "en"
        },
        {
          type: "docs",
          title: "Russian Stack Overflow",
          description: "Русскоязычное сообщество для вопросов.",
          url: "https://ru.stackoverflow.com/",
          icon: <FileText size={14} />,
          lang: "ru"
        },
        {
          type: "guide",
          title: "Как правильно задавать вопросы о коде",
          description: "Руководство для получения быстрых ответов.",
          url: "https://ru.stackoverflow.com/help/how-to-ask",
          icon: <BookOpen size={14} />,
          lang: "ru"
        },
        {
          type: "tool",
          title: "CodeSandbox",
          description: "Создайте минимальный пример проблемы для демонстрации.",
          url: "https://codesandbox.io/",
          icon: <Code size={14} />,
          lang: "en"
        }
      ]
    },

    // ========== ОБЩИЕ РЕСУРСЫ ==========
    resources: {
      patterns: [/ресурс/i, /бесплатн/i, /курс/i, /книг/i, /материал/i, /учебник/i],
      resources: [
        {
          type: "collection",
          title: "Free Programming Books на GitHub",
          description: "Огромная коллекция бесплатных книг по всем языкам.",
          url: "https://github.com/EbookFoundation/free-programming-books",
          icon: <BookOpen size={14} />,
          lang: "multi"
        },
        {
          type: "collection",
          title: "Awesome Learning Resources",
          description: "Кураторская подборка лучших ресурсов для обучения.",
          url: "https://github.com/lauragift21/awesome-learning-resources",
          icon: <GraduationCap size={14} />,
          lang: "en"
        },
        {
          type: "platform",
          title: "Scrimba (бесплатные курсы)",
          description: "Интерактивные курсы с возможностью редактирования кода.",
          url: "https://scrimba.com/allcourses",
          icon: <Video size={14} />,
          lang: "en"
        },
        {
          type: "platform",
          title: "Hexlet (часть курсов бесплатно)",
          description: "Русскоязычная платформа с практикой.",
          url: "https://ru.hexlet.io/courses",
          icon: <Code size={14} />,
          lang: "ru"
        }
      ]
    }
  }), [])

  // Функция для определения категории по вопросу
  const findCategory = (question) => {
    const q = question.toLowerCase().trim()
    
    // Проверяем точные совпадения по ключевым словам
    const keywordMap = {
      'html': 'htmlcss',
      'css': 'htmlcss',
      'верстк': 'htmlcss',
      'javascript': 'javascript',
      'js': 'javascript',
      'react': 'react',
      'карьер': 'career',
      'работ': 'career',
      'собеседован': 'career',
      'резюме': 'career',
      'проблем': 'problems',
      'ошибк': 'problems',
      'баг': 'problems',
      'помоги': 'problems',
      'ресурс': 'resources',
      'курс': 'resources',
      'книг': 'resources'
    }
    
    // Проверяем точные ключевые слова
    for (const [keyword, category] of Object.entries(keywordMap)) {
      if (q.includes(keyword)) {
        return category
      }
    }
    
    // Проверяем паттерны из базы знаний
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.patterns.some(pattern => pattern.test(q))) {
        return category
      }
    }
    
    // Если ничего не найдено, возвращаем basics
    return 'basics'
  }

  // Форматирование ответа с ресурсами
  const formatResponse = (category) => {
    const resources = knowledgeBase[category]?.resources || knowledgeBase.basics.resources
    const categoryNames = {
      'basics': 'основам веб-разработки',
      'javascript': 'JavaScript',
      'react': 'React',
      'htmlcss': 'HTML и CSS (верстке)',
      'career': 'карьере в IT',
      'problems': 'решению проблем',
      'resources': 'учебным ресурсам'
    }
    
    let response = `🎯 **Вот лучшие ресурсы по ${categoryNames[category] || 'веб-разработке'}:**\n\n`
    
    // Группируем ресурсы по типам
    const grouped = {}
    resources.forEach(resource => {
      if (!grouped[resource.type]) grouped[resource.type] = []
      grouped[resource.type].push(resource)
    })
    
    // Добавляем ресурсы по группам
    const typeTitles = {
      'course': '📚 **Структурированные курсы:**',
      'video': '🎥 **Видеоуроки от проверенных авторов:**',
      'book': '📖 **Книги (бесплатные):**',
      'docs': '📄 **Официальная документация:**',
      'practice': '💻 **Практика и задания:**',
      'guide': '🗺️ **Гайды и roadmaps:**',
      'collection': '📚 **Коллекции ресурсов:**',
      'platform': '🏫 **Платформы для обучения:**',
      'tool': '🛠️ **Инструменты:**'
    }
    
    Object.entries(grouped).forEach(([type, items]) => {
      response += `\n${typeTitles[type] || '📌 **Ресурсы:**'}\n`
      items.forEach((item, index) => {
        const langIcon = item.lang === 'ru' ? '🇷🇺' : item.lang === 'en' ? '🇬🇧' : '🌍'
        response += `\n${index + 1}. **${item.title}** ${langIcon}\n`
        response += `${item.description}\n`
        response += `🔗 [Открыть](${item.url})\n`
      })
    })
    
    response += `\n---\n`
    response += `💡 **Совет:** Начните с 1-2 ресурсов и практикуйтесь ежедневно.\n`
    response += `📝 **Задание:** После изучения создайте небольшой проект для закрепления.\n`
    response += `\n🔍 **Нужны другие ресурсы?** Спросите конкретнее!`
    
    return response
  }

  // Автопрокрутка
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      const category = findCategory(userMessage.text)
      const response = formatResponse(category)
      
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 600 + Math.random() * 300)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Быстрые вопросы
  const quickQuestions = [
    "HTML/CSS с нуля",
    "Изучить JavaScript",
    "Курсы по React",
    "Бесплатные книги",
    "Портфолио для работы",
    "Решение проблем"
  ]

  // Функция для форматирования сообщений с ссылками
  const formatMessage = (text) => {
    const parts = text.split('\n')
    return parts.map((line, idx) => {
      // Обработка ссылок в формате [текст](URL)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
      const elements = []
      let lastIndex = 0
      let match
      
      while ((match = linkRegex.exec(line)) !== null) {
        // Текст до ссылки
        if (match.index > lastIndex) {
          elements.push(line.substring(lastIndex, match.index))
        }
        
        // Сама ссылка
        elements.push(
          <a 
            key={`${idx}-${match.index}`}
            href={match[2]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center gap-1"
          >
            {match[1]} <ExternalLink size={10} />
          </a>
        )
        lastIndex = match.index + match[0].length
      }
      
      // Остаток строки
      if (lastIndex < line.length) {
        elements.push(line.substring(lastIndex))
      }
      
      // Если нет ссылок, возвращаем просто строку
      const content = elements.length > 0 ? elements : [line]
      
      const isBold = line.trim().startsWith('**') && line.trim().endsWith('**')
      const isHeader = line.includes('---')
      const startsWithThreeSpaces = /^ {3}/.test(line)
      const startsWithNumber = /^\d+\./.test(line.trim())
      
      return (
        <div 
          key={idx} 
          className={`
            ${isBold ? "font-bold text-gray-800 dark:text-gray-100 my-2" : ""}
            ${isHeader ? "border-t border-gray-300 dark:border-gray-600 my-3 pt-2" : ""}
            ${line.startsWith('💡') || line.startsWith('📝') || line.startsWith('🔍') ? "text-sm italic text-gray-600 dark:text-gray-400 mt-2" : ""}
            ${line.startsWith('🎯') ? "text-lg font-bold text-purple-600 dark:text-purple-400 mb-3" : ""}
            ${startsWithNumber ? "ml-2 pl-2 border-l-2 border-purple-200 dark:border-purple-800" : ""}
            ${startsWithThreeSpaces ? "ml-6 text-sm text-gray-700 dark:text-gray-300" : ""}
          `}
        >
          {content}
        </div>
      )
    })
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-slide-in-from-bottom">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-lg">
                <GraduationCap size={16} className="text-yellow-300" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Бот-наставник</h3>
                <p className="text-xs opacity-90">Реальные ресурсы для обучения</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/20 p-1 rounded transition"
              title="Закрыть"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} fade-in`}
              >
                <div className={`max-w-[90%] px-3 py-2 rounded-lg text-sm whitespace-pre-line ${
                  message.sender === "user" 
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-none shadow" 
                    : "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 border border-purple-100 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-sm"
                }`}>
                  <div className="text-xs leading-relaxed">
                    {formatMessage(message.text)}
                  </div>
                  {message.sender === "bot" && message.text.includes('http') && (
                    <div className="mt-2 pt-2 border-t border-purple-200 dark:border-gray-600">
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">
                        ⚠️ Все ссылки открываются в новой вкладке. Уважайте права авторов.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 border border-purple-100 dark:border-gray-600 rounded-bl-none">
                  <div className="flex items-center gap-2">
                    <Brain size={12} className="text-purple-500 animate-pulse" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Ищу лучшие ресурсы...</span>
                    <div className="flex gap-0.5">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Быстрые вопросы */}
          {messages.length <= 2 && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-2 bg-gray-50/50 dark:bg-gray-900/50">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 px-1">Быстрый старт:</p>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInputValue(question)
                      setTimeout(() => {
                        document.querySelector('input')?.focus()
                      }, 30)
                    }}
                    className="text-xs bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:scale-105 hover:border-purple-300 dark:hover:border-purple-700 flex items-center gap-1"
                  >
                    {question === "HTML/CSS с нуля" && <FileText size={10} />}
                    {question === "Изучить JavaScript" && <Code size={10} />}
                    {question === "Курсы по React" && <Brain size={10} />}
                    {question === "Бесплатные книги" && <BookOpen size={10} />}
                    {question === "Портфолио для работы" && <Briefcase size={10} />}
                    {question === "Решение проблем" && <FileText size={10} />}
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-300 dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-900">
            <div className="flex gap-1.5">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Спросите о технологиях, курсах, книгах..."
                className="flex-1 px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white placeholder-gray-400"
              />
              <button
                onClick={handleSendMessage}
                className="px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow hover:shadow-lg"
                disabled={!inputValue.trim() || isTyping}
              >
                <Send size={14} />
              </button>
            </div>
            <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 px-1">
              💡 Пример: "Курсы по JavaScript", "Бесплатные книги по React", "Как начать карьеру"
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-slow relative group"
          title="Бот-наставник по программированию"
          aria-label="Бот-наставник по программированию"
        >
          <div className="relative">
            <GraduationCap size={20} className="mx-auto" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <div className="absolute -top-10 right-0 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Реальные ресурсы для обучения
            <div className="absolute bottom-0 right-2 transform translate-y-1/2 rotate-45 w-1.5 h-1.5 bg-gray-900"></div>
          </div>
        </button>
      )}
    </div>
  )
}