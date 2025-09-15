import React, { useState, useEffect } from 'react';
import {
    Heart,
    User,
    Shield,
    Eye,
    Phone,
    MapPin,
    ArrowLeft,
    Volume2,
    Globe,
    Settings,
    BarChart3,
    Users,
    FileText,
    Plus,
    Clock,
    AlertTriangle,
    CheckCircle,
    Droplets,
    ThermometerSun,
    Activity,
    TrendingUp,
    Mic
} from 'lucide-react';

const SmartHealthMonitor = () => {
    const [currentView, setCurrentView] = useState('home');
    const [userType, setUserType] = useState(null);
    const [loginData, setLoginData] = useState({ phone: '', communityId: '' });
    const [reportData, setReportData] = useState({
        symptoms: [],
        waterOdour: '',
        waterTaste: '',
        waterColour: '',
        fullName: '',
        phoneNumber: '',
        location: ''
    });
    const [alerts] = useState([
        {
            id: 1,
            type: 'High Contamination Detected',
            location: 'Kharghuli Village',
            date: '2024-01-15 at 14:30',
            risk: 'High Risk',
            action: 'Boil water before drinking',
            status: 'active'
        },
        {
            id: 2,
            type: 'Abnormal pH Level',
            location: 'Majuli Island',
            date: '2024-01-15 at 12:45',
            risk: 'Medium Risk',
            action: 'Test water pH levels',
            status: 'active'
        },
        {
            id: 3,
            type: 'High Turbidity',
            location: 'Dibrugarh Town',
            date: '2024-01-14 at 09:15',
            risk: 'Medium Risk',
            action: 'Filter water through cloth',
            status: 'resolved'
        }
    ]);

    const symptoms = [
        { name: 'Fever', icon: '🌡️', color: 'bg-red-100 text-red-600' },
        { name: 'Diarrhea', icon: '💧', color: 'bg-blue-100 text-blue-600' },
        { name: 'Vomiting', icon: '🤢', color: 'bg-green-100 text-green-600' },
        { name: 'Stomach Pain', icon: '😰', color: 'bg-orange-100 text-orange-600' },
        { name: 'Headache', icon: '🤕', color: 'bg-purple-100 text-purple-600' },
        { name: 'Nausea', icon: '😵', color: 'bg-yellow-100 text-yellow-600' }
    ];

    const healthTips = [
        {
            title: 'Safe Drinking Water',
            content: 'Always boil water for at least 1 minute before drinking. Let it cool down naturally.',
            category: 'Water Safety',
            icon: '💧'
        },
        {
            title: 'Hand Washing',
            content: 'Wash hands with soap for 20 seconds, especially before eating and after toilet use.',
            category: 'Hygiene',
            icon: '🧼'
        },
        {
            title: 'Water Storage',
            content: 'Store treated water in clean, covered containers. Use within 24 hours.',
            category: 'Water Safety',
            icon: '🏺'
        },
        {
            title: 'Prevent Diarrhea',
            content: 'Eat freshly cooked food, avoid street food, and maintain clean eating utensils.',
            category: 'Prevention',
            icon: '🍽️'
        }
    ];

    const handleLogin = (type) => {
        setUserType(type);
        if (type === 'guest') {
            setCurrentView('dashboard');
        } else {
            setCurrentView('login');
        }
    };

    const handleLoginSubmit = () => {
        if (loginData.phone || loginData.communityId) {
            setCurrentView(userType === 'admin' ? 'admin-dashboard' : 'dashboard');
        }
    };

    const toggleSymptom = (symptom) => {
        setReportData(prev => ({
            ...prev,
            symptoms: prev.symptoms.includes(symptom)
                ? prev.symptoms.filter(s => s !== symptom)
                : [...prev.symptoms, symptom]
        }));
    };

    const handleReportSubmit = () => {
        alert('Report submitted successfully!');
        setCurrentView('dashboard');
        setReportData({
            symptoms: [],
            waterOdour: '',
            waterTaste: '',
            waterColour: '',
            fullName: '',
            phoneNumber: '',
            location: ''
        });
    };

    const renderHome = () => (
        <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white p-6">
            <div className="max-w-sm mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Smart Health Monitor</h1>
                    <p className="text-gray-600">Rural Health Monitoring System</p>
                    <div className="mt-4">
                        <Volume2 className="w-6 h-6 text-blue-500 mx-auto" />
                    </div>
                </div>

                {/* Language Selector */}
                <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">Language</span>
                        <Globe className="w-5 h-5 text-gray-400" />
                    </div>
                </div>

                {/* Login Options */}
                <div className="space-y-4">
                    <button
                        onClick={() => handleLogin('user')}
                        className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-xl flex items-center space-x-3 shadow-lg"
                    >
                        <User className="w-6 h-6" />
                        <div className="text-left">
                            <div className="font-semibold">User Login</div>
                            <div className="text-sm opacity-90">Report symptoms, view alerts, access health tips</div>
                        </div>
                    </button>

                    <button
                        onClick={() => handleLogin('admin')}
                        className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white p-4 rounded-xl flex items-center space-x-3 shadow-lg"
                    >
                        <Shield className="w-6 h-6" />
                        <div className="text-left">
                            <div className="font-semibold">Admin Login</div>
                            <div className="text-sm opacity-90">Manage data, scientific reports, system overview</div>
                        </div>
                    </button>

                    <button
                        onClick={() => handleLogin('guest')}
                        className="w-full bg-gray-600 text-white p-4 rounded-xl flex items-center space-x-3 shadow-lg"
                    >
                        <Eye className="w-6 h-6" />
                        <div className="text-left">
                            <div className="font-semibold">Guest Mode (Read Only)</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );

    const renderLogin = () => (
        <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white p-6">
            <div className="max-w-sm mx-auto">
                <div className="flex items-center mb-8">
                    <ArrowLeft
                        className="w-6 h-6 text-gray-600 cursor-pointer"
                        onClick={() => setCurrentView('home')}
                    />
                    <h2 className="text-xl font-semibold text-gray-800 ml-4">User Login</h2>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="space-y-4">
                        <div>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                value={loginData.phone}
                                onChange={(e) => setLoginData(prev => ({ ...prev, phone: e.target.value }))}
                            />
                            <Mic className="w-5 h-5 text-teal-500 absolute right-4 top-4" />
                        </div>

                        <div className="text-center text-gray-500">or</div>

                        <div>
                            <input
                                type="text"
                                placeholder="Community ID"
                                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                value={loginData.communityId}
                                onChange={(e) => setLoginData(prev => ({ ...prev, communityId: e.target.value }))}
                            />
                            <Mic className="w-5 h-5 text-teal-500 absolute right-4 top-4" />
                        </div>

                        <button
                            onClick={handleLoginSubmit}
                            className="w-full bg-gray-300 text-gray-600 p-4 rounded-lg font-semibold"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderDashboard = () => (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-xl font-bold">Health Dashboard</h1>
                        <Volume2 className="w-5 h-5" />
                    </div>
                    <div className="flex space-x-2">
                        <Mic className="w-5 h-5" />
                        <Globe className="w-5 h-5" />
                        <Settings className="w-5 h-5" />
                    </div>
                </div>

                {/* Alert Banner */}
                <div className="bg-red-500 rounded-lg p-3 mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    <div>
                        <div className="font-semibold">Global Alerts</div>
                        <div className="text-sm opacity-90">High contamination detected in Majuli Island</div>
                    </div>
                </div>

                {/* Water Quality Card */}
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">Water Quality</h3>
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Safe</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="font-semibold">pH Level</div>
                            <div className="text-2xl font-bold">7.2</div>
                        </div>
                        <div className="text-center">
                            <div className="font-semibold">Turbidity</div>
                            <div className="text-2xl font-bold">3.5 NTU</div>
                        </div>
                        <div className="text-center">
                            <div className="font-semibold">Bacteria Risk</div>
                            <div className="text-2xl font-bold">Low</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-6 space-y-6">
                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => setCurrentView('report')}
                        className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center"
                    >
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                            <FileText className="w-6 h-6 text-red-600" />
                        </div>
                        <div className="font-semibold text-gray-800">Report</div>
                        <div className="text-sm text-gray-600">Symptoms</div>
                    </button>

                    <button
                        onClick={() => setCurrentView('map')}
                        className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center"
                    >
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                            <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="font-semibold text-gray-800">Area Status</div>
                        <div className="text-sm text-gray-600">Map</div>
                    </button>

                    <button
                        onClick={() => setCurrentView('alerts')}
                        className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center"
                    >
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                            <AlertTriangle className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="font-semibold text-gray-800">Recent Alerts</div>
                    </button>

                    <button
                        onClick={() => setCurrentView('tips')}
                        className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center"
                    >
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                            <Heart className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="font-semibold text-gray-800">Health Tips</div>
                    </button>
                </div>

                {/* Sync Status */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-green-600 font-semibold">Synced</span>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Sync Now</button>
                </div>
            </div>
        </div>
    );

    const renderReport = () => (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-red-400 to-red-600 p-6 text-white">
                <div className="flex items-center mb-4">
                    <ArrowLeft
                        className="w-6 h-6 cursor-pointer mr-4"
                        onClick={() => setCurrentView('dashboard')}
                    />
                    <div>
                        <h2 className="text-xl font-bold">Report Symptoms</h2>
                        <h3 className="text-lg">& Water Quality</h3>
                        <p className="text-sm opacity-90">Help us monitor community health</p>
                    </div>
                    <div className="ml-auto flex space-x-2">
                        <Volume2 className="w-5 h-5" />
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Symptoms</h3>
                        <button className="text-blue-500 flex items-center">
                            <Mic className="w-4 h-4 mr-1" />
                            Voice Select Symptoms
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {symptoms.map((symptom) => (
                            <button
                                key={symptom.name}
                                onClick={() => toggleSymptom(symptom.name)}
                                className={`p-4 rounded-xl border-2 transition-all ${reportData.symptoms.includes(symptom.name)
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 bg-white'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center ${symptom.color}`}>
                                    <span className="text-2xl">{symptom.icon}</span>
                                </div>
                                <div className="font-medium text-sm">{symptom.name}</div>
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleReportSubmit}
                    className="w-full bg-gray-300 text-gray-600 p-4 rounded-lg font-semibold mb-6"
                >
                    Submit Report
                </button>

                {/* Water Quality Factors */}
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold mb-3">Water Odour</h4>
                        <div className="grid grid-cols-2 gap-3">
                            {['Normal', 'Unusual', 'Strong', 'Chlorine'].map(option => (
                                <button
                                    key={option}
                                    onClick={() => setReportData(prev => ({ ...prev, waterOdour: option }))}
                                    className={`p-3 rounded-lg border ${reportData.waterOdour === option
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 bg-gray-50'
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Water Taste</h4>
                        <div className="grid grid-cols-2 gap-3">
                            {['Normal', 'Metallic', 'Sweet', 'Bitter', 'Salty'].map(option => (
                                <button
                                    key={option}
                                    onClick={() => setReportData(prev => ({ ...prev, waterTaste: option }))}
                                    className={`p-3 rounded-lg border ${reportData.waterTaste === option
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 bg-gray-50'
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Water Colour</h4>
                        <div className="grid grid-cols-2 gap-3">
                            {['Clear', 'Cloudy', 'Yellow', 'Brown'].map(option => (
                                <button
                                    key={option}
                                    onClick={() => setReportData(prev => ({ ...prev, waterColour: option }))}
                                    className={`p-3 rounded-lg border ${reportData.waterColour === option
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 bg-gray-50'
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Personal Information */}
                <div className="mt-8 space-y-4">
                    <h4 className="font-semibold">Personal Information</h4>

                    <div>
                        <label className="block text-sm text-gray-600 mb-2">Full Name *</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full p-3 border border-gray-200 rounded-lg"
                            value={reportData.fullName}
                            onChange={(e) => setReportData(prev => ({ ...prev, fullName: e.target.value }))}
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-2">Phone Number *</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full p-3 border border-gray-200 rounded-lg"
                            value={reportData.phoneNumber}
                            onChange={(e) => setReportData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-2">Location</label>
                        <input
                            type="text"
                            placeholder="Village/Area name"
                            className="w-full p-3 border border-gray-200 rounded-lg"
                            value={reportData.location}
                            onChange={(e) => setReportData(prev => ({ ...prev, location: e.target.value }))}
                        />
                    </div>

                    <button
                        onClick={handleReportSubmit}
                        className="w-full bg-gray-300 text-gray-600 p-4 rounded-lg font-semibold"
                    >
                        Submit Report
                    </button>
                </div>
            </div>
        </div>
    );

    const renderMap = () => (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6 text-white">
                <div className="flex items-center mb-4">
                    <ArrowLeft
                        className="w-6 h-6 cursor-pointer mr-4"
                        onClick={() => setCurrentView('dashboard')}
                    />
                    <div>
                        <h2 className="text-xl font-bold">Area Status Map</h2>
                        <p className="text-sm opacity-90">Water quality status across Northeast India</p>
                    </div>
                </div>
            </div>

            <div className="p-6">
                {/* Map Placeholder */}
                <div className="bg-yellow-100 rounded-xl p-8 mb-6 relative overflow-hidden">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">ASSAM</h3>
                        <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                        </div>
                        <div className="mt-4 text-sm text-gray-600">Interactive Map View</div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white rounded-lg p-2 shadow-sm">
                        <MapPin className="w-5 h-5 text-gray-600" />
                    </div>
                </div>

                {/* Map Legend */}
                <div>
                    <h4 className="font-semibold mb-4">Map Legend</h4>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                            <div>
                                <div className="font-medium">Contaminated Water</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                            <div>
                                <div className="font-medium">Safe Areas</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-gray-400 rounded-full mr-3"></div>
                            <div>
                                <div className="font-medium">Government/NGO Working Areas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderAlerts = () => (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-6 text-white">
                <div className="flex items-center mb-4">
                    <ArrowLeft
                        className="w-6 h-6 cursor-pointer mr-4"
                        onClick={() => setCurrentView('dashboard')}
                    />
                    <div>
                        <h2 className="text-xl font-bold">Health Alerts</h2>
                        <p className="text-sm opacity-90">Water quality warnings and notifications</p>
                    </div>
                </div>

                <div className="flex space-x-2 mb-4">
                    <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-medium">All Alerts</button>
                    <button className="text-white px-4 py-2 rounded-lg">Active Alerts</button>
                    <button className="text-white px-4 py-2 rounded-lg">Resolved Alerts</button>
                </div>
            </div>

            <div className="p-6 space-y-4">
                {alerts.map((alert) => (
                    <div key={alert.id} className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <div className="font-semibold text-gray-800">{alert.type}</div>
                                <div className="flex items-center text-sm text-gray-600 mt-1">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {alert.location}
                                </div>
                                <div className="flex items-center text-sm text-gray-600 mt-1">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {alert.date}
                                </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${alert.risk === 'High Risk'
                                ? 'bg-red-100 text-red-600'
                                : alert.risk === 'Medium Risk'
                                    ? 'bg-yellow-100 text-yellow-600'
                                    : 'bg-green-100 text-green-600'
                                }`}>
                                {alert.risk}
                            </span>
                        </div>

                        <div className="mb-3">
                            <div className="text-sm text-gray-600 mb-1">Suggested Action:</div>
                            <div className="text-sm font-medium">{alert.action}</div>
                        </div>

                        {alert.status === 'active' && (
                            <button className="w-full bg-gray-100 text-gray-600 py-2 rounded-lg">
                                Mark as Resolved
                            </button>
                        )}
                        {alert.status === 'resolved' && (
                            <div className="flex items-center text-green-600">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                <span className="text-sm font-medium">Resolved</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    const renderTips = () => (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 text-white">
                <div className="flex items-center mb-4">
                    <ArrowLeft
                        className="w-6 h-6 cursor-pointer mr-4"
                        onClick={() => setCurrentView('dashboard')}
                    />
                    <div>
                        <h2 className="text-xl font-bold">Health Education</h2>
                        <p className="text-sm opacity-90">Essential health and hygiene tips</p>
                    </div>
                    <div className="ml-auto flex space-x-2">
                        <Volume2 className="w-5 h-5" />
                        <Globe className="w-5 h-5" />
                    </div>
                </div>

                <div className="flex space-x-2 mb-4 overflow-x-auto">
                    <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium whitespace-nowrap">All Tips</button>
                    <button className="text-white px-4 py-2 rounded-lg whitespace-nowrap">Water Safety</button>
                    <button className="text-white px-4 py-2 rounded-lg whitespace-nowrap">Hygiene</button>
                    <button className="text-white px-4 py-2 rounded-lg whitespace-nowrap">Prevention</button>
                </div>
            </div>

            <div className="p-6 space-y-4">
                {healthTips.map((tip, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">{tip.icon}</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold text-gray-800">{tip.title}</h4>
                                    <Volume2 className="w-4 h-4 text-gray-400" />
                                </div>
                                <p className="text-sm text-gray-600 mb-3">{tip.content}</p>
                                <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                                    {tip.category}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Important Reminder */}
                <div className="bg-blue-50 rounded-xl p-4 mt-6">
                    <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-800 mb-1">Important Reminder</h4>
                            <p className="text-sm text-blue-700">
                                These tips work best when practiced together. Regular water testing and
                                maintaining good hygiene habits can prevent most water-related illnesses in
                                rural communities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-green-50 rounded-xl p-4 flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-green-600" />
                    <div>
                        <h4 className="font-semibold text-green-800">Emergency Contact</h4>
                        <p className="text-sm text-green-700">24/7 Health Helpline: 102</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderAdminDashboard = () => (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                    <div className="flex space-x-2">
                        <Globe className="w-5 h-5" />
                        <Settings className="w-5 h-5" />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                        <div className="text-3xl font-bold">24</div>
                        <div className="text-sm opacity-90">Critical Alerts</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold">1,247</div>
                        <div className="text-sm opacity-90">Active Users</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold">98%</div>
                        <div className="text-sm opacity-90">Data Sync Status</div>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => setCurrentView('water-reports')}
                        className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                            <Droplets className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="font-semibold text-gray-800">Water Reports</div>
                    </button>

                    <button
                        onClick={() => setCurrentView('user-reports')}
                        className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center"
                    >
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                            <Users className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="font-semibold text-gray-800">User Reports</div>
                    </button>

                    <button
                        onClick={() => setCurrentView('analytics')}
                        className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center"
                    >
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                            <BarChart3 className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="font-semibold text-gray-800">Analytics</div>
                    </button>

                    <button className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                            <Settings className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="font-semibold text-gray-800">Settings</div>
                    </button>
                </div>
            </div>
        </div>
    );

    const renderWaterReports = () => (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 text-white">
                <div className="flex items-center mb-4">
                    <ArrowLeft
                        className="w-6 h-6 cursor-pointer mr-4"
                        onClick={() => setCurrentView('admin-dashboard')}
                    />
                    <div>
                        <h2 className="text-xl font-bold">Water Reports</h2>
                    </div>
                    <div className="ml-auto flex space-x-2">
                        <Volume2 className="w-5 h-5" />
                        <Globe className="w-5 h-5" />
                    </div>
                </div>

                <div className="flex space-x-2 mb-4 overflow-x-auto">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium whitespace-nowrap">All Reports</button>
                    <button className="text-white px-4 py-2 rounded-lg whitespace-nowrap">Critical</button>
                    <button className="text-white px-4 py-2 rounded-lg whitespace-nowrap">Normal</button>
                    <button className="text-white px-4 py-2 rounded-lg whitespace-nowrap">Pending Review</button>
                </div>

                <button className="w-full bg-blue-500 text-white p-3 rounded-lg flex items-center justify-center">
                    <Plus className="w-5 h-5 mr-2" />
                    Add New Report
                </button>
            </div>

            <div className="p-6 space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h3 className="font-semibold">Majuli Island - Well #1</h3>
                            <p className="text-sm text-gray-600">2024-01-15 • 10:30 AM</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-1">Critical</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">IoT Sensor</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <div className="text-sm text-gray-600">pH Level:</div>
                            <div className="font-semibold">6.2</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-600">Colour:</div>
                            <div className="font-semibold">Yellow</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-600">Taste:</div>
                            <div className="font-semibold">Metallic</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-600">Turbidity (NTU):</div>
                            <div className="font-semibold">8.5 NTU</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-600">Odour:</div>
                            <div className="font-semibold">Chlorine</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-600">Temperature (°C):</div>
                            <div className="font-semibold">24.5°C</div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="text-sm text-gray-600 mb-1">TDS (mg/L):</div>
                        <div className="font-semibold">450 mg/L</div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h3 className="font-semibold">Karbi Anglong - Borehole #3</h3>
                            <p className="text-sm text-gray-600">2024-01-14 • 2:15 PM</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-1">Normal</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Manual Test</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <div className="text-sm text-gray-600">pH Level:</div>
                            <div className="font-semibold">7.1</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-600">Colour:</div>
                            <div className="font-semibold">Colorless</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-600">Taste:</div>
                            <div className="font-semibold">Normal</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-600">Turbidity (NTU):</div>
                            <div className="font-semibold">2.1 NTU</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-600">Odour:</div>
                            <div className="font-semibold">None</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-600">Temperature (°C):</div>
                            <div className="font-semibold">23.8°C</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderUserReports = () => (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 text-white">
                <div className="flex items-center mb-4">
                    <ArrowLeft
                        className="w-6 h-6 cursor-pointer mr-4"
                        onClick={() => setCurrentView('admin-dashboard')}
                    />
                    <div>
                        <h2 className="text-xl font-bold">User Reports</h2>
                    </div>
                    <div className="ml-auto flex space-x-2">
                        <Volume2 className="w-5 h-5" />
                        <Globe className="w-5 h-5" />
                    </div>
                </div>

                <div className="flex space-x-2 mb-4 overflow-x-auto">
                    <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium whitespace-nowrap">All Reports</button>
                    <button className="text-white px-4 py-2 rounded-lg whitespace-nowrap">Symptoms</button>
                    <button className="text-white px-4 py-2 rounded-lg whitespace-nowrap">Water Quality</button>
                    <button className="text-white px-4 py-2 rounded-lg whitespace-nowrap">Urgent</button>
                </div>
            </div>

            <div className="p-6 space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h3 className="font-semibold">Ravi Kumar</h3>
                            <p className="text-sm text-gray-600">Majuli Island, Assam</p>
                            <p className="text-sm text-gray-600">2024-01-15 • 09:45 AM</p>
                        </div>
                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">Urgent</span>
                    </div>

                    <div className="mb-3">
                        <div className="text-sm text-gray-600 mb-1">Symptoms Reported:</div>
                        <div className="font-semibold">Fever, Diarrhea, Stomach Pain</div>
                    </div>

                    <div className="mb-3">
                        <div className="text-sm text-gray-600 mb-1">Contact Info:</div>
                        <div className="font-semibold">+91 9876543210</div>
                    </div>

                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg">View Details</button>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h3 className="font-semibold">Priya Sharma</h3>
                            <p className="text-sm text-gray-600">Karbi Anglong, Assam</p>
                            <p className="text-sm text-gray-600">2024-01-14 • 03:20 PM</p>
                        </div>
                        <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">Pending</span>
                    </div>

                    <div className="mb-3">
                        <div className="text-sm text-gray-600 mb-1">Symptoms Reported:</div>
                        <div className="font-semibold">Headache, Nausea</div>
                    </div>

                    <div className="mb-3">
                        <div className="text-sm text-gray-600 mb-1">Contact Info:</div>
                        <div className="font-semibold">+91 8765432109</div>
                    </div>

                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg">View Details</button>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h3 className="font-semibold">Anuj Das</h3>
                            <p className="text-sm text-gray-600">Guwahati, Assam</p>
                            <p className="text-sm text-gray-600">2024-01-13 • 11:10 AM</p>
                        </div>
                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">Urgent</span>
                    </div>

                    <div className="mb-3">
                        <div className="text-sm text-gray-600 mb-1">Symptoms Reported:</div>
                        <div className="font-semibold">Severe Vomiting, Dehydration</div>
                    </div>

                    <div className="mb-3">
                        <div className="text-sm text-gray-600 mb-1">Contact Info:</div>
                        <div className="font-semibold">+91 7654321098</div>
                    </div>

                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg">View Details</button>
                </div>
            </div>
        </div>
    );

    const renderAnalytics = () => (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6 text-white">
                <div className="flex items-center mb-4">
                    <ArrowLeft
                        className="w-6 h-6 cursor-pointer mr-4"
                        onClick={() => setCurrentView('admin-dashboard')}
                    />
                    <div>
                        <h2 className="text-xl font-bold">Analytics Dashboard</h2>
                    </div>
                    <div className="ml-auto flex space-x-2">
                        <Volume2 className="w-5 h-5" />
                        <Globe className="w-5 h-5" />
                    </div>
                </div>

                <div className="flex space-x-2 mb-4">
                    <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium">Last 7 Days</button>
                    <button className="text-white px-4 py-2 rounded-lg">Last 30 Days</button>
                    <button className="text-white px-4 py-2 rounded-lg">Last 90 Days</button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                        <div className="text-3xl font-bold">1,247</div>
                        <div className="text-sm opacity-90">Total Reports</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold">24</div>
                        <div className="text-sm opacity-90">Critical Alerts</div>
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Users className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="text-2xl font-bold">892</div>
                        <div className="text-sm text-gray-600">Active Users</div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold">2.4h</div>
                        <div className="text-sm text-gray-600">Avg Response Time</div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold mb-4">Health Trends Visualization</h3>
                    <div className="h-48 bg-gradient-to-t from-purple-100 to-purple-50 rounded-lg flex items-end justify-center p-4">
                        <div className="flex items-end space-x-2 h-full">
                            {[40, 65, 45, 80, 55, 90, 75, 60, 85, 70, 95, 80].map((height, index) => (
                                <div
                                    key={index}
                                    className="bg-purple-500 rounded-t"
                                    style={{
                                        width: '12px',
                                        height: `${height}%`
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                    </div>
                </div>
            </div>
        </div>
    );

    // Main render function
    return (
        <div className="max-w-sm mx-auto bg-white min-h-screen">
            {currentView === 'home' && renderHome()}
            {currentView === 'login' && renderLogin()}
            {currentView === 'dashboard' && renderDashboard()}
            {currentView === 'report' && renderReport()}
            {currentView === 'map' && renderMap()}
            {currentView === 'alerts' && renderAlerts()}
            {currentView === 'tips' && renderTips()}
            {currentView === 'admin-dashboard' && renderAdminDashboard()}
            {currentView === 'water-reports' && renderWaterReports()}
            {currentView === 'user-reports' && renderUserReports()}
            {currentView === 'analytics' && renderAnalytics()}
        </div>
    );
};

export default SmartHealthMonitor