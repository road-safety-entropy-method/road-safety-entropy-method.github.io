import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./layout.tsx";

import {AboutAuthor} from "@/pages/about-author/about-author.tsx";
import {Main} from "@/pages/main/main.tsx";
import {CalculatorRegion} from "@/pages/calculator/calculator-region.tsx";
import {CalculatorCity} from "@/pages/calculator/calculator-city.tsx";
import {MethodRegion} from "@/pages/method/method-region.tsx";
import { MethodCity } from './pages/method/method-city.tsx';


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
                path: 'method-region',
                element: <MethodRegion/>
            },
            {
                path: 'method-city',
                element: <MethodCity/>
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
