import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content
          color="red"
          title="VÌ VINH HIỂN CHÚA"
          content="Xin Chúa chớ nhớ lại mà kể cho chúng tôi các tội ác của tổ phụ chúng tôi; 
          Nguyện sự thương xót Chúa mau mau đến đón rước chúng tôi
          Vì chúng tôi lấy làm khốn khổ vô hồi. Hỡi Đức Chúa Trời về sự cứu rỗi chúng tôi, vì vinh hiển của danh Chúa, xin hãy giúp đỡ chúng tôi; 
          Nhân danh Chúa, xin hãy giải cứu chúng tôi, và tha tội cho chúng tôi."
        />
        <Content
          color="green"
          title="OUR SIN"
          content="vì mọi người đều đã phạm tội, thiếu mất sự vinh hiển của Đức Chúa Trời"
        />
        <Content
          color="blue"
          title="BLOOD OF JESUS"
          content="This form allows you to generate random text strings. The randomness comes from atmospheric noise, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs."
        />
        <Content
          color="yellow"
          title="FORGIVEN"
          content="This form allows you to generate random text strings. The randomness comes from atmospheric noise, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs."
        />
        <Content
          color="black"
          title="FAITH"
          content="This form allows you to generate random text strings. The randomness comes from atmospheric noise, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs."
        />
      </div>
    );
  }
}

export default App;
