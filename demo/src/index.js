import React from 'react'
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MenuItem from 'material-ui/MenuItem'

import SelectField from '../../src'

let Demo = React.createClass({

  render() {
    const FRUITS= [
          "apple",
          "apricot",
          "avocado",
          "banana",
          "bell pepper",
          "bilberry",
          "blackberry",
          "blackcurrant",
          "blood orange",
          "blueberry",
          "boysenberry",
          "breadfruit",
          "canary melon",
          "cantaloupe",
          "cherimoya",
          "cherry",
          "chili pepper",
          "clementine",
          "cloudberry",
          "coconut",
          "cranberry",
          "cucumber",
          "currant"
          ];
    return(
    <MuiThemeProvider>
      <SelectField
        floatingLabelText="Print region"
        choices= {FRUITS}
      >
      </SelectField>
    </MuiThemeProvider>
    )
  }
})

render(<Demo/>, document.querySelector('#demo'))
