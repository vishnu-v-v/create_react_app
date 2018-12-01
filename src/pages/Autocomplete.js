import React from 'react';
import Select from 'react-select';
import axios from 'axios'

const api = 'http://localhost:3000/options';

class Autocomplete extends React.Component {
  state = {
    selectedOption: null,
    options: []
  }
  componentDidMount(){
    this.loadOptions(api);
  }
  loadOptions = (url) => {
    axios.get(url)
      .then(response => {
        this.setState({ options: response.data })
      });
  }
  handleSearch = (search_text) => {
    if (search_text.length > 2) {
      let search_url = `${api}?label=${search_text}`
      this.loadOptions(search_url);
    } else {
      this.loadOptions(api);
    }
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }
  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.state.options}
        onInputChange={this.handleSearch}
      />
    );
  }
}

export default Autocomplete;
