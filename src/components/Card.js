import  React from  'react';



const Card = (props /*{name , email, id }*/) => {
    //const {name, email, id } =props
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2  grow bw2 shadow-2'>
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>

        </div>
    )
}

export default Card; 