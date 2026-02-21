const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Путь к файлу для хранения счётчика
const counterFile = path.join(__dirname, 'counter.json');

// Функция для чтения счётчика из файла
async function readCounter() {
  try {
    const data = await fs.readFile(counterFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    // Если файла нет, создаём с начальным значением
    const initialCounter = { count: 0 };
    await fs.writeFile(counterFile, JSON.stringify(initialCounter));
    return initialCounter;
  }
}

// Функция для записи счётчика в файл
async function writeCounter(counter) {
  await fs.writeFile(counterFile, JSON.stringify(counter));
}

// API для получения текущего значения
app.get('/api/visitor-count', async (req, res) => {
  try {
    const counter = await readCounter();
    res.json({ count: counter.count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// API для увеличения счётчика
app.post('/api/increment-counter', async (req, res) => {
  try {
    const counter = await readCounter();
    counter.count += 1;
    await writeCounter(counter);
    res.json({ count: counter.count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Заглушка для favicon
app.get('/favicon.ico', (req, res) => res.status(204).end());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log('Counter stored in counter.json');
});