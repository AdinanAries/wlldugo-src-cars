import { markup } from "../../helpers/Prices";
import { get_currency_symbol } from "../../helpers/general";

const PriceSummary = (props) => {
    const total_travelers = 3;
    /*const { payments, prices, total_travelers } = props;
    let overallTotal = parseFloat(prices.total_amount);*/
    
    /*const { extras } = prices;
    const EXTRAS_MARKUP = [];
    extras.forEach(each=>{
        overallTotal=(overallTotal+each.total);
        EXTRAS_MARKUP.push(
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                <p style={{fontSize: 14, letterSpacing: 1, color: "rgba(0,0,0,0.7)"}}>
                    {each.name} ({each.quantity})
                </p>
                <p style={{fontSize: 14, letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                    <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}} 
                            dangerouslySetInnerHTML={{__html: get_currency_symbol(prices.base_currency)}}></span>
                    {(markup(each.total).new_price).toFixed(2)}
                </p>
            </div>
        );
    });*/

    return (
        <div style={{border: "1px solid rgba(0,0,0,0.1)", borderRadius: 9, padding: 10}}>
            <p style={{fontSize: 16, letterSpacing: 1, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                Price Summary
            </p>
            <div style={{marginTop: 20, borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: 10}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <p style={{fontSize: 14, letterSpacing: 1, color: "rgba(0,0,0,0.8)"}}>
                        {total_travelers>1 ? (total_travelers+" Travelers"): (total_travelers+" Traveler")}:
                    </p>
                    <p style={{fontSize: 14, letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                        <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}} 
                                dangerouslySetInnerHTML={{__html: get_currency_symbol("USD")}}></span>
                        {/*(markup(prices.total_amount).new_price).toFixed(2)*/}
                        540.10
                    </p>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                    <p style={{fontSize: 14, letterSpacing: 1, color: "rgba(0,0,0,0.7)"}}>
                        Flight
                    </p>
                    <p style={{fontSize: 14, letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                        <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}} 
                                dangerouslySetInnerHTML={{__html: get_currency_symbol("USD")}}></span>
                        {/*(markup(prices.base_amount).new_price).toFixed(2)*/}
                        640.43
                    </p>
                </div>
                {/*EXTRAS_MARKUP.map(each=>each)*/}
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                    <p style={{fontSize: 14, letterSpacing: 1, color: "rgba(0,0,0,0.7)"}}>
                        Taxes and fees
                    </p>
                    <p style={{fontSize: 14, letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                        <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}} 
                                dangerouslySetInnerHTML={{__html: get_currency_symbol("USD")}}></span>
                        {/*(markup(prices.tax_amount).new_price).toFixed(2)*/}
                        120.11
                    </p>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                <div>
                    <p style={{fontSize: 16, letterSpacing: 1, color: "rgba(0,0,0,0.8)", fontWeight: "bolder"}}>
                        Total
                    </p>
                    <p style={{fontSize: 12, marginTop: 5, color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif"}}>
                        <i style={{marginRight: 10, color: "green"}} className="fa fa-info"></i>
                        prices are quoted in {"usd"}
                    </p>
                </div>
                <p style={{fontSize: 17, fontWeight: "bolder", letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                    <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}} 
                                dangerouslySetInnerHTML={{__html: get_currency_symbol("USD")}}></span>
                    {/*(markup(overallTotal).new_price).toFixed(2)*/}
                    980.24
                </p>
            </div>
            <div className="checkout_page_main_checkout_btn_container">
                <p style={{fontSize: 12, textAlign: "left"}} className="checkout_page_mobile_button_place_total_price_display">
                    Total:
                    <span style={{fontSize: 12, color: "rgb(23, 87, 148)", fontWeight: "bolder"}}> <span 
                        style={{fontSize: 12, fontFamily: "'Prompt', Sans-serif"}} 
                        dangerouslySetInnerHTML={{__html: get_currency_symbol("USD")}}></span>
                            {/*(markup(overallTotal).new_price).toFixed(2)*/}
                            980.24
                    </span>
                </p>
                <div style={{display: "flex", marginTop: 10, justifyContent: "space-between"}}>
                    <div onClick={props.backButtonFunction} style={{cursor: "pointer", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", backgroundColor: "crimson", color: "white", borderRadius: "100%", width: 40, height: 40, display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    {
                        
                        ( !props.isPaymentPage ) ?
                        <div onClick={props.buttonFunction} className="checkout_page_main_checkout_btn" style={{marginTop: 0, width: "calc(100% - 50px)"}}>
                            Continue
                            <span style={{fontSize: 13, color: "rgba(255,255,255,0.4)", marginLeft: 10}}>
                                ({props.buttonText})</span>
                        </div> : <div></div>
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default PriceSummary;

/*<div  onClick={props.buttonFunction} className="checkout_page_main_checkout_btn">
    <i style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}} className="fa fa-credit-card"></i>Checkout
</div>*/