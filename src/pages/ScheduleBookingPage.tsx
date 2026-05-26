import { motion } from 'framer-motion';
import { Button, Input, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@blinkdotnew/ui';
import { Calendar as CalendarIcon, Clock, Lock } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Link } from '@tanstack/react-router';

export function ScheduleBookingPage() {
  const { isAuthenticated } = useAuth();
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
    "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
    "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM"
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-12 h-1 bg-primary mb-4" />
            <h1 className="text-4xl font-bold uppercase tracking-tight">Schedule Booking</h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Info */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <p className="text-gray-600 text-lg leading-relaxed">
                  It involves analyzing your business objectives, target audience, and budget, and then recommending the most effective social media advertising strategies to achieve your goals. The consultation may include advice on selecting the right social media platforms, defining audience targeting parameters, creating compelling ad content, optimizing ad campaigns, and measuring the performance and ROI of your social media advertising efforts.
                </p>
                
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-bold uppercase tracking-wider">Category</span>
                    <span className="font-semibold">Business</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-bold uppercase tracking-wider">Length</span>
                    <span className="font-semibold">30 Minutes</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-bold uppercase tracking-wider">Price</span>
                      <span className="text-2xl font-bold text-primary">$0.00</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Booking Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
              >
                {!isAuthenticated && (
                  <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[2px] flex items-center justify-center p-6 text-center">
                    <div className="bg-[#171313] text-white p-8 rounded-[2rem] shadow-2xl max-w-sm">
                      <Lock className="mx-auto mb-4 text-primary" size={32} />
                      <h4 className="text-xl font-bold mb-2 uppercase">Account Required</h4>
                      <p className="text-gray-400 text-sm mb-6">Please login or create an account to schedule a booking.</p>
                      <div className="flex flex-col gap-3">
                        <Link to="/login">
                          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest">Login</Button>
                        </Link>
                        <Link to="/register">
                          <Button variant="ghost" className="w-full text-white hover:text-primary uppercase tracking-widest text-xs">Create Account</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                <form className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <CalendarIcon className="text-primary" size={20} />
                      Choose Day
                    </h3>
                    <Input type="date" className="rounded-xl border-gray-200 focus:ring-primary" defaultValue="2026-05-22" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Clock className="text-primary" size={20} />
                      Choose Time
                    </h3>
                    <Select>
                      <SelectTrigger className="rounded-xl border-gray-200 focus:ring-primary h-12">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {timeSlots.map(slot => (
                          <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    BOOK NOW!
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

