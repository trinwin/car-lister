import React from 'react'

class SearchBar extends React.Component {

    state = {term: ''}
    
    onInputChange(event) {
        console.log(event.target.value)
    }

    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.term)
    }

    /** Controlled vs Uncontrolled elements = store info in React comp vs in the DOM (HTML)*/
    render() {
        // onInputChange() -- call whenever component gets rendered
        // onInputChange -- call when their is an input entered in the search bar
        //  -- do not have parenthesis on callback function to event handler
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'  >
                    <div className='field'>
                        <label>Image Search</label>
                        {/* <input type='text' onChange={(e)=> console.log(e.target.value)}/> */}
                        <input type='text' 
                        value={this.state.term} 
                        onChange={(e) => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar