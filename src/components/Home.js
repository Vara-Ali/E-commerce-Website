import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const Home = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='home' circular />
      <Header.Content>Home Page</Header.Content>
    </Header>
    <Image
      centered
      size='large'
      src='https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    />
  </div>
)

export default Home;
