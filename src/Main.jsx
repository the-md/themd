import React from 'react';


function Main() {
  return (
    <div id="main">

      <article id="work">
        <h2 className="major">Work</h2>

        <div className="work__item">
          <span className="image main"><img src="images/cases/sunsago.jpg" alt="" /></span>
          <h3 className="cases"><a href="//sunsago.ru/" target="_blank">Sunsago</a></h3>
        </div>

        <div className="work__item">
          <span className="image main"><img src="images/cases/cyprus.jpg" alt="" /></span>
          <h3 className="cases"><a href="//cyprusforyou.store/" target="_blank">Cyprus for you</a></h3>
        </div>

        <div className="work__item">
          <span className="image main"><img src="images/cases/hartz.jpg" alt="" /></span>
          <h3 className="cases"><a href="//harztgroup.ru/" target="_blank">Группа компаний "HARZT"</a></h3>
        </div>
        // <div className="work__item">
        //   <span className="image main"><img src="images/cases/okna.jpg" alt="" /></span>
        //   <h3 className="cases"><a href="http://kompozitnie-okna.ru/" blank="_target">Окна "THERMOBREAK"</a></h3>
        // </div>
        <div className="work__item">
          <span className="image main"><img src="images/cases/pskbor.jpg" alt="" /></span>
          <h3 className="cases"><a href="//pskbor.ru/" target="_blank">ПСК "Бор"</a></h3>
        </div>
        // <div className="work__item">
        //   <span className="image main"><img src="images/cases/bigmoscow.jpg" alt="" /></span>
        //   <h3 className="cases"><a href="http://big-moscow.ru/">BigMoscow</a></h3>
        // </div>
        <div className="work__item">
          <span className="image main"><img src="images/cases/stroitelstvo.jpg" alt="" /></span>
          <h3 className="cases"><a href="#">Timfort</a></h3>
        </div>
        // <div className="work__item">
        //   <span className="image main"><img src="images/cases/cpec.jpg" alt="" /></span>
        //   <h3 className="cases"><a href="http://cpec.online/" target="_blank">Cpec</a></h3>
        // </div>

      </article>
  </div>
  )
}


function WorkItem(props) {
  return (
    <div className="work__item">
      <span className="image main"><img src={props.image} alt="" /></span>
      <h3 className="cases"><a href={props.link}>{props.name}</a></h3>
    </div>
  )
}


export default Main;
