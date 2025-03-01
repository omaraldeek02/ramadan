function qoraan() {
    document.querySelector('.button-container').style.display = 'none';
    document.getElementById('qoraan').style.display = 'block';
    document.getElementById('eveningAdhkarContainer').style.display = 'none';
}
function RamadanCalendar() {
    document.querySelector('.button-container').style.display = 'none';
    document.getElementById('RamadanCalendar').style.display = 'block';
    document.getElementById('eveningAdhkarContainer').style.display = 'none';
}

function showMorningAdhkar() {
    document.querySelector('.button-container').style.display = 'none';
    document.getElementById('morningAdhkarContainer').style.display = 'block';
    document.getElementById('eveningAdhkarContainer').style.display = 'none';
}

function showEveningAdhkar() {
    document.querySelector('.button-container').style.display = 'none';
    document.getElementById('eveningAdhkarContainer').style.display = 'block';
    document.getElementById('morningAdhkarContainer').style.display = 'none';
}

function showRamadanQuizzes() {
    document.querySelector('.button-container').style.display = 'none';
    document.getElementById('showRamadanQuizzes').style.display = 'block';
    document.getElementById('eveningAdhkarContainer').style.display = 'none';
}

function showRamadanDua() {
    document.querySelector('.button-container').style.display = 'none';
    document.getElementById('doaa').style.display = 'block';
    document.getElementById('eveningAdhkarContainer').style.display = 'none';
}

function goBack() {
    document.querySelector('.button-container').style.display = 'flex';
    document.getElementById('morningAdhkarContainer').style.display = 'none';
    document.getElementById('eveningAdhkarContainer').style.display = 'none';
    document.getElementById('qoraan').style.display = 'none';
    document.getElementById('doaa').style.display = 'none';
    document.getElementById('RamadanCalendar').style.display = 'none';
    document.getElementById('showRamadanQuizzes').style.display = 'none';
}

function updateClock() {
    const now = new Date();

    // الحصول على اليوم
    const daysOfWeek = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    const dayOfWeek = daysOfWeek[now.getDay()]; // اليوم (من الأحد إلى السبت)

    // الحصول على التاريخ
    const day = now.getDate(); // اليوم من الشهر
    const month = now.getMonth() + 1; // الشهر (من 0 إلى 11 لذا نضيف 1)
    const year = now.getFullYear(); // السنة

    // الوقت (نظام 12 ساعة)
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let period = 'AM';  // فترة الوقت: صباح/مساء

    // تغيير الساعة إلى نظام 12 ساعة
    if (hours >= 12) {
        period = 'PM';  // إذا كانت الساعة أكبر من أو تساوي 12، فهي فترة المساء
        if (hours > 12) hours -= 12; // تحويل الساعة من 24 إلى 12
    } else if (hours === 0) {
        hours = 12; // إذا كانت الساعة 0 في نظام 24 ساعة، تتحول إلى 12 صباحًا
    }

    // تنسيق الساعة بنظام 12 ساعة
    hours = hours.toString().padStart(2, '0');
    
    // عرض التاريخ والوقت
    document.getElementById('time').textContent = `${dayOfWeek}: ${day}/${month}/${year} - ${hours}:${minutes}:${seconds} ${period}`;
}

// تحديث الساعة والتاريخ كل ثانية
setInterval(updateClock, 1000);

// عرض الساعة والتاريخ عند تحميل الصفحة
updateClock();
function checkAnswers() {
    let correctAnswers = {
        q1: "مسجد قباء",
        q2: "114",
        q3: "خالد بن الوليد",
        q4: "7",
        q5: "الإخلاص",
        q6: "آمنة بنت وهب",
        q7: "التوبة",
        q8: "غزوة الأبواء",
        q9: "يونس عليه السلام",
        q10: "7",
        q11: "البقرة",
        q12: "إسرافيل",
        q13: "علي بن أبي طالب",
        q14: "ليلة القدر",
        q15: "موسى"
    };

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let form = document.getElementById("quizForm");
    let resultDiv = document.getElementById("result");

    for (let key in correctAnswers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (!selected) {
            resultDiv.innerHTML = "❌ الرجاء اختيار إجابة لكل سؤال!";
            resultDiv.style.color = "red";
            return;
        }
        if (selected.value === correctAnswers[key]) {
            score++;
        }
    }

    resultDiv.innerHTML = `✅ نتيجتك: ${score} / ${totalQuestions}`;
    resultDiv.style.color = score >= totalQuestions / 2 ? "green" : "red";
}