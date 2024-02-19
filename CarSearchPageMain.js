import ResultsListContainer from "./Components/ResultsListContainer";
import SearchResultSearchForm from "./Components/SearchResultSearchForm";
import { useState } from "react";

const CarSearchPageMain = (props) => {

    let [ loading, setLoading ] = useState(true);

    const submitFromSearchPage = async () => {
        window.location.reload();
    }

    return <main style={{background: "white"}}>
        <div className="wrapper search-page-wrapper">
            <div style={{paddingTop: 70}}>
                <SearchResultSearchForm 
                    submitFromSearchPage={submitFromSearchPage} 
                />
                <ResultsListContainer
                    loading={loading}
                />
            </div>
        </div>
    </main>
}

export default CarSearchPageMain;