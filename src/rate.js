import React from 'react';

const Rate = ({ nbrofrate }) => {
    if (nbrofrate === 0) {
        return (
            <div style={{textAlign: 'right'}}>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
        )
    } else if (nbrofrate === 1) {
        return (
            <div style={{textAlign: 'right'}}>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
        )
    } else if (nbrofrate === 2) {
        return (
            <div style={{textAlign: 'right'}}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
        )
    } else if (nbrofrate === 3) {
        return (
            <div style={{textAlign: 'right'}}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
        )
    } else if (nbrofrate === 4) {
        return (
            <div style={{textAlign: 'right'}}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
        )
    } else if (nbrofrate === 5) {
        return (
            <div style={{textAlign: 'right'}}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
        )
    }
}
export default Rate;