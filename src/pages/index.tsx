export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-900">Cut Your Energy Bill</h1>
        <p className="text-center text-gray-600">See if you qualify for solar and get your free savings report.</p>
        <form name="solar-lead" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" encType="multipart/form-data" className="space-y-4">
          <input type="hidden" name="form-name" value="solar-lead" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="fullName" required className="p-2 border rounded-md" placeholder="John Doe" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" required className="p-2 border rounded-md" placeholder="name@example.com" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" name="phone" required className="p-2 border rounded-md" placeholder="(555) 123-4567" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Address</label>
            <input type="text" name="address" required className="p-2 border rounded-md" placeholder="Street Address" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Zip Code</label>
            <input type="text" name="zip" required className="p-2 border rounded-md" placeholder="12345" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Utility Provider</label>
            <select name="utilityProvider" className="p-2 border rounded-md">
              <option value="">Select provider</option>
              <option value="PGE">Portland General Electric (PGE)</option>
              <option value="PacificPower">Pacific Power</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Upload Your Current Utility Bill</label>
            <input type="file" name="utilityBill" accept=".pdf,.jpg,.png,.jpeg" className="p-2 border rounded-md" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Are you the homeowner?</label>
            <select name="homeowner" className="p-2 border rounded-md">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Are you on the title of the home?</label>
            <select name="onTitle" className="p-2 border rounded-md">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Do you pay the household electric bill?</label>
            <select name="paysBill" className="p-2 border rounded-md">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Average Monthly Electric Bill</label>
            <select name="averageBill" className="p-2 border rounded-md">
              <option value="">Select</option>
              <option value="$0-$99">$0–$99</option>
              <option value="$100-$200">$100–$200</option>
              <option value="$201-$300">$201–$300</option>
              <option value="$301-$400">$301–$400</option>
              <option value="$401-$500">$401–$500</option>
              <option value="$600+">$600+</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Type of Roof</label>
            <select name="roofType" className="p-2 border rounded-md">
              <option value="">Select</option>
              <option value="Shingle">Shingle</option>
              <option value="Tile">Tile</option>
              <option value="Metal">Metal</option>
              <option value="Flat">Flat</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Age of Roof</label>
            <select name="roofAge" className="p-2 border rounded-md">
              <option value="">Select</option>
              <option value="0-5">0–5 years</option>
              <option value="6-10">6–10 years</option>
              <option value="11-15">11–15 years</option>
              <option value="16+">16+ years</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Do you have shading issues?</label>
            <select name="shading" className="p-2 border rounded-md">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Credit Score Range</label>
            <select name="creditScore" className="p-2 border rounded-md">
              <option value="">Select</option>
              <option value="Poor">Poor</option>
              <option value="Fair">Fair</option>
              <option value="Good">Good</option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Best Time to Contact You</label>
            <select name="contactTime" className="p-2 border rounded-md">
              <option value="">Select</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200">
            Get My Free Solar Savings Report
          </button>
        </form>
        <div className="text-sm text-gray-500 text-center">
          <p>⭐⭐⭐⭐⭐ Rated by homeowners</p>
          <p className="mt-2">Your information is secure.</p>
        </div>
      </div>
    </div>
  );
}
