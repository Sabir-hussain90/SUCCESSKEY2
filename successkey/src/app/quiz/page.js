"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

// ============================================
// QUESTION GENERATOR (500 MCQs per subject)
// ============================================
function generateQuestions(subjectId, subjectName) {
  const questions = [];
  const topics = getTopicsForSubject(subjectName);
  
  for (let i = 0; i < 500; i++) {
    const topic = topics[i % topics.length];
    const correctIndex = i % 4;
    const options = [
      `${topic} Answer ${i+1}`,
      `${topic} Wrong ${i+1}A`,
      `${topic} Wrong ${i+1}B`,
      `${topic} Wrong ${i+1}C`
    ];
    
    const rotatedOptions = [];
    for (let j = 0; j < 4; j++) {
      rotatedOptions.push(options[(j + correctIndex) % 4]);
    }
    
    questions.push({
      id: subjectId * 10000 + i + 1,
      question_text: `${i+1}. What is the ${i+1}th fact about ${topic} in ${subjectName}?`,
      option_a: rotatedOptions[0],
      option_b: rotatedOptions[1],
      option_c: rotatedOptions[2],
      option_d: rotatedOptions[3],
      correct_answer: ["a", "b", "c", "d"][correctIndex],
      explanation: `The correct answer is ${["a", "b", "c", "d"][correctIndex]} because this is a key concept in ${topic}.`,
    });
  }
  
  return questions;
}

function getTopicsForSubject(subjectName) {
  const topics = {
    "General Knowledge": ["World Facts", "Countries", "Capitals", "Flags", "Languages", "History", "Geography", "Science", "Sports", "Arts"],
    "Islamiat": ["Quran", "Hadith", "Sunnah", "Prophets", "Companions", "Islamic History", "Islamic Law", "Pillars of Islam", "Islamic Calendar", "Islamic Civilization"],
    "Current Affairs": ["Politics", "Economy", "Technology", "Environment", "Health", "International Relations", "Sports", "Science", "Space", "Defense"],
    "Computer": ["Programming", "Networking", "Database", "Operating Systems", "Cybersecurity", "Data Structures", "Algorithms", "Web Development", "AI", "Machine Learning"],
    "English": ["Grammar", "Vocabulary", "Comprehension", "Writing", "Speaking", "Idioms", "Phrasal Verbs", "Synonyms", "Antonyms", "Tenses"],
    "Urdu": ["Grammar", "Vocabulary", "Comprehension", "Writing", "Speaking", "Poetry", "Prose", "Literature", "History", "Culture"],
    "Everyday Science": ["Physics", "Chemistry", "Biology", "Astronomy", "Earth Science", "Human Body", "Environment", "Health", "Technology", "Energy"],
    "Mathematics": ["Algebra", "Geometry", "Calculus", "Statistics", "Arithmetic", "Trigonometry", "Probability", "Number Theory", "Linear Algebra", "Differential Equations"],
    "History": ["Ancient Civilizations", "Medieval History", "Modern History", "World Wars", "Revolution", "Ancient Egypt", "Greek History", "Roman History", "Chinese History", "Islamic History"],
    "Geography": ["Physical Geography", "Human Geography", "Cartography", "Climate", "Ecosystems", "Continents", "Countries", "Oceans", "Mountains", "Rivers"],
  };
  
  return topics[subjectName] || ["General"];
}

// ============================================
// ALL SUBJECTS DATA
// ============================================
const ALL_SUBJECTS = [
  { id: 1, name: "General Knowledge", icon: "🧠" },
  { id: 2, name: "Islamiat", icon: "🕌" },
  { id: 3, name: "Current Affairs", icon: "📰" },
  { id: 4, name: "Computer", icon: "💻" },
  { id: 5, name: "English", icon: "📝" },
  { id: 6, name: "Urdu", icon: "📖" },
  { id: 7, name: "Everyday Science", icon: "🔬" },
  { id: 8, name: "Mathematics", icon: "📐" },
  { id: 9, name: "History", icon: "📜" },
  { id: 10, name: "Geography", icon: "🌍" },
];

