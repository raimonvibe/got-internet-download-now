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
  ExternalLink,
  Copy,
  Youtube,
  Code,
  Users,
  Trophy
} from 'lucide-react'
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

  return (
    <div className={`min-h-screen ${themeClasses} transition-colors duration-300`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${isDarkMode ? 'bg-black/90' : 'bg-amber-50/90'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-800' : 'border-amber-200'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Code className={`w-8 h-8 ${accentClasses}`} />
              <h1 className="text-2xl font-bold">The Code Seeker's Journey</h1>
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
      <nav className={`sticky top-16 z-40 ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-800' : 'border-amber-200'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? `${isDarkMode ? 'border-blue-400 text-blue-400' : 'border-amber-600 text-amber-700'} font-medium`
                      : `border-transparent ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-amber-600 hover:text-amber-800'}`
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
        {activeTab === 'home' && <HomeTab isDarkMode={isDarkMode} cardClasses={cardClasses} accentClasses={accentClasses} />}
        {activeTab === 'getting-started' && <GettingStartedTab isDarkMode={isDarkMode} cardClasses={cardClasses} accentClasses={accentClasses} copyToClipboard={copyToClipboard} />}
        {activeTab === 'priority-downloads' && <PriorityDownloadsTab isDarkMode={isDarkMode} cardClasses={cardClasses} accentClasses={accentClasses} copyToClipboard={copyToClipboard} />}
        {activeTab === 'tools-setup' && <ToolsSetupTab isDarkMode={isDarkMode} cardClasses={cardClasses} accentClasses={accentClasses} copyToClipboard={copyToClipboard} />}
        {activeTab === 'learning-path' && <LearningPathTab isDarkMode={isDarkMode} cardClasses={cardClasses} accentClasses={accentClasses} />}
        {activeTab === 'advanced-tips' && <AdvancedTipsTab isDarkMode={isDarkMode} cardClasses={cardClasses} accentClasses={accentClasses} copyToClipboard={copyToClipboard} />}
        {activeTab === 'success-stories' && <SuccessStoriesTab isDarkMode={isDarkMode} cardClasses={cardClasses} accentClasses={accentClasses} />}
        {activeTab === 'resources' && <ResourcesTab isDarkMode={isDarkMode} cardClasses={cardClasses} accentClasses={accentClasses} copyToClipboard={copyToClipboard} />}
      </main>
    </div>
  )
}

function HomeTab({ isDarkMode, cardClasses, accentClasses }: { isDarkMode: boolean, cardClasses: string, accentClasses: string }) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className={`rounded-xl p-8 ${cardClasses} border`}>
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Hey Young Nigerian Tech Professional!</h2>
          <p className={`text-xl ${accentClasses}`}>Got Internet? Download These Videos Fast Before You Get Disconnected!</p>
          <p className="text-lg opacity-80">The Ultimate Survival Guide for Aspiring Nigerian Developers Who Refuse to Let Bad Infrastructure Kill Their Dreams</p>
        </div>
      </div>

      {/* Ada's Story Preview */}
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-full ${isDarkMode ? 'bg-blue-900' : 'bg-amber-100'}`}>
            <Users className={`w-6 h-6 ${accentClasses}`} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3">Meet Ada Okafor</h3>
            <p className="text-lg mb-4">A 23-year-old computer science graduate from University of Lagos who went from frustrated student to senior developer at Paystack in 18 months.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-amber-50'}`}>
                <h4 className="font-semibold mb-2">Ada's Strategy:</h4>
                <p className="text-sm">"When your internet is fast, don't waste it on Instagram. Download knowledge. When your internet is dead, don't complain. Study what you've already downloaded."</p>
              </div>
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-amber-50'}`}>
                <h4 className="font-semibold mb-2">The Results:</h4>
                <ul className="text-sm space-y-1">
                  <li>• 200+ hours of programming courses downloaded</li>
                  <li>• 500+ hours of study during power outages</li>
                  <li>• 15 projects built using offline tutorials</li>
                  <li>• ₦2.5M/year job at a fintech company</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`rounded-xl p-6 ${cardClasses} border text-center`}>
          <Download className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-amber-700'} mx-auto mb-3`} />
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="opacity-80">Hours of Free Programming Education</p>
        </div>
        <div className={`rounded-xl p-6 ${cardClasses} border text-center`}>
          <Youtube className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-amber-700'} mx-auto mb-3`} />
          <h3 className="text-2xl font-bold">15+</h3>
          <p className="opacity-80">Major Educational Platforms</p>
        </div>
        <div className={`rounded-xl p-6 ${cardClasses} border text-center`}>
          <Trophy className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-amber-700'} mx-auto mb-3`} />
          <h3 className="text-2xl font-bold">20+</h3>
          <p className="opacity-80">Download Techniques & Tools</p>
        </div>
      </div>

      {/* The Problem */}
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h3 className="text-2xl font-bold mb-4">The Brutal Reality</h3>
        <p className="text-lg mb-4">You're trying to build a tech career in a country where the internet treats you like a side chick. One minute it's fast, the next minute it's gone.</p>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-amber-100 border-amber-300'} border`}>
          <p className="font-semibold">But here's what successful Nigerian developers know:</p>
          <p className="mt-2">You don't need constant internet to become a world-class programmer. You just need to be SMARTER than your infrastructure.</p>
        </div>
      </div>
    </div>
  )
}

function GettingStartedTab({ isDarkMode, cardClasses }: { isDarkMode: boolean, cardClasses: string, accentClasses: string, copyToClipboard: (text: string) => void }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">The "Internet Window" Strategy</h2>
        <p className="text-lg mb-6">Download Fast, Learn Forever</p>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-yellow-900/20 border-yellow-700' : 'bg-yellow-100 border-yellow-300'} border`}>
          <p className="font-semibold text-yellow-500">⚠️ Critical Strategy</p>
          <p className="mt-2">When your internet is fast, you have maybe 30 minutes to 2 hours before something goes wrong. You need a priority list.</p>
        </div>
      </div>
    </div>
  )
}

