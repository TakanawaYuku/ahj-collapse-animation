export default class Tasks {
  constructor() {
    this.container = null; // for container
  }

  // присваиваем классу контейнер
  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  // проверка на наличие контейнера
  checkBinding() {
    if (this.container === null) {
      throw new Error('ListEditPlay not bind to DOM');
    }
  }

  // отрисовка HTML
  drawUI() {
    this.checkBinding();

    this.container.innerHTML = `
        <header class="header">
          <h1>Домашнее задание к занятию "9. Анимации и CSS"</h1>
        </header>
        <div class="container">
          <div class="collapse task">
            <div class="collapse-container">
              <button class="collapse-button">Collapse</button>
              <div class="collapse-text">
                <p>
                С другой стороны реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Равным образом реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации. Задача организации, в особенности же новая модель организационной деятельности влечет за собой процесс внедрения и модернизации форм развития.
                </p>
              </div>
              <div class="collapse-copy">Copy</div>
            </div>
          </div>
  
          <div class="collapse-chat task">
            <div class="collapse-chat-container">
              <div class="collapse-chat-close"></div>
              <div class="collapse-chat-title">Напишите нам</div>
              <textarea class="collapse-chat-text"></textarea>
              <div class="collapse-chat-send">Отправить</div>
            </div>
            <div class="collapse-chat-open"></div>
          </div>
      
          <div class="liker task">
            <div class="liker-container">
              <div class="liker-btn">Like</div>
            </div>
          </div>
        </div>
      `;

    /* ЗАДАЧА 1 */
    this.collapseBtn = this.container.querySelector('.collapse-button');
    this.collapseText = this.container.querySelector('.collapse-text');
    this.collapseCopy = this.container.querySelector('.collapse-copy');

    this.collapseBtn.addEventListener('click', (event) => this.onCollapseBtn(event));
    this.collapseCopy.addEventListener('click', (event) => this.onCollapseCopy(event));

    /* ЗАДАЧА 2 */
    this.collapseChatClose = this.container.querySelector('.collapse-chat-close');
    this.collapseChatContainer = this.container.querySelector('.collapse-chat-container');
    this.collapseChatOpen = this.container.querySelector('.collapse-chat-open');

    this.collapseChatClose.addEventListener('click', (event) => this.onCollapseChatClose(event));
    this.collapseChatOpen.addEventListener('click', (event) => this.onCollapseChatOpen(event));

    /* ЗАДАЧА 3 */
    this.likerBtn = this.container.querySelector('.liker-btn');
    this.likerHeart = this.container.querySelector('.heart');

    this.likerBtn.addEventListener('click', (event) => this.onLikerBtn(event));
  }

  /* ЗАДАЧА 1 */
  onCollapseBtn(event) {
    event.preventDefault();

    this.collapseText.classList.toggle('collapse-transition');
  }

  onCollapseCopy(event) {
    event.preventDefault();

    const textCopy = this.collapseText.textContent;

    navigator.clipboard.writeText(textCopy);
  }

  /* ЗАДАЧА 2 */
  onCollapseChatClose(event) {
    event.preventDefault();

    this.collapseChatContainer.classList.remove('visibility');
    this.collapseChatOpen.classList.remove('invisibility');
  }

  onCollapseChatOpen(event) {
    event.preventDefault();
    this.collapseChatContainer.classList.add('visibility');
    this.collapseChatOpen.classList.add('invisibility');
  }

  /* ЗАДАЧА 3 */
  onLikerBtn(event) {
    event.preventDefault();

    const heart = document.createElement('img');
    heart.classList.add('heart');

    const randomVariant = Math.trunc(Math.random() * 4) + 1;
    heart.classList.add(`heart-${randomVariant}`);

    heart.addEventListener('animationend', () => {
      heart.remove();
    });

    this.likerBtn.appendChild(heart);
  }
}
