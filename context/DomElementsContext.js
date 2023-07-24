import React, { useReducer, useContext, useMemo } from 'react';

const DomElementsContext = React.createContext();

const DomElementsContextProvider = (props) => {


    // Reduceri tanimliyoruz
    const domElementsReducer = (state, action) => {

        switch (action.type) {
            case 'setSideBar':
                return {
                    isSidebarHidden: action.payload.isSidebarHidden,
                };
            default:
            return state;
        }
    };

    const initialState = {
        // initial state - default values
        isSidebarHidden: false,
    } 

    const [ state, dispatch ] = useReducer(domElementsReducer, initialState);




    const toggleSidebar = (data) => {

        try {
            console.log('DomElementsContextProvider > toggleSidebar Triggered');

            let {isSidebarHidden} = data;

            console.log("Sidebar isSideBarHidden value: ", data.isSidebarHidden);
    
    
            //DISPATCH TO REDUCER
            dispatch({type: 'setSideBar',
            
                    payload: {
                        isSidebarHidden: !data.isSidebarHidden
                    },
            });
            
      
        } catch (error) {
            throw new Error(error)
        }

    };




    

    
    const value = useMemo(() => {
        return { toggleSidebar };
    }, [state]);

    return(
        <DomElementsContext.Provider value={{ state, ...value }}>
            { props.children }
        </DomElementsContext.Provider>
    )
};



const useDomElementsContext = () => useContext(DomElementsContext);
export { DomElementsContext, useDomElementsContext }
export default DomElementsContextProvider;