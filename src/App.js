import { Routing } from "./routes/Routing"
import { Navigation } from "./component/Navigation"
import { GlobalStyles } from "./shared/styles/GlobalStyles"
import { MarvelSearchView } from "./view/marvelSearch/MarvelSearch"
 
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

