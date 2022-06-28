import React ,{useState} from "react"
import SignUpInfo from "./SignUpInfo";
import Personnalinfo from "./Personnalinfo";
import OtherInfo from "./OtherInfo";


function Form(){

    const [page , setPage] = useState(0);

    const FormTitles = ["Singup", "Personnal info", "Other"];

    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo /> ;
        } else if (page === 1) {
            return <Personnalinfo />
        } else {
            return <OtherInfo />;
        }
    };

    return ( 
        <div className="form">
            <div className="progressbar"></div>
            <div className="form-container"></div>
            <div className="header">
                <h1> {FormTitles[page]}</h1>
            </div>

            

            <div className="body">{PageDisplay()}</div>
            <div className="footer"></div>

            <button 
                        disabled = {page == 0}
                         onClick = {() => {
                            setPage((currPage) => currPage - 1) ;
                        }}
            
                        >
             Prev</button>
            <button
            disabled = {page == FormTitles.length - 1 }
             onClick = {() => {
                setPage((currPage) => currPage + 1) ;
            }}

            >
            Next</button>
            </div>
            

          
    );
}

export default Form