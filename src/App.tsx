import './App.scss';
import PurchasesTable from './components/PurchasesTable';
import { useQuery } from '@tanstack/react-query';
import { SyncLoader } from 'react-spinners';
import { fetchPurchases } from './common/services';

function App() {
  const { data, isLoading, error } = useQuery(['purchases'], fetchPurchases);

  return (
    <main>
      <h1>Purchases</h1>
      {data && <PurchasesTable purchases={data} />}
      {isLoading && <SyncLoader />}
      {!!error && <div>Something went wrong ...</div>}
    </main>
  );
}

export default App;
