export default function CashierDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-blue-950 mb-2">Welcome, Cashier!</h2>
        <p className="text-gray-500 text-[13px]">Here is your shift summary for today.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Total Sales</p>
          <p className="text-2xl font-bold text-blue-950">KES 12,450</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Transactions</p>
          <p className="text-2xl font-bold text-blue-950">48</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Items Sold</p>
          <p className="text-2xl font-bold text-blue-950">124</p>
        </div>
      </div>
    </div>
  );
}
