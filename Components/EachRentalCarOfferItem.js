import CarImg from "../../Mazda_Suv.png";

const EachRentalCarOfferItem = (props) => {

    const { 
        selectOfferCar 
    } = props;

    return (
        <div>
            <div onClick={selectOfferCar} style={{position: "relative", cursor: "pointer"}}>
                <div className="stay_offer_card_inner_containter" style={{overflow: "hidden", display: "flex", borderBottom: "1px solid rgba(0,0,0,0.1)", width: "100%"}}>
                    <div className="direct-flex-child hotel-offer-card-img-container" style={{width: "250px", position: "relative"}}>
                        <div style={{position: "absolute", width: 35, height: 35, borderRadius: 4, right: 5, top: 25, zIndex: 3, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <i style={{color: "white"}} className="fa-regular fa-heart"></i>
                        </div>
                            <img src={CarImg} 
                                style={{width: "100%", height: "100%", objectFit: "contain", objectPosition: "center"}} 
                                alt="" />
                    </div>
                    <div className="direct-flex-child hotel-offer-card-info-container" 
                        style={{width: "calc(100% - 250px)", display: "flex", justifyContent: "space-between", padding: "10px 20px", position: "relative"}}>
                        <div style={{/*display: "flex", flexDirection: "column", justifyContent: "space-between",*/ height: "100%"}}>
                            <div>
                                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, color: "rgba(0,0,0,0.9)", fontWeight: "bolder"}}>
                                    Midsize SUV AWD
                                </p>
                                <p style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.9)", fontSize: 12, marginBottom: 5}}>
                                    <i style={{marginRight: 10, fontSize: 12, color: "rgb(201, 0, 176)"}} className="fa fa-map-marker"></i>
                                    New York
                                </p>
                                <div style={{display: "flex"}}>
                                    <div style={{marginTop: 5}}>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 11, marginBottom: 5, color: "rgba(0,0,0,0.8)"}}>
                                            Toyota Rav4 or similar
                                        </p>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 11, marginBottom: 5, color: "rgba(0,0,0,0.8)"}}>
                                            Rating: 4.9</p>
                                        <div style={{backgroundColor: "rgb(23, 87, 148)", boxShadow: "1px 2px 3px rgba(0,0,0,0.4)", borderRadius: 50}}>
                                            <div style={{height: 3, backgroundColor: "rgb(201, 0, 176)", width: "90%", position: "relative"}} >
                                                <div style={{position: "absolute", top: -9, right: -4, borderRadius: 8}}>
                                                    <i style={{fontSize: 16, color: "rgb(201, 0, 176)", textShadow: "1px 2px 3px rgba(0,0,0,0.4)"}} className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{width: 150, color: "rgb(201, 0, 176)", display: "flex", justifyContent: "space-between", marginTop: 7}}>
                                            <p style={{fontSize: 11, fontFamily: "'Prompt', Sans-serif"}} >
                                                1</p>
                                            <p style={{fontSize: 11, fontFamily: "'Prompt', Sans-serif"}} >
                                                2</p>
                                            <p style={{fontSize: 11, fontFamily: "'Prompt', Sans-serif"}} >
                                                3</p>
                                            <p style={{fontSize: 11, fontFamily: "'Prompt', Sans-serif"}} >
                                                4</p>
                                            <p style={{fontSize: 11, fontFamily: "'Prompt', Sans-serif"}} >
                                                5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop: 10, paddingTop: 10, borderTop: "1px dashed rgba(0,0,0,0.1)"}}>
                                <div style={{display: "flex", flexWrap: "wrap"}}>
                                    <p style={{marginRight: 20, color: "rgba(0,0,0,0.9)", fontFamily: "'Prompt', Sans-serif", fontSize: 13,}}>
                                        <i style={{fontSize: 13, marginRight: 10}} class="fa fa-user"></i>
                                        5 Passengers
                                    </p>
                                    <p style={{marginRight: 20, color: "rgba(0,0,0,0.9)", fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                                        <i style={{fontSize: 15, marginRight: 10}} class="fa-solid fa-check"></i>
                                        4 Doors
                                    </p>
                                    <p style={{marginRight: 20, color: "rgba(0,0,0,0.9)", fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                                        <i style={{fontSize: 13, marginRight: 10}} class="fa-solid fa-temperature-arrow-down"></i>
                                        Airconditioning
                                    </p>
                                    <p style={{marginRight: 20, color: "rgba(0,0,0,0.9)", fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                                        <i style={{fontSize: 13, marginRight: 10}} class="fa-solid fa-gauge-simple-high"></i>
                                        Unlimited Mileage
                                    </p>
                                    <p style={{marginRight: 20, color: "rgba(0,0,0,0.9)", fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                                        <i style={{fontSize: 13, marginRight: 10}} class="fa-solid fa-check"></i>
                                        Automatic
                                    </p>
                                    <p style={{marginRight: 20, color: "rgba(0,0,0,0.9)", fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                                        <i style={{fontSize: 13, marginRight: 10}} class="fa-solid fa-gas-pump"></i>
                                        Fuel: Full to Full
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{borderLeft: "1px dashed rgba(0,0,0,0.1)", paddingLeft: "10px"}}>
                            <p style={{fontSize: 16, color: "rgb(23, 87, 148)", fontWeight: "bolder", textAlign: "center"}}>
                                $70
                            </p>
                            <p style={{fontFamily: "'Prompt', Sans-serif", marginTop: 5, color: "rgba(0,0,0,0.8)", fontSize: 12, textAlign: "center"}}>
                                $198/night
                            </p>
                            <p style={{textAlign: "center", padding: 5, marginTop: 10, backgroundColor: "rgba(0,255,0,0.1)", border: "1px solid rgba(0,255,0,0.2)", borderRadius: 4, color: "green", fontFamily: "'Prompt', Sans-serif", fontSize: 10}}>
                                <span>4.9</span><br/>
                                Excellent
                            </p>
                            <div style={{marginTop: 10, borderTop: "1px dashed rgba(0,0,0,0.1)", paddingTop: 10}}>
                                <div style={{margin: "auto", fontFamily: "'Prompt', Sans-serif", fontSize: 13, cursor: "pointer", borderRadius: "100%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgb(23, 87, 148)", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", color: "white"}}>
                                    <i style={{fontSize: 13}} className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EachRentalCarOfferItem;