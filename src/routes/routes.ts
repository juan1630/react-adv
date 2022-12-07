import { lazy, LazyExoticComponent } from 'react';
import { Nolazy } from '../lazyload/pages/Nolazy'

type JSXComponent = () => JSX.Element;


interface Routes {
    path: string;
    component: LazyExoticComponent< JSXComponent > | JSXComponent;
    name: string;
    children?: Routes[]
}

export const routes: Routes[] = [
    {
        path:'/nolazy',
        component: Nolazy,
        name: 'No lazy page'
    },
    {
        path:'/lazyload',
        component: lazy( () => import( /* webpackChunkName: "lazylayout main" */  "../lazyload/layout/LazyLoadLayout" ) ),
        name: 'LazyPage main'
    }
];