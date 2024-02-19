import SearchFiltersLoader from "../../Pages/SearchPage/Components/SearchFiltersLoader";
import Ads from "../../Pages/SearchPage/Components/Ads";
import FlightLoaderCard from "../../Pages/SearchPage/Components/FlightLoaderCard";
//import StayOfferItem from "./StayOfferItem";
//import SearchFilters from "./SearchFilters";

const ResultsListContainer = (props) => {

    const {
        /*selectHotelOffer*/
    } = props;

    return (
        <div style={{marginTop: 10, minHeight: "calc(100vh - 300px)", padding: 0}}>
            <div className="search_list_main_flex_container">
                <div id="search_list_main__settings_section" className="search_list_main__settings_section">
                    {/*!props.loading && <SearchFilters />*/}
                    {props.loading && <SearchFiltersLoader />}
                </div>
                <div className="search_list_main_tickets_section hotel_search_results_main_items_container">
                    {!props.loading && <div style={{paddingBottom: 10, marginTop: 10, paddingTop: 10, borderBottom: "1px solid rgba(0,0,0,0.1)",}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <div onClick={()=>document.getElementById('search_list_main__settings_section').style.display='block'}
                                style={{display: "flex", alignItems: "center"}}>
                                <div className="display_flex_on_1000px" onClick={()=>{}} style={{cursor: "pointer", marginRight: 20, marginLeft: 5, display: "none",}}>
                                    <div style={{backgroundColor: "rgb(23, 87, 148)", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", borderRadius: "100%", width: 35, height: 35, display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <i className="fas fa-sliders-h" style={{color: "rgba(255,255,255,0.5)"}}></i>
                                    </div>
                                </div>
                                <div style={{marginLeft: 5}}>
                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <p style={{color: "rgba(0,0,0,0.8)", fontSize: 10, fontFamily: "'Prompt', Sans-serif"}}>
                                            $450
                                        </p>
                                        <p style={{color: "crimson", fontSize: 10, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif"}}>
                                            $650
                                        </p>
                                        <p style={{color: "rgba(0,0,0,0.8)", fontSize: 10, fontFamily: "'Prompt', Sans-serif"}}>
                                            $890
                                        </p>
                                    </div>
                                    <input 
                                        style={{width: "100%"}}
                                        onInput={()=>{}}
                                        className="styled-slider slider-progress" 
                                        min={0} max={5} 
                                        value={3} type="range" />
                                </div>
                            </div>
                            <div style={{marginLeft: 20, display: "flex"}}>
                                <div style={{position: "relative"}}>
                                    {/*
                                        isShowTimesFilter &&
                                        <TimesFilter 
                                            filterTimes={filterTimes}
                                            filtersByTimes={filtersByTimes}
                                            filterFlights={filterFlights}
                                            hideTimesFilter={hideTimesFilter}
                                        />
                                    */}
                                    <div onClick={()=>{alert("showing filter pane")}}
                                        className="hover_bg-grey show_only_mobile_flex" 
                                            style={{display: "none", cursor: "pointer", borderRadius: "100%", height: 40, width: 40, justifyContent: "center", alignItems: "center"}}>
                                        <i style={{color: "#c751b9", fontSize: 17}} 
                                            className="fa-solid fa-business-time"></i>    
                                    </div>
                                    <div onClick={()=>{alert("showing filter pane")}}
                                        className="mobile_hidden hover_bg-grey" style={{cursor: "pointer", padding: "7px 13px", borderRadius: 8, display: "flex", alignItems: "center"}}>
                                        <i style={{marginRight: 10, color: "#c751b9", fontSize: 13.5}} 
                                            className="fa-solid fa-business-time"></i>
                                        <p style={{color: "rgb(23, 87, 148)", fontSize: 13, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif"}}>
                                            Time
                                        </p>
                                        <i style={{marginLeft: 15, color: "rgba(0,0,0,0.7)", fontSize: 13}} 
                                            className="fa-solid fa-angle-down"></i>
                                    </div>
                                </div>
                                <div style={{position: "relative"}}>
                                    {/*
                                        isShowBagsFilter && 
                                        <BagsFilter 
                                            checkedBagsFilterQuantity={checkedBagsFilterQuantity}
                                            carryOnBagsFilterQuantity={carryOnBagsFilterQuantity}
                                            setCheckedBagsFilterQuantity={setCheckedBagsFilterQuantity}
                                            setCarryOnBagsFilterQuantity={setCarryOnBagsFilterQuantity}
                                            hideBagsFilter={hideBagsFilter} 
                                            maxCheckedBagsFilter={maxCheckedBagsFilter}
                                            maxCarryOnBagsFilter={maxCarryOnBagsFilter}
                                            filterBags={filterBags}
                                        />
                                    */}
                                    <div onClick={()=>{alert("showing filter pane")}}
                                        className="hover_bg-grey show_only_mobile_flex" style={{display: "none", cursor: "pointer", borderRadius: "100%", height: 40, width: 40, justifyContent: "center", alignItems: "center"}}>
                                        <i style={{color: "#c751b9", fontSize: 19}} 
                                            className="fa-solid fa-person-walking-luggage"></i>    
                                    </div>
                                    <div onClick={()=>{alert("showing filter pane")}}
                                        className="mobile_hidden hover_bg-grey" style={{cursor: "pointer", padding: "7px 13px", borderRadius: 8, display: "flex", alignItems: "center"}}>
                                        <i style={{marginRight: 10, color: "#c751b9", fontSize: 15}} 
                                            className="fa-solid fa-person-walking-luggage"></i>
                                        <p style={{color: "rgb(23, 87, 148)", fontSize: 13, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif"}}>
                                            Bags
                                        </p>
                                        <i style={{marginLeft: 15, color: "rgba(0,0,0,0.7)", fontSize: 13}} 
                                            className="fa-solid fa-angle-down"></i>
                                    </div>
                                </div>
                                <div style={{position: "relative"}}>
                                    {/*
                                        isShowDurationFilter && 
                                        <DurationFilter 
                                            flightsMinDuration={flightsMinDuration}
                                            flightsMaxDuration={flightsMaxDuration}
                                            SLIDER_MIN_PERCENT={D_SLIDER_MIN_PERCENT}
                                            slideDurationFilter={slideDurationFilter}
                                            durationSlider={durationSlider}
                                            flightsSliderMaxDuration={flightsSliderMaxDuration}
                                            hideDurationFilter={hideDurationFilter} 
                                        />
                                    */}
                                    <div onClick={()=>{alert("showing filter pane")}}
                                        className="hover_bg-grey show_only_mobile_flex" style={{display: "none", cursor: "pointer", borderRadius: "100%", height: 40, width: 40, justifyContent: "center", alignItems: "center"}}>
                                        <i style={{color: "#c751b9", fontSize: 17}} 
                                            className="fa-solid fa-clock"></i>    
                                    </div>
                                    <div onClick={()=>{alert("showing filter pane")}}
                                        className="mobile_hidden hover_bg-grey" style={{marginLeft: 5, cursor: "pointer", padding: "7px 13px", borderRadius: 8, display: "flex", alignItems: "center"}}>
                                        <i style={{marginRight: 10, color: "#c751b9", fontSize: 13}} 
                                            className="fa-solid fa-clock"></i>
                                        <p style={{color: "rgb(23, 87, 148)", fontSize: 13, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif"}}>
                                            Duration
                                        </p>
                                        <i style={{marginLeft: 15, color: "rgba(0,0,0,0.7)", fontSize: 13}} 
                                            className="fa-solid fa-angle-down"></i>
                                    </div>
                                </div>
                                <div style={{position: "relative"}}>
                                    {/*   isShowPriceGrid &&
                                        <FlightPricesGrid hidePricesGrid={hidePricesGrid} />
                                */}
                                    <div onClick={()=>{alert("showing filter pane")}}
                                        className="hover_bg-grey show_only_mobile_flex" style={{display: "none", cursor: "pointer", borderRadius: "100%", height: 40, width: 40, justifyContent: "center", alignItems: "center"}}>
                                        <i style={{color: "blue", fontSize: 17}} 
                                            className="fa-solid fa-chart-column"></i>    
                                    </div>
                                    <div onClick={()=>{alert("showing filter pane")}}
                                        className="mobile_hidden hover_bg-grey"
                                        style={{ marginLeft: 5, cursor: "pointer", padding: "7px 13px", display: "flex", alignItems: "center", borderRadius: 50}}>
                                        <i style={{marginRight: 10, color: "#c751b9", fontSize: 14}}
                                            class="fa-solid fa-chart-column"></i>
                                        <p style={{color: "rgb(23, 87, 148)", fontSize: 13, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif"}}>
                                            Prices
                                        </p>
                                        <i style={{marginLeft: 15, color: "rgba(0,0,0,0.7)", fontSize: 13}} 
                                            className="fa-solid fa-angle-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder", fontSize: 12, color: "rgba(0,0,0,0.7)", marginTop: 20}}>
                            <i className="fas fa-search" style={{color: "rgba(0,0,0,0.5)", fontSize: 12, marginRight: 10}}></i>
                            this search returned <span style={{fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder", fontSize: 12, color: "blue",}}>
                                300</span> items...</p>
                    </div>}
                    <div id="search_results_list_items">
                        <p>Car Search Results</p>
                        {/*
                            !props.loading && <>
                                <StayOfferItem 
                                    selectHotelOffer={selectHotelOffer} 
                                />
                                <StayOfferItem 
                                    selectHotelOffer={selectHotelOffer} 
                                />
                            </>
                            */}
                        { props.loading ? <FlightLoaderCard /> : "" }
                        { props.loading ? <FlightLoaderCard /> : "" }
                        { props.loading ? <FlightLoaderCard /> : "" }
                        { props.loading ? <FlightLoaderCard /> : "" }
                        { props.loading ? <FlightLoaderCard /> : "" }
                        
                    </div>
                </div>
                <div className="search_list_main_ads_section">
                    <Ads />
                </div>
            </div>
        </div>
    );
}

export default ResultsListContainer;