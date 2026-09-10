import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

import Layout from "../components/template/Layout";
import Inicio from "../components/template/Inicio";
import Projetos from "../components/template/Projetos";
import Contatos from "../components/template/Contato";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="inicio" element={<Inicio />} />
            <Route path="projetos" element={<Projetos />} />
            <Route path="contatos" element={<Contatos />} />
        </Route>
    ),
    {
        basename: import.meta.env.PROD ? "/site_pessoal" : "/"
    }
);

export default router;