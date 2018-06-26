import React from 'react'
import { Container, Row, Mask, Col, View, Button } from 'mdbreact'

import '../css/home.css'

const Change = (props) => (
    <main>
        <div className="main">
            <Container>
                <div className="banner">
                    <h1>
                        PhotMoney
                </h1>
                    <h2>
                        Proffesional website for amatuer photographers and web designers
                </h2>
                    <Button color="yellow" className="join">Join Us</Button>
                </div>

            </Container>
        </div>
        
    </main>
)

export { Change as Home }