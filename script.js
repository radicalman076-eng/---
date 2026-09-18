<script>
        // Quiz Logic Variables
        let currentQuestionIdx = 0;
        let score = 0;
        let answered = false;

        function loadQuestion() {
            answered = false;
            const q = quizQuestions[currentQuestionIdx];
            document.getElementById('quizProgress').textContent = `ප්‍රශ්නය ${currentQuestionIdx + 1} / ${quizQuestions.length}`;
            document.getElementById('quizQuestion').textContent = q.question;
            document.getElementById('nextBtn').classList.add('hidden');
            
            const feedback = document.getElementById('quizFeedback');
            feedback.className = "hidden text-center p-4 rounded-xl font-bold text-lg";

            const optionsContainer = document.getElementById('quizOptions');
            optionsContainer.innerHTML = '';

            q.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = "bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold p-4 rounded-2xl text-left transition-all kids-button-shadow flex items-center gap-3";
                btn.onclick = () => checkAnswer(idx, btn);
                btn.innerHTML = `
                    <span class="w-8 h-8 rounded-full bg-purple-500/50 flex items-center justify-center text-xs font-black">${idx + 1}</span>
                    <span>${opt}</span>
                `;
                optionsContainer.appendChild(btn);
            });
        }

        function checkAnswer(selectedIdx, btnElement) {
            if (answered) return;
            answered = true;

            const q = quizQuestions[currentQuestionIdx];
            const options = document.getElementById('quizOptions').children;
            const feedback = document.getElementById('quizFeedback');

            if (selectedIdx === q.answer) {
                score += 20;
                document.getElementById('quizScore').textContent = `ලකුණු: ${score}`;
                btnElement.classList.remove('bg-white/10', 'hover:bg-white/20');
                btnElement.classList.add('bg-emerald-500', 'border-emerald-300');
                
                feedback.textContent = "🎉 නිවැරදියි! ඉතා විශිෂ්ටයි!";
                feedback.classList.add('bg-emerald-500/30', 'text-emerald-200', 'border', 'border-emerald-400');
                feedback.classList.remove('hidden');

                confetti({
                    particleCount: 50,
                    spread: 60,
                    origin: { y: 0.8 }
                });
            } else {
                btnElement.classList.remove('bg-white/10', 'hover:bg-white/20');
                btnElement.classList.add('bg-rose-600', 'border-rose-400');
                
                options[q.answer].classList.remove('bg-white/10');
                options[q.answer].classList.add('bg-emerald-500', 'border-emerald-300');

                feedback.textContent = "❌ පිළිතුර වැරදියි! නිවැරදි පිළිතුර කොළ පැහැයෙන් දක්වා ඇත.";
                feedback.classList.add('bg-rose-500/30', 'text-rose-200', 'border', 'border-rose-400');
                feedback.classList.remove('hidden');
            }

            document.getElementById('nextBtn').classList.remove('hidden');
        }

        function nextQuestion() {
            currentQuestionIdx++;
            if (currentQuestionIdx < quizQuestions.length) {
                loadQuestion();
            } else {
                showQuizComplete();
            }
        }

        function showQuizComplete() {
            document.getElementById('quizCard').classList.add('hidden');
            document.getElementById('quizCompleteScreen').classList.remove('hidden');
            document.getElementById('finalScoreText').textContent = `ඔබගේ මුළු ලකුණු සංඛ්‍යාව: ${score} / 100`;
            
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 }
            });
        }

        function restartQuiz() {
            currentQuestionIdx = 0;
            score = 0;
            document.getElementById('quizScore').textContent = `ලකුණු: 0`;
            document.getElementById('quizCompleteScreen').classList.add('hidden');
            document.getElementById('quizCard').classList.remove('hidden');
            loadQuestion();
        }

        // Theme Switcher (Light/Dark Mode)
        function toggleTheme() {
            const isDark = document.documentElement.classList.toggle('dark');
            const themeIcon = document.getElementById('themeIcon');
            if (isDark) {
                themeIcon.className = "fa-solid fa-sun text-lg text-amber-300";
            } else {
                themeIcon.className = "fa-solid fa-moon text-lg";
            }
        }

        // Speech Synthesis / Text to Speech (TTS)
        function speakText(text) {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'si-LK';
                utterance.rate = 0.9;
                window.speechSynthesis.speak(utterance);
            } else {
                alert("ඔබගේ බ්‍රවුසරය හඬ පහසුකමට සහය නොදක්වයි.");
            }
        }

        function toggleAudioSpeech() {
            const mainHeaderSpeech = "ආයුබෝවන් පුංචි යහළුවනේ! R plus education වෙතින් ලංකාවේ අභිමානවත් ප්‍රසිද්ධ රජවරුන් ගැන ඉගෙන ගනිමු!";
            speakText(mainHeaderSpeech);
        }

        // Initialize
        window.onload = () => {
            renderKingsGrid();
            loadQuestion();
        };
</script>
