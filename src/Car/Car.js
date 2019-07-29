import React, { Component } from 'react'
import styles from './Car.module.css';
import PropTypes from 'prop-types'
import withClass from "../hoc/withClass";


class Car extends Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef()
    }


    componentDidMount() {
        if (this.props.index === 1) {
            this.inputRef.current.focus()
        }
    }


    render() {

        const inputClasses =  [styles.input]

        if (this.props.name !== '') {
            inputClasses.push(styles.green);
        } else {
            inputClasses.push(styles.red);
        }

        if (this.props.name.length > 4) {
            inputClasses.push(styles.bold);
        }


        return (
            <React.Fragment>
                <h3>Сar name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}


Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClass(Car, styles.Car)