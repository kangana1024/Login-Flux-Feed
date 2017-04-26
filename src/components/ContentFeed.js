import React, { Component } from 'react';
import { View, Text, ListView ,Image} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon,Card,Thumbnail,CardItem } from 'native-base';

const apiKey = 'AIzaSyAFYk7Kahr_8n-mTCE29K-x5lv2kgrd1aA';
const channelID = 'UC5mJrJ6tg1WiGGWzoKK7ewQ';

class ContentFeed extends Component {
    componentWillMount() {
        this.getJsonFeed();
    }
    async getJsonFeed() {
        try {
            const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=' + apiKey + '&channelId=' + channelID + '&part=snippet,id&order=date&maxResults=20');

            const responseJson = await response.json();

            this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseJson.items) });

        } catch (error) {
            alert(error.toString());
        }
    }
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }
    renderRowCard(rowData) {
        let {title} = rowData.snippet
        return (
            <Card >
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: 'https://yt3.ggpht.com/-3rayVyHvRWI/AAAAAAAAAAI/AAAAAAAAAAA/B14_OGQpBvA/s88-c-k-no-mo-rj-c0xffffff/photo.jpg' }} />
                        <Body>
                            <Text>{title}</Text>
                            <Text note>GeekyAnts</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image />
                </CardItem>
                <CardItem content>
                    <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                              Are you telling me that you built a time machine... out of a DeLorean?!
                              Whoa. This is heavy.</Text>
                </CardItem>
            </Card>
        )
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.renderRowCard(rowData)}
                    />
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default ContentFeed;