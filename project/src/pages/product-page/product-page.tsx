import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import Header from '../../components/header/header';
import ProductContent from '../../components/product-content/product-content';
import Footer from '../../components/footer/footer';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingPage from '../loading-page/loading-page';

import { useAppSelector } from '../../hooks';
import { getProductLoadingStatus } from '../../store/product-process/product-data-selectors';
import { fetchReviewAction, fetchSimilarCamerasAction, fetchCameraByIdAction } from '../../store/api-actions/api-actions';
import { getAllCameras } from '../../store/catalog-process/catalog-process-selectors';
import { store } from '../../store';

function ProductPage(): JSX.Element {
  const cameras = useAppSelector(getAllCameras);

  const { id } = useParams() as { id: string };
  const propId = +id;

  const selectedCamera = cameras.find((item) => item.id === propId) ?? null;

  useEffect(() => {
    if(selectedCamera !== null) {
      store.dispatch(fetchCameraByIdAction(selectedCamera.id));
      store.dispatch(fetchSimilarCamerasAction(selectedCamera.id));
      store.dispatch(fetchReviewAction(selectedCamera.id));
    }
  }, [propId, selectedCamera]);

  const isDataLoading = useAppSelector(getProductLoadingStatus);

  if (selectedCamera === null) {
    return (<NotFoundPage />);
  }

  return (
    isDataLoading ? <LoadingPage/>
      :
      <>
        <Header/>
        <ProductContent
          camera={selectedCamera}
        />
        <Footer/>
      </>);
}

export default ProductPage;
