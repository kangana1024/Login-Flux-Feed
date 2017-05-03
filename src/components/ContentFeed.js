import React, { Component } from 'react';
import { View, Text, ListView, Image, TouchableOpacity, Linking } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Card, Thumbnail, CardItem } from 'native-base';

import AppFooter from './AppFooter'
import LoadingComponent from './LoadingComponent'

const apiKey = 'AIzaSyAFYk7Kahr_8n-mTCE29K-x5lv2kgrd1aA';
const channelID = 'UC5mJrJ6tg1WiGGWzoKK7ewQ';

class ContentFeed extends Component {
    componentWillMount() {
        this.getJsonFeed();
    }
    async getJsonFeed() {
        try {
            const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=' + apiKey + '&channelId=' + channelID + '&part=snippet,id&order=date&maxResults=20');// ข้อมูลดิบ

            const responseJson = await response.json(); // แปลงเป็น Json

            this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseJson.items) });

        } catch (error) {
            alert(error.toString());
        }
    }
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };
    }
    renderRowCard(rowData) {
        /* Map Data */
        let {videoId} = rowData.id;
        let { title, description, publishedAt, thumbnails } = rowData.snippet;
        let { high } = thumbnails;
        /* Map Data */
        return (
            <Card >
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: 'https://yt3.ggpht.com/-3rayVyHvRWI/AAAAAAAAAAI/AAAAAAAAAAA/B14_OGQpBvA/s88-c-k-no-mo-rj-c0xffffff/photo.jpg' }} />
                        <Body>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>{title}</Text>
                            <Text note>{publishedAt}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Body>
                        <TouchableOpacity style={{
                            alignSelf:'stretch'
                        }}
                        onPress={()=>Linking.openURL('https://www.youtube.com/watch?v='+videoId)}
                        >
                            <Image source={{ uri: high.url }} style={{
                                height: 200,
                                alignSelf: 'stretch'
                            }} />
                        </TouchableOpacity>
                    </Body>
                </CardItem>
                <CardItem content>
                    <Text>{description}</Text>
                </CardItem>
            </Card>
        )
    }
    render() {
        return (
            <Container>
                <Content>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.renderRowCard(rowData)}
                        enableEmptySections={true}
                    />
                </Content>
                <AppFooter onLogout={true}/>
                <LoadingComponent isLoading={false} />
            </Container>
        );
    }
}

export default ContentFeed;