



import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { LoginForm } from "./form.js";

class Consumer extends React.Component{
    render(){
        return(
            <LoginForm
            account = {this.props.account}
            onSubmit={action("onSubmit called")}
            onCancel={action("onCancel called")}
          />
        )
    }
}

storiesOf("Login", module).add("new form", () => (
<Consumer/>
));