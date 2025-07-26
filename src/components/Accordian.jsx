import React, { useState } from 'react'

function Accordian(props) {
    return (
        <div className='container my-3 mt-5'>
            <h1>{props.title}</h1>
            <div className="accordion" id="accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Convert to UpperCase
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This feature takes your entire input text and converts every letter into uppercase. It’s especially useful when you want to highlight important points, create attention-grabbing headings, or simply standardize the format of your content.
                            <br />For example, “hello world” becomes “HELLO WORLD”.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Convert to LowerCase
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This option changes all the letters in your text to lowercase, no matter how they were written before. It's helpful when you need your text to look neat, consistent, or calm, especially if the input came in all caps or mixed case.
                            <br />For example, “HeLLo WOrLD” becomes “hello world”.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Clear Text
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This button instantly removes all the content from the input area, giving you a blank space to start over. It saves time compared to manually selecting and deleting text, especially when working with large paragraphs.
                            <br />Use it when you're done editing or want to write something new from scratch.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Copy Text
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            With a single click, this feature will copy everything in the text box to your clipboard. Once copied, you can easily paste it anywhere—like into a document, an email, or a message—without needing to manually select the text.
                            <br />It's a quick and efficient way to move your content.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Clear Extra Blanks Text
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This smart tool will remove any extra or unwanted spaces between your words, sentences, or lines. It’s really helpful when you paste text from websites or messy sources that contain too many blank spaces.
                            <br />It ensures your text is clean, readable, and professionally formatted.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordian
