import React, { Component } from 'react';
import { Result, Button } from 'antd';
import fail from './img/fail.svg';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component {
  private static getDerivedStateFromError() {
    return { hasError: true };
  }

  public state = {
    hasError: false
  };

  public constructor(props: any) {
    super(props);
  }

  public componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  public onBackClick() {
    window.location.href = '/';
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Result
          subTitle="Sorry, something went wrong."
          icon={<img src={fail} />}
          extra={
            <Button type="primary" onClick={this.onBackClick}>
              返回首页
            </Button>
          }
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
