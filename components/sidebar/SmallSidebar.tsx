import { Home } from 'lucide-react';
import ContainerSmallSidebar from './ContainerSmallSidebar';

const SmallSidebar = () => {
  return (
    <>
      <ContainerSmallSidebar title="Home" url="/">
        <Home />
      </ContainerSmallSidebar>
      <ContainerSmallSidebar title="Home" url="/">
        <Home />
      </ContainerSmallSidebar>
      <ContainerSmallSidebar title="Home" url="/">
        <Home />
      </ContainerSmallSidebar>
      <ContainerSmallSidebar title="Home" url="/">
        <Home />
      </ContainerSmallSidebar>
    </>
  );
};

export default SmallSidebar;
