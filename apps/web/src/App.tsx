import './App.css';

import { Button } from '@packages/ui/components/button';
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from '@packages/ui/components/alert';
const H = () => {
  return <h1 className="text-3xl font-bold underline red">Hello world!</h1>;
};
const App = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
        <H />
        <Button>Hello world</Button>

        <Alert>
          <AlertTitle>This is Alert</AlertTitle>
          <AlertDescription> description</AlertDescription>
        </Alert>
      </main>
    </div>
  );
};

export default App;
