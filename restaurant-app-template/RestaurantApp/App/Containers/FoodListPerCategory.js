import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import MenuItemRow from '../Components/MenuItemRow'
import { Button, Icon } from 'react-native-elements'


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

    const { navigate } = this.props.navigation;

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(this.props.navigation.state.params.items||[]),
    }

  }

  static navigationOptions = {
      title: 'Items',
  };

  // static navigationOptions = {
  //     title: "Items",
  //     header: ({state, setParams, goBack}, defaultHeader) => ({
  //         ...defaultHeader,
  //         left: (
  //           <Button underlayColor='transparent'
  //                   backgroundColor ='transparent'
  //                   icon={{name: 'angle-left', type: 'font-awesome'}}
  //                   onPress={e=>{e.preventDefault();
  //                     console.log("clicked")
  //                     goBack();
  //                   }}
  //           >
  //             <Icon name='angle-left' type='font-awesome' style ={{color:"#fff", marginLeft:5}} />
  //           </Button>)
  //         })
  //   }


  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow = (rowData) => {
    console.log(rowData.name);
    console.log('title2'+ JSON.stringify(this.props.navigation.state));

    return (
      <MenuItemRow data={rowData} navigation={this.props.navigation}/>
    )
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    console.log('title'+ JSON.stringify(this.props.navigation.state));
    console.log('state'+ JSON.stringify(this.state));
    return (
      <View style={styles.container}>
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
