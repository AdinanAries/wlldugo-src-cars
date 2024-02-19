import { useEffect, useState } from "react";
import CONSTANTS from "../../Constants/Constants";
import HotelsAutoCompleteInit from "../../helpers/HotelsAutoCompleteInit";
import { HotelSearchDatesChooserInit } from "../../helpers/DateChoosersInit";

// Hotel search
let hotel_search_obj = {
    checkin_date: "",
    checkout_date: "",
    location: {
      iata: 0,
      long: 0,
      lat: 0,
    },
    flights: {
      included: false,
      origin_airport: {
        iata: 0,
        long: 0,
        lat: 0,
      }
    },
    cars: {
      included: false,
    },
    rooms: [
      {
        total_adults: 1,
        children: []
      }
    ]
}
  
if(localStorage.getItem("hotel_search_obj")){
    hotel_search_obj=JSON.parse(localStorage.getItem("hotel_search_obj"));
}else{
    localStorage.setItem("hotel_search_obj", JSON.stringify(hotel_search_obj));
}

const SearchResultSearchForm = () => {

    useEffect(()=>{
        // Hotel Search Form
        HotelSearchDatesChooserInit();
        HotelsAutoCompleteInit();
    }, []);

    // Hotel search form functions
    const [ hotel_search_data, set_hotel_search_data ] = useState(hotel_search_obj);

    const productType = parseInt(localStorage.getItem(CONSTANTS.local_storage.product_type));

    const returnHotelSearchTotalGuests = () => {
        let g = 0;
        hotel_search_data.rooms.forEach(each=>{
            g+=each?.total_adults;
            g+=each?.children.length;
        });
        return {
            rooms: hotel_search_data.rooms.length,
            guests: g
        }
    }

    const MAX_HOTEL_SEARCH_GUESTS=15;
    const addAdultGuestToHotelSearch = (i) => {
        if(returnHotelSearchTotalGuests().guests>(MAX_HOTEL_SEARCH_GUESTS-1)){
            alert(`Only a total of ${MAX_HOTEL_SEARCH_GUESTS} guests allowed`)
            return;
        }
        if(hotel_search_data.rooms[i].total_adults<5){
            hotel_search_data.rooms[i].total_adults+=1;
            localStorage.setItem("hotel_search_obj", JSON.stringify(hotel_search_data));
            set_hotel_search_data({...hotel_search_data});
        }
    }

    const removeAdultGuestToHotelSearch = (i) => {
        if(hotel_search_data.rooms[i].total_adults>1){
            hotel_search_data.rooms[i].total_adults-=1;
            localStorage.setItem("hotel_search_obj", JSON.stringify(hotel_search_data));
            set_hotel_search_data({...hotel_search_data});
        }
    }

    const addChildGuestToHotelSearch = (i) => {
        if(returnHotelSearchTotalGuests().guests>(MAX_HOTEL_SEARCH_GUESTS-1)){
            alert(`Only a total of ${MAX_HOTEL_SEARCH_GUESTS} guests allowed`)
            return;
        }
        if(hotel_search_data.rooms[i].children.length<4){
            hotel_search_data.rooms[i].children.push({age: 0});
            localStorage.setItem("hotel_search_obj", JSON.stringify(hotel_search_data));
            set_hotel_search_data({...hotel_search_data});
        }
    }

    const removeChildGuestToHotelSearch = (i) => {
        if(hotel_search_data.rooms[i].children.length>0){
            hotel_search_data.rooms[i].children.pop();
            localStorage.setItem("hotel_search_obj", JSON.stringify(hotel_search_data));
            set_hotel_search_data({...hotel_search_data});
        }
    }

    const removeRoomFromHotelSearch = (i) => {
        if(hotel_search_data.rooms.length > 1){
            hotel_search_data.rooms.splice(i,1);
            localStorage.setItem("hotel_search_obj", JSON.stringify(hotel_search_data));
            set_hotel_search_data({...hotel_search_data});
        }
    }

    const addRoomToHotelSearch = () => {
        if(returnHotelSearchTotalGuests().guests>(MAX_HOTEL_SEARCH_GUESTS-1)){
            alert(`Only a total of ${MAX_HOTEL_SEARCH_GUESTS} guests allowed`)
            return;
        }
        if(hotel_search_data.rooms.length < 4){
            hotel_search_data.rooms.push({
                total_adults: 1,
                children: []
            });
            localStorage.setItem("hotel_search_obj", JSON.stringify(hotel_search_data));
            set_hotel_search_data({...hotel_search_data});
        }
    }

    const changeChildAge = (e, i, j) => {
        if(e.target.value>17){
            return;
        }
        hotel_search_data.rooms[i].children[j].age=e.target.value;
        localStorage.setItem("hotel_search_obj", JSON.stringify(hotel_search_data));
        set_hotel_search_data({...hotel_search_data});
    }

    const toggleIncludeFlightsInHotelSearch = () => {
        hotel_search_data.flights.included=!hotel_search_data?.flights?.included;
        localStorage.setItem("hotel_search_obj", JSON.stringify(hotel_search_data));
        set_hotel_search_data({...hotel_search_data});
    }

    const toggleIncludeCarsInHotelSearch = () => {
        hotel_search_data.cars.included=!hotel_search_data?.cars?.included;
        localStorage.setItem("hotel_search_obj", JSON.stringify(hotel_search_data));
        set_hotel_search_data({...hotel_search_data});
    }

    const hotelSearchOnSubmit = () => {
        window.location.reload();
    }

    const HOTEL_SEARCH_FORM_ROOMS_MARKUP = hotel_search_data.rooms.map((each, i) => {
        return (
            <>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                    <div style={{color: "rgba(0,0,0,0.7)", height: 30, fontFamily: "'Prompt', sans-serif", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        Adults
                        <p style={{fontSize: 12, color: "rgba(0,0,0,0.6)"}}>18 and above</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div onClick={()=>removeAdultGuestToHotelSearch(i)} style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            -</div>
                        <div id="add_travelers_display_adults_number" style={{color: "rgba(0,0,0,0.7)", width: 40, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            {each?.total_adults}</div>
                        <div onClick={()=>addAdultGuestToHotelSearch(i)} style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            +</div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10, borderRadius: 30}}>
                    <div style={{color: "rgba(0,0,0,0.7)", height: 30, fontFamily: "'Prompt', sans-serif", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        Children
                        <p style={{fontSize: 12, color: "rgba(0,0,0,0.6)"}}>Ages 0 to 17</p>
                        </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div onClick={()=>removeChildGuestToHotelSearch(i)} style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            -</div>
                        <div id="add_travelers_display_children_number" style={{color: "rgba(0,0,0,0.7)", width: 40, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            {each?.children.length}</div>
                        <div onClick={()=>addChildGuestToHotelSearch(i)} style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            +</div>
                    </div>
                </div>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {
                        each?.children?.map((child, j) => {
                            return <div style={{marginRight: 10}} key={(`ch_${i+j}`)}>
                                    <p style={{fontSize: 11, color: "rgba(0,0,0,0.8)", fontFamily: "'Prompt', Sans-serif"}}>
                                        Child {(j+1)} age:</p>
                                    <input 
                                        onChange={(e)=>changeChildAge(e, i, j)} 
                                        style={{padding: 5, width: 70, borderRadius: 8, fontSize: 11, border: "1px solid rgba(0,0,0,0.1)", fontFamily: "'Prompt', Sans-serif"}}
                                        value={child?.age} 
                                        type="number"
                                    />
                            </div>
                        })
                    }
                </div>
                {
                    (hotel_search_data.rooms.length > 1) &&
                    <p onClick={()=>removeRoomFromHotelSearch(i)} style={{cursor: "pointer", fontSize: 13, fontFamily: "'Prompt', Sans-serif", marginBottom: 20, marginTop: 10}}>
                        <i style={{color: "crimson", marginRight: 10}} 
                        className="far fa-trash-alt"></i>
                        Remove room
                    </p>
                }
            </>
        );
    });

    return (
        <div className="main-search-form" style={{padding: "0 10px"}}>
            <div style={{display: (productType===CONSTANTS.product_types.rental_cars) ? "block" : "none"}}>
                <div style={{display: "none", padding: "50px 10px", background: "rgba(0,0,0,0.07)", borderRadius: 8}}>
                    <p style={{marginBottom: 5, fontFamily: "'Prompt', Sans-serif", fontWeight: 1000, color: "rgba(0,0,0,0.7)"}}>
                        <i style={{color: "green", marginRight: 10}} className="fa-solid fa-check"></i>
                        Your favorite hotels are in the pipeline:
                    </p>
                    <div style={{display: "flex"}}>
                        <p style={{marginRight: 10, fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                            <i style={{color: "red"}} className="fa-solid fa-exclamation-triangle"></i>
                        </p>
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                            We are still working to enable hotel booking. We apologize for this inconvenience
                        </p>
                    </div>
                </div>
                <div className="two-search-inputs-container">
                    <div className="search_forms_from_where_input_fld_container each_flex-side">
                        <div className="search_page_input" style={{padding: 16, display: "flex", alignItems: "center", borderRadius: 8, marginBottom: 5, background: "rgba(0,0,0,0.07)"}}>
                            <div id="hotel_forms_main_class_guests_cabin_settings_pane" className="forms_class_guests_cabin_settings_pane"  style={{borderRadius: 8, maxWidth: 600}}>
                                <p onClick={()=>document.getElementById("hotel_forms_main_class_guests_cabin_settings_pane").style.display = "none"} className="airports_auto_complete_close_btn">&times;</p>
                                <div style={{padding: 15}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', sans-serif", fontWeight: "bolder", fontSize: 17, marginTop: 10, marginBottom: 20}}>
                                        Add Rooms and Guests</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, paddingBottom: 20, color: "green"}}>
                                        {returnHotelSearchTotalGuests().guests}
                                        {(returnHotelSearchTotalGuests().guests>1) ? " Guests, " : " Guest, "}
                                        {returnHotelSearchTotalGuests().rooms}
                                        {(returnHotelSearchTotalGuests().rooms>1) ? " Rooms" : " Room"}
                                    </p>
                                    {HOTEL_SEARCH_FORM_ROOMS_MARKUP.map(each=>each)}
                                    <p onClick={addRoomToHotelSearch} style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, textAlign: "right", padding: "10px 0", cursor: "pointer", color: "rgb(23, 87, 148)", fontWeight: "bolder"}}>
                                        <i style={{color: "green", marginRight: 10}} className="fa-solid fa-plus"></i>
                                        Add room</p>
                                </div>
                                <div onClick={()=>document.getElementById("hotel_forms_main_class_guests_cabin_settings_pane").style.display = "none"} style={{cursor: "pointer", padding: 10, margin: 10, marginTop: 0, backgroundColor: "rgb(23, 87, 148)", color: "white", textAlign: "center", borderRadius: 50, textAlign: "center"}}>
                                        Done
                                    </div>
                            </div>
                            <div onClick={()=>document.getElementById("hotel_forms_main_class_guests_cabin_settings_pane").style.display="block"} style={{display: "flex", cursor: "pointer", marginRight: 20}}>
                                <div style={{marginRight: 10}}>
                                    <i style={{color: "rgb(23, 87, 148)", fontSize: 20}} className="fa-solid fa-user"></i>
                                </div>
                                <div>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                                        {returnHotelSearchTotalGuests().guests}
                                        {(returnHotelSearchTotalGuests().guests>1) ? " Guests" : " Guest"}
                                    </p>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input 
                                    checked={hotel_search_data.flights.included}
                                    id="hotel_search_form_add_flight_toggle" 
                                    className="cm-toggle hotel_search_form_toggle" 
                                    onChange={toggleIncludeFlightsInHotelSearch} style={{marginRight: 10}} type="checkbox" />
                                <label htmlFor="hotel_search_form_add_flight_toggle">
                                    <p style={{color: "rgba(0,0,0,0.8)", fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                                        Add Flight    
                                    </p>
                                </label>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", marginLeft: 20}}>
                                <input 
                                    checked={hotel_search_data.cars.included}
                                    id="hotel_search_form_add_car_toggle" 
                                    className="cm-toggle hotel_search_form_toggle" 
                                    onChange={toggleIncludeCarsInHotelSearch} style={{marginRight: 10}} 
                                    type="checkbox" 
                                />
                                <label htmlFor="hotel_search_form_add_car_toggle">
                                    <p style={{color: "rgba(0,0,0,0.8)", fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                                        Add Car    
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="search_forms_to_where_input_fld_container each_flex-side">
                        {
                            (!hotel_search_data.flights.included) && <div style={{borderRadius: 8, position: "absolute", height: "calc(100% - 5px)", width: "100%", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
                            </div>
                        }
                        <div id="hotel_from_where_city_auto_complete_input" className="airports_inputs_with_auto_complete hotel_sp_search_airports_inputs_auto_complete" style={{borderRadius: 30}}>
                            <p onClick={()=>document.getElementById("hotel_from_where_city_auto_complete_input").style.display = "none"} className="airports_auto_complete_close_btn">&times;</p>
                            <input autoComplete="off" id="hotel_from_where_city_auto_complete_input_fld" 
                                onBlur={()=>{
                                    setTimeout(()=>document.getElementById("hotel_from_where_city_auto_complete_input").style.display = "none",
                                        200);
                                }} className="airports_auto_complete_input" type="text" placeholder="Where are you leaving from?"/>
                            <div className="airports_auto_complete_list_container">
                                <ul id="hotels_auto_complete_from_where_input_list">
                                    <li><div style={{padding: 10, display: "flex", flexDirection: "row", cursor: "pointer"}}>
                                        <div style={{height: 35, marginRight: 15, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <i className="fa fa-history" style={{color: "rgba(0,0,0,0.3)", fontSize: 22}}></i>
                                        </div>
                                        <div>
                                            <div>
                                                <p style={{fontSize: 14, fontWeight: "bolder", color: "rgba(0,0,0,0.8)"}}>
                                                    New York (LGA - Laguardia)
                                                </p>
                                                <p style={{fontSize: 14, color: "rgba(0,0,0,0.8)"}}>
                                                    United States
                                                </p>
                                            </div>
                                        </div>
                                    </div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="main-search_txt_input search_page_input" style={{border: "none", 
                            backgroundColor: (!hotel_search_data.flights.included) ? "rgba(0,255,0,0.2)" : "rgba(0,0,0,0.07)", borderRadius: 8}}>
                            <i style={{fontSize: 20, marginRight: 5}} 
                                className={(!hotel_search_data.flights.included) ? "fa-solid fa-info-circle" : "fa fa-map-marker"}></i>
                            <input id="hotel_search_forms_from_where_input_fld" onClick={open_hotels_from_where_auto_complete_pane} type="text" readOnly autoComplete="off" 
                            placeholder="Where are you leaving from?" value={(!hotel_search_data.flights.included) ? "Flight not included..." : ""} />
                        </div>
                    </div>
                </div>
                <div className="two-search-inputs-container">
                    <div className="search_forms_from_where_input_fld_container each_flex-side">
                        <div id="hotel_to_where_city_auto_complete_input" className="airports_inputs_with_auto_complete hotel_sp_search_airports_inputs_auto_complete" style={{borderRadius: 30}}>
                            <p onClick={()=>document.getElementById("hotel_to_where_city_auto_complete_input").style.display = "none"} className="airports_auto_complete_close_btn">&times;</p>
                            <input autoComplete="off" id="hotel_to_where_city_auto_complete_input_fld" 
                                onBlur={()=>{
                                    setTimeout(()=>document.getElementById("hotel_to_where_city_auto_complete_input").style.display = "none",
                                        200);
                                }} className="airports_auto_complete_input" type="text" placeholder="Where are you traveling to?"/>
                            <div className="airports_auto_complete_list_container">
                                <ul id="hotels_auto_complete_to_where_input_list">
                                    <li><div style={{padding: 10, display: "flex", flexDirection: "row", cursor: "pointer"}}>
                                        <div style={{height: 35, marginRight: 15, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <i className="fa fa-history" style={{color: "rgba(0,0,0,0.3)", fontSize: 22}}></i>
                                        </div>
                                        <div>
                                            <div>
                                                <p style={{fontSize: 14, fontWeight: "bolder", color: "rgba(0,0,0,0.8)"}}>
                                                    New York (LGA - Laguardia)
                                                </p>
                                                <p style={{fontSize: 14, color: "rgba(0,0,0,0.8)"}}>
                                                    United States
                                                </p>
                                            </div>
                                        </div>
                                    </div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="main-search_txt_input search_page_input" style={{border: "none", backgroundColor: "rgba(0,0,0,0.07)", borderRadius: 8}}>
                            <i style={{fontSize: 20, marginRight: 5}} className="fa fa-map-marker"></i>
                            <input id="hotel_search_forms_to_where_input_fld" onClick={open_hotels_to_where_auto_complete_pane} type="text" readOnly autoComplete="off" 
                            placeholder="Where are you traveling to?" />
                        </div>
                    </div>
                    <div style={{position: "relative", display: "flex"}} className="search_forms_to_where_input_fld_container each_flex-side">
                        <div className="main-search_txt_input search_page_input" style={{border: "none", position: "relative", backgroundColor: "rgba(0,0,0,0.07)", borderRadius: 8, marginBottom: 5}}>
                            <i style={{fontSize: 20, marginRight: 5}} className="fa-solid fa-calendar-days"></i>
                            <input id="checkin_checkout_dates_input" type="text" readOnly="true" 
                                placeholder="checkin - checkout dates"/>
                        </div>
                        <div>
                            <div onClick={hotelSearchOnSubmit} id="home_search_form_submit_btn" className="searchBtn" 
                                style={{marginLeft: 10, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 5px rgba(0,0,0,0.3)", height: 55, width: 55, marginTop: 0, border: "none", padding: 0, borderRadius: "100%"}}>
                                <i className="fa fa-search" style={{margin: 0, color: "rgba(255,255,255,0.4)"}}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function open_hotels_to_where_auto_complete_pane(){
    document.getElementById("hotel_to_where_city_auto_complete_input").style.display = "block";
    document.getElementById("hotel_to_where_city_auto_complete_input_fld").focus();
}
function open_hotels_from_where_auto_complete_pane(){
    document.getElementById("hotel_from_where_city_auto_complete_input").style.display = "block";
    document.getElementById("hotel_from_where_city_auto_complete_input_fld").focus();
}

export default SearchResultSearchForm;