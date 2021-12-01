import { Routing } from "./routes/Routing";
import { Navigation } from "./component/Navigation"
import { GlobalStyles } from "./shared/styles/GlobalStyles"
 
export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Routing>
        <Navigation />
      </Routing>
    </div>
  )
}

