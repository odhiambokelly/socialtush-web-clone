import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Card, CardContent, CardHeader, CardTitle, CardDescription } from '@blinkdotnew/ui';
import { Link, useNavigate } from '@tanstack/react-router';
import { blink } from '../blink/client';
import { LogIn, Mail, Lock, Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { BlinkAuthError } from '@blinkdotnew/sdk';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await blink.auth.signInWithEmail(email, password);
      toast.success('Successfully logged in!');
      navigate({ to: '/' });
    } catch (error) {
      if (error instanceof BlinkAuthError) {
        toast.error(error.message);
      } else {
        toast.error('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card className="border-none shadow-2xl rounded-[2rem] overflow-hidden">
          <CardHeader className="bg-primary p-10 text-white text-center">
            <div className="mx-auto w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <LogIn size={32} />
            </div>
            <CardTitle className="text-3xl font-bold font-logo uppercase tracking-tight">Welcome Back</CardTitle>
            <CardDescription className="text-white/80 mt-2">Login to your SocialTush account</CardDescription>
          </CardHeader>
          <CardContent className="p-10">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-12 rounded-xl border-gray-200 focus:ring-primary h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Password</label>
                  <Link to="/" className="text-xs text-primary hover:underline font-bold uppercase tracking-widest">Forgot Password?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-12 rounded-xl border-gray-200 focus:ring-primary h-12"
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : 'LOGIN'}
              </Button>
            </form>
            <div className="mt-8 text-center text-gray-500">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary font-bold hover:underline uppercase tracking-widest text-sm">Create Account</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
