// 60 Unique Life & Community Ideas
const ideas = [
    "ትንሽ ካፌ ገብተን ባለቤቱን አስፈቅደን ለ30 ደቂቃ አስተናጋጅ ሆነን መስራት።",
    "ሊስትሮ የሚሰሩ ልጆች ጋር ሄደን ጫማ በማስጠረግ ስራቸውን ማገዝ።",
    "ባንክ ወይም ትልቅ ተቋም ውስጥ ሄደን ደንበኞች ፎርም ሲሞሉና ሲንገላቱ ማገዝ።",
    "አውቶብስ ተራ ወይም የክፍለ ሀገር መናኸሪያ ሄደን ለአቅመ ደካሞች የትራንስፖርት ገንዘብ መክፈል።",
    "መንገድ ላይ ፈገግታው ደስ የሚል አንድ የማናውቀውን ሰው መርጠን ምሳ መጋበዝ።",
    "ሰፈር ውስጥ ያለ ትንሽ ሱቅ ገብተን ባለቤቱን አስፈቅደን ለ30 ደቂቃ ደንበኞችን ማስተናገድ።",
    "ጠዋት ማለዳ ተነስተን መንገድ ለሚጠርጉ እናቶች ትኩስ ሻይ እና ዳቦ መግዛት።",
    "ኮንስትራክሽን ሳይት አካባቢ ለሚሰሩ የቀን ሰራተኞች ቀዝቃዛ ውሃ ገዝቶ ማደል።",
    "የህጻናት ማሳደጊያ ወይም የአረጋውያን መጦሪያ ሄደን ጊዜያችንን ሰጥተን አብረን ማውራት።",
    "ትራፊክ ለሚበዛበት አደባባይ ሄደን ለትራፊክ ፖሊሶች ውሃ ማጠጣት።",
    "ትንንሽ ነገሮችን (እንደ ሶፍት፣ ማስቲካ) ከሚሸጡ ህጻናት ላይ ሙሉ እቃቸውን ገዝቶ መሸኘት።",
    "የመንግስት ሆስፒታል በር ላይ ቆመው ለሚጨነቁ ታካሚ ጠያቂዎች ቡና/ሻይ መጋበዝ።",
    "ታክሲ ውስጥ ከኛ ቀጥሎ ላለው አንድ ሰው ክፍያውን ሳያውቅ መክፈል።",
    "አትክልት ተራ ወይም ሾላ ገበያ ሄደን አቅም ላጠራቸው አረጋውያን እቃቸውን ተሸክመን ማድረስ።",
    "ዝናብ በሚዘንብበት ሰዓት ጃንጥላ ለሌለው ሰው ጃንጥላችንን አቃምሰን አብረን መጓዝ።",
    "ፍርድ ቤት አካባቢ ሄደን ፍትህ ፍለጋ የሚንከራተተውን ሰው እና የህይወትን ውጣ ውረድ ማስተዋል።",
    "ቦሌ ኤርፖርት የመንገደኞች መቀበያ ጋር ሄደን ሰዎች ከዓመታት በኋላ ሲገናኙ የሚፈጥሩትን ስሜት መመልከት።",
    "ባቡር (Light Rail) መነሻው ላይ ተሳፍረን እስከ መጨረሻው ፌርማታ የሰዎችን የዕለት ጉዞ ማጥናት።",
    "መርካቶ ውስጥ ምንም እቃ ሳንገዛ የነጋዴውን እና የገዢውን የንግድ ስነ-ልቦና ማስተዋል።",
    "ዩኒቨርሲቲ በር ላይ ቆመን የወጣቱን ተስፋ፣ ጭንቀት እና የነገ ህልም መመልከት።",
    "ትልቅ ፋብሪካ በር ላይ የፈረቃ ሰዓት ሲደርስ የሰራተኛውን የህይወት ትግል ማስተዋል።",
    "የፖሊስ ጣቢያ ወይም የእሳት አደጋ ጣቢያ ሄደን የዕለት ተዕለት ስራቸው ምን እንደሚመስል መጠየቅ።",
    "ቤተ-መጻሕፍት (አብርሆት) ገብተን ሰዎች ለነገ ህይወታቸው የሚያደርጉትን ትግል ማስተዋልና ማንበብ።",
    "የሰፈር ልጆች በባዶ እግራቸው ኳስ ሲጫወቱ ቆመን ማየት እና ማበረታታት።",
    "ጸጥ ያለ ፓርክ ውስጥ ተቀምጠን ስለ መጪው የጋራ ህይወታችን በወረቀት ላይ መጻፍ።",
    "አብረን የገዳም ጉዞ አድርገን ከከተማው ጫጫታ ርቀን መንፈሳዊ ሰላም ማግኘት።",
    "ማለዳ ተነስተን ታሪካዊ ቤተክርስቲያን ሄደን ኪዳን ማድረስ እና ጸሎት ማድረግ።",
    "ምንም ሳንሰራ፣ ሳናወራ እና ስልካችንን ሳንነካ ዝም ብለን ጸጥታን አብረን ማዳመጥ።",
    "መቃብር ስፍራ ሄደን የህይወትን አጭርነት በማሰብ ስለሚኖረን ስነ-ምግባር መወያየት።",
    "አንዳችን ስለ ሌላኛው 10 የምናደንቃቸውን ባህሪያት በዝርዝር ጽፈን መነበብ።",
    "እያንዳንዳችን በህይወታችን ውስጥ ትልቁን የሞራል እና የስነ-ምግባር ድንበር መወያየት።",
    "ማንም የማያውቀውን ጥልቅ የህይወት ታሪካችንን ወይም ፍርሃታችንን በግልጽ መነጋገር።",
    "በህይወታችን ላለፉት ነገር ግን ቂም ለያዝንባቸው ሰዎች አብረን ይቅርታ ማድረጋችንን ማረጋገጥ።",
    "የጾም ቀን መርጠን አብረን መጾም እና የዚያን ቀን የምግብ ገንዘብ ለተቸገረ ሰው መስጠት።",
    "በተፈጥሮ ውስጥ (ዛፍ ስር) ሆነን መንፈሳዊ መጽሐፍ አብረን ማንበብ።",
    "ምንም አይነት መዳረሻ ሳንይዝ አይስክሬም እየበላን ረጅም መንገድ በእግራችን መጓዝ።",
    "የአርሰናልን ጨዋታ አብረን እያየን የኳሱን ስሜት መጋራት።",
    "አብረን ለሰራነው የሶፍትዌር ፕሮጀክት አዲስ የ UI/UX ዲዛይን በወረቀት ላይ መሳል።",
    "ያየነውን የማህበረሰብ ችግር የሚፈታ አዲስ የኮዲንግ ሎጂክ አብረን ማሰብ።",
    "ስልካችንን ሙሉ በሙሉ ለ 12 ሰዓታት አጥፍተን እውነተኛውን ዓለም አብረን መኖር።",
    "የቴዲ አፍሮን ወይም የናሆም ዮሐንስን ዘፈን ከፍተን ግጥሙን እያሰብንበት አብረን መዘመር።",
    "አዲስ የቴክኖሎጂ ሀሳብ ዩቲዩብ ላይ ከፍተን አብረን ማጥናት።",
    "ታክሲ ውስጥ ገብተን የት እንደሚወስደን ሳንጠይቅ መጨረሻው ድረስ ሄደን ያንን ሰፈር ማሰስ።",
    "እቤት ውስጥ ያለውን ነገር ብቻ አጣምረን አዲስ ምግብ አብረን መስራት።",
    "የተማርነውን የሶፍትዌር እውቀት በቲክቶክ ቪዲዮ አማካኝነት ለሰዎች ማካፈል።",
    "ነገ ከስራ ብንባረር እና ዜሮ ብንገባ ህይወታችንን እንዴት እንጀምረዋለን በሚል መወያየት።",
    "መርካቶ ገብተን በትንሽ ገንዘብ (በ 100 ብር) ምን ጠቃሚ ነገር መግዛት እንደምንችል መሞከር።",
    "የራሳችንን የቴክኖሎጂ ድርጅት (Startup) ብንከፍት ስሙ ምን እንደሚመስል ማቀድ።",
    "ማታ ውጪ ላይ ቆመን ኮከቦችን እያየን ስለ አጽናፈ ዓለም እና ፈጣሪ ጥበብ ማውራት።",
    "በከተማችን ስላለው የጸጥታ እና የደህንነት ሁኔታ (Security) መወያየት።",
    "የአንዳችንን ኮድ (Code) ሌላኛችን አይተን፣ አስተያየት (Code Review) መስጠት።",
    "ከዚህ በፊት ሰርተን የማናውቀውን የጉልበት ስራ (እቃ ማስተካከል) አብረን መስራት።",
    "እርስ በእርስ ኢንተርቪው መደራረግ (ስለ ልጅነት ትዝታ እና ህይወት)።",
    "የጋራ የገንዘብ ቁጠባ እና የኢንቨስትመንት እቅዳችንን በኤክሴል ላይ ማዘጋጀት።",
    "ወላይታ ሶዶ ዩኒቨርሲቲ የነበረንን ህይወት እና አሁን ያለንበትን እያነጻጸርን መገምገም።",
    "አንድ ሙሉ ቀን እርስ በእርስ 'አይ' ሳንባባል የተጠየቅነውን ሁሉ ማድረግ።",
    "ሰፈር ውስጥ ካሉ አዛውንቶች ጋር ተቀምጠን የድሮውን ስነ-ምግባር እንዲነግሩን መጠየቅ።",
    "የጋራ ቪዥን ቦርድ (Vision Board) - በሚቀጥሉት 5 ዓመታት ማሳካት የምንፈልገውን ማዘጋጀት።",
    "ዝናብ ሲዘንብ ከቤት ወጥተን የዝናቡን ውሃ እና የአፈሩን ጠረን እያጣጣምን መጓዝ።",
    "ከተማ ውስጥ አዲስ የተሰራ እና ያልተለመደ ህንጻ ፈልገን አርክቴክቸሩን ማድነቅ።"
];

