import Website from "reactive-site-creator/dist/components/Website";

import { PDFViewer, HorizontalBreak } from "./ExtraComponents";
import { defaultSiteData } from "./defaultData";
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
      componentOptions = {componentOptions}

      siteName = {"Reactive Site Creator"}
      basename = {"/reactive-site-creator-live"}
      isAdmin = {true}
    />
  );
}

export default App;
