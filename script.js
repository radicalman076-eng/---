tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brandYellow: '#FFC72C',
                brandOrange: '#FF6B35',
                brandRed: '#E63946',
                brandBlue: '#00A8E8',
                brandGreen: '#06D6A0',
                brandPurple: '#7209B7',
                kingGold: '#FFD700',
            },
            fontFamily: {
                sinhala: ['Noto Sans Sinhala', 'Abhaya Libre', 'sans-serif'],
                kids: ['Fredoka', 'Noto Sans Sinhala', 'sans-serif'],
            },
            animation: {
                'bounce-slow': 'bounce 3s infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
                'float': 'float 4s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s infinite',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                pulseGlow: {
                    '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(255, 199, 44, 0.8))' },
                    '50%': { filter: 'drop-shadow(0 0 25px rgba(255, 107, 53, 0.9))' },
                }
            }
        }
    }
}

document.getElementById('currentYear').textContent = new Date().getFullYear();

// Custom Vector Crown Generator with colorful jewels and ornate details for Kings
function getKingCrownSvg(crownStyleIndex, kingName) {
    const jewelColors = [
        { base: '#FFD700', jewels: '#E63946', secondary: '#00A8E8' },
        { base: '#FFC72C', jewels: '#7209B7', secondary: '#06D6A0' },
        { base: '#F4A261', jewels: '#00A8E8', secondary: '#E63946' },
        { base: '#E76F51', jewels: '#06D6A0', secondary: '#FFD700' },
        { base: '#FFD700', jewels: '#E63946', secondary: '#7209B7' }
    ];

    const theme = jewelColors[crownStyleIndex % jewelColors.length];

    return `
        <div class="w-full h-full bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 dark:from-slate-800 dark:to-slate-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <div class="opacity-15 absolute inset-0 bg-[radial-gradient(#FF6B35_1px,transparent_1px)] [background-size:12px_12px]"></div>
            <div class="relative z-10 transform group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-300 flex flex-col items-center">
                <svg class="w-28 h-28 drop-shadow-xl" viewBox="0 0 100 100">
                    <!-- Crown Shadow -->
                    <ellipse cx="50" cy="82" rx="35" ry="6" fill="rgba(0,0,0,0.15)" />
                    
                    <!-- Main Crown Base -->
                    <path d="M 20,70 L 25,35 L 38,52 L 50,25 L 62,52 L 75,35 L 80,70 Z" 
                          fill="${theme.base}" stroke="#955214" stroke-width="2.5" stroke-linejoin="round" />
                    
                    <!-- Inner Crown Cap -->
                    <path d="M 23,68 C 25,45 75,45 77,68 Z" fill="${theme.secondary}" opacity="0.3" />

                    <!-- Bottom Crown Band -->
                    <rect x="20" y="66" width="60" height="12" rx="3" fill="#E76F51" stroke="#955214" stroke-width="2" />
                    
                    <!-- Crown Spire Jewels (Top) -->
                    <circle cx="25" cy="33" r="4.5" fill="${theme.jewels}" stroke="#FFF" stroke-width="1.5" />
                    <circle cx="50" cy="22" r="6" fill="${theme.jewels}" stroke="#FFF" stroke-width="1.5" />
                    <circle cx="75" cy="33" r="4.5" fill="${theme.jewels}" stroke="#FFF" stroke-width="1.5" />
                    
                    <!-- Band Jewels -->
                    <circle cx="32" cy="72" r="3" fill="${theme.secondary}" />
                    <circle cx="50" cy="72" r="3.5" fill="${theme.jewels}" />
                    <circle cx="68" cy="72" r="3" fill="${theme.secondary}" />

                    <!-- Sparkles -->
                    <path d="M 48,12 L 50,6 L 52,12 L 58,14 L 52,16 L 50,22 L 48,16 L 42,14 Z" fill="#FFF" />
                </svg>
                <span class="mt-2 text-xs font-black text-amber-900 dark:text-amber-200 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full shadow-sm border border-amber-300">
                    ${kingName}
                </span>
            </div>
        </div>
    `;
}

