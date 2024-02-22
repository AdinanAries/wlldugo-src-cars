import PriceSummary from "./PriceSummary";
import CarImg from "../../Mazda_Suv.png";
import MapMarkerPic from "../../MapsMarker.jpeg";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

const SelectedCarFullInfo = (props) => {
    const {
        showDriverFormsPage,
        showPaymentPage,
        showDetailsPage,
    } = props;

    const OVERVIEW_PAGE = "OVERVIEW";
    const POLICIES_PAGE = "POLICIES";
    const AMENITIES_PAGE = "AMENITIES";
    const REVIEWS_PAGE = "REVIEWS";
    const [ currentPage, setCurrentPage ] = useState(OVERVIEW_PAGE);

    const changeInfoPage = (page) => {
        setCurrentPage(page);
    }

    return <div className="checkout_page_all_info_flex_container hotel_checkout_page_container">
        <div className="checkout_page_all_info_flex_left">
            <div style={{display: "flex"}} className="selected_hotel_full_details_images_section">
                <div style={{marginBottom: 0, position: "relative"}}>
                    <div style={{position: "absolute", width: 35, height: 35, borderRadius: 4, right: 5, top: 25, zIndex: 3, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <i style={{color: "white"}} className="fa-regular fa-heart"></i>
                    </div>
                    <img src={CarImg} 
                        style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "center"}} 
                        alt="" />  
                </div>
                <div className="selected_hotel_full_details_other_images_section"
                 style={{minWidth: "50%", backgroundColor: "rgba(0,0,0,0.07)", backgroundImage: `url("${MapMarkerPic}")`, backgroundSize: "cover", backgroundPosition: "center"}}>
                    <div style={{width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "white"}}>
                            <i style={{marginRight: 10, color: "yellow"}} className="fa-solid fa-exclamation-triangle"></i>
                            Map view unavailable at the moment
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ borderBottom: "1px solid rgba(0,0,0,0.1)"}}>
                <div style={{display: "flex", justifyContent: "space-between", maxWidth: 450}}>
                    <div onClick={()=>changeInfoPage(OVERVIEW_PAGE)}
                        style={{color: (currentPage===OVERVIEW_PAGE ? "rgb(23, 87, 148)" : "rgba(0,0,0,0.7)"), 
                        borderBottom: (currentPage===OVERVIEW_PAGE ? "3px solid rgb(23, 87, 148)" : ""), padding: "10px 16px"}}>
                        <p style={{fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", fontSize: 13, cursor: "pointer"}}>
                        Overview</p>
                    </div>
                    <div  onClick={()=>changeInfoPage(POLICIES_PAGE)}
                        style={{color: (currentPage===POLICIES_PAGE ? "rgb(23, 87, 148)" : "rgba(0,0,0,0.7)"), 
                        borderBottom: (currentPage===POLICIES_PAGE ? "3px solid rgb(23, 87, 148)" : ""), padding: "10px 16px"}}>
                        <p style={{fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", fontSize: 13, cursor: "pointer"}}>
                        Policies</p>
                    </div>
                    <div  onClick={()=>changeInfoPage(AMENITIES_PAGE)}
                        style={{color: (currentPage===AMENITIES_PAGE ? "rgb(23, 87, 148)" : "rgba(0,0,0,0.7)"), 
                        borderBottom: (currentPage===AMENITIES_PAGE ? "3px solid rgb(23, 87, 148)" : ""), padding: "10px 16px"}}>
                        <p style={{fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", fontSize: 13, cursor: "pointer"}}>
                        Amenities</p>
                    </div>
                    <div onClick={()=>changeInfoPage(REVIEWS_PAGE)}
                        style={{color: (currentPage===REVIEWS_PAGE ? "rgb(23, 87, 148)" : "rgba(0,0,0,0.7)"), 
                        borderBottom: (currentPage===REVIEWS_PAGE ? "3px solid rgb(23, 87, 148)" : ""), padding: "10px 16px"}}>
                        <p style={{fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", fontSize: 13, cursor: "pointer"}}>
                        Reviews</p>
                    </div>
                </div>
            </div>
            {
                (currentPage===OVERVIEW_PAGE) &&
                <div style={{padding: 10, paddingTop: 15, paddingBottom: 50}}>
                    <p style={{fontSize: 16, letterSpacing: 1, marginBottom: 3, fontFamily: "'Prompt', sans-serif", fontWeight: "bolder", fontStyle: "normal", color: "rgb(201, 0, 176)"}}>
                        Mazda SUV AWD
                    </p>
                    <p style={{fontSize: 12, color: "rgb(23, 87, 148)", marginBottom: 5, fontFamily: "'Prompt', Sans-serif"}}>
                        Luxury family-friendly hotel near 5th Avenue
                    </p>
                    <div style={{display: "flex", marginBottom: 25,}}>
                        <div style={{marginTop: 5}}>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 11, marginBottom: 5, color: "rgba(0,0,0,0.8)"}}>
                                Rating: 4.9</p>
                            <div style={{backgroundColor: "rgb(23, 87, 148)", boxShadow: "1px 2px 3px rgba(0,0,0,0.4)", borderRadius: 50}}>
                                <div style={{height: 3, backgroundColor: "rgb(201, 0, 176)", width: "90%", position: "relative"}} >
                                    <div style={{position: "absolute", top: -9, right: -4, borderRadius: 8}}>
                                        <i style={{fontSize: 16, color: "rgb(201, 0, 176)", textShadow: "1px 2px 3px rgba(0,0,0,0.4)"}} className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div style={{width: 100, display: "flex", justifyContent: "space-between", marginTop: 7}}>
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
                        <p onClick={()=>changeInfoPage(REVIEWS_PAGE)} style={{cursor: "pointer", marginLeft: 15, marginTop: 20, textDecoration: "underline", color: "blue", fontSize: 11, fontFamily: "'Prompt', Sans-serif"}}>
                            see all reviews
                            <i style={{marginLeft: 10, fontSize: 11}} class="fa-solid fa-angle-right"></i>
                        </p>
                    </div>
                    <p style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontSize: 14}} >
                        <i style={{marginRight: 10, fontSize: 14, marginBottom: 5, color: "rgb(201, 0, 176)"}} className="fa fa-calendar"></i>
                        Mon, Mar 22 to Thu Mar 25
                    </p>
                    <p style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.9)", fontSize: 12}}>
                        <i style={{marginRight: 10, fontSize: 12, marginBottom: 5, color: "rgb(201, 0, 176)"}} className="fa fa-map-marker"></i>
                        123 street, City, State, Country 4567
                    </p>
                    <p  onClick={()=>changeInfoPage(REVIEWS_PAGE)} style={{cursor: "pointer", textDecoration: "underline", fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.9)", fontSize: 12}}>
                        <i style={{marginRight: 10, fontSize: 12, color: "rgb(201, 0, 176)"}} className="fa fa-chart-line"></i>
                        <span style={{fontFamily: "'Prompt', Sans-serif", color: "rgb(23, 87, 148)", fontSize: 13}}>
                            4.9 - Excellent -
                        </span> 125 reviews
                    </p>
                    <p style={{fontSize: 12, marginTop: 25, marginBottom: 5, fontFamily: "'Prompt', sans-serif", color: "green"}}>
                        Car Features
                    </p>
                    <div style={{display: "flex", flexWrap: "wrap", marginBottom: 25}}>
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
                    <p style={{fontSize: 12, marginTop: 25, marginBottom: 5, fontFamily: "'Prompt', Sans-serif", color: "green"}}>
                        Accessibility
                    </p>
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        <p style={{marginRight: 20, color: "rgba(0,0,0,0.9)", fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginTop: 5}}>
                            <i style={{fontSize: 15, marginRight: 10}} class="fa-brands fa-accessible-icon"></i>
                            Wheelchair accessible (may have limitations)
                        </p>
                        <p style={{marginRight: 20, color: "rgba(0,0,0,0.9)", fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginTop: 5}}>
                            <i style={{color: "green", fontSize: 15, marginRight: 10}} class="fa-solid fa-check"></i>
                            Braille/raised signage
                        </p>
                        <p style={{marginRight: 20, color: "rgba(0,0,0,0.9)", fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginTop: 5}}>
                            <i style={{fontSize: 15, marginRight: 10}} class="fa-solid fa-elevator"></i>
                            Elevator
                        </p>
                        <p style={{marginRight: 20, color: "rgba(0,0,0,0.9)", fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginTop: 5}}>
                            <i style={{color: "green", fontSize: 15, marginRight: 10}} class="fa-solid fa-check"></i>
                            Assistive listening devices
                        </p>
                    </div>
                    <div style={{marginTop: 25}}>
                        <p style={{fontSize: 14, color: "rgba(0,0,0,0.8)", fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif"}}>
                            About this property</p>
                        <p style={{marginTop: 10, fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit
                        </p>
                    </div>
                </div>
            }
            {
                (currentPage===POLICIES_PAGE) &&
                <div style={{padding: 10}}>
                    <p style={{fontSize: 13, marginBottom: 10, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: "rgb(201, 0, 176)"}}>
                        Lutta New York Palace 
                        <span style={{fontSize: 11, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}> - Policies</span>
                    </p>
                    <div style={{marginTop: 25}}>
                        <div style={{marginBottom: 15}}>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, fontWeight: "bolder", color: "rgb(23, 87, 148)", marginBottom: 5}}>
                                Check-in</p>
                            <div style={{display: "flex"}}>
                                <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)", marginRight: 10}}>
                                    <i style={{color: "green", fontSize: 15}} class="fa-solid fa-check"></i>
                                </p>
                                <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
                                </p>
                            </div>
                            <div style={{display: "flex"}}>
                                <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)", marginRight: 10}}>
                                    <i style={{color: "green", fontSize: 15}} class="fa-solid fa-check"></i>
                                </p>
                                <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: 25}}>
                        <div style={{marginBottom: 15}}>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, fontWeight: "bolder", color: "rgb(23, 87, 148)", marginBottom: 5}}>
                                Check-out</p>
                            <div style={{display: "flex"}}>
                                <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)", marginRight: 10}}>
                                    <i style={{color: "green", fontSize: 15}} class="fa-solid fa-check"></i>
                                </p>
                                <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
                                </p>
                            </div>
                            <div style={{display: "flex"}}>
                                <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)", marginRight: 10}}>
                                    <i style={{color: "green", fontSize: 15}} class="fa-solid fa-check"></i>
                                </p>
                                <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                (currentPage===AMENITIES_PAGE) &&
                <div style={{padding: 10}}>
                    <p style={{fontSize: 13, letterSpacing: 1, marginBottom: 25, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: "rgb(201, 0, 176)"}}>
                        Mazda SUV AWD
                        <span style={{fontSize: 11, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}> - Amenities</span>
                    </p>
                    <div style={{display: "flex", flexWrap: "wrap", marginBottom: 25}}>
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
            }
            {
                (currentPage===REVIEWS_PAGE) &&
                <div style={{padding: 10}}>
                    
                    <div style={{marginTop: 10}}>
                        <div style={{display: "flex"}}>
                            <div>
                                <p style={{fontSize: 25, color: "rgba(0,0,0,0.8)", fontWeight: "bolder", borderBottom: "2px solid rgb(201, 0, 176)", paddingBottom: 5}}>
                                    4.9</p>
                            </div>
                            <div style={{marginLeft: 15}}>
                                <div style={{marginBottom: 5}}>
                                    <p style={{color: "rgb(23, 87, 148)", fontFamily: "'Prompt', Sans-serif", fontSize: 11, marginRight: 10}}>
                                        Excellent <span style={{color: "rgb(201, 0, 176)", fontSize: 11, fontFamily: "'Prompt', Sans-serif"}}>
                                            (120)</span>:
                                    </p>
                                    <div style={{width: 150, height: 6, background: "rgba(0, 0, 0, 0.1)", overflow: "hidden", borderRadius: 50, boxShadow: "1px 2px 3px rgba(0,0,0,0.4)"}}>
                                        <div style={{height: "100%", width: "98%", background: "rgb(23, 87, 148)"}}></div>
                                    </div>
                                </div>
                                <div style={{marginBottom: 5}}>
                                    <p style={{color: "rgb(23, 87, 148)", fontFamily: "'Prompt', Sans-serif", fontSize: 11, marginRight: 10}}>
                                        Good <span style={{color: "rgb(201, 0, 176)", fontSize: 11, fontFamily: "'Prompt', Sans-serif"}}>
                                            (31)</span>:
                                    </p>
                                    <div style={{width: 150, height: 6, background: "rgba(0, 0, 0, 0.1)", overflow: "hidden", borderRadius: 50, boxShadow: "1px 2px 3px rgba(0,0,0,0.4)"}}>
                                        <div style={{height: "100%", width: "65%", background: "rgb(23, 87, 148)"}}></div>
                                    </div>
                                </div>
                                <div style={{marginBottom: 5}}>
                                    <p style={{color: "rgb(23, 87, 148)", fontFamily: "'Prompt', Sans-serif", fontSize: 11, marginRight: 10}}>
                                        Average <span style={{color: "rgb(201, 0, 176)", fontSize: 11, fontFamily: "'Prompt', Sans-serif"}}>
                                            (16)</span>:
                                    </p>
                                    <div style={{width: 150, height: 6, background: "rgba(0, 0, 0, 0.1)", overflow: "hidden", borderRadius: 50, boxShadow: "1px 2px 3px rgba(0,0,0,0.4)"}}>
                                        <div style={{height: "100%", width: "50%", background: "rgb(23, 87, 148)"}}></div>
                                    </div>
                                </div>
                                <div style={{marginBottom: 5}}>
                                    <p style={{color: "rgb(23, 87, 148)", fontFamily: "'Prompt', Sans-serif", fontSize: 11, marginRight: 10}}>
                                        Bad <span style={{color: "rgb(201, 0, 176)", fontSize: 11, fontFamily: "'Prompt', Sans-serif"}}>
                                            (9)</span>:
                                    </p>
                                    <div style={{width: 150, height: 6, background: "rgba(0, 0, 0, 0.1)", overflow: "hidden", borderRadius: 50, boxShadow: "1px 2px 3px rgba(0,0,0,0.4)"}}>
                                        <div style={{height: "100%", width: "36%", background: "rgb(23, 87, 148)"}}></div>
                                    </div>
                                </div>
                                <div style={{marginBottom: 5}}>
                                    <p style={{color: "rgb(23, 87, 148)", fontFamily: "'Prompt', Sans-serif", fontSize: 11, marginRight: 10}}>
                                        Worst <span style={{color: "rgb(201, 0, 176)", fontSize: 11, fontFamily: "'Prompt', Sans-serif"}}>
                                            (3)</span>:
                                    </p>
                                    <div style={{width: 150, height: 6, background: "rgba(0, 0, 0, 0.1)", overflow: "hidden", borderRadius: 50, boxShadow: "1px 2px 3px rgba(0,0,0,0.4)"}}>
                                        <div style={{height: "100%", width: "15%", background: "rgb(23, 87, 148)"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: 40, marginTop: 25}}>
                            <div style={{padding: "10px 0", marginBottom: 20}}>
                                <div style={{display: "flex"}}>
                                    <div style={{borderRadius: "100%",  border: "1px solid rgba(0,0,0,0.1)", backgroundColor: "rgba(0,0,0,0.1)", minWidth: 45, height: 45, display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <i style={{fontSize: 25, color: "rgba(0,0,0,0.6)"}} className="fa-solid fa-user"></i>
                                    </div>
                                    <div style={{marginLeft: 15}}>
                                        <p style={{color: "rgb(201, 0, 176)", fontSize: 15, fontFamily: "'Prompt', Sans-serif", }}>
                                            9.8/10
                                            <span style={{marginLeft: 5, color: "rgb(23, 87, 148)", fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                                                - Excellent
                                            </span>
                                        </p>
                                        <p style={{color: "rgb(201, 0, 176)", fontSize: 14, fontFamily: "'Prompt', Sans-serif", }}>
                                            Mohammed
                                            <span style={{marginLeft: 5, color: "rgb(23, 87, 148)", fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                                                - 23/03/2023</span>
                                        </p>
                                        <p style={{borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10, paddingTop: 10, fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                                            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div style={{padding: "10px 0", marginBottom: 20}}>
                                <div style={{display: "flex"}}>
                                    <div style={{borderRadius: "100%",  border: "1px solid rgba(0,0,0,0.1)", backgroundColor: "rgba(0,0,0,0.1)", minWidth: 45, height: 45, display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <i style={{fontSize: 25, color: "rgba(0,0,0,0.6)"}} className="fa-solid fa-user"></i>
                                    </div>
                                    <div style={{marginLeft: 15}}>
                                        <p style={{color: "rgb(201, 0, 176)", fontSize: 15, fontFamily: "'Prompt', Sans-serif", }}>
                                            9.8/10
                                            <span style={{marginLeft: 5, color: "rgb(23, 87, 148)", fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                                                - Excellent
                                            </span>
                                        </p>
                                        <p style={{color: "rgb(201, 0, 176)", fontSize: 14, fontFamily: "'Prompt', Sans-serif", }}>
                                            Mohammed
                                            <span style={{marginLeft: 5, color: "rgb(23, 87, 148)", fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                                                - 23/03/2023</span>
                                        </p>
                                        <p style={{borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10, paddingTop: 10, fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                                            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div style={{padding: "10px 0", marginBottom: 20}}>
                                <div style={{display: "flex"}}>
                                    <div style={{borderRadius: "100%",  border: "1px solid rgba(0,0,0,0.1)", backgroundColor: "rgba(0,0,0,0.1)", minWidth: 45, height: 45, display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <i style={{fontSize: 25, color: "rgba(0,0,0,0.6)"}} className="fa-solid fa-user"></i>
                                    </div>
                                    <div style={{marginLeft: 15}}>
                                        <p style={{color: "rgb(201, 0, 176)", fontSize: 15, fontFamily: "'Prompt', Sans-serif", }}>
                                            9.8/10
                                            <span style={{marginLeft: 5, color: "rgb(23, 87, 148)", fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                                                - Excellent
                                            </span>
                                        </p>
                                        <p style={{color: "rgb(201, 0, 176)", fontSize: 14, fontFamily: "'Prompt', Sans-serif", }}>
                                            Mohammed
                                            <span style={{marginLeft: 5, color: "rgb(23, 87, 148)", fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                                                - 23/03/2023</span>
                                        </p>
                                        <p style={{borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10, paddingTop: 10, fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                                            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
        <div className="checkout_page_all_info_flex_right">
            <PriceSummary 
                buttonFunction={showDriverFormsPage}
                backButtonFunction={props.unselectCarOffer}
                buttonText="Driver" 
                prices={{}}
                total_travelers={{}}
            />
        </div>
    </div>
}

export default SelectedCarFullInfo;