import { Routing } from "./routes/Routing";
import { Navigation } from "./component/Navigation"
 
export const App = () => {
  return (
    <div>
      <Routing>
        <Navigation />
      </Routing>
    </div>
  )
}