// 10 Famous Sri Lankan Kings Data
const kingsData = [
    {
        id: 1,
        name: "විජය රජතුමා",
        titleEn: "King Vijaya",
        era: "තම්මැන්නාව රාජධානිය (ක්‍රි.පූ. 543 - 505)",
        icon: "👑",
        crownStyle: 0,
        badgeColor: "bg-red-500",
        shortDesc: "ලංකාවේ ප්‍රථම පාලකයා ලෙස සැලකෙන තම්මැන්නාව රාජධානිය පිහිටවූ රජතුමාය.",
        achievements: [
            "ශ්‍රී ලංකාවේ ප්‍රථම රාජධානිය වන තම්මැන්නාව ආරම්භ කිරීම.",
            "තම්මැන්නා නගරය කේන්ද්‍ර කරගනිමින් පාලනය ගෙන යාම.",
            "ලංකාද්වීපයේ ජනාවාස විධිමත් කිරීම."
        ],
        details: "විජය රජතුමා ඉන්දියාවේ සිංහපුර සිට ලංකාවට පැමිණි අතර, තම්මැන්නාව ප්‍රදේශයේ රාජධානිය පිහිටුවන ලදී. සිංහල ජාතියේ ආරම්භක පුවත විජය රජතුමාගේ පැමිණීමත් සමඟ සම්බන්ධ වේ."
    },
    {
        id: 2,
        name: "පණ්ඩුකාභය රජතුමා",
        titleEn: "King Pandukabhaya",
        era: "අනුරාධපුර රාජධානිය (ක්‍රි.පූ. 437 - 367)",
        icon: "👑",
        crownStyle: 1,
        badgeColor: "bg-amber-500",
        shortDesc: "අනුරාධපුර නගරය අගනුවර ලෙස නිර්මාණය කර විධිමත් පාලනයක් ඇරඹූ රජතුමා.",
        achievements: [
            "අනුරාධපුරය ලංකාවේ ප්‍රධාන අගනුවර ලෙස සැලසුම්සහගතව නිර්මාණය කිරීම.",
            "ග්‍රාම සීමා නියම කිරීම සහ නගර පාලනය විධිමත් කිරීම.",
            "ජල සම්ප්‍රදාය සඳහා බසවක්කුලම (අභය වැව) කරවීම."
        ],
        details: "පණ්ඩුකාභය රජතුමා ලංකා ඉතිහාසයේ ඉතාම සැලසුම්සහගතව නගර නිර්මාණය කළ ශ්‍රේෂ්ඨ රජතුමෙකි. එතුමා අනුරාධපුර රාජධානියේ සැබෑ නිර්මාතෘ ලෙස සැලකේ."
    },
    {
        id: 3,
        name: "දෙවානම්පියතිස්ස රජතුමා",
        titleEn: "King Devanampiya Tissa",
        era: "අනුරාධපුරය (ක්‍රි.පූ. 250 - 210)",
        icon: "👑",
        crownStyle: 2,
        badgeColor: "bg-emerald-500",
        shortDesc: "ලංකාවට මහින්දාගමනය සිදු වූ අතර බුදුදහම රාජ්‍ය ආගම බවට පත් කළ රජතුමා.",
        achievements: [
            "මිහින්තලයේදී මිහිඳු හිමියන් හමුවී බුදුදහම වැළඳ ගැනීම.",
            "ජය ශ්‍රී මහා බෝධීන් වහන්සේ ලංකාවට වැඩම කරවා අනුරාධපුරයේ රෝපණය කිරීම.",
            "මහමෙව්නාව, මහා විහාරය සහ ථූපාරාමය කරවීම."
        ],
        details: "දෙවානම්පියතිස්ස රජ සමයේදී ලංකාවට බුදුදහම, සංස්කෘතිය, සහ අක්ෂර කලාව ලැබුණි. මෙය ශ්‍රී ලාංකීය ඉතිහාසයේ ස්වර්ණමය සංධිස්ථානයකි."
    },
    {
        id: 4,
        name: "දුටුගැමුණු රජතුමා",
        titleEn: "King Dutugemunu",
        era: "අනුරාධපුරය (ක්‍රි.පූ. 161 - 137)",
        icon: "👑",
        crownStyle: 3,
        badgeColor: "bg-blue-500",
        shortDesc: "මුළු ලංකාවම එක්සේසත් කර රුවන්වැලි මහා සෑය කරවූ ජාතික වීර රජතුමා.",
        achievements: [
            "ශ්‍රී ලංකාව එක්සේසත් කර එකම ඡත්‍රයක් යටතට පැමිණවීම.",
            "විශිෂ්ඨ කලා නිර්මාණයක් වන රුවන්වැලි මහා සෑය (මහාථූපය) ඉදිකිරීම.",
            "ලෝවාමහාපාය සහ මිරිසවැටිය දාගැබ කරවීම."
        ],
        details: "දුටුගැමුණු රජතුමා කඳුරට හා රුහුණ එක් කරමින් දේශයේ ස්වාධීනත්වය සුරැකි ශ්‍රේෂ්ඨතම නරපතියෙකි. එතුමා ඉදිකළ රුවන්වැලිසෑය අදටත් බුදුදහමේ සංකේතයකි."
    },
    {
        id: 5,
        name: "වළගම්බා රජතුමා",
        titleEn: "King Valagamba",
        era: "අනුරාධපුරය (ක්‍රි.පූ. 89 - 77)",
        icon: "👑",
        crownStyle: 4,
        badgeColor: "bg-purple-500",
        shortDesc: "සතුරු ආක්‍රමණ හමුවේ නොසැලී නැගී සිටි, ත්‍රිපිටකය ග්‍රන්ථාරූඪ කළ රජතුමා.",
        achievements: [
            "මාතලේ අලුවිහාරයේදී ත්‍රිපිටකය ප්‍රථම වරට තල්පත වල ලියා ග්‍රන්ථාරූඪ කිරීම.",
            "අභයගිරි විහාරය කරවීම.",
            "විපතේදී සැඟවී සිට සේනා සංවිධානය කර නැවත රාජ්‍යය දිනා ගැනීම."
        ],
        details: "වළගම්බා (වට්ටගාමිණී අභය) රජතුමා විදේශීය ආක්‍රමණිකයන් පරාජය කර සිංහාසනය නැවත ලබාගත් අතර, බුදුදහම රැකගැනීමට ත්‍රිපිටකය ග්‍රන්ථාරූඪ කරවීය."
    },
    {
        id: 6,
        name: "ධාතුසේන රජතුමා",
        titleEn: "King Dhatusena",
        era: "අනුරාධපුරය (ක්‍රි.ව. 455 - 473)",
        icon: "👑",
        crownStyle: 0,
        badgeColor: "bg-teal-500",
        shortDesc: "කලා වැව සහ බුද්ධ ප්‍රතිමා නිර්මාණය කළ ගොවිතැනට මහත් සේවයක් කළ රජතුමා.",
        achievements: [
            "අති දැවැන්ත කලා වැව සහ යෝධ ඇළ නිර්මාණය කිරීම.",
            "ලොව සුප්‍රසිද්ධ අවුකන බුදු පිළිමය නෙළීමට අනුග්‍රහය දැක්වීම.",
            "කෘෂිකර්මාන්තය උදෙසා වැව් 18ක් සහ ඇළ මාර්ග කරවීම."
        ],
        details: "ධාතුසේන රජතුමා 'මගේ එකම වස්තුව කලා වැවයි' යනුවෙන් ප්‍රකාශ කළ, දේශයේ ජල සම්පත හා ගොවිතැන වෙනුවෙන් අසමසම සේවයක් කළ රජ කෙනෙකි."
    },
    {
        id: 7,
        name: "කාශ්‍යප රජතුමා",
        titleEn: "King Kashyapa",
        era: "සීගිරිය (ක්‍රි.ව. 477 - 495)",
        icon: "👑",
        crownStyle: 1,
        badgeColor: "bg-orange-500",
        shortDesc: "ලෝක පුදුමයක් වන සීගිරිය සිංහගිර පාෂාණ මාලිගය නිර්මාණය කළ රජතුමා.",
        achievements: [
            "සීගිරිය පර්වතය මත විස්මිත මාලිග සංකීර්ණයක් ඉදිකිරීම.",
            "ලොව සුප්‍රකට සීගිරි ඡායා චිත්‍ර (සීගිරි ළඳුන්) ඇඳීමට අනුග්‍රහ දැක්වීම.",
            "කණ්ණාඩි තලයක් වැනි කටාරම් සහිත කුරුටු ගී පවුර නිර්මාණය."
        ],
        details: "පළමු කාශ්‍යප රජතුමා සීගිරිය වැනි ලෝක උරුම වාස්තු විද්‍යාත්මක ආශ්චර්යයක් ලොවට දායාද කළ අද්විතීය ශිල්පීය හැකියාවන් අගය කළ රජෙකි."
    },
    {
        id: 8,
        name: "පළමු පරාක්‍රමබාහු රජතුමා",
        titleEn: "King Parakramabahu I",
        era: "පොළොන්නරුව (ක්‍රි.ව. 1153 - 1186)",
        icon: "👑",
        crownStyle: 2,
        badgeColor: "bg-cyan-500",
        shortDesc: "'අහසින් වැටෙන එක දිය බිඳක්වත්...' ප්‍රකාශ කර පරාක්‍රම සමුද්‍රය තැනූ රජතුමා.",
        achievements: [
            "සාගරයක් වැනි විශාල පරාක්‍රම සමුද්‍රය නිර්මාණය කිරීම.",
            "පොළොන්නරුව යුගයේ කෘෂිකර්මාන්තය හා ආර්ථිකය උපරිම මට්ටමට ගෙන ඒම.",
            "ලංකාව පෙරදිග ධාන්‍යාගාරය බවට පත් කිරීම."
        ],
        details: "මහා පරාක්‍රමබාහු රජතුමා ලංකාව ආර්ථික වශයෙන් සහ හමුදාමය වශයෙන් ඉතා ප්‍රබල තත්ත්වයකට පත් කළ අතර, පොළොන්නරුවේ ගල් විහාරය ආදී සිද්ධස්ථානද කරවීය."
    },
    {
        id: 9,
        name: "නිශ්ශංකමල්ල රජතුමා",
        titleEn: "King Nissankamalla",
        era: "පොළොන්නරුව (ක්‍රි.ව. 1187 - 1196)",
        icon: "👑",
        crownStyle: 3,
        badgeColor: "bg-yellow-500",
        shortDesc: "පොළොන්නරුවේ රංකොත් වෙහෙර සහ හැටදාගෙය කරවූ, ශිලාලේඛන රැසක් තැබූ රජතුමා.",
        achievements: [
            "පොළොන්නරුවේ විශාලතම ස්තූපය වන රංකොත් වෙහෙර ඉදිකිරීම.",
            "හැටදාගෙය සහ නිශ්ශංක ලතා මණ්ඩපය කරවීම.",
            "රට පුරා සිලා ලේඛන (සෙල්ලිපි) විශාල ප්‍රමාණයක් පිහිටුවීම."
        ],
        details: "නිශ්ශංකමල්ල රජතුමා ජනතාවගේ බදු මුදල් අඩු කර සහන සැලසූ අතර පොළොන්නරුව නගරය ශෝභමාන කිරීමට විශාල ගොඩනැගිලි ඉදිකළේය."
    },
    {
        id: 10,
        name: "VI වන පරාක්‍රමබාහු රජතුමා",
        titleEn: "King Parakramabahu VI",
        era: "කෝට්ටේ රාජධානිය (ක්‍රි.ව. 1412 - 1467)",
        icon: "👑",
        crownStyle: 4,
        badgeColor: "bg-indigo-500",
        shortDesc: "කෝට්ටේ යුගයේ මුළු ලංකාවම එක්සේසත් කළ, සාහිත්‍යයේ ස්වර්ණමය යුගයේ රජතුමා.",
        achievements: [
            "සම්පූර්ණ ශ්‍රී ලංකාවම නැවත වරක් එක්සේසත් කර පාලනය කිරීම.",
            "සන්දේශ කාව්‍ය ඇතුළු සිංහල සාහිත්‍යයේ ස්වර්ණමය යුගය ඇති කිරීම.",
            "ශ්‍රී දළදා වහන්සේ උදෙසා කෝට්ටේ අලංකාර දළදා මාළිගයක් ඉදිකිරීම."
        ],
        details: "VI වන පරාක්‍රමබාහු රජතුමාගේ කාලය සිංහල සාහිත්‍යයේ අතිශය ශ්‍රේෂ්ඨතම යුගය විය. තොටගමුවේ ශ්‍රී රාහුල හිමියන් වැනි ශ්‍රේෂ්ඨ යතිවරයන් වහන්සේලා බිහි වූයේ මේ සමයේදීය."
    }
];

