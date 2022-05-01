import { Document, Page, pdfjs, } from 'react-pdf';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMinus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { WebContext} from "reactive-site-creator/dist/components/Website"
import ComponentMargin from "reactive-site-creator/dist/components/subComponents/ComponentMargin"

import {defaultSiteData, defaultWebStyles} from "reactive-site-creator/dist/components/defaultDataEmpty"

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
  };

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export function PDFViewer(props){
    const [file, setFile] = useState('/reactive-site-creator-live/sample.pdf');
    const [numPages, setNumPages] = useState(null);
    const [isShowButtons, showButtons] = useState(false)
    const [pageNumber, setPageNumber] = useState(1);

    function onFileChange(event) {
        setFile(event.target.files[0]);
      }

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    
    return (
        <div 
            style={{cursor:'auto'}}
            data-no-dnd = "true"
            className='flex-column d-flex relative-div'
            onMouseEnter={() => {
                showButtons(true);
            }}
            onMouseLeave={() => {
                showButtons(false);
            }}    
        >   
        <h3 className='text-center'>Custom PDF Viewer</h3>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className = {"flex-row d-flex"}>
                <Page 
                    pageNumber={pageNumber} 
                    className ="mx-auto border border-dark bg-light" 
                    style = {{width:"100%"}}
                    
                />
            </Document> 
            <div className='flex-row d-flex relative-div w-50 mx-auto'>
                <div>

                    <button 
                        className='btn'
                        onClick={()=>{
                            if (pageNumber !== 1){
                                setPageNumber(prevState=>prevState-1)
                            }
                        }}
                    >
                        <   FontAwesomeIcon icon={pageNumber !== 1?faArrowLeft:faMinus}/>
                    </button>
                    <span className='mt-1'>
                        Page {pageNumber} of {numPages}
                    </span>
                    <button 
                        className='btn'
                        onClick={()=>{
                            if (pageNumber !== numPages){
                                setPageNumber(prevState=>prevState+1)
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={pageNumber !== numPages?faArrowRight:faMinus}/>
                    </button>

                </div>
                
                {isShowButtons &&
                <div className='flex-grow-1 text-end ps-4'>
                    <input onChange={onFileChange} type="file" />
                </div>
                }
            </div>
        </div>
    );
}

export function HorizontalBreak(props){
    return (
        <div 
           className='w-100  px-5'
        >    
            <div 
                className='bg-dark'
                style={{height:"2px"}}>
                
            </div>
        </div>
    );
}

export function StartOver(props){

    const {webStyle, appMethods, apiMethods, adminSettings, localDisplaySettings} = useContext(WebContext)
  
    let componentStyles = {}
    try {
      componentStyles = 
      {
        textColor:webStyle.componentStyles.styledLink.textColor,
        backgroundColor:webStyle.componentStyles.styledLink.backgroundColor
      }
    } catch (error) {
      
  }


    let borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor]  
    let shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor]
    let borderShape = webStyle.componentStyles.styledLink.borderShape || webStyle.componentStyles.all.borderShape

    let borderAndShadow = ""
    if (webStyle.componentStyles.all.borderSize!==0){
        borderAndShadow +=`${borderColor} 0px 1px ${webStyle.componentStyles.all.borderSize*2}px, ${borderColor} 0px 0px 0px ${webStyle.componentStyles.all.borderSize}px, `
    }
    borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C',shadowColor)


    return(
        <ComponentMargin componentName = "styledLink" webStyle = {webStyle} >
        <div 
          className="flex-grow-1 text-center " data-no-dnd="true"
          style={{...props.style, marginTop:".4em",marginBottom:".4em"}}
          
        >
             <button
                webStyle = {webStyle}
                linkText = {"Start Over"}
                adminSettings = {adminSettings}
                localDisplaySettings = {localDisplaySettings}
              
                style={{backgroundColor:webStyle.colors[componentStyles.backgroundColor], boxShadow: borderAndShadow,color:webStyle.colors[componentStyles.textColor]}}
                className = {"py-3 w-50 justify-content-center "+borderShape}
                onClick = {()=>{
                    appMethods.startOver()
                    
                }}
            >
                Start Over
            </button>
            
          
        </div>
        </ComponentMargin>
        
      
      //   <div 
      //   style={{...props.style}}      
      //   className=" " 
      //   data-no-dnd="true"        
      //   onMouseEnter={() => {
      //   showButtons(true);
      // }}
      // onMouseLeave={() => {
      //   showButtons(false);
      // }}
    
      )
  }