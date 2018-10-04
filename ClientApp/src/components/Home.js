import React, { Component } from "react";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

export class Home extends Component {
  state = {
    isLoading: false,
    options: [],
  }

  render() {
    const { isLoading, options } = this.state
    const style = {
      width: "300px"
    }
    return (
      <div style={style}>
        <AsyncTypeahead
        onSelect= {val => console.log(val)}
          selectHintOnEnter={true}
          isLoading={isLoading}
          onKeyPress={event => event.keyCode === 13 ? console.log('yep', event.target.value) : console.log('nope', event.target.value)}
          options={options}
          onSearch={query => {
            this.setState({ isLoading: true });
            fetch("api/search/" + query + "/true", {
              method: 'get',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
            })
              .then((resp) => resp.json())
              .then(response => this.setState({
                isLoading: false,
                options: response.ResponseData,
              })
              );
          }}
          options={this.state.options.map(val => val.Name)}
        />

      </div>
    )
  }

}
export default Home;