// Quiz Questions Data
const quizQuestions = [
    {
        question: "ලංකාවේ ප්‍රථම රාජධානිය වන තම්මැන්නාව ආරම්භ කළ රජතුමා කවුද?",
        options: ["දුටුගැමුණු රජතුමා", "විජය රජතුමා", "ධාතුසේන රජතුමා", "වළගම්බා රජතුමා"],
        answer: 1
    },
    {
        question: "මිහින්තලයේදී දෙවානම්පියතිස්ස රජතුමාට බුදුදහම හඳුන්වා දුන්නේ කවුරුන්ද?",
        options: ["මිහිඳු මහා රහතන් වහන්සේ", "සංඝමිත්තා තෙරණිය", "අරිට්ඨ මහා අමාත්‍යවරයා", "තිස්ස කුමාරයා"],
        answer: 0
    },
    {
        question: "අති දැවැන්ත රුවන්වැලි මහා සෑය (මහාථූපය) කරවූ රජතුමා කවුද?",
        options: ["කාශ්‍යප රජතුමා", "පණ්ඩුකාභය රජතුමා", "දුටුගැමුණු රජතුමා", "පරාක්‍රමබාහු රජතුමා"],
        answer: 2
    },
    {
        question: "ලෝක උරුමයක් වන සීගිරිය පර්වත මාලිගය නිර්මාණය කළේ කවුද?",
        options: ["කාශ්‍යප රජතුමා", "නිශ්ශංකමල්ල රජතුමා", "වළගම්බා රජතුමා", "ධාතුසේන රජතුමා"],
        answer: 0
    },
    {
        question: "'අහසින් වැටෙන එක දිය බිඳක්වත් ප්‍රයෝජනයට නොගෙන මුහුදට ගලා යාමට නොදෙන්න' යයි පැවසූ රජතුමා කවුද?",
        options: ["VI වන පරාක්‍රමබාහු රජතුමා", "පළමු පරාක්‍රමබාහු රජතුමා", "දෙවානම්පියතිස්ස රජතුමා", "විජය රජතුමා"],
        answer: 1
    }
];

