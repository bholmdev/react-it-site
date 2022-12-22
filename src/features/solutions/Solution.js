const Solution = ({partner}) => {
    if (partner) {
        const {image, name, description} = partner;

        return(
            <>
                <img src={image} alt={name} style={{ width: '500px' }} />
                <div className="m-5">
                <h5 className='fw-bold'>{name}</h5>
                    {description}
                </div>
            </>
        );
    }

    return null;
}

export default Solution;