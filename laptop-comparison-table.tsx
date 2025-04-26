import React from 'react';

const LaptopComparisonTable = () => {
  const laptops = [
    {
      name: "ASUS ROG Flow Z13 AI MAX (2025)",
      price: "$2,799 / ₹2,44,000 (128GB)",
      vram: "Up to 96GB (shared, unified)",
      bandwidth: "~512 GB/s (LPDDR5X-8000)",
      modelSize: "70B+ LLMs, huge ViTs",
      trainingSpeed: "~RTX 4060 (integrated GPU)",
      frameworkSupport: "PyTorch (ROCm), ONNX, limited TensorFlow",
      portability: "Excellent(1.2kg, 13.4\")",
      aiInference: "Very good (NPU 50 TOPS, large RAM, AMD AI)",
      cudaSupport: "No",
      website: "https://rog.asus.com/laptops/rog-flow/rog-flow-z13-2025/"
    },
    {
      name: "Razer Blade 16 (RTX 5090)",
      price: "$4,000+ / ₹3,50,000+",
      vram: "24GB GDDR7 (dedicated)",
      bandwidth: "~896 GB/s (GDDR7)",
      modelSize: "7B–13B LLMs, large image models",
      trainingSpeed: "Fastest (RTX 5090)",
      frameworkSupport: "PyTorch, TensorFlow, JAX, ONNX, all CUDA",
      portability: "Good (2.4kg, 16\")",
      aiInference: "Excellent (CUDA, Tensor/TensorRT, fast)",
      cudaSupport: "Yes",
      website: "https://www.razer.com/gaming-laptops/Razer-Blade-16"
    },
    {
      name: "Eluktronics HydroX 16 G2",
      price: "$4,000+ / ₹3,50,000+",
      vram: "24GB GDDR7 (dedicated)",
      bandwidth: "~896 GB/s (GDDR7)",
      modelSize: "7B–13B LLMs, large image models",
      trainingSpeed: "Fastest (RTX 5090, liquid cooled)",
      frameworkSupport: "PyTorch, TensorFlow, JAX, ONNX, all CUDA",
      portability: "Moderate (2.7kg, 16\")",
      aiInference: "Excellent (CUDA, Tensor/TensorRT, fast)",
      cudaSupport: "Yes",
      website: "https://www.eluktronics.com/hydroc-16-g2-info"
    },
    {
      name: "MSI Titan 18 HX AI (RTX 5090)",
      price: "$4,500+ / ₹4,00,000+",
      vram: "24GB GDDR7 (dedicated)",
      bandwidth: "~896 GB/s (GDDR7)",
      modelSize: "7B–13B LLMs, large image models",
      trainingSpeed: "Fastest (RTX 5090, best cooling)",
      frameworkSupport: "PyTorch, TensorFlow, JAX, ONNX, all CUDA",
      portability: "Poor (3.6kg, 18\")",
      aiInference: "Excellent (CUDA, Tensor/TensorRT, fast)",
      cudaSupport: "Yes",
      website: "https://www.msi.com/Laptop/Titan-18-HX-AI"
    }
  ];

  // Helper function to determine highlight colors for specific values
  const getHighlightClass = (category, value) => {
    if (category === 'portability') {
      if (value.includes('Excellent')) return 'bg-green-100';
      if (value.includes('Good')) return 'bg-green-50';
      if (value.includes('Moderate')) return 'bg-yellow-50';
      if (value.includes('Poor')) return 'bg-red-50';
    }
    if (category === 'aiInference') {
      if (value.includes('Excellent')) return 'bg-green-100';
      if (value.includes('Very good')) return 'bg-green-50';
    }
    if (category === 'trainingSpeed') {
      if (value.includes('Fastest')) return 'bg-green-100';
    }
    if (category === 'modelSize') {
      if (value.includes('70B+')) return 'bg-green-100';
    }
    return '';
  };

  return (
    <div className="p-4 max-w-full overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">AI/ML Laptop Comparison (2025)</h1>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Laptop</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">VRAM / ML Memory</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Memory Bandwidth</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Max Model Size</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Training Speed</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Framework Support</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Portability</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">AI Inference</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">CUDA</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {laptops.map((laptop, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-4">
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-32 mb-2 overflow-hidden rounded bg-gray-100 flex items-center justify-center">
                      <img 
                        src={`/api/placeholder/400/320`} 
                        alt={laptop.name} 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                    <div className="text-sm font-medium text-blue-700">{laptop.name}</div>
                    <a 
                      href={laptop.website}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:underline mt-1"
                    >
                      Official Website
                    </a>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-800">{laptop.price}</td>
                <td className="px-4 py-4 text-sm text-gray-800">{laptop.vram}</td>
                <td className="px-4 py-4 text-sm text-gray-800">{laptop.bandwidth}</td>
                <td className={`px-4 py-4 text-sm text-gray-800 ${getHighlightClass('modelSize', laptop.modelSize)}`}>
                  {laptop.modelSize}
                </td>
                <td className={`px-4 py-4 text-sm text-gray-800 ${getHighlightClass('trainingSpeed', laptop.trainingSpeed)}`}>
                  {laptop.trainingSpeed}
                </td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  <div className="max-w-xs">{laptop.frameworkSupport}</div>
                </td>
                <td className={`px-4 py-4 text-sm text-gray-800 ${getHighlightClass('portability', laptop.portability)}`}>
                  {laptop.portability}
                </td>
                <td className={`px-4 py-4 text-sm text-gray-800 ${getHighlightClass('aiInference', laptop.aiInference)}`}>
                  {laptop.aiInference}
                </td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  <span className={laptop.cudaSupport === "Yes" ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                    {laptop.cudaSupport}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-xs text-gray-500 mt-4">
        * Table compares AI/ML capabilities of high-end laptops as of April 2025
      </div>
    </div>
  );
};

export default LaptopComparisonTable;
