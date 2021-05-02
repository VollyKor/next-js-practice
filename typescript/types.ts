import { DefaultRootState } from 'react-redux';

export interface State extends DefaultRootState {
  posts: {
    posts: any[];
    loading: boolean;
    error: any;
  };
}
