import React, { useEffect } from "react";

import "../styles/components/footer.css";

export class Footer extends React.Component {
    render () {
        return (
            <>
                <footer className="footer d-flex justify-content-center">
                    <div className="container">
                        Footer goes here!
                    </div>
                </footer>
            </>
        );
    }
}