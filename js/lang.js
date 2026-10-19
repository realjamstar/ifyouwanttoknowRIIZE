/* =======================================================
    DUAL LANGUAGE (TH/EN) TRANSLATION SYSTEM
   ======================================================= */
let currentLang = localStorage.getItem('riize_site_lang') || 'th';

const i18nDict = {
    th: {
        "nav-home": "หน้าหลัก",
        "nav-members": "ประวัติสมาชิก",
        "nav-discography": "ผลงานเพลง",
        "nav-other-works": "Pref. Video & Works",
        "nav-awards": "สถิติ/รางวัล",
        "nav-shows": "คอนเทนท์รายการ",
        "nav-little": "Little RIIZE",
        "hero-tag": "RISE & REALISE",
        "hero-desc": "ศูนย์รวมข้อมูลและคอนเทนต์วง RIIZE สำหรับ BRIIZE",
        "hero-btn-member": "ทำความรู้จักสมาชิก <i class=\"fas fa-arrow-right ml-2\"></i>",
        "hero-btn-discography": "<i class=\"fas fa-music mr-2 text-riize-orange\"></i> ผลงานของ RIIZE",
        
        // Members Page & Sub-profiles Translations
        "members-tag": "MEMBER PROFILES",
        "members-title": "ประวัติสมาชิก",
        "members-subtitle": "คลิกเพื่อดูข้อมูลเพิ่มเติมของเมมเบอร์ที่ต้องการ",
        "members-bio-title": "ประวัติวง RIIZE",
        "members-bio-desc": "<strong>RIIZE (ไรซ์)</strong> เป็นวงบอยกรุ๊ปจากค่าย SM Entertainment ที่รวมความสามารถอันโดดเด่นของสมาชิก นำเสนอแนวดนตรีสไตล์ <em>Emotional Pop</em> ชื่อวงเกิดจากการรวมคำว่า <strong>\"RISE\"</strong> (การเติบโต) และ <strong>\"REALISE\"</strong> (การทำให้เป็นจริง) เมื่อรวมกันจึงมีความหมายว่า \"ทีมที่เติบโตไปด้วยกันและทำให้ความฝันเป็นจริง โดยดำเนินตามคอนเซปของวงคือ <strong> 𝗥𝗲𝗮𝗹-𝘁𝗶𝗺𝗲 𝗢𝗱𝘆𝘀𝘀𝗲𝘆 </strong> หรือการเติบโตไปพร้อมกับแฟนๆ โดยจะถ่ายทอดช่วงเวลาและชีวิตประจำวันให้เห็น เสมือนเป็นคนที่ร่วมเติบโตและทำความฝันไปพร้อมๆกัน โดยวง RIIZE ไม่มีลีดเดอร์ แต่จะช่วยกันทำหน้าที่ ผลัดเปลี่ยนตามความเหมาะสมในแต่ละงาน เปิดตัวครั้งแรกในวันที่ 1 สิงหาคม 2023 และเดบิวต์อย่างเป็นทางการเมื่อวันที่ 4 กันยายน 2023",
        "members-list-title": "สมาชิกทั้งหมด (6 Members)",
        "member-view-btn": "ดูประวัติและผลงานเดี่ยว <i class=\"fas fa-arrow-right ml-1\"></i>",
        "back-to-members": "ย้อนกลับไปหน้ารวมสมาชิก",
        "member-label-pos": "ตำแหน่งในวง (Position)",
        "member-label-dob": "วันเกิด (Date of Birth)",
        "member-label-nat": "สัญชาติ (Nationality)",
        "member-label-agency": "สังกัด (Agency)",
        "member-timeline-title": "เส้นทางสายดนตรี (Timeline)",

        // Discography Page Translations
        "disco-tag": "DISCOGRAPHY",
        "disco-title": "ผลงานเพลง",
        "disco-subtitle": "รวบรวมอัลบั้มและผลงานเพลงทั้งหมดของวง RIIZE",
        "disco-section-title": "อัลบั้มทั้งหมด (Albums & Singles)",
        "disco-tracklist-label": "Tracklist (คลิกเพื่อฟัง):",
        "disco-watch-mv": "รับชม Music Video (Title Song)",

        // TV Shows / Clip & Content Page Translations
        "shows-tag": "CLIP & CONTENT",
        "shows-title": "คอนเทนท์รายการ",
        "shows-subtitle": "รวบรวมรายการวาไรตี้และคลิปไฮไลต์ความสนุกของ RIIZE รับชมได้ทันที",
        "shows-section-title": "รายการทั้งหมด (Variety Shows & Web Content)",

        // TV Shows / Live stage Translations
        "works-tag": "PREF. VIDEO & WORKS",
        "works-title": "Pref. Video & Works",
        "works-subtitle": "รวบรวมเพอร์ฟอร์แมนซ์วิดีโอ งานประกาศรางวัล เฟสติวัล และผลงานโฆษณา",
        "works-section-title": "ผลงานการแสดงและโฆษณาทั้งหมด",
        "tab-all": "ทั้งหมด (All)",
        "tab-track": "Track Video",
        "tab-festival": "Festival & Awards",
        "tab-ads": "Ads & Brand",
        "tab-perf": "Performance Video",

        // รางวัล
        "awards-tag": "AWARDS & ACHIEVEMENTS",
        "awards-title": "HONOR & GLORY",
        "awards-subtitle": "บันทึกความสำเร็จ สถิติยอดขายอัลบั้ม และรางวัลเกียรติยศแห่งความภาคภูมิใจของ RIIZE",
        "stat-sales": "ยอดขายอัลบั้มล้านชุด",
        "stat-awards": "รางวัลรุกกี้และรางวัลใหญ่",
        "stat-wins": "ถ้วยรางวัลรายการเพลง",
        "stat-charts": "อันดับ 1 ชาร์ตเพลงชั้นนำ",
        "sec-album-sales": "1. สถิติและยอดขายอัลบั้ม (Album Sales & Certifications)",
        "sec-awards-main": "2. รางวัลที่ได้รับ (Awards & Honors Timeline)",
        "award-sub-festival": "2.2 รางวัลจากงานปลายปีและงานประกาศรางวัล",
        "award-sub-music": "2.1 ถ้วยรางวัลจากรายการเพลง",
        "award-sub-other": "2.3 รางวัลอื่นๆ และตำแหน่งเกียรติยศ",

        // Little RIIZE
        "little-tag": "PLAYGROUND & FRIENDS",
        "little-title": "Little RIIZE World",
        "little-subtitle": "ทำความรู้จักกับคาแรคเตอร์สุดน่ารัก สวนสนุกฉบับจิ๋วของเหล่าสมาชิก RIIZE",
        "little-grid-title": "✨ เหล่าผองเพื่อน Little RIIZE ทั้ง 6 ตัวตน ✨",
        "little-grid-subtitle": "คลิกหรือเลื่อนดูความน่ารักของคาแรคเตอร์แต่ละตัวกันได้เลย!",

        "about-title": "เกี่ยวกับวง RIIZE",
        "about-desc": "<strong>RIIZE (ไรซ์)</strong> เป็นวงบอยกรุ๊ปจากค่าย SM Entertainment ที่รวมความสามารถอันโดดเด่นของสมาชิกทั้ง 6 คน ได้แก่ โชทาโร่, อึนซอก, ซองชาน, วอนบิน, โซฮี, แอนตัน นำเสนอแนวดนตรีสไตล์ <em>Emotional Pop</em> โดยชื่อวงเกิดจากการรวมคำว่า <strong>\"RISE\"</strong> (การเติบโต) และ <strong>\"REALISE\"</strong> (การทำให้เป็นจริง) เมื่อรวมกันจึงมีความหมายว่า \"ทีมที่เติบโตไปด้วยกันและทำให้ความฝันเป็นจริง โดยดำเนินตามคอนเซปของวงคือ <strong> 𝗥𝗲𝗮𝗹-𝘁𝗶𝗺𝗲 𝗢𝗱𝘆𝘀𝘀𝗲𝘆 </strong> หรือการเติบโตไปพร้อมกับแฟนๆ โดยจะถ่ายทอดช่วงเวลาและชีวิตประจำวันให้เห็น เสมือนเป็นคนที่ร่วมเติบโตและทำความฝันไปพร้อมๆกัน เปิดตัวครั้งแรกในวันที่ 1 สิงหาคม 2023 และเดบิวต์อย่างเป็นทางการเมื่อวันที่ 4 กันยายน 2023 มีชื่อแฟนคลับว่า <strong> BRIIZE </strong> (บรีซ/บรีจึ) มาจากคำว่า Breeze (สายลม) + RIIZE เปรียบแฟนคลับเป็นสายลมที่อยู่รอบๆตัว และจะคอยโอบอุ้มและพัดพาเอาความฝันของทั้งเมมเบอร์และแฟนคลับให้ลอยสูงขึ้นไป เติบโตไปด้วยกัน",
        "social-title": "ช่องทางการติดตาม (Official Social Links)",

        "dev-title": "ขออภัยในความไม่สะดวก",
        "dev-desc": "ขณะนี้เว็บไซต์อยู่ในระหว่างการพัฒนาข้อมูลให้สมบูรณ์จากผู้พัฒนา สามารถตรวจสอบอัปเดตได้อีกครั้งหลังจากที่ทำการอัปเดตข้อมูลแล้ว",
        "dev-status": "อยู่ระหว่างการพัฒนา",

        "footer-desc": "เว็บไซต์แฟนคลับอย่างไม่เป็นทางการ ทำขึ้นเพื่อสนับสนุนและรวบรวมข้อมูลศิลปินวง RIIZE (SM Entertainment)",
        "footer-notice-prefix": "ขณะนี้เว็บไซต์อยู่ในระหว่างการพัฒนาข้อมูลให้สมบูรณ์ หากมีข้อมูลใดตกหล่น สามารถแจ้งเพิ่มเติมได้ที่",
        "footer-notice-suffix": "และสามารถตรวจสอบอัปเดตได้อีกครั้งหลังจากที่ทำการอัปเดตข้อมูลแล้ว",

    },
    en: {
        "nav-home": "Home",
        "nav-members": "Members",
        "nav-discography": "Discography",
        "nav-other-works": "Pref. Video & Works",
        "nav-awards": "Stats & Awards",
        "nav-shows": "Clip & Content",
        "nav-little": "Little RIIZE",
        "hero-tag": "RISE & REALISE",
        "hero-desc": "The ultimate hub for RIIZE news, profiles, and media for BRIIZE.",
        "hero-btn-member": "Explore Members <i class=\"fas fa-arrow-right ml-2\"></i>",
        "hero-btn-discography": "<i class=\"fas fa-music mr-2 text-riize-orange\"></i> View Discography",
        
        // Members Page & Sub-profiles Translations
        "members-tag": "MEMBER PROFILES",
        "members-title": "Member Profiles",
        "members-subtitle": "Click on any member card to view full profile and solo activities.",
        "members-bio-title": "About RIIZE",
        "members-bio-desc": "<strong>RIIZE</strong> is a boy group under SM Entertainment, bringing together the outstanding talents of its six members: Shotaro, Eunseok, Sungchan, Wonbin, Sohee, and Anton. The group showcases its signature <em>Emotional Pop</em> style. The name RIIZE combines the words <strong>\"RISE\"</strong> (growth) and <strong>\"REALISE\"</strong> (to make something a reality), symbolizing “a team that grows together and makes their dreams come true.” The group follows the concept of <strong>𝗥𝗲𝗮𝗹-𝘁𝗶𝗺𝗲 𝗢𝗱𝘆𝘀𝘀𝗲𝘆</strong>, which represents growing alongside their fans. By sharing their moments and everyday lives, RIIZE invites fans to be part of their journey, growing together and making their dreams come true. The group was first introduced on August 1, 2023, and officially debuted on September 4, 2023. Their official fandom name is <strong>BRIIZE</strong> (pronounced “Breeze”), a combination of the word “Breeze” and “RIIZE.” The name symbolizes fans as the gentle breeze that surrounds the members, embracing them and carrying both the members’ and fans’ dreams higher into the sky as they continue to grow together.",

        "members-list-title": "All Members (6 Members)",
        "member-view-btn": "View Profile & Solo Works <i class=\"fas fa-arrow-right ml-1\"></i>",
        "back-to-members": "Back to All Members",
        "member-label-pos": "Position",
        "member-label-dob": "Date of Birth",
        "member-label-nat": "Nationality",
        "member-label-agency": "Agency",
        "member-timeline-title": "Musical Career & Timeline",

        // Discography Page Translations
        "disco-tag": "DISCOGRAPHY",
        "disco-title": "Discography",
        "disco-subtitle": "Explore all albums and music releases by RIIZE",
        "disco-section-title": "All Albums & Singles",
        "disco-tracklist-label": "Tracklist (Click to play):",
        "disco-watch-mv": "Watch Music Video (Title Song)",

        // TV Shows / Clip & Content Page Translations
        "shows-tag": "CLIP & CONTENT",
        "shows-title": "Clip & Content",
        "shows-subtitle": "Explore RIIZE variety shows, reality highlights, and web content instantly.",
        "shows-section-title": "All Variety Shows & Web Content",

        // TV Shows / Live stage Translations
        "works-tag": "PREF. VIDEO & WORKS",
        "works-title": "Pref. Video & Works",
        "works-subtitle": "Explore live stage performances from music shows, festivals, awards, and brand campaigns.",
        "works-section-title": "All Live Performances & Commercial Works",
        "tab-all": "All",
        "tab-track": "Track Video",
        "tab-festival": "Festival & Awards",
        "tab-ads": "Ads & Brand",
        "tab-perf": "Performance Video",

        // รางวัล
        "awards-tag": "AWARDS & ACHIEVEMENTS",
        "awards-title": "HONOR & GLORY",
        "awards-subtitle": "Explore RIIZE milestones, album sales records, and prestigious awards.",
        "stat-sales": "Million-Seller Albums",
        "stat-awards": "Rookie & Major Awards",
        "stat-wins": "Music Show Wins",
        "stat-charts": "Top Chart #1s",
        "sec-album-sales": "1. Album Sales & Certifications",
        "sec-awards-main": "2. Awards & Honors Timeline",
        "award-sub-festival": "2.2 Year-End & Major Awards",
        "award-sub-music": "2.1 Music Show Trophies",
        "award-sub-other": "2.3 Other Honors & Ambassadorships",

        // Little RIIZE
        "little-tag": "PLAYGROUND & FRIENDS",
        "little-title": "Little RIIZE World",
        "little-subtitle": "Meet the adorable Little RIIZE characters in their joyful wonderland.",
        "little-grid-title": "✨ All 6 Little RIIZE Friends ✨",
        "little-grid-subtitle": "Explore and discover the cuteness of each character!",

        "about-title": "About RIIZE",
        "about-desc": "<strong>RIIZE</strong> is a boy group under SM Entertainment, bringing together the outstanding talents of its six members: Shotaro, Eunseok, Sungchan, Wonbin, Sohee, and Anton. The group showcases its signature <em>Emotional Pop</em> style. The name RIIZE combines the words <strong>\"RISE\"</strong> (growth) and <strong>\"REALISE\"</strong> (to make something a reality), symbolizing “a team that grows together and makes their dreams come true.” The group follows the concept of <strong>𝗥𝗲𝗮𝗹-𝘁𝗶𝗺𝗲 𝗢𝗱𝘆𝘀𝘀𝗲𝘆</strong>, which represents growing alongside their fans. By sharing their moments and everyday lives, RIIZE invites fans to be part of their journey, growing together and making their dreams come true. The group was first introduced on August 1, 2023, and officially debuted on September 4, 2023. Their official fandom name is <strong>BRIIZE</strong> (pronounced “Breeze”), a combination of the word “Breeze” and “RIIZE.” The name symbolizes fans as the gentle breeze that surrounds the members, embracing them and carrying both the members’ and fans’ dreams higher into the sky as they continue to grow together.",
        "social-title": "Official Social Links",

   "dev-title": "We Apologize for the Inconvenience",
        "dev-desc": "This page is currently under development. Please check back again after the update is complete.",
        "dev-status": "UNDER DEVELOPMENT",

        "footer-desc": "Unofficial fanclub website created to support and aggregate information for RIIZE (SM Entertainment).",
        "footer-notice-prefix": "This website is currently under development. If you notice any missing information, feel free to report at",
        "footer-notice-suffix": "and check back again after future updates.",

    }
};

