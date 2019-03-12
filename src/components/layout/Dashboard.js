import React from 'react'
import Students from '../student/Students';
import Sidebar from './Sidebar'
export default () => {
    return (
      <div className ="row">
          <div className = "col-md-10">
              <Students/>

          </div>

          <div className = "col-md-2">
              <Sidebar/>

          </div>

      </div>
    );
};