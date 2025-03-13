
'use client';

import DomElementsContextProvider, { useDomElementsContext } from '@/context/DomElementsContext';

//import dynamic from 'next/dynamic'

//const DomElementsContextProvider = dynamic(() => import('@/context/DomElementsContext'), { ssr: false })
 


export function Providers({ children }) {


    
        

    const domElementContextData = useDomElementsContext();
    //const domElementContextData = DomElementsContextProvider.useDomElementsContext;
    console.log("dom element data on Providers.js", domElementContextData);
    


  return (
    
      <DomElementsContextProvider>{children}</DomElementsContextProvider>
    
  );
}