import React from 'react';

import {Link} from "react-router-dom";
import ParallaxMousemove from 'react-parallax-mousemove'

const style = {
  outter: {
    background: '#02b5bc',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: 320,
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
    borderRadius: '4px'
  },
  infoLayerStyleOne: {
    position: 'absolute',
    right: 0,
    margin: 'auto',
    transform: 'translate(0px, -40px)'
  },
  infoLayerStyleTwo: {
    position: 'absolute',
    right: 0,
    margin: 'auto',
    transform: 'translate(0px, -60px)'
  },
  infoLayerStyleMan: {
    position: 'absolute',
    right: 0,
    margin: 'auto',
    transform: 'translate(0px, 10px)'
  }
}

function About() {
  return (<div id="main">

    <article id="about">
      <h2 className="major">About</h2>
      <div className="image main paralax-main">
        <img className="paralax-none" src="images/pic03.jpg" alt=""/>
        <div className="paralax-box">
          <ParallaxMousemove containerStyle={style.outter}>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyleOne} config={{
                xFactor: -0.15,
                yFactor: 0.1
              }}>
              <img src="images/parallax/blocks1.png" alt=""/>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyleTwo} config={{
                xFactor: -0.08,
                yFactor: 0.05
              }}>
              <img src="images/parallax/blocks2.png" alt=""/>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyleMan} config={{
                xFactor: -0.05,
                yFactor: 0
              }}>
              <img src="images/parallax/man.png" alt=""/>
            </ParallaxMousemove.Layer>
          </ParallaxMousemove>
        </div>
      </div>

      <p>Я рад вас видеть на моем сайте!</p>
      <p>Давайте познакомимся. Меня зовут Дмитрий.
        <br/>Я занимаюсь разработкой сайтов различных направлений более 5 лет. Разработку сайтов делаю с нуля без использования готовых шаблонов по вашему макету. Если у вас нет дизайна сайта, то могу порекомендовать хороших специалистов, с которыми работаю уже не первый год.</p>
      <p>Основные направления:</p>
      <ul>
        <li>создание web-сайтов «под-ключ»,</li>
        <li>верстка, интеграция на CMS,</li>
        <li>редактирование существующих проектов,</li>
        <li>тех-поддержка сайта, хостинга.</li>
      </ul>
      <p>Профессионально работаю с Wordpress, Joomla, Modx, Opencart. Другие CMS так же приветствуются, но обговариваются перед началом работ.
        <br/>Используемые технологии - HTML5, CSS3, jQuery, PHP, MySql, различные фреймворки. Так же хорошо умею обращаться с Adobe Photoshop и Adobe Muse.</p>
      <p>К сильным сторонам можно отнести:</p>
      <ul>
        <li>занудство, когда нужно разобраться в чем то непонятном,</li>
        <li>упертость, когда приходится делать кучу скучной работы,</li>
        <li>любознательность, когда дело касается новых проблем и задач,</li>
        <li>ответственность, когда нужно довести проект до конца,</li>
        <li>чувство юмора, которое всегда приходит на помощь в тяжелых ситуациях.</li>
      </ul>
      <Link to="/" className="close">Close</Link>
    </article>

  </div>)
}

export default About;
