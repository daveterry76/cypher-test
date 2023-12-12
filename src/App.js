import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './index.css'
import Main from "./pages/Main";

// import Html from './pages/Html'
import IntroductionToHTML from "./components/html/IntroductionToHTML";
import HTMLElements from "./components/html/HTMLElements";
import HTMLForms from "./components/html/HTMLForms";

// import CSS from './pages/Css'
import StylingWithCSS from "./components/css/StylingWithCSS";
import CSSFlexbox from "./components/css/CSSFlexbox";
import ResponsiveDesigns from "./components/css/ResponsiveDesigns";

// import JavaScript from './pages/JavaScript'
import IntroductionToJavaScript from "./components/javascript/IntroductionToJavaScript";
import DOMManipulation from "./components/javascript/DOMManipulation";
import EventHandling from "./components/javascript/EventHandling";

// import FrontendFrameworks from './pages/FrontendFrameworks'
import ReactBasics from "./components/frontend-frameworks/ReactBasics";
import VueEssentials from "./components/frontend-frameworks/VueEssentials";
import AngularFundamentals from "./components/frontend-frameworks/AngularFundamentals";

// import BackendDevelopment from './pages/BackendDevelopment'
import NodeOverview from "./components/backend-development/NodeOverview";
import ExpressBasics from "./components/backend-development/ExpressBasics";
import RESTfulAPIs from "./components/backend-development/RESTfulAPIs";

// import DatabaseManagement from './pages/DatabaseManagement'
import IntroductionToDatabases from "./components/database-management/IntroductionToDatabases";
import MongoDBBasics from "./components/database-management/MongoDBBasics";
import SQLRelationalDatabases from "./components/database-management/SQLRelationalDatabases";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <>
      <div className="flex">

        <div className="w-1/4 h-screen sticky top-0">
          <Sidebar />
        </div>
        <div className="w-3/4 px-12 py-24">
          <Routes>

            <Route index element={<Main />} />

            {/* <Route path="html" element={<Html />}> */}
              <Route path="/html/intro" element={<IntroductionToHTML />} />
              <Route path="/html/elements" element={<HTMLElements />} />
              <Route path="/html/forms" element={<HTMLForms />} />
            {/* </Route> */}

            {/* <Route path="css" element={<CSS />}> */}
              <Route path="/css/styling" element={<StylingWithCSS />} />
              <Route path="/css/flexbox" element={<CSSFlexbox />} />
              <Route path="/css/responsive" element={<ResponsiveDesigns />} />
            {/* </Route> */}

            {/* <Route path="js" element={<JavaScript />}> */}
              <Route path="/js/intro" element={<IntroductionToJavaScript />} />
              <Route path="/js/dom" element={<DOMManipulation />} />
              <Route path="/js/event" element={<EventHandling />} />
            {/* </Route> */}

            {/* <Route path="frontend" element={<FrontendFrameworks />}> */}
              <Route path="/frontend/react" element={<ReactBasics />} />
              <Route path="/frontend/vue" element={<VueEssentials />} />
              <Route path="/frontend/angular" element={<AngularFundamentals />} />
            {/* </Route> */}

            {/* <Route path="backend" element={<BackendDevelopment />}> */}
              <Route path="/backend/nodejs" element={<NodeOverview />} />
              <Route path="/backend/expressjs" element={<ExpressBasics />} />
              <Route path="/backend/restfulapis" element={<RESTfulAPIs />} />
            {/* </Route> */}

            {/* <Route path="database" element={<DatabaseManagement />}> */}
              <Route path="/database/intro" element={<IntroductionToDatabases />} />
              <Route path="/database/mongodb" element={<MongoDBBasics />} />
              <Route path="/database/sqlrdb" element={<SQLRelationalDatabases />} />
            {/* </Route> */}

            <Route path="*" element={<NoMatch />} />

          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
