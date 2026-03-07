// Select all the necessary element
const allButton = document.getElementById('allBtn');
const openButton = document.getElementById('openBtn');
const closedButton = document.getElementById('closedBtn');
const cardContainer = document.getElementById('card-container');
const issuesCount = document.getElementById('issuesCount');
const loading = document.getElementById('loading');

// 1. Data load kora
const loadIssues = async () => {
    let res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    let data = await res.json();
    allIssues = data.data;
    displayIssuesCount(allIssues);
    displayCards(allIssues);
};



//Card Display
const displayCards = (dets) => {
    cardContainer.innerHTML = "";

    dets.forEach(elem => {
        const div = document.createElement('div');
        
        // Status logic
        const borderColor = elem.status.toLowerCase() === 'open' ? 'border-t-[#00A96E]' : 'border-t-[#A855F7]';
        
        div.className = `${borderColor} border-t-4 rounded-xl flex flex-col h-full`;
        div.innerHTML = `
            <div class="rounded-xl flex flex-col h-full shadow-sm bg-white">
                <div class="group border border-gray-100 rounded-t-lg p-5 space-y-2 flex-grow">                
                    <div class="flex justify-between items-start">
                        <div class="rounded-full">
                            <img src="${elem.status.toLowerCase() === 'open' ? './assets/Open-Status.png' : './assets/Closed-Status.png'}" alt="">
                        </div>
                        <span class="tracking-wide px-7 py-1 border text-[13px] font-medium rounded-full uppercase 
                            ${elem.priority.toUpperCase() === 'HIGH' ? 'bg-red-50 text-red-600 border-red-100' : 
                              elem.priority.toUpperCase() === 'MEDIUM' ? 'bg-[#FFF6D1] text-[#E4930A] border-[#FFF6D1]' : 
                              'bg-[#EEEFF2] text-[#9096A1] border-[#EEEFF2]'}">
                            ${elem.priority.toUpperCase()}
                        </span>
                    </div>
                
                    <h3 class="font-bold text-[15px] text-[#1F2937] leading-tight line-clamp-2">${elem.title}</h3>
                    <p class="text-[13px] text-[#64748B] line-clamp-3 leading-relaxed font-medium">${elem.description}</p>
                    
                    <div class="flex flex-wrap gap-2 pt-2">
                        ${elem.labels.map(label => `
                            <span class="px-2 py-1 text-[12px] font-bold rounded-full border uppercase 
                                ${label.toLowerCase() === 'bug' ? 'bg-[#FFF1F2] text-[#E11D48] border-[#FFE4E6]' : 'bg-[#FFFBEB] text-[#D97706] border-[#FEF3C7]'}"> 
                                <i class="fa-solid ${label.toLowerCase() === 'bug' ? 'fa-robot' : 'fa-life-ring'} mr-1"></i> 
                                ${label}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <div class="border-t border-gray-200 bg-gray-50/30 rounded-b-lg p-4">
                    <span class="text-[12px] font-bold text-gray-700">#${elem.id} by ${elem.author}</span>
                </div>
            </div>`;

        cardContainer.append(div);
    });
};

loadIssues();