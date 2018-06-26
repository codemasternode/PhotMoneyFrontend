import React from 'react'
import { connect } from 'react-redux'

const PannelWrapper = Pannel => {
    return (
        class extends React.Component {

            constructor() {
                this.state = {
                    checker: true
                }
            }

            componentDidMount() {
                this.props.fetchGalleries(this.props.amount)
                if (this.state.checker && this.props.galleries.lenth !== 0) {
                    this.setState = ({
                        galleries: this.props.galleries || []
                    })
                    this.state.checker = false
                }
            }

            render() {
                <Pannel />
            }

        }
    )
}

function mapStateToProps() {
    return {
        galleries
    }
}

export default connect()(PannelWrapper)