import { lazy, LazyExoticComponent } from 'react'

type JSXComponent = () => JSX.Element;


const LazyPage1 = lazy(()=> import( /* webpackChunkName:  "LazyPage1" */  "../lazyload/pages/LazyPage1") );
const LazyPage2 = lazy(()=> import( /* webpackChunkName:  "LazyPage2" */  "../lazyload/pages/LazyPage2") );
const LazyPage3 = lazy(()=> import( /* webpackChunkName:  "LazyPage3" */  "../lazyload/pages/LazyPage3") );

interface Routes {
    path: string;
    component: LazyExoticComponent< JSXComponent > | JSXComponent;
    name: string;
    children?: Routes[]
}

export const routes: Routes[] = [
    {
        path:'/lazy1',
        component: LazyPage1,
        name: 'LazyPage1'
    },
    {
        path:'/lazy2',
        component: LazyPage2,
        name: 'LazyPage-2'
    },
    {
        path:'/lazy3',
        component: LazyPage3,
        name: 'LazyPage-3'
    }
];