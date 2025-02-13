// ============================================
// 💝 खास फक्त माझ्या प्राज्ञासाठी 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "माझी सोजा बिल्ली 🐱💕",  // "My Soja Cat"

    // The title that appears in the browser tab
    pageTitle: "प्राज्ञा, तू माझी व्हॅलेंटाईन होशील का? 💕",  // "Pradnya, will you be my Valentine?"

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💞'],  // Heart emojis
        chocolates: ['🍫', '🧁'],              // Chocolate-themed emojis
        oranges: ['🍊', '🍹'],                 // Orange-themed emojis
        marathiLove: ['🌺', '🌸', '💃']        // Traditional beauty & love emojis
    },

    // Questions and answers
    questions: {
        first: {
            text: "तुला माझ्यापेक्षा जास्त तुझी प्लश टॉयज, Ms. Taylor आणि पुणे आवडतात का? 🧸🎶🏙️",
            yesBtn: "काय वेड्यासारखं विचारतोयस? ❤️",
            noBtn: "हो, पण माझं प्रेम जास्त आहे! 💖",
            secretAnswer: "माझ्यासाठी फक्त तूच आहेस! 😘"
        },
        second: {
            text: "तुला माझ्यावर किती प्रेम आहे? 😍",  // "How much do you love me?"
            startText: "इतकं??? 😲",
            nextBtn: "पुढे चला 💖"  // "Next"
        },
        third: {
            text: "माझी सोजा बिल्ली, तू माझी व्हॅलेंटाईन होशील का? 🐱💕",
            yesBtn: "हो, कायम आणि सदैव! 💝",  // "Yes, forever and always!"
            noBtn: "मी विचार करते... अरे मस्करी! हो! 💖"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "अय्यो, इतकं प्रेम? 😍💞",  // "OMG, this much love?"
        high: "चंद्रावर आणि परत! 🚀💖",  // "To the moon and back!"
        normal: "नेहमीसाठी माझं प्रेम! 🥰"  // "Forever my love!"
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "मी जगातला सर्वात नशीबवान मुलगा आहे! 💖🎉",  // "I am the luckiest guy in the world!"
        message: "आता तुझ्यासाठी एक मोठ्ठं आलिंगन आणि अनलिमिटेड किसेस! 😘💝",
        emojis: "🤗💋💖🎁💕🍫🍊"
    },

    // Color scheme for the website
    colors: {
        backgroundStart: "#ffb6c1",      // Soft pink gradient start
        backgroundEnd: "#ffdab9",        // Peach gradient end
        buttonBackground: "#ff69b4",     // Hot pink for buttons
        buttonHover: "#ff85c0",          // Lighter pink for hover effect
        textColor: "#ff4757"             // Deep pink for contrast
    },

    // Animation settings
    animations: {
        floatDuration: "12s",
        floatDistance: "60px",
        bounceSpeed: "0.4s",
        heartExplosionSize: 1.7
    },

    // Background Music (Optional)
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dhqekx9fm/video/upload/v1739478203/Vaat_Majhi_Baghtoy_Rickshawala_-_Reshma_Sonavane_Marathi_Item_Song_ph4wvs.mp3", // Add a Marathi song or Taylor Swift song she loves!
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
