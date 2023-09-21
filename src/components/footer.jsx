import React, { useEffect } from "react";

import "../styles/components/footer.css";

export class Footer extends React.Component {
    render () {
        return (
            <>
                <footer className="footer box-shadow-top d-flex justify-content-center mt-5">
                    <div className="jn-container">
                        Footer goes here!
                    </div>
                </footer>
            </>
        );
    }
}