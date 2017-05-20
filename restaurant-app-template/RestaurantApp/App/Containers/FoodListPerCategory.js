import React, { PropTypes } from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import MenuItemRow from '../Components/MenuItemRow'

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent'

// Styles
import styles from './Styles/FoodListPerCategoryStyle'

class FoodListPerCategory extends React.Component {

  constructor (props) {
    super(props)

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = [];

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(this.props.items||[])
    }
  }

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow (rowData) {
    return (
      <MenuItemRow data={rowData} />
    )
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='There are no items to be displayed' show={this._noRowData()} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodListPerCategory)
