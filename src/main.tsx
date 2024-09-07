import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./layout.tsx";

import {AboutAuthor} from "@/pages/about-author/about-author.tsx";
import {Main} from "@/pages/main/main.tsx";
import {Method} from "@/pages/method/method.tsx";
import {CalculatorRegion} from "@/pages/calculator/calculator-region.tsx";
import {CalculatorCity} from "@/pages/calculator/calculator-city.tsx";


const hashRouter = createHashRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '',
                element: <Main/>
            },
            {
                path: 'calculator-region',
                element: <CalculatorRegion/>
            },
            {
                path: 'calculator-city',
                element: <CalculatorCity/>
            },
            {
                path: 'method',
                element: <Method/>
            },
            {
                path: 'about-author',
                element: <AboutAuthor/>
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={hashRouter}/>
  </StrictMode>,
)
