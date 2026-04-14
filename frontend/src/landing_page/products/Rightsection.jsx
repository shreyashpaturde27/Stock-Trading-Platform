export default function Rightsection({
    imageURL,
    productName,
    productDescription,
    learnmore
}) { 
    return (
        <>
        
            <div className="container mt-5">
                <div className="row">
                   
                    <div className="col-6 p-5 mt-5">
                        <h1>{productName}</h1>
                        <p style={{ color: "black" }}>{productDescription}</p>
                      
                        <div>
                      
                        <a href={learnmore} >Learn More</a>
                        </div>
                       
                    </div>
                    <div className="col-6 p-5">
                          <img src={imageURL}/>
                    </div>
                </div>
            </div>
        
        </>
    )
}