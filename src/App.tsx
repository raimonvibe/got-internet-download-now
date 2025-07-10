import { useState } from 'react'
import { 
  Home, 
  BookOpen, 
  Target, 
  Wrench, 
  Map, 
  Zap, 
  Star, 
  Link,
  Moon,
  Sun,
  Download,
  Copy,
  Youtube,
  Code,
  Users,
  Trophy,
  ExternalLink,
  GitBranch,
  Linkedin
} from 'lucide-react'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(true)

  const tabs = [
    { id: 'home', label: 'Welcome', icon: Home },
    { id: 'getting-started', label: 'Getting Started', icon: BookOpen },
    { id: 'priority-downloads', label: 'Priority Downloads', icon: Target },
    { id: 'tools-setup', label: 'Tools & Setup', icon: Wrench },
    { id: 'learning-path', label: 'Learning Path', icon: Map },
    { id: 'advanced-tips', label: 'Advanced Tips', icon: Zap },
    { id: 'success-stories', label: 'Success Stories', icon: Star },
    { id: 'resources', label: 'Resources', icon: Link }
  ]

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard!', {
      duration: 2000,
    })
  }

  const themeClasses = isDarkMode 
    ? 'bg-black text-white' 
    : 'bg-amber-50 text-amber-900'

  const cardClasses = isDarkMode
    ? 'bg-gray-900 border-gray-700'
    : 'bg-white border-amber-200'

  const accentClasses = isDarkMode
    ? 'text-blue-400'
    : 'text-amber-700'

  const vibrantAccentClasses = isDarkMode
    ? 'text-cyan-400'
    : 'text-orange-600'

  const gradientTextClasses = 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'
  
  const colorfulCardClasses = isDarkMode
    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/30'
    : 'bg-gradient-to-br from-white to-amber-50 border-orange-300/50'

  return (
    <div className={`min-h-screen ${themeClasses} transition-colors duration-300`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${isDarkMode ? 'bg-black/90' : 'bg-amber-50/90'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-800' : 'border-amber-200'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Code className={`w-8 h-8 ${accentClasses}`} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Code Quest Academy</h1>
            </div>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-amber-100'} transition-colors`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className={`sticky top-16 z-40 ${isDarkMode ? 'bg-gradient-to-r from-gray-900/90 to-gray-800/90' : 'bg-gradient-to-r from-white/90 to-amber-50/90'} backdrop-blur-sm border-b ${isDarkMode ? 'border-purple-500/30' : 'border-orange-300/50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 whitespace-nowrap border-b-2 transition-all duration-300 ${
                    activeTab === tab.id
                      ? `${isDarkMode ? 'border-cyan-400 text-cyan-400 bg-cyan-400/10' : 'border-orange-600 text-orange-700 bg-orange-100/50'} font-medium shadow-lg`
                      : `border-transparent ${isDarkMode ? 'text-gray-400 hover:text-cyan-300 hover:bg-gray-800/50' : 'text-amber-600 hover:text-orange-700 hover:bg-orange-50'}`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'home' && <HomeTab isDarkMode={isDarkMode} cardClasses={cardClasses} accentClasses={accentClasses} vibrantAccentClasses={vibrantAccentClasses} gradientTextClasses={gradientTextClasses} colorfulCardClasses={colorfulCardClasses} />}
        {activeTab === 'getting-started' && <GettingStartedTab isDarkMode={isDarkMode} cardClasses={cardClasses} vibrantAccentClasses={vibrantAccentClasses} gradientTextClasses={gradientTextClasses} />}
        {activeTab === 'priority-downloads' && <PriorityDownloadsTab isDarkMode={isDarkMode} cardClasses={cardClasses} vibrantAccentClasses={vibrantAccentClasses} gradientTextClasses={gradientTextClasses} copyToClipboard={copyToClipboard} />}
        {activeTab === 'tools-setup' && <ToolsSetupTab isDarkMode={isDarkMode} cardClasses={cardClasses} vibrantAccentClasses={vibrantAccentClasses} gradientTextClasses={gradientTextClasses} copyToClipboard={copyToClipboard} />}
        {activeTab === 'learning-path' && <LearningPathTab isDarkMode={isDarkMode} copyToClipboard={copyToClipboard} />}
        {activeTab === 'advanced-tips' && <AdvancedTipsTab isDarkMode={isDarkMode} cardClasses={cardClasses} vibrantAccentClasses={vibrantAccentClasses} gradientTextClasses={gradientTextClasses} copyToClipboard={copyToClipboard} />}
        {activeTab === 'success-stories' && <SuccessStoriesTab isDarkMode={isDarkMode} cardClasses={cardClasses} vibrantAccentClasses={vibrantAccentClasses} gradientTextClasses={gradientTextClasses} />}
        {activeTab === 'resources' && <ResourcesTab isDarkMode={isDarkMode} cardClasses={cardClasses} gradientTextClasses={gradientTextClasses} copyToClipboard={copyToClipboard} />}
      </main>
      <Toaster />
    </div>
  )
}

function HomeTab({ isDarkMode, cardClasses, accentClasses, vibrantAccentClasses, gradientTextClasses, colorfulCardClasses }: { isDarkMode: boolean, cardClasses: string, accentClasses: string, vibrantAccentClasses: string, gradientTextClasses: string, colorfulCardClasses: string }) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className={`rounded-xl p-8 ${cardClasses} border`}>
        <div className="text-center space-y-4">
          <h2 className={`text-4xl font-bold ${gradientTextClasses}`}>Hey Young Nigerian Tech Professional!</h2>
          <p className={`text-xl ${vibrantAccentClasses} font-semibold`}>Got Internet? Download These Videos Fast Before You Get Disconnected!</p>
          <p className="text-lg opacity-80">The Ultimate Survival Guide for Aspiring Nigerian Developers Who Refuse to Let Bad Infrastructure Kill Their Dreams</p>
        </div>
      </div>

      {/* Data Cost Warning */}
      <div className={`rounded-xl p-6 ${colorfulCardClasses} border-2 shadow-lg`}>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gradient-to-r from-orange-900/30 to-red-900/30 border-orange-400' : 'bg-gradient-to-r from-orange-100 to-yellow-100 border-orange-400'} border-2`}>
          <h3 className="font-semibold text-orange-400 mb-2 text-lg">💰 Smart Data Usage Strategy</h3>
          <p className="text-sm">
            We know data is expensive in Nigeria. This guide focuses on <strong>selective downloading</strong> - 
            choose exactly what you need, when you need it. No automatic bulk downloads that waste your precious data.
          </p>
        </div>
      </div>

      {/* Ada's Story Preview */}
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-full ${isDarkMode ? 'bg-blue-900' : 'bg-amber-100'}`}>
            <Users className={`w-6 h-6 ${accentClasses}`} />
          </div>
          <div className="flex-1">
            <h3 className={`text-2xl font-bold mb-3 ${gradientTextClasses}`}>Meet Ada Okafor</h3>
            <p className="text-lg mb-4">A 23-year-old computer science graduate from University of Lagos who went from frustrated student to senior developer at Paystack in 18 months.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-amber-50'}`}>
                <h4 className="font-semibold mb-2">Ada's Smart Strategy:</h4>
                <p className="text-sm">"I spent only ₦5,000 on data over 6 months by downloading one course at a time, studying it completely offline, then downloading the next one when I was ready."</p>
              </div>
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-amber-50'}`}>
                <h4 className="font-semibold mb-2">The Results:</h4>
                <ul className="text-sm space-y-1">
                  <li>• 12 carefully selected courses (not 200+)</li>
                  <li>• 500+ hours of focused offline study</li>
                  <li>• 15 projects built using downloaded tutorials</li>
                  <li>• ₦2.5M/year job at a fintech company</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`rounded-xl p-6 ${colorfulCardClasses} border-2 text-center shadow-lg hover:shadow-xl transition-all duration-300`}>
          <Download className={`w-8 h-8 ${isDarkMode ? 'text-cyan-400' : 'text-orange-600'} mx-auto mb-3`} />
          <h3 className={`text-2xl font-bold ${gradientTextClasses}`}>500+</h3>
          <p className="opacity-80">Hours of Free Programming Education</p>
        </div>
        <div className={`rounded-xl p-6 ${colorfulCardClasses} border-2 text-center shadow-lg hover:shadow-xl transition-all duration-300`}>
          <Youtube className={`w-8 h-8 ${isDarkMode ? 'text-red-400' : 'text-red-600'} mx-auto mb-3`} />
          <h3 className={`text-2xl font-bold ${gradientTextClasses}`}>15+</h3>
          <p className="opacity-80">Major Educational Platforms</p>
        </div>
        <div className={`rounded-xl p-6 ${colorfulCardClasses} border-2 text-center shadow-lg hover:shadow-xl transition-all duration-300`}>
          <Trophy className={`w-8 h-8 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} mx-auto mb-3`} />
          <h3 className={`text-2xl font-bold ${gradientTextClasses}`}>20+</h3>
          <p className="opacity-80">Download Techniques & Tools</p>
        </div>
      </div>

      {/* The Problem */}
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h3 className={`text-2xl font-bold mb-4 ${gradientTextClasses}`}>The Brutal Reality</h3>
        <p className="text-lg mb-4">You're trying to build a tech career in a country where the internet treats you like a side chick. One minute it's fast, the next minute it's gone.</p>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-amber-100 border-amber-300'} border`}>
          <p className="font-semibold">But here's what successful Nigerian developers know:</p>
          <p className="mt-2">You don't need constant internet to become a world-class programmer. You just need to be SMARTER than your infrastructure and your data budget.</p>
        </div>
      </div>
    </div>
  )
}

function GettingStartedTab({ isDarkMode, cardClasses, vibrantAccentClasses, gradientTextClasses }: { isDarkMode: boolean, cardClasses: string, vibrantAccentClasses: string, gradientTextClasses: string }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className={`text-3xl font-bold mb-4 ${gradientTextClasses}`}>The "Internet Window" Strategy</h2>
        <p className={`text-lg mb-6 ${vibrantAccentClasses} font-semibold`}>Download Fast, Learn Forever</p>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-yellow-900/20 border-yellow-700' : 'bg-yellow-100 border-yellow-300'} border`}>
          <p className="font-semibold text-yellow-500">⚠️ Critical Strategy</p>
          <p className="mt-2">When your internet is fast, you have maybe 30 minutes to 2 hours before something goes wrong. You need a priority list.</p>
        </div>
      </div>

      {/* The Window Concept */}
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">Understanding Your Internet Window</h2>
        <div className="space-y-4">
          <p className="text-lg">
            In Nigeria, good internet comes in windows - brief periods when everything works perfectly. 
            The key is recognizing these windows and maximizing them.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-100 border-green-300'} border`}>
              <h4 className="font-semibold text-green-500 mb-2">🟢 Golden Windows (30min-2hrs)</h4>
              <ul className="text-sm space-y-1">
                <li>• Early morning (5-7 AM)</li>
                <li>• Late night (11 PM-2 AM)</li>
                <li>• Weekday afternoons (2-4 PM)</li>
                <li>• Right after rain (network less congested)</li>
              </ul>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-red-900/20 border-red-700' : 'bg-red-100 border-red-300'} border`}>
              <h4 className="font-semibold text-red-500 mb-2">🔴 Danger Zones (Avoid)</h4>
              <ul className="text-sm space-y-1">
                <li>• Evening peak hours (6-9 PM)</li>
                <li>• Weekend mornings (everyone's online)</li>
                <li>• During popular TV shows</li>
                <li>• First week of the month (salary week)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* The Bucket vs Stream Analogy */}
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">Kemi's Wisdom: The Bucket vs. Stream</h2>
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-100 border-blue-300'} border`}>
            <p className="text-lg italic">
              "Most people try to drink from a stream - they go to YouTube every time they want to learn something. 
              But streams can dry up, get polluted, or be blocked by fallen trees."
            </p>
          </div>
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-purple-900/20 border-purple-700' : 'bg-purple-100 border-purple-300'} border`}>
            <p className="text-lg italic">
              "Code Seekers are different. We fill our buckets when the stream is flowing strong, 
              then we drink from our buckets whenever we're thirsty - even when the stream runs dry."
            </p>
          </div>
        </div>
      </div>

      {/* The Priority System */}
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">The Priority Download System</h2>
        <div className="space-y-4">
          <p className="text-lg">
            When your internet window opens, you need to know exactly what to download first. 
            Here's the proven priority system used by successful Code Seekers:
          </p>
          <div className="space-y-3">
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-red-900/20 border-red-700' : 'bg-red-100 border-red-300'} border`}>
              <h4 className="font-semibold text-red-500">🚨 TIER 1: Foundation (Download First)</h4>
              <p className="text-sm mt-1">Core programming courses that teach fundamentals - Python, JavaScript, CS50</p>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-orange-900/20 border-orange-700' : 'bg-orange-100 border-orange-300'} border`}>
              <h4 className="font-semibold text-orange-500">🟠 TIER 2: Specialization (Download Second)</h4>
              <p className="text-sm mt-1">Framework-specific courses - React, Node.js, Django, Flutter</p>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-yellow-900/20 border-yellow-700' : 'bg-yellow-100 border-yellow-300'} border`}>
              <h4 className="font-semibold text-yellow-500">🟡 TIER 3: Enhancement (Download Third)</h4>
              <p className="text-sm mt-1">Advanced topics, algorithms, system design, soft skills</p>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-100 border-green-300'} border`}>
              <h4 className="font-semibold text-green-500">🟢 TIER 4: Exploration (Download Last)</h4>
              <p className="text-sm mt-1">New technologies, experimental content, nice-to-have resources</p>
            </div>
          </div>
        </div>
      </div>

      {/* The 30-Minute Rule */}
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">The 30-Minute Emergency Protocol</h2>
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-red-900/20 border-red-700' : 'bg-red-100 border-red-300'} border`}>
            <p className="font-semibold text-red-500 mb-2">⏰ When You Only Have 30 Minutes</p>
            <p className="text-sm">
              Sometimes your internet window is shorter than expected. Here's what to grab in order of priority:
            </p>
            <ol className="mt-2 text-sm space-y-1 list-decimal list-inside">
              <li>freeCodeCamp Python Full Course (4.5 hours) - Start download immediately</li>
              <li>CS50 Lecture 0 (2 hours) - Essential computer science foundation</li>
              <li>JavaScript Crash Course (1 hour) - Quick web development start</li>
              <li>Git Tutorial (30 minutes) - Version control basics</li>
              <li>Any remaining time: Start downloading React or Node.js course</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Smart Organization */}
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">Smart Organization System</h2>
        <div className="space-y-4">
          <p className="text-lg">
            Create this folder structure before you start downloading. Organization during the download 
            window saves hours of searching later:
          </p>
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} border font-mono text-sm`}>
            <pre>{`~/OfflineLearning/
