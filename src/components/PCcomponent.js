const PCcomponent = (props) => {

    return (
        <div>
            <h2 className='cmpnt-name'>{props.name}</h2>
            <p classname='cmpnt-desc'>{props.desc}</p>
        </div>
    );  
}

export default PCcomponent;