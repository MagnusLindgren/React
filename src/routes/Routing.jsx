import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "../view/homeView/HomeView";
import { MarvelSearchView } from "../view/marvelSearch/MarvelSearch";
import { AboutView } from "../view/aboutView/AboutView";
import { ContactView } from "../view/contactView/ContactView";
import RoutingPath from "./RoutingPath";

export const Routing = ({ children }) => {
    return (
        <div>
            <BrowserRouter>
            {children}
                <Routes>
                    <Route path={RoutingPath.homeView} element={<HomeView />} />
                    <Route path={RoutingPath.marvelSearchView} element={<MarvelSearchView />} />
                    <Route path={RoutingPath.aboutView} element={<AboutView />} />
                    <Route path={RoutingPath.contactView} element={<ContactView />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