// Render Kings Card Grid
function renderKingsGrid(kingsToRender = kingsData) {
    const grid = document.getElementById('kingsGrid');
    grid.innerHTML = '';

    if (kingsToRender.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-2xl font-bold text-slate-500">කණගාටුයි! ඔබ සෙවූ රජතුමා හමු වූයේ නැත. 🔍</p>
            </div>
        `;
        return;
    }

    kingsToRender.forEach((king) => {
        const card = document.createElement('div');
        card.className = "bg-white dark:bg-slate-800 rounded-3xl p-5 border-4 border-amber-200 dark:border-slate-700 kids-card-shadow hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden";
        card.onclick = () => openKingModal(king.id);

        card.innerHTML = `
            <div class="absolute top-3 right-3 ${king.badgeColor} text-white font-extrabold text-xs px-3 py-1 rounded-full shadow z-20">
                #${king.id}
            </div>
            <div>
                <div class="w-full h-44 rounded-2xl overflow-hidden mb-4 relative shadow-inner">
                    ${getKingCrownSvg(king.crownStyle, king.name)}
                    <div class="absolute bottom-2 left-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-xl text-lg shadow z-20">
                        👑
                    </div>
                </div>
                <h3 class="text-xl font-black text-slate-900 dark:text-white group-hover:text-brandOrange transition-colors">
                    ${king.name}
                </h3>
                <p class="text-xs font-bold text-brandOrange dark:text-amber-400 mb-2">${king.era}</p>
                <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    ${king.shortDesc}
                </p>
            </div>
            <div class="mt-5 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                <span class="text-xs font-black text-brandPurple dark:text-purple-300">තවත් විස්තර ▶</span>
                <button class="w-8 h-8 rounded-full bg-amber-100 dark:bg-slate-700 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold text-sm group-hover:bg-brandYellow group-hover:text-slate-900 transition-colors">
                    <i class="fa-solid fa-crown"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Search Filter
function filterKings() {
    const query = document.getElementById('kingSearchInput').value.toLowerCase().trim();
    const filtered = kingsData.filter(king => 
        king.name.toLowerCase().includes(query) || 
        king.titleEn.toLowerCase().includes(query) ||
        king.era.toLowerCase().includes(query)
    );
    renderKingsGrid(filtered);
}

// Open King Modal
function openKingModal(id) {
    const king = kingsData.find(k => k.id === id);
    if (!king) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="text-center sm:text-left">
            <div class="flex flex-col sm:flex-row items-center gap-4 mb-4">
                <div class="w-20 h-20 rounded-2xl ${king.badgeColor} text-white text-4xl flex items-center justify-center shadow-lg shrink-0">
                    👑
                </div>
                <div>
                    <span class="bg-amber-100 dark:bg-slate-700 text-amber-800 dark:text-amber-300 text-xs font-bold px-3 py-1 rounded-full">
                        ${king.era}
                    </span>
                    <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
                        ${king.name}
                    </h2>
                    <p class="text-xs font-bold text-slate-400">${king.titleEn}</p>
                </div>
            </div>

            <div class="w-full h-48 rounded-2xl overflow-hidden mb-5 border-2 border-amber-200">
                ${getKingCrownSvg(king.crownStyle, king.name)}
            </div>

            <div class="space-y-4">
                <div class="bg-amber-50 dark:bg-slate-700/50 p-4 rounded-2xl border-l-4 border-brandOrange">
                    <h4 class="font-extrabold text-brandOrange dark:text-amber-300 text-sm mb-1">📜 විස්තරය:</h4>
                    <p class="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">${king.details}</p>
                </div>

                <div>
                    <h4 class="font-extrabold text-slate-900 dark:text-white text-base mb-2">⭐ ප්‍රධාන මෙහෙවර සහ ජයග්‍රහණ:</h4>
                    <ul class="space-y-2">
                        ${king.achievements.map(ach => `
                            <li class="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <i class="fa-solid fa-circle-check text-brandGreen text-base mt-0.5 shrink-0"></i>
                                <span>${ach}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>

            <div class="mt-6 flex justify-between items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                <button onclick="speakText('${king.name}. ${king.details}')" class="bg-brandBlue hover:bg-blue-600 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl flex items-center gap-2 kids-button-shadow">
                    <i class="fa-solid fa-volume-high"></i> හඬින් අසන්න
                </button>
                <button onclick="closeKingModal()" class="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl hover:bg-slate-300">
                    වසා දමන්න
                </button>
            </div>
        </div>
    `;

    const modal = document.getElementById('kingModal');
    const content = document.getElementById('modalContent');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
    }, 10);
}

// Close King Modal
function closeKingModal() {
    const modal = document.getElementById('kingModal');
    const content = document.getElementById('modalContent');
    modal.classList.add('opacity-0');
    content.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Quiz State Logic
let currentQuizIndex = 0;
let score = 0;
let selectedOption = null;

function loadQuestion() {
    const q = quizQuestions[currentQuizIndex];
    document.getElementById('quizProgress').textContent = `ප්‍රශ්නය ${currentQuizIndex + 1} / ${quizQuestions.length}`;
    document.getElementById('quizScore').textContent = `ලකුණු: ${score}`;
    document.getElementById('quizQuestion').textContent = q.question;

    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    const feedback = document.getElementById('quizFeedback');
    feedback.className = 'hidden';
    document.getElementById('nextBtn').classList.add('hidden');

    selectedOption = null;

    q.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left bg-white/20 hover:bg-white/30 text-white font-bold p-4 rounded-xl border border-white/30 transition-all text-sm sm:text-base flex items-center justify-between";
        btn.innerHTML = `
            <span>${idx + 1}. ${option}</span>
            <i class="fa-regular fa-circle text-purple-300"></i>
        `;
        btn.onclick = () => checkAnswer(idx, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(chosenIdx, btnElement) {
    if (selectedOption !== null) return;
    selectedOption = chosenIdx;

    const q = quizQuestions[currentQuizIndex];
    const feedback = document.getElementById('quizFeedback');
    const optionsButtons = document.getElementById('quizOptions').children;

    if (chosenIdx === q.answer) {
        score += 20;
        document.getElementById('quizScore').textContent = `ලකුණු: ${score}`;
        btnElement.className = "w-full text-left bg-emerald-500 text-white font-bold p-4 rounded-xl border-2 border-white text-sm sm:text-base flex items-center justify-between";
        btnElement.querySelector('i').className = "fa-solid fa-circle-check text-white text-xl";
        
        feedback.textContent = "🎈 නියමයි! නිවැරදි පිළිතුර!";
        feedback.className = "text-emerald-300 bg-emerald-950/60 border border-emerald-500/50 p-3 rounded-xl font-black text-center animate-bounce";
        
        confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.7 }
        });
    } else {
        btnElement.className = "w-full text-left bg-rose-600 text-white font-bold p-4 rounded-xl border-2 border-white text-sm sm:text-base flex items-center justify-between";
        btnElement.querySelector('i').className = "fa-solid fa-circle-xmark text-white text-xl";

        optionsButtons[q.answer].className = "w-full text-left bg-emerald-500 text-white font-bold p-4 rounded-xl text-sm sm:text-base flex items-center justify-between animate-pulse";

        feedback.textContent = "💡 නැවත උත්සාහ කරමු! නිවැරදි පිළිතුර කොළ පාටින් පෙනේ.";
        feedback.className = "text-rose-200 bg-rose-950/60 border border-rose-500/50 p-3 rounded-xl font-black text-center";
    }

    document.getElementById('nextBtn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showQuizComplete();
    }
}

function showQuizComplete() {
    document.getElementById('quizCard').classList.add('hidden');
    const completeScreen = document.getElementById('quizCompleteScreen');
    completeScreen.classList.remove('hidden');

    document.getElementById('finalScoreText').textContent = `ඔබ ප්‍රශ්න ${quizQuestions.length} කින් ලකුණු ${score} ක් ලබා ගත්තා!`;

    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });
}

function restartQuiz() {
    currentQuizIndex = 0;
    score = 0;
    document.getElementById('quizCompleteScreen').classList.add('hidden');
    document.getElementById('quizCard').classList.remove('hidden');
    loadQuestion();
}

// Sinhala Text to Speech Reader
function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'si-LK';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("ඔබගේ බ්‍රවුසරයේ හඬ පහසුකම නොමැත.");
    }
}

function toggleAudioSpeech() {
    speakText("R plus education වෙත සාදරයෙන් පිළිගනිමු! මෙහිදී ලංකාවේ අභිමානවත් ප්‍රසිද්ධ රජවරුන් ගැන ඉගෙන ගත හැක.");
}

// Dark / Light Theme Toggle
function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('themeIcon');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        icon.className = 'fa-solid fa-moon text-lg';
    } else {
        html.classList.add('dark');
        icon.className = 'fa-solid fa-sun text-lg text-amber-300';
    }
}

// Initialize App on Window Load
window.onload = function() {
    renderKingsGrid();
    loadQuestion();
};
