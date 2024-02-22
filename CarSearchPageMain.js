import ResultsListContainer from "./Components/ResultsListContainer";
import SearchResultSearchForm from "./Components/SearchResultSearchForm";
import { useEffect, useState } from "react";
import SelectedCarOffer from "./Components/SelectedCarOffer";

const CarSearchPageMain = (props) => {

    let [ loading, setLoading ] = useState(true);
    let [ selectedOfferCarId, setSelectedOfferCarId ] = useState("");

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },15000)
    }, [])

    const submitFromSearchPage = async () => {
        window.location.reload();
    }

    const selectOfferCar = (id) => {
        setSelectedOfferCarId(id);
    }

    const unselectCarOffer = () => {
        setSelectedOfferCarId("");
    }

    return <main style={{background: "white"}}>
        {
            selectedOfferCarId && <SelectedCarOffer
                unselectCarOffer={unselectCarOffer}
            />
        }
        <div className="wrapper search-page-wrapper">
            <div style={{paddingTop: 70}}>
                <SearchResultSearchForm 
                    submitFromSearchPage={submitFromSearchPage} 
                />
                <ResultsListContainer
                    selectOfferCar={selectOfferCar}
                    loading={loading}
                />
            </div>
        </div>
    </main>
}

export default CarSearchPageMain;