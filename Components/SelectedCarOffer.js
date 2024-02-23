import CONSTANTS from "../../Constants/Constants";
import { useState } from "react";
import { getApiHost } from "../../Constants/Environment";
import { markup } from "../../helpers/Prices";
import SelectedCarFullInfo from "./SelectedCarFullInfo";
import RentalCarDriverDetails from "./RentalCarDriverDetails";
import CheckoutPaymentPage from "./CheckoutPaymentPage";

const SelectedCarOffer = (props) => {
    const [ activePage, setActivePage ] = useState(CONSTANTS.checkout_pages.info);
    const [ options, setOptions ] = useState();
    const API_HOST=getApiHost();

    const nav_separator_style = {
        padding: 10,
        color: "rgba(0,0,0,0.2)"
    }

    const showDetailsPage = () => {
        setActivePage(CONSTANTS.checkout_pages.info)
    }

    const showDriverFormsPage = () => {
        setActivePage(CONSTANTS.checkout_pages.rental_car.driver_forms);
    }

    const showPaymentPage = async () => {
        const overallTotal=1230
        setActivePage(CONSTANTS.checkout_pages.payment);
        // Creating payment intent
        const pi = await fetch((API_HOST+'/api/payment/secret/'), {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: markup(overallTotal).new_price.toFixed(2),
                currency: 'usd'
            })
        }).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
        const {client_secret: clientSecret} = pi;

        // Render the form using the clientSecret
        setOptions({
            // passing the client secret obtained from the server
            ...options,
            clientSecret,
        });
    }

    return (
        <div className="page_popup_cover_pane hotel_checkout_popup_cover_page" style={{display: "block"}}>
            <div className="wrapper hotel_checkout_page_main_wrapper">
                <div style={{paddingTop: 10, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <p className="pop-up-close-btn" onClick={props.unselectCarOffer} 
                        style={{cursor: "pointer", color: "rgba(0,0,0,0.6)", border: "1px solid rgba(0,0,0,0.1)", width: 40, height: 40, borderRadius: "100%", fontSize: 22, marginRight: 5, display: "flex", justifyContent: "center", alignItems: "center"}}>
                        &times;
                    </p>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <div onClick={showDetailsPage} style={{cursor: "pointer", padding: 10, 
                                    color: (
                                            (activePage===CONSTANTS.checkout_pages.info) 
                                            || (activePage===CONSTANTS.checkout_pages.rental_car.driver_forms)
                                            || (activePage===CONSTANTS.checkout_pages.payment)
                                        ) ? "rgb(201, 0, 176)" : "rgba(0,0,0,0.6)"}}>
                                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                                    <i style={{marginRight: 10, 
                                        opacity: 
                                        (
                                            (activePage===CONSTANTS.checkout_pages.info) 
                                            || (activePage===CONSTANTS.checkout_pages.rental_car.driver_forms)
                                            || (activePage===CONSTANTS.checkout_pages.payment)
                                        ) ? 1 : 0.3}} className='fa-solid fa-hotel' aria-hidden="false"></i>
                                    Car Details</p>
                            </div>
                            <div style={nav_separator_style}>{">"}</div>
                            <div onClick={showDriverFormsPage} style={{cursor: "pointer", padding: 10, 
                                color: (
                                    (activePage===CONSTANTS.checkout_pages.rental_car.driver_forms)
                                    || (activePage===CONSTANTS.checkout_pages.payment)
                                ) ? "rgb(201, 0, 176)" : "rgba(0,0,0,0.6)"}}>
                                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                                    <i style={{marginRight: 10, 
                                            opacity: (
                                            (activePage===CONSTANTS.checkout_pages.rental_car.driver_forms)
                                            || (activePage===CONSTANTS.checkout_pages.payment)
                                        ) ? 1 : 0.3}} className='fa-solid fa-users' aria-hidden="false"></i>
                                    Driver</p>
                            </div>
                            <div style={nav_separator_style}>{">"}</div>
                            <div onClick={showPaymentPage} style={{cursor: "pointer", padding: 10, 
                                color: (activePage===CONSTANTS.checkout_pages.payment)  ? 
                                    "rgb(201, 0, 176)" : "rgba(0,0,0,0.6)"}}>
                                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                                    <i style={{marginRight: 10, 
                                        opacity: (activePage===CONSTANTS.checkout_pages.payment
                                            ) ? 1 : 0.3}} className='fa-solid fa-credit-card' aria-hidden="false"></i>
                                    Payment</p>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    (activePage===CONSTANTS.checkout_pages.info) ?
                        <SelectedCarFullInfo 
                            unselectCarOffer={props.unselectCarOffer}
                            showDriverFormsPage={showDriverFormsPage}
                            showPaymentPage={showPaymentPage}
                            showDetailsPage={showDetailsPage}
                        /> : ""
                }
                {
                    (activePage===CONSTANTS.checkout_pages.rental_car.driver_forms) ?
                        <RentalCarDriverDetails
                            showDriverFormsPage={showDriverFormsPage}
                            showPaymentPage={showPaymentPage}
                            showDetailsPage={showDetailsPage}
                        /> : ""
                }
                {
                    (activePage===CONSTANTS.checkout_pages.payment) ?
                        <CheckoutPaymentPage 
                            options={options} // For Stripe
                            showDriverFormsPage={showDriverFormsPage}
                            showPaymentPage={showPaymentPage}
                        /> : ""
                }

            </div>
        </div>
    );
}

export default SelectedCarOffer;