├── 01_Priority_Downloads/
│   ├── freeCodeCamp_Python/
│   ├── CS50_Harvard/
│   ├── MIT_OpenCourseWare/
│   └── Programming_with_Mosh/
├── 02_Specialization/
│   ├── Web_Development/
│   ├── Mobile_Apps/
│   ├── Data_Science/
│   └── Game_Development/
├── 03_Advanced_Topics/
│   ├── Algorithms/
│   ├── System_Design/
│   └── Machine_Learning/
└── 04_Project_Tutorials/
    ├── Portfolio_Projects/
    ├── Real_World_Apps/
    └── Interview_Prep/`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

function PriorityDownloadsTab({ isDarkMode, cardClasses, vibrantAccentClasses, gradientTextClasses, copyToClipboard }: { isDarkMode: boolean, cardClasses: string, vibrantAccentClasses: string, gradientTextClasses: string, copyToClipboard: (text: string) => void }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className={`text-3xl font-bold mb-4 ${gradientTextClasses}`}>Essential Downloads</h2>
        <p className={`text-lg mb-4 ${vibrantAccentClasses} font-semibold`}>What to Grab First When Your Internet is Flying</p>
        
        {/* Priority #1: freeCodeCamp */}
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-red-900/20 border-red-700' : 'bg-red-100 border-red-300'} border`}>
            <h4 className="font-semibold text-red-500 mb-2">🚨 PRIORITY #1: 
              <a href="https://www.youtube.com/watch?v=rfscVS0vtbw" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                freeCodeCamp Python (4.5 hours)
                <ExternalLink className="w-3 h-3" />
              </a>
            </h4>
            <p className="text-sm mb-3">The most comprehensive Python course on the internet. Perfect for Nigerian beginners because it assumes no prior knowledge and covers everything from basics to advanced topics.</p>
            <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
              <span>yt-dlp "https://www.youtube.com/watch?v=rfscVS0vtbw"</span>
              <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=rfscVS0vtbw"')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-2 text-xs opacity-70">
              Why freeCodeCamp is PERFECT for Nigeria: No prerequisites, works offline, comprehensive, and used by millions of developers worldwide.
            </div>
          </div>

          {/* Priority #2: MIT OpenCourseWare */}
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-orange-900/20 border-orange-700' : 'bg-orange-100 border-orange-300'} border`}>
            <h4 className="font-semibold text-orange-500 mb-2">🔥 PRIORITY #2: 
              <a href="https://www.youtube.com/playlist?list=PLUl4u3cNGP62A-ynp6v6-LGBCzeH3VAQB" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                MIT Introduction to Computer Science (24 hours)
                <ExternalLink className="w-3 h-3" />
              </a>
            </h4>
            <p className="text-sm mb-3">World-class computer science education from MIT. This course will give you the theoretical foundation that separates good programmers from great ones. Also available at <a href="https://ocw.mit.edu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">MIT OCW</a>.</p>
            <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
              <span>yt-dlp "https://www.youtube.com/playlist?list=PLUl4u3cNGP62A-ynp6v6-LGBCzeH3VAQB"</span>
              <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/playlist?list=PLUl4u3cNGP62A-ynp6v6-LGBCzeH3VAQB"')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-2 text-xs opacity-70">
              Why MIT is PERFECT for Nigeria: University-level education for free, builds strong fundamentals, and gives you confidence to compete globally.
            </div>
          </div>

          {/* Priority #3: Harvard CS50 */}
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-100 border-blue-300'} border`}>
            <h4 className="font-semibold text-blue-500 mb-2">⭐ PRIORITY #3: Harvard CS50 (25 hours)</h4>
            <p className="text-sm mb-3">Harvard's legendary computer science course. Covers multiple programming languages and gives you a broad foundation in computer science.</p>
            <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
              <span>yt-dlp "https://www.youtube.com/playlist?list=PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4"</span>
              <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/playlist?list=PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4"')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-2 text-xs opacity-70">
              Why CS50 is PERFECT for Nigeria: Engaging lectures, covers multiple languages, and has a huge global community for support.
            </div>
          </div>

          {/* Priority #4: Programming with Mosh */}
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-purple-900/20 border-purple-700' : 'bg-purple-100 border-purple-300'} border`}>
            <h4 className="font-semibold text-purple-500 mb-2">💎 PRIORITY #4: Programming with Mosh JavaScript (6 hours)</h4>
            <p className="text-sm mb-3">The clearest JavaScript tutorial on the internet. Mosh's teaching style is perfect for beginners, and JavaScript is essential for web development.</p>
            <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
              <span>yt-dlp "https://www.youtube.com/watch?v=W6NZfCO5SIk"</span>
              <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=W6NZfCO5SIk"')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-2 text-xs opacity-70">
              Why Mosh is PERFECT for Nigeria: Clear explanations, practical examples, and focuses on skills that get you hired.
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Commands */}
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">Quick Start: Download All Priorities</h2>
        <p className="text-lg mb-4">Copy and paste these commands to download all priority content at once:</p>
        <div className="space-y-3">
          <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
            <span>yt-dlp "https://www.youtube.com/watch?v=rfscVS0vtbw" -o "01_Priority/freeCodeCamp_Python.%(ext)s"</span>
            <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=rfscVS0vtbw" -o "01_Priority/freeCodeCamp_Python.%(ext)s"')} className="p-1 hover:bg-gray-600 rounded">
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
            <span>yt-dlp "https://www.youtube.com/playlist?list=PLUl4u3cNGP62A-ynp6v6-LGBCzeH3VAQB" -o "01_Priority/MIT_CS/%(title)s.%(ext)s"</span>
            <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/playlist?list=PLUl4u3cNGP62A-ynp6v6-LGBCzeH3VAQB" -o "01_Priority/MIT_CS/%(title)s.%(ext)s"')} className="p-1 hover:bg-gray-600 rounded">
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
            <span>yt-dlp "https://www.youtube.com/playlist?list=PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4" -o "01_Priority/Harvard_CS50/%(title)s.%(ext)s"</span>
            <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/playlist?list=PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4" -o "01_Priority/Harvard_CS50/%(title)s.%(ext)s"')} className="p-1 hover:bg-gray-600 rounded">
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
            <span>yt-dlp "https://www.youtube.com/watch?v=W6NZfCO5SIk" -o "01_Priority/Mosh_JavaScript.%(ext)s"</span>
            <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=W6NZfCO5SIk" -o "01_Priority/Mosh_JavaScript.%(ext)s"')} className="p-1 hover:bg-gray-600 rounded">
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Priorities */}
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">Secondary Priorities (Download After Core 4)</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-100 border-green-300'} border`}>
            <h4 className="font-semibold text-green-500 mb-2">Web Development Track</h4>
            <ul className="text-sm space-y-1">
              <li>• HTML Crash Course (2 hours)</li>
              <li>• CSS Complete Guide (4 hours)</li>
              <li>• React Tutorial (8 hours)</li>
              <li>• Node.js Full Course (12 hours)</li>
            </ul>
          </div>
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-100 border-blue-300'} border`}>
            <h4 className="font-semibold text-blue-500 mb-2">Mobile Development Track</h4>
            <ul className="text-sm space-y-1">
              <li>• React Native Tutorial (10 hours)</li>
              <li>• Flutter Complete Course (15 hours)</li>
              <li>• Mobile UI/UX Design (6 hours)</li>
              <li>• App Store Deployment (3 hours)</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-purple-900/20 border-purple-700' : 'bg-purple-100 border-purple-300'} border`}>
            <h4 className="font-semibold text-purple-500 mb-2">🎯 Essential YouTube Channels</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div className="space-y-2">
                <div className="text-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <a href="https://www.youtube.com/@coreyms" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline font-semibold">
                        Corey Schafer (@coreyms)
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <p className="text-xs opacity-70">1.0M+ subscribers • Python & Django</p>
                    </div>
                    <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/@coreyms"')} className="p-1 hover:bg-gray-600 rounded">
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <a href="https://www.youtube.com/@sentdex" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline font-semibold">
                        Sentdex (@sentdex)
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <p className="text-xs opacity-70">1.2M+ subscribers • ML & AI</p>
                    </div>
                    <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/@sentdex"')} className="p-1 hover:bg-gray-600 rounded">
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <a href="https://www.youtube.com/@netninja" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline font-semibold">
                        The Net Ninja (@netninja)
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <p className="text-xs opacity-70">1.1M+ subscribers • Web Dev</p>
                    </div>
                    <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/@netninja"')} className="p-1 hover:bg-gray-600 rounded">
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <a href="https://www.youtube.com/@academind" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline font-semibold">
                        Academind (@academind)
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <p className="text-xs opacity-70">900K+ subscribers • Modern Web</p>
                    </div>
                    <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/@academind"')} className="p-1 hover:bg-gray-600 rounded">
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <a href="https://www.youtube.com/@3blue1brown" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline font-semibold">
                        3Blue1Brown (@3blue1brown)
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <p className="text-xs opacity-70">5M+ subscribers • Math</p>
                    </div>
                    <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/@3blue1brown"')} className="p-1 hover:bg-gray-600 rounded">
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <a href="https://www.youtube.com/@beneater" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline font-semibold">
                        Ben Eater (@beneater)
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <p className="text-xs opacity-70">1M+ subscribers • Computer Engineering</p>
                    </div>
                    <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/@beneater"')} className="p-1 hover:bg-gray-600 rounded">
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ToolsSetupTab({ isDarkMode, cardClasses, vibrantAccentClasses, gradientTextClasses, copyToClipboard }: { isDarkMode: boolean, cardClasses: string, vibrantAccentClasses: string, gradientTextClasses: string, copyToClipboard: (text: string) => void }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className={`text-3xl font-bold mb-4 ${gradientTextClasses}`}>Download Tools Setup</h2>
        <p className={`text-lg mb-4 ${vibrantAccentClasses} font-semibold`}>Your Weapons Against Bad Internet</p>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Install yt-dlp
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-opacity-50 rounded">
                <h5 className="font-semibold mb-2">Windows</h5>
                <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
                  <span>pip install yt-dlp</span>
                  <button onClick={() => copyToClipboard('pip install yt-dlp')} className="p-1 hover:bg-gray-600 rounded">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-3 bg-opacity-50 rounded">
                <h5 className="font-semibold mb-2">macOS</h5>
                <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
                  <span>brew install yt-dlp</span>
                  <button onClick={() => copyToClipboard('brew install yt-dlp')} className="p-1 hover:bg-gray-600 rounded">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-3 bg-opacity-50 rounded">
                <h5 className="font-semibold mb-2">Linux</h5>
                <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
                  <span>sudo apt install yt-dlp</span>
                  <button onClick={() => copyToClipboard('sudo apt install yt-dlp')} className="p-1 hover:bg-gray-600 rounded">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Advanced Download Commands
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-opacity-50 rounded">
                <h5 className="font-semibold mb-2">Speed Demon Mode (Use all bandwidth)</h5>
                <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-xs flex items-center justify-between border`}>
                  <span className="flex-1 mr-2">yt-dlp --external-downloader aria2c --external-downloader-args "-x 16 -s 16" "VIDEO_URL"</span>
                  <button onClick={() => copyToClipboard('yt-dlp --external-downloader aria2c --external-downloader-args "-x 16 -s 16" "VIDEO_URL"')} className="p-1 hover:bg-gray-600 rounded">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-3 bg-opacity-50 rounded">
                <h5 className="font-semibold mb-2">Data Saver Mode (For expensive data)</h5>
                <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
                  <span>yt-dlp --limit-rate 100K "VIDEO_URL"</span>
                  <button onClick={() => copyToClipboard('yt-dlp --limit-rate 100K "VIDEO_URL"')} className="p-1 hover:bg-gray-600 rounded">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-3 bg-opacity-50 rounded">
                <h5 className="font-semibold mb-2">Resume Broken Downloads</h5>
                <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
                  <span>yt-dlp --continue "VIDEO_URL"</span>
                  <button onClick={() => copyToClipboard('yt-dlp --continue "VIDEO_URL"')} className="p-1 hover:bg-gray-600 rounded">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-3 bg-opacity-50 rounded">
                <h5 className="font-semibold mb-2">Audio Only (For lectures)</h5>
                <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
                  <span>yt-dlp -x --audio-format mp3 "VIDEO_URL"</span>
                  <button onClick={() => copyToClipboard('yt-dlp -x --audio-format mp3 "VIDEO_URL"')} className="p-1 hover:bg-gray-600 rounded">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Smart Organization System
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-opacity-50 rounded">
                <h5 className="font-semibold mb-2">Create Learning Folder Structure</h5>
                <div className="space-y-2">
                  <div className={`p-2 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
                    <span>mkdir ~/ProgrammingLibrary</span>
                    <button onClick={() => copyToClipboard('mkdir ~/ProgrammingLibrary')} className="p-1 hover:bg-gray-600 rounded">
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                  <div className={`p-2 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
                    <span>cd ~/ProgrammingLibrary</span>
                    <button onClick={() => copyToClipboard('cd ~/ProgrammingLibrary')} className="p-1 hover:bg-gray-600 rounded">
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-opacity-50 rounded">
                <h5 className="font-semibold mb-2">Download with Smart Naming</h5>
                <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-xs flex items-center justify-between border`}>
                  <span className="flex-1 mr-2">yt-dlp -o "%(uploader)s - %(title)s.%(ext)s" "VIDEO_URL"</span>
                  <button onClick={() => copyToClipboard('yt-dlp -o "%(uploader)s - %(title)s.%(ext)s" "VIDEO_URL"')} className="p-1 hover:bg-gray-600 rounded">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LearningPathTab({ isDarkMode, copyToClipboard }: { isDarkMode: boolean, copyToClipboard: (text: string) => void }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          The Four Phases of Code Seeker Evolution
        </h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">Your structured path from beginner to professional developer</p>
        <div className="mt-6 flex justify-center">
          <div className="flex items-center space-x-4 text-sm opacity-70">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span>Foundation</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span>Building</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span>Specialization</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
              <span>Mastery</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
        <div className="space-y-8">
          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-100 border-blue-300'} border-2 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl font-bold text-blue-500">Phase 1: The Awakening</h4>
              <div className="text-right">
                <div className="text-sm opacity-70">Weeks 1-4</div>
                <div className="text-xs opacity-60">33 hours total</div>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4 italic">Building Your Foundation • Essential programming concepts</p>
            <ul className="text-sm space-y-2">
              <li className="flex items-center justify-between">
                <span>• CS50 Lecture 0: Computer Science (2 hours)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=LfaMVlDaQ24"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• freeCodeCamp Python Basics (4.5 hours)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=rfscVS0vtbw"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• Programming with Mosh JavaScript (6 hours)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=PkZNo7MFNFg"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• Git and GitHub Tutorial (2 hours)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=RGOj5yH7evk"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• HTML/CSS Crash Course (4 hours)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=a_iQb1lnAEQ"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• Build your first simple website (Practice time)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=916GWv2Qs08"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-100 border-green-300'} border-2 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl font-bold text-green-500">Phase 2: The Strengthening</h4>
              <div className="text-right">
                <div className="text-sm opacity-70">Weeks 5-12</div>
                <div className="text-xs opacity-60">55 hours total</div>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4 italic">Developing Core Skills • Advanced programming concepts</p>
            <ul className="text-sm space-y-2">
              <li className="flex items-center justify-between">
                <span>• Complete CS50 Course (25 hours)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/playlist?list=PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• Advanced JavaScript Concepts (8 hours)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=Mus_vwhTCq0"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• React Fundamentals (12 hours)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=bMknfKXIFA8"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• Node.js and Express (10 hours)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=Oe421EPjeBE"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• Database Fundamentals (6 hours)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=HXV3zeQKqGY"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• Build 3-5 portfolio projects (Practice time)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=xV7S8BhIeBo"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-purple-900/20 border-purple-700' : 'bg-purple-100 border-purple-300'} border-2 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl font-bold text-purple-500">Phase 3: The Specialization</h4>
              <div className="text-right">
                <div className="text-sm opacity-70">Weeks 13-24</div>
                <div className="text-xs opacity-60">60+ hours total</div>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4 italic">Choose Your Path • Specialized development tracks</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <h5 className="font-medium text-purple-400 mb-1">Web Development Track:</h5>
                <ul className="text-xs space-y-2">
                  <li className="flex items-center justify-between">
                    <span>• Advanced React Patterns (15 hours)</span>
                    <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=3XaXKiXtNjw"')} className="p-1 hover:bg-gray-600 rounded">
                      <Copy className="w-2 h-2" />
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>• Full-Stack Development (20 hours)</span>
                    <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=nu_pCVPKzTk"')} className="p-1 hover:bg-gray-600 rounded">
                      <Copy className="w-2 h-2" />
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>• Deployment and DevOps (10 hours)</span>
                    <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=9pZ2xmsSDdo"')} className="p-1 hover:bg-gray-600 rounded">
                      <Copy className="w-2 h-2" />
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-400 mb-1">Mobile Development Track:</h5>
                <ul className="text-xs space-y-2">
                  <li className="flex items-center justify-between">
                    <span>• React Native Complete (25 hours)</span>
                    <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=0-S5a0eXPoc"')} className="p-1 hover:bg-gray-600 rounded">
                      <Copy className="w-2 h-2" />
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>• Flutter Development (20 hours)</span>
                    <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=1ukSR1GRtMU"')} className="p-1 hover:bg-gray-600 rounded">
                      <Copy className="w-2 h-2" />
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>• Mobile UI/UX Design (10 hours)</span>
                    <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=68w2VwalD5w"')} className="p-1 hover:bg-gray-600 rounded">
                      <Copy className="w-2 h-2" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-orange-900/20 border-orange-700' : 'bg-orange-100 border-orange-300'} border-2 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl font-bold text-orange-500">Phase 4: The Mastery</h4>
              <div className="text-right">
                <div className="text-sm opacity-70">Weeks 25+</div>
                <div className="text-xs opacity-60">Ongoing</div>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4 italic">Professional Development • Advanced career skills</p>
            <ul className="text-sm space-y-2">
              <li className="flex items-center justify-between">
                <span>• System Design and Architecture (20+ hours)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=UzLMhqg3_Wc"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• Advanced Algorithms and Data Structures (15+ hours)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=8hly31xKli0"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• Open Source Contributions (Ongoing)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=yzeVMecydCE"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• Mentoring Other Code Seekers (Ongoing)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=mklEhT_RLos"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• Building Commercial Applications (Ongoing)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=poLzjLt2yqU"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>• Interview Preparation and Job Search (Ongoing)</span>
                <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=1qw5ITr3k9E"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-2 shadow-lg mt-12`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            The Transformation Timeline
          </h2>
          <p className="text-lg opacity-80">Track your progress through each milestone</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-100 border-blue-300'} border-2 hover:shadow-lg transition-shadow duration-300`}>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
              <h4 className="font-bold text-blue-500 text-lg">Foundation Phase</h4>
            </div>
            <p className="text-xs opacity-70 mb-3">Month 1-3</p>
            <ul className="text-sm space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>Downloaded and completed basic courses</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>Can build simple websites and write basic programs</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>Understand fundamental programming concepts</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>Established sustainable learning routine</span>
              </li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-100 border-green-300'} border-2 hover:shadow-lg transition-shadow duration-300`}>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
              <h4 className="font-bold text-green-500 text-lg">Building Phase</h4>
            </div>
            <p className="text-xs opacity-70 mb-3">Month 4-6</p>
            <ul className="text-sm space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">🚀</span>
                <span>Creating real projects using downloaded tutorials</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">🚀</span>
                <span>Specialized in 1-2 programming languages</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">🚀</span>
                <span>Contributing to open-source projects</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">🚀</span>
                <span>Built portfolio of applications</span>
              </li>
            </ul>
          </div>

          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-purple-900/20 border-purple-700' : 'bg-purple-100 border-purple-300'} border-2 hover:shadow-lg transition-shadow duration-300`}>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
              <h4 className="font-bold text-purple-500 text-lg">Professional Phase</h4>
            </div>
            <p className="text-xs opacity-70 mb-3">Month 7-12</p>
            <ul className="text-sm space-y-2">
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">💼</span>
                <span>Applying for junior developer positions</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">💼</span>
                <span>Freelancing and earning money from coding</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">💼</span>
                <span>Teaching others what you've learned</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">💼</span>
                <span>Building complex, full-stack applications</span>
              </li>
            </ul>
          </div>

          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-orange-900/20 border-orange-700' : 'bg-orange-100 border-orange-300'} border-2 hover:shadow-lg transition-shadow duration-300`}>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">4</div>
              <h4 className="font-bold text-orange-500 text-lg">Mastery Phase</h4>
            </div>
            <p className="text-xs opacity-70 mb-3">Year 2+</p>
            <ul className="text-sm space-y-2">
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">🏆</span>
                <span>Working as professional developer</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">🏆</span>
                <span>Earning good salary in tech</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">🏆</span>
                <span>Mentoring other Code Seekers</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">🏆</span>
                <span>Contributing to global tech community</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function AdvancedTipsTab({ isDarkMode, cardClasses, vibrantAccentClasses, gradientTextClasses, copyToClipboard }: { isDarkMode: boolean, cardClasses: string, vibrantAccentClasses: string, gradientTextClasses: string, copyToClipboard: (text: string) => void }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className={`text-3xl font-bold mb-4 ${gradientTextClasses}`}>Smart Download Strategies</h2>
        <p className={`text-lg mb-4 ${vibrantAccentClasses} font-semibold`}>Data-conscious techniques for Nigerian developers</p>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-orange-900/20 border-orange-700' : 'bg-orange-100 border-orange-300'} border`}>
          <p className="font-semibold text-orange-500">💰 Data Budget First</p>
          <p className="mt-2">Every download should be intentional. These advanced techniques help you get maximum learning from minimum data usage.</p>
        </div>
      </div>

      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">Quality vs Data Usage Guide</h2>
        <div className="space-y-4">
          <p className="text-lg">Choose the right quality for your data budget and learning needs.</p>
          
          <div className="space-y-3">
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-100 border-green-300'} border`}>
              <h4 className="font-semibold text-green-500 mb-2">💚 Budget Saver (480p, ~50MB/hour)</h4>
              <p className="text-sm mb-2">Perfect for lectures and coding tutorials where you mainly need to see the code.</p>
              <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
                <span>yt-dlp -f "best[height&lt;=480]" "VIDEO_URL"</span>
                <button onClick={() => copyToClipboard('yt-dlp -f "best[height<=480]" "VIDEO_URL"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-100 border-blue-300'} border`}>
              <h4 className="font-semibold text-blue-500 mb-2">💙 Balanced Choice (720p, ~100MB/hour)</h4>
              <p className="text-sm mb-2">Good for detailed tutorials where you need to see UI elements clearly.</p>
              <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
                <span>yt-dlp -f "best[height&lt;=720]" "VIDEO_URL"</span>
                <button onClick={() => copyToClipboard('yt-dlp -f "best[height<=720]" "VIDEO_URL"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-purple-900/20 border-purple-700' : 'bg-purple-100 border-purple-300'} border`}>
              <h4 className="font-semibold text-purple-500 mb-2">🎧 Audio-Only Mode (~10MB/hour)</h4>
              <p className="text-sm mb-2">For podcasts and lectures where visuals aren't essential.</p>
              <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
                <span>yt-dlp -f "bestaudio" "VIDEO_URL"</span>
                <button onClick={() => copyToClipboard('yt-dlp -f "bestaudio" "VIDEO_URL"')} className="p-1 hover:bg-gray-600 rounded">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">Smart Downloading Techniques</h2>
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-100 border-blue-300'} border`}>
            <h4 className="font-semibold text-blue-500 mb-3">📊 Check File Size Before Downloading</h4>
            <p className="text-sm mb-2">Know what you're getting into before you commit your data:</p>
            <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
              <span>yt-dlp --list-formats "VIDEO_URL"</span>
              <button onClick={() => copyToClipboard('yt-dlp --list-formats "VIDEO_URL"')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-100 border-green-300'} border`}>
            <h4 className="font-semibold text-green-500 mb-3">⏸️ Resume Interrupted Downloads</h4>
            <p className="text-sm mb-2">Don't lose progress when your connection drops:</p>
            <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
              <span>yt-dlp --continue --retries 10 "VIDEO_URL"</span>
              <button onClick={() => copyToClipboard('yt-dlp --continue --retries 10 "VIDEO_URL"')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-purple-900/20 border-purple-700' : 'bg-purple-100 border-purple-300'} border`}>
            <h4 className="font-semibold text-purple-500 mb-3">📝 Download Subtitles (No Extra Data)</h4>
            <p className="text-sm mb-2">Get subtitles for better learning, they're tiny files:</p>
            <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
              <span>yt-dlp --write-subs --sub-lang en "VIDEO_URL"</span>
              <button onClick={() => copyToClipboard('yt-dlp --write-subs --sub-lang en "VIDEO_URL"')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">Data Budget Calculator</h2>
        <div className="space-y-4">
          <p className="text-lg">Plan your downloads based on your monthly data budget:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-100 border-green-300'} border text-center`}>
              <h4 className="font-semibold text-green-500 mb-2">₦2,000 Budget</h4>
              <p className="text-sm">~2GB data</p>
              <p className="text-xs mt-1">40 hours of 480p content OR 20 hours of 720p</p>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-100 border-blue-300'} border text-center`}>
              <h4 className="font-semibold text-blue-500 mb-2">₦5,000 Budget</h4>
              <p className="text-sm">~5GB data</p>
              <p className="text-xs mt-1">100 hours of 480p content OR 50 hours of 720p</p>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-purple-900/20 border-purple-700' : 'bg-purple-100 border-purple-300'} border text-center`}>
              <h4 className="font-semibold text-purple-500 mb-2">₦10,000 Budget</h4>
              <p className="text-sm">~10GB data</p>
              <p className="text-xs mt-1">200 hours of 480p content OR 100 hours of 720p</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SuccessStoriesTab({ isDarkMode, cardClasses, vibrantAccentClasses, gradientTextClasses }: { isDarkMode: boolean, cardClasses: string, vibrantAccentClasses: string, gradientTextClasses: string }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className={`text-3xl font-bold mb-4 ${gradientTextClasses}`}>Success Stories</h2>
        <p className={`text-lg mb-4 ${vibrantAccentClasses} font-semibold`}>Real Nigerian developers who made it using smart downloading strategies</p>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-100 border-green-300'} border`}>
          <p className="font-semibold text-green-500">🎉 From Zero to Hero</p>
          <p className="mt-2">These are real stories from developers who started with limited data budgets but unlimited determination.</p>
        </div>
      </div>

      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-2xl font-bold">Emeka from Enugu: The Strategic Learner</h3>
          <a href="https://linkedin.com/in/emeka-enugu-developer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-500 hover:text-blue-400 transition-colors">
            <Linkedin className="w-5 h-5" />
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-full ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-lg mb-4">
                Emeka was a 26-year-old mechanic in Enugu who spent his evenings learning to code. 
                With only ₦3,000 monthly data budget, he had to be extremely strategic.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} border`}>
                  <h4 className="font-semibold mb-2">His Strategy:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Downloaded one complete course per month</li>
                    <li>• Studied offline for 2-3 hours every evening</li>
                    <li>• Built projects using downloaded tutorials</li>
                    <li>• Only downloaded next course after mastering current one</li>
                  </ul>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} border`}>
                  <h4 className="font-semibold mb-2">The Timeline:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Month 1-2: HTML/CSS fundamentals</li>
                    <li>• Month 3-4: JavaScript basics</li>
                    <li>• Month 5-6: React development</li>
                    <li>• Month 7-8: Node.js backend</li>
                    <li>• Month 9: Portfolio projects</li>
                    <li>• Month 10: Got first freelance client</li>
                  </ul>
                </div>
              </div>
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-100 border-green-300'} border mt-4`}>
                <p className="font-semibold text-green-500">The Result:</p>
                <p className="text-sm mt-1">
                  Now earning ₦150,000/month as a freelance developer. Total data cost: ₦30,000 over 10 months. 
                  ROI: 500% in the first month of freelancing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-2xl font-bold">Fatima from Kano: The Mobile App Developer</h3>
          <a href="https://linkedin.com/in/fatima-kano-mobile-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-500 hover:text-blue-400 transition-colors">
            <Linkedin className="w-5 h-5" />
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-full ${isDarkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <div className="flex-1">
              <p className="text-lg mb-4">
                Fatima was a 22-year-old university student studying Economics. She wanted to build mobile apps 
                but had unreliable campus internet and a tight budget.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} border`}>
                  <h4 className="font-semibold mb-2">Her Challenge:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Campus internet only worked 2-3 hours daily</li>
                    <li>• ₦2,000 monthly data budget</li>
                    <li>• No laptop, only Android phone initially</li>
                    <li>• Had to study during frequent power outages</li>
                  </ul>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} border`}>
                  <h4 className="font-semibold mb-2">Her Solution:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Downloaded Flutter course in 480p (saved 60% data)</li>
                    <li>• Used phone for initial learning and practice</li>
                    <li>• Downloaded Android Studio tutorials</li>
                    <li>• Built first app entirely offline</li>
                  </ul>
                </div>
              </div>
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-purple-900/20 border-purple-700' : 'bg-purple-100 border-purple-300'} border mt-4`}>
                <p className="font-semibold text-purple-500">The Amazing Result:</p>
                <p className="text-sm mt-1">
                  Built and published 3 mobile apps within 8 months. One app got 10,000+ downloads. 
                  Now works as mobile developer at a Lagos startup earning ₦300,000/month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h3 className="text-2xl font-bold mb-4">Key Lessons from Success Stories</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-100 border-blue-300'} border`}>
            <h4 className="font-semibold text-blue-500 mb-3">💡 What They Did Right</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>One course at a time:</strong> Mastered each before moving to next</li>
              <li>• <strong>Quality over quantity:</strong> Better to deeply understand few courses</li>
              <li>• <strong>Practical application:</strong> Built projects using downloaded tutorials</li>
              <li>• <strong>Budget discipline:</strong> Stuck to data budgets and optimized downloads</li>
              <li>• <strong>Consistency:</strong> Studied regularly, even during power outages</li>
            </ul>
          </div>
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-100 border-green-300'} border`}>
            <h4 className="font-semibold text-green-500 mb-3">🎯 Common Success Factors</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>Strategic downloading:</strong> Planned what to download based on learning goals</li>
              <li>• <strong>Offline-first mindset:</strong> Assumed internet would be unreliable</li>
              <li>• <strong>Data consciousness:</strong> Always considered data costs before downloading</li>
              <li>• <strong>Project-based learning:</strong> Applied knowledge immediately through projects</li>
              <li>• <strong>Community support:</strong> Connected with other learners online when possible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResourcesTab({ isDarkMode, cardClasses, gradientTextClasses, copyToClipboard }: { isDarkMode: boolean, cardClasses: string, gradientTextClasses: string, copyToClipboard: (text: string) => void }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className={`text-3xl font-bold mb-4 ${gradientTextClasses}`}>Essential Resources</h2>
        <p className="text-lg mb-4 text-orange-500 font-semibold">Curated list of the best programming resources for Nigerian developers</p>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-orange-900/20 border-orange-700' : 'bg-orange-100 border-orange-300'} border`}>
          <h4 className="font-semibold text-orange-500 mb-2">💰 Smart Selection Strategy</h4>
          <p className="text-sm">Each resource includes estimated data usage. Choose based on your budget and current learning goals.</p>
        </div>
      </div>

      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h3 className="text-2xl font-bold mb-4">🎯 Priority YouTube Channels</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border`}>
            <h5 className="font-semibold mb-2">freeCodeCamp</h5>
            <p className="text-sm mb-2">4.2M subscribers • Comprehensive programming courses</p>
            <p className="text-xs text-green-500 mb-2">Data cost: ~100MB/hour (720p) | ~50MB/hour (480p)</p>
            <div className={`p-2 rounded ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} font-mono text-xs flex items-center justify-between`}>
              <span>yt-dlp -f "best[height&lt;=480]" "https://www.youtube.com/watch?v=rfscVS0vtbw"</span>
              <button onClick={() => copyToClipboard('yt-dlp -f "best[height<=480]" "https://www.youtube.com/watch?v=rfscVS0vtbw"')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border`}>
            <h5 className="font-semibold mb-2">Programming with Mosh</h5>
            <p className="text-sm mb-2">3.1M subscribers • Clear, practical tutorials</p>
            <p className="text-xs text-green-500 mb-2">Data cost: ~80MB/hour (720p) | ~40MB/hour (480p)</p>
            <div className={`p-2 rounded ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} font-mono text-xs flex items-center justify-between`}>
              <span>yt-dlp -f "best[height&lt;=480]" "https://www.youtube.com/watch?v=W6NZfCO5SIk"</span>
              <button onClick={() => copyToClipboard('yt-dlp -f "best[height<=480]" "https://www.youtube.com/watch?v=W6NZfCO5SIk"')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border`}>
            <h5 className="font-semibold mb-2">Traversy Media</h5>
            <p className="text-sm mb-2">2.1M subscribers • Web development tutorials</p>
            <p className="text-xs text-green-500 mb-2">Data cost: ~90MB/hour (720p) | ~45MB/hour (480p)</p>
            <div className={`p-2 rounded ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} font-mono text-xs flex items-center justify-between`}>
              <span>yt-dlp -f "best[height&lt;=480]" "https://www.youtube.com/c/TraversyMedia"</span>
              <button onClick={() => copyToClipboard('yt-dlp -f "best[height<=480]" "https://www.youtube.com/c/TraversyMedia"')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border`}>
            <h5 className="font-semibold mb-2">The Net Ninja</h5>
            <p className="text-sm mb-2">1.1M subscribers • Bite-sized programming tutorials</p>
            <p className="text-xs text-green-500 mb-2">Data cost: ~60MB/hour (720p) | ~30MB/hour (480p)</p>
            <div className={`p-2 rounded ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} font-mono text-xs flex items-center justify-between`}>
              <span>yt-dlp -f "best[height&lt;=480]" "https://www.youtube.com/c/TheNetNinja"</span>
              <button onClick={() => copyToClipboard('yt-dlp -f "best[height<=480]" "https://www.youtube.com/c/TheNetNinja"')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h3 className="text-2xl font-bold mb-4">🎓 University Courses</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border`}>
            <h5 className="font-semibold mb-2">Harvard CS50</h5>
            <p className="text-sm mb-2">Introduction to Computer Science • 25 hours total</p>
            <p className="text-xs text-blue-500 mb-2">Data cost: ~2.5GB (720p) | ~1.25GB (480p)</p>
            <div className={`p-2 rounded ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} font-mono text-xs flex items-center justify-between`}>
              <span>yt-dlp -f "best[height&lt;=480]" "https://www.youtube.com/playlist?list=PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4"</span>
              <button onClick={() => copyToClipboard('yt-dlp -f "best[height<=480]" "https://www.youtube.com/playlist?list=PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4"')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border`}>
            <h5 className="font-semibold mb-2">MIT OpenCourseWare</h5>
            <p className="text-sm mb-2">Introduction to Computer Science • 24 hours total</p>
            <p className="text-xs text-blue-500 mb-2">Data cost: ~2.4GB (720p) | ~1.2GB (480p)</p>
            <div className={`p-2 rounded ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} font-mono text-xs flex items-center justify-between`}>
              <span>yt-dlp -f "best[height&lt;=480]" "https://www.youtube.com/playlist?list=PLUl4u3cNGP62A-ynp6v6-LGBCzeH3VAQB"</span>
              <button onClick={() => copyToClipboard('yt-dlp -f "best[height<=480]" "https://www.youtube.com/playlist?list=PLUl4u3cNGP62A-ynp6v6-LGBCzeH3VAQB"')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6" />
          📚 Essential GitHub Repositories
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border`}>
            <h5 className="font-semibold mb-2">
              <a href="https://github.com/freeCodeCamp/freeCodeCamp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                freeCodeCamp Curriculum
                <ExternalLink className="w-3 h-3" />
              </a>
            </h5>
            <p className="text-sm mb-2">Complete coding curriculum • 400k+ stars</p>
            <p className="text-xs text-purple-500 mb-2">Data cost: ~50MB (clone) | Offline access to all exercises</p>
            <div className={`p-2 rounded ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} font-mono text-xs flex items-center justify-between`}>
              <span>git clone https://github.com/freeCodeCamp/freeCodeCamp.git</span>
              <button onClick={() => copyToClipboard('git clone https://github.com/freeCodeCamp/freeCodeCamp.git')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border`}>
            <h5 className="font-semibold mb-2">
              <a href="https://github.com/practical-tutorials/project-based-learning" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                Project-Based Learning
                <ExternalLink className="w-3 h-3" />
              </a>
            </h5>
            <p className="text-sm mb-2">Curated list of project tutorials • 235k+ stars</p>
            <p className="text-xs text-purple-500 mb-2">Data cost: ~5MB (clone) | Build real projects</p>
            <div className={`p-2 rounded ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} font-mono text-xs flex items-center justify-between`}>
              <span>git clone https://github.com/practical-tutorials/project-based-learning.git</span>
              <button onClick={() => copyToClipboard('git clone https://github.com/practical-tutorials/project-based-learning.git')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border`}>
            <h5 className="font-semibold mb-2">
              <a href="https://github.com/microsoft/Web-Dev-For-Beginners" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                Microsoft Web Dev for Beginners
                <ExternalLink className="w-3 h-3" />
              </a>
            </h5>
            <p className="text-sm mb-2">24-lesson curriculum • 83k+ stars</p>
            <p className="text-xs text-purple-500 mb-2">Data cost: ~20MB (clone) | Complete web dev course</p>
            <div className={`p-2 rounded ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} font-mono text-xs flex items-center justify-between`}>
              <span>git clone https://github.com/microsoft/Web-Dev-For-Beginners.git</span>
              <button onClick={() => copyToClipboard('git clone https://github.com/microsoft/Web-Dev-For-Beginners.git')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border`}>
            <h5 className="font-semibold mb-2">
              <a href="https://github.com/Developer-Y/cs-video-courses" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                CS Video Courses
                <ExternalLink className="w-3 h-3" />
              </a>
            </h5>
            <p className="text-sm mb-2">List of CS courses with video lectures • 67k+ stars</p>
            <p className="text-xs text-purple-500 mb-2">Data cost: ~2MB (clone) | University course links</p>
            <div className={`p-2 rounded ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} font-mono text-xs flex items-center justify-between`}>
              <span>git clone https://github.com/Developer-Y/cs-video-courses.git</span>
              <button onClick={() => copyToClipboard('git clone https://github.com/Developer-Y/cs-video-courses.git')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h3 className="text-2xl font-bold mb-4">💡 Data-Saving Tips</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-100 border-green-300'} border`}>
            <h4 className="font-semibold text-green-500 mb-2">🎯 Smart Selection</h4>
            <ul className="text-sm space-y-1">
              <li>• Download one complete course before starting another</li>
              <li>• Choose 480p for coding tutorials (code is still readable)</li>
              <li>• Use audio-only for theory-heavy lectures</li>
              <li>• Download subtitles separately (tiny file size)</li>
            </ul>
          </div>
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-100 border-blue-300'} border`}>
            <h4 className="font-semibold text-blue-500 mb-2">⏰ Timing Strategy</h4>
            <ul className="text-sm space-y-1">
              <li>• Download during off-peak hours (2-6 AM)</li>
              <li>• Use free WiFi when available (cafes, libraries)</li>
              <li>• Check file sizes before downloading</li>
              <li>• Resume interrupted downloads instead of restarting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
