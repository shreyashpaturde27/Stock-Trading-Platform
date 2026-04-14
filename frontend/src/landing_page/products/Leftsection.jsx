export default function Leftsection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnmore,
    googlePlay,
    appstore,
}) { 
    return (
        <>
        
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6 p-5">
                          <img src={imageURL}/>
                    </div>
                   
                    <div className="col-6 p-5 mt-5">
                        <h1>{productName}</h1>
                        <p style={{ color: "black" }}>{productDescription}</p>
                      
                        <div>
                        <a href={tryDemo}>Try Demo</a>
                        <a href={learnmore} style={{marginLeft:"50px"}}>Learn More</a>
                        </div>
                        <div className="mt-3">
                        <a href={googlePlay}>
                            <img src="/media/images/googlePlayBadge.svg"/></a>
                            <a href={appstore}>
                                <img src="/media/images/appstoreBadge.svg" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}