function toggleLanguage() {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    localStorage.setItem('riize_site_lang', currentLang);
    updatePageLanguage();
}

function updatePageLanguage() {
    const isTh = currentLang === 'th';
    
    // อัปเดตปุ่ม TH/EN (Desktop)
    const btnTh = document.getElementById('lang-btn-th');
    const btnEn = document.getElementById('lang-btn-en');
    if (btnTh && btnEn) {
        btnTh.className = isTh ? 'text-riize-orange' : 'text-gray-400';
        btnEn.className = isTh ? 'text-gray-400' : 'text-riize-orange';
    }

    // อัปเดตปุ่ม TH/EN (Mobile)
    const mBtnTh = document.getElementById('mobile-lang-btn-th');
    const mBtnEn = document.getElementById('mobile-lang-btn-en');
    if (mBtnTh && mBtnEn) {
        mBtnTh.className = isTh ? 'text-riize-orange' : 'text-gray-400';
        mBtnEn.className = isTh ? 'text-gray-400' : 'text-riize-orange';
    }

    // เพิ่มเอฟเฟกต์ Fade ให้ Main Content เวลาเปลี่ยนภาษา
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
        mainContainer.classList.remove('fade-in');
        void mainContainer.offsetWidth; // Trigger reflow
        mainContainer.classList.add('fade-in');
    }

    // 1. แปลข้อความที่มี attribute data-i18n ทั้งหมดในหน้า
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nDict[currentLang] && i18nDict[currentLang][key]) {
            el.innerHTML = i18nDict[currentLang][key];
        }
    });

    // 2. Re-render คอมโพเนนต์ต่างๆ ตามหน้าที่ใช้งาน (เคลียร์ให้เหลือบล็อกเดียวไม่ให้เรียกซ้ำซ้อน)
    try {
        if (typeof renderMemberGrid === 'function') renderMemberGrid();
        if (typeof renderMemberDetail === 'function') renderMemberDetail();
        if (typeof renderMemberProfile === 'function') renderMemberProfile();
        if (typeof renderDiscography === 'function') renderDiscography();
        if (typeof renderVarietyShows === 'function') renderVarietyShows();
        if (typeof renderWorks === 'function') renderWorks();
        if (typeof renderLittleRiize === 'function') renderLittleRiize();
    } catch (e) {
        console.log('Component render error or not needed on this page.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();
});