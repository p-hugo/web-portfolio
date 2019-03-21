import mapboxgl from 'mapbox-gl'
import React from 'react'
import Contain from './Contain'

export default class Map extends React.Component {
  createMap () {
    const zoom = 10
    const coordinates = [-74.001328, 40.73061]
    const map = new mapboxgl.Map({
      center: coordinates,
      container: 'map',
      style: 'mapbox://styles/perdomoh/cjtc8fe9205yq1fnuodwagpus',
      zoom: zoom
    })
    map.scrollZoom.disable()

  }

  componentDidMount () {
    mapboxgl.accessToken =
      'pk.eyJ1IjoicGVyZG9tb2giLCJhIjoiY2pwNjhxdW5pMWJrNDNsczBhbnM0YnB0aCJ9.1foZ2zl63oD45LNz63WCxA'
    this.createMap()
  }

  render () {
    return (
      <Contain> 
        <div id={'map'} style={{ width: '100%', height: '100%' }} />
      </Contain>
    )
  }
}
