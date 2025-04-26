// This file contains the main JavaScript logic for the comparison table

// The 'laptops' data is loaded from data.js before this script runs.

// Helper function to determine highlight colors
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

// Function to render the table using plain JavaScript
function renderTable(laptopsData) {
    const appDiv = document.getElementById('app'); // Get the container div

    let tableHTML = \
        <div class="p-4 max-w-full mx-auto lg:px-8">
            <h1 class="text-3xl font-extrabold mb-6 text-center text-gray-800">AI/ML Laptop Comparison (2025)</h1>
            <div class="overflow-x-auto rounded-lg shadow-xl border border-gray-200">
                <table class="min-w-full divide-y divide-gray-200 bg-white">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Laptop</th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Price</th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">VRAM / ML Memory</th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Memory Bandwidth</th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Max Model Size</th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Training Speed</th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Framework Support</th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Portability</th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">AI Inference</th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">CUDA</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200" id="tableBody">
    \; // Start building the HTML string

    // Iterate over the laptops data and build table rows
    laptopsData.forEach((laptop, index) => {
        const rowClass = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
        const modelSizeClass = getHighlightClass('modelSize', laptop.modelSize);
        const trainingSpeedClass = getHighlightClass('trainingSpeed', laptop.trainingSpeed);
        const portabilityClass = getHighlightClass('portability', laptop.portability);
        const aiInferenceClass = getHighlightClass('aiInference', laptop.aiInference);
        const cudaClass = laptop.cudaSupport === "Yes" ? "text-green-600 font-medium" : "text-red-600 font-medium";

        // Use the image URL from the data (will be local after manual update)
        const imageSrc = laptop.imageUrl ? laptop.imageUrl : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU3ZTkiLz4KICAgIDx0ZXh0IHg9IjUwJSI yeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiBmaWxsPSIjYWJhZmFmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zem0iPklNQSBQTACEb2FkaW5nPC90ZXh0Pgo8L3N2Zz4=';


        tableHTML += \
            <tr class="\" data-index="\"> <!-- Added data-index for easy lookup -->
                <td class="px-4 py-4">
                  <div class="flex flex-col items-center">
                    <div class="w-32 h-24 mb-2 overflow-hidden rounded bg-gray-100 flex items-center justify-center">
                      <img
                        src="\"
                        alt="\"
                        class="max-w-full max-h-full object-contain"
                        onerror="this.onerror=null;this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU3ZTkiLz4KICAgIDx0ZXh0IHg9IjUwJSI yeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiBmaWxsPSIjYWJhZmFmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zem0iPklNQSBQTACEb2FkaW5nPC90ZXh0Pgo8L3N2Zz4=';"
                      />
                    </div>
                    <div class="text-sm font-medium text-blue-700 text-center">\</div>
                    <a
                      href="\"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-xs text-blue-500 hover:underline mt-1"
                      onclick="event.stopPropagation();" <!-- Prevent row click when clicking link -->
                    >
                      Official Website
                    </a>
                  </div>
                </td>
                <td class="px-4 py-4 text-sm text-gray-800">\</td>
                <td class="px-4 py-4 text-sm text-gray-800">\</td>
                <td class="px-4 py-4 text-sm text-gray-800">\</td>
                <td class="px-4 py-4 text-sm text-gray-800 \">
                  \
                </td>
                <td class="px-4 py-4 text-sm text-gray-800 \">
                  \
                </td>
                <td class="px-4 py-4 text-sm text-gray-800">
                  <div class="max-w-xs">\</div>
                </td>
                <td class="px-4 py-4 text-sm text-gray-800 \">
                  \
                </td>
                <td class="px-4 py-4 text-sm text-gray-800 \">
                  \
                </td>
                <td class="px-4 py-4 text-sm text-gray-800">
                  <span class="\">
                    \
                  </span>
                </td>
            </tr>
        \;
    });

    tableHTML += \
                    </tbody>
                </table>
            </div>
            <div class="text-xs text-gray-600 mt-6 text-center italic">
                * Table compares AI/ML capabilities of high-end laptops as of April 2025. Click a row for more details.
            </div>
             <div class="text-xs text-gray-600 mt-2 text-center">
                made by Adithya N Raj
            </div>
        </div>
    \; // Close table structure and add footer

    // Inject the generated HTML into the div
    appDiv.innerHTML = tableHTML;
}

