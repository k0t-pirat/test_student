import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider} from 'react-redux';

import Slider from './slider';

import { mockState, getMockStore, fakeCameras, fakeCamera} from '../../utiles/mock';
import { NameSpace } from '../../const/name-space';


const fakeStore = getMockStore({...mockState,
  [NameSpace.ProductData]: {
    similarCameras: fakeCameras,
    isLoading: false,
    camera: fakeCamera
  }
});

describe('Component: Slider', () => {
  it('should render correctly', () => {

    render(
      <Provider store={fakeStore}>
        <MemoryRouter>
          <Slider
            cameras={fakeCameras}
          />
        </MemoryRouter>
      </Provider>
    );

    const cameraCardsQty = screen.getAllByTestId('card').length;
    expect(cameraCardsQty).toBe(fakeCameras.length);
  });

  it('should show/not show buttons', () => {

    render(
      <Provider store={fakeStore}>
        <MemoryRouter>
          <Slider
            cameras={fakeCameras}
          />
        </MemoryRouter>
      </Provider>
    );

    const buttonPrev = screen.getByTestId('prev');

    expect(buttonPrev).toBeInTheDocument();
    expect(buttonPrev).toHaveAttribute('disabled');

    const buttonNext = screen.getByTestId('next');
    expect(buttonNext).toBeInTheDocument();
    expect(buttonNext).not.toHaveAttribute('disabled');
  });
});
