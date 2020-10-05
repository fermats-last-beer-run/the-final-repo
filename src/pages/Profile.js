import React from "react";
import Menu from "../components/Menu/Menu";
import UserCard from "../components/UserCard/UserCard";
import Layout from '../components/Layout'
import { userIsAuthenticated } from "../redux/HOCs";
import Feed from '../components/Feed/Feed'


class Profile extends React.Component {
  render() {
    return (
      <Layout>
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h2>Profile</h2>
          <UserCard />
          <Feed flag={true}/>
      </Layout>
      


    );
  }
}

export default userIsAuthenticated(Profile);
