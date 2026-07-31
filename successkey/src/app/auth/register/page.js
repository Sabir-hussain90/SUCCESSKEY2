"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [language, setLanguage] = useState("en");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    router.push('/');
  };

  const getLangButtonStyle = (active) => ({
    padding: "6px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 600,
    background: active ? "#1a237e" : "transparent",
    color: active ? "white" : "#4a4a6a",
    transition: "all 0.3s ease",
  });

  // Language content
  const content = {
    en: {
      home: "Home",
      about: "About",
      subjects: "Subjects",
      quiz: "🎯 Quiz",
      contact: "Contact",
      login: "Login",
      register: "Register",
      logout: "Logout",
      title: "📝 Create Account",
      subtitle: "Join SuccessKey and start learning today!",
      fullName: "Full Name",
      fullNamePlaceholder: "Enter your full name",
      fullNameRequired: "Full name is required",
      username: "Username",
      usernamePlaceholder: "Choose a unique username",
      usernameRequired: "Username is required",
      usernameMin: "Username must be at least 3 characters",
      usernameHelper: "Minimum 3 characters",
      email: "Email Address",
      emailPlaceholder: "Enter your email address",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address",
      password: "Password",
      passwordPlaceholder: "Create a strong password",
      passwordRequired: "Password is required",
      passwordMin: "Password must be at least 6 characters",
      passwordHelper: "Minimum 6 characters",
      confirmPassword: "Confirm Password",
      confirmPasswordPlaceholder: "Confirm your password",
      confirmPasswordMismatch: "Passwords do not match",
      phone: "Phone Number",
      phonePlaceholder: "Phone number",
      city: "City",
      cityPlaceholder: "Your city",
      createAccount: "Create Account",
      creatingAccount: "Creating Account...",
      successMessage: "✅ Registration successful! Redirecting to login...",
      terms: "By creating an account, you agree to our",
      termsOfService: "Terms of Service",
      and: "and",
      privacyPolicy: "Privacy Policy",
      alreadyHaveAccount: "Already have an account?",
      loginLink: "Login",
      backToHome: "← Back to Home",
      footerText: "Your ultimate platform for competitive exam preparation. Practice 10,000+ questions across 15+ subjects.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      followUs: "Follow Us",
      copyright: "© 2026 SuccessKey. All rights reserved.",
      madeWith: "Made with ❤️ by Sabir Hussain (Full Stack Developer)",
      address: "Quaidabad, Khushab",
      phone: "📞 0326-0431665",
      email: "📧 sabir2014852@gmail.com",
    },
    ur: {
      home: "ہوم",
      about: "ہمارے بارے میں",
      subjects: "مضامین",
      quiz: "🎯 کوئز",
      contact: "رابطہ",
      login: "لاگ ان",
      register: "رجسٹر",
      logout: "لاگ آؤٹ",
      title: "📝 نیا اکاؤنٹ بنائیں",
      subtitle: "SuccessKey میں شامل ہوں اور آج ہی سیکھنا شروع کریں!",
      fullName: "پورا نام",
      fullNamePlaceholder: "اپنا پورا نام درج کریں",
      fullNameRequired: "پورا نام درکار ہے",
      username: "صارف نام",
      usernamePlaceholder: "ایک منفرد صارف نام منتخب کریں",
      usernameRequired: "صارف نام درکار ہے",
      usernameMin: "صارف نام کم از کم 3 حروف کا ہونا چاہیے",
      usernameHelper: "کم از کم 3 حروف",
      email: "ای میل پتہ",
      emailPlaceholder: "اپنا ای میل پتہ درج کریں",
      emailRequired: "ای میل درکار ہے",
      emailInvalid: "براہ کرم درست ای میل پتہ درج کریں",
      password: "پاس ورڈ",
      passwordPlaceholder: "مضبوط پاس ورڈ بنائیں",
      passwordRequired: "پاس ورڈ درکار ہے",
      passwordMin: "پاس ورڈ کم از کم 6 حروف کا ہونا چاہیے",
      passwordHelper: "کم از کم 6 حروف",
      confirmPassword: "پاس ورڈ کی تصدیق کریں",
      confirmPasswordPlaceholder: "اپنا پاس ورڈ دوبارہ درج کریں",
      confirmPasswordMismatch: "پاس ورڈز مماثل نہیں ہیں",
      phone: "فون نمبر",
      phonePlaceholder: "فون نمبر",
      city: "شہر",
      cityPlaceholder: "آپ کا شہر",
      createAccount: "اکاؤنٹ بنائیں",
      creatingAccount: "اکاؤنٹ بن رہا ہے...",
      successMessage: "✅ رجسٹریشن کامیاب! لاگ ان پر ری ڈائریکٹ ہو رہا ہے...",
      terms: "اکاؤنٹ بنا کر، آپ ہماری",
      termsOfService: "سروس کی شرائط",
      and: "اور",
      privacyPolicy: "پرائیویسی پالیسی",
      alreadyHaveAccount: "پہلے سے اکاؤنٹ ہے؟",
      loginLink: "لاگ ان کریں",
      backToHome: "← ہوم پر واپس جائیں",
      footerText: "مقابلے کے امتحانات کی تیاری کے لیے آپ کا بہترین پلیٹ فارم۔ 15+ مضامین میں 10,000+ سوالات کی مشق کریں۔",
      quickLinks: "فوری لنکس",
      contactUs: "رابطہ کریں",
      followUs: "ہمیں فالو کریں",
      copyright: "2026 © SuccessKey. جملہ حقوق محفوظ ہیں۔",
      madeWith: "محبت کے ساتھ بنایا ❤️ بذریعہ صابر حسین (فل اسٹیک ڈویلپر)",
      address: "قائد آباد، خوشاب",
      phone: "📞 0326-0431665",
      email: "📧 sabir2014852@gmail.com",
    }
  };

  const t = content[language];
  const isUrdu = language === "ur";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.fullNameRequired;
    }

    if (!formData.username.trim()) {
      newErrors.username = t.usernameRequired;
    } else if (formData.username.length < 3) {
      newErrors.username = t.usernameMin;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.emailInvalid;
    }

    if (!formData.password) {
      newErrors.password = t.passwordRequired;
    } else if (formData.password.length < 6) {
      newErrors.password = t.passwordMin;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t.confirmPasswordMismatch;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage(t.successMessage);
      
      setFormData({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        city: "",
      });

      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    }, 1500);
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background: "#f5f7fa",
      fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "'Inter', sans-serif",
    },
    // Navbar Styles
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 40px",
      backgroundColor: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(232, 236, 241, 0.5)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
      flexWrap: "wrap",
      gap: "12px",
    },
    logo: {
      fontSize: "26px",
      fontWeight: 800,
      color: "#1a237e",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    logoImage: {
      height: "45px",
      width: "auto",
      objectFit: "contain",
    },
    logoText: {
      fontSize: "26px",
      fontWeight: 800,
      background: "linear-gradient(135deg, #1a237e, #e65100)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    langToggle: {
      display: "flex",
      gap: "4px",
      background: "#f0f3ff",
      padding: "4px",
      borderRadius: "10px",
    },
    navLink: {
      color: "#4a4a6a",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 500,
      transition: "all 0.3s ease",
      padding: "6px 4px",
      borderBottom: "2px solid transparent",
    },
    navLinkActive: {
      color: "#e65100",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 600,
      borderBottom: "2px solid #e65100",
      padding: "6px 4px",
    },
    quizNavLink: {
      color: "#e65100",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 600,
      padding: "8px 20px",
      background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
      borderRadius: "25px",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 10px rgba(255, 111, 0, 0.15)",
    },
    authButtons: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    loginBtn: {
      padding: "8px 20px",
      color: "#1a237e",
      textDecoration: "none",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: 500,
      border: "1px solid #e8ecf1",
      transition: "all 0.3s ease",
    },
    registerBtn: {
      padding: "8px 20px",
      background: "linear-gradient(135deg, #e65100, #ff6f00)",
      color: "white",
      textDecoration: "none",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: 500,
      transition: "all 0.3s ease",
      boxShadow: "0 2px 10px rgba(230, 81, 0, 0.3)",
    },
    userGreeting: {
      color: "#4a4a6a",
      fontSize: "14px",
      fontWeight: 500,
    },
    logoutBtn: {
      padding: "6px 16px",
      background: "#ef4444",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "13px",
      transition: "background 0.3s ease",
    },
    // Main Content
    mainContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      minHeight: "calc(100vh - 200px)",
    },
    card: {
      maxWidth: "480px",
      width: "100%",
      background: "white",
      borderRadius: "16px",
      padding: "40px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    },
    header: {
      textAlign: "center",
      marginBottom: "24px",
    },
    title: {
      fontSize: "28px",
      fontWeight: 700,
      color: "#1a1a2e",
      marginBottom: "4px",
    },
    subtitle: {
      color: "#4a4a6a",
      fontSize: "14px",
    },
    successMessage: {
      background: "#dcfce7",
      color: "#166534",
      padding: "12px",
      borderRadius: "8px",
      textAlign: "center",
      marginBottom: "16px",
      fontSize: "14px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    label: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#1a1a2e",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    labelRequired: {
      color: "#ef4444",
      fontSize: "12px",
    },
    inputWrapper: {
      position: "relative",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      border: "1px solid #e8ecf1",
      borderRadius: "8px",
      fontSize: "14px",
      transition: "border-color 0.3s ease",
      outline: "none",
      fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "'Inter', sans-serif",
      background: "white",
    },
    inputError: {
      borderColor: "#ef4444",
    },
    inputSuccess: {
      borderColor: "#22c55e",
    },
    passwordToggle: {
      position: "absolute",
      right: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "18px",
      color: "#4a4a6a",
      padding: "4px",
    },
    errorText: {
      color: "#ef4444",
      fontSize: "12px",
      marginTop: "4px",
    },
    helperText: {
      color: "#4a4a6a",
      fontSize: "12px",
      marginTop: "4px",
    },
    button: {
      padding: "14px",
      background: "#e65100",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "8px",
    },
    buttonDisabled: {
      opacity: 0.7,
      cursor: "not-allowed",
    },
    footerText: {
      textAlign: "center",
      marginTop: "16px",
      fontSize: "14px",
      color: "#4a4a6a",
    },
    footerLink: {
      color: "#1a237e",
      textDecoration: "none",
      fontWeight: 500,
      transition: "color 0.3s ease",
      background: "transparent",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
    },
    terms: {
      fontSize: "12px",
      color: "#4a4a6a",
      textAlign: "center",
      marginTop: "4px",
    },
    termsLink: {
      color: "#1a237e",
      textDecoration: "none",
    },
    backToHomeContainer: {
      textAlign: "center",
      marginTop: "24px",
    },
    backToHomeLink: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 32px",
      background: "linear-gradient(135deg, #1a237e, #e65100)",
      color: "white",
      textDecoration: "none",
      borderRadius: "50px",
      fontSize: "16px",
      fontWeight: 600,
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(26, 35, 126, 0.3)",
    },
    // Footer Styles
    footer: {
      backgroundColor: "#0d1b2a",
      color: "rgba(255,255,255,0.8)",
      padding: "60px 40px 30px",
      marginTop: "40px",
    },
    footerContent: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "40px",
    },
    footerSection: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    footerTitle: {
      fontSize: "18px",
      fontWeight: 600,
      color: "white",
      marginBottom: "4px",
    },
    footerText: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.6)",
      lineHeight: 1.7,
    },
    footerNavLink: {
      color: "rgba(255,255,255,0.6)",
      textDecoration: "none",
      fontSize: "14px",
      transition: "color 0.3s ease",
    },
    footerBottom: {
      borderTop: "1px solid rgba(255,255,255,0.08)",
      paddingTop: "20px",
      marginTop: "40px",
      textAlign: "center",
      fontSize: "13px",
      color: "rgba(255,255,255,0.4)",
    },
    contactRow: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "13px",
      color: "rgba(255,255,255,0.7)",
    },
    socialLinksFooter: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
    },
    socialLinkFooter: {
      color: "rgba(255,255,255,0.6)",
      textDecoration: "none",
      fontSize: "14px",
      transition: "color 0.3s ease",
      padding: "4px 0",
    },
  };

  return React.createElement(
    "div",
    { style: styles.container, dir: isUrdu ? "rtl" : "ltr" },
    
    // ============================================
    // NAVBAR
    // ============================================
    React.createElement(
      "nav",
      { style: styles.navbar },
      React.createElement(
        Link,
        { href: "/", style: styles.logo },
        React.createElement("img", {
          src: "/logoss.jfif",
          alt: "SuccessKey Logo",
          style: styles.logoImage,
          onError: (e) => {
            e.currentTarget.style.display = "none";
          }
        }),
        React.createElement("span", { style: styles.logoText }, "SuccessKey")
      ),
      React.createElement(
        "div",
        { style: styles.navLinks },
        React.createElement(
          "div",
          { style: styles.langToggle },
          React.createElement(
            "button",
            {
              onClick: () => setLanguage("en"),
              style: getLangButtonStyle(language === "en"),
            },
            "EN"
          ),
          React.createElement(
            "button",
            {
              onClick: () => setLanguage("ur"),
              style: getLangButtonStyle(language === "ur"),
            },
            "اردو"
          )
        ),
        React.createElement(Link, { href: "/", style: styles.navLink }, t.home),
        React.createElement(Link, { href: "/about", style: styles.navLink }, t.about),
        React.createElement(Link, { href: "/subjects", style: styles.navLink }, t.subjects),
        React.createElement(
          Link,
          {
            href: "/quiz",
            style: styles.quizNavLink,
            onMouseEnter: (e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #ffe0b2, #ffcc80)";
              e.currentTarget.style.transform = "scale(1.05)";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #fff3e0, #ffe0b2)";
              e.currentTarget.style.transform = "scale(1)";
            },
          },
          t.quiz
        ),
        React.createElement(Link, { href: "/contact", style: styles.navLink }, t.contact),
        React.createElement(
          "div",
          { style: styles.authButtons },
          isLoggedIn ?
            React.createElement(
              React.Fragment,
              null,
              React.createElement("span", { style: styles.userGreeting }, "👋 " + (user?.full_name || user?.username || "User")),
              React.createElement(
                "button",
                {
                  onClick: handleLogout,
                  style: styles.logoutBtn,
                  onMouseEnter: (e) => {
                    e.currentTarget.style.background = "#dc2626";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.background = "#ef4444";
                  },
                },
                t.logout
              )
            ) :
            React.createElement(
              React.Fragment,
              null,
              React.createElement(Link, { href: "/auth/login", style: styles.loginBtn }, t.login),
              React.createElement(Link, { href: "/auth/register", style: styles.registerBtn }, t.register)
            )
        )
      )
    ),

    // ============================================
    // MAIN CONTENT
    // ============================================
    React.createElement(
      "div",
      { style: styles.mainContent },
      React.createElement(
        "div",
        { style: styles.card },
        // Header
        React.createElement(
          "div",
          { style: styles.header },
          React.createElement("h1", { style: styles.title }, t.title),
          React.createElement("p", { style: styles.subtitle }, t.subtitle)
        ),

        // Success Message
        successMessage &&
          React.createElement("div", { style: styles.successMessage }, successMessage),

        // Form
        React.createElement(
          "form",
          { onSubmit: handleSubmit, style: styles.form },
          
          // Full Name
          React.createElement(
            "div",
            { style: styles.formGroup },
            React.createElement(
              "label",
              { style: styles.label },
              t.fullName,
              React.createElement("span", { style: styles.labelRequired }, "*")
            ),
            React.createElement("input", {
              type: "text",
              name: "fullName",
              placeholder: t.fullNamePlaceholder,
              value: formData.fullName,
              onChange: handleChange,
              style: Object.assign(
                {},
                styles.input,
                errors.fullName ? styles.inputError : {},
                formData.fullName && !errors.fullName ? styles.inputSuccess : {}
              ),
              onFocus: (e) => {
                e.target.style.borderColor = "#1a237e";
              },
              onBlur: (e) => {
                if (!errors.fullName) {
                  e.target.style.borderColor = "#e8ecf1";
                }
              },
            }),
            errors.fullName &&
              React.createElement("div", { style: styles.errorText }, errors.fullName)
          ),

          // Username
          React.createElement(
            "div",
            { style: styles.formGroup },
            React.createElement(
              "label",
              { style: styles.label },
              t.username,
              React.createElement("span", { style: styles.labelRequired }, "*")
            ),
            React.createElement("input", {
              type: "text",
              name: "username",
              placeholder: t.usernamePlaceholder,
              value: formData.username,
              onChange: handleChange,
              style: Object.assign(
                {},
                styles.input,
                errors.username ? styles.inputError : {},
                formData.username && !errors.username ? styles.inputSuccess : {}
              ),
              onFocus: (e) => {
                e.target.style.borderColor = "#1a237e";
              },
              onBlur: (e) => {
                if (!errors.username) {
                  e.target.style.borderColor = "#e8ecf1";
                }
              },
            }),
            errors.username ?
              React.createElement("div", { style: styles.errorText }, errors.username) :
              React.createElement("div", { style: styles.helperText }, t.usernameHelper)
          ),

          // Email
          React.createElement(
            "div",
            { style: styles.formGroup },
            React.createElement(
              "label",
              { style: styles.label },
              t.email,
              React.createElement("span", { style: styles.labelRequired }, "*")
            ),
            React.createElement("input", {
              type: "email",
              name: "email",
              placeholder: t.emailPlaceholder,
              value: formData.email,
              onChange: handleChange,
              style: Object.assign(
                {},
                styles.input,
                errors.email ? styles.inputError : {},
                formData.email && !errors.email ? styles.inputSuccess : {}
              ),
              onFocus: (e) => {
                e.target.style.borderColor = "#1a237e";
              },
              onBlur: (e) => {
                if (!errors.email) {
                  e.target.style.borderColor = "#e8ecf1";
                }
              },
            }),
            errors.email &&
              React.createElement("div", { style: styles.errorText }, errors.email)
          ),

          // Password
          React.createElement(
            "div",
            { style: styles.formGroup },
            React.createElement(
              "label",
              { style: styles.label },
              t.password,
              React.createElement("span", { style: styles.labelRequired }, "*")
            ),
            React.createElement(
              "div",
              { style: styles.inputWrapper },
              React.createElement("input", {
                type: showPassword ? "text" : "password",
                name: "password",
                placeholder: t.passwordPlaceholder,
                value: formData.password,
                onChange: handleChange,
                style: Object.assign(
                  {},
                  styles.input,
                  errors.password ? styles.inputError : {},
                  formData.password && !errors.password ? styles.inputSuccess : {}
                ),
                onFocus: (e) => {
                  e.target.style.borderColor = "#1a237e";
                },
                onBlur: (e) => {
                  if (!errors.password) {
                    e.target.style.borderColor = "#e8ecf1";
                  }
                },
              }),
              React.createElement(
                "button",
                {
                  type: "button",
                  onClick: () => setShowPassword(!showPassword),
                  style: styles.passwordToggle,
                },
                showPassword ? "🙈" : "👁️"
              )
            ),
            errors.password ?
              React.createElement("div", { style: styles.errorText }, errors.password) :
              React.createElement("div", { style: styles.helperText }, t.passwordHelper)
          ),

          // Confirm Password
          React.createElement(
            "div",
            { style: styles.formGroup },
            React.createElement(
              "label",
              { style: styles.label },
              t.confirmPassword,
              React.createElement("span", { style: styles.labelRequired }, "*")
            ),
            React.createElement(
              "div",
              { style: styles.inputWrapper },
              React.createElement("input", {
                type: showConfirmPassword ? "text" : "password",
                name: "confirmPassword",
                placeholder: t.confirmPasswordPlaceholder,
                value: formData.confirmPassword,
                onChange: handleChange,
                style: Object.assign(
                  {},
                  styles.input,
                  errors.confirmPassword ? styles.inputError : {},
                  formData.confirmPassword && !errors.confirmPassword ? styles.inputSuccess : {}
                ),
                onFocus: (e) => {
                  e.target.style.borderColor = "#1a237e";
                },
                onBlur: (e) => {
                  if (!errors.confirmPassword) {
                    e.target.style.borderColor = "#e8ecf1";
                  }
                },
              }),
              React.createElement(
                "button",
                {
                  type: "button",
                  onClick: () => setShowConfirmPassword(!showConfirmPassword),
                  style: styles.passwordToggle,
                },
                showConfirmPassword ? "🙈" : "👁️"
              )
            ),
            errors.confirmPassword &&
              React.createElement("div", { style: styles.errorText }, errors.confirmPassword)
          ),

          // Phone and City
          React.createElement(
            "div",
            { style: styles.row },
            React.createElement(
              "div",
              { style: styles.formGroup },
              React.createElement("label", { style: styles.label }, t.phone),
              React.createElement("input", {
                type: "tel",
                name: "phone",
                placeholder: t.phonePlaceholder,
                value: formData.phone,
                onChange: handleChange,
                style: styles.input,
                onFocus: (e) => {
                  e.target.style.borderColor = "#1a237e";
                },
                onBlur: (e) => {
                  e.target.style.borderColor = "#e8ecf1";
                },
              })
            ),
            React.createElement(
              "div",
              { style: styles.formGroup },
              React.createElement("label", { style: styles.label }, t.city),
              React.createElement("input", {
                type: "text",
                name: "city",
                placeholder: t.cityPlaceholder,
                value: formData.city,
                onChange: handleChange,
                style: styles.input,
                onFocus: (e) => {
                  e.target.style.borderColor = "#1a237e";
                },
                onBlur: (e) => {
                  e.target.style.borderColor = "#e8ecf1";
                },
              })
            )
          ),

          // Submit Button
          React.createElement(
            "button",
            {
              type: "submit",
              disabled: isLoading,
              style: Object.assign(
                {},
                styles.button,
                isLoading ? styles.buttonDisabled : {}
              ),
              onMouseEnter: (e) => {
                if (!isLoading) {
                  e.currentTarget.style.background = "#1a237e";
                }
              },
              onMouseLeave: (e) => {
                if (!isLoading) {
                  e.currentTarget.style.background = "#e65100";
                }
              },
            },
            isLoading ? t.creatingAccount : t.createAccount
          ),

          // Terms
          React.createElement(
            "p",
            { style: styles.terms },
            t.terms + " ",
            React.createElement("a", { href: "#", style: styles.termsLink }, t.termsOfService),
            " " + t.and + " ",
            React.createElement("a", { href: "#", style: styles.termsLink }, t.privacyPolicy)
          )
        ),

        // Footer
        React.createElement(
          "p",
          { style: styles.footerText },
          t.alreadyHaveAccount + " ",
          React.createElement(
            Link,
            {
              href: "/auth/login",
              style: styles.footerLink,
              onMouseEnter: (e) => {
                e.currentTarget.style.color = "#0d1b5e";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.color = "#1a237e";
              },
            },
            t.loginLink
          )
        ),

        // Back to Home Button
        React.createElement(
          "div",
          { style: styles.backToHomeContainer },
          React.createElement(
            Link,
            {
              href: "/",
              style: styles.backToHomeLink,
              onMouseEnter: (e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(26, 35, 126, 0.4)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(26, 35, 126, 0.3)";
              },
            },
            t.backToHome
          )
        )
      )
    ),

    // ============================================
    // FOOTER
    // ============================================
    React.createElement(
      "footer",
      { style: styles.footer },
      React.createElement(
        "div",
        { style: styles.footerContent },
        // Brand
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, "🔑 SuccessKey"),
          React.createElement("p", { style: styles.footerText }, t.footerText)
        ),
        // Quick Links
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, t.quickLinks),
          React.createElement(Link, { href: "/", style: styles.footerNavLink }, t.home),
          React.createElement(Link, { href: "/about", style: styles.footerNavLink }, t.about),
          React.createElement(Link, { href: "/subjects", style: styles.footerNavLink }, t.subjects),
          React.createElement(Link, { href: "/contact", style: styles.footerNavLink }, t.contact)
        ),
        // Contact Info
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, t.contactUs),
          React.createElement(
            "div",
            { style: styles.contactRow },
            React.createElement("div", { style: styles.contactItem }, t.phone),
            React.createElement("div", { style: styles.contactItem }, t.email),
            React.createElement("div", { style: styles.contactItem }, "📍 " + t.address)
          )
        ),
        // Social
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, t.followUs),
          React.createElement(
            "div",
            { style: styles.socialLinksFooter },
            React.createElement("a", { href: "#", style: styles.socialLinkFooter }, "🐦 Twitter"),
            React.createElement("a", { href: "#", style: styles.socialLinkFooter }, "📘 Facebook"),
            React.createElement("a", { href: "#", style: styles.socialLinkFooter }, "📸 Instagram"),
            React.createElement("a", { href: "#", style: styles.socialLinkFooter }, "💼 LinkedIn")
          )
        )
      ),
      React.createElement(
        "div",
        { style: styles.footerBottom },
        t.copyright + " | " + t.madeWith + " | " + t.address + " | " + t.phone + " | " + t.email
      )
    )
  );
}