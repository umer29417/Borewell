import { useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import { User, Phone, Cpu, Waves, ArrowRight, Info, Edit3, FileText, Share2, MapPin } from 'lucide-react';

const Quote = () => {
    const location = useLocation();
    const passedDistrict = location.state?.selectedDistrict || "Chitradurga";

    const [showSummary, setShowSummary] = useState(false);
    const [machine, setMachine] = useState('robo');
    const [depth, setDepth] = useState(600);

    const [details, setDetails] = useState({
        name: '',
        mobile: '',
        location: passedDistrict
    });

    const [errors, setErrors] = useState({});

    const TRANSPORTATION = 2500;
    const FIXED_CHARGES = 8000;

    const pricingData = {
        sensor: { rates: [90, 100, 110, 130, 180], label: 'Sensor Rig' },
        robo: { rates: [115, 130, 150, 175, 220], label: 'Robo Rig' }
    };

    const calculateDrillingCost = () => {
        const rates = pricingData[machine].rates;
        if (depth <= 250) return depth * rates[0];
        if (depth <= 350) return depth * rates[1];
        if (depth <= 450) return depth * rates[2];
        if (depth <= 500) return depth * rates[3];
        return depth * rates[4];
    };

    const drillingCost = calculateDrillingCost();
    const grandTotal = drillingCost + TRANSPORTATION + FIXED_CHARGES;

    const validateForm = () => {
        let newErrors = {};
        if (!details.name.trim()) newErrors.name = "Name is required";
        if (!details.mobile.match(/^[0-9]{10}$/)) newErrors.mobile = "Enter a valid 10-digit number";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleGenerateInvoice = () => {
        if (validateForm()) {
            setShowSummary(true);
            window.scrollTo(0, 0);
        }
    };

    const handleWhatsAppShare = () => {
        const message = `*JayaLakshmi Borewells Quotation*%0A%0A*Customer:* ${details.name}%0A*Contact:* ${details.mobile}%0A*Location:* ${details.location}%0A*Machine:* ${pricingData[machine].label}%0A*Depth:* ${depth} ft%0A*Total Amount:* ₹${grandTotal.toLocaleString('en-IN')}`;
        window.open(`https://wa.me/918660995660?text=${message}`, '_blank');
    };

    if (!showSummary) {
        return (
            <div className="min-h-screen bg-[#f4f7fa] flex flex-col items-center justify-center p-4 font-sans">
                
                <div className="mb-8 text-center">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-200">
                        <Waves size={28} />
                    </div>
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight uppercase">JayaLakshmi Borewells</h2>
                    <p className="text-slate-500 text-sm font-medium">Chitradurga's Leading Drilling Service</p>
                </div>

                <div className="max-w-xl w-full bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
                    <div className="p-8 md:p-10 space-y-8">

                        <section>
                            <label className="text-[11px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">1. Service Location</label>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    value={details.location}
                                    onChange={(e) => setDetails({ ...details, location: e.target.value })}
                                    type="text"
                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 font-bold text-slate-700"
                                    placeholder="Enter Location"
                                />
                            </div>
                        </section>

                        <section>
                            <label className="text-[11px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">2. Personal Information</label>
                            <div className="space-y-4">
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        value={details.name}
                                        onChange={(e) => setDetails({ ...details, name: e.target.value })}
                                        type="text"
                                        placeholder="Full Name"
                                        className={`w-full pl-12 pr-4 py-3.5 bg-slate-50 border rounded-2xl outline-none transition-all ${errors.name ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'}`}
                                    />
                                    {errors.name && <p className="text-red-500 text-[10px] mt-1 ml-2 font-bold uppercase">{errors.name}</p>}
                                </div>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        value={details.mobile}
                                        onChange={(e) => setDetails({ ...details, mobile: e.target.value })}
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className={`w-full pl-12 pr-4 py-3.5 bg-slate-50 border rounded-2xl outline-none transition-all ${errors.mobile ? 'border-red-400' : 'border-slate-200 focus:border-blue-500'}`}
                                    />
                                    {errors.mobile && <p className="text-red-500 text-[10px] mt-1 ml-2 font-bold uppercase">{errors.mobile}</p>}
                                </div>
                            </div>
                        </section>

                        <section>
                            <label className="text-[11px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">3. Machine & Depth</label>
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <button onClick={() => setMachine('sensor')} className={`cursor-pointer p-4 rounded-2xl border-2 text-left transition-all ${machine === 'sensor' ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-50' : 'border-slate-100'}`}>
                                    <Cpu size={20} className={machine === 'sensor' ? 'text-blue-600' : 'text-slate-400'} />
                                    <div className={`font-bold mt-2 ${machine === 'sensor' ? 'text-slate-900' : 'text-slate-500'}`}>Sensor Rig</div>
                                    <p>High Precision Drilling</p>
                                </button>
                                <button onClick={() => setMachine('robo')} className={`cursor-pointer p-4 rounded-2xl border-2 text-left transition-all ${machine === 'robo' ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-50' : 'border-slate-100'}`}>
                                    <Waves size={20} className={machine === 'robo' ? 'text-blue-600' : 'text-slate-400'} />
                                    <div className={`font-bold mt-2 ${machine === 'robo' ? 'text-slate-900' : 'text-slate-500'}`}>Robo Rig</div>
                                    <p>Max Power / Tough Terrain</p>
                                </button>
                            </div>

                            <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100">
                                <div className="flex justify-between items-end mb-4">
                                    <span className="font-bold text-slate-500 text-sm">Drilling Depth</span>
                                    <span className="text-3xl font-black text-blue-600">{depth} <span className="text-sm font-bold">FT</span></span>
                                </div>
                                <input type="range" min="100" max="1200" step="10" value={depth} onChange={(e) => setDepth(parseInt(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                            </div>
                        </section>

                        <button onClick={handleGenerateInvoice} className="w-full bg-[#0f172a] text-white py-5 rounded-[1.5rem] font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all cursor-pointer shadow-xl shadow-slate-200 active:scale-95">
                            Review Quotation <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-[#f4f7fa] flex items-center justify-center p-4 font-sans">
            <div className="max-w-lg w-full space-y-4">
                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white">
                    <div className="bg-[#0f172a] text-white py-10 px-6 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h1 className="text-3xl font-black tracking-tight uppercase">JayaLakshmi Borewells</h1>
                            <div className="flex items-center justify-center gap-2 mt-2">
                                <span className="h-[1px] w-8 bg-blue-500"></span>
                                <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Official Quote Summary</p>
                                <span className="h-[1px] w-8 bg-blue-500"></span>
                            </div>
                        </div>
                        <Waves className="absolute -right-4 -bottom-4 text-slate-800 w-32 h-32 opacity-20" />
                    </div>

                    <div className="p-8 space-y-6">
                        <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            <span>Date: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                            <span>ID: #JB-{Math.floor(Math.random() * 9000) + 1000}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-2">
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-blue-600 uppercase">Customer</p>
                                <p className="font-black text-slate-900 text-lg leading-tight">{details.name}</p>
                                <p className="text-slate-500 text-xs font-medium">{details.mobile}</p>
                            </div>
                            <div className="space-y-1 text-right">
                                <p className="text-[10px] font-bold text-blue-600 uppercase">Location</p>
                                <p className="font-black text-slate-900 text-lg leading-tight">{details.location}</p>
                                <p className="text-slate-500 text-xs font-medium">Karnataka</p>
                            </div>
                        </div>
                        <div className="space-y-4 pt-4 border-t border-slate-100">
                            <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl">
                                <span className="text-xs font-bold text-slate-500 uppercase">Rig Configuration</span>
                                <span className="bg-slate-900 text-white text-[10px] px-3 py-1 rounded-full font-bold">{pricingData[machine].label}</span>
                            </div>

                            <div className="space-y-3 px-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 font-medium">Drilling ({depth} ft × ₹{Math.round(drillingCost / depth)}):</span>
                                    <span className="font-bold text-slate-900">₹{drillingCost.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 font-medium">Transportation:</span>
                                    <span className="font-bold text-slate-900">₹{TRANSPORTATION.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 font-medium">Fixed / Casing Charges:</span>
                                    <span className="font-bold text-slate-900">₹{FIXED_CHARGES.toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-600 rounded-3xl p-6 text-white flex justify-between items-center shadow-lg shadow-blue-100">
                            <div>
                                <p className="text-[10px] font-bold uppercase opacity-80">Total Estimate</p>
                                <p className="text-xl font-black">Grand Total</p>
                            </div>
                            <span className="text-3xl font-black">₹{grandTotal.toLocaleString('en-IN')}</span>
                        </div>

                        <div className="flex items-start gap-2 bg-amber-50 p-3 rounded-xl border border-amber-100">
                            <Info size={14} className="text-amber-600 mt-0.5" />
                            <p className="text-[10px] text-amber-800 font-medium leading-relaxed">
                                Prices are indicative. Final billing depends on soil conditions and casing depth required on-site.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => setShowSummary(false)} className="flex items-center justify-center gap-2 py-4 bg-white border-2 border-slate-200 rounded-2xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all cursor-pointer">
                        <Edit3 size={16} /> Edit Details
                    </button>
                    <button onClick={() => window.print()} className="flex items-center justify-center gap-2 py-4 bg-white border-2 border-blue-500 rounded-2xl text-blue-600 font-bold text-sm hover:bg-blue-50 transition-all cursor-pointer">
                        <FileText size={16} /> Download
                    </button>
                </div>
                <button onClick={handleWhatsAppShare} className="w-full bg-[#128c7e] hover:bg-[#075e54] text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-green-100 active:scale-95 cursor-pointer">
                    <Share2 size={20} /> Share via WhatsApp
                </button>
            </div>
        </div>
    );
};

export default Quote;