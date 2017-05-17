import React from 'react'
import { Link } from 'react-router-dom'

export default ({ err, user, selected, r, bookRoom, cancelRoom }) => (
  <div className="row">
    <div key={r._id}>
      <div className='card'>
        <div className='card-image'>
          <img alt="img" src={r.img_url}/>
        </div>
        <div className='card-content'>
          <span className='card-title'>{
            selected ?
            r.name + '(Selected)' :
            r.name
          }</span>
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
        </div>
        <div className='card-action'>
          <Link to={'/' + r._id}>View</Link>
        </div>
      </div>
    </div>
  </div>
)
