import React from "react";
import { Logo } from "../../assets/images";
import { Button, FlexView } from "../../components";
import { Text } from "../../components";
import View from "../View";

interface Props {
  linkTitle: string;
  linkTo: string;
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title: string;
  to?: string;
  subTitle: string;
}

const FormContainer: React.FC<Props> =
  ({ children, linkTitle, linkTo, onSubmit, title, to, subTitle }) => {

    return <View smallGap type="small">
      <FlexView align="center" direction="column" paddingVertical="20px">
        <img src={Logo} alt="logo" height="50" />
        <br />
        <Text size="30px" fancy>{title}</Text>
        <Text fancy>{subTitle}</Text>
      </FlexView>

      {children}

      <Button fit background to={to} onClick={onSubmit} title="Submit" />
      <Button fit to={linkTo} link title={linkTitle} />
    </View>
  }

export default FormContainer
