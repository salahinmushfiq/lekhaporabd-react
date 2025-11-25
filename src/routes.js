import React from 'react'
import {Routes,Route,BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import {HomePage,ProductsPage,CartPage, CurrentOrderDetailsPage} from './front/pages';
import { DashHome, UserLogin, UserSignUp } from './dashboard/pages';
import { ContextProvider, useStateContext } from './dashboard/contexts/ContextProvider';
import { MapContextProvider } from './dashboard/contexts/MapContextProvider';
import { UserProfile } from './dashboard/components';
import { CartProvider } from './front/components/contexts/CartContext';
import CheckoutPage from './front/pages/CheckoutPage.jsx';
import { CheckoutProvider } from './front/components/contexts/CheckoutContext.jsx';
const AppRoutes = () => {

  
  // const {users,setUsers,currentUser,setCurrentUser,showPopUp,setShowPopUp,selectedAddress,setSelectedAddress} = useMapContext();
  return(
    
      <BrowserRouter>
        
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      {/* <Route path="/cart" element={<CartProvider><ViewCart /></CartProvider>} /> */}
       {/* other routes */}
               
      <Route path="/products" element={<ErrorBoundary><CartProvider><ProductsPage/></CartProvider></ErrorBoundary>}/> 
      <Route path="/cart" element={<ErrorBoundary><CartProvider><CartPage/></CartProvider></ErrorBoundary>}/> 
      {/* <Route path="/checkout" element={<ErrorBoundary><CartProvider><CheckoutProvider><CheckoutPage/></CheckoutProvider></CartProvider></ErrorBoundary>}/>  */}
      <Route path="/checkout">
        <Route index element={<ErrorBoundary><CartProvider><CheckoutProvider><CheckoutPage/></CheckoutProvider></CartProvider></ErrorBoundary>}></Route>
        <Route path="details/:id" element={<ErrorBoundary><CartProvider><CheckoutProvider><CurrentOrderDetailsPage/></CheckoutProvider></CartProvider></ErrorBoundary>}></Route>
      </Route> 
     
      {/* <Route path="/products/details" element={<DashHome/>}/>
      <Route path="/cart" element={<AddProduct/>}/>
      <Route path="/checkout" element={<EditProduct/>}/> */}
      {/* <Route  path="/dash" element={
        
        <DashHome/>
        
        
        
        }/> */}
        
         {/* <Route path="/dash/*" element={
          <ContextProvider>
            <MapContextProvider> */}
              {/* <DashHome/> */}
              {/* <DashRoutes/>
            </MapContextProvider>
          </ContextProvider>
        } /> */}
              

              
              <Route>
                <Route path="/login" element={ 
                  <ContextProvider>
                    <MapContextProvider>
                      <UserLogin/> 
                    </MapContextProvider>
                  </ContextProvider>
                  }
                  />
                   <Route path="/signup" element={ 
                  <ContextProvider>
                    <MapContextProvider>
                      <UserSignUp/> 
                    </MapContextProvider>
                  </ContextProvider>
                  }
                  />
                <Route path="/dash/*" element={
                   
                   <ContextProvider>
                    <MapContextProvider>
                        
                        <DashHome/>
                        
                    </MapContextProvider>
                   </ContextProvider>
                  }/>
              </Route>
              
    </Routes>
  
    </BrowserRouter>
    
  )
}

export default AppRoutes