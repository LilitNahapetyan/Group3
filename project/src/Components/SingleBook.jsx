function SingleBook({title,imgSrc}){
    return <div>
        <span>{title}</span>
        <img src={imgSrc} alt="image" style={{height:"200px",width:"100px"}}/>
    </div>
}

export default SingleBook;