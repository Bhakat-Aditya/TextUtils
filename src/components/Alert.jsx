import React from 'react'

function Alert(props) {
    const capalilize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
            <div style={{ height: '50px' }}>
                {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capalilize(props.alert.type)}</strong>! {capalilize(props.alert.msg)}
                </div>}
            </div>
        </>
    )
}

export default Alert