// Start Journey from Landing Page
function startJourney() {
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('mainApp').classList.remove('hidden');
    document.getElementById('mainApp').classList.add('flex');
    renderGrid();
}

// Render 60 Buttons in Grid
function renderGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = '';

    const openedBoxes = JSON.parse(localStorage.getItem('openedBoxes')) || [];

    ideas.forEach((idea, index) => {
        const dayNum = index + 1;
        const isOpened = openedBoxes.includes(dayNum);

        const btn = document.createElement('button');
        
        if (isOpened) {
            // Success State (Light Green)
            btn.className = "aspect-square bg-emerald-900/40 border-2 border-emerald-500 text-emerald-300 rounded-2xl flex flex-col items-center justify-center font-bold text-lg shadow-md transition-all";
            btn.innerHTML = `<i class="fa-solid fa-check text-emerald-400 text-xl mb-1"></i><span class="text-xs">ቀን ${dayNum}</span>`;
        } else {
            // Default Pink Button State
            btn.className = "aspect-square bg-pink-600 hover:bg-pink-500 text-white rounded-2xl flex flex-col items-center justify-center font-bold text-lg shadow-lg shadow-pink-600/20 transition-all transform hover:scale-105 cursor-pointer";
            btn.innerHTML = `<i class="fa-solid fa-heart text-xs mb-1 opacity-75"></i><span>${dayNum}</span>`;
            btn.onclick = () => handleBoxClick(dayNum, idea);
        }

        container.appendChild(btn);
    });
}

