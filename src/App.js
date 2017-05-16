import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { rooms } from './roomdata'

class App extends Component {

  render() {
    return (
      <div className="row">
        {
          rooms.map(r => (
            <div key={r._id} className='col s12 m6 l4'>
              <div className='card'>
                <div className='card-image'>
                  <img alt="img" src={r.img_url}/>
                </div>
                <div className='card-content'>
                  <span className='card-title'>{r.name}</span>
                  <b>Size: </b>{r.size}<br/>
                  <b>Views:</b><br/>
                  {
                    r.views.map((v, i) => (
                      <p key={i}>{v}</p>
                    ))
                  }
                  <b>Amenities: </b>
                  {
                    r.amenities.map(a => (
                      <p key={a}>{a}</p>
                    ))
                  }
                  <b>Sleeps: </b>
                  <h4>{r.current.length + '/' + r.max_roommates}</h4>
                </div>
                <div className='card-action'>
                  <a href="#">Book</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
