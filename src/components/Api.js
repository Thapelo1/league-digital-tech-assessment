import React from 'react'

class Service extends React.Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted into the DOM.
  componentDidMount() {
    const url = '';

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
    const { data } = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return <ul>{result}</ul>
  }
}

export default Service