import React, { useState } from 'react';

function ContactModal({ isOpen, onClose }) {
    const [copiedField, setCopiedField] = useState(null);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const email = "2003chakrit@gmail.com";
    const phone = "092-848-2232";
    const address = "33 Village No. 4, Tha Raeng Ok Subdistrict, Ban Laem District, Phetchaburi Province";

    const handleCopy = (text, fieldName) => {
        navigator.clipboard.writeText(text);
        setCopiedField(fieldName);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent by ${name || 'Anonymous'}: ${message}`);
        setName('');
        setMessage('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop overlay */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity cursor-pointer"
                onClick={onClose}
            ></div>

            {/* Slide-in Content Panel */}
            <div className="relative w-full max-w-md h-full bg-[#0b0f19] border-l border-white/10 p-8 flex flex-col justify-between shadow-2xl animate-slide-in overflow-y-auto">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-[10px] md:text-xs font-bold text-violet-400 uppercase tracking-widest block">
                                GET IN TOUCH
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mt-1">
                                Let's build something.
                            </h3>
                        </div>
                        {/* Close button */}
                        <button 
                            onClick={onClose}
                            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Quick Contacts (Email / Phone / Address) */}
                    <div className="space-y-4">
                        {/* Email box */}
                        <div className="glass rounded-xl p-4 flex items-center justify-between border border-white/5 relative group">
                            <div>
                                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">EMAIL</span>
                                <span className="text-sm font-semibold text-slate-200 mt-1 block">{email}</span>
                            </div>
                            <button
                                onClick={() => handleCopy(email, 'email')}
                                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer relative"
                                title="Copy Email"
                            >
                                {copiedField === 'email' ? (
                                    <span className="text-[9px] absolute -top-7 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-1.5 py-0.5 rounded shadow">Copied!</span>
                                ) : null}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Phone box */}
                        <div className="glass rounded-xl p-4 flex items-center justify-between border border-white/5 relative group">
                            <div>
                                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">PHONE</span>
                                <span className="text-sm font-semibold text-slate-200 mt-1 block">{phone}</span>
                            </div>
                            <button
                                onClick={() => handleCopy(phone, 'phone')}
                                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer relative"
                                title="Copy Phone Number"
                            >
                                {copiedField === 'phone' ? (
                                    <span className="text-[9px] absolute -top-7 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-1.5 py-0.5 rounded shadow">Copied!</span>
                                ) : null}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Address box */}
                        <div className="glass rounded-xl p-4 flex items-center justify-between border border-white/5 relative group">
                            <div className="max-w-[80%]">
                                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">ADDRESS</span>
                                <span className="text-xs font-semibold text-slate-200 mt-1 block leading-relaxed">{address}</span>
                            </div>
                            <button
                                onClick={() => handleCopy(address, 'address')}
                                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer relative"
                                title="Copy Address"
                            >
                                {copiedField === 'address' ? (
                                    <span className="text-[9px] absolute -top-7 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-1.5 py-0.5 rounded shadow">Copied!</span>
                                ) : null}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Message Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-white/5">
                        <div>
                            <input 
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your name (optional)"
                                className="w-full glass rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 border border-white/5 transition-colors"
                            />
                        </div>
                        <div>
                            <textarea 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Tell me about your project..."
                                required
                                rows="4"
                                className="w-full glass rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 border border-white/5 transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit"
                            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 cursor-pointer transition-all hover:shadow-blue-500/20"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path>
                            </svg>
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Footer socials */}
                <div className="flex justify-center gap-4 text-slate-500 pt-8 border-t border-white/5">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactModal;
