import Website from "reactive-site-creator/dist/components/Website";

import { PDFViewer, HorizontalBreak } from "./ExtraComponents";
import { defaultSiteData, componentStyles } from "./defaultData";
import './App.css'


const componentOptions = {
  PDFViewer: {
    componentName: "PDF Viewer",
    component: PDFViewer,
    isNestedComponent: false
  },
  HorizontalBreak:{
    componentName: "Horizontal Break",
    component: HorizontalBreak,
    isNestedComponent: false
  }
}

function App() {
  return (
    <Website
      defaultSiteData = {defaultSiteData}
      componentStyles = {componentStyles}
      colors = {{
        lightShade: "#EEE4E8",
        lightAccent: "#8BF6FD",
        mainBrandColor: "#17A9CC",
        darkAccent: "#1F4C57" ,
        darkShade: "#322127"
      }}  
      componentOptions = {componentOptions}

      siteName = {"Reactive Site Creator"}
      basename = {"/reactive-site-creator-live"}
      isAdmin = {true}
    />
  );
}

export default App;
