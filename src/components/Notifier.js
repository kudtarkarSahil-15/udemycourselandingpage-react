import React, { useState } from 'react'
import { Alert, Row } from 'reactstrap'

const Notifier = () => {
    const [visible, setVisible] = useState(true)
    const dismissedFn = () => {
        setVisible(false)
    }
  return (
    <>
    <Alert isOpen={visible} toggle={dismissedFn} style={{backgroundColor:'#ECEB98'}} className='rounded-0'>
        <Row>
            <p className='text-center' style={{fontSize: "16px"}}><strong>Courses from ₹649</strong> | Gain the skills to climb that career ladder. Sale ends July 27.</p>
        </Row>
    </Alert>
    </>
  )
}

export default Notifier