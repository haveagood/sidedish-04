import React, { Component } from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import MoreButton from "./MoreButton";
import { title } from "../../constant/title";
import { MAIN_URL, SIDE_URL } from "../../constant/url";

import Title from "./Title";

const MainWrap = styled.main`
  display: flex;
  flex-direction: column;
`;

class Main extends Component {
  state = {
    maindishes: [],
    sidedishes: [],
  };

  getMaindishes = () => {
    fetch(MAIN_URL)
      .then((res) => res.json())
      .then((maindishes) => {
        this.setState({ maindishes: maindishes.body });
      });
  };

  getSidedishes = () => {
    fetch(SIDE_URL)
      .then((res) => res.json())
      .then((sidedishes) => {
        this.setState({ sidedishes: sidedishes.body });
      });
  };

  componentDidMount() {
    this.getMaindishes();
    this.getSidedishes();
  }

  render() {
    const { maindishes, sidedishes } = this.state;
    const { main, side } = title;
    return (
      <MainWrap>
        <Title title={main.title} desc={main.desc} />
        <Carousel sidedishes={maindishes} />
        <Title title={side.title} desc={side.desc} />
        <Carousel sidedishes={sidedishes} />
        {/* <MoreButton onClick={more()}/> */}
      </MainWrap>
    );
  }
}

export default Main;
