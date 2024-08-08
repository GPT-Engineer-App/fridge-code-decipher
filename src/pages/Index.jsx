import FridgeCodeInterpreter from '../components/FridgeCodeInterpreter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Fridge Control Code Interpreter</h1>
      <FridgeCodeInterpreter />
    </div>
  );
};

export default Index;
