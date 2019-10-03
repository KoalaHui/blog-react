import './index.less';
import logo from '../../assets/userLogo.jpeg';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    return (
      <div className="home">
        <canvas id="sakura" />
        <div className="content">
          <div className="home-header">
            <Link className="link" to={`/home`}>
              <img className="home-logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="home-body">
            <div className="list">
              <Link className="link" to={`/articles`}>
                文章
              </Link>
              <Link className="link" to={`/project`}>
                项目
              </Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                href={`https://github.com/KoalaHui`}
              >
                github
              </a>
            </div>
            <div className="introduce"> 越来越好！ </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
