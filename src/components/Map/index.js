import React from 'react'

const Map = () => {
  return (
    <div className='map-container'>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe 
            height='500px'
            width='400px'
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=500%20s%20salisbury%20&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0"
            title='1'>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Map;