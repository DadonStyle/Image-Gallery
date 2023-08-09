import Gallery from './modules/Gallery/Gallery';
import AnimatedCursorComponent from './components/AnimatedMouse/AnimatedMouse';
import { QueryClientProvider, QueryClient } from 'react-query';
import useInitialConsoleLog from './hooks/useInitialConsoleLog';

function App() {
  useInitialConsoleLog();
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
