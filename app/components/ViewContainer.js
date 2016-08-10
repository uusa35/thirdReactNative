/**
 * Created by usamaahmed on 8/1/16.
 */
/**
 * Created by usamaahmed on 8/1/16.
 */
import React , { Component } from 'react';
import { View , Text , TouchableHighlight , ScrollView , Image , NavigatorIOS , TabBarIOS } from 'react-native';
import { rootURL , postRoute  } from '../constants';
import styles from '../components/styles/main';
import Home from './Home';
import MyNav from './MyNav';
import Aboutus from '../components/pages/Aboutus';
import Contactus from '../components/pages/Contactus';
import Location from '../components/pages/Location';

export default class ViewContainer extends Component {

    constructor(props, content) {
        super(props, content);
        console.log(this.props.menu);
    }

    doIncrement() {
        this.props.propertiesActions.increaseCount(this.props.counter);
    }

    componentDidMount() {
        this.props.propertiesActions.enableLoadingView();
        this.props.postActions.postIndexFetch().then(() => {
            this.props.propertiesActions.disableLoadingView();
        });
    }

    handleTabPress(index, routeName, route) {
        this.props.tabActions.selectTab(index, routeName, route);
    }


    render() {

        var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
        return (
            <TabBarIOS
                unselectedTintColor="grey"
                tintColor="white"
                barTintColor="black" itemPositioning="fill">
                <TabBarIOS.Item
                    iconSize={25}
                    icon={{uri: base64Icon, scale: 3}}
                    selected={this.props.tabs.index === 0}
                    title="الرئيسية"
                    onPress={() => {this.handleTabPress(0,'HOME','home')}}>
                    <MyNav {...this.props}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="more"
                    iconSize={25}
                    selected={this.props.tabs.index === 1}
                    title={this.props.tabs.routeName}
                    onPress={() => {this.handleTabPress(1,'Aboutus','aboutus')}}>
                    <Aboutus {...this.props}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="contacts"
                    iconSize={25}
                    selected={this.props.tabs.index === 2}
                    title={this.props.tabs.routeName}
                    onPress={() => {this.handleTabPress(2,this.props.tabs.routeName,this.props.tabs.route)}}>
                    <Contactus {...this.props}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="history"
                    iconSize={25}
                    selected={this.props.tabs.index === 3}
                    title={this.props.tabs.routeName}
                    onPress={() => {this.handleTabPress(3,this.props.tabs.routeName,this.props.tabs.route)}}>
                    <Location {...this.props}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}


//
//<SearchSection searchSection={styles.searchSection}/>
//{
//    (this.props.properties.isLoading) ?
//        <LoadingLayer loadStyle={styles.imageLoading}/> :
//        <PostIndex posts={this.props.posts} postActions={this.props.postActions}
//                   propertiesActions={this.props.propertiesActions}/>
//}
//{
//    (this.props.propertiesActions.isLoading) ?
//        <LoadingLayer loadStyle={styles.imageLoading}/> :
//        <PostIndex posts={this.props.posts} postActions={this.props.postActions}/>
//}
//<Text>Counter is : {this.props.counter}</Text>
//
//<TouchableHighlight onPress={this.doIncrement.bind(this)} style={{ marginTop: 20}}>
//<Text>Increase Count</Text>
//</TouchableHighlight>