// ============================================
// QUIZ CONTENT COMPONENT (uses useSearchParams)
// ============================================
function QuizContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const subjectId = searchParams ? searchParams.get('id') : null;
  
  const [subject, setSubject] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [timeLeft, setTimeLeft] = useState(3600);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 20;

  useEffect(() => {
    if (subjectId) {
      const subjectData = ALL_SUBJECTS.find((s) => s.id === parseInt(subjectId));
      if (subjectData) {
        const generatedQuestions = generateQuestions(subjectData.id, subjectData.name);
        setSubject({
          id: subjectData.id,
          name: subjectData.name,
          icon: subjectData.icon,
          questions: generatedQuestions,
        });
        setQuestions(generatedQuestions);
        setLoading(false);
      } else {
        router.push('/');
      }
    } else {
      router.push('/');
    }
  }, [subjectId]);

  const startQuiz = () => {
    if (!subject || !subject.questions || subject.questions.length === 0) {
      return;
    }
    setShowQuiz(true);
    setTimeLeft(subject.questions.length * 30);
    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
    setIsSubmitted(false);
  };

  const goBack = () => {
    router.push('/');
  };

  // Timer
  useEffect(() => {
    if (timeLeft <= 0 || isSubmitted || loading || !showQuiz) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, isSubmitted, loading, showQuiz]);

  const handleAutoSubmit = () => {
    alert('⏰ Time is up! Submitting your quiz...');
    submitQuiz(true);
  };

  const handleAnswerSelect = (questionId, selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const submitQuiz = (isAuto = false) => {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    const detailedResults = [];

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const userAnswer = answers[q.id] || null;
      
      if (userAnswer === null) {
        unanswered++;
        detailedResults.push({
          question: q.question_text,
          userAnswer: 'Not answered',
          correctAnswer: q.correct_answer,
          isCorrect: false,
          explanation: q.explanation || '',
        });
      } else if (userAnswer === q.correct_answer) {
        correct++;
        detailedResults.push({
          question: q.question_text,
          userAnswer: userAnswer,
          correctAnswer: q.correct_answer,
          isCorrect: true,
          explanation: q.explanation || '',
        });
      } else {
        wrong++;
        detailedResults.push({
          question: q.question_text,
          userAnswer: userAnswer,
          correctAnswer: q.correct_answer,
          isCorrect: false,
          explanation: q.explanation || '',
        });
      }
    }

    const total = questions.length;
    const score = Math.round((correct / total) * 100);

    const results = {
      score,
      correct,
      wrong,
      unanswered,
      total,
      detailedResults,
    };

    setResult(results);
    setIsSubmitted(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
  };

  const getAnsweredCount = () => {
    return Object.keys(answers).length;
  };

  // Filter questions by search
  const filteredQuestions = questions.filter((q) =>
    q.question_text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;
  const paginatedQuestions = filteredQuestions.slice(startIndex, startIndex + questionsPerPage);

  // Styles
  const styles = {
    container: {
      minHeight: '100vh',
      background: '#f5f7fa',
      padding: '20px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      marginBottom: '20px',
      flexWrap: 'wrap',
      gap: '12px',
    },
    backLink: {
      color: '#1a237e',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 500,
      cursor: 'pointer',
    },
    subjectInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    subjectIcon: {
      fontSize: '32px',
    },
    subjectName: {
      fontSize: '20px',
      fontWeight: 600,
      color: '#1a1a2e',
    },
    subjectCount: {
      fontSize: '14px',
      color: '#4a4a6a',
    },
    startQuizBtn: {
      padding: '10px 24px',
      background: '#e65100',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    searchBar: {
      display: 'flex',
      gap: '12px',
      marginBottom: '20px',
      flexWrap: 'wrap',
    },
    searchInput: {
      flex: 1,
      padding: '12px 20px',
      border: '1px solid #e8ecf1',
      borderRadius: '50px',
      fontSize: '14px',
      outline: 'none',
      transition: 'border-color 0.3s ease',
      minWidth: '200px',
    },
    stats: {
      fontSize: '14px',
      color: '#4a4a6a',
      marginBottom: '16px',
    },
    questionsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    questionItem: {
      background: 'white',
      padding: '16px 20px',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      border: '1px solid #f0f0f0',
    },
    questionText: {
      fontSize: '15px',
      fontWeight: 500,
      color: '#1a1a2e',
      marginBottom: '8px',
    },
    options: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8px',
    },
    option: {
      fontSize: '14px',
      color: '#4a4a6a',
      padding: '4px 8px',
    },
    optionCorrect: {
      color: '#166534',
      fontWeight: 600,
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '20px',
      flexWrap: 'wrap',
    },
    pageBtn: {
      padding: '8px 16px',
      border: '1px solid #e8ecf1',
      borderRadius: '6px',
      background: 'white',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.3s ease',
    },
    pageBtnActive: {
      background: '#1a237e',
      color: 'white',
      borderColor: '#1a237e',
    },
    // Quiz styles
    quizContainer: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    quizHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      marginBottom: '12px',
    },
    quizBackLink: {
      color: '#1a237e',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 500,
      cursor: 'pointer',
    },
    headerCenter: {
      flex: 1,
      textAlign: 'center',
    },
    questionCount: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#1a1a2e',
    },
    timerContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    timerText: {
      fontSize: '18px',
      fontWeight: 600,
      color: '#1a237e',
    },
    timerWarning: {
      fontSize: '18px',
      fontWeight: 700,
      color: '#ef4444',
    },
    progressContainer: {
      width: '100%',
      height: '4px',
      background: '#e8ecf1',
      borderRadius: '2px',
      marginBottom: '20px',
      overflow: 'hidden',
    },
    progressBar: {
      height: '100%',
      background: 'linear-gradient(90deg, #1a237e, #2a3a8e)',
      borderRadius: '2px',
      transition: 'width 0.3s ease',
    },
    questionCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      marginBottom: '20px',
    },
    questionBadge: {
      display: 'inline-block',
      background: '#f0f3ff',
      color: '#1a237e',
      padding: '4px 14px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: 600,
      marginBottom: '16px',
    },
    qText: {
      fontSize: '20px',
      fontWeight: 500,
      color: '#1a1a2e',
      marginBottom: '24px',
      lineHeight: 1.6,
    },
    optionsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    optionButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '14px 18px',
      border: '2px solid #e8ecf1',
      borderRadius: '10px',
      background: 'white',
      cursor: 'pointer',
      fontSize: '15px',
      textAlign: 'left',
      width: '100%',
      transition: 'all 0.2s ease',
    },
    optionSelected: {
      borderColor: '#1a237e',
      background: '#f0f3ff',
    },
    optionLabel: {
      fontWeight: 600,
      color: '#1a237e',
      minWidth: '24px',
    },
    checkmark: {
      marginLeft: 'auto',
      color: '#1a237e',
      fontSize: '18px',
    },
    navigation: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '12px',
    },
    navCenter: {
      flex: 1,
      textAlign: 'center',
    },
    answeredCount: {
      fontSize: '13px',
      color: '#4a4a6a',
    },
    navButton: {
      padding: '10px 28px',
      background: '#2a3a8e',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    navDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    submitButton: {
      padding: '10px 32px',
      background: '#1a237e',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    resultCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      textAlign: 'center',
      boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
    },
    resultTitle: {
      fontSize: '28px',
      fontWeight: 700,
      color: '#1a1a2e',
      marginBottom: '24px',
    },
    scoreCircle: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #1a237e, #2a3a8e)',
      marginBottom: '24px',
    },
    scoreNumber: {
      fontSize: '36px',
      fontWeight: 700,
      color: 'white',
    },
    stats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      marginBottom: '24px',
    },
    statCorrect: {
      background: '#dcfce7',
      color: '#166534',
      padding: '4px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: 500,
    },
    statWrong: {
      background: '#fee2e2',
      color: '#991b1b',
      padding: '4px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: 500,
    },
    statUnanswered: {
      background: '#fef3c7',
      color: '#92400e',
      padding: '4px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: 500,
    },
    resultButton: {
      padding: '12px 32px',
      background: '#1a237e',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    explanationBox: {
      marginTop: '8px',
      padding: '8px 12px',
      background: '#f5f7fa',
      borderRadius: '6px',
      fontSize: '13px',
      color: '#4a4a6a',
      fontStyle: 'italic',
    },
  };

  // Loading state
  if (loading) {
    return React.createElement(
      "div",
      { style: styles.container },
      React.createElement("p", { style: { textAlign: 'center', padding: '40px' } }, "Loading...")
    );
  }

  if (!subject) {
    return React.createElement(
      "div",
      { style: styles.container },
      React.createElement(
        "button",
        { onClick: goBack, style: styles.backLink },
        "← Back to Subjects"
      ),
      React.createElement("p", { style: { textAlign: 'center', padding: '40px' } }, "Subject not found")
    );
  }

  // Result state
  if (isSubmitted && result) {
    return React.createElement(
      "div",
      { style: styles.container },
      React.createElement(
        "div",
        { style: styles.resultCard },
        React.createElement("h1", { style: styles.resultTitle }, "🎉 Quiz Complete!"),
        React.createElement(
          "div",
          { style: styles.scoreCircle },
          React.createElement("span", { style: styles.scoreNumber }, result.score + "%")
        ),
        React.createElement(
          "div",
          { style: styles.stats },
          React.createElement("span", { style: styles.statCorrect }, "✅ " + result.correct + " Correct"),
          React.createElement("span", { style: styles.statWrong }, "❌ " + result.wrong + " Wrong"),
          React.createElement("span", { style: styles.statUnanswered }, "⏭️ " + result.unanswered + " Unanswered")
        ),
        React.createElement(
          "button",
          {
            onClick: () => {
              setShowQuiz(false);
              setIsSubmitted(false);
              setResult(null);
              setAnswers({});
              setCurrentIndex(0);
            },
            style: styles.resultButton,
            onMouseEnter: (e) => { e.currentTarget.style.background = "#0d1b5e"; },
            onMouseLeave: (e) => { e.currentTarget.style.background = "#1a237e"; },
          },
          "📚 Back to MCQs"
        )
      )
    );
  }

  // Show Quiz
  if (showQuiz) {
    const currentQuestion = questions[currentIndex];
    const answeredCount = getAnsweredCount();
    const progress = ((currentIndex + 1) / questions.length) * 100;
    const isLastQuestion = currentIndex === questions.length - 1;
    const isFirstQuestion = currentIndex === 0;

    const optionKeys = ['a', 'b', 'c', 'd'];
    const optionButtons = optionKeys.map((optionKey) => {
      const optionText = currentQuestion['option_' + optionKey];
      if (!optionText) return null;

      const isSelected = answers[currentQuestion.id] === optionKey;

      return React.createElement(
        "button",
        {
          key: optionKey,
          onClick: () => handleAnswerSelect(currentQuestion.id, optionKey),
          style: Object.assign({}, styles.optionButton, isSelected ? styles.optionSelected : {}),
        },
        React.createElement("span", { style: styles.optionLabel }, optionKey.toUpperCase() + ")"),
        React.createElement("span", null, optionText),
        isSelected ? React.createElement("span", { style: styles.checkmark }, "✓") : null
      );
    });

    return React.createElement(
      "div",
      { style: styles.container },
      React.createElement(
        "div",
        { style: styles.quizContainer },
        React.createElement(
          "div",
          { style: styles.quizHeader },
          React.createElement(
            "span",
            { onClick: () => setShowQuiz(false), style: styles.quizBackLink },
            "← Back"
          ),
          React.createElement(
            "div",
            { style: styles.headerCenter },
            React.createElement("span", { style: styles.questionCount },
              "Question " + (currentIndex + 1) + " of " + questions.length
            )
          ),
          React.createElement(
            "div",
            { style: styles.timerContainer },
            React.createElement("span", null, "⏱️"),
            React.createElement(
              "span",
              { style: timeLeft < 60 ? styles.timerWarning : styles.timerText },
              formatTime(timeLeft)
            )
          )
        ),
        React.createElement(
          "div",
          { style: styles.progressContainer },
          React.createElement("div", { style: Object.assign({}, styles.progressBar, { width: progress + '%' }) })
        ),
        React.createElement(
          "div",
          { style: styles.questionCard },
          React.createElement("div", { style: styles.questionBadge }, "Q" + (currentIndex + 1)),
          React.createElement("h2", { style: styles.qText }, currentQuestion.question_text),
          React.createElement("div", { style: styles.optionsContainer }, optionButtons)
        ),
        React.createElement(
          "div",
          { style: styles.navigation },
          React.createElement(
            "button",
            {
              onClick: goToPrevious,
              disabled: isFirstQuestion,
              style: Object.assign({}, styles.navButton, isFirstQuestion ? styles.navDisabled : {}),
            },
            "← Previous"
          ),
          React.createElement(
            "div",
            { style: styles.navCenter },
            React.createElement("span", { style: styles.answeredCount },
              answeredCount + " of " + questions.length + " answered"
            )
          ),
          isLastQuestion ?
            React.createElement(
              "button",
              {
                onClick: () => {
                  if (window.confirm("You have answered " + answeredCount + " out of " + questions.length + ". Submit?")) {
                    submitQuiz(false);
                  }
                },
                style: styles.submitButton,
                onMouseEnter: (e) => { e.currentTarget.style.background = "#0d1b5e"; },
                onMouseLeave: (e) => { e.currentTarget.style.background = "#1a237e"; },
              },
              "Submit Quiz ✅"
            ) :
            React.createElement(
              "button",
              {
                onClick: goToNext,
                style: styles.navButton,
                onMouseEnter: (e) => { e.currentTarget.style.background = "#1a237e"; },
                onMouseLeave: (e) => { e.currentTarget.style.background = "#2a3a8e"; },
              },
              "Next →"
            )
        )
      )
    );
  }

  // Show MCQ List
  const totalQuestions = filteredQuestions.length;
  const totalPagesCount = Math.ceil(totalQuestions / questionsPerPage);

  return React.createElement(
    "div",
    { style: styles.container },
    // Header
    React.createElement(
      "div",
      { style: styles.header },
      React.createElement(
        "span",
        { onClick: goBack, style: styles.backLink },
        "← Back to Subjects"
      ),
      React.createElement(
        "div",
        { style: styles.subjectInfo },
        React.createElement("span", { style: styles.subjectIcon }, subject.icon),
        React.createElement(
          "div",
          null,
          React.createElement("div", { style: styles.subjectName }, subject.name),
          React.createElement("div", { style: styles.subjectCount }, subject.questions.length + " MCQs")
        )
      ),
      React.createElement(
        "button",
        {
          onClick: startQuiz,
          style: styles.startQuizBtn,
          onMouseEnter: (e) => { e.currentTarget.style.background = "#1a237e"; },
          onMouseLeave: (e) => { e.currentTarget.style.background = "#e65100"; },
        },
        "🎯 Start Quiz"
      )
    ),

    // Search
    React.createElement(
      "div",
      { style: styles.searchBar },
      React.createElement("input", {
        type: "text",
        placeholder: "🔍 Search questions...",
        value: searchTerm,
        onChange: (e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        },
        style: styles.searchInput,
        onFocus: (e) => {
          e.target.style.borderColor = "#1a237e";
        },
        onBlur: (e) => {
          e.target.style.borderColor = "#e8ecf1";
        },
      }),
      React.createElement(
        "span",
        { style: styles.stats },
        "Showing " + filteredQuestions.length + " of " + questions.length + " questions"
      )
    ),

    // Questions List
    paginatedQuestions.length === 0 ?
      React.createElement("p", { style: { textAlign: 'center', padding: '40px', color: '#4a4a6a' } }, "No questions found") :
      React.createElement(
        "div",
        { style: styles.questionsList },
        paginatedQuestions.map((q) =>
          React.createElement(
            "div",
            { key: q.id, style: styles.questionItem },
            React.createElement("div", { style: styles.questionText }, q.question_text),
            React.createElement(
              "div",
              { style: styles.options },
              React.createElement("span", { style: styles.option }, "A) " + q.option_a),
              React.createElement("span", { style: styles.option }, "B) " + q.option_b),
              React.createElement("span", { style: styles.option }, "C) " + q.option_c),
              React.createElement("span", { style: styles.option }, "D) " + q.option_d)
            ),
            React.createElement(
              "div",
              { style: styles.explanationBox },
              "✅ Correct Answer: " + q.correct_answer.toUpperCase() + " | 💡 " + q.explanation
            )
          )
        )
      ),

    // Pagination
    totalPagesCount > 1 ?
      React.createElement(
        "div",
        { style: styles.pagination },
        Array.from({ length: totalPagesCount }, (_, i) => i + 1).map((page) =>
          React.createElement(
            "button",
            {
              key: page,
              onClick: () => setCurrentPage(page),
              style: Object.assign({}, styles.pageBtn, currentPage === page ? styles.pageBtnActive : {}),
            },
            page
          )
        )
      ) :
      null
  );
}

// ============================================
// MAIN PAGE COMPONENT with Suspense
// ============================================
export default function QuizPage() {
  return React.createElement(
    React.Suspense,
    { fallback: React.createElement("div", { style: { padding: '40px', textAlign: 'center' } }, "Loading quiz...") },
    React.createElement(QuizContent, null)
  );
}