import React, { useState, useEffect } from 'react';
import { X, Send, Calendar, Clock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    date: '',
    time: ''
  });

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your request has been sent. We will contact you shortly.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0a0a1a]/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Request a Callback</h2>
            <p className="text-white/60 max-w-lg mx-auto">
              Schedule a free consultation to discover how AI automation can transform your workflows, increase efficiency, and drive growth.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">First Name *</label>
                <input
                  required
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Last Name *</label>
                <input
                  required
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                />
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Company Name *</label>
                <input
                  required
                  type="text"
                  name="companyName"
                  placeholder="Acme Inc."
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Phone Number *</label>
                <input
                  required
                  type="tel"
                  name="phoneNumber"
                  placeholder="+254 712 345 678"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Email Address *</label>
              <input
                required
                type="email"
                name="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Preferred Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Preferred Date *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Preferred Time */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Preferred Time *</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <select
                    required
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all appearance-none"
                  >
                    <option value="" disabled className="bg-[#0a0a1a]">Select time</option>
                    <option value="morning" className="bg-[#0a0a1a]">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon" className="bg-[#0a0a1a]">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening" className="bg-[#0a0a1a]">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-violet-500/20 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-5 h-5" />
              Request Callback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
