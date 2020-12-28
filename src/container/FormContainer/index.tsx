import React from "react";
import { Logo } from "../../assets/images";
import { Button, FlexView } from "../../components";
import { Text } from "../../components";

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

    return <FlexView gap="10px" justify="center" paddingHorizontal="20px" paddingVertical="20px">
      <FlexView bound="400px" direction="column" gap="10px">

        <FlexView align="center" direction="column" paddingVertical="20px">
          <img src={Logo} alt="logo" height="50" />
          <br />
          <Text size="30px" fancy>{title}</Text>
          <Text fancy>{subTitle}</Text>
        </FlexView>

        {children}

        <Button fit fill to={to} onClick={onSubmit} title="Submit" />
        <Button fit to={linkTo} link title={linkTitle} />
      </FlexView>
    </FlexView>
  }

export default FormContainer
