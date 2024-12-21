import './style/main.scss'
import starImages from './images/star.png'
import EmblaCarousel from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// 2. Настройте и используйте JavaScript:
const pageHeight = document.documentElement.scrollHeight;
const container = document.getElementById('star-container');
container.style.height = pageHeight + 'px';
const numStars = 20; // Количество звездочек

// Функция для создания звездочек
function createStar() {
  const star = document.createElement('div');
  star.style.position = 'absolute';
  star.style.top = '-20px'; // Начальная позиция за пределами экрана
  star.style.left = `${Math.random() * 100}vw`; // Случайная позиция по ширине экрана
  star.style.width = '24px';
  star.style.height = '24px';
  // star.style.backgroundColor = '#ffac00';
  star.style.backgroundImage = `url(${starImages})`;
  // star.style.borderRadius = '50%';
  // star.style.boxShadow = '0 0 10px #ffac00';
  star.style.filter = 'drop-shadow(0 0 20px #ffac00)'
  star.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
  star.style.zIndex = 3
  container.appendChild(star);

  // Удаляем звезды после завершения анимации
  star.addEventListener('animationend', () => {
    container.removeChild(star);
  });
}

// Создание множества звездочек
setInterval(() => {
  if (container.childElementCount < numStars) {
    createStar();
  }
}, 300); // Каждые 300 мс

// 3. Добавьте CSS-анимацию:
const style = document.createElement('style');
style.textContent = `
@keyframes fall {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(${pageHeight}px);
  }
}
`;
document.head.appendChild(style);





const OPTIONS = {
  loop: true,
  duration: 15
}

const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Autoplay()])


