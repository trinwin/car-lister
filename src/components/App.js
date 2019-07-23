import React from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

const App = () => {
     return (
         <div className='ui container' style={{marginTop: '10px'}}> 
             <SearchBar/>
             {/* <ImageList/> */}
         </div>
     )
}

export default App