import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const FridgeCodeInterpreter = () => {
  const [hexCode, setHexCode] = useState('');
  const [interpretation, setInterpretation] = useState('');

  const interpretCode = () => {
    // This is a simplified interpretation. In a real-world scenario,
    // you'd have a more complex decoding logic based on the actual fridge control protocol.
    const actions = {
      '0A': 'Decrease temperature',
      '0B': 'Increase temperature',
      '0C': 'Turn on ice maker',
      '0D': 'Turn off ice maker',
      '0E': 'Activate quick freeze',
      '0F': 'Deactivate quick freeze',
      '10': 'Turn on energy saving mode',
      '11': 'Turn off energy saving mode',
    };

    const code = hexCode.toUpperCase();
    if (actions[code]) {
      setInterpretation(`The code "${code}" tells the fridge to: ${actions[code]}`);
    } else {
      setInterpretation(`Unknown code: "${code}". This code's action is not recognized.`);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Fridge Code Interpreter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter hexadecimal code (e.g., 0A)"
            value={hexCode}
            onChange={(e) => setHexCode(e.target.value)}
          />
          <Button onClick={interpretCode} className="w-full">Interpret Code</Button>
          {interpretation && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <p>{interpretation}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FridgeCodeInterpreter;
