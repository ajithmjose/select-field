import React from 'react'

import {SelectField as SF} from 'material-ui'
import { MenuItem } from 'material-ui/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class SelectField extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isInputChecked: props.isInputChecked || '',
      value: props.value || '',
      filter: '',
      choices: props.choices || ''
    }
  }

  onChange = (event, index, value) => this.setState({ value });

  render() {

    const selectStyle = {
      'width': '100%',
      'color':'#999'
    }

    const labelStyle = {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    }

    return (
      <SF
        floatingLabelText={this.props.floatingLabelText}
        value={this.state.value}
        onChange={this.onChange}
        labelStyle={labelStyle}
        menuItemStyle={labelStyle}
        style={selectStyle}
        floatingLabelStyle={selectStyle}
      >
      {this.state.choices&& this.state.choices.map(choice =>
        <MenuItem value={choice.value} key={choice.value} primaryText={choice.label}>
        </MenuItem>,
      )}
    </SF>

    )
  }
}
export default SelectField;