// --- Modal Functions ---
// Get modal elements - these should exist in index.html
const modal = document.getElementById('laptopModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalLaptopName = document.getElementById('modalLaptopName');
const modalLaptopImage = document.getElementById('modalLaptopImage');
const modalLaptopDetails = document.getElementById('modalLaptopDetails');
const modalOfficialWebsite = document.getElementById('modalOfficialWebsite');


function showLaptopDetails(laptop) {
    // Populate modal content
    modalLaptopName.textContent = laptop.name;
    // Use the local image path from the data
    modalLaptopImage.src = laptop.imageUrl;
     modalLaptopImage.alt = laptop.name + " Image"; // Improve alt text
     // Handle image error specifically for modal (fallback to generic placeholder if local file is missing)
     modalLaptopImage.onerror = function() {
         this.onerror=null; // Prevent infinite loops
         this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU3ZTkiLz4KICAgIDx0ZXh0IHg9IjUwJSI yeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiBmaWxsPSIjYWJhZmFmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zem0iPklNQSBQTACEb2FkaW5nPC90ZXh0Pgo8L3N2Zz4=';
         this.classList.add('image-placeholder'); // Add placeholder styling class
     };
     modalLaptopImage.classList.remove('image-placeholder'); // Remove if previously added


    // Generate detailed list (show all keys from the object)
    let detailsHTML = '';
    for (const key in laptop) {
        // Exclude keys already used or ones that won't make sense as simple key:value pairs in details
        if (key !== 'name' && key !== 'imageUrl' && key !== 'website') {
             // Simple formatting: split camelCase/PascalCase
            const displayKey = key.replace(/([A-Z])/g, ' ').trim();
            detailsHTML += \<p><strong class="font-semibold">\:</strong> \</p>\;
        }
    }
    modalLaptopDetails.innerHTML = detailsHTML;

    modalOfficialWebsite.href = laptop.website;

    // Show the modal with animation
    modal.classList.add('visible');
     document.body.style.overflow = 'hidden'; // Prevent scrolling the background
}

function hideLaptopDetails() {
    // Hide the modal with animation
    modal.classList.remove('visible');
     document.body.style.overflow = ''; // Restore scrolling
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    // Render the table initially using the 'laptops' data loaded from data.js
    renderTable(laptops);

    // Add fade-in class after rendering (optional)
    const appElement = document.getElementById('app');
    if (appElement) {
        appElement.classList.add('fade-in');
    }


    // Event delegation for table row clicks
    const tableBody = document.getElementById('tableBody');
    if (tableBody) {
        tableBody.addEventListener('click', (event) => {
            // Find the closest row (<tr>) to the clicked element
            const row = event.target.closest('tr');
            if (row && row.dataset.index) { // Check if a row with a data-index was clicked
                const index = parseInt(row.dataset.index, 10);
                // Ensure the index is valid and the click wasn't on the website link
                if (!isNaN(index) && index >= 0 && index < laptops.length && event.target.tagName !== 'A') {
                    showLaptopDetails(laptops[index]);
                }
            }
        });
    }


    // Close modal button listener
    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', hideLaptopDetails);
    }

    // Close modal when clicking outside content (on backdrop)
    const modal = document.getElementById('laptopModal');
    if (modal) {
        modal.addEventListener('click', (event) => {
            // Check if the click target is the backdrop itself, not the modal content
            if (event.target === modal) {
                hideLaptopDetails();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        const modal = document.getElementById('laptopModal');
        if (event.key === 'Escape' && modal && modal.classList.contains('visible')) {
            hideLaptopDetails();
        }
    });

}); // End DOMContentLoaded
