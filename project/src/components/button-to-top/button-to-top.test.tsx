import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider} from 'react-redux';
import {fakePromo, mockState, getMockStore, fakeCameras} from '../../utiles/mock';
import { NameSpace } from '../../const/name-space';
import ButtonToTop from './button-to-top';


const fakeStore = getMockStore({...mockState,
  [NameSpace.CatalogData]: {
    cameras: fakeCameras,
    isLoading: false,
    promo: fakePromo
  }
});

describe('Component: Button to top', () => {
  it('should render correctly', () => {

    render(
      <Provider store={fakeStore}>
        <MemoryRouter>
          <ButtonToTop/>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole('button')).toHaveClass('up-btn');
  });
});
