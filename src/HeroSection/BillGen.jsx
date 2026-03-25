import React, { useState, useEffect, useRef } from "react";
import {
  Printer,
  User,
  Lock,
  ShieldCheck,
  Loader2,
  LogOut,
} from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hitsmwxkzdumdiefhtuy.supabase.co";
const supabaseKey = "sb_publishable_uFxK29CKX6UgHQ8iVME-RQ_GjRwTtoK";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("isAuth") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const encodedInputPassword = btoa(password);
    const correctPasswordHash = "amF5bGFrc21pX2JvcmV3ZWxsQCMxMjM5ODc=";
    if (
      username === "jaylaksmi_borewell" &&
      encodedInputPassword === correctPasswordHash
    ) {
      setIsAuthenticated(true);
      sessionStorage.setItem("isAuth", "true");
    } else {
      setError("Access Denied: Invalid Username or Password.");
    }
  };

  if (isAuthenticated) {
    return <BorewellBillingSystem />;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full border-t-4 border-blue-600">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Admin Portal</h2>
          <p className="text-gray-500 text-sm">
            Shree Jayalakshmi Rock Drillers
          </p>
        </div>
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm text-center font-bold border border-red-300">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-10 p-2 border rounded-lg outline-none focus:border-blue-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 p-2 border rounded-lg outline-none focus:border-blue-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Secure Login
          </button>
        </form>
      </div>
    </div>
  );
}

