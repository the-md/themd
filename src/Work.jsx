import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Work extends Component {
  state = {
    work: [
      {
        "image": "images/cases/sunsago.jpg",
        "url": "//sunsago.ru/",
        "name": "Sunsago"
      }, {
        "image": "images/cases/cyprus.jpg",
        "url": "//cyprusforyou.store/",
        "name": "Cyprus for you"
      }, {
        "image": "images/cases/hartz.jpg",
        "url": "//harztgroup.ru/",
        "name": "Группа компаний \"HARZT\""
      }, {
        "image": "images/cases/okna.jpg",
        "url": "//kompozitnie-okna.ru/",
        "name": "Окна \"THERMOBREAK\"",
        "on": false
      }, {
        "id": 1,
        "image": "images/cases/pskbor.jpg",
        "url": "//pskbor.ru/",
        "name": "ПСК \"Бор\""
      }, {
        "image": "images/cases/bigmoscow.jpg",
        "url": "//big-moscow.ru/",
        "name": "BigMoscow",
        "on": false
      }, {
        "image": "images/cases/stroitelstvo.jpg",
        "url": "",
        "name": "Timfort",
        "on": false
      }, {
        "image": "images/cases/cpec.jpg",
        "url": "//cpec.online/",
        "name": "Cpec",
        "on": false
      }
    ]
  }

  render() {

    const work = this.state.work

    return (<div id="main">

      <article id="work">
        <h2 className="major">Work</h2>
        <WorkItem image={work[0].image} url={work[0].url} name={work[0].name}/>
        <WorkItem image={work[1].image} url={work[1].url} name={work[1].name}/>
        <WorkItem image={work[2].image} url={work[2].url} name={work[2].name}/>
        <WorkItem image={work[4].image} url={work[4].url} name={work[4].name}/>

        <Link to="/" className="close">Close</Link>
      </article>
    </div>)
  }
}
function WorkItem(props) {
  return (<a href={props.url} className="work__item" target="_blank" rel="noopener noreferrer">
    <span className="image main">
      <img src={props.image} alt=""/>
    </span>
    <h3 className="cases">
      {props.name}
    </h3>
  </a>)
}

export default Work;
