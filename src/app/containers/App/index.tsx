import * as React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';
// import { TodoActions } from 'app/actions';
// import { RootState } from 'app/reducers';
// import { TodoModel } from 'app/models';
// import { omit } from 'app/utils';
import { SideMenu, Header } from 'app/components';

// @connect(
//   (state: RootState): Pick<App.Props, 'todos' | 'filter'> => {
//     const hash = state.router.location && state.router.location.hash.replace('#', '');
//     const filter = FILTER_VALUES.find((value) => value === hash) || TodoModel.Filter.SHOW_ALL;
//     return { todos: state.todos, filter };
//   },
//   (dispatch: Dispatch): Pick<App.Props, 'actions'> => ({
//     actions: bindActionCreators(omit(TodoActions, 'Type'), dispatch)
//   })
// )

export class App extends React.Component {

  render() {
    
    return (
      <div>
        <Header />
        <SideMenu />        
      </div>
    );
  }
}