function PriorityDownloadsTab({ isDarkMode, cardClasses, copyToClipboard }: { isDarkMode: boolean, cardClasses: string, accentClasses: string, copyToClipboard: (text: string) => void }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">Essential Downloads</h2>
        <p className="text-lg mb-4">What to Grab First When Your Internet is Flying</p>
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-red-900/20 border-red-700' : 'bg-red-100 border-red-300'} border`}>
            <h4 className="font-semibold text-red-500 mb-2">🚨 PRIORITY #1: freeCodeCamp Python</h4>
            <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between`}>
              <span>yt-dlp "https://www.youtube.com/watch?v=rfscVS0vtbw"</span>
              <button onClick={() => copyToClipboard('yt-dlp "https://www.youtube.com/watch?v=rfscVS0vtbw"')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ToolsSetupTab({ isDarkMode, cardClasses, copyToClipboard }: { isDarkMode: boolean, cardClasses: string, accentClasses: string, copyToClipboard: (text: string) => void }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">Download Tools Setup</h2>
        <p className="text-lg mb-4">Your Weapons Against Bad Internet</p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-3">Install yt-dlp:</h4>
            <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'} font-mono text-sm flex items-center justify-between border`}>
              <span>pip install yt-dlp</span>
              <button onClick={() => copyToClipboard('pip install yt-dlp')} className="p-1 hover:bg-gray-600 rounded">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LearningPathTab({ isDarkMode, cardClasses }: { isDarkMode: boolean, cardClasses: string, accentClasses: string }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">The Four Phases of Code Seeker Evolution</h2>
        <p className="text-lg mb-4">Your structured path from beginner to professional developer</p>
        <div className="space-y-6">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-100 border-blue-300'} border`}>
            <h4 className="font-semibold text-blue-500">Phase 1: The Awakening (Weeks 1-4)</h4>
            <p className="mt-2">Building Your Foundation - 33 hours total</p>
          </div>
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-100 border-green-300'} border`}>
            <h4 className="font-semibold text-green-500">Phase 2: The Strengthening (Weeks 5-12)</h4>
            <p className="mt-2">Developing Core Skills - 55 hours total</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AdvancedTipsTab({ isDarkMode, cardClasses }: { isDarkMode: boolean, cardClasses: string, accentClasses: string, copyToClipboard: (text: string) => void }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">Master-Level Download Strategies</h2>
        <p className="text-lg mb-4">Secrets known only to the most experienced Code Seekers</p>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-purple-900/20 border-purple-700' : 'bg-purple-100 border-purple-300'} border`}>
          <p className="font-semibold text-purple-500">🧙‍♂️ Master's Wisdom</p>
          <p className="mt-2">True masters don't download manually. They create systems that download for them.</p>
        </div>
      </div>
    </div>
  )
}

function SuccessStoriesTab({ isDarkMode, cardClasses }: { isDarkMode: boolean, cardClasses: string, accentClasses: string }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">Tales of Triumph</h2>
        <p className="text-lg mb-4">Real success stories from Nigerian developers</p>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-100 border-green-300'} border`}>
          <h4 className="font-semibold text-green-500 mb-2">🌟 Emeka from Enugu</h4>
          <p className="text-sm">Completed CS50 during a two-week blackout and landed a US remote job earning more than his engineering friends.</p>
        </div>
      </div>
    </div>
  )
}

function ResourcesTab({ isDarkMode, cardClasses }: { isDarkMode: boolean, cardClasses: string, accentClasses: string, copyToClipboard: (text: string) => void }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl p-6 ${cardClasses} border`}>
        <h2 className="text-3xl font-bold mb-4">Complete Verified Links Directory</h2>
        <p className="text-lg mb-4">All links tested and confirmed functional ✅</p>
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-amber-50'} border ${isDarkMode ? 'border-gray-700' : 'border-amber-200'}`}>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">freeCodeCamp</h4>
              <span className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-amber-700'}`}>10.9M+ subscribers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`flex-1 p-2 rounded ${isDarkMode ? 'bg-gray-900' : 'bg-white'} font-mono text-sm`}>
                https://www.youtube.com/@freecodecamp
              </div>
              <a href="https://www.youtube.com/@freecodecamp" target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-gray-600">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
