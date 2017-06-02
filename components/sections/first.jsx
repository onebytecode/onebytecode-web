import React from 'react'

export default class First extends React.Component {
  render() {
    return (
      <section id="first" className="main special">
        <header className="major">
          <h2>Кого мы ищем?</h2>
        </header>
        <ul className="features">
          <li>
            <span className="icon major style1 fa-code"><img src="/images/img02.svg" alt=""/></span>
            <h3>Веб разработчик</h3>
            <p>Мы разрабатываем приложения<br/>на node.js и RoR</p>
          </li>
          <li>
            <span className="icon major style3 fa-copy"><img src="/images/img03.svg" alt=""/></span>
            <h3>Мобильный разработчик</h3>
            <p>iOs и Android. <br/>Только натив. Только хардкор!</p>
          </li>
          <li>
            <span className="icon major style5 fa-diamond"><img src="/images/img04.svg" alt=""/></span>
            <h3>UI & UX Дизайнер</h3>
            <p>Эту страницу мы дизайнили сами. Как видишь с дизайном у нас не очень.</p>
          </li>
        </ul>
      </section>
    )
  }
}
