import React from 'react'
import BtnEvent from '../components/Events/BtnEvent'
import '../assets/styles/event.scss'
import ListEvent from '../components/Events/ListEvent'
const Event = () => (

    <div className="event__header">

        <ListEvent />
        <BtnEvent />
    </div>


)
export default Event