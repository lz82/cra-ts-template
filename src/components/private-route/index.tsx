import React, { FC, useEffect, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, useLocation, useHistory } from 'react-router-dom';

import { getToken } from '@/utils/auth';

export interface PrivateRouteProps {
  token: string;
  render: (props: any) => ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ token, render, ...rest }) => {
  const { pathname, search } = useLocation();

  const history = useHistory();
  useEffect(() => {
    if (!token) {
      history.push('/pub/login', { from: pathname + search });
    }
  }, [history, pathname, search, token]);
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          render(props)
        ) : (
          <Redirect
            to={{
              pathname: '/pub/login',
              state: {
                from: pathname + search
              }
            }}
          />
        )
      }
    />
  );
};

// const mapStateToProps = (state: any) => {
//   return {
//     token: getToken(state)
//   };
// };

// export default connect(mapStateToProps, null)(PrivateRoute);
export default PrivateRoute;