const BorewellBillingSystem = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [billNo, setBillNo] = useState(1);
  const [date] = useState(new Date().toLocaleDateString("en-GB"));
  const [customerName, setCustomerName] = useState("");
  const [advance, setAdvance] = useState("");

  const particularsList = [
    "Drilling Charge 300",
    "Drilling Charge 400",
    "Drilling Charge 500",
    "Drilling Charge 600",
    "Drilling Charge 700",
    "Drilling Charge 800",
    "Drilling Charge 900",
    "Drilling Charge 1000",
    "PVC Casing Pipe",
    "MS Casing Pipe",
    "Welding Charge",
    "Coller Charge",
    "Cap",
    "Transport",
    "Meals",
    "Re-Bore",
    "Filter Charge",
    "Labour Charge",
  ];

  const [amounts, setAmounts] = useState(
    particularsList.reduce((acc, item) => ({ ...acc, [item]: "" }), {}),
  );

  useEffect(() => {
    const savedBillNo = localStorage.getItem("borewell_bill_no");
    if (savedBillNo) setBillNo(parseInt(savedBillNo));
  }, []);

  const handleAmountChange = (item, value) => {
    setAmounts({ ...amounts, [item]: value });
  };

  const totalAmount = Object.values(amounts).reduce(
    (sum, val) => sum + (parseFloat(val) || 0),
    0,
  );
  const balanceAmount = totalAmount - (parseFloat(advance) || 0);

  const handlePrint = async () => {
    if (!customerName) return alert("Please enter Customer Name.");

    setIsSaving(true);
    try {
      const { error } = await supabase.from("bills").insert([
        {
          bill_no: billNo,
          customer_name: customerName,
          date: date,
          particulars: amounts,
          total_amount: totalAmount,
          advance_received: parseFloat(advance) || 0,
          balance_amount: balanceAmount,
        },
      ]);

      if (error) throw error;

      window.print();
      const nextBill = billNo + 1;
      setBillNo(nextBill);
      localStorage.setItem("borewell_bill_no", nextBill.toString());

      setCustomerName("");
      setAdvance("");
      setAmounts(
        particularsList.reduce((acc, item) => ({ ...acc, [item]: "" }), {}),
      );
    } catch (err) {
      alert("Error saving to cloud: " + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-mono">
      <div className="max-w-[800px] mx-auto mb-6 flex justify-between items-center print:hidden">
        <button
          onClick={() => {
            sessionStorage.removeItem("isAuth");
            window.location.reload();
          }}
          className="flex items-center gap-2 text-red-600 font-bold bg-white border border-red-200 px-4 py-2 rounded shadow"
        >
          <LogOut size={18} /> Logout
        </button>

        <button
          onClick={handlePrint}
          disabled={isSaving}
          className={`flex items-center gap-2 px-6 py-2 rounded shadow text-white font-bold transition ${isSaving ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {isSaving ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            <Printer size={18} />
          )}
          {isSaving ? "Uploading Data..." : "Print & Save to Cloud"}
        </button>
      </div>

      <div className="max-w-[800px] mx-auto bg-[#FFFDE7] border-2 border-black p-8 shadow-xl relative bill-container">
        <div className="text-center mb-6 border-b-2 border-black pb-4">
          <h1 className="text-3xl font-black uppercase">
            Shree Jayalakshmi Rock Drillers
          </h1>
          <p className="text-xs font-bold">
            4.5" & 6.5" Borewell Drilling, Re-drilling & Cleaning
          </p>
          <p className="text-[10px]">
            #123, Drilling Street, Industrial Area, Bangalore | +91 98765 43210
          </p>
          <div className="mt-2 inline-block bg-black text-white px-4 py-1 font-bold">
            CASH BILL
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <div>
            <div className="flex gap-2">
              <span className="font-bold">No:</span>
              <span className="border-b border-black w-20">
                {billNo.toString().padStart(3, "0")}
              </span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="font-bold">Sri:</span>
              <input
                type="text"
                className="bg-transparent border-b border-black outline-none w-64 px-1 font-bold uppercase"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Customer Name"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Date:</span>
            <span className="border-b border-black">{date}</span>
          </div>
        </div>

        <table className="w-full border-collapse border-2 border-black">
          <thead>
            <tr className="bg-gray-200 border-b-2 border-black">
              <th className="border-r-2 border-black w-12 py-1">SL</th>
              <th className="border-r-2 border-black px-4 text-left">
                PARTICULARS
              </th>
              <th className="w-32 text-right px-2">AMOUNT (₹)</th>
            </tr>
          </thead>
          <tbody>
            {particularsList.map((item, index) => (
              <tr key={index} className="border-b border-black/20">
                <td className="border-r-2 border-black text-center text-sm">
                  {index + 1}
                </td>
                <td className="border-r-2 border-black px-4 text-sm font-bold">
                  {item}
                </td>
                <td className="px-2">
                  <input
                    type="number"
                    className="w-full text-right bg-transparent outline-none font-bold"
                    value={amounts[item]}
                    onChange={(e) => handleAmountChange(item, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-t-2 border-black">
            <tr className="font-bold">
              <td
                colSpan="2"
                className="border-r-2 border-black text-right px-4 py-1"
              >
                TOTAL AMOUNT
              </td>
              <td className="text-right px-2">₹ {totalAmount.toFixed(2)}</td>
            </tr>
            <tr className="font-bold bg-gray-50">
              <td
                colSpan="2"
                className="border-r-2 border-black text-right px-4 py-1 italic"
              >
                ADVANCE RECEIVED (-)
              </td>
              <td className="text-right px-2">
                <input
                  type="number"
                  className="w-full text-right bg-transparent outline-none text-red-600 font-bold"
                  value={advance}
                  onChange={(e) => setAdvance(e.target.value)}
                  placeholder="0"
                />
              </td>
            </tr>
            <tr className="bg-black text-white font-bold text-lg">
              <td
                colSpan="2"
                className="border-r-2 border-white text-right px-4 py-2"
              >
                BALANCE PAYABLE
              </td>
              <td className="text-right px-2">₹ {balanceAmount.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>

        <div className="mt-10 flex justify-between">
          <div className="text-center pt-8">
            <div className="border-t border-black w-40 text-[10px] font-bold">
              CUSTOMER SIGNATURE
            </div>
          </div>
          <div className="text-center">
            <p className="italic text-xs mb-8 text-gray-400">Shanmukha R</p>
            <div className="border-t border-black w-48 text-[10px] font-bold">
              AUTHORIZED SIGNATORY
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body {
            background: white;
            padding: 0;
          }
          .print\:hidden {
            display: none !important;
          }
          .bill-container {
            border: 2px solid black !important;
            box-shadow: none !important;
            margin: 0 auto;
          }
          input::placeholder {
            color: transparent;
          }
        }
      `}</style>
    </div>
  );
};
