
'use client';

import DomElementsContextProvider, { useDomElementsContext } from './DomElementsContext';

export function Providers({ children }) {


    
        

    const domElementContextData = useDomElementsContext();
    //const domElementContextData = DomElementsContextProvider.useDomElementsContext;
    console.log("dom element data on Providers.js", domElementContextData);
    


  return (
    
      <DomElementsContextProvider>{children}</DomElementsContextProvider>
    
  );
}