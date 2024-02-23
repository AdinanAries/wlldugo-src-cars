import PriceSummary from "../../Hotel/Components/PriceSummary";

const RentalCarDriverDetails = (props) => {

    const {
        showDriverFormsPage,
        showPaymentPage,
        showDetailsPage
    } = props;

    return <div>
    <div className="checkout_page_all_info_flex_container">
        <div className="checkout_page_all_info_flex_left checkout_passengers_container" style={{borderTop: "1px solid rgba(0,0,0,0.1)"}} >
            <div style={{marginTop: 10}}>
                
            </div>
        </div>
        <div className="checkout_page_all_info_flex_right">
            <PriceSummary 
                prices={{}}
                backButtonFunction={showDetailsPage}
                buttonFunction={showPaymentPage} 
                buttonText="Payment"
                total_travelers={0}
            />
        </div>
    </div>
</div>
}

export default RentalCarDriverDetails;