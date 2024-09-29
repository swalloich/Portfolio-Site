import React from 'react';
import Button from "../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const Resume = () => {
  return (
    <main className='d-flex justify-content-center'>
      <div className='jn-container'>
        <h1>My Resume</h1>
        <Button
          src="https://drive.google.com/uc?export=download&id=1KvgVqopRqyh68754UuyNixVOWiG_jN9j"
          action={"download"}
          className={"jn-bg-pop-blue mb-3"}>
          Download <FontAwesomeIcon className='ms-1' icon={icon({ name: 'download' })} />
        </Button>
        <iframe
          src="https://drive.google.com/file/d/1KvgVqopRqyh68754UuyNixVOWiG_jN9j/preview"
          width="100%"
          height="400px"
          allow='autoplay'
          title="resume_pdf"
        />
        <div>
          <h2>
            Experience
          </h2>
          <div>
            <h4 className='mb-1'>Web Developer</h4>
            <div className='d-flex justify-content-md-between flex-column flex-md-row'>
              <div>Brigham Young University | Provo, UT</div>
              <div>January 2023 - Present</div>
            </div>
            <ul>
              <li>Use the Drupal content management system to create and ensure the quality of McKay School webpage content.</li>
              <li>Develop scripts that automate tasks and increase team efficiency.</li>
              <li>Create robust, easily maintainable style sheets using SASS</li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Education</h2>
          <div>
            <h4 className='mb-1'>Bachelor of Software Engineering</h4>
            <div className='d-flex justify-content-md-between flex-column flex-md-row'>
              <div>Brigham Young University - Idaho</div>
              <div>July 2024</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Resume;
