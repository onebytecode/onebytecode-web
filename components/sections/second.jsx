import React from 'react'

const Second = () => {
    return (
      <section id="second" className="main special">
        <header className="major">
          <h2>Наши проекты	</h2>
          <h3>Нам всего месяц, но работы уже на год вперед.</h3>
        </header>
        <ul className="statistics">
          <li className="style1">
            <span className="icon fa-code-fork"></span>
            <img src="/images/projects_music.svg" alt=""/> <br/>Проект для любителей музыки
          </li>
          <li className="style3">
            <span className="icon fa-signal"></span>
            <img src="/images/projects_education.svg" alt=""/><br/>Новый проект для самообучения
          </li>
          <li className="style4">
            <span className="icon fa-laptop"></span>
            <img src="/images/projects_fitness.svg" alt=""/><br/>Переосмысливаем фитнесс приложение
          </li>
          <li className="style5">
            <span className="icon fa-diamond"></span>
            <img src="/images/projects_transport.svg" alt=""/><br/>Сервис для автомобилистов
          </li>
        </ul>
        <p className="content">Каждый сервис это решение той или иной жизненной проблемы. Мы верим, каждый проект должен решать боль пользователя максимально удобным способом.
      Тогда пользователь искренне любит и часто пользуется сервисом.</p>
        <footer className="major">
        </footer>
      </section>
    )
}

export default Second
