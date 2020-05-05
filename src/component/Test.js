import React from 'react';


class Test extends React.Component {


    componentDidMount() {
       // const values = queryString.parse(this.props.location.search);
        //console.log(values.filter);
      }
    
    render() {
        
        const { params } = this.props.match;

        return (
            <div>
      <h4>About</h4>
      <p>This is About page.</p>
      <b>ID: {params.id}</b> 
    </div>
        );

    }

}

export default Test