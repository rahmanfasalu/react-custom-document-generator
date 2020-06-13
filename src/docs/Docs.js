import React from "react";
import DocsNavigation from "./DocsNavigation";
import DocsComponentPage from "./DocsComponentPage";
import componentData from "../../config/componentData";

import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: : 15px;
`;

const Left = styled.div`
  width: 20%;
  float: left;
`;
const Right = styled.div`
  width: 80%;
  float: right;
`;
export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1),
    };
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({ route: window.location.hash.substr(1) });
    });
  }

  render() {
    const { route } = this.state;
    const component = route
      ? componentData.filter((component) => component.name === route)[0]
      : componentData[0];

    return (
      <Wrapper>
        <Left>
          <DocsNavigation
            components={componentData.map((component) => component.name)}
          />
        </Left>
        <Right>
          <DocsComponentPage component={component} />
        </Right>
      </Wrapper>
    );
  }
}
