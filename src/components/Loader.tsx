import { Puff } from 'react-loader-spinner';
import './Loader.css';

const Loader = () => {
  return (
    <div className="full-screen-overlay">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#3399cc" 
        ariaLabel="puff-loading"
        visible={true}
      />
      <p>Processing Payment, please do not refresh...</p>
    </div>
  );
};

export default Loader;