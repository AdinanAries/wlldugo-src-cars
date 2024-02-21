import ResultsListContainer from "./Components/ResultsListContainer";
import SearchResultSearchForm from "./Components/SearchResultSearchForm";
import { useEffect, useState } from "react";

const CarSearchPageMain = (props) => {

    let [ loading, setLoading ] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },15000)
    }, [])

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