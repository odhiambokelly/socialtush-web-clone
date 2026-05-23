import { motion } from 'framer-motion';
import { Button, Input, Slider, Checkbox } from '@blinkdotnew/ui';
import { useState, useCallback, useEffect } from 'react';
import { Copy, RefreshCw, ShieldCheck } from 'lucide-react';
import { toast } from 'react-hot-toast';

export function PasswordGeneratorPage() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = useCallback(() => {
    const charset = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let characters = charset;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(generatedPassword);
  }, [length, includeUppercase, includeNumbers, includeSymbols]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast.success('Password copied to clipboard!');
  };

  return (
    <div className="pt-16 md:pt-20">
      <section className="section-padding bg-background min-h-[80vh] flex items-center">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block w-12 h-1 bg-primary mb-4" />
            <h1 className="text-4xl font-bold uppercase tracking-tight">PassWord Generator</h1>
            <p className="text-gray-500 mt-4">Create secure, random passwords to keep your online accounts safe.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100"
          >
            {/* Display */}
            <div className="relative mb-10 group">
              <div className="bg-gray-50 rounded-2xl p-6 text-center text-3xl font-mono break-all font-bold text-gray-800 border-2 border-dashed border-gray-200 min-h-[100px] flex items-center justify-center">
                {password}
              </div>
              <div className="absolute top-2 right-2 flex gap-2">
                <Button variant="ghost" size="icon" onClick={generatePassword} className="text-gray-400 hover:text-primary rounded-full bg-white shadow-sm border border-gray-100">
                  <RefreshCw size={18} />
                </Button>
                <Button variant="ghost" size="icon" onClick={copyToClipboard} className="text-gray-400 hover:text-primary rounded-full bg-white shadow-sm border border-gray-100">
                  <Copy size={18} />
                </Button>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-400">
                  <span>Password Length</span>
                  <span className="text-primary text-xl font-mono">{length}</span>
                </div>
                <Slider 
                  defaultValue={[length]} 
                  max={32} 
                  min={8} 
                  step={1} 
                  onValueChange={(val) => setLength(val[0])}
                  className="py-4"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => setIncludeUppercase(!includeUppercase)}>
                  <Checkbox checked={includeUppercase} onCheckedChange={() => setIncludeUppercase(!includeUppercase)} id="uppercase" />
                  <label htmlFor="uppercase" className="text-sm font-bold uppercase tracking-wider cursor-pointer">Uppercase</label>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => setIncludeNumbers(!includeNumbers)}>
                  <Checkbox checked={includeNumbers} onCheckedChange={() => setIncludeNumbers(!includeNumbers)} id="numbers" />
                  <label htmlFor="numbers" className="text-sm font-bold uppercase tracking-wider cursor-pointer">Numbers</label>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => setIncludeSymbols(!includeSymbols)}>
                  <Checkbox checked={includeSymbols} onCheckedChange={() => setIncludeSymbols(!includeSymbols)} id="symbols" />
                  <label htmlFor="symbols" className="text-sm font-bold uppercase tracking-wider cursor-pointer">Symbols</label>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <ShieldCheck size={20} className="text-primary" />
                  <span className="text-sm font-bold uppercase tracking-wider text-primary">Highly Secure</span>
                </div>
              </div>

              <Button onClick={generatePassword} className="w-full bg-primary hover:bg-primary/90 text-white py-8 rounded-2xl text-xl font-bold shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                GENERATE NEW PASSWORD
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
