import React from 'react';

import {Link} from "react-router-dom";

// const workJson = {
//   "lists": [
//     {
//       "id": 1,
//       "image": "images/cases/sunsago.jpg",
//       "url": "//sunsago.ru/",
//       "name": "Sunsago"
//     }, {
//       "id": 1,
//       "image": "images/cases/cyprus.jpg",
//       "url": "//cyprusforyou.store/",
//       "name": "Cyprus for you"
//     }, {
//       "id": 1,
//       "image": "images/cases/hartz.jpg",
//       "url": "//harztgroup.ru/",
//       "name": "Группа компаний &quot;HARZT&quot;"
//     }, {
//       "id": 1,
//       "image": "images/cases/okna.jpg",
//       "url": "//kompozitnie-okna.ru/",
//       "name": "Окна &quot;THERMOBREAK&quot;",
//       "on": false
//     }, {
//       "id": 1,
//       "image": "images/cases/pskbor.jpg",
//       "url": "//pskbor.ru/",
//       "name": "ПСК &quot;Бор&quot;"
//     }, {
//       "id": 1,
//       "image": "images/cases/bigmoscow.jpg",
//       "url": "//big-moscow.ru/",
//       "name": "BigMoscow",
//       "on": false
//     }, {
//       "id": 1,
//       "image": "images/cases/stroitelstvo.jpg",
//       "url": "",
//       "name": "Timfort"
//     }, {
//       "id": 1,
//       "image": "images/cases/cpec.jpg",
//       "url": "//cpec.online/",
//       "name": "Cpec"
//     }
//   ]
// }

function Work() {
  return (<div id="main">

    <article id="work">
      <h2 className="major">Work</h2>
      <WorkItem image="images/cases/sunsago.jpg" url="//sunsago.ru/" name="Sunsago"/>
      <WorkItem image="images/cases/cyprus.jpg" url="//cyprusforyou.store/" name="Cyprus for you"/>
      <WorkItem image="images/cases/hartz.jpg" url="//harztgroup.ru/" name="Группа компаний &quot;HARZT&quot;"/>
      <WorkItem image="images/cases/pskbor.jpg" url="//pskbor.ru/" name="ПСК &quot;Бор&quot;"/>

      <Link to="/" className="close">Close</Link>
    </article>
  </div>)
}
function WorkItem(props) {
  return (<a href={props.url} className="work__item" target="_blank">
    <span className="image main"><img src={props.image} alt=""/></span>
    <h3 className="cases">
      {props.name}
    </h3>
  </a>)
}

export default Work;
