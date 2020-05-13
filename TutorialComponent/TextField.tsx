import * as React from "react";
import * as ReactDOM from "react-dom";

export interface ITextFieldProps {
  value: string | null;
}

export interface ITextFieldState
  extends React.ComponentState,
    ITextFieldProps {}

export class TextField extends React.Component<
  ITextFieldProps,
  ITextFieldState
> {
  constructor(props: ITextFieldProps) {
    super(props);
    this.state = {
      value: "Hello world",
    };
  }

  public componentWillReceiveProps(newProps: ITextFieldProps) {
    this.setState(newProps);
  }

  public render(): JSX.Element {
    return <div>{this.state.value}</div>;
  }
}
