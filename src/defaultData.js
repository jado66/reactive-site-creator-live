export const defaultSiteData = {
    siteName: "New Website",
    pages: [
        {
          id:"Page-1",
          name:"Home",
          path:"/",
          components:
            [
                {  name: "Header",
                    id: `Home-Header-0-001`,
                    content:{
                        header: "Reactive Site Creator (Alpha Release)",
                        type: 'h2'
                    }
                },    
              {
                  name: "NavigationBar",
                  id: `Home-NavBar-0-001 `,
                  content:{}
              },
              {
                name: "Mosaic",
                id: `Home-Mosaic-1-042 `,
                content:{
                    lImageContent: {},
    
                    lTitle: "Component Based",
                    lSubTitle: "Using Custom React Components",
                    lLinkText: `Components can be found here`,
                    lHref: "/components",
            
                    rImageContent: {},
            
                    rTitle: "Everything is Editable",
                    rSubTitle: "Components Can Be dragged",
                    rLinkText: `Contact Me For Questions`,
                    rHref: "/contact",
                    }
              },
              {
                name: "TextEditor",
                id:"Home-TextEditor-4-093",
                content:{
                    html:`
                    <h6 class="ql-align-center">
                    <br>
                    </h6>
                    <h2 class="ql-align-center">Here is some text you can edit.</h2>
                    <h6 class="ql-align-center">
                    <br>
                    </h6>
                    <p><strong>Hover the mouse over me and click on the pencil icon (top right) to edit this component!</strong></p>
                    <p class="ql-align-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet scelerisque magna eget rhoncus. Vivamus eleifend nulla nec rhoncus vulputate. Nullam sit amet lorem at ipsum porttitor egestas vel non risus. Proin mauris elit, tincidunt tempor odio et, convallis iaculis risus. Sed metus elit, imperdiet eget nisi sed, imperdiet sodales ante. Cras dapibus lectus a tellus congue, non ultricies ipsum blandit. Duis ac orci feugiat enim cursus sollicitudin.</p>
                    <p class="ql-align-justify">Nullam sit amet ultricies erat. Donec nibh orci, ullamcorper in consectetur in, condimentum et mi. Ut fermentum nulla vel elementum commodo. Nullam aliquam consectetur pharetra. Praesent sit amet eros leo. Nulla pharetra ac elit et bibendum. Nunc tempor, nisl in malesuada vestibulum, elit lacus laoreet sapien, vel fermentum lacus felis ut diam. Sed faucibus eget massa quis congue. Donec et mauris pharetra, commodo libero ac, porttitor purus. Integer pellentesque nisi sit amet lorem faucibus sagittis. Sed vehicula purus in erat tempus vulputate. Integer cursus massa neque, a mattis lorem tincidunt vitae. Proin dictum consequat magna, commodo tempus mi euismod quis. Suspendisse in orci sem. Fusce eget posuere turpis, viverra imperdiet justo.</p>
                    <p class="ql-align-justify">Mauris varius lacus sed nunc scelerisque dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec fringilla accumsan eros, non sodales arcu rutrum in. Cras vestibulum sed ante quis mollis. Donec sed leo id ligula ultrices varius. Aliquam erat volutpat. Phasellus convallis velit nibh, sit amet eleifend risus ullamcorper sit amet. Aenean iaculis velit in diam fermentum, nec sollicitudin ante cursus. In diam felis, faucibus sit amet commodo sed, ullamcorper at neque. Pellentesque lobortis, elit sed tempus scelerisque, tortor tortor imperdiet libero, id condimentum augue tortor id dui. Aenean congue neque non metus rhoncus, ut interdum nisi bibendum. Donec pulvinar sapien quis quam posuere tincidunt nec laoreet metus. Nunc laoreet nulla porttitor risus convallis rhoncus. Duis vitae mollis arcu, in convallis augue. Nulla urna arcu, tempor quis tellus quis, tincidunt lobortis metus.</p>`
                }
              },
              {
                name: "Footer",
                id: `Home-Footer-2-051 `,
                content:{}
              }
            ]
        },
        {
          id:"Page-2",
          name:"Components",
          path:"/components",
          components:
            [
                {  name: "Header",
                    id: `Components-Header-0-001`,
                    content:{
                        header: "Reactive Site Creator (Alpha Release)",
                        type: 'h2'
                    }
                },    
                {
                    name: "NavigationBar",
                    id: `Components-NavBar-1-001`,
                    content:{}
                },
                {
                    name: "TextEditor",
                    id: "Components-TextEditor-3-002",
                    content: {
                        html: `<h2 class="ql-align-center">How to add, move, and delete components</h2>
                        <h6 class="ql-align-center">
                        <br>
                        </h6>
                        <h5>Adding Components</h5>
                        <h6>
                        <br>
                        </h6>
                        <p class="ql-indent-1">Place the cursor in between components and a blue horizontal bar will appear. It will look like this:</p>
                        <p class="ql-align-center ql-indent-1">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfoAAAAECAYAAABm+v2UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAwSURBVGhD7dUxEQAgAAOxgl7kogdYUNFLlpfwY+1zAwBUmr8AQCGjB4BiRg8AtZIHEUcDRTJWKksAAAAASUVORK5CYII=">
                        </p>
                        <p class="ql-indent-1">Upon clicking it, a selection of components will appear. Click an option to insert the selected component or click away to hide the blue horizontal bar. </p>
                        <h5>Moving Components</h5>
                        <h6>
                        <br>
                        </h6>
                        <p class="ql-indent-1">Hover the cursor slightly above a component and the cursor will change to look like this:</p>
                        <p class="ql-align-center ql-indent-1">
                        <img src="data:image/png;base64,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">
                        </p>
                        <p class="ql-indent-1">Click and holding for 1/4 of a second will allow the component to be dragged vertically about the page. Simply, release the mouse button to drop the component into place</p>
                        <h5>Deleting Components</h5>
                        <h6>
                        <br>
                        </h6>
                        <p class="ql-indent-1">Move the cursor slightly above a component, the same spot it can be moved from. Click to select the component. Click again to unselect the component. When components are selected, a "<strong>Delete Components</strong>" button will appear. Click the button to delete all selected components.</p>`
                    }
                },
                {  name: "Header",
                    id: `Components-Header-2-001`,
                    content:{
                        header: "Below Are All Site Components (as of v0.1.29)",
                        type: 'h2'
                    }
                },  
                {
                    name: "HorizontalBreak",
                    id: `Components-HorizontalBreak-4-001`,
                    content:{}
                },
                {
                    name: "Header",
                    id: `Components-Header-5-001`,
                    content:{
                        header: "Mosaic",
                        type: 'h2'
                    }
                },
                {
                    name: "Mosaic",
                    id: `Components-Mosaic-6-001`,
                    content:{}
                },
                {
                    name: "HorizontalBreak",
                    id: `Components-HorizontalBreak-7-001`,
                    content:{}
                },
                {
                    name: "Header",
                    id: `Components-Header-8-001`,
                    content:{
                        header: "Subscriber Box",
                        type: 'h2'
                    }
                },
                {
                    name: "SubscriberBox",
                    id: `Components-Subscriber-9-001`,
                    content:{}
                },
                {
                    name: "HorizontalBreak",
                    id: `Components-HorizontalBreak-10-001`,
                    content:{}
                },
                {
                    name: "Header",
                    id: `Components-Header-11-001`,
                    content:{
                        header: "Styled Links",
                        type: 'h2'
                    }
                },
                {
                    name: "StyledLink",
                    id: `Components-StyledLink-12-001`,
                    content:{}
                },
                {
                    name: "StyledLink",
                    id: `Components-StyledLink-13-001`,
                    content:{}
                },
                {
                    name: "StyledLink",
                    id: `Components-StyledLink-14-001`,
                    content:{}
                },
                {
                    name: "StyledLink",
                    id: `Components-StyledLink-15-001`,
                    content:{}
                },
                {
                    name: "HorizontalBreak",
                    id: `Components-HorizontalBreak-16-001`,
                    content:{}
                },
                {
                    name: "Header",
                    id: `Components-Header-17-001`,
                    content:{
                        header: "Text Editor",
                        type: 'h2'
                    }
                },
                {
                    name: "TextEditor",
                    id: `Components-TextEditor-18-001`,
                    content:{
                        html:"<h3>Here is a text editor</h3><span>Click the pencil to edit me</span>"
                    }
                },
                {
                    name: "TextEditor",
                    id: `Components-TextEditor-19-001`,
                    content:{
                        isBacked:true,
                        html:"<h3>Here is another text editor</h3><span>Click the cog icon to add or remove a background</span>"
                    }
                },
                {
                    name: "HorizontalBreak",
                    id: `Components-HorizontalBreak-19-001`,
                    content:{}
                },
                {
                    name: "Header",
                    id: `Components-Header-20-001`,
                    content:{
                        header: "Slide Show",
                        type: 'h2'
                    }
                },
                {
                    name: "PictureSlideShow",
                    id: `Components-PhotoGallery-21-001`,
                    content:{}
                },
                {
                    name: "HorizontalBreak",
                    id: `Components-HorizontalBreak-25-001`,
                    content:{}
                },
                {
                    name: "Header",
                    id: `Components-Header-26-001`,
                    content:{
                        header: "Subscription/Product Cards",
                        type: 'h2'
                    }
                },
                {
                    name: "SubscriptionCards",
                    id: `Components-PhotoGallery-27-001`,
                    content:{}
                },
                {
                    name: "HorizontalBreak",
                    id: `Components-HorizontalBreak-22-001`,
                    content:{}
                },
                {
                    name: "Header",
                    id: `Components-Header-23-001`,
                    content:{
                        header: "Photo Gallery - In progress (v0.1.29)",
                        type: 'h2'
                    }
                },
                {
                    name: "PhotoGallery",
                    id: `Components-PhotoGallery-24-001`,
                    content:{}
                },
                {
                    name: "HorizontalBreak",
                    id: `Components-HorizontalBreak-28-001`,
                    content:{}
                },
                {
                    name: "Header",
                    id: `Components-Header-29-001`,
                    content:{
                        header: "Easily Add Custom Components",
                        type: 'h2'
                    }
                },
                {
                    name: "PDFViewer",
                    id: `Components-PDFViewer-30-001`,
                    content:{}
                },
                
            ]
        }, 
        {
          id:"Page-3",
          name:"Tutorials",
          path:"/tutorials",
          components:
            [
                {
                    name: "Header",
                    id: `Tutorials-Header-1-001`,
                    content:{
                        header: "Reactive Site Creator",
                        type: 'h2'
                    }
                    },
              {
                name: "NavigationBar",
                id: `Tutorials-NavBar-1-001`,
                content:{}
              },
              {
                name: "Header",
                id: `Tutorials-Header-29-001`,
                content:{
                    header: "How To Get Started",
                    type: 'h2'
                }
                },
              {
                name: "TextEditor",
                id: `Home-TextEditor-2-948`,
                content: {
                  isBacked: true,
                  html:`<h2>Installation and Usage</h2>
                  <h6>
                  <br>
                  </h6>
                  <p>Installation is easy. First create a react app and then install the reactive-site-creator package.</p>
                  <h6>
                  <br>
                  </h6>
                  <h3>Create a React App</h3>
                  <h6>
                  <br>
                  </h6>
                  <p>First you will to create a react app. To do this make sure you have <a href="https://nodejs.dev/" rel="noopener noreferrer" target="_blank">node.js</a> installed. Then open a terminal and copy and paste the following one line at a time:</p>
                  <pre class="ql-syntax" spellcheck="false">npx create-react-app my-new-website
                  </pre>
                  <h3>Install Reactive-Site-Creator</h3>
                  <h6>
                  <br>
                  </h6>
                  <p class="ql-align-justify">To install this package change your directory to the react application's directory</p>
                  <pre class="ql-syntax" spellcheck="false">cd my-new-website
                  </pre>
                  <p>Now run</p>
                  <pre class="ql-syntax" spellcheck="false">npm install reactive-site-creator
                  </pre>
                  <h3>Import and Use the Website Component</h3>
                  <h6>
                  <br>
                  </h6>
                  <p>Open up your favorite code editor to your new website's directory. Open up <strong>App.js</strong> In the <strong>/src</strong> directory and replace the code the with following:</p>
                  <pre class="ql-syntax" spellcheck="false">import Website from "reactive-site-creator/dist/components/Website";
                  
function App()&#123;
    return &lt;Website siteName=&#123;"My New Website"&#125; isAdmin=&#123;true&#125;  /&gt;
&#125;
                  
export default App;
                  </pre>
                  <p>Run the website</p>
                  <pre class="ql-syntax" spellcheck="false">npm start
                  </pre>
                  <h3>Add Custom Components </h3>
                  <h6>
                  <br>
                  </h6>
                  <p>It is easy to add custom components into the website builder. Simply pass them as a <strong>componentOptions </strong>props into the main component. In order to get it to work they will need to be passed in as a dictionary with the component options. See this example in the <a href="https://github.com/jado66/reactive-site-creator-live" rel="noopener noreferrer" target="_blank">Github repository</a> for adding custom components. </p>
                  <h6>
                  <br>
                  </h6>
                  <h3>Use With DataBase and/or Backend Server</h3>
                  <h6>
                  <br>
                  </h6>
                  <p>Functions can be passed in as props that allow the front end functionality to be expanded. For example the a custom hook is used to store site data and a function can be passed in as <strong>saveComponentToDB </strong>prop to save the data in a database when publishing changes. Similarly, a <strong>getFromDatabase </strong>prop allows data to be retrieved from a database. These are the two main mechanisms for allowing live website updates. When editing the site as a draft (as opposed to publishing changes), draft edits are saved only locally.</p>
                  <p>More to come in the following updates.</p>
                  <p>
                  <br>
                  </p>
                  <h3>Plans for Upcoming Updates </h3>
                  <h6>
                  <br>
                  </h6>
                  <p>There are many items of business that are "in-the-works" that have yet to be completed, or need polishing before adding to a release. Plans for the next updates can be summed up by three categories:</p>
                  <h6>
                  <br>
                  </h6>
                  <p>1. Additional components will be upgraded:</p>
                  <ul>
                  <li class="ms-3"> Picture Frame and the Slide Show component will have added options for captions</li>
                  <li class="ms-3"> Photo Gallery will have additional options and images will be correctly resized when added.</li>
                  </ul>
                  <h6>
                  <br>
                  </h6>
                  <p>2. Components will be added:</p>
                  <ul>
                  <li class="ms-3">Embedded Video component will allow for external videos (YouTube and maybe others) along with videos served up from a server</li>
                  <li class="ms-3">Walkthrough component will utilize the toolbar component but will provide a side column with links to all of the sections. This will be perfect for any kind of tutorial.</li>
                  <li class="ms-3">Dynamic Form component will gather information for website guest and if hooked up correctly will allow for automated emails to be sent from a business email to a user or vice-versa. </li>
                  <li class="ms-3">Appointments component will display a calendar of available appointments. Guests will be able to "sign" up for appointments and options will be given to send automated emails and will be able to be hooked up to a payment page before confirming the appointment. </li>
                  <li class="ms-3">Product component will be used in directing customers to a payment page for a specific product or service</li>
                  <li class="ms-3">Shop component will be a collection of product components</li>
                  </ul>
                  <h6>
                  <br>
                  </h6>
                  <p>3. Admin specific tools will be added:</p>
                  <ul>
                  <li class="ms-3">Blog Creator tool will be similar to the Text Editor component will added functionality for pictures and video embedding)</li>
                  <li class="ms-3">Shop Manager tool will allow admins to add products and services to their page which will be accessible via product components </li>
                  </ul>
                 `
                }
              },
            ]
        },
        {
            id:"Page-4",
            name:"Contact",
            path:"/contact",
            components:
              [
                  {
                      name: "Header",
                      id: `Contact-Header-1-001`,
                      content:{
                          header: "Contact Me",
                          type: 'h2'
                      }
                      },
                {
                  name: "NavigationBar",
                  id: `Contact-NavBar-1-001`,
                  content:{}
                },
                {
                  name: "TextEditor",
                  id: `Contact-TextEditor-29-001`,
                  content:{
                      html: `<h6 class="ql-align-center">
                      <br>
                      </h6>
                      <h3 class="ql-align-center">Any questions?</h3>
                      <h3 class="ql-align-center">
                      <br>
                      </h3>
                      <h3 class="ql-align-center">Contact me at JadonDErwin@gmail.com</h3>`,
                  }
                  },
              ]
          } 
      ],
    masterNavBarData: 
      {
        isUnique: false,
        includeSocials: false,
        homeLinkText: "Home",
        html: `<h1 class = "ql-align-center">{siteName}</h1>`,
        navData: 
        [
          {
            id:1,
            name:"Components",
            path:"/components"
          },
          {
            id:2,
            name:"Tutorials",
            path:"/tutorials"
          },
          {
            id:3,
            name:"Contact",
            path:"/contact"
          }
        ]
      },
    socialMedias:[
        {
            location  :"Youtube",
            link:"https://youtube.com"
        },
        {
          location  :"Instagram",
          link:"https://instagram.com"
        },
        {
          location  :"Twitter",
          link:"https://instagram.com"
        }
        ],
    promoCodes:{}
  }

