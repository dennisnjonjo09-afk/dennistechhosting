const express = require('express');
const router = express.Router();

const languages = [
  {id: 1, name: 'Node.js', icon: '🟢', frameworks: ['Express.js', 'Next.js', 'NestJS', 'Fastify'], description: 'JavaScript runtime for server-side development'},
  {id: 2, name: 'Python', icon: '🐍', frameworks: ['Flask', 'Django', 'FastAPI', 'Bottle'], description: 'Versatile language for web and data applications'},
  {id: 3, name: 'Java', icon: '☕', frameworks: ['Spring Boot', 'Quarkus', 'Micronaut'], description: 'Enterprise-grade programming language'},
  {id: 4, name: 'Go', icon: '🐹', frameworks: ['Gin', 'Echo', 'Gorilla', 'Chi'], description: 'Compiled language for high-performance applications'},
  {id: 5, name: 'Ruby', icon: '💎', frameworks: ['Rails', 'Sinatra', 'Hanami'], description: 'Elegant language for rapid development'},
  {id: 6, name: 'PHP', icon: '🐘', frameworks: ['Laravel', 'Symfony', 'Slim'], description: 'Popular server-side scripting language'},
  {id: 7, name: 'TypeScript', icon: '📘', frameworks: ['NestJS', 'Express + TS', 'Next.js'], description: 'Typed superset of JavaScript'},
  {id: 8, name: 'Rust', icon: '⚙️', frameworks: ['Actix', 'Rocket', 'Axum'], description: 'Systems language with memory safety'}
];

router.get('/', (req, res) => {
  res.json({ success: true, count: languages.length, languages });
});

router.get('/:id', (req, res) => {
  const language = languages.find(l => l.id === parseInt(req.params.id));
  if (!language) return res.status(404).json({ success: false, error: 'Language not found' });
  res.json({ success: true, language });
});

module.exports = router;