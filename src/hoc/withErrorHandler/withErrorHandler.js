import React, { useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Cov from '../Cov';
const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    // state = {
    //   error: null,
    // };
    const [error, setError] = useState(null);
    //  componentWillMount() {
    // this.reqInterceptor = axios.interceptors.request.use((req) => {
    //   this.setState({ error: null });
    //   return req;
    // });
    // this.resInterceptor = axios.interceptors.response.use(
    //   (res) => res,
    //   (error) => {
    //     this.setState({ error: error });
    //   }
    // );
    // }
    const reqInterceptor = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });
    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (err) => {
        setError(err);
      }
    );
    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, [resInterceptor, reqInterceptor]); //! useEffect will run when 2 parameter resInterceptor ,req change

    // componentWillUnmount() {
    //   axios.interceptors.request.eject(this.reqInterceptor);
    //   axios.interceptors.response.eject(this.resInterceptor);
    // }
    const errorConfirmedHandler = () => {
      setError(null);
    };
    // errorConfirmedHandler = () => {
    //   this.setState({ error: null });
    // };

    // render() {
    return (
      // <Cov>
      //   <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
      //     {this.state.error ? this.state.error.message : null}
      //   </Modal>
      //   <WrappedComponent {...this.props} />
      // </Cov>
      <Cov>
        <Modal show={error} clicked={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Cov>
    );
    // }
  };
};
export default withErrorHandler;
