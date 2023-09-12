import React from 'react';

import { Button } from "../components/button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export class Resume extends React.Component {
    render () {
        return (
            <>
                <main className='d-flex justify-content-center'>
                    <div className='container'>
                        <h1>My Resume</h1>
                        <Button 
                            src="https://drive.google.com/file/d/1KvgVqopRqyh68754UuyNixVOWiG_jN9j/"
                            action={ "download" }
                            className={"jn-bg-pop-blue"}>
                            Download <FontAwesomeIcon className='ms-1' icon={icon({name: 'download'})}/>
                        </Button>
                        <iframe
                            src="https://drive.google.com/file/d/1KvgVqopRqyh68754UuyNixVOWiG_jN9j/preview"
                            width="100%"
                            height="400px"
                            allow='autoplay'
                            title="resume_pdf"
                        />
                    </div>
                </main>
            </>
        )
    }
}