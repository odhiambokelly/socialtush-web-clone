import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Card, CardContent, CardHeader, CardTitle, CardDescription } from '@blinkdotnew/ui';
import { Link, useNavigate } from '@tanstack/react-router';
import { blink } from '../blink/client';
import { UserPlus, Mail, Lock, User, Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { BlinkAuthError } from '@blinkdotnew/sdk';

export function RegisterPage() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await blink.auth.signUp({
        email,
        password,
        displayName,
      });
      toast.success('Account created successfully!');
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
              <UserPlus size={32} />
            </div>
            <CardTitle className="text-3xl font-bold font-logo uppercase tracking-tight">Join SocialTush</CardTitle>
            <CardDescription className="text-white/80 mt-2">Create your marketing partner account</CardDescription>
          </CardHeader>
          <CardContent className="p-10">
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="John Doe"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    required
                    className="pl-12 rounded-xl border-gray-200 focus:ring-primary h-12"
                  />
                </div>
              </div>
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
                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Password</label>
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
                {isLoading ? <Loader2 className="animate-spin" /> : 'CREATE ACCOUNT'}
              </Button>
            </form>
            <div className="mt-8 text-center text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-bold hover:underline uppercase tracking-widest text-sm">Login</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
