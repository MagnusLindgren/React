import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MarvelSearchView } from "../view/marvelSearch/MarvelSearch"
import { HeroView } from "../view/HeroView/HeroView"
import RoutingPath from "./RoutingPath"

export const Routing = ({ children }) => {
    return (
        <div>
            <BrowserRouter>
            {children}
            
                <Routes>
                    <Route path={RoutingPath.marvelSearchView} element={<MarvelSearchView />} />
                    <Route path={RoutingPath.heroView} element={<HeroView />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
