const Partner = ({partner}) => {
    if (partner) {
        const {link, image, name, description} = partner;

        return(
            <>
                <a href={link} target="_blank" rel="noopener noreferrer"><img src={image} alt={name} style={{ width: '150px' }} /></a>
                <div className="m-4">
                <h5 className='fw-bold'>{name}</h5>
                    {description}
                </div>
            </>
        );
    }

    return null;
}

export default Partner;