export const componentStyles = {
    all:{
      shadowStyle: "C85 0px 16px 38px -12px, C1f 0px 4px 25px 0px, C33 0px 8px 10px -5px ",
      borderSize: 0,
      borderShape: "",
      borderColor: "darkShade",
      shadowColor: 'darkShade',
      linkStyle: "text-decoration-underline"

    },
    background:{
      marginColor:"lightShade",
      backgroundColor: "lightAccent",
      applyBackground: false
    },
    header:{
      size: "h2",
      textColor: "darkShade",
    },
    mosaic:{
      arrangement: "LP,RL-LL,RP"
    },
    navigationBar:{
      includeHeader: false,
      topBarMargin: false,
      isSticky: false,
      stickyOffsetY: -4.5,
      justifyButtons: "justify-content-start",
      backgroundColor: "darkAccent",
      textColor: "lightShade",
      navbarStyle: "fullWidth"
    },
    linkBox:{
      backgroundColor: "lightShade",
      textColor: "darkShade",
      linkColor: "darkAccent"
    },
    subscriptionCard:{
      headerTextColor: "lightShade",
      headerBackgroundColor: "darkAccent",
      bodyTextColor: "darkShade",
      bodyBackgroundColor: "lightShade"
    },
    subscriberBox:{
      headerTextColor: "lightShade",
      backgroundColor: "darkAccent",
    },
    pictureFrame:{
      backgroundColor: "mainBrandColor",
      padding: "",
      randomImageKeyword: "cat",
    },
    photoGallery:{
      margin: 8,
      fullBorder: false
    },
    styledLink:{
      borderShape: 'rounded-6',
      backgroundColor: "darkAccent",
      textColor: "lightShade",
    },
    footer:{
      textColor: "darkShade",
    },
    textEditor:{
      backgroundColor: "lightShade",
      textColor: "darkShade",
    },
  }
