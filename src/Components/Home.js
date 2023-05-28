import React from 'react'
import ChooseState from './ChooseState/ChooseState'
import WeekInfoCard from './WeekInfoCard/WeekInfoCard'
import Humidity from './Humidity/Humidity'
import Left from './Left/Left'

const Home = () => {
  return (
      <div className="homeWrap">
          <div className="weatherSection">
          <Left/>
              <div className="rightSide">
                  <ChooseState />
                  <WeekInfoCard />
                  <Humidity />
                  
              </div>
          </div>
    </div>
  )
}

export default Home