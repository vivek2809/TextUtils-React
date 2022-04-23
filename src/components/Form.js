import React ,{useState} from 'react'

export default function Form(props) {

    const [text, setText] = useState("Enter your text here ...");


    const clickupper = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted uppercase","success");
    }

    const clicklower =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const clickdelete = ()=>{
        let newText = '';
        setText(newText);
    }

    const RemoveSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const copyText =()=>{
        let newText = document.getElementById("exampleFormControlTextarea1");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    return (
        <>
        
            <div className="container my-5 p-3" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h3 className="mb-3">{props.heading}</h3>
            <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black' }}></textarea>
            </div>

                <div className='d-flex flex-wrap'>
                    <button className="btn btn-dark m-1" onClick={clickupper}>Convert to uppercase</button>
                    <button className="btn btn-dark m-1" onClick={clicklower}>Convert to lowercase</button>
                    <button className="btn btn-dark m-1" onClick={clickdelete}>ClearText</button>
                    {/* <button className="btn btn-dark m-1" onClick={toggleMode}>{btnText}</button> */}
                    <button className="btn btn-dark m-1" onClick={copyText}>Copy</button>
                    <button className='btn btn-dark m-1' onClick={RemoveSpace}>Remove extra space</button>
                </div>
            
        </div>

            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>Your text summary </h4>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>

                <h4>Preview</h4>
                <p>{text.length >0 ? text:"Enter your text above to analyze .."}</p>
        </div>
        </>
    )
}
