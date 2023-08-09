import Gallery from './modules/Gallery/Gallery';
import AnimatedCursorComponent from './components/AnimatedMouse/AnimatedMouse';
import { QueryClientProvider, QueryClient } from 'react-query';
import useInitialConsoleLog from './hooks/useInitialConsoleLog';
import useScrollWindowBehaviour from './hooks/useScrollWindowBehaviour';

function App() {
  useInitialConsoleLog();
  useScrollWindowBehaviour();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatedCursorComponent />
      <Gallery />
    </QueryClientProvider>
  );
}

export default App;
