import mapboxgl from 'mapbox-gl'
import React from 'react'
import styled from 'styled-components'
import * as dot from '../../../static/img/dot.png'
import {contain} from './map.module.scss'
// TODO: make the height smaller in mobile devices
const Contain = styled.div`
  position: relative;
  margin: 0 0 50px 0;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.15);
  width: 100%;
`

export default class Map extends React.Component {
  createMap () {
    const zoom = 10
    const iconSize = 0.5
    const coordinates = [-74.001328, 40.73061]
    const point = [-74.023730, 40.779401]
    const map = new mapboxgl.Map({
      center: coordinates,
      container: 'map',
      style: 'mapbox://styles/perdomoh/cjtc8fe9205yq1fnuodwagpus',
      zoom: zoom
    })
    map.scrollZoom.disable()

    map.on('load', () => {
      map.loadImage(dot, (error, image) => {
        if (error) {
          throw error
        }
        map.addImage('pin', image)
        map.addLayer({
          id: 'dot',
          layout: {
            'icon-image': 'pin',
            'icon-size': iconSize
          },
          source: {
            data: {
              features: [
                {
                  geometry: {
                    coordinates: point,
                    type: 'Point'
                  },
                  type: 'Feature'
                }
              ],
              type: 'FeatureCollection'
            },
            type: 'geojson'
          },
          type: 'symbol'
        })
      })
    })
  }

  componentDidMount () {
    mapboxgl.accessToken =
      'pk.eyJ1IjoicGVyZG9tb2giLCJhIjoiY2pwNjhxdW5pMWJrNDNsczBhbnM0YnB0aCJ9.1foZ2zl63oD45LNz63WCxA'
    this.createMap()
  }

  render () {
    return (
      <Contain className={contain}>
        <div id={'map'} style={{ width: '100%', height: '100%' }} />
      </Contain>
    )
  }
}