// Handle Click with 1-Per-Day Logic
function handleBoxClick(dayNum, ideaText) {
    const today = new Date().toDateString();
    const lastOpenedDate = localStorage.getItem('lastOpenedDate');
    const openedBoxes = JSON.parse(localStorage.getItem('openedBoxes')) || [];

    // Check if user already opened a box today
    if (lastOpenedDate === today && openedBoxes.length > 0) {
        showModal("ቆይ ቆይ! ⏳", "የዛሬውን አይተሻል! ሌላውን ለማየት የነገን ፀሀይ ጠብቂ 😉", "warning");
        return;
    }

    // Save state
    openedBoxes.push(dayNum);
    localStorage.setItem('openedBoxes', JSON.stringify(openedBoxes));
    localStorage.setItem('lastOpenedDate', today);

    // Show Idea in Modal
    showModal(`ቀን ${dayNum} - የዛሬው እቅዳችን`, ideaText, "success");
    renderGrid();
}

// Modal Functions
function showModal(title, text, type) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalText').innerText = text;
    
    const iconDiv = document.getElementById('modalIcon');
    if(type === "warning") {
        iconDiv.className = "w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto text-white text-xl";
        iconDiv.innerHTML = `<i class="fa-solid fa-clock"></i>`;
    } else {
        iconDiv.className = "w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-white text-xl";
        iconDiv.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    }

    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('modal').classList.add('flex');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('modal').classList.remove('flex');
}